import { FaGithubSquare } from 'react-icons/fa';
export const Experiences = () => {
	return (
		<section className='px-2'>
			<h1 className='py-14 text-2xl text-center text-white font-bold'>
				Experiences
			</h1>
			<ol className='relative border-s-3 border-[#009AD9]'>
				<li className='mb-10 ms-4'>
					<div className='absolute w-3 h-3 bg-[#009AD9] rounded-full mt-1.5 left-[-7px] border border-[#009AD9]'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						June 2025 - August 2025
					</time>
					<h3 className='text-lg font-semibold text-[#009AD9] mb-4'>
						INDEPENDENT SOFTWARE DEVELOPER{' '}
						<span className='text-white'>RDS Campervan</span>
					</h3>
					<p className='mb-4 text-base font-normal text-gray-400'>
						Designed and developed a full-stack web application for a small
						campervan rental business that previously relied solely on
						Facebook for listings, limiting their online visibility and
						sales opportunities.
					</p>
					<p className='mb-4 text-base font-normal text-gray-400'>
						Built a secure, scalable RESTful API using Node.js, with JWT
						for authentication and Multer for image uploads. Integrated
						Cloudinary for optimized image hosting and stored image URLs in
						MongoDB. Developed a fully responsive front-end with React,
						following clean code and scalable architecture principles.
					</p>
					<p className='mb-4 text-base font-normal text-gray-400'>
						Used Axios for API communication and React Router DOM for
						client-side routing. Implemented Docker containers for local
						development and deployment, applied GitHub for version control
						using the Gitflow workflow, and managed CI/CD and
						infrastructure deployment with Terraform on Google Cloud
						Platform. Integrated an external email service API for sending
						and receiving emails within the application.
					</p>
					<div className='flex gap-4'>
						<a
							target='_blank'
							href='http://www.rdscampervan.co.nz'
							className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#222224] border-gray-200 rounded-lg ease-in-out duration-200 hover:bg-[#333336] '
							rel='noopener'
						>
							Visit{' '}
							<svg
								className='w-3 h-3 ms-2 rtl:rotate-180'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'
							>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'
								/>
							</svg>
						</a>
						<a
							target='_blank'
							href='http://www.rdscampervan.co.nz'
							className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#222224] border-gray-200 rounded-lg ease-in-out duration-200 hover:bg-[#333336] '
							rel='noopener'
						>
							<span>Github</span>{' '}
							<FaGithubSquare className='ml-2 text-xl' />
							<svg
								className='w-3 h-3 ms-2 rtl:rotate-180'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'
							>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'
								/>
							</svg>
						</a>
					</div>
				</li>
				<li className='mb-10 ms-4'>
					<div className='absolute w-3 h-3 bg-[#009AD9] rounded-full mt-1.5 left-[-7px] border border-[#009AD9] animate-ping'></div>

					<div className='absolute w-3 h-3 bg-[#009AD9] rounded-full mt-1.5 left-[-7px] border border-[#009AD9]'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						December 2023 to present
					</time>
					<h3 className='text-lg font-semibold text-[#009AD9] mb-4'>
						CAR GROOMER{' '}
						<span className='text-white'>Pearce Brothers/BM Workshop</span>
					</h3>
					<p className='mb-4 text-base font-normal text-gray-400'>
						Washing, cleaning and polishing vehicles and parking and moving
						the cars for service/collection.
					</p>
				</li>
				<li className='mb-10 ms-4'>
					<div className='absolute w-3 h-3 bg-[#009AD9] rounded-full mt-1.5 left-[-7px] border border-[#009AD9]'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						April 2023 - December 2023
					</time>
					<h3 className='text-lg font-semibold text-[#009AD9] mb-4'>
						GENRAL HAND{' '}
						<span className='text-white'>RDS Motors Company</span>
					</h3>
					<p className='mb-4 text-base font-normal text-gray-400'>
						Built and installed campervan interior and equipment, painted
						and varnished furniture, connected and installed electrical
						equipment
					</p>
				</li>
			</ol>
		</section>
	);
};
