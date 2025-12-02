"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "Status Atual vs Referência de Mercado"

interface CisStatusChartProps {
    data: Array<{
        name: string
        Manesco: number
        Mercado: number
    }>
}

const chartConfig = {
    Manesco: {
        label: "Manesco",
        color: "#00ade8", // Ness Blue
    },
    Mercado: {
        label: "Ref. Mercado",
        color: "#64748b", // Slate 500
    },
} satisfies ChartConfig

export function CisStatusChart({ data }: CisStatusChartProps) {
    // Filter data to remove items with 0 or NaN values if needed, or just pass through
    // The data comes with 'name' like "CIS 1", "CIS 2" etc.

    return (
        <Card className="bg-slate-950 border-slate-800">
            <CardHeader>
                <CardTitle className="text-slate-100">Status Atual vs Referência</CardTitle>
                <CardDescription className="text-slate-400">Comparativo de Aderência (%)</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <BarChart accessibilityLayer data={data} layout="vertical" margin={{ left: 0 }}>
                        <CartesianGrid horizontal={false} stroke="#334155" opacity={0.3} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 10 }}
                            width={50}
                        />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <ChartTooltip
                            cursor={{ fill: '#334155', opacity: 0.1 }}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="Manesco" fill="var(--color-Manesco)" radius={[0, 4, 4, 0]} barSize={12} />
                        <Bar dataKey="Mercado" fill="var(--color-Mercado)" radius={[0, 4, 4, 0]} barSize={12} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-slate-300">
                    Manesco supera a média de mercado em <span className="text-blue-500">11 controles</span> <TrendingUp className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-slate-500 leading-none">
                    Dados baseados na avaliação CIS Controls v8 IG2
                </div>
            </CardFooter>
        </Card>
    )
}
