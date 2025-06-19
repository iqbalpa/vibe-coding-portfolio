import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
	const scrollToAbout = () => {
		const element = document.querySelector("#about");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
			</div>

			<div className="container-max-width section-padding relative z-10">
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
							Hi, I'm <span className="gradient-text">John Doe</span>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
							Full Stack Developer & UI/UX Designer
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
							I craft beautiful, functional, and user-centered digital experiences. With a passion for
							clean code and innovative design, I bring ideas to life through modern web technologies.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
					>
						<a href="#contact" className="btn-primary">
							<Mail className="w-5 h-5" />
							Get In Touch
						</a>
						<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
							<Download className="w-5 h-5" />
							Download Resume
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="flex justify-center"
					>
						<button
							onClick={scrollToAbout}
							className="text-gray-400 hover:text-primary-600 transition-colors duration-200 animate-bounce"
						>
							<ChevronDown className="w-8 h-8" />
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
