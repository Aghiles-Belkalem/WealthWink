import type { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<section
			className="modal-overlay"
			role="dialog"
			aria-modal="true"
			onClick={onClose}
		>
			<article className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					type="button"
					className="modal-close"
					onClick={onClose}
					aria-label="Close"
				>
					×
				</button>
				{children}
			</article>
		</section>
	);
};
