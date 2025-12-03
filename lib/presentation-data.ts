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
// Dados reais fornecidos: Set/25 e Out/25
export const vulnerabilityEvolution = [
    { mes: "Ago/25", novas: 0, tratadas: 0, total: 0 }, // Marco zero
    { mes: "Set/25", novas: 0, tratadas: 0, total: 771 }, // Baseline inicial
    { mes: "Out/25", novas: 53, tratadas: 418, total: 406 }, // Evolução real: 771 + 53 - 418 = 406
]

// Total de vulnerabilidades - tendência (Slide 15)
export const totalVulnerabilitiesTrend = [
    { periodo: "Set/25", total: 771, criticas: 345, altas: 95, medias: 220, baixas: 111 },
    { periodo: "Out/25", total: 406, criticas: 22, altas: 86, medias: 202, baixas: 96 },
    // O "outro slide" com total 75 (High 5, Med 21, Low 49) parece ser um recorte específico (ex: servidores críticos ou externos)
    // Mantemos o foco no total geral para a visão executiva
]

// ===== PENTESTS EM APLICAÇÕES (Slide 16) =====
// ===== PENTESTS EM APLICAÇÕES (Slide 16) =====
// Dados reais consolidados (Out/2025)
// Escopo: 8 aplicações
// Total: 75 vulnerabilidades (5 High, 21 Medium, 49 Low)
export const pentestApplications = [
    {
        nome: "Consolidado (8 Aplicações)",
        vulnerabilidades: { critico: 0, alto: 5, medio: 21, baixo: 49, info: 0 }
    }
]

