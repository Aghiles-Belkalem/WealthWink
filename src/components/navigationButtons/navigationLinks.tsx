import { Link } from "react-router-dom";
import { useState } from "react";
import { ContactModal } from "../ModalContact/ContactModal";
import "./button.css"; // Assure-toi que le CSS est bien clean et responsive

export default function NavigationLinks() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<article className="nav-buttons">
				<Link className="button-link" to="/services">
					Services
				</Link>

				<button
					type="button"
					className="button-link"
					onClick={() => setIsModalOpen(true)}
				>
					Contact
				</button>
			</article>

			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}
