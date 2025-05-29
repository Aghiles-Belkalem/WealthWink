import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactModal } from "../ModalContact/ContactModal";
import "./footer.css";

export default function Footer() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<footer className="footer" aria-label="Site Footer">
			<section className="footer-layout">
				<article className="footer-branding">
					<h2>WealthWink</h2>
					<p>Empowering your financial journey sustainably.</p>
				</article>

				<nav className="footer-nav" aria-label="Footer Navigation">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/services">Services</Link></li>
						<li><Link to="/about">About</Link></li>
						<li>
							<button
								type="button"
								className="contact-footer-btn"
								onClick={() => setIsModalOpen(true)}
								aria-label="Open contact form"
							>
								Contact Us
							</button>
						</li>
					</ul>
				</nav>
			</section>

			<ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

			<section className="footer-bottom" aria-label="Legal & Copyright">
				<p>&copy; {new Date().getFullYear()} WealthWink — All rights reserved.</p>
			</section>
		</footer>
	);
}