export const pentestSummary = {
    totalApps: 8,
    totalVulnerabilities: 75,
    criticas: 0,
    altas: 5,
    medias: 21,
    baixas: 49
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

// Slide 10: Evolução da Maturidade (Escala 1-5)
// Dados reais: começou com 1,06 e hoje está em 2,12
export const maturityEvolution = [
    { periodo: 'Dez/23', nivel: 1.06 },
    { periodo: 'Jul/24', nivel: 1.35 },
    { periodo: 'Mai/25', nivel: 1.75 },
    { periodo: 'Out/25', nivel: 1.95 },
    { periodo: 'Nov/25', nivel: 2.12 },
]

// Slide 11: Maturidade Atual por Controle (Radar)
// Usando dados de Nov/25
export const currentMaturity = evolutionData.map(c => ({
    controleId: c.id,
    nivel: c.n25 >= 80 ? 'Otimizado' : c.n25 >= 60 ? 'Gerenciado' : c.n25 >= 40 ? 'Definido' : c.n25 >= 20 ? 'Repetitivo' : 'Inicial',
    valor: c.n25
}))

// ===== TAREFAS (Slides 18-23) =====
// Agrupamento de tarefas por status e prioridade
// ===== TAREFAS (Slides 18-23) =====
export const tarefas = [
    // 3.1. Inventário e Controle de Softwares (2) / Proteção de Dados (3)
    {
        id: 't3.1-1', controleRelacionado: 2, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da norma de Software',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria (sócios).'
    },
    {
        id: 't3.1-2', controleRelacionado: 2, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Bloqueio de execução de scripts',
        descricao: 'Política local implementada impedindo execução de scripts por usuários não privilegiados.'
    },
    {
        id: 't3.1-3', controleRelacionado: 3, status: 'pendente' as const, progress: 0, priority: 'medio' as const,
        titulo: 'Diretriz de descarte de informações',
        descricao: 'Incluído no Procedimento de Descarte Seguro. Aguardando aprovação e publicação.'
    },
    {
        id: 't3.1-4', controleRelacionado: 3, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Procedimento de criptografia de disco',
        descricao: 'Procedimento técnico de criptografia (passo a passo) criado e detalhado.'
    },

    // 3.2. Política de Segurança / Inventário de Ativos (1)
    {
        id: 't3.2-1', controleRelacionado: 1, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da Política de Segurança',
        descricao: 'Política desenvolvida e avaliada. Aguardando aprovação da diretoria.'
    },
    {
        id: 't3.2-2', controleRelacionado: 1, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da norma de Ativos',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria.'
    },
    {
        id: 't3.2-3', controleRelacionado: 1, status: 'em-andamento' as const, progress: 50, priority: 'medio' as const,
        titulo: 'Controle de ativos não autorizados',
        descricao: 'Mapeamento MAC realizado. Aguardando configuração de bloqueio no Firewall.'
    },
    {
        id: 't3.2-4', controleRelacionado: 1, status: 'concluido' as const, progress: 100, priority: 'medio' as const,
        titulo: 'Inventário de rede (Atera RMM)',
        descricao: 'Todos os equipamentos de rede cadastrados na solução de inventário.'
    },

    // 3.3. Configuração Segura de Ativos (4)
    {
        id: 't3.3-1', controleRelacionado: 4, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da norma de Configuração',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria.'
    },
    {
        id: 't3.3-2', controleRelacionado: 4, status: 'pendente' as const, progress: 0, priority: 'medio' as const,
        titulo: 'Habilitar HTTPS/SSH em equipamentos',
        descricao: 'Resta avaliar todos os dispositivos de rede para garantir configuração segura.'
    },
    {
        id: 't3.3-3', controleRelacionado: 4, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Reavaliação de credenciais',
        descricao: 'Credenciais checadas em todos os ativos (exceto switch legado).'
    },
    {
        id: 't3.3-4', controleRelacionado: 4, status: 'concluido' as const, progress: 100, priority: 'medio' as const,
        titulo: 'Doc. de avaliação de serviços',
        descricao: 'Documento interno criado e disponibilizado para a equipe.'
    },

    // 3.4. Gerenciamento de Contas (5)
    {
        id: 't3.4-1', controleRelacionado: 5, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da norma de Contas',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria.'
    },
    {
        id: 't3.4-2', controleRelacionado: 5, status: 'em-andamento' as const, progress: 75, priority: 'alto' as const,
        titulo: 'Solução de cofre de senhas',
        descricao: 'Passbolt selecionado após testes. Comparativo elaborado para aprovação.'
    },
    {
        id: 't3.4-3', controleRelacionado: 5, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Implantação de MFA',
        descricao: 'MFA habilitado em todas as aplicações com suporte.'
    },
    {
        id: 't3.4-4', controleRelacionado: 5, status: 'concluido' as const, progress: 100, priority: 'medio' as const,
        titulo: 'Inventário de contas de serviço',
        descricao: 'Mapeamento e descrição de todas as contas de serviço no KeePass.'
    },
    {
        id: 't3.4-5', controleRelacionado: 5, status: 'em-andamento' as const, progress: 20, priority: 'medio' as const,
        titulo: 'Integração E-mail e AD',
        descricao: 'Integração direta inviável (padronização). Foco na integração com M365.'
    },

    // 3.5. Gerenciamento de Acesso (6)
    {
        id: 't3.5-1', controleRelacionado: 6, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Aprovação da norma de Acesso',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria.'
    },
    {
        id: 't3.5-2', controleRelacionado: 6, status: 'pendente' as const, progress: 0, priority: 'alto' as const,
        titulo: 'Fluxo de concessão/revogação',
        descricao: 'Fluxos criados, aguardando aprovação formal.'
    },

    // 3.6. Proteção de E-mail (9)
    {
        id: 't3.6-1', controleRelacionado: 9, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Autenticação de E-mail (DMARC/DKIM)',
        descricao: 'Configuração realizada e aplicada para o domínio manesco.com.br.'
    },

    // 3.7. Gerenciamento de Logs (8)
    {
        id: 't3.7-1', controleRelacionado: 8, status: 'concluido' as const, progress: 100, priority: 'alto' as const,
        titulo: 'Implantação de SIEM (Wazuh)',
        descricao: 'Solução Wazuh implantada para centralização de logs.'
    },
    {
        id: 't3.7-2', controleRelacionado: 8, status: 'em-andamento' as const, progress: 60, priority: 'alto' as const,
        titulo: 'Encaminhamento de logs',
        descricao: 'Estações e servidores internos OK. Resta servidor em nuvem.'
    },
    {
        id: 't3.7-3', controleRelacionado: 8, status: 'pendente' as const, progress: 0, priority: 'medio' as const,
        titulo: 'Criação de alertas (Casos de Uso)',
        descricao: 'Em processo de definição e implantação.'
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
