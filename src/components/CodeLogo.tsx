type CodeLogoProps = {
  variant?: 'full' | 'compact' | 'snippet'
  className?: string
}

export function CodeLogo({ variant = 'full', className = '' }: CodeLogoProps) {
  const base = `code-logo ${className}`.trim()

  if (variant === 'compact') {
    return (
      <span className={`${base} code-logo--compact`} aria-hidden>
        <span className="code-logo__brace">{'{'}</span>
        <span className="code-logo__name">CC</span>
        <span className="code-logo__brace">{'}'}</span>
      </span>
    )
  }

  if (variant === 'snippet') {
    return (
      <pre className={`${base} code-logo--snippet`}>
        <code>
          <span className="code-logo__kw">export const</span>{' '}
          <span className="code-logo__name">developer</span>{' '}
          <span className="code-logo__op">=</span> {'{\n'}
          {'  '}
          <span className="code-logo__prop">name</span>
          <span className="code-logo__op">: </span>
          <span className="code-logo__str">&apos;Calogero&apos;</span>
          <span className="code-logo__punct">,</span>
          {'\n'}
          {'  '}
          <span className="code-logo__prop">surname</span>
          <span className="code-logo__op">: </span>
          <span className="code-logo__str">&apos;Ciaccio&apos;</span>
          <span className="code-logo__punct">,</span>
          {'\n'}
          {'  '}
          <span className="code-logo__prop">role</span>
          <span className="code-logo__op">: </span>
          <span className="code-logo__str">&apos;web dev&apos;</span>
          {'\n'}
          <span className="code-logo__brace">{'}'}</span>
        </code>
      </pre>
    )
  }

  return (
    <span className={base}>
      <span className="code-logo__kw">const</span>{' '}
      <span className="code-logo__name">calogero</span>
      <span className="code-logo__op"> = </span>
      <span className="code-logo__str">&quot;Ciaccio&quot;</span>
      <span className="code-logo__punct">;</span>
    </span>
  )
}
