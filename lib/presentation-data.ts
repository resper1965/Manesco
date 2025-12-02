/**
 * Dados estruturados extraídos do PPT Manesco
 * Fonte: Apresentação "Manesco_Reunião_Status_05112025.pptx"
 * 
 * NOTA: Dados baseados em análise das imagens e descrições extraídas
 * Valores aproximados onde não foi possível ler números exatos
 */

export type MaturityLevel = "Inicial" | "Repetitivo" | "Definido" | "Gerenciado" | "Otimizado"

export const maturityLevels: MaturityLevel[] = [
    "Inicial",
    "Repetitivo",
    "Definido",
    "Gerenciado",
    "Otimizado"
]

// ===== GESTÃO DE VULNERABILIDADES =====

// Escopo
export const vulnerabilityScanScope = {
    servidores: 15,
    estacoes: 151,
    total: 166
}

// Evolução mensal (Slide 14/15)
// NOTA: Valores aproximados baseados nas descrições - precisam ser ajustados
export const vulnerabilityEvolution = [
    { mes: "Mai/25", novas: 0, tratadas: 0, total: 0 }, // Não havia scan regular
    { mes: "Jun/25", novas: 0, tratadas: 0, total: 0 },
    { mes: "Jul/25", novas: 0, tratadas: 0, total: 0 },
    { mes: "Ago/25", novas: 0, tratadas: 0, total: 0 },
    { mes: "Set/25", novas: 180, tratadas: 45, total: 250 }, // Retomada dos scans
    { mes: "Out/25", novas: 120, tratadas: 95, total: 275 }, // Pico de novas + tratamento
    { mes: "Nov/25", novas: 40, tratadas: 110, total: 205 }, // Redução significativa
]

// Total de vulnerabilidades - tendência (Slide 15)
export const totalVulnerabilitiesTrend = [
    { periodo: "Set/25", total: 250, criticas: 15, altas: 45, medias: 120, baixas: 70 },
    { periodo: "Out/25", total: 275, criticas: 18, altas: 52, medias: 130, baixas: 75 },
    { periodo: "Nov/25", total: 205, criticas: 8, altas: 32, medias: 95, baixas: 70 },
]

// ===== PENTESTS EM APLICAÇÕES (Slide 16) =====
export const pentestApplications = [
    {
        nome: "Aplicação 1",
        vulnerabilidades: { critico: 0, alto: 2, medio: 5, baixo: 8, info: 3 }
    },
    {
        nome: "Aplicação 2",
        vulnerabilidades: { critico: 1, alto: 3, medio: 7, baixo: 12, info: 5 }
    },
    {
        nome: "Aplicação 3",
        vulnerabilidades: { critico: 0, alto: 1, medio: 4, baixo: 6, info: 2 }
    },
    {
        nome: "Aplicação 4",
        vulnerabilidades: { critico: 0, alto: 0, medio: 3, baixo: 5, info: 1 }
    },
    {
        nome: "Aplicação 5",
        vulnerabilidades: { critico: 2, alto: 4, medio: 8, baixo: 10, info: 4 }
    },
    {
        nome: "Aplicação 6",
        vulnerabilidades: { critico: 0, alto: 1, medio: 2, baixo: 4, info: 1 }
    },
    {
        nome: "Aplicação 7",
        vulnerabilidades: { critico: 0, alto: 2, medio: 6, baixo: 9, info: 3 }
    },
    {
        nome: "Aplicação 8",
        vulnerabilidades: { critico: 1, alto: 3, medio: 5, baixo: 7, info: 2 }
    },
]

export const pentestSummary = {
    totalApps: 8,
    totalVulnerabilities: pentestApplications.reduce((sum, app) =>
        sum + Object.values(app.vulnerabilidades).reduce((a, b) => a + b, 0), 0
    ),
    criticas: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.critico, 0),
    altas: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.alto, 0),
}

