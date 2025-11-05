import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight, UserPlus, BookOpen, Code, Rocket, Package, CreditCard, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import visaoSolucao from "@/assets/visao-solucao.png";
import sunmiP2 from "@/assets/terminals/Model_Sunmi_P2.png";
import ingenicoA8 from "@/assets/terminals/Model_Ingenico_APOS_A8.webp";
import gertecGpos780 from "@/assets/terminals/Model_Gertec_GPOS_780.png";
import gertecGpos760 from "@/assets/terminals/Model_Gertec_GPOS_760.png";
import ingenicoDx8000 from "@/assets/terminals/Model_Ingenico_DX_8000.png";
import ingenicoDx4000 from "@/assets/terminals/Model_Ingenico_DX_4000.png";
import positivoL400 from "@/assets/terminals/Model_Positivo_L400.png";
import adyenS1f2 from "@/assets/terminals/Model_Adyen_S1F2.png";
import gertecMobiPin10 from "@/assets/terminals/Model_Gertec_MOBI_PIN10.png";
import gertecMp15 from "@/assets/terminals/Model_Gertec_MP15.png";
import ingenicoIcmp from "@/assets/terminals/Model_Ingenico_ICMP.png";
import paxD180 from "@/assets/terminals/Model_Pax_D180.png";
import paxD200 from "@/assets/terminals/Model_Pax_D200.png";
import newlandMe30s from "@/assets/terminals/Model_Newland_ME30S.webp";
import gertecPpc920 from "@/assets/terminals/Model_Gertec_PPC920.webp";
import gertecPpc930 from "@/assets/terminals/Model_Gertec_PPC930.png";
import gertecPpc940 from "@/assets/terminals/Model_Gertec_PPC940.png";
import ingenicoL300 from "@/assets/terminals/Model_Ingenico_L-300.png";
import ingenicoL3600 from "@/assets/terminals/Model_Ingenico_L-3600.png";
import paxD140 from "@/assets/terminals/Model_Pax_D140.png";
import sunmiD2 from "@/assets/terminals/Model_Sunmi_D2.webp";
import sunmiD2Mini from "@/assets/terminals/Model_Sunmi_D2_Mini.png";
import sunmiK2 from "@/assets/terminals/Model_Sunmi_K2.png";
import sunmiK2Mini from "@/assets/terminals/Model_Sunmi_K2_Mini.webp";
import sunmiT2 from "@/assets/terminals/Model_Sunmi_T2.png";
import sunmiT2Mini from "@/assets/terminals/Model_Sunmi_T2_Mini.png";
import gertecGs300 from "@/assets/terminals/Model_Gertec_GS300.png";
import gertecSk210 from "@/assets/terminals/Model_Gertec_SK210.png";
import elginMk15 from "@/assets/terminals/Model_Elgin_MK15.png";
import elginM10Pro from "@/assets/terminals/Model_Elgin_M10-PRO.png";

const DevCenter = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <h1 className="text-xl font-bold gradient-text">Documentação SDK Único</h1>
          </div>
          <Button variant="outline" asChild>
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:sticky lg:translate-x-0 top-[73px] left-0 h-[calc(100vh-73px)] w-64 border-r bg-card/30 backdrop-blur-sm transition-transform z-40`}
        >
          <ScrollArea className="h-full">
            <nav className="p-4 space-y-2">
              <a
                href="#cadastre-se"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <UserPlus className="h-4 w-4 text-primary" />
                <span className="font-medium">Cadastre-se</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#primeiros-passos"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="font-medium">Primeiros Passos</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#apis"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Code className="h-4 w-4 text-primary" />
                <span className="font-medium">APIs</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#primeira-integracao"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Rocket className="h-4 w-4 text-primary" />
                <span className="font-medium">Desenvolvimento Primeira Integração</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#projeto-exemplo"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Package className="h-4 w-4 text-primary" />
                <span className="font-medium">Projeto de Exemplo</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#transacoes"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="font-medium">Transações</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#deeplink"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Link2 className="h-4 w-4 text-primary" />
                <span className="font-medium">DeepLink</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#novidades"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-medium">O que há de novo?</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#terminais-homologados"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-smooth group"
              >
                <Package className="h-4 w-4 text-primary" />
                <span className="font-medium">Terminais homologados</span>
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-12 max-w-5xl">
          {/* Cadastre-se */}
          <section id="cadastre-se" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Cadastre-se</h2>
            <div className="card p-8 shadow-card">
              <p className="text-lg text-muted-foreground mb-6">
                Para iniciar a configuração do SDK único, o seu projeto precisa incluir as bibliotecas do SDK Único.
                A solicitação do Token de Acesso e credenciamento devem ser realizados a partir do formulário abaixo:
              </p>
              
              <div className="bg-accent/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Paykit - SDK Único</h3>
                <p className="text-muted-foreground mb-4">
                  Bem-vindo ao Portal de solicitação de Tokens do Projeto SDK Único. Para a sua segurança, todas as informações preenchidas serão analisadas pelo time do Paykit, avaliando critérios de eligibilidade de utilização do SDK Único em sua aplicação.
                </p>
                
                <div className="bg-card p-4 rounded border-l-4 border-primary mb-6">
                  <h4 className="font-semibold mb-2">Consentimento para Tratamento de Dados Pessoais</h4>
                  <p className="text-sm text-muted-foreground">
                    De acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018), informamos que os dados coletados neste formulário, incluindo <strong>nome, e-mail e CNPJ</strong>, serão utilizados exclusivamente para fins de identificação e processamento relacionados à automação comercial.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ao preencher este formulário, você <strong>autoriza expressamente</strong> o tratamento dos seus dados para os fins descritos, garantindo que serão armazenados com segurança e não serão compartilhados com terceiros sem sua autorização, exceto quando exigido por lei.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Você pode, a qualquer momento, solicitar a correção, atualização ou exclusão dos seus dados, conforme previsto na LGPD. Para mais informações, entre em contato pelo e-mail <a href="mailto:sdkunico@linx.com.br" className="text-primary hover:underline">sdkunico@linx.com.br</a>.
                  </p>
                </div>

                <Button asChild className="w-full">
                  <a href="https://forms.office.com/pages/responsepage.aspx?id=ZYWPxbR6D0SE8t1183Raac7FFmn3u6RIiFcj_TddFqRURVVUNDNGSERXSFZYWDY0R01SWkdaOTc5Ty4u&embed=true&route=shorturl" target="_blank" rel="noopener noreferrer">
                    Acessar Formulário de Cadastro
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Primeiros Passos */}
          <section id="primeiros-passos" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Primeiros Passos</h2>
            
            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Passo 1 - Configurar o projeto</h3>
              <p className="text-muted-foreground mb-4">
                Adicione esta seção ao seu arquivo <code className="bg-accent px-2 py-1 rounded">settings.gradle.kts</code> nos blocos <code className="bg-accent px-2 py-1 rounded">repositories</code>.
              </p>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`maven{
    name="SDK_UNICO"
    url= uri("https://pkgs.dev.azure.com/stndtef/SmartPOS/_packaging/SDK_UNICO/maven/v1")
    credentials{
        username = stndtef
        password = {PERSONAL_ACCESS_TOKEN}
    }
}`}</code>
              </pre>
              
              <p className="text-muted-foreground mb-4">
                Adicione a flavor da adquirente ao <code className="bg-accent px-2 py-1 rounded">build.gradle.kts</code>, no bloco <code className="bg-accent px-2 py-1 rounded">android</code> para seleção da adquirente no SDK Único.
              </p>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
                <code>{`val flavors = setOf(
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
}`}</code>
              </pre>
              
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mt-4 mb-4">
                <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                <p className="text-sm text-muted-foreground">
                  Para aproveitar a resolução dinâmica do Gradle, é necessário configurar as flavors para cada SDK de adquirente.
                  Com o uso de flavors, cada build suporta apenas um único SDK de adquirente, tornando inviável a inclusão de múltiplos SDKs em uma mesma compilação.
                  Se essa abordagem representar um problema para sua integração, consulte a seção Standalone SDK Único para alternativas.
                </p>
              </div>

              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mt-4">
                <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                <p className="text-sm text-muted-foreground">
                  Atenção ao minSdk demonstrado acima, para evitar problemas de compatibilidades entre as dependências internas.
                </p>
              </div>
            </div>

            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Passo 2 - Configurar o build.gradle da app</h3>
              <p className="text-muted-foreground mb-4">
                Adicionar as seguintes dependências necessárias:
              </p>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
                <code>{`val sdkPayServicesVersion = "0.0.000169"

implementation("SDKPayServices:core:$sdkPayServicesVersion")
implementation("SDKPayServices:config:$sdkPayServicesVersion")
implementation("SDKPayServices:common:$sdkPayServicesVersion")`}</code>
              </pre>
            </div>

            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Passo 3 - Verificar as permissões necessárias</h3>
              <p className="text-muted-foreground mb-4">
                Adicione as seguintes permissões ao seu arquivo <code className="bg-accent px-2 py-1 rounded">AndroidManifest.xml</code>:
              </p>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
                <code>{`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
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
</manifest>`}</code>
              </pre>
            </div>

            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Standalone SDK Único¶</h3>
              <p className="text-muted-foreground mb-4">
                Em alguns cenários, o integrador não pode utilizar flavors ou deseja acessar as bibliotecas do SDK Único de maneira mais específica.
              </p>
              <p className="text-muted-foreground mb-4">
                Para esses casos, o SDK Único oferece suporte à referência direta da biblioteca do SDK Único da Adquirente.
              </p>
              <p className="text-muted-foreground mb-4">
                Ao utilizar as bibliotecas standalone, não é necessário definir flavors, permitindo que o integrador configure suas próprias flavors e parametrizações livremente.
              </p>
              
              <h4 className="text-xl font-bold mb-3 mt-6">Referências de bibliotecas</h4>
              <pre className="bg-accent p-4 rounded-lg overflow-x-auto mb-6">
                <code>{`val sdkPayServicesVersion = "1.0.1.18662"
val adquirente = "stone"

implementation("SDKPayServices:core-$adquirente:$sdkPayServicesVersion")
implementation("SDKPayServices:$adquirente:$sdkPayServicesVersion")
implementation("SDKPayServices:config:$sdkPayServicesVersion")
implementation("SDKPayServices:common:$sdkPayServicesVersion")`}</code>
              </pre>

              <h4 className="text-xl font-bold mb-3">Lista de dependências</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Adquirente</th>
                      <th className="text-left p-3 font-semibold">Biblioteca Core SDK Único</th>
                      <th className="text-left p-3 font-semibold">Biblioteca Adquirente SDK Único</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Stone", core: "SDKPayServices:core-stone:$version", lib: "SDKPayServices:stone:$version" },
                      { name: "LinxTEF", core: "SDKPayServices:core-linxtef:$version", lib: "SDKPayServices:tef:$version" },
                      { name: "Adyen", core: "SDKPayServices:core-adyen:$version", lib: "SDKPayServices:tef:$version" },
                      { name: "Cielo", core: "SDKPayServices:core-cielo:$version", lib: "SDKPayServices:cielo:$version" },
                      { name: "Getnet", core: "SDKPayServices:core-getnet:$version", lib: "SDKPayServices:getnet:$version" },
                      { name: "PagSeguro", core: "SDKPayServices:core-pagseguro:$version", lib: "SDKPayServices:pagseguro:$version" },
                      { name: "Rede", core: "SDKPayServices:core-rede:$version", lib: "SDKPayServices:rede:$version" },
                      { name: "Sicoob (P2)", core: "SDKPayServices:core-sicoob:$version", lib: "SDKPayServices:sicoob:$version" },
                      { name: "Sicoob (X990/DX8000)", core: "SDKPayServices:core-sicoobx990DX:$version", lib: "SDKPayServices:sicoobX990DX:$version" },
                      { name: "SiTef", core: "SDKPayServices:core-sitef:$version", lib: "SDKPayServices:sitef:$version" },
                      { name: "Vero", core: "SDKPayServices:core-vero:$version", lib: "SDKPayServices:vero:$version" },
                    ].map((row) => (
                      <tr key={row.name} className="border-b hover:bg-accent/50 transition-smooth">
                        <td className="p-3 font-medium">{row.name}</td>
                        <td className="p-3"><code className="text-sm">{row.core}</code></td>
                        <td className="p-3"><code className="text-sm">{row.lib}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* APIs */}
          <section id="apis" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">APIs</h2>
            <div className="card p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Interface Paykit</h3>
              <p className="text-muted-foreground mb-6">
                A interface <code className="bg-accent px-2 py-1 rounded">Paykit</code> define os métodos que cada adquirente deve implementar para realizar transações de pagamento.
              </p>
              
              <h4 className="text-xl font-bold mb-4">Métodos</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Método</th>
                      <th className="text-left p-3 font-semibold">Descrição</th>
                      <th className="text-left p-3 font-semibold">Parâmetros</th>
                      <th className="text-left p-3 font-semibold">Retorno</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: "activate", desc: "Ativa o SDK com os parâmetros fornecidos. Executar apenas 1 (uma) vez ou quando o terminal é realocado para outra loja.", params: "activationParameters", return: "ActivationResult" },
                      { method: "credit", desc: "Realiza uma transação de crédito.", params: "creditParameters", return: "PaymentResult" },
                      { method: "debit", desc: "Realiza uma transação de débito.", params: "debitParameters", return: "PaymentResult" },
                      { method: "voucher", desc: "Processa um pagamento por meio de voucher.", params: "voucherParameters", return: "PaymentResult" },
                      { method: "pix", desc: "Processa um pagamento via PIX.", params: "paymentParameters", return: "PaymentResult" },
                      { method: "wallet", desc: "Processa um pagamento utilizando carteira digital.", params: "paymentParameters", return: "PaymentResult" },
                      { method: "cancel", desc: "Cancela uma transação.", params: "cancelParameter", return: "CancelResult" },
                      { method: "preAuthorize", desc: "Realiza uma transação de pré-autorização.", params: "creditParameters", return: "PaymentResult" },
                      { method: "capturePreAuthorization*", desc: "Captura o valor de uma pré-autorização.", params: "pendingPreParameters", return: "PaymentResult" },
                      { method: "cancelPreAuthorization*", desc: "Cancela uma transação de pré-autorização.", params: "pendingPreParameters", return: "CancelResult" },
                      { method: "printLastReceipt", desc: "Imprime o último recibo.", params: "receiptType", return: "PrintResult" },
                      { method: "print", desc: "Imprime uma imagem bitmap.", params: "bitmap", return: "PrintResult" },
                      { method: "retrieveSdkInfo", desc: "Recupera informações sobre o SDK.", params: "-", return: "Map<String, String>" },
                      { method: "startPayment", desc: "Executa o fluxo genérico de pagamentos do SDK.", params: "paymentParameters", return: "PaymentResult" },
                      { method: "getTransaction", desc: "Recupera informações de uma transação.", params: "transactionParameters", return: "PaymentResult" },
                    ].map((row) => (
                      <tr key={row.method} className="border-b hover:bg-accent/50 transition-smooth">
                        <td className="p-3"><code className="text-primary font-semibold">{row.method}</code></td>
                        <td className="p-3 text-sm">{row.desc}</td>
                        <td className="p-3 text-sm"><code className="bg-accent px-2 py-1 rounded">{row.params}</code></td>
                        <td className="p-3 text-sm"><code className="bg-accent px-2 py-1 rounded">{row.return}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                *Algumas adquirentes não possuem essas operações.
              </p>
            </div>
          </section>

          {/* Primeira Integração */}
          <section id="primeira-integracao" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Desenvolvimento Primeira Integração</h2>
            
            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Passo 1 - Ativação</h3>
              <p className="text-muted-foreground mb-4">
                O SDK único, em sua definição, simplifica a integração com os SDKs das adquirentes, a partir de sua interface única.
              </p>
              <p className="text-muted-foreground mb-4">
                Certifique-se de ter as chaves para baixar as dependências, de acordo com a instrução de configuração do SDK Único. E seu <code className="bg-accent px-2 py-1 rounded">PaykitId</code> que será necessário para ativar o SDK Único.
              </p>
              
              <h4 className="text-xl font-bold mb-3 mt-6">PaykitId e Credenciamento</h4>
              <p className="text-muted-foreground mb-4">
                Para utilizar o SDK Único, é necessário ser credenciado como Automação Comercial/Integrador. Esse processo é feito ao preencher o formulário na etapa de configuração do SDK Único e mediante a aprovação.
              </p>
              
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                <p className="text-sm text-muted-foreground">
                  Realize a operação de ativação apenas 1 (uma) vez no terminal ou quando ele for realocado para outra loja.
                </p>
              </div>

              <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
                <code>{`import android.util.Log
