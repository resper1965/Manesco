/**
 * Keyboard Shortcuts Display and Handler
 */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface KeyboardShortcut {
  key: string
  description: string
  category: string
}

const shortcuts: KeyboardShortcut[] = [
  { key: '→ / Space', description: 'Próximo slide', category: 'Navegação' },
  { key: '←', description: 'Slide anterior', category: 'Navegação' },
  { key: 'Home', description: 'Primeiro slide', category: 'Navegação' },
  { key: 'End', description: 'Último slide', category: 'Navegação' },
  { key: '1-9', description: 'Ir para seção', category: 'Navegação' },
  { key: 'M', description: 'Abrir minimap', category: 'Navegação' },
  { key: 'F', description: 'Tela cheia', category: 'Visualização' },
  { key: 'P', description: 'Modo apresentador', category: 'Visualização' },
  { key: 'N', description: 'Mostrar/ocultar notas', category: 'Visualização' },
  { key: 'T', description: 'Alternar tema', category: 'Visualização' },
  { key: '?', description: 'Atalhos de teclado', category: 'Ajuda' },
  { key: 'Esc', description: 'Sair de tela cheia', category: 'Ajuda' },
]

interface KeyboardShortcutsProps {
  isOpen: boolean
  onClose: () => void
}

export function KeyboardShortcutsPanel({ isOpen, onClose }: KeyboardShortcutsProps) {
  const categories = Array.from(new Set(shortcuts.map(s => s.category)))

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

          {/* Panel */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Keyboard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">Atalhos de Teclado</h3>
                  <p className="text-xs text-slate-400">
                    {shortcuts.length} atalhos disponíveis
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

            {/* Shortcuts List */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
              {categories.map(category => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                    {category}
                    <Badge variant="secondary" size="sm">
                      {shortcuts.filter(s => s.category === category).length}
                    </Badge>
                  </h4>
                  <div className="space-y-2">
                    {shortcuts
                      .filter(s => s.category === category)
                      .map((shortcut, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between p-3 bg-slate-850/50 rounded-lg border border-slate-800 hover:border-primary/20 transition-colors"
                        >
                          <span className="text-sm text-slate-300">
                            {shortcut.description}
                          </span>
                          <kbd className="px-2 py-1 text-xs font-mono bg-slate-800 text-primary border border-slate-700 rounded">
                            {shortcut.key}
                          </kbd>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700 bg-slate-850/50 text-center">
              <p className="text-xs text-slate-500">
                Pressione <kbd className="px-1.5 py-0.5 mx-1 text-xs bg-slate-800 text-primary border border-slate-700 rounded">?</kbd> para abrir este painel
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function useKeyboardShortcuts(handlers: {
  onNext?: () => void
  onPrevious?: () => void
  onFirst?: () => void
  onLast?: () => void
  onToggleNotes?: () => void
  onToggleFullscreen?: () => void
  onTogglePresenter?: () => void
  onToggleMinimap?: () => void
  onToggleHelp?: () => void
  onToggleTheme?: () => void
  onGotoSection?: (section: number) => void
}) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if typing in input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          handlers.onNext?.()
          break
        case 'ArrowLeft':
          e.preventDefault()
          handlers.onPrevious?.()
          break
        case 'Home':
          e.preventDefault()
          handlers.onFirst?.()
          break
        case 'End':
          e.preventDefault()
          handlers.onLast?.()
          break
        case 'n':
        case 'N':
          handlers.onToggleNotes?.()
          break
        case 'f':
        case 'F':
          handlers.onToggleFullscreen?.()
          break
        case 'p':
        case 'P':
          handlers.onTogglePresenter?.()
          break
        case 'm':
        case 'M':
          handlers.onToggleMinimap?.()
          break
        case '?':
          handlers.onToggleHelp?.()
          break
        case 't':
        case 'T':
          handlers.onToggleTheme?.()
          break
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
          break
        default:
          // Number keys 1-9 for sections
          if (e.key >= '1' && e.key <= '9') {
            const section = parseInt(e.key) - 1
            handlers.onGotoSection?.(section)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handlers])
}
