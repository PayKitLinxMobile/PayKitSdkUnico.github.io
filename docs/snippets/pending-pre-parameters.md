#### `PendingPreParameters`

O objeto `PendingPreParameters`, utilizado em transações de captura ou cancelamento de pré-autorização.

| Campo                     | Tipo          | Descrição                                                                                    |
|---------------------------|---------------|----------------------------------------------------------------------------------------------|
| **preId**                 | `String`      | Identificador da transação que será capturada ou cancelada.                                  |
| **amount**                | `BigDecimal?` | O valor que será capturado na transação. Este campo é opcional.                              |
| **externalId**            | `String?`     | Identificador externo para a transação, se necessário. Este campo é opcional.                |
| **autoPrintReceipt**      | `Boolean`     | Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.  |
| **printMerchantReceipt**  | `Boolean`     | Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.         |
| **autoConfirm**           | `Boolean?`    | Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF. |



