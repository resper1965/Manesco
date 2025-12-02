/**
 * Componente de gráfico de barras para status CIS
 * Mostra comparação entre Manesco e referência de mercado
 */
'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface CISStatusChartProps {
    data: Array<{
        controle: string
        manesco: number
        mercado: number
    }>
}

export function CISStatusChart({ data }: CISStatusChartProps) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} layout="horizontal" margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis
                    type="number"
                    stroke="#cbd5e1"
                    tick={{ fill: '#cbd5e1', fontSize: 12 }}
                    domain={[0, 100]}
                />
                <YAxis
                    type="category"
                    dataKey="controle"
                    stroke="#cbd5e1"
                    tick={{ fill: '#cbd5e1', fontSize: 11 }}
                    width={200}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#f8fafc'
                    }}
                    formatter={(value: number) => `${value}%`}
                />
                <Legend
                    wrapperStyle={{ color: '#cbd5e1' }}
                    formatter={(value) => value === 'manesco' ? 'Manesco' : 'Mercado (Referência)'}
                />
                <Bar dataKey="manesco" fill="#00ade8" radius={[0, 4, 4, 0]} />
                <Bar dataKey="mercado" fill="#64748b" radius={[0, 4, 4, 0]} opacity={0.4} />
            </BarChart>
        </ResponsiveContainer>
    )
}
