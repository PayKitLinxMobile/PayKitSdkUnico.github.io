### Explicação do `CancelResult`

O objeto `CancelResult`, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:

| Campo      | Tipo     | Descrição                                                            |
|------------|----------|----------------------------------------------------------------------|
| **id**     | `String?` | Identificador único da transação.                                   |
{% include "../snippets/processor-Field.md" %}
| **status** | `Enum`   | Representa o status da transação. Valores possíveis:                 |
|            |          | - `PENDING`: Aguardando processamento.                               |
|            |          | - `APPROVED`: Transação aprovada.                                    |
|            |          | - `CANCELLED`: Transação cancelada.                                  |
|            |          | - `ERROR`: Ocorreu um erro na transação.                             |
|            |          | - `DECLINED`: Transação recusada.                                    |
| **rawData** | `Map<String, String>` |  Objeto contendo o resultado detalhado da transação da adquirente, útil para deserialização.    |
| **message** | `String` | Mensagem de sucesso ou erro, caso aplicável.                        |
| **transactionInfo** | `Object` | Representa dados de retorno transacional da adquirente. |
