import { ChatBot } from './ChatBot'
import { WhatsAppButton } from './WhatsAppButton'

export function FloatingWidgets() {
  return (
    <div className="floating-widgets" aria-label="Azioni rapide">
      <ChatBot />
      <WhatsAppButton />
    </div>
  )
}
