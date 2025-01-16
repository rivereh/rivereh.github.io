import Image from 'next/image'

const AboutSection = () => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='about-me'>
          <h2>About Me</h2>
          <p>
            I graduated from the University of Washington in Computer Science
            and Software Engineering. My passion lies in solving complex
            problems and creating innovative solutions using the knowledge
            gained throughout my education. I&apos;m eager to apply my skills to
            real-world projects and continue learning and growing as a software
            engineer. My interests include full-stack web development and game
            development.
          </p>
        </div>
        <Image
          className='user-img'
          src='./pfp.png'
          alt='profile image'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  )
}
export default AboutSection
