import { profile } from 'console'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import mountains from '../public/mountains.png'

type ProjectCard = {
  title: string,
  description: string,
  path: string,
  borderColours: string,
}

type ProjectLink = {
  title: string,
  description: string,
  path: string,
}

const projects: ProjectCard[] = [
  {
    title: 'ChatOps Platform 💬',
    path: '/chatops',
    description: 'Centralized and extensible ChatOps platform for system monitoring, alerting and troubleshooting',
    borderColours: 'bg-gradient-to-tr from-[#26deff] via-[#bc35ff] to-[#fc0bf8]'
  },
  {
    title: 'Customer Portal Integration',
    path: '/feedback-management',
    description: 'Solution for managing and tracking customer feedback and issues using internal PM tools',
    borderColours: 'bg-gradient-to-r from-[#fc0bf8] via-[#ff195e] to-[#ff9626]'
  },
  {
    title: 'AWS Private Bridge ☁️',
    path: '/aws-bridge',
    description: 'Secure, customizable reverse-proxy system for tunnelling traffic into internal network via signed URLs',
    borderColours: 'bg-gradient-to-tr from-[#fcb80b] via-[#ffda35] to-[#13d409]'
  },
]

const projectLinks: ProjectLink[] = [
  {
    title: 'Mangui 🏡',
    description: 'Tenancy & Property Management web app',
    path: '/mangui',
  },
  {
    title: 'Chatty Chef 🧑‍🍳',
    description: 'CMS-powered Restaurant website for online ordering',
    path: '/chatty-chef',
  },
  {
    title: 'Unity Game 🎮',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far',
    path: '/unity-dev',
  },
]


const ProjectCard = ({ project }: { project: ProjectCard }) => (
  <Link href={project.path} passHref>
    <a className={`p-1 bg-white rounded-xl ${project.borderColours}`}>
      <div className='bg-white rounded-lg pt-4 pb-8 px-5 min-h-full '>
        <p className='mb-2 text-lg font-medium text-gray-90'>{project.title}</p>
        <p className='font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
      </div>
    </a>
  </Link>
)

const ProjectLink = ({ project }: { project: ProjectLink }) => (
  <Link href={project.path} passHref>
    <a>
      <h2 className='cursor-pointer text-2xl font-medium hover:text-blue-800'>{project.title}</h2>
      <p className='text-gray-700 dark:text-gray-400'>{project.description}</p>
    </a>
  </Link>
)

export default function Home() {
  return (
    <main>
      <div className='flex flex-col max-w-3xl mx-auto pt-8 sm:px-4 px-8 pb-8'>
        <div className='flex flex-col-reverse sm:flex-row items-start justify-between'>
          <div className='flex flex-col sm:pr-16'>
            <h1 className='text-4xl sm:text-5xl font-bold'>Shui Shan 💫</h1>
            <p className='italic mt-2 text-md text-gray-500'>apps & game dev 👾 music & animal lover 🍜</p>
            <p className='mt-4 mb-8 text-lg'>Passionate about software engineering, pursuring challenges and collaborating with people.</p>
            <p className='text-lg'>@shui-clouds</p>
            <p className='text-lg'>/shuishan</p>
          </div>
          <div className="w-[100px] sm:w-[300px] mb-4 sm:mb-0">
            <Image className='rounded-full' alt='Pixel Moutains' src={mountains} />
          </div>
        </div>
        <h2 className='text-3xl mt-16 mb-4 font-bold'>
          Project Highlight 🌟
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 pb-4'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div >
        <div className='flex flex-col gap-5 mt-4'>
          {projectLinks.map((project) => (
            <ProjectLink key={project.title} project={project} />
          ))}
        </div>
      </div >
    </main >
  )
}
