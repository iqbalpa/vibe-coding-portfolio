import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
				<Navigation />
				<main>
					<Hero />
					<About />
					<Experience />
					<Projects />
					<Skills />
					<Contact />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
