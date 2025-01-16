'use client'

import Slider from 'react-slick'
import { Project } from '../(types)/Project.types'

type Props = {
  closeInfo: () => void
  project: Project
}

const ProjectInfo = ({ closeInfo, project }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50 text-white'>
      <div className='mt-[-8rem] flex w-[60%] flex-col gap-3 rounded-lg bg-neutral-800 p-7 shadow-lg'>
        <Slider {...settings} className='mb-6'>
          <div>
            <img src={project.coverImage} alt='' />
          </div>
          <div>
            <img src={project.coverImage} alt='' />
          </div>
          <div>
            <img src={project.coverImage} alt='' />
          </div>
        </Slider>
        <h2 className='text-center'>{project.title}</h2>
        <p className=''>{project.desc}</p>
        <h3 className='text-center'>Technologies Used</h3>
        <button onClick={closeInfo} className='btn'>
          Close
        </button>
      </div>
    </div>
  )
}
export default ProjectInfo
