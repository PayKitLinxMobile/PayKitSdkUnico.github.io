## `TefFleetUnifiedBuilder`

Builder especializado para operações de frota unificadas para TEF.

Oferece suporte para configurações mais complexas, permitindo montar o JSONObject de forma mais segura:  

#### Configurações Básicas:

```kotlin
val builder = TefFleetUnifiedBuilder()
    .setAcquirerCode(121)              // Código da adquirente (obrigatório)
    .setOperationType(1)               // Tipo de operação
    .setWorkOrderNumber("OS123")       // Número da OS
```

#### Dados do Veículo e Motorista:

```kotlin
builder
    .setVehiclePlate("ABC1234")       // Placa
    .setDriverId("123456")            // ID do motorista
    .setCpf("12345678900")            // CPF
```

#### Métricas do Veículo:

```kotlin
builder
    .setOdometer(50000)               // Hodômetro
    .setHourMeter(1000)               // Horímetro
    .setMileage(5000)                 // Quilometragem
```

#### Configurações BR Premmia:

```kotlin
builder
    .setHasBrPremmia(true)
    .setBrPremmiaEmployeeCode("BP123")
```

#### Detalhes da Operação:

```kotlin
// Adicionar Serviço
builder.addServiceItem(
    ServiceItem(
        code = "SERV1",
        quantity = 2.0,
        unitPrice = 50.0.toBigDecimal()
    )
)

// Adicionar Abastecimento
builder.addRefuelItem(
    RefuelItem(
        code = "COMB1",
        quantity = 30.0,
        unitPrice = 5.0.toBigDecimal()
    )
)
```

#### Parâmetros Customizados:

```kotlin
builder.setParameter("chave", ParameterValue.Str("valor"))
```

#### Finalização

```kotlin
val jsonObject = builder.build()    // Gera o objeto JSON final
```

### Observações Importantes:
- O código da adquirente (`acquirerCode`) é obrigatório
- Os detalhes da operação (serviços e abastecimentos) são inicializados automaticamente
- Suporta múltiplos serviços e abastecimentos na mesma operação
- Ideal para operações complexas de frota com múltiplos itens
