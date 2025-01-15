import { Project } from '../(types)/Project.types'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='card text-white'>
      <img
        className='h-[200px] rounded-t-lg object-cover'
        src={project.coverImage}
        alt=''
      />
      <div className='mb-4 flex flex-1 flex-col gap-4 p-4'>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <button className='btn btn-blue'>More Info</button>
      </div>
    </div>
  )
}
export default ProjectCard
