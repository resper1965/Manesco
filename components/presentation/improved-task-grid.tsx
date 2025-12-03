/**
 * Improved Task Status Grid with new Shadcn components
 */
'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface Task {
  id: string
  titulo: string
  descricao: string
  status: 'concluido' | 'em-andamento' | 'pendente'
  progress?: number
  priority?: 'alto' | 'medio' | 'baixo'
  controleRelacionado?: number
}

interface ImprovedTaskGridProps {
  tasks: Task[]
  className?: string
}

const statusConfig = {
  'concluido': {
    label: 'Concluído',
    variant: 'success' as const,
    icon: CheckCircle2,
    progressVariant: 'success' as const,
  },
  'em-andamento': {
    label: 'Em Andamento',
    variant: 'default' as const,
    icon: Clock,
    progressVariant: 'default' as const,
  },
  'pendente': {
    label: 'Pendente',
    variant: 'secondary' as const,
    icon: Circle,
    progressVariant: 'default' as const,
  }
}

const priorityConfig = {
  'alto': { label: 'Alta', variant: 'danger' as const, icon: AlertCircle },
  'medio': { label: 'Média', variant: 'warning' as const, icon: AlertCircle },
  'baixo': { label: 'Baixa', variant: 'secondary' as const, icon: Circle },
}

export function ImprovedTaskGrid({ tasks, className = '' }: ImprovedTaskGridProps) {
  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {tasks.map((task, idx) => {
        const statusConf = statusConfig[task.status]
        const priorityConf = task.priority ? priorityConfig[task.priority] : null
        const StatusIcon = statusConf.icon
        const PriorityIcon = priorityConf?.icon

        return (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
          >
            <Card className="bg-slate-850/50 border-slate-800 hover:border-primary/30 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant={statusConf.variant} className="flex items-center gap-1">
                    <StatusIcon className="w-3 h-3" />
                    {statusConf.label}
                  </Badge>

                  {priorityConf && (
                    <Badge variant={priorityConf.variant} size="sm" className="flex items-center gap-1">
                      {PriorityIcon && <PriorityIcon className="w-3 h-3" />}
                      {priorityConf.label}
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-slate-100 text-base">
                  {task.titulo}
                </CardTitle>

                {task.controleRelacionado && (
                  <CardDescription className="text-xs">
                    CIS Control {task.controleRelacionado}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {task.descricao}
                </p>

                {task.progress !== undefined && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Progresso</span>
                      <span className="text-slate-400 font-medium">{task.progress}%</span>
                    </div>
                    <Progress
                      value={task.progress}
                      variant={statusConf.progressVariant}
                      className="h-2"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
