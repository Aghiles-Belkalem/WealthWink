import { Routes, Route } from "react-router-dom";
import Services from "./pages/services";
import Home from "./pages/homePage";
import Footer from "./components/footer/footer";
import About from "./pages/about";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<>
			<ScrollToTop />

			{/* Ce conteneur doit avoir l'id scroll-container */}
			<main
				id="scroll-container"
				style={{
					height: "100vh",
					overflowY: "auto",
					scrollBehavior: "smooth",
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</main>
		</>
	);
}

export default App;
