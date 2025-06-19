import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
	const experiences = [
		{
			title: "Senior Full Stack Developer",
			company: "TechCorp Solutions",
			location: "San Francisco, CA",
			period: "2022 - Present",
			description: [
				"Led development of microservices architecture serving 1M+ users",
				"Improved application performance by 40% through code optimization",
				"Mentored junior developers and conducted code reviews",
				"Collaborated with product team to define technical requirements",
			],
			technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
		},
		{
			title: "Full Stack Developer",
			company: "Digital Innovations Inc.",
			location: "Remote",
			period: "2020 - 2022",
			description: [
				"Built responsive web applications using React and Node.js",
				"Implemented RESTful APIs and database design",
				"Integrated third-party services and payment gateways",
				"Participated in agile development processes",
			],
			technologies: ["React", "Express.js", "MongoDB", "Stripe API", "Jest"],
		},
		{
			title: "Frontend Developer",
			company: "StartupXYZ",
			location: "Austin, TX",
			period: "2019 - 2020",
			description: [
				"Developed user-facing features for SaaS platform",
				"Created reusable component library",
				"Optimized website for SEO and accessibility",
				"Collaborated with designers to implement pixel-perfect UIs",
			],
			technologies: ["Vue.js", "Sass", "Webpack", "Figma", "Google Analytics"],
		},
	];

	return (
		<section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Work Experience
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						My professional journey building scalable applications and leading development teams.
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700"></div>

					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className={`relative flex items-center ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
							>
								{/* Timeline dot */}
								<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-md z-10"></div>

								{/* Content */}
								<div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} md:w-1/2`}>
									<div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md dark:shadow-xl dark:shadow-black/10 card-hover border dark:border-gray-700/50">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
											<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
												{exp.title}
											</h3>
											<div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
												<Calendar className="w-4 h-4 mr-1" />
												{exp.period}
											</div>
										</div>

										<div className="flex flex-col sm:flex-row sm:items-center mb-4">
											<h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1 sm:mb-0">
												{exp.company}
											</h4>
											<div className="flex items-center text-gray-500 dark:text-gray-400 text-sm sm:ml-4">
												<MapPin className="w-4 h-4 mr-1" />
												{exp.location}
											</div>
										</div>

										<ul className="space-y-2 mb-6">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="text-gray-700 dark:text-gray-300 flex items-start"
												>
													<span className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
													{item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
