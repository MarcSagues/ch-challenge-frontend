import React, { useState } from "react";
import { useRegistration } from "../hooks/useRegistration";

export default function Login({ setIsLogged }: { setIsLogged: Function }) {
	return (
		<div className="bg-white text-black rounded-md p-5">
			<RegisterForm swap={setIsLogged} />
		</div>
	);
}

const RegisterForm = ({ swap }: { swap: Function }) => {
	const { setUsername, setPassword, register } = useRegistration();
	const onClick = () => {
		register();
		swap(true);
	};
	return (
		<>
			<h2>Register</h2>
			<form>
				<p>Username</p>
				<input
					className="text-white"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<p>Password</p>
				<input
					className="text-white"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<div>
					<button type="submit" onClick={onClick}>
						REGISTER
					</button>
				</div>
			</form>
		</>
	);
};
