import { Project } from '../(types)/Project.types'
import ProjectCard from './ProjectCard'
import projects from '../projects.json'

const ProjectSection = () => {
  return (
    <section id='projects'>
      <div className='header'>
        <h2>My Projects</h2>
      </div>
      <div className='container'>
        {projects.map((project: Project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}
export default ProjectSection
