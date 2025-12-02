'use client'

import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend } from 'recharts'
import { MaturityLevel } from '@/lib/presentation-data'

interface MaturityRadarProps {
    data: Array<{
        controle: string
        nivel: number
        nivelTexto: MaturityLevel
    }>
    className?: string
}

// Mapeia níveis de maturidade para valores numéricos
const maturityToNumber = (nivel: MaturityLevel): number => {
    const mapping: Record<MaturityLevel, number> = {
        'Inicial': 1,
        'Repetitivo': 2,
        'Definido': 3,
        'Gerenciado': 4,
        'Otimizado': 5
    }
    return mapping[nivel] || 0
}

export function MaturityRadar({ data, className = '' }: MaturityRadarProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data}>
                    <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                    <PolarAngleAxis
                        dataKey="controle"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={false}
                    />
                    <Radar
                        dataKey="nivel"
                        stroke="#00ade8"
                        fill="#00ade8"
                        fillOpacity={0.3}
                        strokeWidth={2}
                    />
                    <Legend
                        wrapperStyle={{ color: '#cbd5e1' }}
                        formatter={() => 'Nível de Maturidade'}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
