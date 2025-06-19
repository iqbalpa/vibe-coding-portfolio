import { motion } from "framer-motion";
import { Code2, Database, Paintbrush, Cloud, Smartphone, Settings, GitBranch, Terminal } from "lucide-react";

const Skills = () => {
	const skillCategories = [
		{
			title: "Frontend Development",
			icon: Code2,
			color: "text-blue-600",
			bgColor: "bg-blue-100",
			skills: [
				{ name: "React/Next.js", level: 95 },
				{ name: "TypeScript", level: 90 },
				{ name: "Vue.js", level: 85 },
				{ name: "Tailwind CSS", level: 92 },
				{ name: "HTML/CSS", level: 95 },
				{ name: "JavaScript", level: 93 },
			],
		},
		{
			title: "Backend Development",
			icon: Database,
			color: "text-green-600",
			bgColor: "bg-green-100",
			skills: [
				{ name: "Node.js", level: 90 },
				{ name: "Express.js", level: 88 },
				{ name: "Python", level: 85 },
				{ name: "PostgreSQL", level: 87 },
				{ name: "MongoDB", level: 83 },
				{ name: "REST APIs", level: 92 },
			],
		},
		{
			title: "Cloud & DevOps",
			icon: Cloud,
			color: "text-purple-600",
			bgColor: "bg-purple-100",
			skills: [
				{ name: "AWS", level: 82 },
				{ name: "Docker", level: 80 },
				{ name: "CI/CD", level: 78 },
				{ name: "Vercel", level: 85 },
				{ name: "Firebase", level: 83 },
				{ name: "Linux", level: 75 },
			],
		},
		{
			title: "Design & Tools",
			icon: Paintbrush,
			color: "text-pink-600",
			bgColor: "bg-pink-100",
			skills: [
				{ name: "Figma", level: 88 },
				{ name: "Git/GitHub", level: 92 },
				{ name: "VS Code", level: 95 },
				{ name: "Postman", level: 85 },
				{ name: "Adobe XD", level: 80 },
				{ name: "Photoshop", level: 75 },
			],
		},
	];

	const technologies = [
		"React",
		"TypeScript",
		"Node.js",
		"Next.js",
		"Vue.js",
		"Express.js",
		"MongoDB",
		"PostgreSQL",
		"AWS",
		"Docker",
		"Tailwind CSS",
		"Figma",
		"Git",
		"Python",
		"JavaScript",
		"HTML5",
		"CSS3",
		"REST APIs",
		"GraphQL",
		"Firebase",
		"Vercel",
		"Jest",
		"Cypress",
		"Linux",
	];

	return (
		<section id="skills" className="section-padding bg-gray-50">
			<div className="container-max-width">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
					</p>
				</motion.div>

				{/* Skills Categories */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
						>
							<div className="flex items-center mb-6">
								<div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
									<category.icon className={`w-6 h-6 ${category.color}`} />
								</div>
								<h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
							</div>

							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
										viewport={{ once: true }}
										className="relative"
									>
										<div className="flex justify-between items-center mb-2">
											<span className="text-sm font-medium text-gray-700">{skill.name}</span>
											<span className="text-sm text-gray-500">{skill.level}%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{ duration: 1, delay: skillIndex * 0.1 }}
												viewport={{ once: true }}
												className={`h-2 rounded-full ${
													category.color === "text-blue-600"
														? "bg-blue-600"
														: category.color === "text-green-600"
														? "bg-green-600"
														: category.color === "text-purple-600"
														? "bg-purple-600"
														: "bg-pink-600"
												}`}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Technologies Cloud */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>

					<div className="flex flex-wrap justify-center gap-3">
						{technologies.map((tech, index) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-default"
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Additional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
				>
					<div className="space-y-3">
						<div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
							<Smartphone className="w-6 h-6 text-blue-600" />
						</div>
						<h4 className="font-semibold text-gray-900">Mobile First</h4>
						<p className="text-sm text-gray-600">Responsive design approach</p>
					</div>

					<div className="space-y-3">
						<div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
							<GitBranch className="w-6 h-6 text-green-600" />
						</div>
						<h4 className="font-semibold text-gray-900">Version Control</h4>
						<p className="text-sm text-gray-600">Git workflow expertise</p>
					</div>

					<div className="space-y-3">
						<div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center">
							<Terminal className="w-6 h-6 text-purple-600" />
						</div>
						<h4 className="font-semibold text-gray-900">Command Line</h4>
						<p className="text-sm text-gray-600">Terminal proficiency</p>
					</div>

					<div className="space-y-3">
						<div className="w-12 h-12 mx-auto bg-pink-100 rounded-lg flex items-center justify-center">
							<Settings className="w-6 h-6 text-pink-600" />
						</div>
						<h4 className="font-semibold text-gray-900">Optimization</h4>
						<p className="text-sm text-gray-600">Performance tuning</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
