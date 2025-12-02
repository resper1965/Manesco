'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandWordmark } from '@/components/ui/brand-dot'

// Slides data
const slides = [
  {
    type: 'title',
    title: 'Governança de Segurança',
    subtitle: 'Status de Implementação | Manesco | Novembro 2025',
    speakerNotes: 'Bem-vindo. Vamos revisar onde chegamos e para onde vamos.',
  },
  {
    type: 'content',
    title: 'O que implementamos',
    items: [
      '✓ Framework CIS Controls IG2 estabelecido e operando',
      '✓ SIEM em operação (correlacionador de logs)',
      '✓ Scans de vulnerabilidades regulares (15 servidores, 151 estações)',
      '✓ Pentestes automatizados em 8 aplicações corporativas',
      '✓ 9 controles CIS sendo gerenciados ativamente',
    ],
    speakerNotes: 'Muito foi feito. Precisamos validar que continua. Pergunte: Vocês concordam com isto?',
  },
  {
    type: 'metrics',
    title: 'Status Atual',
    metrics: [
      { label: 'Cobertura CIS IG2', value: '45%', desc: 'Do padrão IG2' },
      { label: 'Servidores/Estações', value: '166', desc: 'Sob monitoramento' },
      { label: 'Controles Ativos', value: '9/18', desc: 'Em implementação' },
      { label: 'SIEM Status', value: 'Operando', desc: 'Nível: Repetitivo' },
    ],
    speakerNotes: 'Deixe silêncio após "45%". Deixe perguntar.',
  },
  {
    type: 'content',
    title: 'Oportunidade de Evolução',
    items: [
      '• Maturidade está em nível "Repetitivo" - próximo passo: "Definido"',
      '• Processos existem mas não estão formalizados/publicados',
      '• Resposta a incidentes ainda é reativa (4-8 horas)',
      '• Automação atual é limitada - muitas tarefas manuais',
      '• Comitê de Segurança não formalizado',
    ],
    speakerNotes: 'Tone neutro. Não é crítica, é observação. "Próximo nível natural é isto"',
  },
  {
    type: 'split',
    title: 'Próximo Nível de Maturidade',
    left: [
      { label: 'Hoje', status: 'Repetitivo', desc: 'Processos existem, executados manualmente' },
    ],
    right: [
      'Formalizar processos',
      'Automação de tarefas repetitivas',
      'Resposta a incidentes < 30min',
      'Formalizar Comitê',
      'Reduzir falsos positivos',
      'Dashboard executivo',
    ],
    speakerNotes: 'MOMENTO CRÍTICO! Pergunte: "Vocês concordam que o próximo nível é isto?" Se SIM → continue. Se NÃO → ajuste.',
  },
  {
    type: 'content',
    title: 'n.secops: Caminho para "Definido"',
    items: [
      'Serviço gerenciado que torna segurança operação contínua.',
      '',
      'O que muda:',
      '✓ Plataforma de compliance com CIS integrado',
      '✓ Automação de 80%+ das tarefas manuais',
      '✓ SOC 24x7 dedicado à Manesco',
      '✓ Resposta a incidentes em minutos, não horas',
      '✓ Formalização automática de processos',
    ],
    speakerNotes: 'Não é produto, é continuidade. "Há formas de acelerar isto".',
  },
  {
    type: 'metrics',
    title: 'Impacto Esperado (12 meses)',
    metrics: [
      { label: 'Cobertura CIS', value: '45% → 95%', desc: 'em 90 dias' },
      { label: 'Tempo Resposta', value: '4-8h → 15min', desc: 'Incidentes críticos' },
      { label: 'Automação', value: '20% → 85%', desc: 'Tarefas processadas' },
      { label: 'FTE Liberado', value: '~2 pessoas', desc: 'Tarefas estratégicas' },
    ],
    speakerNotes: 'Deixe números falarem. 3 segundos de silêncio após cada métrica.',
  },
  {
    type: 'timeline',
    title: 'Timeline: 6 Meses',
    phases: [
      { period: 'Semanas 1-4', phase: 'Discovery & Baseline', detail: 'Avaliação técnica, relatório' },
      { period: 'Semanas 5-12', phase: 'Implementação Core', detail: 'Plataforma, SIEM, automações' },
      { period: 'Semanas 13-20', phase: 'Governança & Otimização', detail: 'Comitê formal, SOAR' },
      { period: 'Semana 24+', phase: 'Operação Contínua', detail: 'SOC 24x7 gerenciado' },
    ],
    speakerNotes: 'Tone: "É estruturado, não é improviso"',
  },
  {
    type: 'content',
    title: 'Investimento & Retorno',
    items: [
      'Modelo SaaS + Serviços Profissionais',
      '',
      'Investimento: [A CUSTOMIZAR PÓS DISCOVERY]',
      '  • Implementação (6 meses): one-time',
      '  • Plataforma + SOC: mensal',
      '',
      'Retorno: Payback em 6-9 meses',
      '  • Apenas com economia de FTEs',
      '  • ROI adicional em redução de riscos',
    ],
    speakerNotes: '[Se perguntarem números] Customizamos após discovery. Payback é 6-9 meses. [Detalhar em 1:1 com CFO]',
  },
  {
    type: 'content',
    title: 'Por que Executar com ness.',
    items: [
      '✓ 34 anos em segurança cibernética',
      '✓ Experiência em healthcare (mesma complexidade)',
      '✓ Plataforma n.secops desenvolvida para mercado BR',
      '✓ Abordagem advisory + operacional',
      '✓ Suporte SLA 24x7 garantido',
    ],
    speakerNotes: 'Credibilidade, não pitch. Foque em track record.',
  },
  {
    type: 'content',
    title: 'Próximos Passos',
    items: [
      '1. Alinhamento de visão (workshop 1 dia)',
      '2. Avaliação técnica (2-3 semanas)',
      '3. Proposta customizada',
      '4. Kickoff do projeto',
    ],
    speakerNotes: '"Se vocês têm interesse em explorar isto..." Isto é CONVITE, não imposição.',
  },
  {
    type: 'contact',
    name: 'Mônica Yoshida',
    title: 'ness.',
    email: 'myoshida@ness.com.br',
    phone: '+55 11 2504-7650',
    speakerNotes: 'Deixe contato na tela. Agradeça. "Alguma pergunta?"',
  },
]

