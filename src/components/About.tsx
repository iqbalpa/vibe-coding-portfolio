import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Users } from "lucide-react";

const About = () => {
	const features = [
		{
			icon: Code,
			title: "Clean Code",
			description: "Writing maintainable, scalable, and well-documented code following best practices.",
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			description: "Creating intuitive and visually appealing user interfaces with attention to detail.",
		},
		{
			icon: Smartphone,
			title: "Responsive Design",
			description: "Building applications that work seamlessly across all devices and screen sizes.",
		},
		{
			icon: Users,
			title: "Collaboration",
			description: "Working effectively in cross-functional teams to deliver exceptional results.",
		},
	];

	return (
		<section id="about" className="section-padding bg-white">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Passionate developer with a keen eye for design and a commitment to creating exceptional digital
						experiences.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="space-y-6">
							<p className="text-lg text-gray-700 leading-relaxed">
								I'm a passionate Full Stack Developer with over 5 years of experience in creating web
								applications that solve real-world problems. My journey started with a Computer Science
								degree, and I've been constantly learning and adapting to new technologies ever since.
							</p>

							<p className="text-lg text-gray-700 leading-relaxed">
								I specialize in modern web technologies like React, TypeScript, Node.js, and cloud
								platforms. I believe in writing clean, maintainable code and creating user experiences
								that are both beautiful and functional.
							</p>

							<p className="text-lg text-gray-700 leading-relaxed">
								When I'm not coding, you can find me exploring new technologies, contributing to
								open-source projects, or enjoying photography and hiking.
							</p>

							<div className="flex flex-wrap gap-4 pt-4">
								<span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Problem Solver
								</span>
								<span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Team Player
								</span>
								<span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
									Quick Learner
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 sm:grid-cols-2 gap-6"
					>
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-50 p-6 rounded-lg card-hover"
							>
								<feature.icon className="w-8 h-8 text-primary-600 mb-4" />
								<h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
