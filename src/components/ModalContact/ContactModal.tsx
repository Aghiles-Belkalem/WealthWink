import { useState, type FormEvent } from "react";
import { Modal } from "./modal";
import { ContactForm } from "./contactForm";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // très important !

		console.log("Form submitted");
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
			console.log("Submission successful");

			setTimeout(() => {
				console.log("Closing modal");
				setSubmitted(false);
				onClose();
			}, 3000);
		}, 5000);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{submitted ? (
				<p role="alert" className="success-message">
					✅ Message sent! We'll get back to you soon.
				</p>
			) : (
				<ContactForm onSubmit={handleSubmit} loading={loading} />
			)}
		</Modal>
	);
};
