interface ContactFormProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	loading: boolean;
}

export const ContactForm = ({ onSubmit, loading }: ContactFormProps) => (
	<form
		className="contact-form"
		onSubmit={onSubmit}
		action="https://formsubmit.co/jamesnabil94@gmail.com"
		method="POST"
	>
		<input type="hidden" name="_captcha" value="false" />
		<input type="hidden" name="_next" value="https://wealthwink-vision.vercel.app/" />

		<label htmlFor="name">Name</label>
		<input id="name" name="name" type="text" placeholder="Your Name" required />

		<label htmlFor="email">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="Your Email"
			required
		/>

		<label htmlFor="subject">Subject</label>
		<input
			id="subject"
			name="subject"
			type="text"
			placeholder="Subject (optional)"
		/>

		<label htmlFor="message">Message</label>
		<textarea
			id="message"
			name="message"
			rows={5}
			placeholder="Your Message"
			required
		/>

		<button type="submit" disabled={loading} aria-busy={loading}>
			{loading ? <span className="loader" aria-hidden="true" /> : "Send"}
		</button>
	</form>
);
