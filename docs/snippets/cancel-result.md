### Explicação do `CancelResult`

No `callback` da transação, é possível capturar detalhes da adquirente, como detalhado a seguir.

 - `id`: Identificador único da transação (NSU).
 - `processor`: Tipo de processador de pagamento utilizado (STONE, TEF, REDE, GETNET, PAGSEGURO, VERO).
 - `status`: Status da transação.
 - `message`: Mensagem de sucesso ou erro, se houver.
 - `transactionData`: Objeto contendo o resultado detalhado da transação da adquirente, útil para deserialização.
