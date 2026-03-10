import ContactForm from "./Sections/ContactForm"
import Education from "./Sections/Education"
import ExtraCurriculum from "./Sections/ExtraCurriculum"
import Footer from "./components/Footer"
import Hero from "./Sections/Hero"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./Sections/Projects"
import Skills from "./Sections/Skills"
import BackgroundParticles from "./components/BackgroundParticles"

function App() {
  return (   
    <>
      <div className="flex flex-col">
      <Navbar />
      <Hero />
      <BackgroundParticles/>
      <Skills />
      <Education/>
      <Projects />
      <ExtraCurriculum />
      <ContactForm />
      <Footer />
     </div>
    </>
  )
}

export default App
