# Sistema de Controle de Despesas Pessoais — Gestão da Qualidade de Software

O **Sistema de Controle de Despesas Pessoais (SCD)** é uma aplicação web front-end desenvolvida como atividade avaliativa (A3) da disciplina de **Gestão e Qualidade de Software**. O objetivo é demonstrar, na prática, como os conceitos de qualidade — planejamento, controle, garantia, melhoria contínua e gestão de riscos — podem ser aplicados desde as fases iniciais de um projeto de software.

---

## 1. Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo **`index.html`** em qualquer navegador moderno (Chrome, Edge, Firefox).
3. A aplicação possui **duas abas principais**:
   - **Despesas** — cadastro, edição, exclusão, filtro e totalização.
   - **Qualidade** — painel com checklist, indicadores e ciclo PDCA.
4. **Não é necessário back-end nem servidor local.** Todos os dados são persistidos no **LocalStorage** do navegador.

> **Dica:** para resetar os dados, limpe o LocalStorage pelo DevTools do navegador (`F12 → Application → Local Storage`).

---

## 2. Funcionalidades

- **CRUD de despesas** — cadastro com descrição, valor (R$), categoria e data.
- **Validação de campos obrigatórios e valores monetários** — impede o envio de formulários incompletos ou com formatos inválidos.
- **Bloqueio de valores negativos ou zero** — apenas valores positivos são aceitos.
- **Cálculo automático do total** — a soma das despesas é atualizada em tempo real.
- **Filtro por categoria ou descrição** — localização rápida de registros.
- **Confirmação de exclusão e mensagens de retorno** — feedback visual para cada ação do usuário.
- **Painel de qualidade com checklist e indicadores** — acompanhamento das práticas de qualidade adotadas no projeto.
- **Lista de riscos e não conformidades** — identificação, classificação e plano de resposta.
- **Visão do ciclo PDCA** — representação das etapas Plan-Do-Check-Act aplicadas ao projeto.

---

## 3. Como o projeto apoia Gestão da Qualidade

| Conteúdo | Evidência no projeto |
|---|---|
| Planejamento da Qualidade | Definição de requisitos, critérios de aceitação e checklist antes da codificação. |
| Controle da Qualidade | Validações em tempo real nos formulários e testes manuais documentados. |
| Garantia da Qualidade | Checklist de boas práticas e revisão por pares na aba Qualidade. |
| Melhoria Contínua (PDCA) | Ciclo Plan-Do-Check-Act visível no painel, com ações corretivas registradas. |
| Gestão de Riscos | Matriz de riscos com probabilidade, impacto e plano de mitigação. |
| Não Conformidades | Registro de não conformidades encontradas e ações corretivas aplicadas. |
| Indicadores de Qualidade | Métricas visuais (total de despesas, cobertura do checklist, riscos abertos). |
| Requisitos de Software | Funcionalidades mapeadas a partir dos requisitos definidos na documentação. |

---

## 4. Documentos de referência

A pasta **`documentacao/`** contém os artefatos de apoio ao projeto:

| Documento | Descrição |
|---|---|
| `plano_gestao_qualidade.md` | Plano de Qualidade do projeto (objetivos, escopo, critérios e papéis). |
| `criterios_checklist.md` | Checklist de verificação de qualidade. |
| `matriz_riscos.md` | Matriz de riscos com classificação e plano de resposta. |
| `registro_nao_conformidades.md` | Registro de não conformidades e ações corretivas. |
| `indicadores_pdca.md` | Indicadores e descrição do ciclo PDCA aplicado ao projeto. |
| `casos_teste.md` | Plano e resultados dos casos CT01 a CT05. |

> **Nota:** os nomes e formatos dos arquivos podem variar conforme a evolução do projeto. Consulte a pasta `documentacao/` para a versão mais atualizada.

---

## 5. Orientação para a atividade

Para a apresentação e revisão em grupo, siga os passos abaixo:

1. **Cada integrante** deve clonar o repositório e executar a aplicação localmente.
2. **Explorar as duas abas** (Despesas e Qualidade) e verificar se todas as funcionalidades listadas na Seção 2 estão operacionais.
3. **Revisar a documentação** na pasta `documentacao/` e validar a coerência entre os artefatos e a implementação.
4. **Registrar eventuais não conformidades** encontradas durante a revisão e sugerir ações corretivas.
5. **Preencher o checklist de qualidade** indicando os itens atendidos e os que necessitam de ajuste.
6. **Preparar uma breve apresentação** destacando: funcionalidades implementadas, práticas de qualidade adotadas, riscos identificados e lições aprendidas.

---

## 6. Limitações

- **Sem integração bancária** — os dados de despesas são inseridos manualmente; não há conexão com APIs de bancos ou instituições financeiras.
- **Limites do LocalStorage** — o armazenamento é restrito ao navegador utilizado (~5 MB). Limpar os dados do navegador apaga todas as despesas cadastradas.
- **Dados didáticos** — os valores e categorias são fictícios, utilizados exclusivamente para fins acadêmicos.
- **Sem dados pessoais sensíveis** — a aplicação não coleta, armazena nem transmite informações pessoais reais dos usuários.
