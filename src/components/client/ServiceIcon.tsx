type ServiceIconProps = {
  index: number
}

/** Minimal line icons matching the four service cards (order from translations). */
const ICONS = [
  // Business management — dashboard
  <>
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </>,
  // Websites — browser
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 6.5h.01M10 6.5h.01" />
  </>,
  // APIs & integrations — plug / connect
  <>
    <path d="M5 12h4" />
    <path d="M15 12h4" />
    <rect x="9" y="8" width="6" height="8" rx="2" />
    <path d="M12 5V3M9 5V3M15 5V3" />
  </>,
  // Consulting — chat / idea
  <>
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.7-.8L3 21l1.8-5.3A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M9 10h6M9 13h4" />
  </>,
]

export function ServiceIcon({ index }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[index % ICONS.length]}
    </svg>
  )
}
