'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX, LogOut, ShieldCheck, AlertTriangle, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandWordmark } from '@/components/ui/brand-dot'

// Components
import { CISControlsTable } from '@/components/presentation/cis-controls-table'
import { MaturityRadar } from '@/components/presentation/maturity-radar'
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'
import { PentestGrid } from '@/components/presentation/pentest-grid'
import { TaskStatusGrid } from '@/components/presentation/task-status-grid'
import { SectionDivider } from '@/components/presentation/section-divider'
import { CisStatusChart } from '@/components/presentation/cis-status-chart'

// Data
import {
  cisControls,
  workedControls,
  currentMaturity,
  vulnerabilityEvolution,
  totalVulnerabilitiesTrend,
  pentestApplications,
  pontosAtencao,
  tarefasPorStatus,
  implementationEvolution,
  maturityEvolution,
  statusVsReference,
  workedEvolution
} from '@/lib/presentation-data'

// Slides Configuration
const slides = [
  // SLIDE 1: Capa
  {
    type: 'title',
    title: 'Governança de Segurança da Informação',
    subtitle: 'Status de Implementação | Manesco | Novembro 2025',
    speakerNotes: 'Bem-vindos. Hoje apresentaremos o status atual da governança de segurança, seguindo o framework CIS Controls IG2.',
  },

  // SLIDE 2: Intro
  {
    type: 'content',
    title: 'Agenda',
    items: [
      '• Framework CIS Controls e Grupos de Implementação',
      '• Status da Aderência ao IG2',
      '• Gestão de Vulnerabilidades e Pentests',
      '• Status das Tarefas Prioritárias',
      '• Pontos de Atenção e Próximos Passos'
    ],
    speakerNotes: 'Nossa agenda cobre desde a metodologia até os resultados práticos e próximos passos.',
  },

  // SLIDE 3: Conceito CIS
  {
    type: 'content',
    title: 'Framework CIS Controls',
    items: [
      'O CIS Controls é um conjunto de práticas recomendadas para defesa cibernética.',
      '',
      'Grupos de Implementação (IGs):',
      '• IG1: Higiene básica cibernética (Pequenas/Médias empresas)',
      '• IG2: Organizações com dados sensíveis e infraestrutura complexa',
      '• IG3: Organizações com alta criticidade (Alvos sofisticados)',
    ],
    speakerNotes: 'O CIS é o padrão ouro. O IG2 é o nível adequado para a complexidade e responsabilidade da Manesco.',
  },

  // SLIDE 4: Contexto Manesco
  {
    type: 'content',
    title: 'Por que IG2 para Manesco?',
    items: [
      '• Infraestrutura de TI desenvolvida',
      '• Necessidade de proteção de dados sensíveis',
      '• Requisito de monitoramento contínuo',
      '• Controle de acessos avançado',
      '',
      'O IG2 estabelece uma base sólida de segurança e governança.',
    ],
    speakerNotes: 'Escolhemos o IG2 pois ele equilibra proteção robusta com viabilidade operacional para o perfil da Manesco.',
  },

  // SLIDE 5: Tabela Controles
  {
    type: 'cis-table',
    title: 'Escopo CIS v8 - IG2',
    subtitle: '18 Controles de Segurança',
    data: cisControls,
    speakerNotes: 'Estes são os 18 controles que compõem o framework. Estamos trabalhando ativamente em 8 deles.',
  },

  // SLIDE 6: Divisor
  {
    type: 'divider',
    title: 'Evolução dos Controles',
    subtitle: 'Status Atual e Comparativos',
  },

  // SLIDE 7: Status vs Referência
  {
    type: 'chart-bar',
    title: 'Status Atual vs Referência',
    data: statusVsReference,
    speakerNotes: 'Ainda temos um gap em relação à referência ideal do IG2, mas o progresso é consistente.',
  },

  // SLIDE 8: Evolução Temporal
  {
    type: 'chart-line',
    title: 'Evolução da Implantação',
    subtitle: 'Aderência Geral ao IG2 (Dez/23 - Nov/25)',
    data: implementationEvolution,
    lines: [{ dataKey: 'geral', name: 'Aderência Geral (%)', color: '#00ade8' }],
    speakerNotes: 'Crescemos de 15% para 45% de aderência geral em 6 meses.',
  },

  // SLIDE 9: Controles Trabalhados
  {
    type: 'cis-table',
    title: 'Controles Trabalhados',
    subtitle: 'Foco atual da equipe de segurança',
    data: workedControls,
    speakerNotes: 'Estamos priorizando estes 8 controles que trazem maior redução de risco imediato.',
  },

  // SLIDE 10: Evolução Trabalhados
  {
    type: 'chart-line',
    title: 'Evolução - Controles Trabalhados',
    subtitle: 'Progresso específico nos controles prioritários',
    data: workedEvolution,
    lines: [{ dataKey: 'trabalhados', name: 'Controles Trabalhados (%)', color: '#22c55e' }],
    speakerNotes: 'Nos controles prioritários, nossa evolução é ainda mais expressiva, chegando a 82%.',
  },

  // SLIDE 11: Radar Maturidade
  {
    type: 'radar',
    title: 'Maturidade Atual por Controle',
    data: currentMaturity,
    speakerNotes: 'A maioria dos controles está no nível "Repetitivo". O objetivo é chegar em "Definido" com a formalização.',
  },

  // SLIDE 12: Evolução Maturidade
  {
    type: 'chart-line',
    title: 'Evolução da Maturidade',
    subtitle: 'Nível médio (1=Inicial, 2=Repetitivo, 3=Definido)',
    data: maturityEvolution,
    lines: [{ dataKey: 'nivel', name: 'Nível Médio (%)', color: '#f59e0b' }],
    yAxisLabel: 'Nível de Maturidade (%)',
    speakerNotes: 'A maturidade evolui mais lentamente que a implantação técnica, pois depende de processos e pessoas.',
  },

  // SLIDE 13: Divisor Vulnerabilidades
  {
    type: 'divider',
    title: 'Gestão de Vulnerabilidades',
    subtitle: 'Scans, Análises e Correções',
  },

  // SLIDE 14: Vuln Mensal
  {
    type: 'vuln-chart',
    title: 'Vulnerabilidades: Novas vs Tratadas',
    subtitle: 'Evolução mensal (Servidores e Estações)',
    data: vulnerabilityEvolution,
    speakerNotes: 'Tivemos um pico em Setembro com a retomada dos scans, mas a capacidade de tratamento (linha verde) está acompanhando.',
  },

  // SLIDE 15: Vuln Total
  {
    type: 'vuln-trend', // Reusing vuln chart for trend or creating specific view
    title: 'Total de Vulnerabilidades Ativas',
    subtitle: 'Tendência de redução do backlog',
    data: totalVulnerabilitiesTrend.map(t => ({
      mes: t.periodo,
      total: t.total,
      novas: t.criticas + t.altas, // Proxy visualization
      tratadas: 0
    })),
    speakerNotes: 'O backlog total está caindo, indicando que estamos corrigindo mais rápido do que novas falhas aparecem.',
  },

  // SLIDE 16: Pentest Grid
  {
    type: 'pentest',
    title: 'Pentests em Aplicações',
    subtitle: 'Resultados da avaliação automatizada (Out/25)',
    data: pentestApplications,
    speakerNotes: 'Avaliamos 8 aplicações críticas. A maioria apresenta riscos baixos/médios, com poucos pontos críticos pontuais.',
  },

  // SLIDE 17: Divisor Tarefas
  {
    type: 'divider',
    title: 'Status das Tarefas',
    subtitle: 'Acompanhamento do Plano de Ação',
  },

  // SLIDE 18-23: Tarefas (Divided by status/priority logic for presentation flow)
  {
    type: 'tasks',
    title: 'Tarefas Concluídas (High Impact)',
    tasks: tarefasPorStatus.concluidas,
    speakerNotes: 'Entregas importantes: SIEM, Scans Automáticos e Hardening de servidores.',
  },
  {
    type: 'tasks',
    title: 'Tarefas em Andamento (1/2)',
    tasks: tarefasPorStatus.emAndamento.slice(0, 3),
    speakerNotes: 'Estamos focados agora na classificação de dados e proteção de rede.',
  },
  {
    type: 'tasks',
    title: 'Tarefas em Andamento (2/2)',
    tasks: tarefasPorStatus.emAndamento.slice(3),
    speakerNotes: 'Também avançando em sandbox de e-mail e testes de restore.',
  },
  {
    type: 'tasks',
    title: 'Tarefas Pendentes / Próximos Passos',
    tasks: tarefasPorStatus.pendentes,
    speakerNotes: 'O próximo ciclo focará fortemente em conscientização e resposta a incidentes.',
  },

  // SLIDE 24: Divisor Pontos Atenção
  {
    type: 'divider',
    title: 'Pontos de Atenção',
    subtitle: 'Riscos e Impedimentos',
  },

  // SLIDE 25: Lista Pontos Atenção
  {
    type: 'content',
    title: 'Principais Pontos de Atenção',
    items: pontosAtencao.map(p => `• ${p.titulo}: ${p.descricao}`),
    speakerNotes: 'A formalização dos processos é o nosso maior gargalo para subir de nível de maturidade.',
  },

  // SLIDE 26: Contato
  {
    type: 'contact',
    name: 'Mônica Yoshida',
    title: 'ness.',
    email: 'myoshida@ness.com.br',
    phone: '+55 11 2504-7650',
    speakerNotes: 'Obrigado. Dúvidas?',
  },
]

