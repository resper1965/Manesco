/**
 * Componente de card de métricas com animação
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
    label: string
    value: string | number
    description?: string
    icon?: LucideIcon
    trend?: 'up' | 'down' | 'neutral'
    delay?: number
}

export function MetricCard({ label, value, description, icon: Icon, trend, delay = 0 }: MetricCardProps) {
    const trendColors = {
        up: 'text-green-500',
        down: 'text-red-500',
        neutral: 'text-slate-400'
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
            className="glass-card rounded-2xl p-8 space-y-4 hover:border-primary-500/30 transition-all duration-300 group"
        >
            {Icon && (
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-500" />
                </div>
            )}

            <div className="space-y-2">
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    {label}
                </div>

                <div className={`text-5xl md:text-6xl font-extrabold ${trend ? trendColors[trend] : 'text-gradient-primary'
                    } animate-pulse-subtle`}>
                    {value}
                </div>

                {description && (
                    <div className="text-sm text-slate-400 leading-relaxed">
                        {description}
                    </div>
                )}
            </div>
        </motion.div>
    )
}
