/**
 * Professional Data Card - Consistent data presentation
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface DataCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: LucideIcon
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
    label?: string
  }
  status?: 'success' | 'warning' | 'danger' | 'neutral'
  children?: ReactNode
  delay?: number
  className?: string
}

const statusStyles = {
  success: {
    border: 'border-green-500/30',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    valueBg: 'from-green-500/5 to-transparent',
  },
  warning: {
    border: 'border-yellow-500/30',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.15)]',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
    valueBg: 'from-yellow-500/5 to-transparent',
  },
  danger: {
    border: 'border-red-500/30',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    valueBg: 'from-red-500/5 to-transparent',
  },
  neutral: {
    border: 'border-primary-500/30',
    glow: 'shadow-[0_0_20px_rgba(0,173,232,0.15)]',
    iconBg: 'bg-primary-500/10',
    iconColor: 'text-primary-400',
    valueBg: 'from-primary-500/5 to-transparent',
  },
}

export function DataCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  status = 'neutral',
  children,
  delay = 0,
  className,
}: DataCardProps) {
  const styles = statusStyles[status]
  const TrendIcon = trend?.direction === 'up' ? TrendingUp : trend?.direction === 'down' ? TrendingDown : null

  const trendColor = trend?.direction === 'up' ? 'text-green-400' : trend?.direction === 'down' ? 'text-red-400' : 'text-neutral-500'

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
        'hover:scale-[1.02] transition-all duration-300',
        className
      )}
    >
      {/* Background Gradient */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br opacity-40',
        styles.valueBg
      )} />

      {/* Content */}
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              {title}
            </p>
            {subtitle && (
              <p className="text-xs text-neutral-500">
                {subtitle}
              </p>
            )}
          </div>

          {Icon && (
            <div className={cn(
              'p-3 rounded-xl transition-transform duration-300 group-hover:scale-110',
              styles.iconBg
            )}>
              <Icon className={cn('w-6 h-6', styles.iconColor)} strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Value */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="text-4xl md:text-5xl font-bold text-neutral-50 tabular-nums">
              {value}
            </div>

            {trend && TrendIcon && (
              <div className={cn(
                'flex items-center gap-1.5 text-sm font-semibold',
                trendColor
              )}>
                <TrendIcon className="w-4 h-4" strokeWidth={2} />
                <span>{Math.abs(trend.value)}{trend.value !== 0 && '%'}</span>
              </div>
            )}
          </div>

          {trend?.label && (
            <p className="text-xs text-neutral-500">
              {trend.label}
            </p>
          )}
        </div>

        {/* Additional Content */}
        {children && (
          <div className="pt-4 border-t border-neutral-800/50">
            {children}
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

/**
 * Mini Data Card - Compact version for dense information
 */
interface MiniDataCardProps {
  label: string
  value: string | number
  icon?: LucideIcon
  color?: 'primary' | 'success' | 'warning' | 'danger'
  delay?: number
}

const colorStyles = {
  primary: 'border-primary-500/20 bg-primary-500/5 text-primary-400',
  success: 'border-green-500/20 bg-green-500/5 text-green-400',
  warning: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-400',
  danger: 'border-red-500/20 bg-red-500/5 text-red-400',
}

export function MiniDataCard({ label, value, icon: Icon, color = 'primary', delay = 0 }: MiniDataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        'flex items-center justify-between p-4 rounded-xl border backdrop-blur-sm',
        colorStyles[color]
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5" strokeWidth={1.5} />}
        <span className="text-sm font-medium text-neutral-300">{label}</span>
      </div>
      <span className="text-lg font-bold tabular-nums">{value}</span>
    </motion.div>
  )
}
