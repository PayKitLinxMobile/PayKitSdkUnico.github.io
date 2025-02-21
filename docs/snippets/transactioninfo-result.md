### Explicação do `TransactionResultInfo`

No `callback` da transação, é possível capturar detalhes da transação, como detalhado a seguir.

 - `id`: Identificador único da transação (NSU).
 - `externalId`: Identificador externo da transação (Informado pela automação comercial).
 - `processor`: Tipo de processador de pagamento utilizado (STONE, TEF, REDE, GETNET, PAGSEGURO, VERO).
 - `status`: Status da transação.
 - `amount`: Valor da transação.
 - `dateTime`: Representa data e hora da transação. 