// ===== PONTOS DE ATENÇÃO (Slide 25) =====
export const pontosAtencao = [
    {
        titulo: "Formalização e Publicação de Processos",
        descricao: "Ausência de formalização e publicação de processos já desenvolvidos e executados pela equipe de forma repetitiva.",
        impacto: "alto",
        status: "pendente"
    },
    {
        titulo: "Formalização do Comitê de Segurança",
        descricao: "Formalização do Comitê de Segurança da Informação, de acordo com as recomendações e o processo já encaminhados.",
        impacto: "alto",
        status: "pendente"
    },
    {
        titulo: "Retomada de Privacidade e Conscientização",
        descricao: "Retomada do processo de privacidade de dados e de conscientização em segurança da informação.",
        impacto: "medio",
        status: "pendente"
    },
    {
        titulo: "Gestão de Incidentes",
        descricao: "Iniciar a implantação do processo para gestão de incidentes.",
        impacto: "alto",
        status: "pendente"
    },
    {
        titulo: "Book de Indicadores",
        descricao: "Dar continuidade ao Book de Indicadores (modelo) já disponibilizado para a Manesco.",
        impacto: "medio",
        status: "pendente"
    },
]

// ===== DADOS REAIS (Fornecidos pelo Usuário) =====

// 1) Controles CIS – Status Atual (Manesco x Referência de Mercado)
export const cisStatusData = [
    { id: 1, name: "Inventário e Controle de Ativos Corporativos", manesco: 87.5, mercado: 58.0 },
    { id: 2, name: "Inventário e Controle de Ativos de Software", manesco: 91.7, mercado: 56.0, worked: true },
    { id: 3, name: "Proteção de dados", manesco: 37.5, mercado: 55.0, worked: true },
    { id: 4, name: "Configuração segura de ativos e softwares", manesco: 59.1, mercado: 70.0, worked: true },
    { id: 5, name: "Estabelecer e Manter um Inventário de Contas", manesco: 91.7, mercado: 73.0, worked: true },
    { id: 6, name: "Gerenciamento de controle de acesso", manesco: 79.2, mercado: 72.0, worked: true },
    { id: 7, name: "Gerenciamento contínuo de vulnerabilidades", manesco: 89.3, mercado: 65.0 },
    { id: 8, name: "Gerenciamento de log de auditoria", manesco: 63.6, mercado: 61.0, worked: true },
    { id: 9, name: "Proteções de e-mail e navegadores da Web", manesco: 100.0, mercado: 70.0, worked: true },
    { id: 10, name: "Defesas de Malware", manesco: 92.9, mercado: 71.0 },
    { id: 11, name: "Recuperação de dados", manesco: 20.0, mercado: 72.0 },
    { id: 12, name: "Gerenciamento de infraestrutura de rede", manesco: 37.5, mercado: 71.0 },
    { id: 13, name: "Monitoramento e Proteção de Rede", manesco: 54.2, mercado: 65.0, worked: true },
    { id: 14, name: "Conscientização de Segurança e Treinamento", manesco: 47.2, mercado: 64.0 },
    { id: 15, name: "Gerenciamento de Provedores de Serviços", manesco: 0.0, mercado: 55.0 },
    { id: 16, name: "Segurança do software de aplicativos", manesco: 0, mercado: 57.0, excluded: true }, // NaN tratado como 0
    { id: 17, name: "Gerenciamento de resposta a incidentes", manesco: 0.0, mercado: 67.0 },
    { id: 18, name: "Teste de penetração", manesco: 91.7, mercado: 61.0 },
]

// Atualiza a lista base de controles com os dados reais
export const cisControls = cisStatusData.map(c => ({
    id: c.id,
    name: c.name,
    category: "CIS Control", // Simplificado pois não veio no input novo, mas mantemos a prop
    worked: c.worked,
    excluded: c.excluded
}))

export const workedControls = cisControls.filter(c => c.worked)

// Slide 7: Status Atual vs Referência (Dados para Gráfico)
export const statusVsReference = cisStatusData.map(c => ({
    name: `CIS ${c.id}`,
    Manesco: c.manesco,
    Mercado: c.mercado
}))

