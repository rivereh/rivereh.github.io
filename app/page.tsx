import Script from 'next/script'
import ProjectSection from './(components)/ProjectSection'
import Footer from './(components)/Footer'
import Hero from './(components)/Hero'
import AboutSection from './(components)/AboutSection'

export default function Home() {
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
      />

      {/* <!-- BACK TO TOP BUTTON --> */}
      <button id='back-to-top'>
        <i className='fas fa-arrow-up'></i>
      </button>

      <div id='jsi-rain-container' className='rain-container'></div>

      <Hero />
      <AboutSection />

      {/* <!-- SKILLS --> */}
      <section className='skills'>
        <div className='header'>
          <h2>My Skills</h2>
        </div>
        <div className='container'>
          <div className='skill'>
            <span className='iconify' data-icon='skill-icons:react-dark'></span>
            <p>React</p>
          </div>

          <div className='skill'>
            <span className='iconify' data-icon='devicon:typescript'></span>
            <p>TypeScript</p>
          </div>
          <div className='skill'>
            <span
              className='iconify'
              data-icon='vscode-icons:file-type-node'
            ></span>
            <p>Node</p>
          </div>
          <div className='skill'>
            <span
              className='iconify'
              data-icon='skill-icons:expressjs-light'
            ></span>
            <p>Express</p>
          </div>
          <div className='skill'>
            <span
              className='iconify'
              data-icon='vscode-icons:file-type-mongo'
            ></span>
            <p>MongoDB</p>
          </div>

          <div className='skill'>
            <span className='iconify' data-icon='logos:python'></span>
            <p>Python</p>
          </div>
          <div className='skill'>
            <span className='iconify' data-icon='skill-icons:unity-dark'></span>
            <p>Unity</p>
          </div>
          <div className='skill'>
            <span className='iconify' data-icon='logos:c-sharp'></span>
            <p>C#</p>
          </div>
          <div className='skill'>
            <span className='iconify' data-icon='devicon:c'></span>
            <p>C++</p>
          </div>
          <div className='skill'>
            <span
              className='iconify'
              data-icon='vscode-icons:file-type-sql'
            ></span>
            <p>SQL</p>
          </div>
          <div className='skill'>
            <span className='iconify' data-icon='logos:firebase'></span>
            <p>Firebase</p>
          </div>
          <div className='skill'>
            <span className='iconify' data-icon='skill-icons:aws-dark'></span>
            <p>AWS</p>
          </div>
        </div>
      </section>

      <ProjectSection />

      <Footer />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/iconify/3.1.1/iconify.min.js' />
    </div>
  )
}
