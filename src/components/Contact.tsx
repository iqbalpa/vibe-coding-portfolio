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
			color: "hover:text-gray-900",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://linkedin.com/in/johndoe",
			color: "hover:text-blue-600",
		},
		{
			icon: Twitter,
			label: "Twitter",
			href: "https://twitter.com/johndoe",
			color: "hover:text-blue-400",
		},
	];

	return (
		<section id="contact" className="section-padding bg-white">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
						<div className="bg-gray-50 p-8 rounded-lg">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
											placeholder="Your name"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
										Subject *
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
										placeholder="What's this about?"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical"
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
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<motion.a
										key={info.label}
										href={info.href}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
									>
										<div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
											<info.icon className="w-6 h-6 text-primary-600" />
										</div>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-500">{info.label}</p>
											<p className="text-lg font-semibold text-gray-900">{info.value}</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h4>

							<div className="flex space-x-6">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1 }}
										className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-200`}
									>
										<social.icon className="w-6 h-6" />
									</motion.a>
								))}
							</div>
						</div>

						<div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg">
							<h4 className="text-lg font-bold text-gray-900 mb-2">
								Let's Build Something Amazing Together!
							</h4>
							<p className="text-gray-600">
								I'm always excited to work on new projects and collaborate with talented people. Whether
								you have a project in mind or just want to chat about technology, don't hesitate to
								reach out!
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
