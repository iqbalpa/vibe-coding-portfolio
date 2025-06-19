import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
	const projects = [
		{
			title: "E-Commerce Platform",
			description:
				"A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with React, Node.js, and Stripe integration.",
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
			technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
			date: "2024",
		},
		{
			title: "Task Management App",
			description:
				"A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
			image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
			technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
			date: "2023",
		},
		{
			title: "Weather Dashboard",
			description:
				"A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
			image: "https://images.unsplash.com/photo-1504608524841-42fe6f5c25af?w=500&h=300&fit=crop",
			technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Leaflet"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
			date: "2023",
		},
		{
			title: "Portfolio Website",
			description:
				"A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
			image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
			technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
			date: "2024",
		},
	];

	const featuredProjects = projects.filter((project) => project.featured);
	const otherProjects = projects.filter((project) => !project.featured);

	return (
		<section id="projects" className="section-padding bg-white">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						A showcase of my recent work, featuring full-stack applications and creative solutions.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="space-y-24 mb-24">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className={`grid lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
						>
							<div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
								<div className="relative group">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
										loading="lazy"
									/>
									<div className="absolute inset-0 bg-primary-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
								</div>
							</div>

							<div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
								<div className="space-y-6">
									<div className="flex items-center gap-4">
										<span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
											Featured
										</span>
										<div className="flex items-center text-gray-500 text-sm">
											<Calendar className="w-4 h-4 mr-1" />
											{project.date}
										</div>
									</div>

									<h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h3>

									<p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>

									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex gap-4">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
										>
											<ExternalLink className="w-4 h-4" />
											Live Demo
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
										>
											<Github className="w-4 h-4" />
											Source Code
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Other Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Other Projects</h3>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{otherProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-gray-50 rounded-lg overflow-hidden card-hover"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
								loading="lazy"
							/>
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
									<div className="flex items-center text-gray-500 text-sm">
										<Calendar className="w-4 h-4 mr-1" />
										{project.date}
									</div>
								</div>

								<p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-white text-gray-700 text-xs font-medium rounded border"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
									>
										<ExternalLink className="w-4 h-4" />
										Live Demo
									</a>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
									>
										<Github className="w-4 h-4" />
										Code
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
