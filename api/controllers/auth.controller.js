import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // bcrypt modülünü ekleyin

export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		return res.status(400).json({ message: "All fields are required!" });
	}

	try {
		// Mevcut kullanıcı kontrolü
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists!" });
		}

		// Şifreyi hash'leme
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});

		await newUser.save();
		res.json({ message: "Signup successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
};