import com.linx.paykit.common.Callback
import com.linx.paykit.common.activation.ActivationParameters
import com.linx.paykit.common.activation.ActivationResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

val TAG = "SDKUnicoExample"
var paykit: Paykit? = null

fun setupPaykit() {
    val sdkUnicoBuildParams = Parameters(this, "AppTeste", PaykitId("PAYKIT_ID"))
    paykit = PaykitFactory().build(sdkUnicoBuildParams)

    //Defina os parâmetros de acordo com as adquirentes desejadas
    val params = ActivationParameters("STORE_CNPJ").apply {}

    paykit?.activate(p, object : Callback<ActivationResult> {
        override fun execute(result: ActivationResult) {
            Log.d(TAG, "SDK Ativado com sucesso")
        }
    })
}`}</code>
              </pre>
            </div>

            <div className="card p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Passo 2 - Configuração</h3>
              <p className="text-muted-foreground mb-4">
                O SDK Único permite definir quais modalidades e métodos de pagamento estarão disponíveis, facilitando a configuração por parte do integrador.
              </p>
              
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                <p className="text-sm text-muted-foreground">
                  Realize a operação de configuração sempre que sua aplicação é inicializada.
                </p>
              </div>

              <p className="text-muted-foreground mb-4">
                A configuração dos métodos de pagamento pode variar por adquirente. Segue abaixo definição e exemplos:
              </p>

              <pre className="bg-accent p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`interface Paykit {
    //...
    val paymentMethods: HashMap<PaymentType, PaymentMethod>
}

enum class PaymentType {
    CREDIT,
    DEBIT,
    VOUCHER,
    PIX,
    WALLET,
    FLEET,
    QR_CODE
}

data class PaymentMethod(
    //...
    var enabled: Boolean,
    val methodTypes: HashMap<TransactionType, MethodType>? = null
)`}</code>
              </pre>

              <p className="text-muted-foreground mb-4">
                Para desativar uma modalidade ou método de pagamento, basta alterar a <code className="bg-accent px-2 py-1 rounded">flag</code> de <code className="bg-accent px-2 py-1 rounded">enabled</code> para <code className="bg-accent px-2 py-1 rounded">false</code>:
              </p>

              <pre className="bg-accent p-4 rounded-lg overflow-x-auto">
                <code>{`paykit.paymentMethods[PaymentType.CREDIT]?.enabled = false`}</code>
              </pre>
            </div>
          </section>

          {/* Projeto de Exemplo */}
          <section id="projeto-exemplo" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Projeto de Exemplo</h2>
            <div className="card p-8 shadow-card">
              <p className="text-lg text-muted-foreground mb-6">
                Para realizar testes com o SDK Único, é preciso selecionar com qual SDK deseja realizar a transação.
                Para tal, disponibilizamos uma App de Exemplo com flavors, definindo qual adquirente desejada.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">SDK</th>
                      <th className="text-left p-3 font-semibold">Versão SDK Único</th>
                      <th className="text-left p-3 font-semibold">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">Aplicativo Demo</td>
                      <td className="p-3">1.1.1</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://paykitlinxmobile.github.io/PayKitSdkUnico.github.io/assets/demo/SDKPayServicesDemoApp.zip" target="_blank" rel="noopener noreferrer">
                            Download
                          </a>
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">Aplicativo Demo</td>
                      <td className="p-3">1.1.2</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://paykitlinxmobile.github.io/PayKitSdkUnico.github.io/assets/demo/SDKPayServicesDemoApp_1.1.2.zip" target="_blank" rel="noopener noreferrer">
                            Download
                          </a>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Transações */}
          <section id="transacoes" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Transações</h2>
            
            <Tabs defaultValue="credito" className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-6 gap-2 mb-6">
                <TabsTrigger value="credito">Crédito</TabsTrigger>
                <TabsTrigger value="preautorizacao">Pré-autorização</TabsTrigger>
                <TabsTrigger value="debito">Débito</TabsTrigger>
                <TabsTrigger value="voucher">Voucher</TabsTrigger>
                <TabsTrigger value="pix">Pix</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
              </TabsList>
              
              <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2 mb-6">
                <TabsTrigger value="frota">Frota</TabsTrigger>
                <TabsTrigger value="cancelamento">Cancelamento</TabsTrigger>
                <TabsTrigger value="reimpressao">Reimpressão</TabsTrigger>
                <TabsTrigger value="impressao">Impressão</TabsTrigger>
                <TabsTrigger value="localizar">Localizar</TabsTrigger>
              </TabsList>

              {/* Crédito */}
              <TabsContent value="credito" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Crédito</h3>
                  
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada.
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Para realizar uma Transação de <strong>Crédito</strong>, utilize o método <code className="bg-accent px-2 py-1 rounded">credit</code> da classe <code className="bg-accent px-2 py-1 rounded">paykit</code>.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Os parâmetros de entrada da transação são configurados no objeto CreditParameters
                  </p>

                  <h4 className="text-xl font-bold mb-3">CreditParameters¶</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto CreditParameters, utilizado em transações de crédito.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">O valor total da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">Int?</td><td className="p-2">O número de parcelas para pagamento.</td></tr>
                        <tr className="border-b"><td className="p-2">cpf</td><td className="p-2">String?</td><td className="p-2">CPF do cliente, se aplicável. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">billOfSale</td><td className="p-2">String?</td><td className="p-2">Documento de venda associado à transação. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTimeOfSale</td><td className="p-2">Date?</td><td className="p-2">Data e hora em que a venda foi realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String?</td><td className="p-2">Identificador externo para a transação, se necessário. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">items</td><td className="p-2">List&lt;OrderItem&gt;?</td><td className="p-2">Lista dos items de venda, relacionados a transação a ser realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">autoPrintReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.</td></tr>
                        <tr className="border-b"><td className="p-2">printMerchantReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.</td></tr>
                        <tr className="border-b"><td className="p-2">deadline</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">postCreditDays</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">creditType</td><td className="p-2">CreditTransactionType?</td><td className="p-2">Tipo de transação de crédito.</td></tr>
                        <tr className="border-b"><td className="p-2">autoConfirm</td><td className="p-2">Boolean?</td><td className="p-2">Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                    <p className="flex items-start gap-2">
                      <span className="text-yellow-500 font-bold">⚠️</span>
                      <span className="text-muted-foreground">
                        <strong>Atenção:</strong> Existem diversas modalidades de crédito, sendo as mais conhecidas, a vista, parcelada pelo lojista e parcelada pelo estabelecimento. A tabela a seguir mostra todas as opções disponíveis.
                      </span>
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3">CreditTransactionType¶</h4>
                  <p className="text-muted-foreground mb-4">
                    Para o creditType é utilizado um enum para identificação da Modalidade de Crédito.
                  </p>
                  
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`/**
 * Enum representando os tipos de transação de Crédito.
 * Correspondência DE-PARA (Português -> Inglês):
 * - CREDITO_AVISTA | TRANSACAO_CREDITO_VISTA -> AT_SIGHT
 * - CREDITO_PARCELADO_LOJA | TRANSACAO_CREDITO_PARCELADO_LOJISTA -> STORE_INSTALMENTS
 * - CREDITO_PARCELADO_ADM -> ADMIN_INSTALMENTS
 * - CREDITO_PARCELADO_BNCO -> BANK_INSTALMENTS
 * - PRE_AUTORIZACAO -> PRE_AUTHORIZATION
 * - CREDITO_CREDIARIO_CREDITO -> CREDIT_FINANCING
 * - TRANSACAO_CREDITO_VISTA -> CREDIT_TRANSACTION_AT_SIGHT
 * - TRANSACAO_CREDITO_PARCELADO_EMISSOR -> ISSUER_INSTALMENTS
 * - TRANSACAO_BANRICOMPRAS_CREDITO_1_MINUTO -> CREDIT_1_MINUTE
 */
