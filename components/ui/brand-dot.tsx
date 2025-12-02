/**
 * Componente para o ponto azul da marca Ness
 * Regra: ponto sempre #00ade8 (dark mode: #33BEE6)
 * Não quebra linha com a palavra (no-wrap)
 * Conforme Design e Branding da Ness - Regra do ponto azul
 */
export function BrandDot({ className = '' }: { className?: string }) {
  return (
    <span className={`text-[#00ade8] dark:text-primary-dark whitespace-nowrap font-bold ${className}`}>
      .
    </span>
  )
}

/**
 * Componente para wordmark completo (palavra + ponto azul)
 * Exemplo: ness., n.secops, trustness., etc.
 */
export function BrandWordmark({
  word,
  className = '',
  dotClassName = ''
}: {
  word: string
  className?: string
  dotClassName?: string
}) {
  return (
    <span className={`whitespace-nowrap ${className}`}>
      {word}
      <BrandDot className={dotClassName} />
    </span>
  )
}

