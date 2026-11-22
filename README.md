# Sistema de Controle de Despesas Pessoais — Gestão da Qualidade de Software

O **Sistema de Controle de Despesas Pessoais (SCD)** é uma aplicação web front-end desenvolvida como atividade avaliativa (A3) da disciplina de **Gestão e Qualidade de Software**. O objetivo é demonstrar, na prática, como os conceitos de qualidade — planejamento, controle, garantia, melhoria contínua e gestão de riscos — podem ser aplicados desde as fases iniciais de um projeto de software.

---

## 1. Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo **`index.html`** em qualquer navegador moderno (Chrome, Edge, Firefox).
3. A aplicação possui **duas abas principais**:
   - **Despesas** — cadastro, edição, exclusão, filtro e totalização.
   - **Painel da qualidade** — painel interativo com checklist, riscos, não conformidades, indicadores e ciclo PDCA.
4. **Não é necessário back-end nem servidor local.** Todos os dados são persistidos no **LocalStorage** do navegador.

> **Dica:** para resetar os dados, limpe o LocalStorage pelo DevTools do navegador (`F12 → Application → Local Storage`).

---

## 2. Funcionalidades

- **CRUD de despesas** — cadastro com descrição, valor (R$), categoria padronizada e data.
- **Validação de campos obrigatórios e valores monetários** — impede o envio de formulários incompletos ou com formatos inválidos.
- **Bloqueio de valores negativos ou zero** — apenas valores positivos e numéricos válidos são aceitos.
- **Cálculo automático do total** — o somatório das despesas é atualizado em tempo real em todas as operações.
- **Filtro por categoria ou descrição** — localização e filtragem dinâmica de registros na listagem.
- **Confirmação de exclusão e mensagens de retorno** — diálogo nativo de confirmação e alertas visuais de sucesso e erro.
- **Painel da qualidade com checklist e indicadores** — acompanhamento das práticas de qualidade adotadas no projeto com cálculo do índice de conformidade.
- **Lista de riscos e não conformidades** — identificação, classificação por severidade e planos de ação corretiva.
- **Visão do ciclo PDCA** — representação prática das etapas Plan-Do-Check-Act aplicadas à melhoria do sistema.

---

## 3. Como o projeto apoia Gestão da Qualidade

| Conteúdo | Evidência no projeto |
|---|---|
| Planejamento da Qualidade | Definição de requisitos, escopo, critérios de aceitação e papéis da equipe. |
| Controle da Qualidade | Execução e aprovação de 5 casos de teste funcionais com evidências visuais registradas. |
| Garantia da Qualidade | Checklist de inspeção com 9 critérios avaliados e 100% de conformidade. |
| Melhoria Contínua (PDCA) | Ciclo Plan-Do-Check-Act formalizado e aplicado na padronização da categorização de despesas. |
| Gestão de Riscos | Matriz de riscos monitorando probabilidade, impacto e respostas planejadas. |
| Não Conformidades | Registro e resolução integral das NCs identificadas (NC01 e NC02) com testes de regressão. |
| Indicadores de Qualidade | Métricas no painel (conformidade do checklist, aprovação de testes, resolução de NCs). |
| Requisitos de Software | Implementação orientada pelos requisitos funcionais (RF01 a RF06) e não funcionais (RNF01 a RNF05). |

---

## 4. Documentos de referência

A pasta **`documentacao/`** contém todos os artefatos de qualidade do projeto:

| Documento | Descrição |
|---|---|
| [`plano_gestao_qualidade.md`](documentacao/plano_gestao_qualidade.md) | Plano de Gestão da Qualidade completo (12 seções alinhadas ao modelo de referência). |
| [`casos_teste.md`](documentacao/casos_teste.md) | Plano e resultados dos casos de teste (CT01 a CT05) com capturas de tela. |
| [`criterios_checklist.md`](documentacao/criterios_checklist.md) | Checklist de qualidade auditado (Q01 a Q09) com 100% de conformidade e links de evidências. |
| [`indicadores_pdca.md`](documentacao/indicadores_pdca.md) | Consolidação dos indicadores quantitativos e detalhamento do ciclo PDCA. |
| [`matriz_riscos.md`](documentacao/matriz_riscos.md) | Matriz de riscos com probabilidades, impactos e planos de contingência. |
| [`registro_nao_conformidades.md`](documentacao/registro_nao_conformidades.md) | Registro formal das não conformidades identificadas, tratadas e corrigidas. |
| [`evidencias/`](documentacao/evidencias/) | Diretório contendo todas as capturas de tela comprovando a execução dos testes. |

---

## 5. Limitações

- **Sem integração bancária** — os dados de despesas são inseridos manualmente; não há conexão com APIs de bancos ou instituições financeiras.
- **Armazenamento em LocalStorage** — os dados ficam restritos ao navegador utilizado (~5 MB). Limpar o histórico/dados do navegador remove as despesas cadastradas.
- **Dados didáticos** — os valores e categorias são fictícios, utilizados exclusivamente para fins acadêmicos.
- **Sem dados pessoais sensíveis** — a aplicação não coleta, armazena nem transmite informações pessoais reais dos usuários.
