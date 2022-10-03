import React from "react";
import spinner from "./assets/spinner.gif";

function Spinner() {
	return (
		<div className="w-100 mx-auto">
			<img
				width={180}
				classname="text-center mx-auto"
				src={spinner}
				alt="Loading..."
			/>
		</div>
	);
}

export default Spinner;
