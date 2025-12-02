/**
 * Dados estruturados extraídos do PPT Manesco
 * Fonte: Apresentação "Manesco_Reunião_Status_05112025.pptx"
 * 
 * NOTA: Dados baseados em análise das imagens e descrições extraídas
 * Valores aproximados onde não foi possível ler números exatos
 */

// ===== 18 CONTROLES CIS IG2 =====
export const cisControls = [
    { id: 1, name: "Inventário e Controle de Ativos Corporativos", category: "Asset Management" },
    { id: 2, name: "Inventário e Controle de Ativos de Software", category: "Asset Management", worked: true },
    { id: 3, name: "Proteção de dados", category: "Data Protection", worked: true },
    { id: 4, name: "Configuração segura de ativos e softwares corporativos", category: "Configuration", worked: true },
    { id: 5, name: "Estabelecer e Manter um Inventário de Contas", category: "Access Control", worked: true },
    { id: 6, name: "Gerenciamento de controle de acesso", category: "Access Control", worked: true },
    { id: 7, name: "Gerenciamento contínuo de vulnerabilidades", category: "Vulnerability Management" },
    { id: 8, name: "Gerenciamento de log de auditoria", category: "Monitoring", worked: true },
    { id: 9, name: "Proteções de e-mail e navegadores da Web", category: "Application Security", worked: true },
    { id: 10, name: "Defesas de Malware", category: "Malware Defense" },
    { id: 11, name: "Recuperação de dados", category: "Recovery" },
    { id: 12, name: "Gerenciamento de infraestrutura de rede", category: "Network" },
    { id: 13, name: "Monitoramento e Proteção de Rede", category: "Network", worked: true },
    { id: 14, name: "Conscientização de Segurança e Treinamento de Competência", category: "Training" },
    { id: 15, name: "Gerenciamento de provedores de serviços", category: "Third Party" },
    { id: 16, name: "Segurança do software de aplicativos", category: "Application Security", excluded: true },
    { id: 17, name: "Gerenciamento de resposta a incidentes", category: "Incident Response" },
    { id: 18, name: "Teste de penetração", category: "Penetration Testing" },
]

// Controles ativamente trabalhados (8 de 18)
export const workedControls = cisControls.filter(c => c.worked)

// ===== NÍVEIS DE MATURIDADE =====
export type MaturityLevel = "Inicial" | "Repetitivo" | "Definido" | "Gerenciado" | "Otimizado"

export const maturityLevels: MaturityLevel[] = [
    "Inicial",
    "Repetitivo",
    "Definido",
    "Gerenciado",
    "Otimizado"
]

// Maturidade atual por controle (baseado em Slide 11)
// NOTA: Valores aproximados - precisarão ser ajustados com dados exatos
export const currentMaturity = [
    { controleId: 1, nivel: "Repetitivo" },
    { controleId: 2, nivel: "Repetitivo" },
    { controleId: 3, nivel: "Inicial" },
    { controleId: 4, nivel: "Repetitivo" },
    { controleId: 5, nivel: "Repetitivo" },
    { controleId: 6, nivel: "Repetitivo" },
    { controleId: 7, nivel: "Inicial" },
    { controleId: 8, nivel: "Repetitivo" }, // SIEM implementado
    { controleId: 9, nivel: "Inicial" },
    { controleId: 10, nivel: "Inicial" },
    { controleId: 11, nivel: "Inicial" },
    { controleId: 12, nivel: "Inicial" },
    { controleId: 13, nivel: "Repetitivo" },
    { controleId: 14, nivel: "Inicial" },
    { controleId: 15, nivel: "Inicial" },
    { controleId: 17, nivel: "Inicial" },
    { controleId: 18, nivel: "Inicial" },
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

// ===== DADOS PARA GRÁFICOS (Slides 7, 8, 10, 12) =====

// Slide 7: Status Atual vs Referência
export const statusVsReference = [
    { name: 'Aderência IG2', atual: 45, referencia: 100 },
    { name: 'Maturidade Média', atual: 35, referencia: 100 },
]

// Slide 8 & 10: Evolução da Implantação (Geral e Trabalhados)
export const implementationEvolution = [
    { periodo: 'Mai/25', geral: 15, trabalhados: 20 },
    { periodo: 'Jun/25', geral: 20, trabalhados: 35 },
    { periodo: 'Jul/25', geral: 25, trabalhados: 45 },
    { periodo: 'Ago/25', geral: 30, trabalhados: 55 },
    { periodo: 'Set/25', geral: 35, trabalhados: 65 },
    { periodo: 'Out/25', geral: 40, trabalhados: 75 },
    { periodo: 'Nov/25', geral: 45, trabalhados: 82 },
]

// Slide 12: Evolução da Maturidade
export const maturityEvolution = [
    { periodo: 'Dez/23', nivel: 1.2 }, // Inicial
    { periodo: 'Jun/24', nivel: 1.5 },
    { periodo: 'Dez/24', nivel: 1.8 },
    { periodo: 'Mai/25', nivel: 2.0 }, // Repetitivo
    { periodo: 'Nov/25', nivel: 2.1 }, // Repetitivo (pouca evolução)
]

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
