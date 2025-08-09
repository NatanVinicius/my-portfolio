import { useState } from 'react';
import TextType from '../../components/Animations/TextType';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { CiMenuBurger } from 'react-icons/ci';
import { CiMenuFries } from 'react-icons/ci';

interface HeroSectionProps {
	onScrollTo: (section: string) => void;
}

export const HeroSection = ({ onScrollTo }: HeroSectionProps) => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	const handleClick = (section: string) => {
		onScrollTo(section);
		setIsMenuMobileOpen(false);
	};

	return (
		<div className='relative'>
			<button
				type='button'
				className='absolute top-0 right-0 text-white text-4xl p-4 lg:hidden'
				onClick={() => setIsMenuMobileOpen((prev) => !prev)}
			>
				<div className='relative w-8 h-8'>
					<CiMenuFries
						className={`absolute inset-0 w-8 h-8 transition-all duration-300 ease-in-out
              ${isMenuMobileOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-90'}`}
					/>
					<CiMenuBurger
						className={`absolute inset-0 w-8 h-8 transition-all duration-300 ease-in-out
              ${isMenuMobileOpen ? 'opacity-0 scale-75 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
					/>
				</div>
			</button>

			<nav
				className={`
          flex items-center justify-center transition-all duration-1000 ease-in-out
          ${isMenuMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          lg:opacity-100 lg:pointer-events-auto
        `}
			>
				<ul
					className={`
            transition-all duration-1000 ease-in-out overflow-hidden
            ${isMenuMobileOpen ? 'max-h-96' : 'max-h-0'}
            flex flex-col mt-2 gap-6 items-center justify-center text-white
            lg:max-h-none lg:h-[80px] lg:flex lg:flex-row lg:gap-6 lg:items-center lg:justify-center lg:text-white
          `}
				>
					<li>
						{/** biome-ignore lint/a11y/useKeyWithClickEvents: <> */}
						<p
							className='text-lg group relative w-max cursor-pointer'
							onClick={() => handleClick('hero')}
						>
							<span>Home</span>
							<span className='absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
							<span className='absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
						</p>
					</li>

					<li>
						{/** biome-ignore lint/a11y/useKeyWithClickEvents: <> */}
						<p
							className='text-lg group relative w-max cursor-pointer'
							onClick={() => handleClick('projects')}
						>
							<span>Projects</span>
							<span className='absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
							<span className='absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
						</p>
					</li>

					<li>
						{/** biome-ignore lint/a11y/useKeyWithClickEvents: <> */}
						<p
							className='text-lg group relative w-max cursor-pointer'
							onClick={() => handleClick('about')}
						>
							<span>About me</span>
							<span className='absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
							<span className='absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#fff] group-hover:w-3/6'></span>
						</p>
					</li>
				</ul>
			</nav>

			<section
				className={`w-full h-[calc(100vh-24px)] flex flex-col items-center justify-center px-4 gap-12 lg:w-full lg:h-[calc(100vh-86px)]`}
			>
				<div className='flex flex-col text-white '>
					<p className='text-white/60 text-2xl'>Hey, I'm Natan de Paula</p>
					<TextType
						text={['A fullstack software developer']}
						typingSpeed={75}
						pauseDuration={1500}
						showCursor={true}
						cursorCharacter='|'
						className='w-69 text-3xl lg:text-5xl font-bold mt-6 lg:w-106 '
					/>
				</div>
				<div className=' flex items-center gap-4 lg:w-[424px] '>
					<a
						href='/Natan_CV.pdf'
						download
						className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1BBCFE] px-6 text-white font-bold cursor-pointer'
					>
						<p className='flex gap-2 items-center justify-center'>
							Curriculum
							<span>
								<FiDownload />
							</span>
						</p>
						<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1500 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
							<div className='relative h-full w-8 bg-white/50'></div>
						</div>
					</a>
					<div className='flex text-white'>
						<a
							href='https://www.linkedin.com/in/natanvinicius99/'
							target='_blank'
							className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  px-2 font-medium text-neutral-200 duration-500 cursor-pointer'
							rel='noopener'
						>
							<div className='translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0'>
								<FaLinkedin className='cursor-pointer text-4xl' />
							</div>
							<div className='absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
								{/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
								>
									<path
										d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
										fill='currentColor'
										fillRule='evenodd'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
						</a>
						<a
							href='https://github.com/NatanVinicius?tab=repositories'
							target='_blank'
							className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  px-2 font-medium text-neutral-200 duration-500 cursor-pointer'
							rel='noopener'
						>
							<div className='translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0'>
								<FaGithubSquare className='cursor-pointer text-4xl' />
							</div>
							<div className='absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
								{/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
								>
									<path
										d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
										fill='currentColor'
										fillRule='evenodd'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
