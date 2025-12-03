'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  LogOut,
  Shield,
  Target,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  FileText,
  CheckSquare,
  Users,
  Settings,
  Lock,
  Mail,
  FileSearch,
  Laptop,
  Server,
  Globe,
  Award,
  Activity,
  Map,
  Maximize,
  Minimize,
  HelpCircle,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandWordmark } from '@/components/ui/brand-dot'

// Original Components
import { CISControlsTable } from '@/components/presentation/cis-controls-table'
import { MaturityRadar } from '@/components/presentation/maturity-radar'
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'
import { SectionDivider } from '@/components/presentation/section-divider'
import { CisStatusChart } from '@/components/presentation/cis-status-chart'

// New Enhanced Components
import { ExecutiveOverview } from '@/components/presentation/executive-overview'
import { ImprovedTaskGrid } from '@/components/presentation/improved-task-grid'
import { ImprovedPentestGrid } from '@/components/presentation/improved-pentest-grid'
import { VulnerabilityMetrics } from '@/components/presentation/vulnerability-metrics'
import { EnhancedContentSlide } from '@/components/presentation/enhanced-content-slide'

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
  tarefasPorStatus,
  implementationEvolution,
  maturityEvolution,
  statusVsReference,
  workedEvolution,
  vulnerabilityScanScope,
  tarefas
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

