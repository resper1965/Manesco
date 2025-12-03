/**
 * Professional Section Headers - Consistent section dividers
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  number?: number
  variant?: 'default' | 'gradient' | 'minimal' | 'bold'
  alignment?: 'left' | 'center'
  animated?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  number,
  variant = 'default',
  alignment = 'left',
  animated = true,
  className,
}: SectionHeaderProps) {
  const alignmentClass = alignment === 'center' ? 'items-center text-center' : 'items-start text-left'

  if (variant === 'gradient') {
    return (
      <motion.div
        initial={animated ? { opacity: 0, y: -20 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={cn('relative overflow-hidden', className)}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-transparent blur-xl" />

        <div className={cn('relative flex flex-col gap-4 p-8 rounded-2xl border border-primary-500/20', alignmentClass)}>
          {number && (
            <div className="text-7xl font-bold text-primary-500/20 tabular-nums">
              {number.toString().padStart(2, '0')}
            </div>
          )}

          {Icon && (
            <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 w-fit">
              <Icon className="w-8 h-8 text-primary-400" strokeWidth={1.5} />
            </div>
          )}

          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-50 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-neutral-400 max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={animated ? { opacity: 0, y: -10 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.4 }}
        className={cn('space-y-3', className)}
      >
        <div className={cn('flex gap-4', alignmentClass)}>
          {Icon && (
            <Icon className="w-6 h-6 text-primary-400 shrink-0" strokeWidth={1.5} />
          )}
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-neutral-50">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-neutral-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-primary-500/50 via-primary-500/20 to-transparent" />
      </motion.div>
    )
  }

  if (variant === 'bold') {
    return (
      <motion.div
        initial={animated ? { opacity: 0, scale: 0.95 } : false}
        animate={animated ? { opacity: 1, scale: 1 } : false}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={cn('relative', className)}
      >
        <div className={cn('flex flex-col gap-6', alignmentClass)}>
          <div className="flex items-center gap-6">
            {number && (
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-2xl" />
                <div className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-primary-600 tabular-nums">
                  {number.toString().padStart(2, '0')}
                </div>
              </div>
            )}

            {Icon && (
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30">
                  <Icon className="w-12 h-12 text-primary-400" strokeWidth={1.5} />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h2 className="text-6xl md:text-7xl font-black text-neutral-50 leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="text-2xl text-neutral-400 max-w-4xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: -10 } : false}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.4 }}
      className={cn('space-y-4', className)}
    >
      <div className={cn('flex gap-4', alignmentClass)}>
        {number && (
          <div className="shrink-0">
            <div className="text-5xl font-bold text-primary-500/30 tabular-nums">
              {number.toString().padStart(2, '0')}
            </div>
          </div>
        )}

        {Icon && (
          <div className="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20 shrink-0 h-fit">
            <Icon className="w-7 h-7 text-primary-400" strokeWidth={1.5} />
          </div>
        )}

        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-400 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Subsection Header - For content within sections
 */
interface SubsectionHeaderProps {
  title: string
  description?: string
  icon?: LucideIcon
  badge?: React.ReactNode
  className?: string
}

export function SubsectionHeader({
  title,
  description,
  icon: Icon,
  badge,
  className,
}: SubsectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('flex items-start gap-3', className)}
    >
      {Icon && (
        <div className="p-2 rounded-md bg-neutral-800/50 border border-neutral-700/50 shrink-0">
          <Icon className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h3 className="text-2xl font-semibold text-neutral-100">
            {title}
          </h3>
          {badge}
        </div>
        {description && (
          <p className="text-sm text-neutral-400">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