enum class CreditTransactionType(
    override val hasInterest: Boolean,
    override val hasInstalments: Boolean
) : TransactionType {
    AT_SIGHT(false, false),                 // CREDITO_AVISTA
    STORE_INSTALMENTS(false, true),         // CREDITO_PARCELADO_LOJA
    ADMIN_INSTALMENTS(true, true),          // CREDITO_PARCELADO_ADM
    BANK_INSTALMENTS(true, true),           // CREDITO_PARCELADO_BNCO
    PRE_AUTHORIZATION(false, false),        // PRE_AUTORIZACAO
    FINANCING(true, false),                 // CREDITO_CREDIARIO_CREDITO
    ISSUER_INSTALMENTS(true, true),         // TRANSACAO_CREDITO_PARCELADO_EMISSOR
    CREDIT_1_MINUTE(false, false);          // TRANSACAO_BANRICOMPRAS_CREDITO_1_MINUTO
}`}</code>
                  </pre>
                  
                  <p className="text-muted-foreground mb-6">
                    Independente da modalidade, os resultados da transação serão devolvidos no objeto paymentResult
                  </p>

                  <h4 className="text-xl font-bold mb-3">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">id</td><td className="p-2">String</td><td className="p-2">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String</td><td className="p-2">Identificador externo para a transação.</td></tr>
                        <tr className="border-b"><td className="p-2">processor</td><td className="p-2">Enum</td><td className="p-2">Indica o processador da transação. Valores possíveis:<br/>- STONE<br/>- TEF<br/>- REDE<br/>- GETNET<br/>- PAGSEGURO<br/>- VERO<br/>- CIELO<br/>- SICOOB<br/>- SITEF</td></tr>
                        <tr className="border-b"><td className="p-2">status</td><td className="p-2">Enum</td><td className="p-2">Representa o status da transação. Valores possíveis:<br/>- PENDING: Aguardando processamento.<br/>- APPROVED: Transação aprovada.<br/>- CANCELLED: Transação cancelada.<br/>- PARTIALLY_CANCELLED: Transação cancelada.<br/>- ERROR: Ocorreu um erro na transação.<br/>- DECLINED: Transação recusada.</td></tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">paymentType</td><td className="p-2">Enum</td><td className="p-2">Representa o método de pagamento da transação. Valores possíveis:<br/>- CREDIT<br/>- DEBIT<br/>- VOUCHER<br/>- PIX<br/>- WALLET<br/>- FLEET<br/>- QR_CODE</td></tr>
                        <tr className="border-b"><td className="p-2">transactionType</td><td className="p-2">Interface</td><td className="p-2">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-2">transactionInfo</td><td className="p-2">TransactionInfo</td><td className="p-2">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuInfo</td><td className="p-2">NsuInfo</td><td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">rawData</td><td className="p-2">Map&lt;String, String&gt;</td><td className="p-2">Retorno estilo chave/valor recebido do provedor.<br/><strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.</td></tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">NsuInfo¶</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">nsu</td><td className="p-2">String</td><td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-2">e2eId</td><td className="p-2">String</td><td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuAcquirer</td><td className="p-2">String</td><td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuLocal</td><td className="p-2">String</td><td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">TransactionInfo¶</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">authorizationCode</td><td className="p-2">String</td><td className="p-2">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardBrand</td><td className="p-2">String</td><td className="p-2">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardNumber</td><td className="p-2">String</td><td className="p-2">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardHolder</td><td className="p-2">String</td><td className="p-2">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardLastDigits</td><td className="p-2">String</td><td className="p-2">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">bankAccount</td><td className="p-2">String</td><td className="p-2">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">String</td><td className="p-2">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">storeReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-2">customerReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3">Exemplos¶</h4>
                  
                  <h5 className="text-lg font-bold mb-3 mt-6">Exemplo de Crédito a vista¶</h5>
                  
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
                      - <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-8">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Credito à Vista", PaykitId("PAYKIT_ID")))

        val creditParameter = CreditParameters(
            installments = 1,  // Número de parcelas (1 para crédito à vista)
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
        )

        paykit.credit(creditParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(id: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <h5 className="text-lg font-bold mb-3 mt-6">Exemplo de Crédito parcelado pelo lojista¶</h5>
                  
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
                      - <strong>installments</strong>: MAIOR que 1<br/>
                      - <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Credito parcelado", PaykitId("PAYKIT_ID")))

        val creditParameter = CreditParameters(
            installments = 2,  // Número de parcelas
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.STORE_INSTALMENTS // Crédito parcelado lojista
        )

        paykit.credit(creditParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              {/* Pré-autorização */}
              <TabsContent value="preautorizacao" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Crédito - Pré-autorização</h3>
                  <p className="text-muted-foreground mb-4">
                    Para realizar uma Transação de Pré-autorização de crédito, utilize os métodos <strong>preAuthorize</strong>, <strong>capturePreAuthorization</strong> (ou <strong>credit</strong>) e <strong>cancelPreAuthorization</strong> (ou <strong>cancel</strong>) da classe paykit.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Os parâmetros de entrada da transação de pré-autorização são configurados no objeto <code className="bg-accent px-2 py-1 rounded">CreditParameters</code>
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">CreditParameters¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto CreditParameters, utilizado em transações de crédito.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">O valor total da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">Int?</td><td className="p-2">O número de parcelas para pagamento.</td></tr>
                        <tr className="border-b"><td className="p-2">cpf</td><td className="p-2">String?</td><td className="p-2">CPF do cliente, se aplicável. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">billOfSale</td><td className="p-2">String?</td><td className="p-2">Documento de venda associado à transação. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTimeOfSale</td><td className="p-2">Date?</td><td className="p-2">Data e hora em que a venda foi realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String?</td><td className="p-2">Identificador externo para a transação, se necessário. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">items</td><td className="p-2">List&lt;OrderItem&gt;?</td><td className="p-2">Lista dos items de venda, relacionados a transação a ser realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">autoPrintReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.</td></tr>
                        <tr className="border-b"><td className="p-2">printMerchantReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.</td></tr>
                        <tr className="border-b"><td className="p-2">deadline</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">postCreditDays</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">creditType</td><td className="p-2">CreditTransactionType?</td><td className="p-2">Tipo de transação de crédito.</td></tr>
                        <tr className="border-b"><td className="p-2">autoConfirm</td><td className="p-2">Boolean?</td><td className="p-2">Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Já os parâmetros de entrada da transação de captura ou cancelamento de pré-autorização são configurados no objeto <code className="bg-accent px-2 py-1 rounded">PendingPreParameters</code>
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">PendingPreParameters¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto PendingPreParameters, utilizado em transações de captura ou cancelamento de pré-autorização.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">preId</td><td className="p-2">String</td><td className="p-2">Identificador da transação que será capturada ou cancelada.</td></tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal?</td><td className="p-2">O valor que será capturado na transação. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String?</td><td className="p-2">Identificador externo para a transação, se necessário. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">autoPrintReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.</td></tr>
                        <tr className="border-b"><td className="p-2">printMerchantReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.</td></tr>
                        <tr className="border-b"><td className="p-2">autoConfirm</td><td className="p-2">Boolean?</td><td className="p-2">Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Perceba que os parâmetros são os mesmos de uma transação normal de crédito, afinal, só existe pré-autorização para a modalidade crédito. Entretanto, o preenchimento ou não de alguns parâmetros se dá pela Adquirente, pois em algumas a pré-autorização é uma transação completa e, posteriormente precisamos apenas efetuar a captura (ou confirmação) dessa pré-autorização. Já em outras adquirentes, a captura do valor ocorre em uma transação de crédito normal (método credit); nesses casos o importante na pré-autorização é apenas o valor que será reservado. Com relação ao cancelamento possumios um comportamento semelhante.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    A tabela abaixo especifica quais métodos devem ser chamados nas principais adquirentes para efetuar a captura do valor ou o cancelamento da pré-autorização:
                  </p>

                  <div className="bg-accent/30 p-4 rounded-lg mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Provedor*</th>
                            <th className="text-left p-2">Adquirente*</th>
                            <th className="text-left p-2">Método de captura*</th>
                            <th className="text-left p-2">Método de cancelamento*</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Stone</td><td className="p-2"></td><td className="p-2"></td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Rede</td><td className="p-2">capturePreAuthorization</td><td className="p-2">cancel</td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">PagSeguro</td><td className="p-2"></td><td className="p-2"></td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">GetNet</td><td className="p-2">credit</td><td className="p-2">cancel</td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Cielo</td><td className="p-2">credit</td><td className="p-2">cancel</td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Adyen</td><td className="p-2"></td><td className="p-2"></td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Vero</td><td className="p-2"></td><td className="p-2"></td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Sicoob</td><td className="p-2"></td><td className="p-2"></td></tr>
                          <tr className="border-b"><td className="p-2">TEF</td><td className="p-2">Sicredi</td><td className="p-2"></td><td className="p-2"></td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">*Matriz em construção</p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Os resultados da transação de pré-autorização ou captura de pré-autoriação serão devolvidos no objeto <code className="bg-accent px-2 py-1 rounded">PaymentResult</code>.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">id</td><td className="p-2">String</td><td className="p-2">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String</td><td className="p-2">Identificador externo para a transação.</td></tr>
                        <tr className="border-b"><td className="p-2">processor</td><td className="p-2">Enum</td><td className="p-2">Indica o processador da transação. Valores possíveis:<br/>- STONE<br/>- TEF<br/>- REDE<br/>- GETNET<br/>- PAGSEGURO<br/>- VERO<br/>- CIELO<br/>- SICOOB<br/>- SITEF</td></tr>
                        <tr className="border-b"><td className="p-2">status</td><td className="p-2">Enum</td><td className="p-2">Representa o status da transação. Valores possíveis:<br/>- PENDING: Aguardando processamento.<br/>- APPROVED: Transação aprovada.<br/>- CANCELLED: Transação cancelada.<br/>- PARTIALLY_CANCELLED: Transação cancelada.<br/>- ERROR: Ocorreu um erro na transação.<br/>- DECLINED: Transação recusada.</td></tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">paymentType</td><td className="p-2">Enum</td><td className="p-2">Representa o método de pagamento da transação. Valores possíveis:<br/>- CREDIT<br/>- DEBIT<br/>- VOUCHER<br/>- PIX<br/>- WALLET<br/>- FLEET<br/>- QR_CODE</td></tr>
                        <tr className="border-b"><td className="p-2">transactionType</td><td className="p-2">Interface</td><td className="p-2">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-2">transactionInfo</td><td className="p-2">TransactionInfo</td><td className="p-2">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuInfo</td><td className="p-2">NsuInfo</td><td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">rawData</td><td className="p-2">Map&lt;String, String&gt;</td><td className="p-2">Retorno estilo chave/valor recebido do provedor.<br/><strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3">NsuInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">nsu</td><td className="p-2">String</td><td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-2">e2eId</td><td className="p-2">String</td><td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuAcquirer</td><td className="p-2">String</td><td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuLocal</td><td className="p-2">String</td><td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3">TransactionInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">authorizationCode</td><td className="p-2">String</td><td className="p-2">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardBrand</td><td className="p-2">String</td><td className="p-2">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardNumber</td><td className="p-2">String</td><td className="p-2">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardHolder</td><td className="p-2">String</td><td className="p-2">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardLastDigits</td><td className="p-2">String</td><td className="p-2">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">bankAccount</td><td className="p-2">String</td><td className="p-2">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">String</td><td className="p-2">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">storeReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-2">customerReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Por outro lado, o resultado da transação de cancelamento de pré-autorização serão devolvidos no objeto <code className="bg-accent px-2 py-1 rounded">CancelResult</code>.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">Detalhamento do CancelResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto CancelResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">id</td><td className="p-2">String</td><td className="p-2">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String</td><td className="p-2">Identificador externo para a transação.</td></tr>
                        <tr className="border-b"><td className="p-2">processor</td><td className="p-2">Enum</td><td className="p-2">Indica o processador da transação. Valores possíveis:<br/>- STONE<br/>- TEF<br/>- REDE<br/>- GETNET<br/>- PAGSEGURO<br/>- VERO<br/>- CIELO<br/>- SICOOB<br/>- SITEF</td></tr>
                        <tr className="border-b"><td className="p-2">status</td><td className="p-2">Enum</td><td className="p-2">Representa o status da transação. Valores possíveis:<br/>- PENDING: Aguardando processamento.<br/>- APPROVED: Transação aprovada.<br/>- CANCELLED: Transação cancelada.<br/>- PARTIALLY_CANCELLED: Transação cancelada.<br/>- ERROR: Ocorreu um erro na transação.<br/>- DECLINED: Transação recusada.</td></tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação original.</td></tr>
                        <tr className="border-b"><td className="p-2">originalId</td><td className="p-2">String</td><td className="p-2">Identificador da transação original.</td></tr>
                        <tr className="border-b"><td className="p-2">cancelledAmount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação de cancelamento.</td></tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuInfo</td><td className="p-2">NsuInfo</td><td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">transactionInfo</td><td className="p-2">TransactionInfo</td><td className="p-2">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">rawData</td><td className="p-2">Map&lt;String, String&gt;</td><td className="p-2">Retorno estilo chave/valor recebido do provedor.<br/><strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3">NsuInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">nsu</td><td className="p-2">String</td><td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-2">e2eId</td><td className="p-2">String</td><td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuAcquirer</td><td className="p-2">String</td><td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuLocal</td><td className="p-2">String</td><td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3">TransactionInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">authorizationCode</td><td className="p-2">String</td><td className="p-2">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardBrand</td><td className="p-2">String</td><td className="p-2">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardNumber</td><td className="p-2">String</td><td className="p-2">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardHolder</td><td className="p-2">String</td><td className="p-2">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardLastDigits</td><td className="p-2">String</td><td className="p-2">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">bankAccount</td><td className="p-2">String</td><td className="p-2">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">String</td><td className="p-2">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">storeReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-2">customerReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplos¶</h4>
                  
                  <h5 className="text-lg font-bold mb-3">Exemplo de Pré-autorização com captura da pré-autorização¶</h5>
                  
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
                      - <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-8">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.TransactionStatus
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CreditParameters
import com.linx.paykit.common.parameter.PendingPreParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Pré-autorização com captura da pré-autorização", PaykitId("PAYKIT_ID")))

        val preParameter = CreditParameters(
            installments = 1,  // Número de parcelas (1 para crédito à vista)
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
        )

        paykit.preAuthorize(preParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPreResult(result.id, result)
            }
        })
    }

    private fun onPreResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da pré-autorização

        // ...

        // Implementada lógica de captura aqui apenas para fins educativos
        if (transaction.status == TransactionStatus.APPROVED) {
            val pendingParameter = PendingPreParameters(
                preId = transaction.id,
                amount = BigDecimal("100.00")  // Valor que será capturado
            )

            paykit.capturePre(pendingParameter, object : Callback<PaymentResult> {
                override fun execute(result: PaymentResult) {
                    Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                    onCaptureResult(result.id, result.rawData)
                }
            })
        }
    }

    private fun onCaptureResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da captura da pré-autorização
    }
}`}</code>
                  </pre>

                  <h5 className="text-lg font-bold mb-3">Exemplo de Pré-autorização com operação de crédito para captura¶</h5>
                  
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
                      - <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.TransactionStatus
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CreditParameters
import com.linx.paykit.common.parameter.PendingPreParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Pré-autorização com captura da pré-autorização", PaykitId("PAYKIT_ID")))

        val preParameter = CreditParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
        )

        paykit.preAuthorize(preParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPreResult(result.id, result)
            }
        })
    }

    private fun onPreResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da pré-autorização

        // ...

        // Implementada lógica de captura aqui apenas para fins educativos
        if (transaction.status == TransactionStatus.APPROVED) {
            val creditParameter = CreditParameters(
                installments = 1,  // Número de parcelas (1 para crédito à vista)
                amount = BigDecimal("100.00"),  // Valor da transação
                creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
            )

            paykit.credit(creditParameter, object : Callback<PaymentResult> {
                override fun execute(result: PaymentResult) {
                    Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                    onCaptureResult(result.id, result.rawData)
                }
            })
        }
    }

    private fun onCaptureResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da captura da pré-autorização
    }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              {/* Débito */}
              <TabsContent value="debito" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Débito</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. Para realizar uma Transação de Débito, utilize o método <code className="bg-accent px-2 py-1 rounded">debit</code> da classe paykit.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Os parâmetros de entrada da transação são configurados no objeto <code className="bg-accent px-2 py-1 rounded">DebitParameters</code>
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">DebitParameters</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto DebitParameters, utilizado em transações de débito.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">O valor total da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">Int?</td><td className="p-2">O número de parcelas para pagamento. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">cpf</td><td className="p-2">String?</td><td className="p-2">CPF do cliente, se aplicável. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">billOfSale</td><td className="p-2">String?</td><td className="p-2">Documento de venda associado à transação. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTimeOfSale</td><td className="p-2">Date?</td><td className="p-2">Data e hora em que a venda foi realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String?</td><td className="p-2">Identificador externo para a transação, se necessário. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">items</td><td className="p-2">List&lt;OrderItem&gt;?</td><td className="p-2">Lista dos items de venda, relacionados a transação a ser realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">autoPrintReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.</td></tr>
                        <tr className="border-b"><td className="p-2">printMerchantReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.</td></tr>
                        <tr className="border-b"><td className="p-2">deadline</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">postCreditDays</td><td className="p-2">Int?</td><td className="p-2">Data de expiração da primeira parcela, em dias. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">debitType</td><td className="p-2">DebitTransactionType?</td><td className="p-2">Tipo de transação de débito.</td></tr>
                        <tr className="border-b"><td className="p-2">autoConfirm</td><td className="p-2">Boolean?</td><td className="p-2">Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Normalmente utilizamos a modalidade de débito a vista (AT_SIGHT). Mas a adquirente Vero aceita transaçoes pré-datadas (POSTDATED) e parceladas (WITH_INSTALMENTS) também.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    A tabela a seguir mostra todas as opções disponíveis.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">DebitTransactionType</h4>
                  <p className="text-muted-foreground mb-4">
                    Para o debitType é utilizado um enum para identificação da Modalidade de Débito.
                  </p>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`/**
 * Enum representando os tipos de transação de Débito.
 * Correspondência DE-PARA (Português -> Inglês):
 * - DEBITO_AVISTA | TRANSACAO_DEBITO_VISTA -> AT_SIGHT
 * - DEBITO_PAGTO_FATURA_DEBITO -> DEBIT_INVOICE_PAYMENT
 * - TRANSACAO_BANRICOMPRAS_VISTA -> ACQUIRER_AT_SIGHT
 * - TRANSACAO_BANRICOMPRAS_PREDATADO -> POSTDATED
 * - TRANSACAO_BANRICOMPRAS_PARCELADO -> WITH_INSTALMENTS
 */
enum class DebitTransactionType(
    override val hasInterest: Boolean = false,
    override val hasInstalments: Boolean = false
) : TransactionType {
    AT_SIGHT,                  // DEBITO_AVISTA
    ACQUIRER_AT_SIGHT,         // TRANSACAO_BANRICOMPRAS_VISTA
    INVOICE_PAYMENT,           // DEBITO_PAGTO_FATURA_DEBITO
    POSTDATED,                 // TRANSACAO_BANRICOMPRAS_PREDATADO
    WITH_INSTALMENTS(hasInstalments = true) // TRANSACAO_BANRICOMPRAS_PARCELADO
}`}</code>
                  </pre>

                  <p className="text-muted-foreground mb-6">
                    Independente da modalidade, os resultados da transação serão devolvidos no objeto paymentResult
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">id</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador único da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">externalId</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador externo para a transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">amount</td>
                          <td className="p-2">BigDecimal</td>
                          <td className="p-2">Representa o valor da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">message</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">paymentType</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">transactionType</td>
                          <td className="p-2">Interface</td>
                          <td className="p-2">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">transactionInfo</td>
                          <td className="p-2">TransactionInfo</td>
                          <td className="p-2">Representa dados de retorno transacional da adquirente.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuInfo</td>
                          <td className="p-2">NsuInfo</td>
                          <td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">dateTime</td>
                          <td className="p-2">Date</td>
                          <td className="p-2">Representa data e hora da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">Retorno estilo chave/valor recebido do provedor.<br/>OBS: Os dados desse campo mudam de acordo com o provedor e o tipo de transação.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">nsu</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">e2eId</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuAcquirer</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuLocal</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">authorizationCode</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código de autorização da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardBrand</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Bandeira do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardNumber</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Número do cartão, com mascara, utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardHolder</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Proprietário do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardLastDigits</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Últimos dígitos do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">bankAccount</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador do banco utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">installments</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Número de parcelas utilizadas na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">storeReceipt</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Comprovante da Loja.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">customerReceipt</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Comprovante do Cliente.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplos</h4>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
                      <strong>- amount: MAIOR ou igual a 0.01</strong>
                    </p>
                  </div>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.DebitTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Débito", PaykitId("PAYKIT_ID")))

        val debitParameter = DebitParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
            debitType = DebitTransactionType.AT_SIGHT // Débito à vista
        )

        paykit.debit(debitParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <p className="text-muted-foreground mb-4">
                    O debitParameter pode mudar de acordo com a o debitType, onde dado o suporte pela adquirente à modalidade, exemplo do DebitTransactionType.POSTDATED para o pré-datado.
                  </p>

                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`    val debitParameter = PaymentParameters(
        amount = BigDecimal("100.00"),  // Valor da transação
        debitType = DebitTransactionType.POSTDATED // Débito pré-datado
        postCreditDays = 30 // Dias para o pré-datado
    )`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">DebitTransactionType</h4>
                  <p className="text-muted-foreground mb-4">
                    Para o debitType é utilizado um enum para identificação da Modalidade de Débito.
                  </p>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`/**
 * Enum representando os tipos de transação de Débito.
 * Correspondência DE-PARA (Português -> Inglês):
 * - DEBITO_AVISTA | TRANSACAO_DEBITO_VISTA -> AT_SIGHT
 * - DEBITO_PAGTO_FATURA_DEBITO -> DEBIT_INVOICE_PAYMENT
 * - TRANSACAO_BANRICOMPRAS_VISTA -> ACQUIRER_AT_SIGHT
 * - TRANSACAO_BANRICOMPRAS_PREDATADO -> POSTDATED
 * - TRANSACAO_BANRICOMPRAS_PARCELADO -> WITH_INSTALMENTS
 */
enum class DebitTransactionType(
    override val hasInterest: Boolean = false,
    override val hasInstalments: Boolean = false
) : TransactionType {
    AT_SIGHT,                  // DEBITO_AVISTA
    ACQUIRER_AT_SIGHT,         // TRANSACAO_BANRICOMPRAS_VISTA
    INVOICE_PAYMENT,           // DEBITO_PAGTO_FATURA_DEBITO
    POSTDATED,                 // TRANSACAO_BANRICOMPRAS_PREDATADO
    WITH_INSTALMENTS(hasInstalments = true) // TRANSACAO_BANRICOMPRAS_PARCELADO
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">id</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador único da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">externalId</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador externo para a transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">amount</td>
                          <td className="p-2">BigDecimal</td>
                          <td className="p-2">Representa o valor da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">message</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">paymentType</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">transactionType</td>
                          <td className="p-2">Interface</td>
                          <td className="p-2">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">transactionInfo</td>
                          <td className="p-2">TransactionInfo</td>
                          <td className="p-2">Representa dados de retorno transacional da adquirente.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuInfo</td>
                          <td className="p-2">NsuInfo</td>
                          <td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">dateTime</td>
                          <td className="p-2">Date</td>
                          <td className="p-2">Representa data e hora da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">Retorno estilo chave/valor recebido do provedor.<br/>OBS: Os dados desse campo mudam de acordo com o provedor e o tipo de transação.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">nsu</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">e2eId</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuAcquirer</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">nsuLocal</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">authorizationCode</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Código de autorização da transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardBrand</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Bandeira do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardNumber</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Número do cartão, com mascara, utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardHolder</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Proprietário do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">cardLastDigits</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Últimos dígitos do cartão utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">bankAccount</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Identificador do banco utilizado na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">installments</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Número de parcelas utilizadas na transação.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">storeReceipt</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Comprovante da Loja.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">customerReceipt</td>
                          <td className="p-2">String</td>
                          <td className="p-2">Comprovante do Cliente.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Voucher */}
              <TabsContent value="voucher" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Voucher</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. Para realizar uma Transação de Voucher, utilize o exemplo abaixo.
                  </p>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                      <li><strong>amount</strong>: MAIOR ou igual a 0.01</li>
                    </ul>
                  </div>

                  <h4 className="text-xl font-bold mb-3">Exemplo</h4>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.VoucherTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Voucher", PaykitId("PAYKIT_ID")))

        val voucherParameter = VoucherParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
            voucherType = VoucherTransactionType.FOOD // Tipo de transação de Voucher
        )

        paykit.voucher(voucherParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique a modalidade de voucher suportada pela adquirente.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">VoucherTransactionType</h4>
                  <p className="text-muted-foreground mb-3">
                    Para o voucherType é utilizado um enum para identificação da Modalidade de Voucher.
                  </p>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`/**
 * Enum representando os tipos de transação de Voucher.
 * Correspondência DE-PARA (Português -> Inglês):
 * - VOUCHER_ALIMENTACAO -> FOOD
 * - VOUCHER_REFEICAO ->    MEAL
 * - VOUCHER_AUTOMOTIVO ->  AUTOMOTIVE
 * - VOUCHER_CULTURA ->     CULTURE
 * - VOUCHER_PEDAGIO ->     TOLL
 * - VOUCHER_BENEFICIOS ->  BENEFITS
 * - VOUCHER_AUTO ->        AUTOMOBILE
 * - VOUCHER_CONSULTA_SALDO -> BALANCE_INQUIRY
 * - VOUCHER_VALE_PEDAGIO -> TOLL_VALE
 * - TRANSACAO_VOUCHER -> DEFAULT
 */
enum class VoucherTransactionType(
    override val hasInterest: Boolean = false,
    override val hasInstalments: Boolean = false
) : TransactionType {
    FOOD,                     // VOUCHER_ALIMENTACAO
    MEAL,                     // VOUCHER_REFEICAO
    AUTOMOTIVE,               // VOUCHER_AUTOMOTIVO
    CULTURE,                  // VOUCHER_CULTURA
    TOLL,                     // VOUCHER_PEDAGIO
    BENEFITS,                 // VOUCHER_BENEFICIOS
    AUTOMOBILE,               // VOUCHER_AUTO
    BALANCE_INQUIRY,          // VOUCHER_CONSULTA_SALDO
    TOLL_VALE,                // VOUCHER_VALE_PEDAGIO
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-3">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>id</code></td><td className="p-3">String</td><td className="p-3">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>externalId</code></td><td className="p-3">String</td><td className="p-3">Identificador externo para a transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>processor</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3"><code>status</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>amount</code></td><td className="p-3">BigDecimal</td><td className="p-3">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>message</code></td><td className="p-3">String</td><td className="p-3">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>paymentType</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>transactionType</code></td><td className="p-3">Interface</td><td className="p-3">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-3"><code>transactionInfo</code></td><td className="p-3">TransactionInfo</td><td className="p-3">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuInfo</code></td><td className="p-3">NsuInfo</td><td className="p-3">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>dateTime</code></td><td className="p-3">Date</td><td className="p-3">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>rawData</code></td>
                          <td className="p-3">Map&lt;String, String&gt;</td>
                          <td className="p-3">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-3">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>nsu</code></td><td className="p-3">String</td><td className="p-3">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>e2eId</code></td><td className="p-3">String</td><td className="p-3">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuAcquirer</code></td><td className="p-3">String</td><td className="p-3">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuLocal</code></td><td className="p-3">String</td><td className="p-3">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-3">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>authorizationCode</code></td><td className="p-3">String</td><td className="p-3">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardBrand</code></td><td className="p-3">String</td><td className="p-3">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardNumber</code></td><td className="p-3">String</td><td className="p-3">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardHolder</code></td><td className="p-3">String</td><td className="p-3">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardLastDigits</code></td><td className="p-3">String</td><td className="p-3">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>bankAccount</code></td><td className="p-3">String</td><td className="p-3">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>installments</code></td><td className="p-3">String</td><td className="p-3">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>storeReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>customerReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Pix */}
              <TabsContent value="pix" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Pix</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. Para realizar uma Transação de <strong>PIX</strong>, utilize o exemplo abaixo.
                  </p>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3">Exemplo</h4>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "PIX", PaykitId("PAYKIT_ID")))

        val pixParameter = PaymentParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
        )

        paykit.pix(pixParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>id</code></td><td className="p-3">String</td><td className="p-3">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>externalId</code></td><td className="p-3">String</td><td className="p-3">Identificador externo para a transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>processor</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3"><code>status</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>amount</code></td><td className="p-3">BigDecimal</td><td className="p-3">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>message</code></td><td className="p-3">String</td><td className="p-3">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>paymentType</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>transactionType</code></td><td className="p-3">Interface</td><td className="p-3">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-3"><code>transactionInfo</code></td><td className="p-3">TransactionInfo</td><td className="p-3">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuInfo</code></td><td className="p-3">NsuInfo</td><td className="p-3">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>dateTime</code></td><td className="p-3">Date</td><td className="p-3">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>rawData</code></td>
                          <td className="p-3">Map&lt;String, String&gt;</td>
                          <td className="p-3">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>nsu</code></td><td className="p-3">String</td><td className="p-3">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>e2eId</code></td><td className="p-3">String</td><td className="p-3">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuAcquirer</code></td><td className="p-3">String</td><td className="p-3">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuLocal</code></td><td className="p-3">String</td><td className="p-3">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>authorizationCode</code></td><td className="p-3">String</td><td className="p-3">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardBrand</code></td><td className="p-3">String</td><td className="p-3">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardNumber</code></td><td className="p-3">String</td><td className="p-3">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardHolder</code></td><td className="p-3">String</td><td className="p-3">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardLastDigits</code></td><td className="p-3">String</td><td className="p-3">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>bankAccount</code></td><td className="p-3">String</td><td className="p-3">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>installments</code></td><td className="p-3">String</td><td className="p-3">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>storeReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>customerReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Wallet */}
              <TabsContent value="wallet" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Wallet</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. Para realizar uma Transação de <strong>Wallet</strong>, utilize o exemplo abaixo.
                  </p>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parametros da transação. Os atributos devem seguir os critérios:
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3">Exemplo</h4>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Wallet", PaykitId("PAYKIT_ID")))

        val walletParameter = PaymentParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
        )

        paykit.wallet(walletParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>id</code></td><td className="p-3">String</td><td className="p-3">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>externalId</code></td><td className="p-3">String</td><td className="p-3">Identificador externo para a transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>processor</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3"><code>status</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>amount</code></td><td className="p-3">BigDecimal</td><td className="p-3">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>message</code></td><td className="p-3">String</td><td className="p-3">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>paymentType</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>transactionType</code></td><td className="p-3">Interface</td><td className="p-3">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-3"><code>transactionInfo</code></td><td className="p-3">TransactionInfo</td><td className="p-3">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuInfo</code></td><td className="p-3">NsuInfo</td><td className="p-3">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>dateTime</code></td><td className="p-3">Date</td><td className="p-3">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>rawData</code></td>
                          <td className="p-3">Map&lt;String, String&gt;</td>
                          <td className="p-3">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>nsu</code></td><td className="p-3">String</td><td className="p-3">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>e2eId</code></td><td className="p-3">String</td><td className="p-3">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuAcquirer</code></td><td className="p-3">String</td><td className="p-3">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuLocal</code></td><td className="p-3">String</td><td className="p-3">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>authorizationCode</code></td><td className="p-3">String</td><td className="p-3">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardBrand</code></td><td className="p-3">String</td><td className="p-3">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardNumber</code></td><td className="p-3">String</td><td className="p-3">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardHolder</code></td><td className="p-3">String</td><td className="p-3">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardLastDigits</code></td><td className="p-3">String</td><td className="p-3">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>bankAccount</code></td><td className="p-3">String</td><td className="p-3">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>installments</code></td><td className="p-3">String</td><td className="p-3">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>storeReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>customerReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Frota */}
              <TabsContent value="frota" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Frota</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. Para realizar uma Transação de <strong>Frota</strong>, utilize o exemplo abaixo.
                  </p>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parâmetros da transação. Os atributos devem seguir os critérios:
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>amount</strong>: MAIOR ou igual a 0.01
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3">Fluxo Unificado de Frotas (TEFs)</h4>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.FleetParameters
import com.linx.paykit.common.builder.TefFleetUnifiedBuilder
import com.linx.paykit.common.builder.models.RefuelItem
import com.linx.paykit.common.builder.models.ServiceItem
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Frota", PaykitId("PAYKIT_ID")))

        val unifiedFleetRequest = TefFleetUnifiedBuilder()
            .setAcquirerCode(121)
            .setCpf("12345678901")
            .setVehiclePlate("ABC1234")
            .setDriverId("12345678901")
            .setOdometer(1000)
            .setHourMeter(1000)
            .setMileage(1000)
            .setWorkOrderNumber("12345678901")
            .setEmployeeId("12345678901")
            .setHasBrPremmia(false)
            .setBrPremmiaEmployeeCode("12345678901")
            .addServiceItem(
                ServiceItem(
                    1231, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                )
            )
            .setServiceItems(
                listOf(
                    ServiceItem(
                        1231, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    ),
                    ServiceItem(
                        1232, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    )
                )
            )
            .addRefuelItem(
                RefuelItem(
                    123, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                )
            )
            .setRefuelItems(
                listOf(
                    RefuelItem(
                        123, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    ),
                    RefuelItem(
                        125, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    )
                )
            )
            .setParameter(
                "brand", ParameterValue.Str("Rovias S/A")
            )
            .setParameter(
                "responsaveis", ParameterValue.ListVal(
                    listOf(
                        ParameterValue.Str("João"),
                        ParameterValue.Str("Cleber")
                    )
                )
            )
            .build()


        val fleetParameters = FleetParameters(
            providerParams = unifiedFleetRequest // JSONObject com as informações da transação
        )

        paykit.fleet(fleetParameters, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">Demais Rotinas de Frotas</h4>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.FleetParameters
import com.linx.paykit.common.builder.models.RefuelItem
import com.linx.paykit.common.builder.models.ServiceItem
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Frota", PaykitId("PAYKIT_ID")))

        val fleetParameters = FleetParameters(
            amount = BigDecimal("100.00"),      // Valor da transação
            vehiclePlate = "ABC1234",           // Placa do Veículo
            driverId = "234123",                // Matrícula ou Código do Motorista
            odometer = 1000,                    // Contador da quilometragem percorrida pelo veículo
            hourMeter = 1000,                   // Representa a quantidade de tempo de funcionamento do veículo
            providerParams = JSONObject(..)     // JSON para parâmetros extras, utilize um JSONObjectBuilder.
        )

        paykit.fleet(fleetParameters, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-6">JSONObjectBuilders</h4>
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parâmetros do JSON, a título de consulta, na documentação do provedor/adquirente.
                      Exemplo de JSON no TEF Mobile
                    </p>
                  </div>

                  <h5 className="text-lg font-bold mb-3 mt-6">TefFleetUnifiedBuilder</h5>
                  <p className="text-muted-foreground mb-4">
                    Builder especializado para operações de frota unificadas para TEF.
                    Oferece suporte para configurações mais complexas, permitindo montar o JSONObject de forma mais segura:
                  </p>

                  <h6 className="text-base font-bold mb-2 mt-4">Configurações Básicas:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`val builder = TefFleetUnifiedBuilder()
    .setAcquirerCode(121)              // Código da adquirente (obrigatório)
    .setOperationType(1)               // Tipo de operação
    .setWorkOrderNumber("OS123")       // Número da OS`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Dados do Veículo e Motorista:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`builder
    .setVehiclePlate("ABC1234")       // Placa
    .setDriverId("123456")            // ID do motorista
    .setCpf("12345678900")            // CPF`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Métricas do Veículo:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`builder
    .setOdometer(50000)               // Hodômetro
    .setHourMeter(1000)               // Horímetro
    .setMileage(5000)                 // Quilometragem`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Configurações BR Premmia:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`builder
    .setHasBrPremmia(true)
    .setBrPremmiaEmployeeCode("BP123")`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Detalhes da Operação:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`// Adicionar Serviço
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
)`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Parâmetros Customizados:</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`builder.setParameter("chave", ParameterValue.Str("valor"))`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Finalização</h6>
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-4">
                    <code>{`val jsonObject = builder.build()    // Gera o objeto JSON final`}</code>
                  </pre>

                  <h6 className="text-base font-bold mb-2 mt-4">Observações Importantes:</h6>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-6">
                    <li>O código da adquirente (acquirerCode) é obrigatório</li>
                    <li>Os detalhes da operação (serviços e abastecimentos) são inicializados automaticamente</li>
                    <li>Suporta múltiplos serviços e abastecimentos na mesma operação</li>
                    <li>Ideal para operações complexas de frota com múltiplos itens</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3 mt-6">PaymentResult</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto PaymentResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>id</code></td><td className="p-3">String</td><td className="p-3">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>externalId</code></td><td className="p-3">String</td><td className="p-3">Identificador externo para a transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>processor</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3"><code>status</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>amount</code></td><td className="p-3">BigDecimal</td><td className="p-3">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>message</code></td><td className="p-3">String</td><td className="p-3">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>paymentType</code></td>
                          <td className="p-3">Enum</td>
                          <td className="p-3">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-3"><code>transactionType</code></td><td className="p-3">Interface</td><td className="p-3">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-3"><code>transactionInfo</code></td><td className="p-3">TransactionInfo</td><td className="p-3">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuInfo</code></td><td className="p-3">NsuInfo</td><td className="p-3">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>dateTime</code></td><td className="p-3">Date</td><td className="p-3">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-3"><code>rawData</code></td>
                          <td className="p-3">Map&lt;String, String&gt;</td>
                          <td className="p-3">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">NsuInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>nsu</code></td><td className="p-3">String</td><td className="p-3">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>e2eId</code></td><td className="p-3">String</td><td className="p-3">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuAcquirer</code></td><td className="p-3">String</td><td className="p-3">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>nsuLocal</code></td><td className="p-3">String</td><td className="p-3">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">TransactionInfo</h4>
                  <p className="text-muted-foreground mb-4">
                    O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Campo</th>
                          <th className="text-left p-3 font-semibold">Tipo</th>
                          <th className="text-left p-3 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-3"><code>authorizationCode</code></td><td className="p-3">String</td><td className="p-3">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardBrand</code></td><td className="p-3">String</td><td className="p-3">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardNumber</code></td><td className="p-3">String</td><td className="p-3">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardHolder</code></td><td className="p-3">String</td><td className="p-3">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>cardLastDigits</code></td><td className="p-3">String</td><td className="p-3">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>bankAccount</code></td><td className="p-3">String</td><td className="p-3">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>installments</code></td><td className="p-3">String</td><td className="p-3">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>storeReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-3"><code>customerReceipt</code></td><td className="p-3">String</td><td className="p-3">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Cancelamento */}
              <TabsContent value="cancelamento" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Cancelamento</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Para realizar uma Transação de Cancelamento, utilize o método <code className="bg-accent px-2 py-1 rounded">cancel</code> da classe paykit.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Os parâmetros de entrada da transação são configurados no objeto <code className="bg-accent px-2 py-1 rounded">CancelParameter</code>
                  </p>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded mb-6">
                    <p className="text-sm font-semibold mb-1">⚠️ Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Verifique os parâmetros da transação. Os atributos devem seguir os critérios: <strong>amount: MAIOR ou igual a 0.01</strong>
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-6">CancelParameter¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto CancelParameter, utilizado em transações de cancelamento.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">paymentId</td><td className="p-2">String</td><td className="p-2">Identificador da transação de pagamento que será cancelada.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String?</td><td className="p-2">Identificador externo para a transação, se necessário. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal?</td><td className="p-2">O valor total da transação de pagamento que será cancelada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">originalPaymentType</td><td className="p-2">PaymentType?</td><td className="p-2">Modalidade (débito, crédito, voucher, Pix, etc.) da transação de pagamento. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">originalTransactionDate</td><td className="p-2">Date?</td><td className="p-2">Data em que a transação de pagamento foi realizada. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">cancelAmount</td><td className="p-2">BigDecimal?</td><td className="p-2">O valor que será cancelado da transação para cancelamento parcial. Este campo é opcional.</td></tr>
                        <tr className="border-b"><td className="p-2">autoPrintReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.</td></tr>
                        <tr className="border-b"><td className="p-2">printMerchantReceipt</td><td className="p-2">Boolean</td><td className="p-2">Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.</td></tr>
                        <tr className="border-b"><td className="p-2">autoConfirm</td><td className="p-2">Boolean?</td><td className="p-2">Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm">
                    Os parâmetros <code className="bg-accent px-1 rounded">paymentId</code>, <code className="bg-accent px-1 rounded">amount</code>, <code className="bg-accent px-1 rounded">originalPaymentType</code> e <code className="bg-accent px-1 rounded">originalTransactionDate</code> são utilizados para localizar a transação original que deve ser cancelada. Quando não informado será consultado no momento do cancelamento. Alguns provedores permitem cancelamento parcial (veja regras de negócio com o próprio provedor). Para esse caso possuímos o parâmetro <code className="bg-accent px-1 rounded">cancelAmount</code> que pode ser utilizado.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplo¶</h4>
                  <p className="text-muted-foreground mb-4">Para realizar uma Transação de Cancelamento, utilize o exemplo abaixo.</p>
                  
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.CancelResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CancelParameter
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Cancelamento", PaykitId("PAYKIT_ID")))

        val cancelParameter = CancelParameter(
            paymentId = "1",  // (transactionId) NSU da Transação
            amount = BigDecimal("100.00"),  // Valor da original da transação
            originalTransactionDate = Date()  // Data original da transação
        )

        paykit.cancel(cancelParameter, object : Callback<CancelResult> {
            override fun execute(result: CancelResult) {
                 Log.i("PaymentResult", "ID: \${result.id}, Transaction: \${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: CancelResult) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-8">Detalhamento do CancelResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto CancelResult, retornado no callback da transação, contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">id</td><td className="p-2">String</td><td className="p-2">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String</td><td className="p-2">Identificador externo para a transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação original.</td></tr>
                        <tr className="border-b"><td className="p-2">originalId</td><td className="p-2">String</td><td className="p-2">Identificador da transação original.</td></tr>
                        <tr className="border-b"><td className="p-2">cancelledAmount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação de cancelamento.</td></tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuInfo</td><td className="p-2">NsuInfo</td><td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">transactionInfo</td><td className="p-2">TransactionInfo</td><td className="p-2">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-8">NsuInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">nsu</td><td className="p-2">String</td><td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-2">e2eId</td><td className="p-2">String</td><td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuAcquirer</td><td className="p-2">String</td><td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuLocal</td><td className="p-2">String</td><td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-8">TransactionInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">authorizationCode</td><td className="p-2">String</td><td className="p-2">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardBrand</td><td className="p-2">String</td><td className="p-2">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardNumber</td><td className="p-2">String</td><td className="p-2">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardHolder</td><td className="p-2">String</td><td className="p-2">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardLastDigits</td><td className="p-2">String</td><td className="p-2">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">bankAccount</td><td className="p-2">String</td><td className="p-2">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">String</td><td className="p-2">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">storeReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-2">customerReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Reimpressão */}
              <TabsContent value="reimpressao" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Reimpressão</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Para realizar uma Transação de Reimpressão, utilize o exemplo abaixo.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplo¶</h4>
                  
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.core.Paykit
import com.linx.paykit.common.parameter.ReceiptType
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Reimpressão", PaykitId("PAYKIT_ID")))

        val receiptType = ReceiptType.MERCHANT // Imprimir comprovante Estabelecimento

        paykit.printLastReceipt(receiptType, object : Callback<PrintResult> {
            override fun execute(result: PrintResult) {
                Log.i("PaymentResult", "Status: \${result}")
                onPaymentResult(result)
            }
        })
    }

    private fun onPaymentResult(result: PrintResult) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-8">Detalhamento do PrintResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto PrintResult, retornado no callback da transação, contém informações essenciais sobre o status da impressão. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Data e hora da impressão.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - NORMALLY: Impressora funcionando normalmente.<br/>
                            - WITHOUT_PAPER: Impressora sem papel.<br/>
                            - VOLTAGE_TO_LOW: Voltagem muito baixa.<br/>
                            - NO_PRINTER_DETECTED: Nenhuma impressora detectada.<br/>
                            - OVERHEATED: Impressora superaquecida.<br/>
                            - CUT_JAM_ERROR: Erro de atolamento no cortador.<br/>
                            - PREPARING_PRINTER: Preparando impressora.<br/>
                            - PRINTING_UNFINISHED: A última impressão não foi concluída.<br/>
                            - ABNORMAL_COMMUNICATION: Comunicação anormal com a impressora.<br/>
                            - NO_PRINTER_BLACK_MARK: Marca preta não detectada.<br/>
                            - CUTTER_RECOVERED: Cortador recuperado.<br/>
                            - OPEN_THE_LID: Abra a tampa.<br/>
                            - ERROR_DATA_PACKAGE_TOO_LONG: Pacote de dados muito longo.<br/>
                            - FONT_ERROR: Biblioteca de fontes não instalada.<br/>
                            - FORMAT_PRINT_ERROR: Erro no formato do pacote de impressão.<br/>
                            - BUSY_PRINTER: Impressora ocupada.<br/>
                            - GENERIC_ERROR: Algo está errado com o módulo.<br/>
                            - SERVICE_UNAVAILABLE: Serviço indisponível.<br/>
                            - METHOD_UNAVAILABLE: Método indisponível.<br/>
                            - INVALID_PARAMETER: Parâmetro inválido.<br/>
                            - UNAVAILABLE_PARAMETER: Parâmetro indisponível.<br/>
                            - NO_PERMISSION: Sem permissão para a operação.<br/>
                            - DEPRECATED: Método/parâmetro obsoleto.<br/>
                            - SUCCESS: Tarefa concluída com sucesso.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">success</td><td className="p-2">Boolean</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Impressão */}
              <TabsContent value="impressao" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Impressão</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Para realizar uma Transação de Impressão, utilize o exemplo abaixo.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplo¶</h4>
                  
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.parameter.ReceiptType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Impressão", PaykitId("PAYKIT_ID")))

        val bitmap: Bitmap // Bitmap para impressão

        paykit.print(bitmap, object : Callback<PrintResult> {
            override fun execute(result: PrintResult) {
                Log.i("PaymentResult", "Status: \${result}")
                onPaymentResult(result)
            }
        })
    }

    private fun onPaymentResult(result: PrintResult) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-8">Detalhamento do PrintResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto PrintResult, retornado no callback da transação, contém informações essenciais sobre o status da impressão. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Data e hora da impressão.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - NORMALLY: Impressora funcionando normalmente.<br/>
                            - WITHOUT_PAPER: Impressora sem papel.<br/>
                            - VOLTAGE_TO_LOW: Voltagem muito baixa.<br/>
                            - NO_PRINTER_DETECTED: Nenhuma impressora detectada.<br/>
                            - OVERHEATED: Impressora superaquecida.<br/>
                            - CUT_JAM_ERROR: Erro de atolamento no cortador.<br/>
                            - PREPARING_PRINTER: Preparando impressora.<br/>
                            - PRINTING_UNFINISHED: A última impressão não foi concluída.<br/>
                            - ABNORMAL_COMMUNICATION: Comunicação anormal com a impressora.<br/>
                            - NO_PRINTER_BLACK_MARK: Marca preta não detectada.<br/>
                            - CUTTER_RECOVERED: Cortador recuperado.<br/>
                            - OPEN_THE_LID: Abra a tampa.<br/>
                            - ERROR_DATA_PACKAGE_TOO_LONG: Pacote de dados muito longo.<br/>
                            - FONT_ERROR: Biblioteca de fontes não instalada.<br/>
                            - FORMAT_PRINT_ERROR: Erro no formato do pacote de impressão.<br/>
                            - BUSY_PRINTER: Impressora ocupada.<br/>
                            - GENERIC_ERROR: Algo está errado com o módulo.<br/>
                            - SERVICE_UNAVAILABLE: Serviço indisponível.<br/>
                            - METHOD_UNAVAILABLE: Método indisponível.<br/>
                            - INVALID_PARAMETER: Parâmetro inválido.<br/>
                            - UNAVAILABLE_PARAMETER: Parâmetro indisponível.<br/>
                            - NO_PERMISSION: Sem permissão para a operação.<br/>
                            - DEPRECATED: Método/parâmetro obsoleto.<br/>
                            - SUCCESS: Tarefa concluída com sucesso.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">message</td><td className="p-2">String</td><td className="p-2">Mensagem de sucesso ou erro, caso aplicável.</td></tr>
                        <tr className="border-b"><td className="p-2">success</td><td className="p-2">Boolean</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Localizar Transação */}
              <TabsContent value="localizar" className="space-y-6">
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Localizar Transação</h3>
                  <p className="text-muted-foreground mb-4">
                    O processo de busca de transação, tem como premissa que a ativação do SDK foi previamente realizada.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Para Localizar uma Transação, utilize o exemplo abaixo.
                  </p>

                  <h4 className="text-xl font-bold mb-3 mt-6">Exemplo¶</h4>
                  
                  <pre className="bg-accent p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    <code>{`import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.TransactionQueryResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.TransactionInfoParameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Busca Transação", PaykitId("PAYKIT_ID")))

        // Utilizar o ID da transação ou o ID externo para localizar 
        val transactionParameter = TransactionInfoParameters(
            transactionId = "1", // (transactionId) NSU da Transação
            // externalId = "123456" // ID externo da transação 
        )

        paykit.getTransaction(transactionParameter, object : Callback<TransactionQueryResult?> {
            override fun execute(result: TransactionQueryResult?) {
                Log.i("TransactionQueryResult", "Transaction: \${result}")
                onGetTransaction(result)
            }
        })
    }

    private fun onGetTransaction(transaction: TransactionQueryResult?) {
        // Implementar a lógica para lidar com o resultado da consulta
    }
}`}</code>
                  </pre>

                  <h4 className="text-xl font-bold mb-3 mt-8">Detalhamento do TransactionQueryResult¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto TransactionQueryResult, retornado no callback da transação, contém informações da consulta. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">id</td><td className="p-2">String</td><td className="p-2">Identificador único da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">externalId</td><td className="p-2">String</td><td className="p-2">Identificador externo da transação (Informado pela automação comercial).</td></tr>
                        <tr className="border-b">
                          <td className="p-2">processor</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Indica o processador da transação. Valores possíveis:<br/>
                            - STONE<br/>
                            - TEF<br/>
                            - REDE<br/>
                            - GETNET<br/>
                            - PAGSEGURO<br/>
                            - VERO<br/>
                            - CIELO<br/>
                            - SICOOB<br/>
                            - SITEF
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">status</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o status da transação. Valores possíveis:<br/>
                            - PENDING: Aguardando processamento.<br/>
                            - APPROVED: Transação aprovada.<br/>
                            - CANCELLED: Transação cancelada.<br/>
                            - PARTIALLY_CANCELLED: Transação cancelada.<br/>
                            - ERROR: Ocorreu um erro na transação.<br/>
                            - DECLINED: Transação recusada.
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">amount</td><td className="p-2">BigDecimal</td><td className="p-2">Representa o valor da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">dateTime</td><td className="p-2">Date</td><td className="p-2">Representa data e hora da transação.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">paymentType</td>
                          <td className="p-2">Enum</td>
                          <td className="p-2">
                            Representa o método de pagamento da transação. Valores possíveis:<br/>
                            - CREDIT<br/>
                            - DEBIT<br/>
                            - VOUCHER<br/>
                            - PIX<br/>
                            - WALLET<br/>
                            - FLEET<br/>
                            - QR_CODE
                          </td>
                        </tr>
                        <tr className="border-b"><td className="p-2">transactionType</td><td className="p-2">Interface</td><td className="p-2">Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (CreditTransactionType,DebitTransactionType,VoucherTransactionType)</td></tr>
                        <tr className="border-b"><td className="p-2">nsuInfo</td><td className="p-2">NsuInfo</td><td className="p-2">Representa dados de NSU do retorno transacional da adquirente.</td></tr>
                        <tr className="border-b"><td className="p-2">transactionInfo</td><td className="p-2">TransactionInfo</td><td className="p-2">Representa dados de retorno transacional da adquirente.</td></tr>
                        <tr className="border-b">
                          <td className="p-2">rawData</td>
                          <td className="p-2">Map&lt;String, String&gt;</td>
                          <td className="p-2">
                            Retorno estilo chave/valor recebido do provedor.<br/>
                            <strong>OBS:</strong> Os dados desse campo mudam de acordo com o provedor e o tipo de transação.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-8">NsuInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto NsuInfo contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor. Abaixo estão os campos disponíveis.</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">nsu</td><td className="p-2">String</td><td className="p-2">Código da transação de cartão. Normalmente gerado apenas em transações com cartão, mas em algumas adquirentes também é gerado em outras transações.</td></tr>
                        <tr className="border-b"><td className="p-2">e2eId</td><td className="p-2">String</td><td className="p-2">Código da transação PIX. Ele é gerado apenas em transações PIX.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuAcquirer</td><td className="p-2">String</td><td className="p-2">Código da transação da adquirente/rede. Normalmente TEF Houses entregam esse NSU gerado na rede autorizadora.</td></tr>
                        <tr className="border-b"><td className="p-2">nsuLocal</td><td className="p-2">String</td><td className="p-2">Código da transação. Algumas adquirentes possuem um idetificador interno da transação (diferente do NSU).</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-bold mb-3 mt-8">TransactionInfo¶</h4>
                  <p className="text-muted-foreground mb-4 text-sm">O objeto TransactionInfo contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:</p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">authorizationCode</td><td className="p-2">String</td><td className="p-2">Código de autorização da transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardBrand</td><td className="p-2">String</td><td className="p-2">Bandeira do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardNumber</td><td className="p-2">String</td><td className="p-2">Número do cartão, com mascara, utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardHolder</td><td className="p-2">String</td><td className="p-2">Proprietário do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">cardLastDigits</td><td className="p-2">String</td><td className="p-2">Últimos dígitos do cartão utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">bankAccount</td><td className="p-2">String</td><td className="p-2">Identificador do banco utilizado na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">installments</td><td className="p-2">String</td><td className="p-2">Número de parcelas utilizadas na transação.</td></tr>
                        <tr className="border-b"><td className="p-2">storeReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante da Loja.</td></tr>
                        <tr className="border-b"><td className="p-2">customerReceipt</td><td className="p-2">String</td><td className="p-2">Comprovante do Cliente.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* DeepLink */}
          <section id="deeplink" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Integração Deeplink SDK Único</h2>
            
            {/* Introdução */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-4">Introdução</h3>
              <p className="text-muted-foreground mb-4">
                O PaykitDeeplink é uma interface que permite a integração e comunicação com o SDK Unico para processamento de pagamentos através de deeplinks. Esta documentação detalha as rotas disponíveis e os parâmetros aceitos para cada método de pagamento.
              </p>
              
              <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent">Rota Base</h4>
                <p className="text-sm text-muted-foreground mb-2">Para chamar o PaykitDeeplink, a aplicação deve utilizar o seguinte formato de URL:</p>
                <code className="block bg-card p-3 rounded text-primary font-mono">paykit://payment</code>
              </div>
            </div>

            {/* Tipos de Operações */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-4">Tipos de Operações</h3>
              <p className="text-muted-foreground mb-4">
                O parâmetro <code className="text-primary bg-accent/20 px-2 py-1 rounded">paymentType</code> determina qual tipo de operação será executada. As operações disponíveis são:
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">activate</code>
                  <p className="text-sm text-muted-foreground mt-1">Ativa o terminal</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">credit</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento com cartão de crédito</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">debit</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento com cartão de débito</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">voucher</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento com voucher/vale</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">fleet</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento com cartão de frota</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">pix</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento via PIX</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">wallet</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento via carteira digital</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">qrcode</code>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento via QR Code</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">confirm</code>
                  <p className="text-sm text-muted-foreground mt-1">Confirma transação pendente</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">undo</code>
                  <p className="text-sm text-muted-foreground mt-1">Desfaz transação pendente</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">print_last_receipt</code>
                  <p className="text-sm text-muted-foreground mt-1">Imprime último recibo</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">get_transaction</code>
                  <p className="text-sm text-muted-foreground mt-1">Consulta detalhes de transação</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">cancel</code>
                  <p className="text-sm text-muted-foreground mt-1">Cancela transação</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">cancel_interactive</code>
                  <p className="text-sm text-muted-foreground mt-1">Cancelamento interativo</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">print</code>
                  <p className="text-sm text-muted-foreground mt-1">Imprime imagem</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent/5 transition-smooth">
                  <code className="text-accent font-semibold">query_report</code>
                  <p className="text-sm text-muted-foreground mt-1">Consulta relatórios</p>
                </div>
              </div>
            </div>

            {/* Parâmetros por Método */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Parâmetros por Método de Pagamento</h3>
              
              <Tabs defaultValue="activate" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 h-auto">
                  <TabsTrigger value="activate">Ativação</TabsTrigger>
                  <TabsTrigger value="credit">Crédito</TabsTrigger>
                  <TabsTrigger value="debit">Débito</TabsTrigger>
                  <TabsTrigger value="voucher">Voucher</TabsTrigger>
                  <TabsTrigger value="fleet">Frota</TabsTrigger>
                  <TabsTrigger value="pix">PIX</TabsTrigger>
                  <TabsTrigger value="wallet">Carteira</TabsTrigger>
                  <TabsTrigger value="qrcode">QR Code</TabsTrigger>
                  <TabsTrigger value="confirm">Confirmação</TabsTrigger>
                  <TabsTrigger value="undo">Desfazer</TabsTrigger>
                  <TabsTrigger value="print_receipt">Imprimir</TabsTrigger>
                  <TabsTrigger value="query">Consulta</TabsTrigger>
                  <TabsTrigger value="cancel">Cancelar</TabsTrigger>
                  <TabsTrigger value="cancel_inter">Cancel. Interativo</TabsTrigger>
                  <TabsTrigger value="print">Impressão</TabsTrigger>
                  <TabsTrigger value="report">Relatórios</TabsTrigger>
                </TabsList>

                {/* 1. Ativação */}
                <TabsContent value="activate" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">1. Ativação</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=activate</code>
                    <p className="text-sm text-muted-foreground mb-4 italic">*Executar apenas 1 (uma) vez ou quando o terminal é realocado para outra loja.</p>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">activationCode</code>
                        <p className="text-sm text-muted-foreground">Código de ativação fornecido pelo provedor de pagamento</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">storeCnpj</code>
                        <p className="text-sm text-muted-foreground">CNPJ do estabelecimento comercial (sem máscara)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">automationCnpj</code>
                        <p className="text-sm text-muted-foreground">CNPJ da automação (sem máscara)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">isProduction</code>
                        <p className="text-sm text-muted-foreground">Indicador de ambiente de produção (true/false)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">host</code>
                        <p className="text-sm text-muted-foreground">Host para configuração do provedor de pagamento (opcional, IP ou URL)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">token</code>
                        <p className="text-sm text-muted-foreground">Token de autenticação no provedor de pagamento (opcional)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 2. Crédito */}
                <TabsContent value="credit" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">2. Pagamento com Cartão de Crédito</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=credit</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">installments</code>
                        <p className="text-sm text-muted-foreground">Número de parcelas (opcional)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">billOfSale</code>
                        <p className="text-sm text-muted-foreground">Referência do pedido/venda</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">autoPrintReceipt</code>
                        <p className="text-sm text-muted-foreground">Indicador para imprimir recibo (true/false)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">printMerchantReceipt</code>
                        <p className="text-sm text-muted-foreground">Indicador para imprimir recibo do lojista (true/false)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">autoConfirm</code>
                        <p className="text-sm text-muted-foreground">Indicador para confirmação automática (true/false)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">externalId</code>
                        <p className="text-sm text-muted-foreground">ID externo para identificação da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">cpf</code>
                        <p className="text-sm text-muted-foreground">CPF do cliente (opcional, sem máscara)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionType</code>
                        <p className="text-sm text-muted-foreground">Tipo de transação de crédito (at_sight, installments, store_installments, etc.)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">orderItems</code>
                        <p className="text-sm text-muted-foreground">Lista de itens do pedido (opcional, formato JSON ou delimitado)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 3. Débito */}
                <TabsContent value="debit" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">3. Pagamento com Cartão de Débito</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=debit</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">installments</code>
                        <p className="text-sm text-muted-foreground">Número de parcelas (opcional)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">billOfSale</code>
                        <p className="text-sm text-muted-foreground">Referência do pedido/venda</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">postCreditDays</code>
                        <p className="text-sm text-muted-foreground">Dias para pós-datamento (opcional)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionType</code>
                        <p className="text-sm text-muted-foreground">Tipo de transação de débito (at_sight, acquirer_at_sight, etc.)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">downpaymentAmount</code>
                        <p className="text-sm text-muted-foreground">Valor de entrada (opcional)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">firstInstallmentAmount</code>
                        <p className="text-sm text-muted-foreground">Valor da primeira parcela (opcional)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 4. Voucher */}
                <TabsContent value="voucher" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">4. Pagamento com Voucher</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=voucher</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionType</code>
                        <p className="text-sm text-muted-foreground">Tipo de voucher (food, meal, automotive, culture, benefits, etc.)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">orderItems</code>
                        <p className="text-sm text-muted-foreground">Lista de itens do pedido (opcional)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 5. Frota */}
                <TabsContent value="fleet" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">5. Pagamento com Cartão de Frota</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=fleet</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">providerParams</code>
                        <p className="text-sm text-muted-foreground">Parâmetros específicos do provedor (JSON codificado para URL)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 6. PIX */}
                <TabsContent value="pix" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">6. Pagamento via PIX</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=pix</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">providerParams</code>
                        <p className="text-sm text-muted-foreground">Parâmetros específicos do provedor (JSON codificado para URL)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 7. Carteira Digital */}
                <TabsContent value="wallet" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">7. Pagamento via Carteira Digital</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=wallet</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">providerParams</code>
                        <p className="text-sm text-muted-foreground">Parâmetros específicos do provedor (JSON codificado para URL)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 8. QR Code */}
                <TabsContent value="qrcode" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">8. Pagamento via QR Code</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=qrcode</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">providerParams</code>
                        <p className="text-sm text-muted-foreground">Parâmetros específicos do provedor (JSON codificado para URL)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 9. Confirmação */}
                <TabsContent value="confirm" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">9. Confirmação de Transação Pendente</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=confirm</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionId</code>
                        <p className="text-sm text-muted-foreground">ID da transação a ser confirmada</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">finalizeTransaction</code>
                        <p className="text-sm text-muted-foreground">Indicador para finalizar a transação (true/false)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 10. Desfazer */}
                <TabsContent value="undo" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">10. Desfazer Transação Pendente</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=undo</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionId</code>
                        <p className="text-sm text-muted-foreground">ID da transação a ser desfeita</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor da transação</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">finalizeTransaction</code>
                        <p className="text-sm text-muted-foreground">Indicador para finalizar a transação (true/false)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 11. Imprimir Recibo */}
                <TabsContent value="print_receipt" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">11. Imprimir Último Recibo</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=print_last_receipt</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">receiptType</code>
                        <p className="text-sm text-muted-foreground">Tipo de recibo a ser impresso (merchant, customer, both)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 12. Consulta de Transação */}
                <TabsContent value="query" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">12. Consulta de Transação</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=get_transaction</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionId</code>
                        <p className="text-sm text-muted-foreground">ID da transação a ser consultada</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">externalId</code>
                        <p className="text-sm text-muted-foreground">ID externo da transação (opcional)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 13. Cancelar */}
                <TabsContent value="cancel" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">13. Cancelar Transação</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=cancel</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">transactionId</code>
                        <p className="text-sm text-muted-foreground">ID da transação (paymentId)</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">amount</code>
                        <p className="text-sm text-muted-foreground">Valor a ser cancelado</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">dateTimeOfSale</code>
                        <p className="text-sm text-muted-foreground">Data/hora da venda original (timestamp em milissegundos)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 14. Cancelamento Interativo */}
                <TabsContent value="cancel_inter" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">14. Cancelamento Interativo</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=cancel_interactive</code>
                    <p className="text-sm text-muted-foreground">Não requer parâmetros adicionais, inicia a interface de cancelamento interativo.</p>
                  </div>
                </TabsContent>

                {/* 15. Impressão */}
                <TabsContent value="print" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">15. Impressão</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=print</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">bitmap</code>
                        <p className="text-sm text-muted-foreground mb-2">Imagem a ser impressa (codificada em base64)</p>
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg mt-4">
                      <h6 className="font-semibold mb-2 text-accent">Observações sobre o parâmetro bitmap:</h6>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                        <li>A imagem deve ser enviada como string codificada em base64</li>
                        <li>Deeplinks têm limite de ~2000 caracteres em muitos navegadores</li>
                        <li>Com encoding base64 (+33%), a imagem original não deve ultrapassar 1.5 MB</li>
                        <li>Intents do Android têm limite de ~500KB para extras</li>
                        <li>Impressora térmica geralmente tem largura de 384 pixels</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <h6 className="font-semibold mb-2">Exemplo de codificação Kotlin:</h6>
                      <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`fun bitmapToBase64(bitmap: Bitmap): String {
    val byteArrayOutputStream = ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream)
    val byteArray = byteArrayOutputStream.toByteArray()
    return Base64.encodeToString(byteArray, Base64.DEFAULT)
}