// Slides Configuration
const slides = [
  // SLIDE 1: Capa Redesenhada
  {
    type: 'title',
    title: 'Governança de Segurança da Informação',
    subtitle: 'Status de Implementação CIS Controls IG2',
    client: 'Manesco',
    date: 'Novembro 2025',
    speakerNotes: 'Bem-vindos. Apresentação executiva do status atual da governança de segurança, seguindo o framework CIS Controls IG2.',
  },

  // SLIDE 2: Overview Executivo (NOVO)
  {
    type: 'executive-overview',
    title: 'Visão Executiva',
    speakerNotes: 'Visão geral dos principais KPIs: 45% de aderência ao IG2, 8 controles ativos, e progresso significativo na gestão de vulnerabilidades.',
  },

  // SLIDE 3: Agenda Redesenhada
  {
    type: 'enhanced-content',
    title: 'Agenda',
    icon: BookOpen,
    items: [
      { text: 'Framework CIS Controls e Grupos de Implementação', icon: Shield },
      { text: 'Status da Aderência ao IG2', icon: Target },
      { text: 'Gestão de Vulnerabilidades e Pentests', icon: AlertTriangle },
      { text: 'Status das Tarefas Prioritárias', icon: CheckSquare },
      { text: 'Pontos de Atenção e Próximos Passos', icon: TrendingUp }
    ],
    layout: 'list',
    speakerNotes: 'Nossa agenda cobre desde a metodologia até os resultados práticos e próximos passos.',
  },

  // SLIDE 4: Conceito CIS Redesenhado
  {
    type: 'enhanced-content',
    title: 'Framework CIS Controls',
    subtitle: 'Padrão global de defesa cibernética',
    icon: Award,
    items: [
      { text: 'O CIS Controls é um conjunto de práticas recomendadas para defesa cibernética, desenvolvido por especialistas globais.', highlight: true },
      '',
      { text: 'IG1: Higiene básica cibernética', icon: Server },
      { text: 'IG2: Dados sensíveis e infraestrutura complexa', icon: Shield, highlight: true },
      { text: 'IG3: Alta criticidade e alvos sofisticados', icon: Lock },
    ],
    layout: 'list',
    speakerNotes: 'O CIS é o padrão ouro. O IG2 é o nível adequado para a complexidade e responsabilidade da Manesco.',
  },

  // SLIDE 5: Contexto Manesco Redesenhado
  {
    type: 'enhanced-content',
    title: 'Por que IG2 para Manesco?',
    subtitle: 'Adequação ao perfil e necessidades',
    icon: Target,
    items: [
      { text: 'Infraestrutura de TI desenvolvida e diversificada', icon: Laptop },
      { text: 'Proteção de dados sensíveis e confidenciais', icon: Lock },
      { text: 'Monitoramento contínuo e resposta a ameaças', icon: Activity },
      { text: 'Controle de acessos avançado e gestão de identidades', icon: Users },
      '',
      { text: 'O IG2 estabelece uma base sólida de segurança e governança adequada ao porte e responsabilidade da organização.', highlight: true }
    ],
    layout: 'grid',
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
    subtitle: 'Scans, Análises e Correções Contínuas',
  },

  // SLIDE 14: Vulnerability Metrics Dashboard (NOVO)
  {
    type: 'vuln-metrics',
    title: 'Panorama de Vulnerabilidades',
    subtitle: 'Métricas e indicadores atuais',
    speakerNotes: 'Dashboard completo mostrando 406 vulnerabilidades ativas, com 47% já tratadas. Foco na redução das 22 críticas e 86 altas.',
  },

  // SLIDE 15: Vuln Evolução
  {
    type: 'vuln-chart',
    title: 'Evolução: Novas vs Tratadas',
    subtitle: 'Tendência mensal de tratamento (Set/25 - Out/25)',
    data: vulnerabilityEvolution,
    speakerNotes: 'Tivemos baseline de 771 em Setembro. Em Outubro, tratamos 418 vulnerabilidades, reduzindo o total para 406. Capacidade de tratamento está efetiva.',
  },

  // SLIDE 16: Vuln Trend
  {
    type: 'vuln-chart',
    title: 'Redução de Vulnerabilidades Críticas',
    subtitle: 'De 345 para 22 críticas em 30 dias',
    data: totalVulnerabilitiesTrend.map(t => ({
      mes: t.periodo,
      total: t.total,
      novas: t.criticas + t.altas,
      tratadas: 0
    })),
    speakerNotes: 'Progresso significativo: redução de 94% nas vulnerabilidades críticas (de 345 para 22), demonstrando efetividade do programa.',
  },

  // SLIDE 17: Divisor Pentests
  {
    type: 'divider',
    title: 'Testes de Penetração',
    subtitle: 'Avaliação de Segurança Aplicacional',
  },

  // SLIDE 18: Pentest Grid Melhorado
  {
    type: 'improved-pentest',
    title: 'Resultados de Pentests',
    subtitle: '8 aplicações corporativas avaliadas | Referência: Outubro 2025',
    data: pentestApplications,
    speakerNotes: 'Pentest consolidado em 8 aplicações críticas resultou em 75 vulnerabilidades: 5 altas, 21 médias, 49 baixas. Nenhuma crítica, indicando boa postura de segurança aplicacional.',
  },

  // SLIDE 19: Divisor Tarefas
  {
    type: 'divider',
    title: 'Plano de Ação',
    subtitle: 'Roadmap de Implementação e Progresso',
  },

  // SLIDE 20: Tarefas Concluídas
  {
    type: 'improved-tasks',
    title: 'Entregas Concluídas',
    subtitle: 'Marcos importantes já alcançados',
    tasks: tarefasPorStatus.concluidas,
    speakerNotes: 'Entregas críticas já concluídas: SIEM (Wazuh), bloqueio de scripts, criptografia de disco, MFA, autenticação de e-mail, e configuração de credenciais.',
  },

  // SLIDE 21: Tarefas em Andamento (Alta Prioridade)
  {
    type: 'improved-tasks',
    title: 'Em Progresso - Alta Prioridade',
    subtitle: 'Iniciativas em desenvolvimento ativo',
    tasks: tarefasPorStatus.emAndamento.filter(t => t.priority === 'alto'),
    speakerNotes: 'Foco atual: implementação de cofre de senhas (Passbolt), encaminhamento de logs ao SIEM, e controle de ativos não autorizados.',
  },

  // SLIDE 22: Tarefas em Andamento (Outras)
  {
    type: 'improved-tasks',
    title: 'Em Progresso - Média Prioridade',
    subtitle: 'Iniciativas complementares',
    tasks: tarefasPorStatus.emAndamento.filter(t => t.priority !== 'alto'),
    speakerNotes: 'Também avançando em integração e-mail/AD e outras melhorias técnicas.',
  },

  // SLIDE 23: Tarefas Pendentes (Alta Prioridade)
  {
    type: 'improved-tasks',
    title: 'Próximos Passos - Alta Prioridade',
    subtitle: 'Pendências críticas para o próximo ciclo',
    tasks: tarefasPorStatus.pendentes.filter(t => t.priority === 'alto'),
    speakerNotes: 'Próximo ciclo focará em aprovação de normas e políticas pela diretoria, além de fluxos formais de acesso.',
  },

  // SLIDE 24: Tarefas Pendentes (Outras)
  {
    type: 'improved-tasks',
    title: 'Backlog de Melhorias',
    subtitle: 'Roadmap de médio prazo',
    tasks: tarefasPorStatus.pendentes.filter(t => t.priority !== 'alto'),
    speakerNotes: 'Backlog inclui diretrizes de descarte, configurações de rede segura, e criação de casos de uso para alertas.',
  },

  // SLIDE 25: Divisor Pontos Atenção
  {
    type: 'divider',
    title: 'Pontos de Atenção',
    subtitle: 'Riscos, Impedimentos e Dependências',
  },

  // SLIDE 26: Pontos Atenção Redesenhado
  {
    type: 'enhanced-content',
    title: 'Principais Pontos de Atenção',
    subtitle: 'Questões que requerem priorização e apoio executivo',
    icon: AlertTriangle,
    items: [
      { text: 'Formalização e Publicação de Processos: Processos desenvolvidos aguardam formalização para aumentar maturidade organizacional', icon: FileText, highlight: true },
      { text: 'Comitê de Segurança: Necessário formalizar governança com comitê estruturado conforme recomendações já encaminhadas', icon: Users, highlight: true },
      { text: 'Privacidade e Conscientização: Retomar programas de LGPD e awareness em segurança da informação', icon: Shield },
      { text: 'Gestão de Incidentes: Iniciar implantação de processo estruturado de resposta a incidentes', icon: AlertTriangle, highlight: true },
      { text: 'Book de Indicadores: Dar continuidade ao modelo de métricas já disponibilizado', icon: Activity },
    ],
    layout: 'grid',
    speakerNotes: 'Principais gargalos: formalização de processos e governança. Estes são fundamentais para evoluir de "Repetitivo" para "Definido" em maturidade.',
  },

  // SLIDE 27: Contato
  {
    type: 'contact',
    name: 'Mônica Yoshida',
    title: 'ness.',
    email: 'myoshida@ness.com.br',
    phone: '+55 11 2504-7650',
    speakerNotes: 'Obrigado pela atenção. Estamos à disposição para dúvidas e discussões.',
  },
]

