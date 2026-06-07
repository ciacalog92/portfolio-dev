import { WhatsAppButton } from '../WhatsAppButton'
import { ClientAbout } from './ClientAbout'
import { ClientContact } from './ClientContact'
import { ClientFooter } from './ClientFooter'
import { ClientHeader } from './ClientHeader'
import { ClientHero } from './ClientHero'
import { ClientProjects } from './ClientProjects'
import { ClientServices } from './ClientServices'

/** Clean, professional client-facing view — the default. */
export function ClientSite() {
  return (
    <div className="client-site">
      <ClientHeader />
      <main>
        <ClientHero />
        <ClientServices />
        <ClientProjects />
        <ClientAbout />
        <ClientContact />
      </main>
      <ClientFooter />
      <div className="floating-widgets" aria-label="Azioni rapide">
        <WhatsAppButton />
      </div>
    </div>
  )
}
