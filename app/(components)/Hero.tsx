import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaAngleDown } from 'react-icons/fa6'
import Image from 'next/image'

const Hero = () => {
  return (
    <header id='home' className='vignette'>
      <nav id='nav'>
        <div className='nav-text'>
          <h3>
            River <span>Hill</span>
          </h3>
        </div>
        <Image
          src='./pfp.png'
          alt='nav icon'
          className='nav-icon'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '40px', height: 'auto' }}
        />
      </nav>

      {/* <!-- HERO SECTION --> */}
      <div className='hero'>
        <h1>Hi, I&apos;m River</h1>
        <p>A software engineer from Seattle, WA</p>
        <div className='btns'>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
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
