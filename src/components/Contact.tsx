import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Here you would typically send the form data to your backend
		console.log("Form submitted:", formData);

		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});

		setIsSubmitting(false);
		alert("Thank you for your message! I'll get back to you soon.");
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "hello@johndoe.dev",
			href: "mailto:hello@johndoe.dev",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+1 (555) 123-4567",
			href: "tel:+15551234567",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "San Francisco, CA",
			href: "https://maps.google.com/?q=San+Francisco,+CA",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/johndoe",
			color: "hover:text-gray-900 dark:hover:text-white",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://linkedin.com/in/johndoe",
			color: "hover:text-blue-600 dark:hover:text-blue-400",
		},
		{
			icon: Twitter,
			label: "Twitter",
			href: "https://twitter.com/johndoe",
			color: "hover:text-blue-400 dark:hover:text-blue-300",
		},
	];

	return (
		<section id="contact" className="section-padding bg-white dark:bg-gray-900">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						I'm always interested in new opportunities and exciting projects. Let's discuss how we can work
						together!
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border dark:border-gray-700/50">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors duration-200"
											placeholder="Your name"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors duration-200"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Subject *
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors duration-200"
										placeholder="What's this about?"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors duration-200 resize-vertical"
										placeholder="Tell me about your project or idea..."
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSubmitting ? (
										<>
											<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
											Sending...
										</>
									) : (
										<>
											<Send className="w-5 h-5" />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's connect</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-8">
								Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to
								hear from you. Feel free to reach out through any of the channels below.
							</p>

							<div className="space-y-6">
								{contactInfo.map((info) => (
									<motion.a
										key={info.label}
										href={info.href}
										target={info.label === "Location" ? "_blank" : undefined}
										rel={info.label === "Location" ? "noopener noreferrer" : undefined}
										whileHover={{ x: 5 }}
										className="flex items-center group text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
									>
										<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
											<info.icon className="w-5 h-5" />
										</div>
										<div>
											<p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
											<p className="font-medium">{info.value}</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow me</h4>
							<div className="flex space-x-4">
								{socialLinks.map((social) => (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
									>
										<social.icon className="w-5 h-5" />
									</motion.a>
								))}
							</div>
						</div>

						{/* Additional Info */}
						<div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-6 rounded-lg border dark:border-gray-700/50">
							<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h4>
							<p className="text-gray-600 dark:text-gray-300 text-sm">
								I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via
								phone or LinkedIn.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
