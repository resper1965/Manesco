/**
 * APRESENTAÇÃO PROFISSIONAL - MANESCO ADVOGADOS
 * Governança de Segurança da Informação - CIS Controls v8.1 IG2
 * Marca: Ness (#00ade8)
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
  AlertTriangle,
  FileSearch,
  CheckSquare,
  Award,
  BarChart3,
  Activity,
  Map,
  Maximize,
  Minimize,
  HelpCircle,
  Palette,
  Lock,
  FileText,
  Users,
  CheckCircle2,
  Clock,
  Server,
  Laptop,
  AlertCircle,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Professional Components
import { SlideLayout, ContentContainer } from '@/components/slides/SlideLayout'
import { DataCard, MiniDataCard } from '@/components/slides/DataCard'
import { ChartCard } from '@/components/slides/ChartCard'
import { MetricGrid } from '@/components/slides/MetricGrid'
import { StatusIndicator, StatusBadge, ProgressStatus } from '@/components/slides/StatusIndicator'
import { SectionHeader } from '@/components/slides/SectionHeader'
import { InfoPanel, FeatureList } from '@/components/slides/InfoPanel'

// Chart Components
import { CISControlsTable } from '@/components/presentation/cis-controls-table'
import { MaturityRadar } from '@/components/presentation/maturity-radar'
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'
import { CisStatusChart } from '@/components/presentation/cis-status-chart'
import { SectionDivider } from '@/components/presentation/section-divider'

// UX Components
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
  pentestSummary,
  cisStatusData
} from '@/lib/presentation-data'

// Sections
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 3, icon: <Shield className="w-4 h-4" /> },
  { title: 'Controles CIS', startIndex: 4, endIndex: 9, icon: <Target className="w-4 h-4" /> },
  { title: 'Vulnerabilidades', startIndex: 10, endIndex: 11, icon: <AlertTriangle className="w-4 h-4" /> },
  { title: 'Pentests', startIndex: 12, endIndex: 12, icon: <FileSearch className="w-4 h-4" /> },
  { title: 'Tarefas', startIndex: 13, endIndex: 15, icon: <CheckSquare className="w-4 h-4" /> },
  { title: 'Pontos de Atenção', startIndex: 16, endIndex: 16, icon: <AlertCircle className="w-4 h-4" /> },
]

// ========== SLIDE 1: LOGO TRUSTNESS ==========
function Slide01_LogoTrustness() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary-500/20 blur-3xl scale-150 animate-pulse" />

        {/* Logo */}
        <div className="relative p-16 rounded-3xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-2 border-primary-500/30">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl font-montserrat font-medium tracking-tight">
                <span className="text-neutral-50">trustness</span>
                <span className="text-[#00ade8]">.</span>
              </h1>
              <p className="text-xl text-neutral-400">Security by Design</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ========== SLIDE 2: CAPA ==========
function Slide02_Capa() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12 px-8 relative overflow-hidden">
      {/* Background */}
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
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-50 leading-tight">
            Governança de<br />Segurança da Informação
          </h1>

          <h2 className="text-3xl md:text-4xl text-primary-400 font-semibold">
            Manesco Advogados
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-8 text-neutral-400 text-xl"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-800/50 border border-neutral-700/50">
            <Clock className="w-5 h-5 text-primary-400" />
            <span>Novembro 2025</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ========== SLIDE 3: CONTEXTUALIZAÇÃO CIS ==========
