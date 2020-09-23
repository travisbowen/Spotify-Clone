import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to each component
export const StateProvider = ({ initialState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull info from the data layer
export const useStateValue = () => useContext(StateContext);
