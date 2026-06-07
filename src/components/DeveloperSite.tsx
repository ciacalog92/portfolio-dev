import { About } from './About'
import { CodeBackground } from './CodeBackground'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Services } from './Services'
import { FloatingWidgets } from './FloatingWidgets'

/** The original code-themed portfolio, now one of two switchable views. */
export function DeveloperSite() {
  return (
    <div className="dev-site">
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
    </div>
  )
}
