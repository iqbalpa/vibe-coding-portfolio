import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#experience", label: "Experience" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false);
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container-max-width">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a
							href="#"
							className="text-xl font-bold gradient-text"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						>
							Portfolio
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item) => (
								<button
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary-600 p-2">
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<button
								key={item.href}
								onClick={() => scrollToSection(item.href)}
								className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
