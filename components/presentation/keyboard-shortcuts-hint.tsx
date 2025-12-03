/**
 * Componente discreto para mostrar atalhos de teclado na apresentação
 */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard, X, ChevronUp } from 'lucide-react'

const mainShortcuts = [
  { key: '→ / Space', desc: 'Próximo' },
  { key: '←', desc: 'Anterior' },
  { key: 'M', desc: 'Minimap' },
  { key: 'P', desc: 'Apresentador' },
  { key: 'F', desc: 'Tela cheia' },
  { key: '?', desc: 'Ajuda' },
]

export function KeyboardShortcutsHint() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-lg shadow-2xl p-3 min-w-[200px]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-primary-400" />
                <span className="text-xs font-semibold text-neutral-300">Atalhos</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-1.5">
              {mainShortcuts.map((shortcut, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-400">{shortcut.desc}</span>
                  <kbd className="px-1.5 py-0.5 bg-neutral-800 text-primary-400 border border-neutral-700 rounded text-[10px] font-mono">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 hover:border-primary-500/50 flex items-center justify-center text-neutral-400 hover:text-primary-400 transition-all duration-200 shadow-lg hover:shadow-primary-500/20"
            title="Mostrar atalhos de teclado"
          >
            <Keyboard className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

