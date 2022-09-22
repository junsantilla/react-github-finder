import { BrowserRouter as Rounter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
	return (
		<Rounter>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
			</div>
			<main>Content</main>
		</Rounter>
	);
}

export default App;
