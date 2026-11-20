# Matriz de Riscos — SCD

A tabela a seguir apresenta os principais riscos identificados para o projeto **Sistema de Controle de Despesas (SCD)**, classificados por probabilidade de ocorrência e impacto, acompanhados das respectivas respostas planejadas.

| ID   | Risco                                              | Probabilidade | Impacto | Resposta planejada                                                   |
| ---- | -------------------------------------------------- | ------------- | ------- | -------------------------------------------------------------------- |
| R01  | Perda de dados no LocalStorage                     | Média         | Alto    | Testar cenários de fechamento/reabertura e tratar erros de JSON      |
| R02  | Incompatibilidade visual em dispositivos móveis    | Média         | Médio   | Adotar CSS responsivo e validar em simulador                         |
| R03  | Complexidade do escopo exceder o prazo              | Média         | Alto    | Restringir ao escopo básico sem extras                               |
| R04  | Valores monetários com formatação inconsistente    | Média         | Médio   | Padronizar entrada e exibição em R$                                  |

Esta matriz de riscos deverá ser revisada periodicamente ao longo do projeto, permitindo a identificação de novos riscos e a atualização das estratégias de resposta conforme o desenvolvimento avança.
