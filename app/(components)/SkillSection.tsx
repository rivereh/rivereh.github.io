import { Icon } from '@iconify/react'

const SkillSection = () => {
  return (
    <section className='skills'>
      <div className='header'>
        <h2>My Skills</h2>
      </div>
      <div className='container'>
        <div className='skill'>
          <Icon icon='skill-icons:react-dark' />
          <p>React</p>
        </div>
        <div className='skill'>
          <Icon icon='devicon:typescript' />
          <p>TypeScript</p>
        </div>
        <div className='skill'>
          <Icon icon='vscode-icons:file-type-node' />
          <p>Node</p>
        </div>
        <div className='skill'>
          <Icon icon='skill-icons:expressjs-light' />
          <p>Express</p>
        </div>
        <div className='skill'>
          <Icon icon='vscode-icons:file-type-mongo' />
          <p>MongoDB</p>
        </div>

        <div className='skill'>
          <Icon icon='logos:python' />
          <p>Python</p>
        </div>
        <div className='skill'>
          <Icon icon='skill-icons:unity-dark' />
          <p>Unity</p>
        </div>
        <div className='skill'>
          <Icon icon='logos:c-sharp' />
          <p>C#</p>
        </div>
        <div className='skill'>
          <Icon icon='devicon:c' />
          <p>C++</p>
        </div>
        <div className='skill'>
          <Icon icon='vscode-icons:file-type-sql' />
          <p>SQL</p>
        </div>
        <div className='skill'>
          <Icon icon='logos:firebase' />
          <p>Firebase</p>
        </div>
        <div className='skill'>
          <Icon icon='skill-icons:aws-dark' />
          <p>AWS</p>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
