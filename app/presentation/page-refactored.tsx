/**
 * PROFESSIONAL PRESENTATION - Refactored with Shadcn Design System
 * Complete homogeneous design using consistent components
 */
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Shield,
  Target,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  FileSearch,
  CheckSquare,
  Users,
  Lock,
  Laptop,
  Server,
  Activity,
  Map,
  Maximize,
  Minimize,
  HelpCircle,
  Palette,
  Award,
  FileText,
  Mail,
  BarChart3,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// New Professional Components
import { SlideLayout, ContentContainer } from '@/components/slides/SlideLayout'
import { DataCard, MiniDataCard } from '@/components/slides/DataCard'
import { ChartCard, CompactChartCard } from '@/components/slides/ChartCard'
import { MetricGrid } from '@/components/slides/MetricGrid'
import { StatusIndicator, StatusBadge, StatusGrid, ProgressStatus } from '@/components/slides/StatusIndicator'
import { SectionHeader, SubsectionHeader } from '@/components/slides/SectionHeader'
import { InfoPanel, FeatureList, StatsRow } from '@/components/slides/InfoPanel'

// Original Components (for charts)
import { CISControlsTable } from '@/components/presentation/cis-controls-table'
import { MaturityRadar } from '@/components/presentation/maturity-radar'
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'
import { CisStatusChart } from '@/components/presentation/cis-status-chart'

// Advanced UX Components
import { MinimapOverlay } from '@/components/presentation/slide-minimap'
import { PresenterView } from '@/components/presentation/presenter-mode'
import { ProgressIndicator, SectionProgress } from '@/components/presentation/progress-indicator'
import { KeyboardShortcutsPanel, useKeyboardShortcuts } from '@/components/presentation/keyboard-shortcuts'
import { PageTransition, Direction } from '@/components/presentation/slide-transition'

// Data
import {
  cisControls,
  workedControls,
  currentMaturity,
  vulnerabilityEvolution,
  totalVulnerabilitiesTrend,
  pentestApplications,
  pontosAtencao,
  tarefas,
  implementationEvolution,
  maturityEvolution,
  statusVsReference,
  workedEvolution,
  vulnerabilityScanScope,
  pentestSummary
} from '@/lib/presentation-data'

// Define sections for navigation
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 4, icon: <BookOpen className="w-4 h-4" /> },
  { title: 'Controles CIS', startIndex: 5, endIndex: 12, icon: <Shield className="w-4 h-4" /> },
  { title: 'Vulnerabilidades', startIndex: 13, endIndex: 16, icon: <AlertTriangle className="w-4 h-4" /> },
  { title: 'Pentests', startIndex: 17, endIndex: 18, icon: <FileSearch className="w-4 h-4" /> },
  { title: 'Plano de Ação', startIndex: 19, endIndex: 24, icon: <CheckSquare className="w-4 h-4" /> },
  { title: 'Conclusão', startIndex: 25, endIndex: 27, icon: <TrendingUp className="w-4 h-4" /> },
]

// ====== SLIDE COMPONENTS ======

/**
 * Slide 1: Professional Title Slide
 */
function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12 px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="z-10 space-y-12 text-center max-w-5xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex justify-center"
        >
          <div className="p-8 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-3xl border-2 border-primary-500/30 shadow-[0_0_50px_rgba(0,173,232,0.3)]">
            <Shield className="w-24 h-24 text-primary-400" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-neutral-50 leading-tight tracking-tight">
            Governança de<br />Segurança da Informação
          </h1>

          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full" />

          <p className="text-2xl md:text-3xl text-neutral-300 font-medium">
            Status de Implementação CIS Controls IG2
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-8 text-neutral-400 text-xl"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-800/50 border border-neutral-700/50">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
            <span className="font-semibold">Manesco</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-800/50 border border-neutral-700/50">
            <Clock className="w-5 h-5 text-primary-400" />
            <span>Novembro 2025</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/**
 * Slide 2: Executive Overview with Professional KPIs
 */
