# Configuração do SDK

## Primeiros passos

<!-- A solicitação do `Token de Acesso` deve ser realizada a partir [deste formulário](https://forms.office.com/r/N2JFqQ9KdR). -->
Para iniciar a configuração do SDK único, o seu projeto precisa incluir as bibliotecas do SDK Único.
A solicitação do `Token de Acesso` e credenciamento devem ser realizados a partir do formulário abaixo:

<iframe width="840px" height="780px" src="https://forms.office.com/r/N2JFqQ9KdR?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

## Passo 1 - Configurar o projeto

Adicione esta seção ao seu arquivo `settings.gradle.kts` nos blocos `repositories`.


```kotlin
maven{
    name="SDK_UNICO"
    url= uri("https://pkgs.dev.azure.com/stndtef/SmartPOS/_packaging/SDK_UNICO/maven/v1")
    credentials{
        username = stndtef
        password = {PERSONAL_ACCESS_TOKEN}
    }
}
```

Adicione a flavor da adquirente ao `build.gradle.kts`, no bloco `android` para seleção da adquirente no SDK Único.

```kotlin
val flavors = setOf(
    "stone" to 22,
    "linxtef" to 22,
    "pagseguro" to 23,
    "vero" to 22,
    "getnet" to 22,
    "rede" to 22,
    "cielo" to 24,
    "adyen" to 28,
    "sicoob" to 22,
    "sicoobX990DX" to 24,
)

android {
    ...
    flavorDimensions += "providers"
    productFlavors {
        flavors.forEach{
            create(it.first) {
                minSdk = it.second
            }
        }
    }
}
```

!!! Atenção 

    Para aproveitar a resolução dinâmica do Gradle, é necessário configurar as flavors para cada SDK de adquirente.<br>
    Com o uso de flavors, cada build suporta apenas um único SDK de adquirente, tornando inviável a inclusão de múltiplos SDKs em uma mesma compilação.<br>
    Se essa abordagem representar um problema para sua integração, consulte a seção [Standalone SDK Único](#standalone-sdk-unico) para alternativas.

!!! Atenção 

    Atenção ao `minSdk` demonstrado acima, para evitar problemas de compatibilidades entre as dependências internas.

## Passo 2 - Configurar o build.gradle da app

Adicionar as seguintes dependências necessárias

```kotlin
val sdkPayServicesVersion = "0.0.000169"

implementation("SDKPayServices:core:$sdkPayServicesVersion")
implementation("SDKPayServices:config:$sdkPayServicesVersion")
implementation("SDKPayServices:common:$sdkPayServicesVersion")
```

## Passo 3 - Verificar as permissões necessárias

Adicione as seguintes permissões ao seu arquivo `AndroidManifest.xml`:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.seuapp">

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_OWNER_DATA"/>
    <uses-permission android:name="android.permission.READ_OWNER_DATA"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    ...
</manifest>
```

# Standalone SDK Único

Em alguns cenários, o integrador não pode utilizar flavors ou deseja acessar as bibliotecas do SDK Único de maneira mais específica.

Para esses casos, o SDK Único oferece suporte à referência direta da biblioteca do SDK Único da Adquirente.

Ao utilizar as bibliotecas standalone, não é necessário definir flavors, permitindo que o integrador configure suas próprias flavors e parametrizações livremente.

## Referências de bibliotecas

```kotlin
val sdkPayServicesVersion = "0.0.000168"
val adquirente = "stone"

implementation("SDKPayServices:core-$adquirente:$sdkPayServicesVersion")
implementation("SDKPayServices:$adquirente:$sdkPayServicesVersion")
implementation("SDKPayServices:config:$sdkPayServicesVersion")
implementation("SDKPayServices:common:$sdkPayServicesVersion")
```

## Lista de dependências

| Adquirente | Biblioteca Core SDK Único | Biblioteca Adquirente SDK Único |
|------------|-----------------|-----------------------|
| Stone      | `SDKPayServices:core-stone:$version` | `SDKPayServices:stone:$version`
| LinxTEF    | `SDKPayServices:core-linxtef:$version` | `SDKPayServices:tef:$version`
| Adyen    | `SDKPayServices:core-adyen:$version` | `SDKPayServices:tef:$version`
| Cielo    | `SDKPayServices:core-cielo:$version` | `SDKPayServices:cielo:$version`
| Getnet    | `SDKPayServices:core-getnet:$version` | `SDKPayServices:getnet:$version`
| PagSeguro | `SDKPayServices:core-pagseguro:$version` | `SDKPayServices:pagseguro:$version`
| Rede    | `SDKPayServices:core-rede:$version` | `SDKPayServices:rede:$version`
| Sicoob (P2)   | `SDKPayServices:core-sicoob:$version` | `SDKPayServices:sicoob:$version`
| Sicoob (X990/DX8000)    | `SDKPayServices:core-sicoobx990DX:$version` | `SDKPayServices:sicoobX990DX:$version`
| Vero    | `SDKPayServices:core-vero:$version` | `SDKPayServices:vero:$version`
