/**
 * Componente de tabela elegante para controles CIS
 */
'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus, Shield, ShieldCheck, ShieldAlert } from 'lucide-react'

interface CISControl {
    id: number
    name: string
    category: string
    worked?: boolean
    excluded?: boolean
}

interface CISControlsTableProps {
    controls: CISControl[]
}

const categoryColors: Record<string, string> = {
    'Asset Management': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Data Protection': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Configuration': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'Access Control': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Vulnerability Management': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'Monitoring': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    'Application Security': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    'Malware Defense': 'bg-red-500/10 text-red-400 border-red-500/20',
    'Recovery': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    'Network': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    'Training': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Third Party': 'bg-lime-500/10 text-lime-400 border-lime-500/20',
    'Incident Response': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    'Penetration Testing': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
}

export function CISControlsTable({ controls }: CISControlsTableProps) {
    return (
        <div className="space-y-3 overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
            {controls.map((control, index) => (
                <motion.div
                    key={control.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className={`
            bg-slate-850/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800
            hover:border-blue-500/30 hover:bg-slate-800/80
            transition-all duration-300 group
            ${control.excluded ? 'opacity-50 grayscale' : ''}
            ${control.worked ? 'border-l-4 border-l-blue-500' : ''}
          `}
                >
                    <div className="flex items-center gap-4">
                        {/* Número do controle */}
                        <div className={`
                            flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                            ${control.worked ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-800 text-slate-500'}
                        `}>
                            <span className="text-lg font-bold">{control.id}</span>
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-4 mb-1">
                                <h3 className={`text-sm md:text-base font-medium truncate pr-4 ${control.worked ? 'text-slate-100' : 'text-slate-300'}`}>
                                    {control.name}
                                </h3>

                                {/* Status Badge */}
                                <div className="flex-shrink-0">
                                    {control.excluded ? (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-500 border border-slate-700">
                                            Excluído
                                        </span>
                                    ) : control.worked ? (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            <Check className="w-3 h-3" />
                                            Trabalhado
                                        </span>
                                    ) : null}
                                </div>
                            </div>

                            {/* Categoria */}
                            <div className="flex items-center gap-2">
                                <span className={`
                                    inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold
                                    ${categoryColors[control.category] || 'bg-slate-800 text-slate-500'}
                                `}>
                                    {control.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
