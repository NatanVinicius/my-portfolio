import profileImg from '../../assets/perfil_Natan-removebg-preview.png';

export const About = () => {
	return (
		<section className='px-4'>
			<h1 className='py-14 text-2xl text-center font-bold text-white'>
				About me
			</h1>
			<div className='w-full flex flex-col items-center justify-center gap-8 lg:flex-row'>
				<div className='w-60 relative'>
					<img
						src={profileImg}
						alt=''
						className='w-60 h-70 bg-[#1BBCFE] drop-shadow-2xl shadow-white rounded-2xl'
					/>
					<div className='absolute top-0 left-0 w-full h-full bg-black/35 rounded-2xl'></div>
				</div>
				<div className='flex flex-col gap-4 text-white/60 text-lg font-lexend-giga lg:max-w-200'>
					<p className=''>
						Full-Stack Developer{' '}
						<strong className='text-white'>
							with hands-on experience in freelance projects over the past
							year
						</strong>
						, applying industry best practices.
					</p>
					<p>
						Skilled in TypeScript, React, Node.js, Git, Docker, and
						Terraform for deployments on Google Cloud.
					</p>{' '}
					<p>
						Focused on building functional, responsive, and visually
						appealing applications, efficiently solving problems, and
						continuously improving my skills to meet the demands of the job
						market.
					</p>
					<h2 className='text-lg text-white font-bold'>Education</h2>
					<p className='text-white/80'>
						Technology in System Analysis and Development (2023 – July
						2026) -{' '}
						<span className='text-white'>Mackenzie University</span>
					</p>
					<p className='text-white/80'>
						Hardware and Software Basic Course (2013 – July 2014)
					</p>
				</div>
			</div>

			<div className='w-full text-center'></div>
		</section>
	);
};
