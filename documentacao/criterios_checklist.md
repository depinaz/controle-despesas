# Critérios e Checklist de Qualidade

> **Instruções de preenchimento:** para cada critério, marque o resultado como **Atende**, **Não atende** ou **Não aplicável (N/A)**.

---

## Checklist de Verificação

| ID   | Critério                                  | Como verificar                                                        | Evidência a registrar                     | Resultado |
|------|-------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------|-----------|
| Q01  | Campos obrigatórios validados             | Tentar salvar sem descrição, valor, categoria ou data                 | Captura da mensagem e resultado           | ☐         |
| Q02  | Valores monetários validados              | Testar valor zero, negativo e texto                                   | Valores testados e retorno                | ☐         |
| Q03  | Cálculo do totalizador correto            | Cadastrar despesas e comparar soma                                    | Capturas com valores e total              | ☐         |
| Q04  | Operações principais disponíveis          | Cadastrar, editar, consultar e excluir                                | Capturas das operações                    | ☐         |
| Q05  | Exclusão exige confirmação                | Cancelar e confirmar exclusão                                         | Resultado em cada situação                | ☐         |
| Q06  | Persistência funciona                     | Cadastrar e atualizar o navegador                                     | Registro após atualização                 | ☐         |
| Q07  | Mensagens são claras                      | Provocar sucesso e erro                                               | Capturas das mensagens                    | ☐         |
| Q08  | Interface consistente                     | Revisar rótulos, botões e navegação                                   | Checklist de inspeção                     | ☐         |
| Q09  | Filtro por categoria/descrição funciona   | Testar busca com diferentes termos                                    | Capturas dos resultados                   | ☐         |

---

## Indicador de Qualidade

$$
\text{Índice de Conformidade (\%)} = \frac{\text{Critérios Atendidos}}{\text{Total de Critérios Aplicáveis}} \times 100
$$

- **Critérios Atendidos:** quantidade de itens marcados como "Atende".
- **Total de Critérios Aplicáveis:** quantidade total de itens, excluindo os marcados como "N/A".
