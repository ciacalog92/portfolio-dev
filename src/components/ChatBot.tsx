import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { whatsappUrl } from '../config/site'

type Message = {
  id: string
  role: 'bot' | 'user'
  text: string
}

export function ChatBot() {
  const { locale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: 'greeting',
          role: 'bot',
          text: t.chatbot.greeting,
        },
      ])
    }
  }, [open, messages.length, t.chatbot.greeting])

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, typing])

  function askQuestion(id: string) {
    const item = t.chatbot.questions.find((q) => q.id === id)
    if (!item || typing) return

    const userMsg: Message = {
      id: `user-${id}-${Date.now()}`,
      role: 'user',
      text: item.q,
    }
    setMessages((prev) => [...prev, userMsg])
    setTyping(true)

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${id}-${Date.now()}`,
          role: 'bot',
          text: item.a,
        },
      ])
      setTyping(false)
    }, 700)
  }

  return (
    <div className="chat-widget">
      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label={t.chatbot.title}
        >
          <div className="chat-panel__bar">
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="chat-panel__title">{t.chatbot.windowTitle}</span>
            <button
              type="button"
              className="chat-panel__close"
              onClick={() => setOpen(false)}
              aria-label={t.chatbot.close}
            >
              ×
            </button>
          </div>

          <div className="chat-panel__messages" ref={scrollRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble chat-bubble--${msg.role}`}
              >
                {msg.role === 'bot' && (
                  <span className="chat-bubble__prefix" aria-hidden>
                    {'> '}
                  </span>
                )}
                {msg.role === 'user' && (
                  <span className="chat-bubble__prefix" aria-hidden>
                    {'$ '}
                  </span>
                )}
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="chat-bubble chat-bubble--bot chat-bubble--typing">
                <span className="chat-bubble__prefix" aria-hidden>
                  {'> '}
                </span>
                <span className="chat-typing">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
          </div>

          <div className="chat-panel__chips">
            <p className="chat-panel__chips-label">{t.chatbot.questionsLabel}</p>
            <div className="chat-chips">
              {t.chatbot.questions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="chat-chip"
                  onClick={() => askQuestion(item.id)}
                  disabled={typing}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-panel__footer">
            <a
              href={whatsappUrl(locale)}
              className="chat-panel__link chat-panel__link--wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.chatbot.whatsappCta}
            </a>
            <a href="#contact" className="chat-panel__link" onClick={() => setOpen(false)}>
              {t.chatbot.contactCta}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`fab fab--chat ${open ? 'fab--active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? t.chatbot.close : t.chatbot.open}
        title={t.chatbot.open}
      >
        {open ? (
          <span className="fab__glyph" aria-hidden>
            ×
          </span>
        ) : (
          <span className="fab__glyph fab__glyph--code" aria-hidden>
            {'</>'}
          </span>
        )}
      </button>
    </div>
  )
}
