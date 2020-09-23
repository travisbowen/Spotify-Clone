// Initial state of the data layer
export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	song: null,
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
		default:
			return state;
	}
};

export default reducer;
