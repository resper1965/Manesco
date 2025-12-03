/**
 * Componente de Grid para controles CIS - Layout otimizado para slide 4
 */
'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Minus } from 'lucide-react'

interface CISControl {
    id: number
    name: string
    worked?: boolean
    excluded?: boolean
}

interface CISControlsGridProps {
    controls: CISControl[]
}

export function CISControlsGrid({ controls }: CISControlsGridProps) {
    return (
        <div className="grid grid-cols-3 gap-2.5 auto-rows-min">
            {controls.map((control, index) => (
                <motion.div
                    key={control.id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    className={`
                        relative flex flex-col p-2.5 rounded-lg border-2
                        backdrop-blur-sm transition-all duration-300 group min-h-[100px]
                        ${control.excluded 
                            ? 'bg-neutral-900/20 border-neutral-800/40 opacity-40 grayscale' 
                            : control.worked
                            ? 'bg-primary-500/15 border-primary-500/40 hover:border-primary-500/60 hover:bg-primary-500/20 shadow-lg shadow-primary-500/10'
                            : 'bg-neutral-900/40 border-neutral-800/50 hover:border-primary-500/40 hover:bg-neutral-900/60'
                        }
                    `}
                >
                    {/* Número do controle - Badge superior esquerdo */}
                    <div className={`
                        absolute -top-1.5 -left-1.5 w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold z-10
                        shadow-lg transition-all duration-300
                        ${control.excluded 
                            ? 'bg-neutral-800 text-neutral-600 border-2 border-neutral-700' 
                            : control.worked
                            ? 'bg-primary-500 text-white border-2 border-primary-400 shadow-primary-500/50'
                            : 'bg-neutral-800 text-neutral-300 border-2 border-neutral-700'
                        }
                    `}>
                        {control.id}
                    </div>

                    {/* Badge de status - Canto superior direito */}
                    {control.worked && !control.excluded && (
                        <div className="absolute -top-2 -right-2 z-10">
                            <div className="w-5 h-5 rounded-full bg-primary-500 border-2 border-neutral-900 flex items-center justify-center shadow-lg shadow-primary-500/30">
                                <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                    )}

                    {control.excluded && (
                        <div className="absolute -top-2 -right-2 z-10">
                            <div className="w-5 h-5 rounded-full bg-neutral-700 border-2 border-neutral-900 flex items-center justify-center">
                                <Minus className="w-3 h-3 text-neutral-500" strokeWidth={2.5} />
                            </div>
                        </div>
                    )}

                    {/* Conteúdo principal */}
                    <div className="flex-1 flex flex-col pt-5 pb-1.5">
                        <p className={`
                            text-[11px] leading-tight font-medium flex-1
                            ${control.excluded 
                                ? 'text-neutral-600 line-through' 
                                : control.worked
                                ? 'text-neutral-50'
                                : 'text-neutral-300'
                            }
                        `}>
                            {control.name}
                        </p>
                    </div>

                    {/* Rodapé com status */}
                    {control.worked && !control.excluded && (
                        <div className="mt-1.5 pt-1.5 border-t border-primary-500/30">
                            <div className="flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-2.5 h-2.5 text-primary-400" />
                                <span className="text-[9px] text-primary-400 font-semibold uppercase tracking-wide">
                                    Em Foco
                                </span>
                            </div>
                        </div>
                    )}

                    {control.excluded && (
                        <div className="mt-1.5 pt-1.5 border-t border-neutral-800/50">
                            <span className="text-[9px] text-neutral-600 font-medium uppercase tracking-wide block text-center">
                                Excluído
                            </span>
                        </div>
                    )}

                    {/* Efeito hover */}
                    {!control.excluded && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/0 transition-all duration-300 pointer-events-none" />
                    )}
                </motion.div>
            ))}
        </div>
    )
}

