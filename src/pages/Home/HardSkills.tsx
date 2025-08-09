import jsLogo from '../../assets/js.png';
import tsLogo from '../../assets/typescript.png';
import reactLogo from '../../assets/react-logo.png';
import nodeLogo from '../../assets/node.png';
import gitLogo from '../../assets/git.png';
import terraformLogo from '../../assets/terraform.png';
import mongologo from '../../assets/mongodb.png';
import dockerLogo from '../../assets/docker.png';
import figmaLogo from '../../assets/figma.png';
import googleCloud from '../../assets/googleCloud.png';

export const HardSkills = () => {
	return (
		<section>
			<h1 className='py-14 text-2xl text-center text-white font-bold'>
				Technical Skills & Tools
			</h1>
			<div className='px-4 grid items-center justify-center grid-cols-5	gap-3 gap-y-4 lg:grid-cols-10'>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow-white/15 bg-[#222224]'>
						<img src={jsLogo} alt='' className='p-4' />
					</div>
					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Javascript
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={tsLogo} alt='' className='p-4' />
					</div>
					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Typescript
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={reactLogo} alt='' className='p-4' />
					</div>
					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						React
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={nodeLogo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						NodeJS
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={gitLogo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Git
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={mongologo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						MongoDB
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={dockerLogo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Docker
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={terraformLogo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Terraform
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={figmaLogo} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Figma
					</span>
				</div>
				<div className='group w-full flex items-center justify-center lg:relative'>
					<div className='py-6 w-22 h-20 flex items-center justify-center border border-white/30 rounded-2xl shadow-md shadow- shadow-white/15 bg-[#222224]'>
						<img src={googleCloud} alt='' className='p-4' />
					</div>

					<span className='absolute top-[-50px] opacity-0 text-sm p-2 font-lexend-deca text-white/70 bg-[#222224] border border-white/30 rounded-lg shadow-md shadow-white/15 duration-500 group-hover:opacity-50'>
						Cloud
					</span>
				</div>
			</div>
		</section>
	);
};