// Redimensionar antes da codificação
fun resizeBitmap(originalBitmap: Bitmap, maxWidthInPixels: Int = 384): Bitmap {
    if (originalBitmap.width <= maxWidthInPixels) return originalBitmap
    
    val ratio = maxWidthInPixels.toFloat() / originalBitmap.width
    val newHeight = (originalBitmap.height * ratio).toInt()
    
    return Bitmap.createScaledBitmap(
        originalBitmap,
        maxWidthInPixels,
        newHeight,
        true
    )
}`}</code></pre>
                    </div>
                  </div>
                </TabsContent>

                {/* 16. Consulta de Relatórios */}
                <TabsContent value="report" className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg">16. Consulta de Relatórios</h4>
                    <code className="block bg-accent/20 p-3 rounded text-sm mb-4">paykit://payment?paymentType=query_report</code>
                    
                    <h5 className="font-semibold mb-3">Parâmetros:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/50 rounded">
                        <code className="text-accent">providerParams</code>
                        <p className="text-sm text-muted-foreground">Parâmetros específicos do provedor para consulta (JSON codificado para URL)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Tipos de Transação */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Tipos de Transação</h3>
              <p className="text-muted-foreground mb-4">
                O parâmetro <code className="text-primary bg-accent/20 px-2 py-1 rounded">transactionType</code> pode variar de acordo com o método de pagamento:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Para Cartão de Crédito</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <code>at_sight</code> - À vista</li>
                    <li>• <code>installments</code> - Parcelado genérico</li>
                    <li>• <code>store_installments</code> - Parcelado loja</li>
                    <li>• <code>admin_installments</code> - Parcelado administradora</li>
                    <li>• <code>bank_installments</code> - Parcelado banco</li>
                    <li>• <code>issuer_installments</code> - Parcelado emissor</li>
                    <li>• <code>pre_authorization</code> - Pré-autorização</li>
                    <li>• <code>financing</code> - Financiamento</li>
                    <li>• <code>credit_1_minute</code> - Crédito em 1 minuto</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Para Cartão de Débito</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <code>at_sight</code> - À vista</li>
                    <li>• <code>acquirer_at_sight</code> - À vista pela adquirente</li>
                    <li>• <code>with_instalments</code> - Com parcelamento</li>
                    <li>• <code>invoice_payment</code> - Pagamento de fatura</li>
                    <li>• <code>postdated</code> - Pós-datado</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Para Voucher</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <code>food</code> - Alimentação</li>
                    <li>• <code>meal</code> - Refeição</li>
                    <li>• <code>automotive</code> - Automotivo</li>
                    <li>• <code>culture</code> - Cultura</li>
                    <li>• <code>toll</code> - Pedágio</li>
                    <li>• <code>benefits</code> - Benefícios</li>
                    <li>• <code>automobile</code> - Automóvel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formato dos Itens do Pedido */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Formato dos Itens do Pedido (OrderItems)</h3>
              <p className="text-muted-foreground mb-6">
                O parâmetro <code className="text-primary bg-accent/20 px-2 py-1 rounded">orderItems</code> pode ser informado em dois formatos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Formato JSON</h4>
                  <pre className="bg-card p-4 rounded text-xs overflow-x-auto mb-3"><code>{`[
  {
    "sku": "123",
    "name": "Produto 1",
    "value": 1000,
    "quantity": 1,
    "unityOfMeasure": "UN"
  },
  {
    "sku": "456",
    "name": "Produto 2",
    "value": 2000,
    "quantity": 2,
    "unityOfMeasure": "UN"
  }
]`}</code></pre>
                  <p className="text-sm text-muted-foreground">
                    <strong>Importante:</strong> O JSON deve ser codificado para URL.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Formato Delimitado</h4>
                  <pre className="bg-card p-4 rounded text-xs overflow-x-auto mb-3"><code>123|Produto 1|1000|1|UN;456|Produto 2|2000|2|UN</code></pre>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Formato:</strong> sku|nome|valor|quantidade|unidadeMedida</p>
                    <p><strong>Separador de itens:</strong> ;</p>
                    <p><strong>Separador de campos:</strong> |</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formatos de String Suportados */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Formatos de String Suportados</h3>
              
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">CPF e CNPJ</h4>
                  <p className="text-sm text-muted-foreground mb-3">Devem ser informados sem máscara ou caracteres especiais.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-1">Exemplos corretos:</p>
                      <code className="block bg-card p-2 rounded text-xs">CPF: 12345678909</code>
                      <code className="block bg-card p-2 rounded text-xs mt-1">CNPJ: 12345678000123</code>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Exemplos incorretos:</p>
                      <code className="block bg-destructive/20 p-2 rounded text-xs">CPF: 123.456.789-09</code>
                      <code className="block bg-destructive/20 p-2 rounded text-xs mt-1">CNPJ: 12.345.678/0001-23</code>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Host</h4>
                  <p className="text-sm text-muted-foreground mb-3">Aceita endereços IP ou URLs.</p>
                  <code className="block bg-card p-2 rounded text-xs">IP: 192.168.0.1</code>
                  <code className="block bg-card p-2 rounded text-xs mt-1">URL: https://api.pagamento.com.br</code>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Parâmetros JSON</h4>
                  <p className="text-sm text-muted-foreground mb-3">Devem ser codificados adequadamente para URLs.</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Exemplo correto:</p>
                    <code className="block bg-card p-2 rounded text-xs">{`providerParams={"terminal_id":"12345","merchant_id":"67890"}`}</code>
                    <p className="text-sm font-semibold mt-2">Codificado para URL:</p>
                    <code className="block bg-card p-2 rounded text-xs">{`providerParams=%7B%22terminal_id%22%3A%2212345%22%2C%22merchant_id%22%3A%2267890%22%7D`}</code>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Data e Hora</h4>
                  <p className="text-sm text-muted-foreground mb-3">O parâmetro dateTimeOfSale deve ser informado como timestamp em milissegundos.</p>
                  <code className="block bg-card p-2 rounded text-xs">dateTimeOfSale=1717401600000</code>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">Valores Booleanos</h4>
                  <p className="text-sm text-muted-foreground mb-3">Aceitam valores "true" ou "false" como strings.</p>
                  <code className="block bg-card p-2 rounded text-xs">autoPrintReceipt=true</code>
                  <code className="block bg-card p-2 rounded text-xs mt-1">autoConfirm=false</code>
                </div>
              </div>
            </div>

            {/* Processando Resultados */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Processando Resultados</h3>
              <p className="text-muted-foreground mb-4">
                Após a operação ser concluída, o PaykitDeeplink retorna um resultado que pode ser processado pela aplicação que originou a chamada. Os resultados são fornecidos como extras em um Intent, onde a chave é <code className="text-primary bg-accent/20 px-2 py-1 rounded">result</code>.
              </p>
              
              <h4 className="font-semibold mb-3">Dependendo do tipo de operação, o resultado pode conter:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <code className="text-accent">PaymentResult</code> - Para operações de pagamento (crédito, débito, voucher, etc.)</li>
                <li>• <code className="text-accent">ActivationResult</code> - Para operações de ativação</li>
                <li>• <code className="text-accent">CancelResult</code> - Para operações de cancelamento</li>
                <li>• <code className="text-accent">TransactionQueryResult</code> - Para consultas de transação</li>
                <li>• <code className="text-accent">PrintResult</code> - Para operações de impressão</li>
                <li>• <code className="text-accent">QueryReportResult</code> - Para consultas de relatórios</li>
                <li>• <code className="text-accent">Boolean</code> - Para operações de confirmação/desfazer transação pendente</li>
              </ul>
            </div>

            {/* Exemplos de Implementação */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Exemplos de Implementação</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-accent">1. Implementação com URI</h4>
                  <p className="text-sm text-muted-foreground mb-3">Para implementar a chamada de um deeplink para pagamento com cartão de crédito usando URI:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`val uri = Uri.parse("paykit://payment")
    .buildUpon()
    .appendQueryParameter("paymentType", "credit")
    .appendQueryParameter("amount", "1000") // R$ 10,00
    .appendQueryParameter("billOfSale", "PEDIDO123")
    .appendQueryParameter("installments", "1")
    .appendQueryParameter("autoPrintReceipt", "true")
    .build()

