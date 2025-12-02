'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface EvolutionTimelineProps {
    data: Array<{
        periodo: string
        [key: string]: string | number
    }>
    lines: Array<{
        dataKey: string
        name: string
        color: string
    }>
    className?: string
    yAxisLabel?: string
}

export function EvolutionTimeline({
    data,
    lines,
    className = '',
    yAxisLabel
}: EvolutionTimelineProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                        {lines.map((line, idx) => (
                            <linearGradient key={idx} id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={line.color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={line.color} stopOpacity={0} />
                            </linearGradient>
                        ))}
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis
                        dataKey="periodo"
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8' }}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8' }}
                        label={yAxisLabel ? {
                            value: yAxisLabel,
                            angle: -90,
                            position: 'insideLeft',
                            style: { fill: '#94a3b8' }
                        } : undefined}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '0.5rem',
                            color: '#cbd5e1'
                        }}
                    />
                    <Legend
                        wrapperStyle={{ color: '#cbd5e1' }}
                    />
                    {lines.map((line, idx) => (
                        <Line
                            key={idx}
                            type="monotone"
                            dataKey={line.dataKey}
                            stroke={line.color}
                            strokeWidth={2}
                            name={line.name}
                            dot={{ fill: line.color, r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
