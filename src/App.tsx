import { About } from './components/About'
import { CodeBackground } from './components/CodeBackground'
import { ProjectQuiz } from './components/ProjectQuiz'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { FloatingWidgets } from './components/FloatingWidgets'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CodeBackground />
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <ProjectQuiz />
          <Contact />
        </main>
        <Footer />
        <FloatingWidgets />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
