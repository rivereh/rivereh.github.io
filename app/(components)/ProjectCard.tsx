'use client'

import { useState } from 'react'
import { Project } from '../(types)/Project.types'
import ProjectInfo from './ProjectInfo'
import Image from 'next/image'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const [showInfo, setshowInfo] = useState(false)

  const handleClick = () => {
    setshowInfo(true)
  }

  const closeInfo = () => {
    setshowInfo(false)
  }

  return (
    <div className='card text-white shadow-lg'>
      <Image
        className='h-[200px] rounded-t-lg object-cover object-top'
        src={project.coverImage}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: '200px' }}
      />
      <div className='mb-4 flex flex-1 flex-col gap-4 p-4'>
        <h2>{project.title}</h2>
        <p className='mx-4 text-sm'>{project.desc}</p>
        {/* <button onClick={handleClick} className='btn btn-blue'>
          More Info
        </button> */}
      </div>

      {showInfo && <ProjectInfo closeInfo={closeInfo} project={project} />}
    </div>
  )
}
export default ProjectCard