// --- Componentes de Slide ---

function TitleSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen gap-8 px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="space-y-8 text-center max-w-5xl z-10">
        {/* Icon/Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center"
        >
          <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20">
            <Shield className="w-16 h-16 text-primary" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-light text-slate-100 leading-tight tracking-tight"
        >
          {data.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 font-light"
        >
          {data.subtitle}
        </motion.p>

        {/* Client & Date */}
        {(data.client || data.date) && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 text-slate-400 text-lg"
          >
            {data.client && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>{data.client}</span>
              </div>
            )}
            {data.date && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>{data.date}</span>
              </div>
            )}
          </motion.div>
        )}
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
        {type === 'pentest' && <ImprovedPentestGrid applications={data.data} />}
        {type === 'tasks' && <ImprovedTaskGrid tasks={data.tasks} />}
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

    // Executive Overview (NEW)
    case 'executive-overview':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col h-screen py-12"
        >
          <div className="px-8 mb-6">
            <h2 className="text-4xl font-light text-slate-100 border-l-4 border-primary pl-6">
              {slide.title}
            </h2>
          </div>
          <ExecutiveOverview
            data={{
              adherenceIG2: implementationEvolution[implementationEvolution.length - 1].geral,
              workedControls: workedControls.length,
              totalControls: cisControls.length,
              vulnerabilitiesResolved: 418,
              totalVulnerabilities: 771,
              maturityLevel: 'Repetitivo',
              maturityProgress: maturityEvolution[maturityEvolution.length - 1].nivel
            }}
          />
        </motion.div>
      )

    // Enhanced Content (NEW)
    case 'enhanced-content':
      return <EnhancedContentSlide {...slide} />

    // Vulnerability Metrics (NEW)
    case 'vuln-metrics':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-light text-slate-100">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-slate-400 text-lg">{slide.subtitle}</p>
            )}
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <VulnerabilityMetrics
              data={{
                total: 406,
                criticas: 22,
                altas: 86,
                medias: 202,
                baixas: 96,
                tratadas: 418,
                novas: 53,
                escopo: vulnerabilityScanScope
              }}
            />
          </div>
        </motion.div>
      )

    // Improved Pentest Grid (NEW)
    case 'improved-pentest':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-light text-slate-100">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-slate-400 text-lg">{slide.subtitle}</p>
            )}
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <ImprovedPentestGrid applications={slide.data} />
          </div>
        </motion.div>
      )

    // Improved Task Grid (NEW)
    case 'improved-tasks':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col h-screen gap-6 px-8 py-10 md:px-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-light text-slate-100">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-slate-400 text-lg">{slide.subtitle}</p>
            )}
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <ImprovedTaskGrid tasks={slide.tasks} />
          </div>
        </motion.div>
      )

    // Original types
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
  const [direction, setDirection] = useState<Direction>('forward')
  const [showNotes, setShowNotes] = useState(false)
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
      const section = slideSections[sectionIndex]
      goToSlide(section.startIndex)
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

  // Advanced keyboard shortcuts
  useKeyboardShortcuts({
    onNext: nextSlide,
    onPrevious: prevSlide,
    onFirst: () => goToSlide(0),
    onLast: () => goToSlide(slides.length - 1),
    onToggleNotes: () => setShowNotes(prev => !prev),
    onToggleFullscreen: toggleFullscreen,
    onTogglePresenter: () => setShowPresenter(prev => !prev),
    onToggleMinimap: () => setShowMinimap(prev => !prev),
    onToggleHelp: () => setShowHelp(prev => !prev),
    onToggleTheme: () => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark'),
    onGotoSection: goToSection,
  })

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col font-inter text-slate-200 ${theme === 'high-contrast' ? 'bg-black' : 'bg-slate-950'}`}>
      {/* Área do Slide */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={current} direction={direction}>
            <SlideRenderer slide={slides[current]} />
          </PageTransition>
        </AnimatePresence>
      </div>

      {/* Barra de Controle Avançada */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 px-6 py-3 z-50">
        {/* Section Progress */}
        <div className="mb-3">
          <SectionProgress
            sections={slideSections}
            currentSlide={current}
            onNavigate={goToSlide}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Left: Progress Info */}
          <div className="flex-1 max-w-sm">
            <ProgressIndicator
              current={current}
              total={slides.length}
              sections={slideSections}
            />
          </div>

          {/* Center: Navigation */}
          <div className="flex items-center gap-2">
            <Button
              onClick={prevSlide}
              disabled={current === 0}
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30"
              title="Anterior (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={current === slides.length - 1}
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30"
              title="Próximo (→ ou Space)"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right: Tools */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowMinimap(true)}
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-slate-300"
              title="Minimap (m)"
            >
              <Map className="w-4 h-4" />
            </Button>

            <PresenterView
              isOpen={showPresenter}
              onToggle={() => setShowPresenter(prev => !prev)}
              currentSlide={slides[current]}
              nextSlide={current < slides.length - 1 ? slides[current + 1] : null}
              currentIndex={current}
              totalSlides={slides.length}
            />

            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-slate-300"
              title="Tela Cheia (f)"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>

            <Button
              onClick={() => setTheme(prev => prev === 'dark' ? 'high-contrast' : 'dark')}
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-slate-300"
              title="Alternar Tema (t)"
            >
              <Palette className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => setShowHelp(true)}
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-slate-300"
              title="Atalhos (?)"
            >
              <HelpCircle className="w-4 h-4" />
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
      </div>

      {/* Advanced Overlays */}
      <MinimapOverlay
        isOpen={showMinimap}
        onClose={() => setShowMinimap(false)}
        slides={slides}
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
