import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Alert from "./components/layout/Alert.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Rounter>
					<div className="flex flex-col justify-between h-screen">
						<Navbar />

						<main className="container mx-auto px-4 pb-12">
							<Alert />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route
									path="/notfound"
									element={<NotFound />}
								/>
								<Route path="/*" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Rounter>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
