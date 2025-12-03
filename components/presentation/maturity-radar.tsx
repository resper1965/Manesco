"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, PolarRadiusAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Maturidade Atual por Controle"

interface MaturityRadarProps {
    data: Array<{
        controleId: number
        nivel: string
        valor: number
    }>
    controleNames?: Record<number, string>
}

const chartConfig = {
    valor: {
        label: "Nível de Maturidade",
        color: "#00ade8", // Ness Blue
    },
} satisfies ChartConfig

export function MaturityRadar({ data, controleNames }: MaturityRadarProps) {
    // Transform data for the chart - usar nome do controle se disponível
    const chartData = data.map(d => {
        const nomeControle = controleNames?.[d.controleId]
        
        return {
            subject: `CIS ${d.controleId}`, // Mostrar apenas número no eixo
            nomeControle: nomeControle || '', // Nome completo para tooltip
            valor: d.valor,
            fullMark: 100
        }
    })

    return (
        <div className="h-full flex gap-4 p-4">
            {/* Radar Chart */}
            <div className="flex-1 flex items-center justify-center min-w-0 max-w-[60%]">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[500px] w-full"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                        />
                        <PolarGrid stroke="#334155" />
                        <Radar
                            dataKey="valor"
                            fill="var(--color-valor)"
                            fillOpacity={0.5}
                            stroke="var(--color-valor)"
                            strokeWidth={2}
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    </RadarChart>
                </ChartContainer>
            </div>

            {/* Índice de Controles - 2 colunas */}
            {controleNames && Object.keys(controleNames).length > 0 && (
                <div className="flex-1 min-w-0 overflow-y-auto pr-2 custom-scrollbar">
                    <h4 className="text-sm font-semibold text-neutral-300 mb-3 sticky top-0 bg-neutral-950/80 backdrop-blur-sm py-2">
                        Índice de Controles
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                        {chartData.map((item, index) => {
                            const controleId = data[index]?.controleId
                            const nome = controleNames[controleId] || ''
                            if (!nome) return null
                            
                            return (
                                <div 
                                    key={controleId}
                                    className="flex items-start gap-1.5 p-1.5 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-primary-500/30 transition-colors"
                                >
                                    <span className="text-[10px] font-bold text-primary-400 shrink-0">
                                        {item.subject}
                                    </span>
                                    <span className="text-[10px] text-neutral-400 leading-tight">
                                        {nome}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
