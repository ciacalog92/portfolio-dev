import { ClientSite } from './components/client/ClientSite'
import { DeveloperSite } from './components/DeveloperSite'
import { ModeSwitch } from './components/ModeSwitch'
import { ModeTransition } from './components/ModeTransition'
import { LanguageProvider } from './context/LanguageContext'
import { ViewModeProvider, useViewMode } from './context/ViewModeContext'

function Site() {
  const { mode } = useViewMode()
  return mode === 'developer' ? <DeveloperSite /> : <ClientSite />
}

function App() {
  return (
    <ViewModeProvider>
      <LanguageProvider>
        <Site />
        <ModeSwitch />
        <ModeTransition />
      </LanguageProvider>
    </ViewModeProvider>
  )
}

export default App
