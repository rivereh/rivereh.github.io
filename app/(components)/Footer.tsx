import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='mt-8'>
      <section id='contact'>
        <div className='links'>
          <p>Get in touch</p>
          <div className='flex justify-center text-4xl'>
            <a
              href='https://github.com/rivereh'
              target='_blank'
              className='footer-icon'
            >
              <FaGithub />
            </a>
            <a
              href='http://linkedin.com/in/rivereh'
              target='_blank'
              className='footer-icon'
            >
              <FaLinkedin />
            </a>
            <a
              href='mailto:riverehill@gmail.com'
              target='_blank'
              className='footer-icon'
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
