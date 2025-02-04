# DevCenter SDK Único

Repositório da documentação do SDK Único.

## Dependências Necessárias para Desenvolvimento.

- `python3`
- `pip (latest)`
- `venv (latest)`

## Como iniciar o desenvolvimento?

- Instalar dependências

    1. [Instalar o Python](https://www.python.org/)

    2. Instalar Virtual Environment

    ```bash
    python3 -m pip install --upgrade pip
    python3 -m pip install virtualenv
    ```

- Iniciar o Virtual Environment:

    Linux/MacOS

    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

    Windows

    ```ps
    python -m venv .venv
    .venv\Scripts\Activate
    ```

- Instalar dependências de projeto no Virtual Environment:

    ```bash
    pip install -r requirements.txt
    ```

- Iniciar o Mkdocs Server:

    ```bash
    mkdocs serve
    ```
