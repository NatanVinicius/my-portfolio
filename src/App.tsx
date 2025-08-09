import { useEffect, useRef, type RefObject } from 'react';
import { Experiences } from './pages/Home/Experiences';
import { HardSkills } from './pages/Home/HardSkills';
import { HeroSection } from './pages/Home/HeroSection';
import { ReactLenis, useLenis } from 'lenis/react';
import { Projects } from './pages/Home/Projects';
import { Footer } from './pages/Home/Footer';
import { About } from './pages/Home/About';

function App() {
	const lenis = useLenis((lenis) => {
		console.log(lenis);
	});

	const heroRef = useRef(null);
	const expRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove('class-opacity-0');
						entry.target.classList.add('class-opacity-100');
					} else {
						entry.target.classList.remove('class-opacity-100');
						entry.target.classList.add('class-opacity-0');
					}
				});
			},
			{ threshold: 0.2 },
		);

		[heroRef, expRef, skillsRef, aboutRef, projectsRef].forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (ref: RefObject<null>) => {
		if (!ref.current || !lenis) return;
		lenis.scrollTo(ref.current, {
			duration: 1.5,
			easing: (t) => t,
		});
	};

	return (
		<div className='relative w-full min-h-screen flex justify-center bg-[#141414] font-[var(--font-lexend-giga)] scroll-smooth'>
			<ReactLenis root />
			<div className='w-full lg:w-[1200px] h-full space-y-20'>
				<section ref={heroRef} className='class-opacity-0'>
					<HeroSection
						onScrollTo={(section) => {
							switch (section) {
								case 'hero':
									scrollToSection(heroRef);
									break;
								case 'experiences':
									scrollToSection(expRef);
									break;
								case 'skills':
									scrollToSection(skillsRef);
									break;
								case 'about':
									scrollToSection(aboutRef);
									break;
								case 'projects':
									scrollToSection(projectsRef);
									break;
								default:
									break;
							}
						}}
					/>
				</section>
				<section ref={expRef} className='class-opacity-0'>
					<Experiences />
				</section>
				<section ref={skillsRef} className='class-opacity-0'>
					<HardSkills />
				</section>
				<section ref={aboutRef} className='class-opacity-0'>
					<About />
				</section>
				<section ref={projectsRef} className='class-opacity-0'>
					<Projects />
				</section>
				<Footer />
			</div>
		</div>
	);
}

export default App;
