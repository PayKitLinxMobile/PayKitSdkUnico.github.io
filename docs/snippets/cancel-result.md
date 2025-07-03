### Detalhamento do `CancelResult`

O objeto `CancelResult`, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:

| Campo      | Tipo     | Descrição                                                            |
|------------|----------|----------------------------------------------------------------------|
| **id**     | `String` | Identificador único da transação.                                   |
| **externalId** | `String` | Identificador externo para a transação.                          |
{% include "../snippets/processor-Field.md" %}
{% include "../snippets/status-Field.md" %}
| **amount** | `BigDecimal`   | Representa o valor da transação original.                                    |
| **originalId** | `String`    | Identificador da transação original.                                    |
| **cancelledAmount** | `BigDecimal`   | Representa o valor da transação de cancelamento.                   |
| **message** | `String` | Mensagem de sucesso ou erro, caso aplicável.                        |
| **dateTime** | `Date` | Representa data e hora da transação. |
| **nsuInfo** | `NsuInfo` | Representa dados de NSU do retorno transacional da adquirente. |
| **transactionInfo** | `TransactionInfo` | Representa dados de retorno transacional da adquirente. |
| **rawData**  | `Map<String, String>` | Retorno estilo chave/valor recebido do provedor. |
|              |                       | OBS: Os dados desse campo mudam de acordo com o provedor e o tipo de transação. |

{% include "./nsuInfo-type.md" %}

{% include "./transactionInfo-type.md" %}