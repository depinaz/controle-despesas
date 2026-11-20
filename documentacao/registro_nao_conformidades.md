# Registro de Não Conformidades

Este documento registra as não conformidades identificadas durante o desenvolvimento e os testes do sistema **Controle de Despesas**. Cada ocorrência foi analisada, classificada por severidade e tratada com ações corretivas apropriadas, garantindo a melhoria contínua da qualidade do produto.

## Não Conformidades Identificadas

| ID   | Ocorrência                                                                                        | Severidade | Ação Corretiva                                       | Situação   |
|------|---------------------------------------------------------------------------------------------------|------------|------------------------------------------------------|------------|
| NC01 | Sistema aceita valores negativos ou zero (ex.: -100,00), distorcendo o totalizador de despesas    | Alta       | Validação implementada para aceitar somente valor > 0 | Corrigido  |
| NC02 | Dados cadastrados somem ao recarregar a página                                                    | Alta       | Leitura do LocalStorage no evento `DOMContentLoaded`  | Corrigido  |

## Campos Obrigatórios para Cada Registro Real

Toda não conformidade formalmente registrada deve conter, no mínimo, os seguintes campos:

1. **ID / Data** — Identificador único da não conformidade e data em que foi detectada.
2. **Descrição / Passos para Reprodução** — Descrição clara do problema e os passos necessários para reproduzi-lo.
3. **Evidência** — Captura de tela, log de erro ou qualquer artefato que comprove a ocorrência.
4. **Impacto / Severidade** — Classificação do impacto no sistema (Alta, Média ou Baixa) e justificativa.
5. **Causa Raiz** — Análise da causa que originou a não conformidade.
6. **Responsável / Ação Corretiva** — Nome do responsável pela correção e descrição detalhada da ação tomada.
7. **Prazo / Situação** — Data-limite para resolução e estado atual (Aberto, Em andamento ou Corrigido).
8. **Verificação** — Registro da verificação realizada após a correção, confirmando que o problema foi eliminado.
