import { BrowserRouter as Rounter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
	return (
		<Rounter>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />

				<main className="container mx-auto px-4 pb-12">Content</main>
				<Footer />
			</div>
		</Rounter>
	);
}

export default App;
