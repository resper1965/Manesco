/**
 * Advanced Progress Indicators and Context Display
 */
'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  current: number
  total: number
  sections?: {
    title: string
    startIndex: number
    endIndex: number
  }[]
  className?: string
}

export function ProgressIndicator({ current, total, sections, className }: ProgressIndicatorProps) {
  const percentage = ((current + 1) / total) * 100

  const getCurrentSection = () => {
    if (!sections) return null
    return sections.find(
      section => current >= section.startIndex && current <= section.endIndex
    )
  }

  const currentSection = getCurrentSection()

  return (
    <div className={cn("space-y-2", className)}>
      {/* Section Breadcrumb */}
      {currentSection && sections && (
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-medium text-slate-500">
            {sections.findIndex(s => s === currentSection) + 1}/{sections.length}
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300">{currentSection.title}</span>
        </div>
      )}

      {/* Slide Counter */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium font-mono text-slate-400 tabular-nums">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        {/* Progress Bar */}
        <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Percentage */}
        <span className="text-xs font-medium text-slate-500 tabular-nums min-w-[3rem] text-right">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  )
}

interface SectionProgressProps {
  sections: {
    title: string
    startIndex: number
    endIndex: number
    icon?: React.ReactNode
  }[]
  currentSlide: number
  onNavigate?: (index: number) => void
}

export function SectionProgress({ sections, currentSlide, onNavigate }: SectionProgressProps) {
  const getCurrentSectionIndex = () => {
    return sections.findIndex(
      section => currentSlide >= section.startIndex && currentSlide <= section.endIndex
    )
  }

  const currentSectionIndex = getCurrentSectionIndex()

  return (
    <div className="flex items-center gap-1">
      {sections.map((section, idx) => {
        const isActive = idx === currentSectionIndex
        const isCompleted = currentSlide > section.endIndex
        const progress = isActive
          ? ((currentSlide - section.startIndex + 1) / (section.endIndex - section.startIndex + 1)) * 100
          : isCompleted
          ? 100
          : 0

        return (
          <button
            key={idx}
            onClick={() => onNavigate?.(section.startIndex)}
            className={cn(
              "group relative h-1.5 flex-1 rounded-full overflow-hidden transition-all",
              "hover:h-2",
              isActive || isCompleted ? "bg-slate-700" : "bg-slate-800"
            )}
            title={section.title}
          >
            <motion.div
              className={cn(
                "h-full rounded-full",
                isCompleted ? "bg-green-500" : "bg-primary"
              )}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />

            {/* Tooltip on hover */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-slate-800 text-xs text-slate-200 px-2 py-1 rounded whitespace-nowrap shadow-lg border border-slate-700">
                {section.title}
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

interface CircularProgressProps {
  current: number
  total: number
  size?: number
  strokeWidth?: number
}

export function CircularProgress({
  current,
  total,
  size = 40,
  strokeWidth = 3
}: CircularProgressProps) {
  const percentage = ((current + 1) / total) * 100
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-slate-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          className="text-primary"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      <span className="absolute text-xs font-medium text-slate-400 tabular-nums">
        {current + 1}
      </span>
    </div>
  )
}