// --- Componentes de Slide ---

function TitleSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen gap-8 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="space-y-6 text-center max-w-4xl z-10">
        <h1 className="text-6xl md:text-7xl font-light text-slate-100 leading-tight tracking-tight">
          {data.title}
        </h1>
        <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full" />
        <p className="text-xl md:text-2xl text-slate-400 font-light">
          {data.subtitle}
        </p>
      </div>
    </motion.div>
  )
}

function ContentSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-screen gap-8 px-8 py-12 md:px-16"
    >
      <h2 className="text-4xl md:text-5xl font-light text-slate-100 border-l-4 border-blue-500 pl-6">
        {data.title}
      </h2>
      <div className="flex-1 space-y-6 overflow-y-auto pr-4 mt-8">
        {data.items.map((item: string, i: number) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`text-xl leading-relaxed ${item.startsWith('•') ? 'text-slate-300 pl-4' :
                item === '' ? 'h-4' :
                  'text-slate-200 font-medium'
              }`}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </motion.div>
  )
}

function TableSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-light text-slate-100">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        )}
      </div>
      <div className="flex-1 overflow-hidden bg-slate-900/50 rounded-2xl border border-slate-800 p-1">
        <CISControlsTable controls={data.data} />
      </div>
    </motion.div>
  )
}

