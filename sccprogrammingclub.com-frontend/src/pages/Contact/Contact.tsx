import "./Contact.css";

export const Contact: React.FC = () => {
	function handleSubmit() {}

	return (
		<div className="contact-page">
			<h2>Contact Us</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input type="text" name="name" required />
				</label>
				<label>
					Email
					<input type="email" name="email" required />
				</label>
				<label>
					Message
					<textarea name="message" rows={5} required />
				</label>
				<button type="submit">Send Message</button>
			</form>

			{status === "SUCCESS" && (
				<p className="form-status success">Thanks! I’ll be in touch soon.</p>
			)}
			{status === "ERROR" && (
				<p className="form-status error">
					Oops! Something went wrong. Please try again.
				</p>
			)}
		</div>
	);
};
