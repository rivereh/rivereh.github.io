'use client'

import Slider from 'react-slick'
import { Project } from '../(types)/Project.types'
import { Icon } from '@iconify/react'

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
    <div className='fixed left-0 top-0 flex h-screen w-full items-start justify-center bg-black bg-opacity-50 text-white'>
      <div className='shadow-l mt-24 flex max-w-[800px] flex-col gap-4 rounded-lg bg-neutral-800 p-4'>
        {project.sliderImages ? (
          <Slider {...settings} className='mb-6 max-h-[400px]'>
            {project.sliderImages.map((imageUrl) => {
              return (
                <div>
                  <img
                    className='max-h-[400px] w-full object-cover object-top'
                    src={imageUrl}
                    alt=''
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
                  <div>
                    <Icon icon={iconUrl} />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <button onClick={closeInfo} className='btn'>
          Close
        </button>
      </div>
    </div>
  )
}
export default ProjectInfo
