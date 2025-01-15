import Script from 'next/script'
import ProjectCard from './(components)/ProjectCard'
import projects from './projects.json'
import ProjectSection from './(components)/ProjectSection'

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

      {/* <!-- HEADER --> */}
      <header id='home' className='vignette'>
        <nav id='nav'>
          <div className='nav-text'>
            <h3>
              River <span>Hill</span>
            </h3>
          </div>
          <img src='./pfp.png' />
        </nav>

        {/* <!-- HERO SECTION --> */}
        <div className='hero'>
          <h1>Hi, I&apos;m River</h1>
          <p>A software engineer from Seattle, WA</p>
          <div className='btns'>
            {/* <!-- <a href="#about" className="about" id="about-btn">About me</a> --> */}
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            {/* <!-- <a href="#contact">Contact</a> --> */}
          </div>
          <div className='icons'>
            <a href='https://github.com/rivereh' target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='http://linkedin.com/in/rivereh' target='_blank'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='mailto:riverehill@gmail.com' target='_blank'>
              <i className='fa-solid fa-envelope'></i>
            </a>
          </div>
        </div>
        <a href='#about'>
          <i className='fa-solid fa-chevron-down chevron'></i>
        </a>
      </header>

      <main>
        {/* <!-- ABOUT ME --> */}
        <section id='about'>
          <div className='container'>
            <div className='about-me'>
              <h2>About Me</h2>
              <p>
                I graduated from the University of Washington in Computer
                Science and Software Engineering. My passion lies in solving
                complex problems and creating innovative solutions using the
                knowledge gained throughout my education. I&apos;m eager to
                apply my skills to real-world projects and continue learning and
                growing as a software engineer. My interests include full-stack
                web development and game development.
              </p>
            </div>
            <img className='user-img' src='./pfp.png' />
          </div>
        </section>

        {/* <!-- SKILLS --> */}
        <section className='skills'>
          <div className='header'>
            <h2>My Skills</h2>
          </div>
          <div className='container'>
            <div className='skill'>
              <span
                className='iconify'
                data-icon='skill-icons:react-dark'
              ></span>
              <p>React</p>
            </div>
            {/* <div className='skill'>
              <span
                className='iconify'
                data-icon='vscode-icons:file-type-html'
              ></span>
              <p>HTML</p>
            </div> */}
            {/* <div className='skill'>
              <span
                className='iconify'
                data-icon='vscode-icons:file-type-css'
              ></span>
              <p>CSS</p>
            </div> */}
            {/* <div className='skill'>
              <span className='iconify' data-icon='logos:javascript'></span>
              <p>JavaScript</p>
            </div> */}
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

            {/* <div className='skill'>
              <span className='iconify' data-icon='logos:vue'></span>
              <p>Vue</p>
            </div> */}
            {/* <div className='skill'>
              <span
                className='iconify'
                data-icon='skill-icons:vite-dark'
              ></span>
              <p>Vite</p>
            </div> */}
            <div className='skill'>
              <span className='iconify' data-icon='logos:python'></span>
              <p>Python</p>
            </div>
            <div className='skill'>
              <span
                className='iconify'
                data-icon='skill-icons:unity-dark'
              ></span>
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

        {/* <!-- PROJECT SHOWCASE --> */}

        <ProjectSection />

        {/* <section id='projects'>
          <div className='header'>
            <h2>My Projects</h2>
          </div>
          <div className='container'>
            {projects.map((project: any) => {
              return <ProjectCard project={project} />
            })} */}

        {/* <div className='card'>
              <div className='card-img card3'></div>
              <div className='card-text'>
                <h2>CourseExpo</h2>
                <p>
                  A collaborative VR/desktop learning environment built in Unity
                  for the University of Washington.
                </p>
              </div>
              <div className='btns expo'>
                <a
                  href='https://sites.uw.edu/crcs/projects/2022coursexpo-spatial-chat-and-collaborative-drawing/'
                  target='_blank'
                  className='demo'
                >
                  <i className='fa-solid fa-newspaper'></i> Article 1
                </a>
                <a
                  href='https://sites.uw.edu/crcs/projects/2022coursexpo-a-collaborative-virtual-learning-environment/'
                  target='_blank'
                  className='code'
                >
                  <i className='fa-solid fa-newspaper'></i> Article 2
                </a>
                <a
                  href='https://github.com/UWB-ARSandbox/2022_6_CourseExpo'
                  target='_blank'
                  className='code'
                >
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div> */}

        {/* <div className='card'>
              <div className='card-img card7'></div>
              <div className='card-text small'>
                <h2>FlashLearn</h2>
                <p>
                  A full-stack flash card app. Built with the MEAN stack.
                  Utilizes a REST API hosted in an EC2 instance. User data
                  managed by MongoDB.
                </p>
              </div>
              <div className='btns expo'>

                <a
                  href='https://github.com/rivereh/flashlearn'
                  target='_blank'
                  className='code'
                >
                  <i className='fa-solid fa-code'></i> Front-End
                </a>
                <a
                  href='https://github.com/rivereh/flashlearn-api'
                  target='_blank'
                  className='code'
                >
                  <i className='fas fa-code'></i> API
                </a>
              </div>
            </div> */}

        {/* <div className='card'>
              <div className='card-img card6'></div>
              <div className='card-text'>
                <h2>CV Builder</h2>
                <p>
                  Built with React and Material UI. Create a resume with instant
                  results. Utilized a CI/CD approach while developing.
                </p>
              </div>
              <div className='btns'>
                <a
                  href='https://rivereh.github.io/cv-builder/'
                  target='_blank'
                  className='demo'
                >
                  <i className='far fa-eye'></i> Demo
                </a>
                <a
                  href='https://github.com/rivereh/cv-builder'
                  target='_blank'
                  className='code'
                >
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div> */}

        {/* <div className='card' id='card'>
              <div className='card-img card8'></div>
              <div className='card-text'>
                <h2>Overflow</h2>
                <p>
                  An FPS free for all game made in Unity. Uses the UNET
                  muliplayer solution. Players fight against eachother to earn
                  the most points.
                </p>
              </div>
              <div className='btns'>
                <a
                  href='https://github.com/rivereh/overflow'
                  target='_blank'
                  className='code'
                >
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div> */}

        {/* <div className='card'>
              <div className='card-img card1'></div>
              <div className='card-text'>
                <h2>Animal Crossing Checklist</h2>
                <p>
                  A checklist to help users catch everything in Animal Crossing
                  built with Vue.
                </p>
              </div>
              <div className='btns'>
                <a
                  href='https://rivereh.github.io/ac-list/'
                  target='_blank'
                  className='demo'
                >
                  <i className='far fa-eye'></i> Demo
                </a>
                <a
                  href='https://github.com/rivereh/ac-list'
                  target='_blank'
                  className='code'
                >
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div> */}

        {/* <!-- <div className="card">
            <div className="card-img card5"></div>
            <div className="card-text">
              <h2>Font-End Work</h2>
              <p>Various small front-end projects including landing pages, technical documentation, and survey forms.</p>
            </div>
            <div className="btns">
              <a
                href="https://codepen.io/drpeppr"
                target="_blank"
                className="demo"
                ><i className="fab fa-codepen"></i> View on CodePen</a>
            </div>
          </div> --> */}

        {/* <div className='card'>
              <div className='card-img card2'></div>
              <div className='card-text'>
                <h2>Zombie Survival Game</h2>
                <p>
                  A wave based zombie survival game built in Unity. Features a
                  point collection system that enables players to purchase new
                  tools and upgrades, scaling difficulty, and leaderboards.
                </p>
              </div>
            </div> */}

        {/* <div className='card' id='card'>
              <div className='card-img card4'></div>
              <div className='card-text'>
                <h2>Backrooms Prototype</h2>
                <p>
                  A cooperative multiplayer puzzle game built in Unity with
                  <a href='https://www.photonengine.com/' target='_blank'>
                    {' '}
                    Photon{' '}
                  </a>
                  networking and
                  <a
                    href='https://placeholder-software.co.uk/dissonance/'
                    target='_blank'
                  >
                    {' '}
                    Dissonance{' '}
                  </a>
                  voice chat
                </p>
              </div>
            </div> */}
        {/* </div>
        </section> */}
      </main>
      <footer>
        <div className='header'>{/* <!-- <h2>Contact</h2> --> */}</div>
        <section id='contact'>
          {/* <!-- <form action="https://formsubmit.co/riverehill@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Name" required>
          <input type="email" name="email" placeholder="Email" required>
          <textarea name="message" placeholder="Message" style="height: 220px; overflow-y: hidden;" required></textarea>
          <button type="submit">Send</button>
        </form>  --> */}
          <div className='links'>
            <p>Get in touch</p>
            <div className='icons'>
              <a href='https://github.com/rivereh' target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
              <a href='http://linkedin.com/in/rivereh' target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='mailto:riverehill@gmail.com' target='_blank'>
                <i className='fa-solid fa-envelope'></i>
              </a>
            </div>
          </div>
        </section>
      </footer>

      <Script src='https://cdnjs.cloudflare.com/ajax/libs/iconify/3.1.1/iconify.min.js' />
    </div>
  )
}
