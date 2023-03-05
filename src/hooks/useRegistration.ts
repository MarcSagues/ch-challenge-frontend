import { useState } from "react";
export const useRegistration = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const register = async () => {
		try {
			await fetch("http://localhost:4000/users", {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			})
				.then((response) => response.json())
				.then((res) => console.log(res));
		} catch (error) {
			return null;
		}
	};

	return { setUsername, setPassword, register };
};