function ChartSlide({ data, type }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-light text-slate-100">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        )}
      </div>
      <div className="flex-1 bg-slate-850/50 rounded-2xl border border-slate-800 p-6 backdrop-blur-sm flex items-center justify-center">
        {type === 'radar' && <MaturityRadar data={data.data} />}
        {type === 'chart-bar' && <CisStatusChart data={data.data} />}
        {type === 'chart-line' && <EvolutionTimeline data={data.data} lines={data.lines} yAxisLabel={data.yAxisLabel} />}
        {type === 'vuln-chart' && <VulnerabilityEvolutionChart data={data.data} />}
        {type === 'vuln-trend' && <VulnerabilityEvolutionChart data={data.data} />}
      </div>
    </motion.div>
  )
}

function GridSlide({ data, type }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-light text-slate-100">
          {data.title}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto pr-2">
        {type === 'pentest' && <PentestGrid applications={data.data} />}
        {type === 'tasks' && <TaskStatusGrid tasks={data.tasks} />}
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
      className="flex flex-col items-center justify-center h-screen gap-12 px-4 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="z-10 text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-light text-slate-100">
          {data.name}
        </h2>
        <div className="space-y-4">
          <p className="text-3xl text-blue-500 font-montserrat font-medium">
            <BrandWordmark word={data.title.replace('.', '')} />
          </p>
          <div className="h-px w-24 bg-slate-700 mx-auto" />
          <p className="text-xl text-slate-300">{data.email}</p>
          <p className="text-xl text-slate-300">{data.phone}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Renderizador Principal
function SlideRenderer({ slide }: { slide: any }) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide data={slide} />
    case 'content':
      return <ContentSlide data={slide} />
    case 'cis-table':
      return <TableSlide data={slide} />
    case 'divider':
      return <SectionDivider title={slide.title} subtitle={slide.subtitle} />
    case 'radar':
    case 'chart-bar':
    case 'chart-line':
    case 'vuln-chart':
    case 'vuln-trend':
      return <ChartSlide data={slide} type={slide.type} />
    case 'pentest':
    case 'tasks':
      return <GridSlide data={slide} type={slide.type} />
    case 'contact':
      return <ContactSlide data={slide} />
    default:
      return (
        <div className="flex items-center justify-center h-screen text-slate-500">
          Slide type not supported: {slide.type}
        </div>
      )
  }
}

// Componente Principal da Página
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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (current < slides.length - 1) setCurrent(current + 1)
      }
      if (e.key === 'ArrowLeft') {
        if (current > 0) setCurrent(current - 1)
      }
      if (e.key === 'n') {
        setShowNotes((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [current])

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col font-inter text-slate-200">
      {/* Área do Slide */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <SlideRenderer key={current} slide={slides[current]} />
        </AnimatePresence>
      </div>

      {/* Barra de Controle */}
      <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex items-center justify-between gap-4 z-50">
        <div className="flex items-center gap-4">
          <span className="text-slate-500 text-sm font-medium font-mono">
            {String(current + 1).padStart(2, '0')} / {slides.length}
          </span>
          <div className="h-1 w-24 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={prevSlide}
            disabled={current === 0}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={current === slides.length - 1}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setShowNotes(!showNotes)}
            variant="ghost"
            size="sm"
            className={`transition-colors ${showNotes ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
            title="Notas do apresentador (n)"
          >
            {showNotes ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="text-slate-500 hover:text-red-400 hover:bg-red-500/10"
            title="Sair"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Speaker Notes */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 max-w-5xl mx-auto">
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                <span className="text-blue-500 font-bold mr-2">SPEAKER:</span>
                {slides[current].speakerNotes}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
