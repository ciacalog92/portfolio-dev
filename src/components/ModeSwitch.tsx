import { useLanguage } from '../context/LanguageContext'
import { useViewMode } from '../context/ViewModeContext'

/** Persistent floating control that lets visitors switch between the two views. */
export function ModeSwitch() {
  const { mode, phase, toggle } = useViewMode()
  const { t } = useLanguage()
  const toDev = mode === 'client'

  return (
    <button
      type="button"
      className={`mode-switch ${toDev ? 'mode-switch--dev' : 'mode-switch--client'}`}
      onClick={toggle}
      disabled={phase !== 'idle'}
      aria-label={toDev ? t.client.toDev : t.client.toClient}
      title={toDev ? t.client.toDev : t.client.toClient}
    >
      <span className="mode-switch__icon" aria-hidden>
        {toDev ? '</>' : '◑'}
      </span>
      <span className="mode-switch__label">
        {toDev ? t.client.toDev : t.client.toClient}
      </span>
    </button>
  )
}
