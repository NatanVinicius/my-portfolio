import ChromaGrid from '../../components/Animations/ChromaGrid';
import rdsCampervanImg from '../../assets/projects/rds-campervan.png';
import skyTrackerImg from '../../assets/projects/sky-tracker.png';
import pokedexImg from '../../assets/projects/pokedex.png';

export const Projects = () => {
	const items = [
		{
			image: rdsCampervanImg,
			title: 'RDS Campervan Full-Stack Web App',
			subtitle:
				'Custom web platform for a NZ campervan company with secure API, responsive UI, image hosting, and GCP deployment.',
			handle: 'See more',
			borderColor: '#1FBCFD',
			gradient: 'linear-gradient(145deg, #1FBCFD, #000)',
			url: 'https://www.rdscampervan.co.nz',
		},
		{
			image: skyTrackerImg,
			title: 'SkyTracker Interactive Forecast Dashboard',
			subtitle:
				'A responsive front-end app that fetches real-time weather data from OpenWeather API and displays 7-day forecasts with dynamic charts.',
			handle: 'Github',
			borderColor: '#10B981',
			gradient: 'linear-gradient(180deg, #1FBCFD, #000)',
			url: 'https://github.com/NatanVinicius/sky-tracker',
		},
		{
			image: pokedexImg,
			title: 'Pokedex',
			subtitle:
				'Interactive Pokédex built with React, featuring search, filtering, and detailed Pokémon stats from the PokéAPI.',
			handle: 'Github',
			borderColor: '#10B981',
			gradient: 'linear-gradient(180deg, #1FBCFD, #000)',
			url: 'https://github.com/NatanVinicius/pokedex-react.ts',
		},
	];
	return (
		<section>
			<h1 className='py-14 text-center text-2xl text-white font-bold'>
				Projects
			</h1>

			<ChromaGrid
				items={items}
				radius={200}
				damping={0.45}
				fadeOut={0.6}
				ease='power3.out'
			/>
			<div className='w-full my-8 px-4 flex justify-end'>
				<a
					href='https://github.com/NatanVinicius'
					target='_blank'
					rel='noopener'
					className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#222224]  rounded-lg ease-in-out duration-200 hover:bg-[#333336]'
				>
					See all projects
				</a>
			</div>
		</section>
	);
};
