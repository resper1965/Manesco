'use client'

import { motion } from 'framer-motion'

interface Task {
    id: string
    title: string
    description: string
    status: 'concluido' | 'em-andamento' | 'pendente'
    progress?: number
    priority?: 'alto' | 'medio' | 'baixo'
}

interface TaskStatusGridProps {
    tasks: Task[]
    className?: string
}

const statusConfig = {
    'concluido': {
        label: 'Concluído',
        color: '#10b981', // green
        bgColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.3)',
    },
    'em-andamento': {
        label: 'Em Andamento',
        color: '#00ade8', // primary blue
        bgColor: 'rgba(0, 173, 232, 0.1)',
        borderColor: 'rgba(0, 173, 232, 0.3)',
    },
    'pendente': {
        label: 'Pendente',
        color: '#64748b', // slate-500
        bgColor: 'rgba(100, 116, 139, 0.1)',
        borderColor: 'rgba(100, 116, 139, 0.3)',
    }
}

const priorityConfig = {
    'alto': { label: 'Alta', color: '#ef4444' },
    'medio': { label: 'Média', color: '#f59e0b' },
    'baixo': { label: 'Baixa', color: '#64748b' },
}

export function TaskStatusGrid({ tasks, className = '' }: TaskStatusGridProps) {
    return (
        <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
            {tasks.map((task, idx) => {
                const config = statusConfig[task.status]
                const priorityConf = task.priority ? priorityConfig[task.priority] : null

                return (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-800 rounded-xl p-5 border"
                        style={{
                            backgroundColor: config.bgColor,
                            borderColor: config.borderColor,
                        }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-medium text-slate-200">{task.title}</h3>
                            {priorityConf && (
                                <span
                                    className="text-xs px-2 py-1 rounded-full"
                                    style={{
                                        backgroundColor: `${priorityConf.color}20`,
                                        color: priorityConf.color
                                    }}
                                >
                                    {priorityConf.label}
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                            {task.description}
                        </p>

                        <div className="flex items-center justify-between">
                            <span
                                className="text-xs font-medium px-2 py-1 rounded"
                                style={{
                                    color: config.color,
                                    backgroundColor: `${config.color}20`
                                }}
                            >
                                {config.label}
                            </span>

                            {task.progress !== undefined && (
                                <span className="text-xs text-slate-400">
                                    {task.progress}% concluído
                                </span>
                            )}
                        </div>

                        {task.progress !== undefined && (
                            <div className="mt-3 w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{
                                        width: `${task.progress}%`,
                                        backgroundColor: config.color
                                    }}
                                />
                            </div>
                        )}
                    </motion.div>
                )
            })}
        </div>
    )
}