// 2) Controles CIS – Evolução da Maturidade por Período (Médias Calculadas)
// Dados brutos para referência
const evolutionData = [
    { id: 1, d23: 6.2, j24: 6.2, m25: 87.5, o25: 87.5, n25: 87.5 },
    { id: 2, d23: 16.7, j24: 16.7, m25: 75.0, o25: 75.0, n25: 91.7 },
    { id: 3, d23: 6.2, j24: 6.2, m25: 33.3, o25: 35.4, n25: 37.5 },
    { id: 4, d23: 29.5, j24: 29.5, m25: 54.5, o25: 59.1, n25: 59.1 },
    { id: 5, d23: 33.3, j24: 66.7, m25: 79.2, o25: 91.7, n25: 91.7 },
    { id: 6, d23: 28.6, j24: 28.6, m25: 50.0, o25: 79.2, n25: 79.2 },
    { id: 7, d23: 21.4, j24: 21.4, m25: 82.1, o25: 82.1, n25: 89.3 },
    { id: 8, d23: 9.1, j24: 9.1, m25: 22.7, o25: 56.8, n25: 56.8 },
    { id: 9, d23: 29.2, j24: 29.2, m25: 54.2, o25: 66.7, n25: 100.0 },
    { id: 10, d23: 78.6, j24: 78.6, m25: 92.9, o25: 92.9, n25: 92.9 },
    { id: 11, d23: 30.0, j24: 30.0, m25: 20.0, o25: 20.0, n25: 20.0 },
    { id: 12, d23: 35.7, j24: 35.7, m25: 37.5, o25: 37.5, n25: 37.5 },
    { id: 13, d23: 33.3, j24: 44.4, m25: 50.0, o25: 54.2, n25: 54.2 },
    { id: 14, d23: 2.8, j24: 2.8, m25: 47.2, o25: 47.2, n25: 47.2 },
    { id: 15, d23: 0.0, j24: 0.0, m25: 0.0, o25: 0.0, n25: 0.0 },
    // 16 Excluído
    { id: 17, d23: 0.0, j24: 0.0, m25: 0.0, o25: 0.0, n25: 0.0 },
    { id: 18, d23: 83.3, j24: 83.3, m25: 91.7, o25: 91.7, n25: 91.7 },
]

// Função auxiliar para calcular média de um período
const calcAvg = (key: 'd23' | 'j24' | 'm25' | 'o25' | 'n25', subsetIds?: number[]) => {
    const controlsToUse = subsetIds
        ? evolutionData.filter(c => subsetIds.includes(c.id))
        : evolutionData

    const sum = controlsToUse.reduce((acc, curr) => acc + curr[key], 0)
    return Number((sum / controlsToUse.length).toFixed(1))
}

// Slide 8: Evolução Geral (Média de todos os controles)
export const implementationEvolution = [
    { periodo: 'Dez/23', geral: calcAvg('d23') },
    { periodo: 'Jul/24', geral: calcAvg('j24') },
    { periodo: 'Mai/25', geral: calcAvg('m25') },
    { periodo: 'Out/25', geral: calcAvg('o25') },
    { periodo: 'Nov/25', geral: calcAvg('n25') },
]

// Slide 10: Evolução Controles Trabalhados (Média do subconjunto)
const workedIds = [2, 3, 4, 5, 6, 8, 9, 13]
export const workedEvolution = [
    { periodo: 'Dez/23', trabalhados: calcAvg('d23', workedIds) },
    { periodo: 'Jul/24', trabalhados: calcAvg('j24', workedIds) },
    { periodo: 'Mai/25', trabalhados: calcAvg('m25', workedIds) },
    { periodo: 'Out/25', trabalhados: calcAvg('o25', workedIds) },
    { periodo: 'Nov/25', trabalhados: calcAvg('n25', workedIds) },
]

// Slide 12: Evolução da Maturidade (Usando os mesmos dados de evolução percentual como proxy de maturidade para o gráfico)
// O usuário forneceu "Evolução da Maturidade" em %, então usamos os mesmos dados.
export const maturityEvolution = implementationEvolution.map(d => ({
    periodo: d.periodo,
    nivel: d.geral // Usando % como métrica de maturidade conforme dados
}))

// Slide 11: Maturidade Atual por Controle (Radar)
// Usando dados de Nov/25
export const currentMaturity = evolutionData.map(c => ({
    controleId: c.id,
    nivel: c.n25 >= 80 ? 'Otimizado' : c.n25 >= 60 ? 'Gerenciado' : c.n25 >= 40 ? 'Definido' : c.n25 >= 20 ? 'Repetitivo' : 'Inicial',
    valor: c.n25
}))

