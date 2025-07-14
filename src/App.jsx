import ContactForm from "./components/ContactForm"
import Education from "./components/Education"
import ExtraCurriculum from "./components/ExtraCurriculum"
import Footer from "./components/Footer"
import Home from "./components/home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (   
    <>
      <div className="flex flex-col">
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <ExtraCurriculum />
      <ContactForm />
      <Footer />
     </div>
    </>
  )
}

export default App
