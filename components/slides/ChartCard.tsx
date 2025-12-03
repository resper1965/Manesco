/**
 * Professional Chart Card - Consistent chart presentation wrapper
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'

interface ChartCardProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  chart: ReactNode
  legend?: ReactNode
  insight?: {
    value: string | number
    label: string
    trend?: {
      value: number
      direction: 'up' | 'down' | 'neutral'
    }
  }
  status?: 'success' | 'warning' | 'danger' | 'neutral'
  badge?: {
    label: string
    variant?: 'default' | 'success' | 'warning' | 'danger'
  }
  delay?: number
  className?: string
  height?: 'sm' | 'md' | 'lg' | 'xl'
}

const statusStyles = {
  success: {
    border: 'border-green-500/30',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    headerBg: 'from-green-500/5 to-transparent',
  },
  warning: {
    border: 'border-yellow-500/30',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.15)]',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
    headerBg: 'from-yellow-500/5 to-transparent',
  },
  danger: {
    border: 'border-red-500/30',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    headerBg: 'from-red-500/5 to-transparent',
  },
  neutral: {
    border: 'border-primary-500/30',
    glow: 'shadow-[0_0_20px_rgba(0,173,232,0.15)]',
    iconBg: 'bg-primary-500/10',
    iconColor: 'text-primary-400',
    headerBg: 'from-primary-500/5 to-transparent',
  },
}

const heightClasses = {
  sm: 'h-64',
  md: 'h-80',
  lg: 'h-96',
  xl: 'h-[32rem]',
}

export function ChartCard({
  title,
  subtitle,
  icon: Icon,
  chart,
  legend,
  insight,
  status = 'neutral',
  badge,
  delay = 0,
  className,
  height = 'md',
}: ChartCardProps) {
  const styles = statusStyles[status]
  const TrendIcon = insight?.trend?.direction === 'up'
    ? TrendingUp
    : insight?.trend?.direction === 'down'
    ? TrendingDown
    : Minus

  const trendColor = insight?.trend?.direction === 'up'
    ? 'text-green-400'
    : insight?.trend?.direction === 'down'
    ? 'text-red-400'
    : 'text-neutral-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn(
        'group relative overflow-hidden rounded-2xl backdrop-blur-md',
        'bg-gradient-to-br from-neutral-900/60 to-neutral-900/40',
        'border',
        styles.border,
        styles.glow,
        'hover:scale-[1.01] transition-all duration-300',
        className
      )}
    >
      {/* Background Gradient */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br opacity-30',
        styles.headerBg
      )} />

      {/* Content */}
      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-4 flex-1">
              {Icon && (
                <div className={cn(
                  'p-3 rounded-xl shrink-0',
                  styles.iconBg
                )}>
                  <Icon className={cn('w-6 h-6', styles.iconColor)} strokeWidth={1.5} />
                </div>
              )}

              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-neutral-50 truncate">
                    {title}
                  </h3>
                  {badge && (
                    <Badge variant={badge.variant || 'default'} size="sm">
                      {badge.label}
                    </Badge>
                  )}
                </div>
                {subtitle && (
                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {insight && (
              <div className="ml-4 text-right shrink-0">
                <div className="text-2xl font-bold text-neutral-50 tabular-nums">
                  {insight.value}
                </div>
                <div className="flex items-center justify-end gap-1.5 mt-1">
                  {insight.trend && (
                    <div className={cn(
                      'flex items-center gap-1 text-xs font-semibold',
                      trendColor
                    )}>
                      <TrendIcon className="w-3.5 h-3.5" strokeWidth={2} />
                      <span>{Math.abs(insight.trend.value)}%</span>
                    </div>
                  )}
                  <span className="text-xs text-neutral-500">
                    {insight.label}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Legend */}
          {legend && (
            <div className="mt-4 pt-4 border-t border-neutral-800/50">
              {legend}
            </div>
          )}
        </div>

        {/* Chart Area */}
        <div className={cn(
          'flex-1 px-6 pb-6',
          heightClasses[height],
          'flex items-center justify-center'
        )}>
          <div className="w-full h-full">
            {chart}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

/**
 * Compact Chart Card - For dashboards with multiple charts
 */
interface CompactChartCardProps {
  title: string
  value?: string | number
  chart: ReactNode
  color?: 'primary' | 'success' | 'warning' | 'danger'
  delay?: number
  className?: string
}

const compactColorStyles = {
  primary: 'border-primary-500/20 bg-primary-500/5',
  success: 'border-green-500/20 bg-green-500/5',
  warning: 'border-yellow-500/20 bg-yellow-500/5',
  danger: 'border-red-500/20 bg-red-500/5',
}

export function CompactChartCard({
  title,
  value,
  chart,
  color = 'primary',
  delay = 0,
  className
}: CompactChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        'p-4 rounded-xl border backdrop-blur-sm space-y-3',
        compactColorStyles[color],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-300">{title}</span>
        {value && (
          <span className="text-lg font-bold text-neutral-50 tabular-nums">
            {value}
          </span>
        )}
      </div>
      <div className="h-32">
        {chart}
      </div>
    </motion.div>
  )
}
