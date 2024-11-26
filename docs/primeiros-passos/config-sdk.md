# Configuração do SDK

## Primeiros passos

Para iniciar a configuração do SDK único, o seu projeto precisa incluir as bibliotecas do SDK Único.
A solicitação do `Token de Acesso` deve ser realizada a partir [deste formulário](https://forms.office.com/r/ThvGGXDuq4).


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
flavorDimensions += "providers"
productFlavors {
    create("linxtef")
    create("adyen") {
        minSdk = 28
        targetSdk = 34
    }
    create("stone") {
        minSdk = 22
        targetSdk = 34
    }
    create("pagseguro") {
        minSdk = 23
    }
    create("cielo") {
        minSdk = 24
        targetSdk = 29
    }
    create("rede")
    create("getnet") {
        minSdk = 22
    }
    create("vero"){
        minSdk = 22
    }
}
```

!!! Atenção 

    Faz-se necessário, para cada SDK de adquirente, configurar os flavors. Sendo de utilização excludente utilizar dois SDKs simultaneamente.

!!! Atenção 

    Atenção ao `minSdk` e `targetSdk` demonstrado acima, para evitar problemas de compatibilidades entre as dependências internas.

## Passo 2 - Configurar o build.gradle da app

Adicionar as seguintes dependências necessárias

```kotlin
val sdkPayServicesVersion = "0.1.3.15529"

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
