/**
 * Professional stat card component for dashboards
 */
'use client'

import * as React from "react"
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: LucideIcon
  trend?: {
    value: number
    label?: string
  }
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  className?: string
  delay?: number
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = 'default',
  className,
  delay = 0
}: StatCardProps) {
  const variantStyles = {
    default: {
      bg: 'bg-slate-850/50',
      border: 'border-slate-800',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      valueBg: 'from-primary/5 to-transparent'
    },
    success: {
      bg: 'bg-green-500/5',
      border: 'border-green-500/20',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
      valueBg: 'from-green-500/5 to-transparent'
    },
    warning: {
      bg: 'bg-yellow-500/5',
      border: 'border-yellow-500/20',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-400',
      valueBg: 'from-yellow-500/5 to-transparent'
    },
    danger: {
      bg: 'bg-red-500/5',
      border: 'border-red-500/20',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
      valueBg: 'from-red-500/5 to-transparent'
    },
    info: {
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/20',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      valueBg: 'from-blue-500/5 to-transparent'
    }
  }

  const styles = variantStyles[variant]

  const TrendIcon = trend
    ? trend.value > 0
      ? TrendingUp
      : trend.value < 0
        ? TrendingDown
        : Minus
    : null

  const trendColor = trend
    ? trend.value > 0
      ? 'text-green-400'
      : trend.value < 0
        ? 'text-red-400'
        : 'text-slate-500'
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-xl border backdrop-blur-sm p-6 space-y-4",
        "hover:border-primary/30 transition-all duration-300 group",
        styles.bg,
        styles.border,
        className
      )}
    >
      {/* Background gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-50",
        styles.valueBg
      )} />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              {title}
            </p>
            {description && (
              <p className="text-xs text-slate-500">
                {description}
              </p>
            )}
          </div>

          {Icon && (
            <div className={cn(
              "p-2.5 rounded-lg transition-colors",
              styles.iconBg,
              "group-hover:scale-110 transition-transform duration-300"
            )}>
              <Icon className={cn("w-5 h-5", styles.iconColor)} />
            </div>
          )}
        </div>

        {/* Value */}
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold text-slate-100">
            {value}
          </div>

          {trend && TrendIcon && (
            <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
              <TrendIcon className="w-4 h-4" />
              <span>{Math.abs(trend.value)}%</span>
              {trend.label && (
                <span className="text-xs text-slate-500 ml-1">{trend.label}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
