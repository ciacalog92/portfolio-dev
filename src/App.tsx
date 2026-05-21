import { About } from './components/About'
import { CodeBackground } from './components/CodeBackground'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { FloatingWidgets } from './components/FloatingWidgets'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <CodeBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </LanguageProvider>
  )
}

export default App
