export const Footer = () => {
	return (
		<footer className='absolute top-full left-0 w-full bg-[#1BBCFE]'>
			<div className='max-w-80 mx-auto my-14'>
				<h1 className='text-center font-bold text-4xl text-white  tracking-widest'>
					Let's have a chat?
				</h1>
			</div>
			<div className='flex items-center justify-center px-4'>
				<a
					href='mailto:natanviniciusdepaula@gmail.com'
					className='relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-[#1BBCFE]'
					rel='noopener'
				>
					<span className='relative'>Get in a touch</span>
				</a>
			</div>
			<p className='mt-14 p-4 text-sm text-white text-center'>
				Developed by Natan Vinicius ©️ 2025
			</p>
		</footer>
	);
};