// Componentes da apresentação
function TitleSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen gap-8 px-4"
    >
      <div className="space-y-6 text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-light text-slate-100 leading-tight tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light">
          {data.subtitle}
        </p>
      </div>
    </motion.div>
  )
}

function ContentSlide({ data }: any) {
  // Verifica se o título contém marca (ness., n.secops, etc.)
  const hasBrand = data.title.includes('ness.') || data.title.includes('n.secops')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-screen gap-8 px-8 py-12 md:px-12"
    >
      <h2 className={`text-4xl md:text-5xl font-light text-slate-100 ${hasBrand ? 'font-montserrat font-medium' : ''}`}>
        {hasBrand && data.title.includes('n.secops') ? (
          <>
            n<span className="text-[#00ade8]">.</span>secops{data.title.split('n.secops')[1]}
          </>
        ) : hasBrand && data.title.includes('ness.') ? (
          <>
            ness<span className="text-[#00ade8]">.</span>{data.title.split('ness.')[1]}
          </>
        ) : (
          data.title
        )}
      </h2>
      <div className="flex-1 space-y-6 overflow-y-auto pr-4">
        {data.items.map((item: string, i: number) => {
          // Substitui referências de marca no conteúdo
          let content = item
          if (item.includes('n.secops') || item.includes('N.SecOps')) {
            content = item.replace(/n\.secops/gi, 'n.secops')
          }
          if (item.includes('NESS') || item.includes('ness.')) {
            content = item.replace(/NESS/gi, 'ness.')
          }
          
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-lg md:text-xl leading-relaxed ${
                item.includes('✓')
                  ? 'text-slate-200 font-medium'
                  : item === ''
                  ? 'h-2'
                  : 'text-slate-300'
              }`}
            >
              {content.includes('n.secops') ? (
                <>
                  {content.split('n.secops').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <>
                          n<span className="text-[#00ade8]">.</span>secops
                        </>
                      )}
                    </span>
                  ))}
                </>
              ) : content.includes('ness.') ? (
                <>
                  {content.split('ness.').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="font-montserrat font-medium">
                          ness<span className="text-[#00ade8]">.</span>
                        </span>
                      )}
                    </span>
                  ))}
                </>
              ) : (
                content
              )}
            </motion.p>
          )
        })}
      </div>
    </motion.div>
  )
}

function MetricsSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-8 px-8 py-12 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-light text-slate-100">
        {data.title}
      </h2>
      <div className="flex-1 grid md:grid-cols-2 gap-6">
        {data.metrics.map((metric: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-850 border border-slate-800/50 rounded-2xl p-8 space-y-4 backdrop-blur-sm"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-500">
              {metric.value}
            </div>
            <div className="text-lg font-medium text-slate-300">
              {metric.label}
            </div>
            <div className="text-sm text-slate-400">
              {metric.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function SplitSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-8 px-8 py-12 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-light text-slate-100">
        {data.title}
      </h2>
      <div className="flex-1 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="space-y-4">
          {data.left.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-850 rounded-xl p-6 space-y-2"
            >
              <div className="text-sm uppercase tracking-wider text-slate-400">
                {item.label}
              </div>
              <div className="text-2xl font-medium text-blue-500">
                {item.status}
              </div>
              <div className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Right */}
        <div className="space-y-4">
          {data.right.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (data.left.length + i) * 0.1 }}
              className="text-lg text-slate-300 flex items-start gap-3"
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TimelineSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-8 px-8 py-12 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-light text-slate-100">
        {data.title}
      </h2>
      <div className="flex-1 space-y-5 overflow-y-auto pr-4">
        {data.phases.map((phase: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="border-l-4 border-blue-500 pl-6 space-y-2"
          >
            <div className="text-lg font-medium text-blue-400">
              {phase.period}
            </div>
            <div className="text-xl text-slate-100 font-medium">
              {phase.phase}
            </div>
            <div className="text-slate-400 text-sm">
              {phase.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ContactSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen gap-12 px-4"
    >
      <div className="space-y-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-slate-100">
          {data.name}
        </h2>
        <div className="space-y-3">
          <p className="text-xl text-blue-500 font-montserrat font-medium">
            <BrandWordmark word={data.title.replace('.', '')} />
          </p>
          <p className="text-lg text-slate-300">{data.email}</p>
          <p className="text-lg text-slate-300">{data.phone}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Renderizador de slide
function SlideRenderer({ slide }: { slide: any }) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide data={slide} />
    case 'content':
      return <ContentSlide data={slide} />
    case 'metrics':
      return <MetricsSlide data={slide} />
    case 'split':
      return <SplitSlide data={slide} />
    case 'timeline':
      return <TimelineSlide data={slide} />
    case 'contact':
      return <ContactSlide data={slide} />
    default:
      return null
  }
}

// Componente principal
export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [showNotes, setShowNotes] = useState(true)
  const router = useRouter()

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  // Controle por teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (current < slides.length - 1) {
          setCurrent(current + 1)
        }
      }
      if (e.key === 'ArrowLeft') {
        if (current > 0) {
          setCurrent(current - 1)
        }
      }
      if (e.key === 'n') {
        setShowNotes((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [current])

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      {/* Apresentação */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <SlideRenderer key={current} slide={slides[current]} />
        </AnimatePresence>
      </div>

      {/* Controles */}
      <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
        <div className="text-slate-400 text-sm font-medium">
          {current + 1} / {slides.length}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={prevSlide}
            disabled={current === 0}
            variant="ghost"
            size="sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={current === slides.length - 1}
            variant="ghost"
            size="sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setShowNotes(!showNotes)}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-slate-200"
            title="Toggle speaker notes (n)"
          >
            {showNotes ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </Button>
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-red-400"
            title="Sair"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Speaker Notes */}
      {showNotes && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-slate-800/50 border-t border-slate-700 px-6 py-4 max-h-24 overflow-y-auto"
        >
          <p className="text-slate-300 text-sm leading-relaxed italic">
            {slides[current].speakerNotes}
          </p>
        </motion.div>
      )}
    </div>
  )
}
