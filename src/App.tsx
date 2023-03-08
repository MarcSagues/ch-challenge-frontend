import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Login from "./pages/Login";
import firebase from "./Firebase";

function App() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<div className="flex justify-center items-center w-screen">
			{isLogged ? <Home /> : <Login setIsLogged={setIsLogged} />}
		</div>
	);
}

export default App;
