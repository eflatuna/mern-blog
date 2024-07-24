import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // bcrypt modülünü ekleyin
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		next(errorHandler, (400, "All fields ara required"));
	}

	try {
		// Mevcut kullanıcı kontrolü
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			next(errorHandler, (400, "User already exists!"));
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
		next(error);
	}
};
