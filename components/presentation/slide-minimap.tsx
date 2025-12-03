/**
 * Advanced Navigation System - Minimap, Breadcrumbs, Quick Navigation
 */
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Map, X, Home, ChevronsRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SlideSection {
  title: string
  startIndex: number
  endIndex: number
  icon?: React.ReactNode
}

interface SlideMinimapProps {
  slides: any[]
  currentSlide: number
  onNavigate: (index: number) => void
  sections: SlideSection[]
}

export function SlideMinimap({ slides, currentSlide, onNavigate, sections }: SlideMinimapProps) {
  const getCurrentSection = () => {
    return sections.find(
      section => currentSlide >= section.startIndex && currentSlide <= section.endIndex
    )
  }

  const currentSection = getCurrentSection()

  return (
    <div className="space-y-4">
      {/* Current Section Info */}
      {currentSection && (
        <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
          <div className="p-2 bg-primary/10 rounded-lg">
            {currentSection.icon || <Map className="w-4 h-4 text-primary" />}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-200">
              {currentSection.title}
            </div>
            <div className="text-xs text-slate-500">
              Slides {currentSection.startIndex + 1} - {currentSection.endIndex + 1}
            </div>
          </div>
          <Badge variant="default" size="sm">
            {currentSlide - currentSection.startIndex + 1}/{currentSection.endIndex - currentSection.startIndex + 1}
          </Badge>
        </div>
      )}

      {/* Sections Grid */}
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
        {sections.map((section, sectionIdx) => {
          const isCurrentSection = currentSlide >= section.startIndex && currentSlide <= section.endIndex
          const sectionProgress = isCurrentSection
            ? ((currentSlide - section.startIndex + 1) / (section.endIndex - section.startIndex + 1)) * 100
            : currentSlide > section.endIndex
            ? 100
            : 0

          return (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIdx * 0.05 }}
              className={cn(
                "p-4 rounded-lg border transition-all cursor-pointer",
                isCurrentSection
                  ? "bg-primary/10 border-primary/30"
                  : "bg-slate-850/30 border-slate-700 hover:border-primary/20 hover:bg-slate-800/50"
              )}
              onClick={() => onNavigate(section.startIndex)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-1">
                  {section.icon && (
                    <div className={cn(
                      "shrink-0",
                      isCurrentSection ? "text-primary" : "text-slate-400"
                    )}>
                      {section.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className={cn(
                      "font-medium text-sm",
                      isCurrentSection ? "text-slate-100" : "text-slate-300"
                    )}>
                      {section.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {section.endIndex - section.startIndex + 1} slides
                    </div>
                  </div>
                </div>
                {sectionProgress > 0 && (
                  <Badge
                    variant={sectionProgress === 100 ? "success" : "default"}
                    size="sm"
                  >
                    {Math.round(sectionProgress)}%
                  </Badge>
                )}
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={cn(
                    "h-full rounded-full",
                    sectionProgress === 100 ? "bg-green-500" : "bg-primary"
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${sectionProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Slide Thumbnails */}
              {isCurrentSection && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-3 pt-3 border-t border-slate-700 grid grid-cols-4 gap-2"
                >
                  {Array.from({ length: section.endIndex - section.startIndex + 1 }).map((_, idx) => {
                    const slideIndex = section.startIndex + idx
                    const isActive = slideIndex === currentSlide

                    return (
                      <button
                        key={slideIndex}
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate(slideIndex)
                        }}
                        className={cn(
                          "aspect-video rounded border-2 transition-all text-xs flex items-center justify-center font-mono",
                          isActive
                            ? "border-primary bg-primary/20 text-primary"
                            : "border-slate-700 bg-slate-800/50 text-slate-500 hover:border-primary/50"
                        )}
                      >
                        {slideIndex + 1}
                      </button>
                    )
                  })}
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

interface MinimapOverlayProps {
  isOpen: boolean
  onClose: () => void
  slides: any[]
  currentSlide: number
  onNavigate: (index: number) => void
  sections: SlideSection[]
}

export function MinimapOverlay({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onNavigate,
  sections
}: MinimapOverlayProps) {
  const handleNavigate = (index: number) => {
    onNavigate(index)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Minimap Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 border-l border-slate-700 shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Map className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">Navegação</h3>
                  <p className="text-xs text-slate-400">
                    {slides.length} slides • {sections.length} seções
                  </p>
                </div>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon-sm"
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-slate-700 flex gap-2">
              <Button
                onClick={() => handleNavigate(0)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <Home className="w-4 h-4" />
                Início
              </Button>
              <Button
                onClick={() => handleNavigate(slides.length - 1)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <ChevronsRight className="w-4 h-4" />
                Final
              </Button>
            </div>

            {/* Minimap Content */}
            <div className="flex-1 overflow-hidden p-6">
              <SlideMinimap
                slides={slides}
                currentSlide={currentSlide}
                onNavigate={handleNavigate}
                sections={sections}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
