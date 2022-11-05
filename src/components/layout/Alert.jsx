import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
	const { alert } = useContext(AlertContext);
	return (
		alert !== null && (
			<div className="flex items-start mb-4 space-x-2">
				<p className="strong">{alert.msg}</p>
			</div>
		)
	);
}

export default Alert;
