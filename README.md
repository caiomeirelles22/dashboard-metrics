# Performance Analytics - Dashboard de Métricas B2B

Este é um painel de controle moderno e de alto desempenho desenvolvido para visualização de métricas de marketing B2B. O projeto foi construído utilizando o estado da arte do ecossistema React, com foco absoluto em Server Components, tipagem estrita e uma experiência de utilizador premium.
https://dashboard-metrics-nu.vercel.app/
## Tecnologias Utilizadas
Framework: Next.js 16.1 (App Router)
Linguagem: TypeScript 5.x
Estilização: Tailwind CSS v4 (Engine de alto desempenho)
Gráficos: Recharts
Notificações: Sonner
Ícones: Lucide React
Ambiente de Testes: Jest & React Testing Library
## Metodologia e Arquitetura
O projeto foi desenvolvido seguindo padrões rigorosos de engenharia de software:
TDD (Test Driven Development): O desenvolvimento foi 100% guiado por testes, garantindo estabilidade e permitindo refactorizações seguras desde o primeiro commit.
Princípios SOLID: Arquitetura focada na manutenção e escalabilidade, respeitando o Princípio da Responsabilidade Única (SRP) e a Inversão de Dependência.
Server-First Logic: A filtragem e o processamento de dados ocorrem prioritariamente no servidor, reduzindo o bundle size enviado ao cliente.
Mobile First & Dark Mode: Layout responsivo por padrão (utilizando a metodologia mobile-first do Tailwind) e suporte nativo a tema escuro para uma estética visual de excelência desde o início.
## Funcionalidades Chave
Estado Persistente na URL: Utiliza useSearchParams para que todos os filtros aplicados (status, canal) sejam refletidos no URL. Isto permite que os links sejam totalmente compartilháveis, mantendo a visualização idêntica para outros utilizadores.
Performance Otimizada: Implementação de ISR (Incremental Static Regeneration) com revalidação de 30 minutos.
## UX Fluida: Uso de React.Suspense com esqueletos de carregamento personalizados (Skeletons) para transições de estado sem interrupções.
Prevenção de Flicker: Script inline no carregamento inicial para deteção de tema (Dark/Light) antes do render do CSS.
## Como Executar o Projeto
Clonar o repositório:
git clone [https://github.com/caiomeirelles22/dashboard-metrics.git](https://github.com/caiomeirelles22/dashboard-metrics.git)


```bash
#Instalar as dependências:
npm install
```

```bash
#Executar em ambiente de desenvolvimento:
npm run dev
```

```bash
#Executar os testes (Ciclo TDD):
npm run test
```
```bash
#Build para produção:
npm run build
```


## Estrutura de Dados (TypeScript)
O projeto utiliza interfaces estritas para garantir a integridade dos dados:
Metric: KPIs principais (Receita, ROI, Leads).
Campaign: Listagem de campanhas com estados e canais tipados.
Investment: Estrutura de séries temporais para o gráfico de investimentos.
Desenvolvido com foco em qualidade e performance por Caio Meirelles.
