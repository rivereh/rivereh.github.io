'use client'

import Slider from 'react-slick'
import { Project } from '../(types)/Project.types'
import { Icon } from '@iconify/react'
import Image from 'next/image'

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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <div className='fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-4 bg-black bg-opacity-50 py-4 text-white'>
      <div className='shadow-l mt-6 flex h-[80%] max-w-[800px] flex-col gap-4 overflow-y-auto rounded-lg bg-neutral-800 p-3'>
        {project.sliderImages ? (
          <Slider {...settings} className='mb-6 max-h-[400px]'>
            {project.sliderImages.map((imageUrl) => {
              return (
                <div key={project.id}>
                  <Image
                    className='max-h-[400px] w-full object-cover object-top'
                    src={imageUrl}
                    alt=''
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )
            })}
          </Slider>
        ) : (
          <div>
            <img
              className='max-h-[400px] w-full object-cover object-top'
              src={project.coverImage}
              alt=''
            />
          </div>
        )}
        <h2 className='text-center'>{project.title}</h2>
        <p className=''>{project.desc}</p>
        {project.techIcons && (
          <div className='my-4'>
            <p className='text-md mb-4 text-center font-bold'>Tech Stack</p>
            <div className='flex justify-center gap-2 text-3xl'>
              {project.techIcons.map((iconUrl) => {
                return (
                  <div key={project.id}>
                    <Icon icon={iconUrl} />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <button onClick={closeInfo} className='btn'>
        Close
      </button>
    </div>
  )
}
export default ProjectInfo
