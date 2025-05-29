import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Scroll window
		window.scrollTo(0, 0);

		// Scroll un conteneur spécifique si besoin
		const scrollContainer = document.getElementById("scroll-container");
		if (scrollContainer) {
			scrollContainer.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
}
