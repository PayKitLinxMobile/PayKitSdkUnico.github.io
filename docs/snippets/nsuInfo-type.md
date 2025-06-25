#### NsuInfo

O objeto `NsuInfo` contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.

| Campo           | Tipo     | Descrição                                                            |
|-----------------|----------|----------------------------------------------------------------------|
| **nsu**         | `String` | Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações. |
| **e2eId**       | `String` | Código da transação PIX. Ele é gerado apenas em transações PIX.      |
| **nsuAcquirer** | `String` | Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora. |
| **nsuLocal**    | `String` | Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU). | 