/**
 * Master Slide Layout - Ensures visual consistency across all slides
 */
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface SlideLayoutProps {
  title: string | ReactNode
  subtitle?: string
  icon?: LucideIcon
  children: ReactNode
  variant?: 'default' | 'centered' | 'split' | 'full'
  background?: 'default' | 'gradient' | 'dark'
  className?: string
}

const backgroundVariants = {
  default: 'bg-neutral-950',
  gradient: 'bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950',
  dark: 'bg-black',
}

const layoutVariants = {
  default: {
    container: 'flex flex-col h-screen p-12 gap-8',
    header: 'max-w-none',
    content: 'flex-1',
  },
  centered: {
    container: 'flex flex-col items-center justify-center h-screen p-12 gap-8',
    header: 'text-center max-w-4xl',
    content: 'w-full max-w-6xl',
  },
  split: {
    container: 'grid grid-cols-2 h-screen p-12 gap-12',
    header: 'col-span-2',
    content: 'col-span-2 grid grid-cols-2 gap-12',
  },
  full: {
    container: 'flex flex-col h-screen',
    header: 'px-12 pt-12 pb-6',
    content: 'flex-1 px-12 pb-12',
  },
}

export function SlideLayout({
  title,
  subtitle,
  icon: Icon,
  children,
  variant = 'default',
  background = 'default',
  className,
}: SlideLayoutProps) {
  const layout = layoutVariants[variant]
  const bgClass = backgroundVariants[background]

  return (
    <div className={cn(bgClass, 'relative overflow-hidden', className)}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className={cn(layout.container, 'relative z-10')}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={layout.header}
        >
          <div className="flex items-start gap-6">
            {Icon && (
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full" />
                  <div className="relative p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 rounded-2xl">
                    <Icon className="w-8 h-8 text-primary-500" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 space-y-3">
              <h1 className="text-5xl md:text-6xl font-light text-neutral-50 tracking-tight leading-tight">
                {title}
              </h1>

              {subtitle && (
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
                  <p className="text-xl text-neutral-400 font-light">
                    {subtitle}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-l from-primary-500/50 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={layout.content}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

/**
 * Content Container - Standardized content wrapper
 */
interface ContentContainerProps {
  children: ReactNode
  variant?: 'grid' | 'stack' | 'flex'
  gap?: 4 | 6 | 8 | 12
  className?: string
}

export function ContentContainer({
  children,
  variant = 'stack',
  gap = 6,
  className,
}: ContentContainerProps) {
  const variantClasses = {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    stack: 'flex flex-col',
    flex: 'flex flex-wrap',
  }

  return (
    <div className={cn(variantClasses[variant], `gap-${gap}`, className)}>
      {children}
    </div>
  )
}
