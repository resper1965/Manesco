'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
    title: string | React.ReactNode
    subtitle?: string
    className?: string
}

export function SectionDivider({ title, subtitle, className = '' }: SectionDividerProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`flex flex-col items-center justify-center h-screen gap-6 px-4 ${className}`}
        >
            <div className="relative">
                {/* Linha decorativa superior */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />

                <h2 className="text-5xl md:text-6xl font-light text-slate-100 text-center tracking-tight">
                    {title}
                </h2>
            </div>

            {subtitle && (
                <>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-slate-400 text-center max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>
                    
                    {/* Linha decorativa inferior - abaixo do subtítulo */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="h-0.5 w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
                    />
                </>
            )}

            {!subtitle && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-0.5 w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
                />
            )}

            {/* Dot indicator */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="w-2 h-2 rounded-full bg-blue-500 mt-4"
            />
        </motion.div>
    )
}
