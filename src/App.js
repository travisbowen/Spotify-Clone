import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		// Clears url for security
		window.location.hash = "";

		const _token = hash.access_token;
		if (_token) {
			setToken(_token);
		}
	}, []);

	return <div className='app'>{token ? "Logged in" : <Login />}</div>;
}

export default App;
