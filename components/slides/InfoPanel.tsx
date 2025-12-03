/**
 * Professional Info Panels - Consistent text-heavy content presentation
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface InfoPanelProps {
  title?: string
  icon?: LucideIcon
  children: ReactNode
  variant?: 'default' | 'highlight' | 'bordered' | 'glassmorphic'
  status?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  delay?: number
  className?: string
}

const statusStyles = {
  success: {
    border: 'border-green-500/20',
    bg: 'bg-green-500/5',
    icon: 'text-green-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.1)]',
  },
  warning: {
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-500/5',
    icon: 'text-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.1)]',
  },
  danger: {
    border: 'border-red-500/20',
    bg: 'bg-red-500/5',
    icon: 'text-red-400',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.1)]',
  },
  info: {
    border: 'border-primary-500/20',
    bg: 'bg-primary-500/5',
    icon: 'text-primary-400',
    glow: 'shadow-[0_0_20px_rgba(0,173,232,0.1)]',
  },
  neutral: {
    border: 'border-neutral-700/30',
    bg: 'bg-neutral-800/30',
    icon: 'text-neutral-400',
    glow: '',
  },
}

export function InfoPanel({
  title,
  icon: Icon,
  children,
  variant = 'default',
  status = 'neutral',
  delay = 0,
  className,
}: InfoPanelProps) {
  const styles = statusStyles[status]

  if (variant === 'highlight') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
        className={cn(
          'relative overflow-hidden rounded-xl border-l-4 p-6',
          styles.border,
          styles.bg,
          className
        )}
      >
        {title && (
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <Icon className={cn('w-6 h-6', styles.icon)} strokeWidth={1.5} />
            )}
            <h3 className="text-xl font-semibold text-neutral-100">
              {title}
            </h3>
          </div>
        )}
        <div className="text-neutral-300 space-y-3 leading-relaxed">
          {children}
        </div>
      </motion.div>
    )
  }

  if (variant === 'bordered') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className={cn(
          'rounded-xl border-2 p-6',
          styles.border,
          styles.bg,
          styles.glow,
          'hover:scale-[1.01] transition-transform duration-200',
          className
        )}
      >
        {title && (
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-800/50">
            {Icon && (
              <div className={cn('p-2 rounded-lg', styles.bg, 'border', styles.border)}>
                <Icon className={cn('w-5 h-5', styles.icon)} strokeWidth={1.5} />
              </div>
            )}
            <h3 className="text-xl font-semibold text-neutral-100">
              {title}
            </h3>
          </div>
        )}
        <div className="text-neutral-300 space-y-3 leading-relaxed">
          {children}
        </div>
      </motion.div>
    )
  }

  if (variant === 'glassmorphic') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        className={cn(
          'relative overflow-hidden rounded-2xl backdrop-blur-xl p-6',
          'bg-gradient-to-br from-neutral-900/70 to-neutral-900/40',
          'border',
          styles.border,
          styles.glow,
          className
        )}
      >
        {/* Decorative gradient */}
        <div className={cn('absolute top-0 right-0 w-48 h-48 blur-3xl opacity-20', styles.bg)} />

        <div className="relative">
          {title && (
            <div className="flex items-center gap-3 mb-4">
              {Icon && (
                <div className={cn('p-3 rounded-xl', styles.bg, 'border', styles.border)}>
                  <Icon className={cn('w-6 h-6', styles.icon)} strokeWidth={1.5} />
                </div>
              )}
              <h3 className="text-2xl font-semibold text-neutral-50">
                {title}
              </h3>
            </div>
          )}
          <div className="text-neutral-200 space-y-4 leading-relaxed text-lg">
            {children}
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        'rounded-lg p-5',
        styles.bg,
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <Icon className={cn('w-5 h-5', styles.icon)} strokeWidth={1.5} />
          )}
          <h3 className="text-lg font-semibold text-neutral-100">
            {title}
          </h3>
        </div>
      )}
      <div className="text-neutral-300 space-y-2 leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

/**
 * Feature List - For listing features/points with icons
 */
interface FeatureListProps {
  items: Array<{
    id: string
    title: string
    description?: string
    icon?: LucideIcon
  }>
  columns?: 1 | 2
  variant?: 'default' | 'compact'
  showCheckmarks?: boolean
  staggerDelay?: number
  className?: string
}

export function FeatureList({
  items,
  columns = 1,
  variant = 'default',
  showCheckmarks = false,
  staggerDelay = 0.05,
  className,
}: FeatureListProps) {
  const gridCols = columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'

  return (
    <div className={cn('grid gap-4', gridCols, className)}>
      {items.map((item, index) => {
        const Icon = item.icon || (showCheckmarks ? CheckCircle2 : ArrowRight)

        if (variant === 'compact') {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * staggerDelay }}
              className="flex items-start gap-3"
            >
              <Icon className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-neutral-200 font-medium">{item.title}</p>
                {item.description && (
                  <p className="text-sm text-neutral-400 mt-1">{item.description}</p>
                )}
              </div>
            </motion.div>
          )
        }

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * staggerDelay }}
            className="flex items-start gap-4 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/30 hover:bg-neutral-800/50 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20 shrink-0">
              <Icon className="w-5 h-5 text-primary-400" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-neutral-100 font-semibold mb-1">{item.title}</p>
              {item.description && (
                <p className="text-sm text-neutral-400">{item.description}</p>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

/**
 * Stats Row - For displaying key statistics inline
 */
interface StatsRowProps {
  stats: Array<{
    id: string
    label: string
    value: string | number
    icon?: LucideIcon
  }>
  className?: string
}

export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <div className={cn(
      'grid grid-cols-2 md:grid-cols-4 gap-6',
      className
    )}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="text-center"
        >
          {stat.icon && (
            <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" strokeWidth={1.5} />
          )}
          <div className="text-3xl font-bold text-neutral-50 tabular-nums mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-neutral-400 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
