import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackgroound"
import { ThemeToggle } from "../components/ThemeToggle"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />


      {/* background effects */}
      <StarBackground />



      {/* navbar */}
      <Navbar />
      {/* main content */}

      <main>
        <HeroSection /> 
        <AboutSection />
        
        <SkillsSection />
        <ProjectSection />
        <ContactSection />

      </main>
      {/* footer */}

      <Footer/>
    </div>
  )
}

export default Home   // ✅ default export
