# Plano de Gestão da Qualidade de Software
## Sistema de Controle de Despesas Pessoais (SCD)

### 1. Objetivo
Definir como a qualidade do Sistema de Controle de Despesas Pessoais (SCD) será planejada, assegurada, controlada e melhorada durante o projeto acadêmico da disciplina de Gestão e Qualidade de Software.

### 2. Escopo
O sistema permite cadastrar, listar, filtrar, editar, excluir despesas e calcular automaticamente o total gasto. Armazena os registros no próprio navegador por meio de LocalStorage e oferece categorias pré-definidas para classificação. Não contempla integração com bancos, conciliação bancária, importação automática de extratos, processamento de pagamentos ou controle de receitas.

### 3. Objetivos de qualidade
- Atender integralmente aos requisitos funcionais (RF01 a RF06) e não funcionais (RNF01 a RNF05).
- Evitar lançamentos inconsistentes, rejeitando campos vazios, valores negativos ou iguais a zero.
- Fornecer interface clara, responsiva e com mensagens de retorno compreensíveis ao usuário.
- Garantir a integridade dos cálculos do totalizador após qualquer operação (cadastro, edição, exclusão).
- Preservar os dados após atualização da página (F5) no mesmo navegador.
- Manter o escopo e a complexidade compatíveis com o prazo acadêmico da A3.

### 4. Papéis e responsabilidades
A equipe do projeto é composta por **4 integrantes**, com papéis distribuídos da seguinte forma:

| Integrante / Papel | Responsabilidade |
|---|---|
| Integrante 1: Líder e Analista de Requisitos | Gestão do escopo, cronograma, integração da equipe e especificação de requisitos e critérios de aceitação |
| Integrante 2: Desenvolvedor Frontend | Desenvolvimento da interface, validações de entrada, cálculo do totalizador e armazenamento em LocalStorage |
| Integrante 3: Analista de Qualidade e Testes | Elaboração e aplicação do checklist de qualidade, execução dos casos de teste e registro de evidências |
| Integrante 4: Analista de Métricas e Processos | Monitoramento da matriz de riscos, registro de não conformidades, consolidação de indicadores e ciclo PDCA |

### 5. Critérios de qualidade e aceitação
| Critério | Condição / Aceitação |
|---|---|
| Completude funcional | Cadastro, listagem, filtro, total, edição e exclusão demonstrados sem erros |
| Validação | Campos vazios e valores negativos ou nulos são rejeitados com alerta claro |
| Integridade | O somatório total geral é recalculado e conferido após todas as operações |
| Persistência | Dados continuam disponíveis e íntegros após recarregar a página (LocalStorage) |
| Usabilidade | Interface intuitiva, mensagens visíveis e confirmação antes da exclusão |
| Confiabilidade básica | Operações inválidas não travam a aplicação nem corrompem os dados existentes |

### 6. Atividades de garantia (prevenção)
- Revisar os requisitos para manter o escopo compatível com o prazo e a proposta da A3.
- Padronizar os campos, categorias pré-definidas (`<select>`), rótulos e mensagens da interface.
- Revisar o código HTML, CSS e JavaScript, observando boas práticas, validações e uso do LocalStorage.
- Manter controle de versão (Git/GitHub) e registrar alterações relevantes.
- Manter o checklist atualizado ao longo do desenvolvimento.

### 7. Atividades de controle (avaliação / detecção)
- Conferir os critérios de qualidade por meio do checklist estruturado (`criterios_checklist.md`).
- Executar os casos de teste funcionais com entradas válidas e inválidas (`casos_teste.md`).
- Registrar evidências visuais (capturas de tela) para cada operação e teste realizado.
- Registrar não conformidades com identificador, severidade, causa e ação corretiva (`registro_nao_conformidades.md`).
- Repetir testes de regressão após a correção para garantir a eliminação do defeito (ex.: CT05).

### 8. Gestão de riscos
Os riscos identificados e suas respectivas respostas planejadas estão descritos em `matriz_riscos.md`. A equipe monitora probabilidade, impacto e ações de contingência para evitar atrasos ou falhas críticas.

### 9. Indicadores
- **Índice de Conformidade do Checklist:** percentual de critérios atendidos ÷ aplicáveis × 100.
- **Taxa de Aprovação dos Casos de Teste:** testes aprovados ÷ testes executados × 100.
- **Taxa de Resolução de Não Conformidades:** NCs corrigidas ÷ NCs identificadas × 100.
- **Riscos Altos sem Resposta Planejada:** contagem de riscos críticos sem mitigação definida.

### 10. Gestão de não conformidades
Cada ocorrência deve conter: identificador, descrição, passos para reprodução, evidência da falha, impacto/severidade, causa raiz, responsável pela correção, ação corretiva, prazo, situação e verificação pós-correção.

### 11. Melhoria contínua (PDCA)
- **Plan (Planejar):** selecionar oportunidade de melhoria identificada (ex.: padronizar categorização de despesas para evitar inconsistências de digitação).
- **Do (Executar):** implementar a melhoria na aplicação (substituir campo de texto livre por elemento `<select>` com opções padronizadas).
- **Check (Verificar):** testar o fluxo de cadastro e verificar se as categorias são salvas e persistidas corretamente.
- **Act (Agir):** padronizar o componente, atualizar a documentação e os critérios de qualidade.

### 12. Critério de conclusão
O projeto será considerado concluído quando:
1. Todas as operações funcionais essenciais forem demonstradas e aprovadas nos Casos de Teste.
2. O Checklist de Qualidade atingir 100% de conformidade com evidências registradas.
3. Todas as Não Conformidades estiverem corrigidas e verificadas por testes de regressão.
4. Os indicadores forem calculados e apresentados no Painel da Qualidade e na documentação.
5. A documentação estiver completa, organizada e alinhada ao modelo de referência acadêmico.