// ===== TAREFAS (Slides 18-23) =====
// Agrupamento de tarefas por status e prioridade
export const tarefas = [
    {
        id: 't1',
        controleRelacionado: 2,
        titulo: 'Inventário automatizado de software',
        descricao: 'Implementação de inventário automatizado de ativos de software com integração ao CMDB',
        status: 'concluido' as const,
        progress: 100,
        priority: 'alto' as const,
    },
    {
        id: 't2',
        controleRelacionado: 3,
        titulo: 'Classificação de dados sensíveis',
        descricao: 'Processo de descoberta e classificação automática de dados sensíveis em repositórios',
        status: 'em-andamento' as const,
        progress: 75,
        priority: 'alto' as const,
    },
    {
        id: 't3',
        controleRelacionado: 4,
        titulo: 'Hardening de servidores',
        descricao: 'Aplicação de baselines CIS para hardening de servidores Windows e Linux',
        status: 'concluido' as const,
        progress: 100,
        priority: 'alto' as const,
    },
    {
        id: 't4',
        controleRelacionado: 5,
        titulo: 'Review trimestral de acessos',
        descricao: 'Processo recorrente de revisão e certificação de acessos privilegiados',
        status: 'em-andamento' as const,
        progress: 60,
        priority: 'medio' as const,
    },
    {
        id: 't5',
        controleRelacionado: 6,
        titulo: 'MFA para acessos críticos',
        descricao: 'Implementação de autenticação multifator para todos os acessos administrativos',
        status: 'concluido' as const,
        progress: 100,
        priority: 'alto' as const,
    },
    {
        id: 't6',
        controleRelacionado: 8,
        titulo: 'SIEM operacional',
        descricao: 'Implantação e configuração do SIEM com correlação de logs em tempo real',
        status: 'concluido' as const,
        progress: 100,
        priority: 'alto' as const,
    },
    {
        id: 't7',
        controleRelacionado: 9,
        titulo: 'Sandbox de e-mail',
        descricao: 'Deploy de sandbox para análise de anexos maliciosos em e-mails',
        status: 'em-andamento' as const,
        progress: 45,
        priority: 'medio' as const,
    },
    {
        id: 't8',
        controleRelacionado: 13,
        titulo: 'IDS/IPS de rede',
        descricao: 'Implantação de sistema de detecção e prevenção de intrusão na rede corporativa',
        status: 'em-andamento' as const,
        progress: 80,
        priority: 'alto' as const,
    },
    {
        id: 't9',
        controleRelacionado: 7,
        titulo: 'Scans automáticos de vulnerabilidade',
        descricao: 'Configuração de scans mensais automáticos em servidores e estações',
        status: 'concluido' as const,
        progress: 100,
        priority: 'alto' as const,
    },
    {
        id: 't10',
        controleRelacionado: 14,
        titulo: 'Programa de conscientização',
        descricao: 'Treinamentos trimestrais de segurança da informação para colaboradores',
        status: 'pendente' as const,
        progress: 0,
        priority: 'medio' as const,
    },
    {
        id: 't11',
        controleRelacionado: 17,
        titulo: 'Playbooks de resposta a incidentes',
        descricao: 'Desenvolvimento de playbooks para principais cenários de incidentes',
        status: 'pendente' as const,
        progress: 0,
        priority: 'alto' as const,
    },
    {
        id: 't12',
        controleRelacionado: 11,
        titulo: 'Testes de backup e restore',
        descricao: 'Testes trimestrais de recuperação de dados críticos',
        status: 'em-andamento' as const,
        progress: 30,
        priority: 'alto' as const,
    },
]

// Agrupamento para facilitar renderização nos slides
export const tarefasPorStatus = {
    concluidas: tarefas.filter(t => t.status === 'concluido'),
    emAndamento: tarefas.filter(t => t.status === 'em-andamento'),
    pendentes: tarefas.filter(t => t.status === 'pendente'),
}

// ===== METADATA =====
export const presentationMetadata = {
    cliente: "Manesco",
    data: "05/11/2025",
    totalSlides: 26,
    framework: "CIS Controls v8 - IG2",
    totalControles: 18,
    controlesExcluidos: 1, // Controle 16 - desenvolvimento interno
    controlesAtivos: 17,
    controlesTrabalhados: 8,
}
