### Detalhamento do `PrintResult`

O objeto `PrintResult`, retornado no callback da transação, contém informações essenciais sobre o status da impressão. Abaixo estão os principais campos disponíveis:

| Campo        | Tipo      | Descrição                                                            |
|--------------|-----------|----------------------------------------------------------------------|
{% include "./processor-Field.md" %}
| **dateTime** | `Date`    | Data e hora da impressão.                                            |
| **status**   | `Enum`    | Representa o status da transação. Valores possíveis:                 |
|              |           | - `NORMALLY`: Impressora funcionando normalmente.                    |
|              |           | - `WITHOUT_PAPER`: Impressora sem papel.                             |
|              |           | - `VOLTAGE_TO_LOW`: Voltagem muito baixa.                            |
|              |           | - `NO_PRINTER_DETECTED`: Nenhuma impressora detectada.               |
|              |           | - `OVERHEATED`: Impressora superaquecida.                            |
|              |           | - `CUT_JAM_ERROR`: Erro de atolamento no cortador.                   |
|              |           | - `PREPARING_PRINTER`: Preparando impressora.                        |
|              |           | - `PRINTING_UNFINISHED`: A última impressão não foi concluída.       |
|              |           | - `ABNORMAL_COMMUNICATION`: Comunicação anormal com a impressora.    |
|              |           | - `NO_PRINTER_BLACK_MARK`: Marca preta não detectada.                |
|              |           | - `CUTTER_RECOVERED`: Cortador recuperado.                           |
|              |           | - `OPEN_THE_LID`: Abra a tampa.                                      |
|              |           | - `ERROR_DATA_PACKAGE_TOO_LONG`: Pacote de dados muito longo.        |
|              |           | - `FONT_ERROR`: Biblioteca de fontes não instalada.                  |
|              |           | - `FORMAT_PRINT_ERROR`: Erro no formato do pacote de impressão.      |
|              |           | - `BUSY_PRINTER`: Impressora ocupada.                                |
|              |           | - `GENERIC_ERROR`: Algo está errado com o módulo.                    |
|              |           | - `SERVICE_UNAVAILABLE`: Serviço indisponível.                       |
|              |           | - `METHOD_UNAVAILABLE`: Método indisponível.                         |
|              |           | - `INVALID_PARAMETER`: Parâmetro inválido.                           |
|              |           | - `UNAVAILABLE_PARAMETER`: Parâmetro indisponível.                   |
|              |           | - `NO_PERMISSION`: Sem permissão para a operação.                    |
|              |           | - `DEPRECATED`: Método/parâmetro obsoleto.                           |
|              |           | - `SUCCESS`: Tarefa concluída com sucesso.                           |
| **message**  | `String`  | Mensagem de sucesso ou erro, caso aplicável.                         |
| **success**  | `Boolean` | Representa data e hora da transação.                                 |
| **rawData**  | `Map<String, String>` | Retorno estilo chave/valor recebido do provedor.         |
|              |                       | OBS: Os dados desse campo mudam de acordo com o provedor e o tipo de transação. |