function ExecutiveOverviewSlide() {
  const latestImplementation = implementationEvolution[implementationEvolution.length - 1]
  const latestMaturity = maturityEvolution[maturityEvolution.length - 1]
  const latestVuln = totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1]
  const previousVuln = totalVulnerabilitiesTrend[0]

  const vulnReduction = ((previousVuln.total - latestVuln.total) / previousVuln.total) * 100
  const criticalReduction = ((previousVuln.criticas - latestVuln.criticas) / previousVuln.criticas) * 100

  const metrics = [
    {
      id: 'adherence',
      label: 'Aderência ao IG2',
      value: `${latestImplementation.geral}%`,
      icon: Target,
      trend: {
        value: 200, // 45% from ~15% baseline
        direction: 'up' as const,
        label: 'desde Dez/23'
      },
      status: 'success' as const,
      subtitle: 'Crescimento consistente'
    },
    {
      id: 'controls',
      label: 'Controles Ativos',
      value: `${workedControls.length}/${cisControls.length}`,
      icon: Shield,
      status: 'info' as const,
      subtitle: 'Controles priorizados'
    },
    {
      id: 'vulns',
      label: 'Redução de Vulnerabilidades',
      value: `${Math.round(vulnReduction)}%`,
      icon: TrendingDown,
      trend: {
        value: vulnReduction,
        direction: 'up' as const,
        label: 'em 30 dias'
      },
      status: 'success' as const,
      subtitle: 'De 771 para 406'
    },
    {
      id: 'critical',
      label: 'Vulnerabilidades Críticas',
      value: latestVuln.criticas,
      icon: AlertCircle,
      trend: {
        value: criticalReduction,
        direction: 'down' as const,
        label: 'redução de 94%'
      },
      status: latestVuln.criticas > 50 ? 'danger' as const : latestVuln.criticas > 20 ? 'warning' as const : 'success' as const,
      subtitle: 'De 345 para 22'
    },
    {
      id: 'pentest',
      label: 'Aplicações Testadas',
      value: pentestSummary.totalApps,
      icon: FileSearch,
      status: 'info' as const,
      subtitle: `${pentestSummary.totalVulnerabilities} vulnerabilidades`
    },
    {
      id: 'maturity',
      label: 'Maturidade Média',
      value: `${latestMaturity.nivel}%`,
      icon: Activity,
      status: 'neutral' as const,
      subtitle: 'Nível Repetitivo'
    },
  ]

  return (
    <SlideLayout
      title="Visão Executiva"
      subtitle="Principais indicadores de segurança e governança"
      icon={BarChart3}
      variant="default"
    >
      <ContentContainer variant="stack" gap={8}>
        <MetricGrid
          metrics={metrics}
          columns={3}
          variant="detailed"
          staggerDelay={0.08}
        />

        <InfoPanel variant="highlight" status="info">
          <p className="text-lg">
            <strong>Progresso Significativo:</strong> Em 23 meses, a Manesco evoluiu de 15% para 45% de aderência ao IG2,
            com redução expressiva de 47% no total de vulnerabilidades e eliminação de 94% das vulnerabilidades críticas.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

/**
 * Slide 3: Agenda
 */
function AgendaSlide() {
  const agendaItems = [
    {
      id: '1',
      title: 'Framework CIS Controls e Grupos de Implementação',
      description: 'Entendimento do padrão global de defesa cibernética',
      icon: Shield
    },
    {
      id: '2',
      title: 'Status da Aderência ao IG2',
      description: 'Progresso atual nos 18 controles do framework',
      icon: Target
    },
    {
      id: '3',
      title: 'Gestão de Vulnerabilidades e Pentests',
      description: 'Análise de riscos e testes de segurança',
      icon: AlertTriangle
    },
    {
      id: '4',
      title: 'Status das Tarefas Prioritárias',
      description: 'Roadmap de implementação e entregas',
      icon: CheckSquare
    },
    {
      id: '5',
      title: 'Pontos de Atenção e Próximos Passos',
      description: 'Riscos, impedimentos e planejamento',
      icon: TrendingUp
    },
  ]

  return (
    <SlideLayout
      title="Agenda"
      icon={BookOpen}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <FeatureList
          items={agendaItems}
          columns={1}
          variant="default"
          staggerDelay={0.1}
        />
      </ContentContainer>
    </SlideLayout>
  )
}

/**
 * Slide 4: CIS Framework Concept
 */
function CISConceptSlide() {
  return (
    <SlideLayout
      title="Framework CIS Controls"
      subtitle="Padrão global de defesa cibernética desenvolvido por especialistas"
      icon={Award}
      variant="default"
    >
      <ContentContainer variant="stack" gap={8}>
        <InfoPanel variant="glassmorphic" status="info">
          <p className="text-xl leading-relaxed">
            O <strong>CIS Controls</strong> é um conjunto de práticas recomendadas para defesa cibernética,
            desenvolvido por especialistas globais em segurança da informação. É o padrão ouro para
            organizações que buscam proteção efetiva contra ameaças modernas.
          </p>
        </InfoPanel>

        <SubsectionHeader
          title="Grupos de Implementação"
          description="Níveis progressivos de maturidade em segurança"
          icon={Target}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DataCard
            title="IG1"
            value="Básico"
            subtitle="Higiene cibernética fundamental"
            icon={Server}
            status="neutral"
          >
            <p className="text-sm text-neutral-400 mt-3">
              Para organizações com recursos limitados e infraestrutura simples
            </p>
          </DataCard>

          <DataCard
            title="IG2"
            value="Avançado"
            subtitle="Dados sensíveis e infraestrutura complexa"
            icon={Shield}
            status="success"
          >
            <p className="text-sm text-neutral-400 mt-3">
              <strong>Adequado para Manesco:</strong> Proteção robusta para ambientes corporativos
            </p>
          </DataCard>

          <DataCard
            title="IG3"
            value="Máximo"
            subtitle="Alta criticidade e alvos sofisticados"
            icon={Lock}
            status="neutral"
          >
            <p className="text-sm text-neutral-400 mt-3">
              Para organizações de infraestrutura crítica ou alvos de APTs
            </p>
          </DataCard>
        </div>
      </ContentContainer>
    </SlideLayout>
  )
}

/**
 * Slide 5: Why IG2 for Manesco
 */
function WhyIG2Slide() {
  const reasons = [
    {
      id: '1',
      title: 'Infraestrutura de TI desenvolvida e diversificada',
      description: '166 ativos monitorados (15 servidores + 151 estações)',
      icon: Laptop
    },
    {
      id: '2',
      title: 'Proteção de dados sensíveis e confidenciais',
      description: 'Responsabilidade sobre informações críticas de negócio',
      icon: Lock
    },
    {
      id: '3',
      title: 'Monitoramento contínuo e resposta a ameaças',
      description: 'SIEM implementado com detecção proativa',
      icon: Activity
    },
    {
      id: '4',
      title: 'Controle de acessos avançado e gestão de identidades',
      description: 'MFA, gestão de privilégios e controle granular',
      icon: Users
    },
  ]

  return (
    <SlideLayout
      title="Por que IG2 para Manesco?"
      subtitle="Adequação ao perfil e necessidades organizacionais"
      icon={Target}
      variant="default"
    >
      <ContentContainer variant="stack" gap={8}>
        <FeatureList
          items={reasons}
          columns={2}
          variant="default"
          staggerDelay={0.1}
        />

        <InfoPanel variant="highlight" status="success">
          <p className="text-lg">
            <strong>Conclusão:</strong> O IG2 estabelece uma base sólida de segurança e governança adequada
            ao porte e responsabilidade da organização, equilibrando proteção robusta com viabilidade operacional.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ====== MAIN PRESENTATION COMPONENT ======

const slides = [
  { id: 0, component: TitleSlide, type: 'title', notes: 'Bem-vindos. Apresentação executiva do status atual da governança de segurança.' },
  { id: 1, component: ExecutiveOverviewSlide, type: 'overview', notes: 'Visão geral dos principais KPIs com evolução significativa.' },
  { id: 2, component: AgendaSlide, type: 'agenda', notes: 'Nossa agenda cobre desde a metodologia até os resultados práticos.' },
  { id: 3, component: CISConceptSlide, type: 'concept', notes: 'O CIS é o padrão ouro em defesa cibernética.' },
  { id: 4, component: WhyIG2Slide, type: 'justification', notes: 'IG2 é o nível adequado para a complexidade da Manesco.' },
  // TODO: Add remaining slides (6-28)
]

export default function ProfessionalPresentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [showMinimap, setShowMinimap] = useState(false)
  const [showPresenter, setShowPresenter] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'high-contrast'>('dark')
  const router = useRouter()

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setDirection('forward')
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setDirection('backward')
      setCurrent(current - 1)
    }
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > current ? 'forward' : 'backward')
      setCurrent(index)
    }
  }

  const goToSection = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < slideSections.length) {
      goToSlide(slideSections[sectionIndex].startIndex)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
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

  useKeyboardShortcuts({
    onNext: nextSlide,
    onPrevious: prevSlide,
    onFirst: () => goToSlide(0),
    onLast: () => goToSlide(slides.length - 1),
    onToggleNotes: () => {},
    onToggleFullscreen: toggleFullscreen,
    onTogglePresenter: () => setShowPresenter(prev => !prev),
    onToggleMinimap: () => setShowMinimap(prev => !prev),
    onToggleHelp: () => setShowHelp(prev => !prev),
    onToggleTheme: () => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark'),
    onGotoSection: goToSection,
  })

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = slides[current].component

  return (
    <div className={`min-h-screen flex flex-col font-inter text-neutral-200 ${theme === 'high-contrast' ? 'bg-black' : 'bg-neutral-950'}`}>
      {/* Slide Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={current} direction={direction}>
            <CurrentSlideComponent />
          </PageTransition>
        </AnimatePresence>
      </div>

      {/* Control Bar */}
      <div className="bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-800 px-6 py-3 z-50">
        <div className="mb-3">
          <SectionProgress
            sections={slideSections}
            currentSlide={current}
            onNavigate={goToSlide}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <ProgressIndicator
              current={current}
              total={slides.length}
              sections={slideSections}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={prevSlide}
              disabled={current === 0}
              variant="ghost"
              size="sm"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={current === slides.length - 1}
              variant="ghost"
              size="sm"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowMinimap(true)}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-neutral-300"
            >
              <Map className="w-4 h-4" />
            </Button>

            <PresenterView
              isOpen={showPresenter}
              onToggle={() => setShowPresenter(prev => !prev)}
              currentSlide={{ speakerNotes: slides[current].notes }}
              nextSlide={current < slides.length - 1 ? { speakerNotes: slides[current + 1].notes } : null}
              currentIndex={current}
              totalSlides={slides.length}
            />

            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-neutral-300"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>

            <Button
              onClick={() => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark')}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-neutral-300"
            >
              <Palette className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => setShowHelp(true)}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-neutral-300"
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-red-400"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Overlays */}
      <MinimapOverlay
        isOpen={showMinimap}
        onClose={() => setShowMinimap(false)}
        slides={slides.map((s, i) => ({ type: s.type, speakerNotes: s.notes }))}
        currentSlide={current}
        onNavigate={goToSlide}
        sections={slideSections}
      />

      <KeyboardShortcutsPanel
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  )
}
