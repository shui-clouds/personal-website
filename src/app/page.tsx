import Image from 'next/image'
import Link from 'next/link'
import mountains from '../../public/mountains.png'

type ProjectCardType = {
	title: string;
	description: string;
	path: string;
	borderColours: string;
}

type ProjectHeadingType = {
	title: string;
	description: string;
	path: string;
}

const projects: ProjectCardType[] = [
	{
		title: 'Fortnite Caching Solution',
		path: '/fortnite-caching',
		description:
      'Solution to cache a variety of data ranging from static to highly dynamic content on Fortnite.com',
		borderColours:
      'bg-gradient-to-tr from-[#26deff] via-[#bc35ff] to-[#fc0bf8]',
	},
	{
		title: 'ChatOps Platform 💬',
		path: '/chatops',
		description:
      'Centralized and extensible ChatOps platform for system monitoring, alerting and troubleshooting',
		borderColours: 'bg-gradient-to-r from-[#fc0bf8] via-[#ff195e] to-[#ff9626]',
	},
	{
		title: 'Customer Portal Integration',
		path: '/feedback-management',
		description:
      'Solution for managing and tracking customer feedback and issues using internal PM tools',
		borderColours:
      'bg-gradient-to-tr from-[#fcb80b] via-[#ffda35] to-[#13d409]',
	},
]

const projectLinks: ProjectHeadingType[] = [
	{
		title: 'Game Analytics Portal 🎮',
		description:
      'Custom solution for feature flags, tracking & analysing player engagement, retention and monetization metrics in games',
		path: 'https://github.com/shui-clouds/web-portal',
	},
	{
		title: 'Mangui 🏡',
		description: 'Tenancy & Property Management web app',
		path: 'https://github.com/shui-clouds/mangui',
	},
	{
		title: 'Chatty Chef 🧑‍🍳',
		description: 'CMS-powered Restaurant website for online ordering',
		path: 'https://github.com/aprets/Chatty-Chef',
	},
]

const ProjectCard = ({project}: {project: ProjectCardType}) => (
	<div className={`p-1 bg-white rounded-xl ${project.borderColours}`}>
		<div className='bg-white rounded-lg pt-4 pb-8 px-5 min-h-full '>
			<p className='mb-2 text-lg font-medium text-gray-90'>{project.title}</p>
			<p className='font-normal text-gray-700 dark:text-gray-400'>
				{project.description}
			</p>
		</div>
	</div>
)

const ProjectHeading = ({project}: {project: ProjectHeadingType}) => (
	<Link target='_blank' href={project.path} passHref>
		<h2 className='cursor-pointer text-2xl font-medium hover:text-blue-800'>
			{project.title}
		</h2>
		<p className='text-gray-700 dark:text-gray-400'>{project.description}</p>
	</Link>
)

export default function Home() {
	return (
		<main>
			<div className='flex flex-col max-w-3xl mx-auto pt-8 sm:px-4 px-8 pb-8'>
				<div className='flex flex-col-reverse sm:flex-row items-start justify-between'>
					<div className='flex flex-col sm:pr-16'>
						<h1 className='text-4xl sm:text-5xl font-bold'>Shui Shan 💫</h1>
						<p className='italic mt-2 text-md text-gray-500'>
							software engineer, game designer & developer 👩🏻‍💻🎮
						</p>
						<p className='mt-4 mb-8 text-lg'>
							Passionate about engineering, building games & apps. Seeking
							ventures to learn and collaborate with people!
						</p>
						<a
							target='_blank'
							href='https://github.com/shui-clouds/'
							className='text-lg text-blue-500 underline'
							rel='noreferrer'
						>
							@shui-clouds
						</a>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/shuishan/'
							className='text-lg text-blue-500 underline'
							rel='noreferrer'
						>
							/shuishan
						</a>
					</div>
					<div className='w-[100px] sm:w-[300px] mb-4 sm:mb-0'>
						<Image
							className='rounded-full'
							alt='Pixel Mountains'
							src={mountains}
						/>
					</div>
				</div>
				<h2 className='text-3xl mt-16 mb-4 font-bold'>Work Highlight 🌟</h2>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 pb-4'>
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
				<h3 className='text-3xl mt-6 mb-4 font-semibold'>
					Personal Projects 🚀
				</h3>
				<div className='flex flex-col gap-5 mt-4'>
					{projectLinks.map((project) => (
						<ProjectHeading key={project.title} project={project} />
					))}
				</div>
			</div>
		</main>
	)
}
