/**
 * Enhanced Content Slide with icons and visual hierarchy
 */
'use client'

import { motion } from 'framer-motion'
import { LucideIcon, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ContentItem {
  text: string
  icon?: LucideIcon
  highlight?: boolean
}

interface EnhancedContentSlideProps {
  title: string
  subtitle?: string
  items: (string | ContentItem)[]
  icon?: LucideIcon
  variant?: 'default' | 'highlight'
  layout?: 'list' | 'grid'
}

export function EnhancedContentSlide({
  title,
  subtitle,
  items,
  icon: TitleIcon,
  variant = 'default',
  layout = 'list'
}: EnhancedContentSlideProps) {
  // Parse items to handle both string and ContentItem
  const parsedItems: ContentItem[] = items.map(item =>
    typeof item === 'string'
      ? { text: item, icon: item.startsWith('•') ? CheckCircle2 : undefined }
      : item
  )

  return (
    <div className="flex flex-col h-full gap-8 px-8 py-12 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-4">
          {TitleIcon && (
            <div className="p-3 bg-primary/10 rounded-xl">
              <TitleIcon className="w-8 h-8 text-primary" />
            </div>
          )}
          <div className="flex-1">
            <h2 className={cn(
              "text-4xl md:text-5xl font-light text-slate-100",
              !TitleIcon && "border-l-4 border-primary pl-6"
            )}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-slate-400 mt-2">{subtitle}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className={cn(
        "flex-1 overflow-y-auto pr-4",
        layout === 'grid' ? "grid md:grid-cols-2 gap-4" : "space-y-4"
      )}>
        {parsedItems.map((item, i) => {
          const ItemIcon = item.icon || ArrowRight
          const isEmptyLine = item.text === ''

          if (isEmptyLine) {
            return <div key={i} className="h-4" />
          }

          // Clean text (remove bullet points if present)
          const cleanText = item.text.replace(/^[•\-]\s*/, '')

          if (layout === 'grid' || item.highlight) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={cn(
                  "bg-slate-850/50 border-slate-800 hover:border-primary/30 transition-all duration-300",
                  item.highlight && "border-primary/50 bg-primary/5"
                )}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "p-2 rounded-lg shrink-0",
                        item.highlight ? "bg-primary/20" : "bg-slate-700/50"
                      )}>
                        <ItemIcon className={cn(
                          "w-5 h-5",
                          item.highlight ? "text-primary" : "text-slate-400"
                        )} />
                      </div>
                      <p className={cn(
                        "text-base leading-relaxed pt-1",
                        item.highlight ? "text-slate-200 font-medium" : "text-slate-300"
                      )}>
                        {cleanText}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
                <ItemIcon className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <p className={cn(
                "text-lg leading-relaxed pt-1.5",
                cleanText.match(/^[A-Z]/) && !item.text.startsWith('•')
                  ? "text-slate-200 font-medium"
                  : "text-slate-300"
              )}>
                {cleanText}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
