# Plano de Gestão da Qualidade - Controle de Despesas

## Objetivo e escopo
O Sistema de Controle de Despesas Pessoais (SCD) permite cadastrar, listar, filtrar, editar, excluir e totalizar despesas. Não inclui conciliação bancária, relatórios exportáveis, contas de usuários ou integração financeira.

## Requisitos prioritários
- RF01: cadastrar descrição, valor, categoria e data.
- RF02: listar lançamentos.
- RF03: calcular o total automático.
- RF04: filtrar por descrição ou categoria.
- RF05: editar despesa.
- RF06: excluir com confirmação.
- RNF01: interface responsiva.
- RNF02: bloquear campos vazios e valores menores ou iguais a zero.
- RNF03: persistir dados em LocalStorage.
- RNF04: apresentar mensagens claras.
- RNF05: funcionar nos navegadores modernos.

## Critérios de aceitação
| Critério | Condição |
|---|---|
| Completude funcional | Cadastro, listagem, filtro, total, edição e exclusão sem erros |
| Validação | Campos vazios e valores negativos ou nulos são rejeitados |
| Integridade | Total é recalculado após todas as operações |
| Persistência | Dados permanecem após F5 |
| Usabilidade | Navegação simples, mensagens visíveis e confirmação antes da exclusão |

## Garantia e controle
- Planejamento: revisar requisitos e critérios antes da implementação.
- Desenvolvimento: revisar HTML, CSS e JavaScript e padronizar categorias.
- Pré-entrega: executar checklist e cinco casos de teste.
- Controle: registrar evidências, severidades, correções e testes de regressão.

## Responsabilidades sugeridas
| Papel | Responsabilidade |
|---|---|
| Líder | Escopo, cronograma e integração |
| Analista de requisitos | RF/RNF e critérios |
| Desenvolvedor frontend | Interface, validações e LocalStorage |
| Analista de qualidade | Checklist e execução dos testes |
| Analista de métricas | Riscos, NCs e PDCA |
