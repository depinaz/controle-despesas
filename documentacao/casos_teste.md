# Plano e Resultados dos Casos de Teste

| ID | Cenário / dados | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|
| CT01 | Cadastrar "Almoço", R$ 35,00, Alimentação e uma data válida | Registro salvo e total atualizado | Registro salvo e total atualizado | Aprovado |
| CT02 | Salvar com o valor em branco | Campo bloqueado e mensagem exibida | Bloqueado e mensagem exibida | Aprovado |
| CT03 | Editar uma despesa de R$ 50,00 para R$ 80,00 | Dados e total são recalculados | Dados e total recalculados | Aprovado |
| CT04 | Excluir uma despesa e confirmar | Registro removido e total recalculado | Item removido e total recalculado | Aprovado |
| CT05 | Regressão: cadastrar valor negativo após correção | Valor rejeitado e positiva aceito normalmente | Validação rejeitou negativo e aceitou positivo | Aprovado |

Evidências devem ser registradas por captura de tela durante a apresentação.
