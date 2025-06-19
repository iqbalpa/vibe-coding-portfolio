import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/johndoe",
			label: "GitHub",
		},
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/johndoe",
			label: "LinkedIn",
		},
		{
			icon: Twitter,
			href: "https://twitter.com/johndoe",
			label: "Twitter",
		},
		{
			icon: Mail,
			href: "mailto:hello@johndoe.dev",
			label: "Email",
		},
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
			<div className="container-max-width">
				<div className="py-12">
					<div className="grid md:grid-cols-3 gap-8 items-center">
						{/* Brand */}
						<div>
							<button
								onClick={scrollToTop}
								className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity duration-200"
							>
								John Doe
							</button>
							<p className="text-gray-600 dark:text-gray-400 mt-2">Full Stack Developer & Designer</p>
						</div>

						{/* Social Links */}
						<div className="flex justify-center md:justify-center">
							<div className="flex space-x-6">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
										aria-label={social.label}
									>
										<social.icon className="w-5 h-5" />
									</a>
								))}
							</div>
						</div>

						{/* Contact Info */}
						<div className="text-center md:text-right">
							<p className="text-gray-600 dark:text-gray-400 text-sm">Available for new opportunities</p>
							<a
								href="mailto:hello@johndoe.dev"
								className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
							>
								hello@johndoe.dev
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-300 dark:border-gray-700 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
							<span>© {currentYear} John Doe. Made with</span>
							<Heart className="w-4 h-4 text-red-500 fill-current" />
							<span>using React & TypeScript</span>
						</div>

						<div className="flex items-center gap-6 text-sm">
							<button
								onClick={scrollToTop}
								className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
							>
								Back to top ↑
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
