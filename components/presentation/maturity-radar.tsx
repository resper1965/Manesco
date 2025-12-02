"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, PolarRadiusAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
}

const chartConfig = {
    valor: {
        label: "Nível de Maturidade",
        color: "#00ade8", // Ness Blue
    },
} satisfies ChartConfig

export function MaturityRadar({ data }: MaturityRadarProps) {
    // Transform data for the chart
    const chartData = data.map(d => ({
        subject: `CIS ${d.controleId}`,
        valor: d.valor,
        fullMark: 100
    }))

    return (
        <Card className="bg-slate-950 border-slate-800 h-full flex flex-col">
            <CardHeader className="items-center pb-4">
                <CardTitle className="text-slate-100">Radar de Maturidade</CardTitle>
                <CardDescription className="text-slate-400">
                    Nível de implementação por controle (%)
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0 flex-1 flex items-center justify-center">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[400px] w-full"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
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
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm pt-4">
                <div className="flex items-center gap-2 leading-none font-medium text-slate-300">
                    Média geral de maturidade: <span className="text-blue-500">45%</span> <TrendingUp className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-slate-500 flex items-center gap-2 leading-none">
                    Novembro 2025
                </div>
            </CardFooter>
        </Card>
    )
}