function Slide03_ContextualizacaoCIS() {
  return (
    <SlideLayout
      title="CIS Controls v8.1 IG2"
      subtitle="Padrão Global de Defesa Cibernética"
      icon={Award}
      variant="default"
    >
      <ContentContainer variant="stack" gap={8}>
        <InfoPanel variant="glassmorphic" status="info">
          <p className="text-xl leading-relaxed">
            O <strong className="text-primary-400">CIS Controls</strong> é um conjunto de práticas recomendadas
            para defesa cibernética, desenvolvido por especialistas globais em segurança da informação.
            É o padrão de referência para organizações que buscam proteção efetiva contra ameaças modernas.
          </p>
        </InfoPanel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DataCard
            title="IG1"
            value="Básico"
            subtitle="Higiene cibernética essencial"
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
            subtitle="Infraestrutura complexa"
            icon={Shield}
            status="success"
          >
            <p className="text-sm text-neutral-200 mt-3 font-semibold">
              ✓ Adequado para Manesco Advogados
            </p>
            <p className="text-sm text-neutral-400 mt-1">
              Proteção de dados sensíveis e infraestrutura desenvolvida
            </p>
          </DataCard>

          <DataCard
            title="IG3"
            value="Máximo"
            subtitle="Alta criticidade"
            icon={Lock}
            status="neutral"
          >
            <p className="text-sm text-neutral-400 mt-3">
              Para infraestrutura crítica ou alvos de ameaças avançadas
            </p>
          </DataCard>
        </div>

        <InfoPanel variant="highlight" status="success">
          <p className="text-lg">
            <strong>Por que IG2?</strong> O Manesco Advogados possui infraestrutura de TI desenvolvida,
            dados sensíveis e necessidade de monitoramento contínuo. O IG2 equilibra proteção robusta
            com viabilidade operacional.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 4: LISTA 18 CONTROLES ==========
function Slide04_Lista18Controles() {
  return (
    <div className="flex flex-col h-screen p-8 gap-4 relative overflow-hidden bg-neutral-950">
      {/* Header compacto */}
      <div className="flex items-start gap-4 shrink-0">
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full" />
            <div className="relative p-3 bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 rounded-xl">
              <Target className="w-6 h-6 text-primary-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-light text-neutral-50 tracking-tight leading-tight">
            Escopo CIS v8.1 - IG2
          </h1>
          <p className="text-base text-neutral-400 font-light mt-1">
            18 Controles de Segurança
          </p>
        </div>
      </div>
      {/* Conteúdo */}
      <div className="flex-1 overflow-hidden min-h-0">
        <div className="grid grid-cols-3 gap-3 h-full auto-rows-fr">
          {cisControls.map((control, index) => (
            <motion.div
              key={control.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              className={`
                relative flex flex-col p-2 rounded-lg border
                backdrop-blur-sm transition-all duration-300 group
                ${control.excluded 
                  ? 'bg-neutral-900/30 border-neutral-800/50 opacity-50 grayscale' 
                  : control.worked
                  ? 'bg-primary-500/10 border-primary-500/30 hover:border-primary-500/50'
                  : 'bg-neutral-900/50 border-neutral-800/50 hover:border-primary-500/30'
                }
              `}
            >
              {/* Número do controle */}
              <div className={`
                absolute -top-1.5 -left-1.5 w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold
                ${control.excluded 
                  ? 'bg-neutral-800 text-neutral-600' 
                  : control.worked
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-neutral-800 text-neutral-400'
                }
              `}>
                {control.id}
              </div>

              {/* Status badge */}
              {control.worked && !control.excluded && (
                <div className="absolute -top-1 -right-1">
                  <div className="w-3 h-3 rounded-full bg-primary-500 border-2 border-neutral-900" />
                </div>
              )}

              {/* Conteúdo */}
              <div className="flex-1 flex flex-col pt-4">
                <p className={`
                  text-xs leading-snug font-medium flex-1
                  ${control.excluded 
                    ? 'text-neutral-600' 
                    : control.worked
                    ? 'text-neutral-100'
                    : 'text-neutral-400'
                  }
                `}>
                  {control.name}
                </p>
              </div>

              {/* Indicador trabalhado */}
              {control.worked && !control.excluded && (
                <div className="mt-1.5 pt-1.5 border-t border-primary-500/20">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-primary-400" />
                    <span className="text-[10px] text-primary-400 font-medium">Trabalhado</span>
                  </div>
                </div>
              )}

              {/* Indicador excluído */}
              {control.excluded && (
                <div className="mt-1.5 pt-1.5 border-t border-neutral-800/50">
                  <span className="text-[10px] text-neutral-600 font-medium">Excluído</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ========== SLIDE 5: DIVISOR EVOLUÇÃO ==========
function Slide05_DivisorEvolucao() {
  return <SectionDivider title="Evolução dos Controles" subtitle="Status Atual e Análise Comparativa" />
}

// ========== SLIDE 6: GRÁFICO MANESCO VS MERCADO ==========
function Slide06_ManescoVsMercado() {
  return (
    <SlideLayout
      title="Manesco vs Referência de Mercado"
      subtitle="Comparativo com escritórios de advocacia"
      icon={BarChart3}
      variant="default"
    >
      <ChartCard
        title="Aderência aos Controles CIS"
        subtitle="Comparação percentual por controle"
        icon={BarChart3}
        chart={<CisStatusChart data={statusVsReference} />}
        insight={{
          value: "11/18",
          label: "controles acima da média",
          trend: {
            value: 61,
            direction: 'up'
          }
        }}
        status="success"
        height="lg"
      />
    </SlideLayout>
  )
}

// ========== SLIDE 7: EVOLUÇÃO TEMPORAL ==========
function Slide07_EvolucaoTemporal() {
  return (
    <SlideLayout
      title="Evolução da Implementação"
      subtitle="Aderência Geral ao IG2 (Dez/23 - Nov/25)"
      icon={TrendingUp}
      variant="default"
    >
      <ChartCard
        title="Progresso Geral"
        subtitle="Crescimento consistente ao longo de 23 meses"
        icon={TrendingUp}
        chart={
          <EvolutionTimeline
            data={implementationEvolution}
            lines={[{ dataKey: 'geral', name: 'Aderência Geral (%)', color: '#00ade8' }]}
          />
        }
        insight={{
          value: "45%",
          label: "aderência atual",
          trend: {
            value: 200,
            direction: 'up'
          }
        }}
        status="success"
        height="lg"
      />
    </SlideLayout>
  )
}

// ========== SLIDE 8: CONTROLES TRABALHADOS ==========
function Slide08_ControlesTrabalhados() {
  const trabalhados = [
    { id: '2', name: '2 - Inventário e Controle de Ativos de Software', icon: Laptop },
    { id: '3', name: '3 - Proteção de dados', icon: Lock },
    { id: '4', name: '4 - Configuração segura de ativos e softwares', icon: Server },
    { id: '5', name: '5 - Estabelecer e Manter um inventário de contas', icon: Users },
    { id: '6', name: '6 - Gerenciamento de controle de acessos', icon: Shield },
    { id: '8', name: '8 - Gerenciamento de log de auditoria', icon: FileText },
    { id: '9', name: '9 - Proteções de e-mail e navegadores da Web', icon: Shield },
    { id: '13', name: '13 - Monitoramento e proteção de rede', icon: Activity },
  ]

  return (
    <SlideLayout
      title="Controles Trabalhados"
      subtitle="8 controles prioritários em foco"
      icon={CheckCircle2}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <InfoPanel variant="highlight" status="info">
          <p className="text-lg">
            A equipe de segurança está concentrada nestes <strong>8 controles prioritários</strong> que
            trazem maior redução de risco imediato para o escritório.
          </p>
        </InfoPanel>

        <FeatureList
          items={trabalhados.map(c => ({
            id: c.id,
            title: c.name,
            icon: c.icon
          }))}
          columns={2}
          variant="default"
          showCheckmarks={true}
          staggerDelay={0.1}
        />

        <ChartCard
          title="Evolução - Controles Trabalhados"
          subtitle="Progresso específico nos controles prioritários"
          chart={
            <EvolutionTimeline
              data={workedEvolution}
              lines={[{ dataKey: 'trabalhados', name: 'Controles Trabalhados (%)', color: '#22c55e' }]}
            />
          }
          insight={{
            value: "82%",
            label: "aderência nos prioritários"
          }}
          status="success"
          height="md"
        />
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 9: RADAR MATURIDADE ==========
function Slide09_RadarMaturidade() {
  // Criar objeto de nomes dos controles
  const controleNames: Record<number, string> = {}
  cisStatusData.forEach(c => {
    controleNames[c.id] = c.name
  })
  
  return (
    <SlideLayout
      title="Maturidade por Controle"
      subtitle="Nível de implementação por controle CIS"
      icon={Activity}
      variant="default"
    >
      <div className="h-full">
        <MaturityRadar data={currentMaturity} controleNames={controleNames} />
      </div>
    </SlideLayout>
  )
}

// ========== SLIDE 10: EVOLUÇÃO MATURIDADE ==========
function Slide10_EvolucaoMaturidade() {
  return (
    <SlideLayout
      title="Evolução da Maturidade"
      subtitle="Nível médio ao longo do tempo"
      icon={TrendingUp}
      variant="default"
    >
      <ChartCard
        title="Progressão de Maturidade"
        subtitle="1=Inicial, 2=Repetitivo, 3=Definido, 4=Gerenciado, 5=Otimizado"
        icon={TrendingUp}
        chart={
          <EvolutionTimeline
            data={maturityEvolution}
            lines={[{ dataKey: 'nivel', name: 'Nível Médio (%)', color: '#f59e0b' }]}
            yAxisLabel="Maturidade (%)"
          />
        }
        insight={{
          value: `${maturityEvolution[maturityEvolution.length - 1].nivel}%`,
          label: "maturidade atual"
        }}
        status="warning"
        height="lg"
      />

      <InfoPanel variant="bordered" status="info" className="mt-6">
        <p className="text-base">
          <strong>Insight:</strong> A maturidade evolui mais lentamente que a implementação técnica,
          pois depende de formalização de processos, treinamento de pessoas e governança estabelecida.
        </p>
      </InfoPanel>
    </SlideLayout>
  )
}

// ========== SLIDE 11: DIVISOR VULNERABILIDADES ==========
function Slide11_DivisorVulnerabilidades() {
  return <SectionDivider title="Gestão de Vulnerabilidades" subtitle="Scans Contínuos e Tratamento Proativo" />
}

// ========== SLIDE 12: EVOLUÇÃO VULNERABILIDADES ==========
function Slide12_EvolucaoVulnerabilidades() {
  const latestVuln = totalVulnerabilitiesTrend[totalVulnerabilitiesTrend.length - 1]
  const previousVuln = totalVulnerabilitiesTrend[0]

  const metrics = [
    {
      id: 'total',
      label: 'Total Atual',
      value: latestVuln.total,
      icon: AlertCircle,
      trend: {
        value: Math.round(((previousVuln.total - latestVuln.total) / previousVuln.total) * 100),
        direction: 'down' as const,
        label: 'redução em 30 dias'
      },
      status: 'success' as const,
      subtitle: `De ${previousVuln.total} para ${latestVuln.total}`
    },
    {
      id: 'criticas',
      label: 'Críticas',
      value: latestVuln.criticas,
      icon: AlertTriangle,
      trend: {
        value: Math.round(((previousVuln.criticas - latestVuln.criticas) / previousVuln.criticas) * 100),
        direction: 'down' as const,
        label: 'redução de 94%'
      },
      status: latestVuln.criticas > 50 ? 'danger' as const : 'warning' as const,
      subtitle: `De ${previousVuln.criticas} para ${latestVuln.criticas}`
    },
    {
      id: 'altas',
      label: 'Altas',
      value: latestVuln.altas,
      icon: AlertTriangle,
      status: 'warning' as const,
      subtitle: 'Prioridade de tratamento'
    },
    {
      id: 'escopo',
      label: 'Ativos Monitorados',
      value: vulnerabilityScanScope.total,
      icon: Server,
      status: 'info' as const,
      subtitle: `${vulnerabilityScanScope.servidores} servidores + ${vulnerabilityScanScope.estacoes} estações`
    },
  ]

  return (
    <SlideLayout
      title="Gestão de Vulnerabilidades"
      subtitle="Panorama atual e evolução"
      icon={Shield}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <MetricGrid
          metrics={metrics}
          columns={4}
          variant="detailed"
          staggerDelay={0.08}
        />

        <ChartCard
          title="Evolução: Novas vs Tratadas"
          subtitle="Tendência mensal de tratamento (Set/25 - Out/25)"
          icon={Activity}
          chart={<VulnerabilityEvolutionChart data={vulnerabilityEvolution} />}
          insight={{
            value: "418",
            label: "tratadas em Out/25"
          }}
          status="success"
          height="md"
        />

        <InfoPanel variant="highlight" status="success">
          <p className="text-lg">
            <strong>Progresso significativo:</strong> Redução de 47% no total (771 → 406) e 94% nas
            críticas (345 → 22), demonstrando efetividade do programa de gestão de vulnerabilidades.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 13: PENTEST ==========
function Slide13_Pentest() {
  return (
    <SlideLayout
      title="Testes de Penetração"
      subtitle="Avaliação de Segurança Aplicacional"
      icon={FileSearch}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <InfoPanel variant="highlight" status="info">
          <p className="text-lg">
            <strong>Pentest</strong> simula ataques reais para identificar vulnerabilidades em aplicações.
            Diferente de scanners automáticos, envolve análise manual por especialistas em segurança.
          </p>
        </InfoPanel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DataCard
            title="Aplicações Testadas"
            value={pentestSummary.totalApps}
            icon={Server}
            status="neutral"
            subtitle="Aplicações corporativas críticas"
          >
            <div className="mt-3 space-y-1.5 text-sm text-neutral-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />iManage Work</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Sophia</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Legal One</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Legal Manager</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />Suite CRM</div>
            </div>
          </DataCard>

          <DataCard
            title="Vulnerabilidades"
            value={pentestSummary.totalVulnerabilities}
            icon={AlertCircle}
            status="success"
            subtitle="Nenhuma crítica"
          >
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20 text-center">
                <div className="text-xl font-bold text-yellow-400">{pentestSummary.altas}</div>
                <div className="text-xs text-neutral-400">Altas</div>
              </div>
              <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20 text-center">
                <div className="text-xl font-bold text-blue-400">{pentestSummary.medias}</div>
                <div className="text-xs text-neutral-400">Médias</div>
              </div>
              <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-center">
                <div className="text-xl font-bold text-green-400">{pentestSummary.baixas}</div>
                <div className="text-xs text-neutral-400">Baixas</div>
              </div>
              <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-center">
                <div className="text-xl font-bold text-green-400">{pentestSummary.criticas}</div>
                <div className="text-xs text-neutral-400">Críticas</div>
              </div>
            </div>
          </DataCard>
        </div>

        <InfoPanel variant="bordered" status="success">
          <p className="text-base">
            <strong>Resultado:</strong> Boa postura de segurança aplicacional. Vulnerabilidades altas e médias em tratamento.
          </p>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// ========== SLIDE 14: DIVISOR TAREFAS ==========
function Slide14_DivisorTarefas() {
  return <SectionDivider title="Plano de Ação" subtitle="Roadmap de Implementação" />
}

// ========== SLIDE 15: TAREFAS ==========
function Slide15_Tarefas() {
  const [selectedTarefa, setSelectedTarefa] = useState<typeof tarefas[0] | null>(null)
  
  const concluidas = tarefas.filter(t => t.status === 'concluido' && t.priority === 'alto').slice(0, 4)
  const emAndamento = tarefas.filter(t => t.status === 'em-andamento' && t.priority === 'alto')
  const pendentes = tarefas.filter(t => t.status === 'pendente' && t.priority === 'alto').slice(0, 4)

  return (
    <SlideLayout
      title="Status das Tarefas"
      subtitle="Principais entregas e iniciativas"
      icon={CheckSquare}
      variant="default"
    >
      <ContentContainer variant="grid" gap={6}>
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <DataCard title="Concluídas" value={tarefas.filter(t => t.status === 'concluido').length} icon={CheckCircle2} status="success" />
          <DataCard title="Em Progresso" value={tarefas.filter(t => t.status === 'em-andamento').length} icon={Activity} status="neutral" />
          <DataCard title="Pendentes" value={tarefas.filter(t => t.status === 'pendente').length} icon={Clock} status="warning" />
        </div>

        {/* Três colunas */}
        <div className="grid grid-cols-3 gap-4">
          {/* Concluídas */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-green-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />Concluídas
            </h3>
            {concluidas.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-green-500/5 border border-green-500/20 cursor-pointer hover:bg-green-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100">{t.titulo}</p>
              </div>
            ))}
          </div>

          {/* Em Andamento */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-blue-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4" />Em Progresso
            </h3>
            {emAndamento.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-blue-500/5 border border-blue-500/20 cursor-pointer hover:bg-blue-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100 mb-1.5">{t.titulo}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${t.progress}%` }} />
                  </div>
                  <span className="text-xs font-bold text-blue-400">{t.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pendentes */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-yellow-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />Pendentes
            </h3>
            {pendentes.map(t => (
              <div 
                key={t.id} 
                onClick={() => setSelectedTarefa(t)}
                className="p-2.5 rounded bg-yellow-500/5 border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/10 transition-colors"
              >
                <p className="text-xs font-medium text-neutral-100">{t.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>

      {/* Modal de Detalhes da Tarefa */}
      <AnimatePresence>
        {selectedTarefa && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTarefa(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-neutral-800 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {selectedTarefa.status === 'pendente' && (
                        <div className="px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                          <span className="text-xs font-medium text-yellow-400">Pendente</span>
                        </div>
                      )}
                      {selectedTarefa.status === 'em-andamento' && (
                        <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <span className="text-xs font-medium text-blue-400">Em Andamento</span>
                        </div>
                      )}
                      {selectedTarefa.status === 'concluido' && (
                        <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <span className="text-xs font-medium text-green-400">Concluída</span>
                        </div>
                      )}
                      {selectedTarefa.priority === 'alto' && (
                        <div className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                          <span className="text-xs font-medium text-red-400">Alta Prioridade</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-50">
                      {selectedTarefa.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedTarefa(null)}
                    className="p-2 rounded-lg hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-neutral-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto flex-1">
                  <div className="space-y-4">
                    {/* Descrição - O que está bloqueando */}
                    {selectedTarefa.descricao && (
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-300 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          {selectedTarefa.status === 'pendente' ? 'O que está bloqueando?' : 'Detalhes'}
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed bg-neutral-800/50 p-4 rounded-lg border border-neutral-800">
                          {selectedTarefa.descricao}
                        </p>
                      </div>
                    )}

                    {/* Progresso */}
                    {selectedTarefa.status === 'em-andamento' && selectedTarefa.progress !== undefined && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-300">Progresso</span>
                          <span className="text-sm font-bold text-blue-400">{selectedTarefa.progress}%</span>
                        </div>
                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-300" 
                            style={{ width: `${selectedTarefa.progress}%` }} 
                          />
                        </div>
                      </div>
                    )}

                    {/* Controle relacionado */}
                    <div>
                      <span className="text-sm font-semibold text-neutral-300">Controle CIS Relacionado: </span>
                      <span className="text-sm text-primary-400">CIS {selectedTarefa.controleRelacionado}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SlideLayout>
  )
}

// ========== SLIDE 16: DIVISOR PONTOS ATENÇÃO ==========
function Slide16_DivisorPontosAtencao() {
  return <SectionDivider title="Pontos de Atenção" subtitle="Riscos e Recomendações" />
}

// ========== SLIDE 17: PONTOS DE ATENÇÃO ==========
function Slide17_PontosAtencao() {
  return (
    <SlideLayout
      title="Principais Pontos de Atenção"
      subtitle="Questões que requerem priorização executiva"
      icon={AlertTriangle}
      variant="default"
    >
      <ContentContainer variant="stack" gap={6}>
        <InfoPanel variant="highlight" status="warning">
          <p className="text-base">
            Fundamentais para evoluir de <strong>"Repetitivo"</strong> para <strong>"Definido"</strong> em maturidade.
          </p>
        </InfoPanel>

        <div className="grid grid-cols-1 gap-3">
          {pontosAtencao.map((ponto, i) => (
            <StatusIndicator
              key={i}
              status={ponto.impacto === 'alto' ? 'danger' : 'warning'}
              label={ponto.titulo}
              description={ponto.descricao}
              icon={ponto.impacto === 'alto' ? AlertTriangle : AlertCircle}
              size="md"
              showIcon={true}
            />
          ))}
        </div>

        <InfoPanel variant="bordered" status="info">
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-primary-400">Recomendações:</p>
            <div className="grid grid-cols-2 gap-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Aprovar políticas e normas desenvolvidas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Formalizar Comitê de Segurança</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Retomar LGPD e awareness</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Implantar gestão de incidentes</span>
              </div>
            </div>
          </div>
        </InfoPanel>
      </ContentContainer>
    </SlideLayout>
  )
}

// Main Component
export default function ProfessionalPresentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [showMinimap, setShowMinimap] = useState(false)
  const [showPresenter, setShowPresenter] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'high-contrast'>('dark')
  const router = useRouter()

  const slides = [
    { component: Slide01_LogoTrustness, notes: 'Logo Trustness - abertura da apresentação' },
    { component: Slide02_Capa, notes: 'Governança de Segurança da Informação - Manesco Advogados' },
    { component: Slide03_ContextualizacaoCIS, notes: 'CIS Controls v8.1 IG2 - padrão global de defesa cibernética' },
    { component: Slide04_Lista18Controles, notes: 'Escopo completo: 18 controles do IG2' },
    { component: Slide05_DivisorEvolucao, notes: 'Divisor: Evolução dos Controles' },
    { component: Slide06_ManescoVsMercado, notes: 'Comparativo Manesco vs referência de mercado' },
    { component: Slide07_EvolucaoTemporal, notes: 'Evolução de 15% para 45% em 23 meses' },
    { component: Slide08_ControlesTrabalhados, notes: '8 controles prioritários com 82% de aderência' },
    { component: Slide09_RadarMaturidade, notes: 'Radar mostrando maturidade por controle' },
    { component: Slide10_EvolucaoMaturidade, notes: 'Evolução da maturidade geral ao longo do tempo' },
    { component: Slide11_DivisorVulnerabilidades, notes: 'Divisor: Gestão de Vulnerabilidades' },
    { component: Slide12_EvolucaoVulnerabilidades, notes: 'Redução de 47% total e 94% críticas' },
    { component: Slide13_Pentest, notes: 'Pentests em 5 aplicações: iManage, Sophia, Legal One, Legal Manager, Suite CRM' },
    { component: Slide14_DivisorTarefas, notes: 'Divisor: Plano de Ação' },
    { component: Slide15_Tarefas, notes: 'Status das tarefas: concluídas, em andamento e pendentes' },
    { component: Slide16_DivisorPontosAtencao, notes: 'Divisor: Pontos de Atenção' },
    { component: Slide17_PontosAtencao, notes: 'Pontos críticos: formalização, governança, LGPD, incidentes' },
  ]

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
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={current} direction={direction}>
            <CurrentSlideComponent />
          </PageTransition>
        </AnimatePresence>
      </div>

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
            <Button onClick={prevSlide} disabled={current === 0} variant="ghost" size="sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button onClick={nextSlide} disabled={current === slides.length - 1} variant="ghost" size="sm">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={() => setShowMinimap(true)} variant="ghost" size="sm">
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
            <Button onClick={toggleFullscreen} variant="ghost" size="sm">
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
            <Button onClick={() => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark')} variant="ghost" size="sm">
              <Palette className="w-4 h-4" />
            </Button>
            <Button onClick={() => setShowHelp(true)} variant="ghost" size="sm">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <MinimapOverlay
        isOpen={showMinimap}
        onClose={() => setShowMinimap(false)}
        slides={slides.map(s => ({ type: 'slide', speakerNotes: s.notes }))}
        currentSlide={current}
        onNavigate={goToSlide}
        sections={slideSections}
      />

      <KeyboardShortcutsPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  )
}
