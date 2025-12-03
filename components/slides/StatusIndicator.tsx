/**
 * Professional Status Indicators - Consistent status visualization
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, CheckCircle2, AlertCircle, XCircle, Clock, AlertTriangle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'danger' | 'info' | 'pending' | 'neutral'
  label: string
  description?: string
  icon?: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  animated?: boolean
  className?: string
}

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    ring: 'ring-green-500/20',
    badgeVariant: 'success' as const,
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    ring: 'ring-yellow-500/20',
    badgeVariant: 'warning' as const,
  },
  danger: {
    icon: XCircle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    ring: 'ring-red-500/20',
    badgeVariant: 'danger' as const,
  },
  info: {
    icon: Info,
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/30',
    ring: 'ring-primary-500/20',
    badgeVariant: 'default' as const,
  },
  pending: {
    icon: Clock,
    color: 'text-neutral-400',
    bg: 'bg-neutral-500/10',
    border: 'border-neutral-500/30',
    ring: 'ring-neutral-500/20',
    badgeVariant: 'default' as const,
  },
  neutral: {
    icon: AlertCircle,
    color: 'text-neutral-400',
    bg: 'bg-neutral-500/10',
    border: 'border-neutral-500/30',
    ring: 'ring-neutral-500/20',
    badgeVariant: 'default' as const,
  },
}

const sizeConfig = {
  sm: {
    icon: 'w-4 h-4',
    text: 'text-sm',
    desc: 'text-xs',
    padding: 'p-2',
  },
  md: {
    icon: 'w-5 h-5',
    text: 'text-base',
    desc: 'text-sm',
    padding: 'p-3',
  },
  lg: {
    icon: 'w-6 h-6',
    text: 'text-lg',
    desc: 'text-base',
    padding: 'p-4',
  },
}

export function StatusIndicator({
  status,
  label,
  description,
  icon: CustomIcon,
  size = 'md',
  showIcon = true,
  animated = true,
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status]
  const sizeStyles = sizeConfig[size]
  const Icon = CustomIcon || config.icon

  return (
    <motion.div
      initial={animated ? { opacity: 0, x: -10 } : false}
      animate={animated ? { opacity: 1, x: 0 } : false}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex items-start gap-3 rounded-lg border backdrop-blur-sm',
        config.bg,
        config.border,
        sizeStyles.padding,
        className
      )}
    >
      {showIcon && (
        <div className={cn(
          'shrink-0 rounded-full p-1',
          config.bg,
          'ring-2',
          config.ring
        )}>
          <Icon className={cn(sizeStyles.icon, config.color)} strokeWidth={2} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p className={cn(
          'font-semibold',
          config.color,
          sizeStyles.text
        )}>
          {label}
        </p>
        {description && (
          <p className={cn(
            'text-neutral-400 mt-1',
            sizeStyles.desc
          )}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Status Badge - Compact inline status
 */
interface StatusBadgeProps {
  status: 'success' | 'warning' | 'danger' | 'info' | 'pending' | 'neutral'
  label: string
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function StatusBadge({ status, label, showIcon = true, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon
  
  // Map 'md' to 'default' since Badge doesn't support 'md'
  const badgeSize = size === 'md' ? 'default' : size

  return (
    <Badge variant={config.badgeVariant} size={badgeSize}>
      {showIcon && <Icon className="w-3.5 h-3.5 mr-1.5" strokeWidth={2} />}
      {label}
    </Badge>
  )
}

/**
 * Status Grid - Display multiple statuses
 */
interface StatusGridProps {
  statuses: Array<{
    id: string
    status: 'success' | 'warning' | 'danger' | 'info' | 'pending' | 'neutral'
    label: string
    description?: string
    count?: number
  }>
  columns?: 1 | 2 | 3
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function StatusGrid({ statuses, columns = 2, size = 'md', className }: StatusGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {statuses.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <StatusIndicator
            status={item.status}
            label={item.count ? `${item.label} (${item.count})` : item.label}
            description={item.description}
            size={size}
            animated={false}
          />
        </motion.div>
      ))}
    </div>
  )
}

/**
 * Progress Status - Status with progress bar
 */
interface ProgressStatusProps {
  label: string
  progress: number
  status: 'success' | 'warning' | 'danger' | 'info'
  description?: string
  showPercentage?: boolean
}

export function ProgressStatus({
  label,
  progress,
  status,
  description,
  showPercentage = true,
}: ProgressStatusProps) {
  const config = statusConfig[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn('p-1 rounded', config.bg)}>
            <config.icon className={cn('w-4 h-4', config.color)} strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-neutral-200">{label}</span>
        </div>
        {showPercentage && (
          <span className={cn('text-sm font-semibold tabular-nums', config.color)}>
            {progress}%
          </span>
        )}
      </div>

      <div className="relative h-2 bg-neutral-800/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className={cn(
            'h-full rounded-full',
            status === 'success' ? 'bg-green-500' :
            status === 'warning' ? 'bg-yellow-500' :
            status === 'danger' ? 'bg-red-500' :
            'bg-primary-500'
          )}
        />
      </div>

      {description && (
        <p className="text-xs text-neutral-400">{description}</p>
      )}
    </motion.div>
  )
}
