import ProjectSection from './(components)/ProjectSection'
import Footer from './(components)/Footer'
import Hero from './(components)/Hero'
import AboutSection from './(components)/AboutSection'
import SkillSection from './(components)/SkillSection'
import BackToTopButton from './(components)/BackToTopButton'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <BackToTopButton />
      <Footer />
    </div>
  )
}
