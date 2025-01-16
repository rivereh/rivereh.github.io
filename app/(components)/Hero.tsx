import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaAngleDown } from 'react-icons/fa6'

const Hero = () => {
  return (
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
        <div className='mt-2 flex justify-center gap-4 text-4xl'>
          <a
            href='https://github.com/rivereh'
            target='_blank'
            className='hero-icon'
          >
            <FaGithub />
          </a>
          <a
            href='http://linkedin.com/in/rivereh'
            target='_blank'
            className='hero-icon'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:riverehill@gmail.com'
            target='_blank'
            className='hero-icon'
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <a href='#about' className='chevron'>
        <FaAngleDown />
      </a>
    </header>
  )
}
export default Hero
