import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // bcrypt modülünü ekleyin
import bcryptjs from "bcryptjs"; // bcrypt modülünü ekleyin
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password || email === "" || password === "") {
		next(errorHandler(400, "All fields are required"));
	}
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) {
			return next(errorHandler(404, "User not found"));
		}
		const validPassword = bcryptjs.compareSync(
			password,
			validUser.password
		);
		if (!validPassword) {
			return next(errorHandler(400, "Invalid password"));
		}
		const token = jwt.sign(
			{
				id: validUser._id,
			},
			process.env.JWT_SECRET
		);
		const { password: pass, ...rest } = validUser._doc;
		res.status(200)
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.json(rest);
	} catch (error) {
		next(error);
	}
};
