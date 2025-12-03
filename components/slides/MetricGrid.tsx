/**
 * Professional Metric Grid - Consistent multi-metric layout
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface Metric {
  id: string
  label: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
    label?: string
  }
  status?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  subtitle?: string
  badge?: ReactNode
}

interface MetricGridProps {
  metrics: Metric[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'compact' | 'detailed'
  gap?: 4 | 6 | 8
  staggerDelay?: number
  className?: string
}

const statusStyles = {
  success: {
    border: 'border-green-500/20',
    bg: 'bg-green-500/5',
    icon: 'text-green-400',
    value: 'text-green-400',
    glow: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]',
  },
  warning: {
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-500/5',
    icon: 'text-yellow-400',
    value: 'text-yellow-400',
    glow: 'hover:shadow-[0_0_15px_rgba(251,191,36,0.1)]',
  },
  danger: {
    border: 'border-red-500/20',
    bg: 'bg-red-500/5',
    icon: 'text-red-400',
    value: 'text-red-400',
    glow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]',
  },
  info: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    icon: 'text-blue-400',
    value: 'text-blue-400',
    glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]',
  },
  neutral: {
    border: 'border-primary-500/20',
    bg: 'bg-primary-500/5',
    icon: 'text-primary-400',
    value: 'text-neutral-50',
    glow: 'hover:shadow-[0_0_15px_rgba(0,173,232,0.1)]',
  },
}

export function MetricGrid({
  metrics,
  columns = 3,
  variant = 'default',
  gap = 6,
  staggerDelay = 0.05,
  className,
}: MetricGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn(
      'grid',
      gridCols[columns],
      `gap-${gap}`,
      className
    )}>
      {metrics.map((metric, index) => {
        if (variant === 'compact') {
          return (
            <CompactMetricCard
              key={metric.id}
              metric={metric}
              delay={index * staggerDelay}
            />
          )
        }

        if (variant === 'detailed') {
          return (
            <DetailedMetricCard
              key={metric.id}
              metric={metric}
              delay={index * staggerDelay}
            />
          )
        }

        return (
          <DefaultMetricCard
            key={metric.id}
            metric={metric}
            delay={index * staggerDelay}
          />
        )
      })}
    </div>
  )
}

/**
 * Default Metric Card - Balanced information density
 */
function DefaultMetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const styles = statusStyles[metric.status || 'neutral']
  const Icon = metric.icon
  const TrendIcon = metric.trend?.direction === 'up'
    ? TrendingUp
    : metric.trend?.direction === 'down'
    ? TrendingDown
    : null

  const trendColor = metric.trend?.direction === 'up'
    ? 'text-green-400'
    : metric.trend?.direction === 'down'
    ? 'text-red-400'
    : 'text-neutral-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn(
        'group relative overflow-hidden rounded-xl backdrop-blur-sm',
        'bg-gradient-to-br from-neutral-900/60 to-neutral-900/40',
        'border',
        styles.border,
        styles.glow,
        'hover:scale-[1.02] transition-all duration-300',
        'p-6'
      )}
    >
      {/* Background gradient */}
      <div className={cn(
        'absolute inset-0 opacity-40',
        styles.bg
      )} />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1">
              {metric.label}
            </p>
            {metric.subtitle && (
              <p className="text-xs text-neutral-500 line-clamp-2">
                {metric.subtitle}
              </p>
            )}
          </div>

          {Icon && (
            <div className={cn(
              'p-2.5 rounded-lg shrink-0 ml-3',
              styles.bg,
              'border',
              styles.border
            )}>
              <Icon className={cn('w-5 h-5', styles.icon)} strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Value */}
        <div className="flex items-baseline justify-between">
          <div className={cn(
            'text-3xl md:text-4xl font-bold tabular-nums',
            styles.value
          )}>
            {metric.value}
          </div>

          {metric.trend && TrendIcon && (
            <div className={cn(
              'flex items-center gap-1 text-sm font-semibold',
              trendColor
            )}>
              <TrendIcon className="w-4 h-4" strokeWidth={2} />
              <span>{Math.abs(metric.trend.value)}%</span>
            </div>
          )}
        </div>

        {/* Trend label or badge */}
        {(metric.trend?.label || metric.badge) && (
          <div className="pt-3 border-t border-neutral-800/50 flex items-center justify-between">
            {metric.trend?.label && (
              <p className="text-xs text-neutral-500">
                {metric.trend.label}
              </p>
            )}
            {metric.badge}
          </div>
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

/**
 * Compact Metric Card - Minimal space, maximum clarity
 */
function CompactMetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const styles = statusStyles[metric.status || 'neutral']
  const Icon = metric.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        'flex items-center justify-between p-4 rounded-lg border backdrop-blur-sm',
        styles.border,
        styles.bg,
        'hover:scale-[1.02] transition-transform duration-200'
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={cn(
            'p-2 rounded-md',
            styles.bg,
            'border',
            styles.border
          )}>
            <Icon className={cn('w-4 h-4', styles.icon)} strokeWidth={1.5} />
          </div>
        )}
        <span className="text-sm font-medium text-neutral-300">
          {metric.label}
        </span>
      </div>
      <div className={cn(
        'text-xl font-bold tabular-nums',
        styles.value
      )}>
        {metric.value}
      </div>
    </motion.div>
  )
}

/**
 * Detailed Metric Card - Maximum information
 */
function DetailedMetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const styles = statusStyles[metric.status || 'neutral']
  const Icon = metric.icon
  const TrendIcon = metric.trend?.direction === 'up'
    ? TrendingUp
    : metric.trend?.direction === 'down'
    ? TrendingDown
    : null

  const trendColor = metric.trend?.direction === 'up'
    ? 'text-green-400'
    : metric.trend?.direction === 'down'
    ? 'text-red-400'
    : 'text-neutral-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn(
        'group relative overflow-hidden rounded-2xl backdrop-blur-md',
        'bg-gradient-to-br from-neutral-900/70 to-neutral-900/50',
        'border-2',
        styles.border,
        styles.glow,
        'hover:scale-[1.02] transition-all duration-300',
        'p-8'
      )}
    >
      {/* Decorative background */}
      <div className={cn(
        'absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20',
        styles.bg
      )} />

      {/* Content */}
      <div className="relative space-y-6">
        {/* Icon + Label */}
        <div className="flex items-start gap-4">
          {Icon && (
            <div className={cn(
              'p-3 rounded-xl',
              styles.bg,
              'border-2',
              styles.border,
              'shadow-lg'
            )}>
              <Icon className={cn('w-6 h-6', styles.icon)} strokeWidth={1.5} />
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-base font-semibold text-neutral-200 mb-1">
              {metric.label}
            </h3>
            {metric.subtitle && (
              <p className="text-sm text-neutral-400">
                {metric.subtitle}
              </p>
            )}
          </div>

          {metric.badge}
        </div>

        {/* Value + Trend */}
        <div className="space-y-2">
          <div className={cn(
            'text-5xl font-bold tabular-nums',
            styles.value
          )}>
            {metric.value}
          </div>

          {metric.trend && (
            <div className="flex items-center gap-3">
              {TrendIcon && (
                <div className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold',
                  trendColor,
                  metric.trend.direction === 'up' ? 'bg-green-500/10' :
                  metric.trend.direction === 'down' ? 'bg-red-500/10' :
                  'bg-neutral-500/10'
                )}>
                  <TrendIcon className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>{Math.abs(metric.trend.value)}%</span>
                </div>
              )}
              {metric.trend.label && (
                <span className="text-sm text-neutral-400">
                  {metric.trend.label}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </motion.div>
  )
}
