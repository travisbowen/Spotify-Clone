import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./utils/StateProvider";

// Instance of spotify
const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		// Clears url for security
		window.location.hash = "";

		const _token = hash.access_token;
		if (_token) {
			setToken(_token);
			// Giving access token to spotify instance
			spotify.setAccessToken(_token);

			// Retrieves user's account
			spotify.getMe().then((user) => {
				console.log(user);

				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
		}
	}, []);

	console.log("user", user);

	return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