val intent = Intent(Intent.ACTION_VIEW, uri)
startActivityForResult(intent, REQUEST_CODE_PAYMENT)`}</code></pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-accent">2. Implementação com Intent</h4>
                  <p className="text-sm text-muted-foreground mb-3">Alternativamente, você pode implementar usando diretamente o Intent com extras:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`val intent = Intent(Intent.ACTION_VIEW)
intent.setPackage("com.linx.paykit.example") // Pacote da aplicação de pagamento
intent.setData(Uri.parse("paykit://payment"))
intent.putExtra("paymentType", "credit")
intent.putExtra("amount", "1000") // R$ 10,00
intent.putExtra("billOfSale", "PEDIDO123")
intent.putExtra("installments", "1")
intent.putExtra("autoPrintReceipt", "true")
startActivityForResult(intent, REQUEST_CODE_PAYMENT)`}</code></pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Processando o resultado:</h4>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    if (requestCode == REQUEST_CODE_PAYMENT && resultCode == Activity.RESULT_OK) {
        val result = data?.getParcelableExtra<ParcelablePaymentResult>("result")
        // Processar o resultado da transação
        val transactionId = result?.paymentResult?.id
        val amount = result?.paymentResult?.amount
        val success = result?.paymentResult?.status == TransactionStatus.COMPLETED
        // ... outros dados conforme necessário
    }
}`}</code></pre>
                </div>
              </div>
            </div>

            {/* Biblioteca de Apoio */}
            <div className="card p-8 shadow-card mb-6">
              <h3 className="text-2xl font-bold mb-6">Biblioteca de Apoio ao Desenvolvedor</h3>
              <p className="text-muted-foreground mb-6">
                O SDK disponibiliza classes auxiliares na biblioteca <code className="text-primary bg-accent/20 px-2 py-1 rounded">com.linx.paykit.common.deeplink.parameters</code> no pacote <code className="text-primary bg-accent/20 px-2 py-1 rounded">SDKPayServices.common</code> para facilitar a integração com o PaykitDeeplink.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">DeeplinkParameter</h4>
                  <p className="text-sm text-muted-foreground mb-3">Contém todas as definições dos parâmetros suportados como uma enumeração:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`enum class DeeplinkParameter(val key: String, val value: String? = null) {
    SCHEME("scheme", "paykit"),
    AUTOMATION_CNPJ("automationCnpj"),
    STORE_CNPJ("storeCnpj"),
    ACTIVATION_CODE("activationCode"),
    HOST("host", "payment"),
    // ... outros parâmetros
}

// Uso
intent.putExtra(DeeplinkParameter.AMOUNT.key, "10.50")`}</code></pre>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">DeeplinkExtensions</h4>
                  <p className="text-sm text-muted-foreground mb-3">Fornece métodos de extensão para facilitar a extração e processamento de parâmetros:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`// Exemplo de uso dos métodos de extensão
val amount = intent.extractAmount()
val cpf = intent.extractCpf()
val providerParams = intent.extractProviderParams()
val orderItems = intent.extractOrderItems()`}</code></pre>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">TransactionParameterBuilder</h4>
                  <p className="text-sm text-muted-foreground mb-3">Permite criar facilmente diferentes tipos de parâmetros:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`// Criando parâmetros a partir de um Intent
val builder = TransactionParameterBuilder.fromUri(intent)

// Construindo diferentes tipos de parâmetros
val creditParams = builder.buildCreditParameters()
val debitParams = builder.buildDebitParameters()
val cancelParams = builder.buildCancelParameter()

// Ou usando método genérico
val params = builder.build<CreditParameters>()`}</code></pre>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3 text-accent">PaymentTypeOption e TransactionTypeOption</h4>
                  <p className="text-sm text-muted-foreground mb-3">Oferecem abstrações seguras para trabalhar com tipos:</p>
                  <pre className="bg-card p-4 rounded text-sm overflow-x-auto"><code>{`// Convertendo string para PaymentTypeOption
val paymentTypeOption = PaymentTypeOption.fromString("credit")

// Convertendo string para TransactionTypeOption
val transactionTypeOption = TransactionTypeOption.fromString("at_sight")`}</code></pre>
                </div>
              </div>
            </div>

            {/* Observações Importantes */}
            <div className="card p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Observações Importantes</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Todos os valores monetários podem ser fornecidos como valores inteiros em centavos (ex: "1000" para R$ 10,00) ou como valores decimais com ponto (ex: "10.25" para R$ 10,25).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Se o parâmetro installments não for informado ou for inválido, o sistema utilizará o valor configurado pela adquirente ou o comportamento padrão definido pelo provedor de pagamento.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Para parâmetros do tipo JSON (providerParams, orderItems), utilize a codificação adequada para URLs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Verifique com o provedor de pagamento quais são os parâmetros específicos exigidos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">O parâmetro transactionType pode variar dependendo do paymentType selecionado.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Os itens do pedido podem ser enviados em formato JSON ou em formato delimitado.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Alguns tipos de operação podem não estar disponíveis, dependendo da configuração do SDK.</p>
                </div>
              </div>
            </div>
          </section>

          {/* O que há de novo */}
          <section id="novidades" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">O que há de novo?</h2>
            <div className="card p-8 shadow-card">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Novo</span>
                    <span className="text-sm text-muted-foreground">Versão 3.0</span>
                  </div>
                  <h4 className="font-semibold mb-2">Suporte a múltiplas adquirentes</h4>
                  <p className="text-muted-foreground">
                    Agora o SDK Único oferece suporte completo para 10+ adquirentes diferentes, permitindo maior flexibilidade nas integrações.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Melhoria</span>
                    <span className="text-sm text-muted-foreground">Versão 2.8</span>
                  </div>
                  <h4 className="font-semibold mb-2">Performance aprimorada</h4>
                  <p className="text-muted-foreground">
                    Otimizações significativas no processamento de transações, reduzindo o tempo de resposta em até 40%.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Feature</span>
                    <span className="text-sm text-muted-foreground">Versão 2.5</span>
                  </div>
                  <h4 className="font-semibold mb-2">Integração DeepLink</h4>
                  <p className="text-muted-foreground">
                    Nova funcionalidade de integração via DeepLink para facilitar a comunicação entre aplicações.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Terminais homologados */}
          <section id="terminais-homologados" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Terminais homologados</h2>
            
            <Tabs defaultValue="terminals" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="terminals">Lista de Terminais</TabsTrigger>
                <TabsTrigger value="compatibility">Retrocompatibilidade</TabsTrigger>
              </TabsList>

              <TabsContent value="terminals" className="space-y-8">
                {/* SmartPOS */}
                <div className="card p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">SmartPOS</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Modelo</th>
                      <th className="text-left p-3 font-semibold">Adquirentes</th>
                      <th className="text-left p-3 font-semibold">Versão SDK</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiP2} alt="TecToy P2-B" className="w-16 h-16 object-contain" />
                          <div>
                            <div className="font-medium">TecToy P2-B</div>
                            <div className="text-sm text-muted-foreground">(Android 7)</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoA8} alt="Ingenico APOS A8" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico APOS A8</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecGpos780} alt="Gertec GPOS780" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec GPOS780</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecGpos760} alt="Gertec GPOS760" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec GPOS760</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Tribanco</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoDx8000} alt="Ingenico DX8000" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico DX8000</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoDx4000} alt="Ingenico DX4000" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico DX4000</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-muted text-xs rounded">-</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">-</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-semibold">DEV</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={positivoL400} alt="Positivo L400" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Positivo L400</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={adyenS1f2} alt="Adyen S1F2" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Adyen S1F2</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-muted text-xs rounded">-</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">-</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-semibold">DEV</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pinpad Bluetooth */}
            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Pinpad Bluetooth</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Modelo</th>
                      <th className="text-left p-3 font-semibold">Adquirentes</th>
                      <th className="text-left p-3 font-semibold">Versão SDK</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecMobiPin10} alt="Gertec MOBI PIN10" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec MOBI PIN10</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecMp15} alt="Gertec MP15" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec MP15</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoIcmp} alt="Ingenico ICMP" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico ICMP</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={paxD180} alt="PAX D180" className="w-16 h-16 object-contain" />
                          <div className="font-medium">PAX D180</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={paxD200} alt="PAX D200" className="w-16 h-16 object-contain" />
                          <div className="font-medium">PAX D200</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={newlandMe30s} alt="Newland ME30S" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Newland ME30S</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pinpad USB */}
            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Pinpad USB</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Modelo</th>
                      <th className="text-left p-3 font-semibold">Adquirentes</th>
                      <th className="text-left p-3 font-semibold">Versão SDK</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecPpc920} alt="Gertec PPC-920" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec PPC-920</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecPpc930} alt="Gertec PPC-930" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec PPC-930</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecPpc940} alt="Gertec PPC-940" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec PPC-940</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoL300} alt="Ingenico LANE-3000" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico LANE-3000</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={ingenicoL3600} alt="Ingenico LANE-3600" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Ingenico LANE-3600</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Cielo</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Rede</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Getnet</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Banrisul</span>
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Safrapay</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={paxD140} alt="PAX D140" className="w-16 h-16 object-contain" />
                          <div className="font-medium">PAX D140</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 bg-primary/10 text-xs rounded">Stone</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Terminais de Autoatendimento */}
            <div className="card p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Terminais de Autoatendimento</h3>
              <p className="text-muted-foreground mb-6">
                Os totems usam Pinpad USB e vão seguir as adquirentes homologadas pelo modelo de Pinpad utilizado.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Modelo</th>
                      <th className="text-left p-3 font-semibold">Versão SDK</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiD2} alt="TecToy D2" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy D2</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiD2Mini} alt="TecToy D2 Mini" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy D2 Mini</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiK2} alt="TecToy K2" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy K2</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiK2Mini} alt="TecToy K2 Mini" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy K2 Mini</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiT2Mini} alt="TecToy T2 Mini" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy T2 Mini</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={sunmiT2} alt="TecToy T2" className="w-16 h-16 object-contain" />
                          <div className="font-medium">TecToy T2</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecGs300} alt="Gertec GS300" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec GS300</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={gertecSk210} alt="Gertec SK-210" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Gertec SK-210</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={elginMk15} alt="Elgin MK15" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Elgin MK15</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-accent/50 transition-smooth">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={elginM10Pro} alt="Elgin M10-PRO" className="w-16 h-16 object-contain" />
                          <div className="font-medium">Elgin M10-PRO</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">2.0.0.92</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">OK</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              </TabsContent>

              <TabsContent value="compatibility" className="space-y-6">
                {/* Requisitos do Sistema Operacional */}
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Requisitos do Sistema Operacional</h3>
                  <p className="text-muted-foreground mb-4">
                    O <strong>SDK Único</strong> é desenvolvido nativamente para Android, sendo necessário que sua aplicação também seja Android ou possua uma interface/plugin que permita a comunicação se for híbrida. A versão mínima suportada do Android é a <strong>5.0+ (API 21)</strong> ou superior.
                  </p>
                </div>

                {/* Versões Android dos Terminais */}
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Versões Android dos Terminais</h3>
                  <p className="text-muted-foreground mb-4">
                    Os terminais compatíveis possuem diferentes versões do sistema operacional, conforme definido pelo fabricante:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Terminal</th>
                          <th className="text-center p-3 font-semibold">Stone</th>
                          <th className="text-center p-3 font-semibold">TEF</th>
                          <th className="text-center p-3 font-semibold">Rede</th>
                          <th className="text-center p-3 font-semibold">Getnet</th>
                          <th className="text-center p-3 font-semibold">PagSeguro</th>
                          <th className="text-center p-3 font-semibold">Cielo</th>
                          <th className="text-center p-3 font-semibold">Adyen</th>
                          <th className="text-center p-3 font-semibold">Vero</th>
                          <th className="text-center p-3 font-semibold">Sicoob</th>
                          <th className="text-center p-3 font-semibold">Sicredi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">SUNMI P2 v7.1</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">GPOS 700: v5.1</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">GPOS 700X: v8.1</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Positivo L400: v11</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Positivo L300: v7.1</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">APOS A8: v5.1</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Verifone X990: v10</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Ingenico DX8000: v10</td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Saturn S1F2: v10</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center">✔️</td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                          <td className="p-3 text-center"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      "✔️" indica que o terminal é compatível com a adquirente através do SDK Único.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      É essencial desenvolver com retrocompatibilidade para a versão mínima (Android 5.0) a fim de garantir o funcionamento em todos os modelos.
                    </p>
                  </div>
                </div>

                {/* Versões das bibliotecas do SDK Único */}
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Versões das bibliotecas do SDK Único</h3>
                  <p className="text-muted-foreground mb-4">
                    Para dar suporte a integradores com versões mais antigas do Gradle e Android, possuímos 2 versões do SDK Único. Uma versão retrocompatível, e outra com bibliotecas atualizadas.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Biblioteca</th>
                          <th className="text-left p-3 font-semibold">Versão retrocompatível</th>
                          <th className="text-left p-3 font-semibold">Versão atualizada</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3"><code className="bg-accent/20 px-2 py-1 rounded text-sm">kotlin</code></td>
                          <td className="p-3">1.7.10</td>
                          <td className="p-3">1.9.22</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3"><code className="bg-accent/20 px-2 py-1 rounded text-sm">gradle</code></td>
                          <td className="p-3">6.9.4</td>
                          <td className="p-3">8.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Qualquer dependência que o SDK Único utilize internamente, vai respeitar sua determinada versão de <code className="bg-accent/20 px-1 rounded text-xs">gradle</code> e <code className="bg-accent/20 px-1 rounded text-xs">kotlin</code> e todo <code className="bg-accent/20 px-1 rounded text-xs">bytecode</code> está sendo transpilado para <strong>Java 8</strong>, assim conseguimos atender uma maior quantidade de integradores.
                    </p>
                  </div>
                </div>

                {/* Versões das bibliotecas das Adquirentes */}
                <div className="card p-8 shadow-card">
                  <h3 className="text-2xl font-bold mb-4">Versões das bibliotecas das Adquirentes do SDK Único</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Adquirente</th>
                          <th className="text-left p-3 font-semibold">Versão</th>
                          <th className="text-center p-3 font-semibold">Deeplink</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Stone</td>
                          <td className="p-3">-</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Linx TEF</td>
                          <td className="p-3">1.1.0-2203201805</td>
                          <td className="p-3 text-center">❌</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Rede</td>
                          <td className="p-3">4.0.6</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Getnet</td>
                          <td className="p-3">1.8.1</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Cielo</td>
                          <td className="p-3">2.0.1</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">PagSeguro*</td>
                          <td className="p-3">1.28.0</td>
                          <td className="p-3 text-center">❌</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Adyen**</td>
                          <td className="p-3">1.1.0-2203201805</td>
                          <td className="p-3 text-center">❌</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Vero</td>
                          <td className="p-3">1.01.06</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Sicoob (P2)</td>
                          <td className="p-3">1.09</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Sicoob (X990)</td>
                          <td className="p-3">1.09</td>
                          <td className="p-3 text-center">✔️</td>
                        </tr>
                        <tr className="border-b hover:bg-accent/50 transition-smooth">
                          <td className="p-3 font-medium">Sicredi</td>
                          <td className="p-3">3.218***</td>
                          <td className="p-3 text-center">❌</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="p-3 bg-accent/30 rounded">
                      <p className="text-sm text-muted-foreground">
                        "✔️" indica que a adquirente possui suporte a Deeplink.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        "❌" indica que a adquirente não possui suporte a Deeplink.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                      <p className="text-sm"><strong>*</strong> PagSeguro possui versão específica</p>
                      <p className="text-sm"><strong>**</strong> A Adyen possui suporte limitado à impressão; verifique os métodos suportados.</p>
                      <p className="text-sm"><strong>***</strong> Usa o SiTef. A versão indicada é a versão do mSiTef.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DevCenter;
