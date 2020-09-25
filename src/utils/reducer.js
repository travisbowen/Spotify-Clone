// Initial state of the data layer
export const initialState = {
	user: null,
	token: "",
	playlists: [],
	playing: false,
	song: null,
	spotifyObj: null,
};

// State of the data layer and action how it reacts
const reducer = (state, action) => {
	console.log("Action -->", action);
	switch (action.type) {
		case "SET_USER":
			return {
				// Keeps whats in current state
				...state,
				// Update user
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				// Keeps whats in current state
				...state,
				// Update token
				token: action.token,
			};
		case "SET_SPOTIFY_OBJ":
			return {
				// Keeps whats in current state
				...state,
				// Update spotify obj
				spotifyObj: action.spotifyObj,
			};
		case "SET_PLAYLISTS":
			return {
				// Keeps whats in current state
				...state,
				// Update spotify obj
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
