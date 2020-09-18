/* 
  https://developer.spotify.com/documentation
  /web-playback-sdk/quick-start/# 
*/

// Endpoint for Spotify's auth
export const authEndpoint = "https://accounts.spotify.com/authorize";

// After auth redirects back to web app
const redirectUri = "http://localhost:3000/";

// Spotify dashboard for developers client id
const clientId = "3910c483035c475ebf049a802d6b58a0";

// User Permissions
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

// Final login url passed to login button
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20",
)}&response_type=token&show_dialog=true`;
