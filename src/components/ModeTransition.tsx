import { useViewMode } from '../context/ViewModeContext'

/**
 * Full-screen overlay played while switching views.
 * Switching to the developer view shows a glitchy "404" boot sequence;
 * switching back to the client view uses a clean light wash.
 * In both cases the overlay then dissolves to reveal the new view.
 */
export function ModeTransition() {
  const { phase, target } = useViewMode()

  if (phase === 'idle' || !target) return null

  const toDev = target === 'developer'

  return (
    <div
      className={[
        'mode-overlay',
        toDev ? 'mode-overlay--dev' : 'mode-overlay--client',
        phase === 'out' ? 'is-out' : 'is-in',
      ].join(' ')}
      aria-hidden
    >
      {toDev ? (
        <>
          <div className="mode-overlay__scan" />
          <div className="mode-overlay__inner">
            <p className="mode-overlay__tag">SYSTEM</p>
            <div className="glitch" data-text="404">
              404
            </div>
            <p className="mode-overlay__msg">ERR_CLIENT_VIEW_TERMINATED</p>
            <p className="mode-overlay__msg mode-overlay__msg--accent">
              {'> booting developer_mode'}
              <span className="mode-overlay__caret" />
            </p>
            <div className="mode-overlay__bar">
              <span />
            </div>
          </div>
        </>
      ) : (
        <div className="mode-overlay__inner">
          <span className="mode-overlay__spinner" />
          <p className="mode-overlay__client-msg">Vista cliente</p>
        </div>
      )}
    </div>
  )
}
