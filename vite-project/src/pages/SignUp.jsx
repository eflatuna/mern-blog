"use strict";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	// console.log(formData);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
		} catch (error) {}
	};

	return (
		<div className="min-h-screen mt-20">
			<div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
				{/* left */}
				<div className="flex-1">
					<Link to="/" className="font-bold dark:text-white text-4xl">
						<span className="px-2 py-1 e">E -</span>
						Blog
					</Link>
					<p className="text-sm mt-5">
						This is a demo project. You can sign up with your email
						and password or with Google.
					</p>
				</div>
				{/* right */}
				<div className="flex-1">
					<form
						className="flex flex-col gap-4"
						onSubmit={handleSubmit}
					>
						<div>
							<Label value="Your username" />
							<TextInput
								type="text"
								placeholder="Username"
								id="username"
								onChange={handleChange}
							/>
						</div>
						<div className="">
							<Label value="Your email" />
							<TextInput
								type="email"
								placeholder="name@company.com"
								id="email"
								onChange={handleChange}
							/>
						</div>
						<div className="">
							<Label value="Your password" />
							<TextInput
								type="password"
								placeholder="Password"
								id="password"
								onChange={handleChange}
							/>
						</div>
						<Button gradientDuoTone="purpleToPink" type="submit">
							Sign Up
						</Button>
					</form>
					<div className="flex gap-2 text-sm mt-5">
						<span>Have an account?</span>
						<Link to="/sign-in" className="text-blue-500">
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
