/**
 * Executive Overview Dashboard - KPIs principais
 */
'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, AlertTriangle, CheckCircle2, Target, Activity } from 'lucide-react'
import { StatCard } from '@/components/ui/stat-card'

interface ExecutiveOverviewProps {
  data: {
    adherenceIG2: number
    workedControls: number
    totalControls: number
    vulnerabilitiesResolved: number
    totalVulnerabilities: number
    maturityLevel: string
    maturityProgress: number
  }
}

export function ExecutiveOverview({ data }: ExecutiveOverviewProps) {
  const resolvedPercentage = Math.round(
    (data.vulnerabilitiesResolved / data.totalVulnerabilities) * 100
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {/* Aderência IG2 */}
      <StatCard
        title="Aderência IG2"
        value={`${data.adherenceIG2}%`}
        description="Conformidade com framework CIS"
        icon={Shield}
        trend={{ value: 12, label: "vs mês anterior" }}
        variant="success"
        delay={0}
      />

      {/* Controles Trabalhados */}
      <StatCard
        title="Controles Ativos"
        value={`${data.workedControls}/${data.totalControls}`}
        description="Controles em desenvolvimento"
        icon={Target}
        variant="info"
        delay={0.1}
      />

      {/* Vulnerabilidades */}
      <StatCard
        title="Vulnerabilidades"
        value={resolvedPercentage + "%"}
        description={`${data.vulnerabilitiesResolved} de ${data.totalVulnerabilities} tratadas`}
        icon={AlertTriangle}
        trend={{ value: 45, label: "resolvidas" }}
        variant="warning"
        delay={0.2}
      />

      {/* Nível de Maturidade */}
      <StatCard
        title="Maturidade"
        value={data.maturityLevel}
        description={`Progresso: ${data.maturityProgress}%`}
        icon={TrendingUp}
        trend={{ value: 8, label: "evolução" }}
        variant="default"
        delay={0.3}
      />

      {/* Tarefas Concluídas */}
      <StatCard
        title="Status Geral"
        value="Em Progresso"
        description="Roadmap em execução"
        icon={Activity}
        variant="info"
        delay={0.4}
      />

      {/* Conformidade */}
      <StatCard
        title="Conformidade"
        value="Positiva"
        description="Tendência de melhoria contínua"
        icon={CheckCircle2}
        variant="success"
        delay={0.5}
      />
    </div>
  )
}
