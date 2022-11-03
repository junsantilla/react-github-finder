import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer.js";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const initialState = null;

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// Set alert
	const setAlert = (msg, type) => {
		dispatch({
			type: "SET_ALERT",
			payload: { msg, type },
		});

		setTimeout(() => {
			dispatch({ type: "REMOVE_ALERT" });
		}, 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				users: state,
				setAlert,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
