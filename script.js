const questions = [
    {
        question: 'Quais são as cinco instruções mais comuns e essenciais em um Dockerfile para construir uma imagem de contêiner?',
        options: [
            { text: 'FROM base_image:tag, RUN command, COPY source destination, EXPOSE port, CMD ["executable", "param1"]', isCorrect: true, rationale: 'Estas instruções são fundamentais para definir a imagem base, executar comandos, copiar arquivos, expor portas e especificar o comando padrão quando um contêiner inicia.' },
            { text: 'CREATE image, EXECUTE command, PASTE files, NETWORK port, START process', isCorrect: false, rationale: 'Estas são termos genéricos e não correspondem a instruções válidas de Dockerfile ou sua sintaxe específica.' },
            { text: 'BASE image, ACTION command, ADD_FILES source destination, PORT port, RUN_APP executable', isCorrect: false, rationale: 'Embora conceitualmente semelhantes, estas não são as palavras-chave corretas usadas em Dockerfiles.' },
            { text: 'IMAGE base_image, BUILD command, FILES source destination, BIND port, LAUNCH executable', isCorrect: false, rationale: 'Estas não são as instruções corretas do Dockerfile; elas usam sintaxe diferente.' }
        ],
        hint: 'Pense nas instruções que definem a imagem base, executam comandos, copiam arquivos, expõem portas e definem o comando padrão de execução.'
    },
    {
        question: 'Qual serviço do Azure é projetado especificamente para armazenar e gerenciar imagens de contêiner Docker de forma segura e privada?',
        options: [
            { text: 'Azure Container Registry (ACR)', isCorrect: true, rationale: 'ACR é o serviço Azure dedicado para armazenar e gerenciar imagens de contêiner Docker.' },
            { text: 'Azure Blob Storage', isCorrect: false, rationale: 'Azure Blob Storage é para armazenar dados não estruturados de uso geral, não especificamente imagens de contêiner em formato de registro.' },
            { text: 'Azure Data Lake Storage', isCorrect: false, rationale: 'Azure Data Lake Storage é para cargas de trabalho de análise de big data e não serve como um registro de imagens de contêiner.' },
            { text: 'Azure SQL Database', isCorrect: false, rationale: 'Azure SQL Database é um serviço de banco de dados relacional e não é usado para armazenar imagens de contêiner.' }
        ],
        hint: 'Pense no serviço de registro de contêiner do Azure.'
    },
    {
        question: 'Em relação ao Azure Container Instances (ACI), qual das seguintes afirmações é verdadeira?',
        options: [
            { text: 'Usar Azure Container Instances (ACI) é mais adequado para cargas de trabalho de longa duração e alta disponibilidade.', isCorrect: false, rationale: 'ACI é mais adequado para cargas de trabalho de curta duração, tarefas sob demanda e cenários de burst, não para alta disponibilidade e longa duração que geralmente exigem orquestradores.' },
            { text: 'ACI é uma ótima escolha para implantar e executar rapidamente contêineres sem a necessidade de provisionar e gerenciar máquinas virtuais subjacentes.', isCorrect: true, rationale: 'Esta afirmação descreve corretamente a principal vantagem do ACI: a simplicidade e a rapidez na execução de contêineres sem gerenciar a infraestrutura VM subjacente.' },
            { text: 'Para usar o ACI, é necessário primeiro configurar um cluster Kubernetes.', isCorrect: false, rationale: 'ACI é uma solução serverless para contêineres e não requer um cluster Kubernetes. Ele oferece a capacidade de executar contêineres isolados.' },
            { text: 'ACI não suporta a execução de múltiplos contêineres no mesmo grupo de contêineres.', isCorrect: false, rationale: 'ACI suporta a execução de múltiplos contêineres em um único grupo de contêineres, permitindo que eles compartilhem recursos e ciclo de vida.' }
        ],
        hint: 'Considere a principal proposta de valor do ACI em termos de gerenciamento de infraestrutura.'
    },
    {
        question: 'Quais são os principais benefícios de usar os Aplicativos de Contêiner do Azure para criar soluções conteinerizadas?',
        options: [
            { text: 'Dimensionamento automático, integração com Dapr e KEDA, e gerenciamento de revisões.', isCorrect: true, rationale: 'Azure Container Apps são projetados para microsserviços e oferecem suporte nativo para dimensionamento automático baseado em eventos (KEDA), Dapr e gerenciamento de revisões para implantações.' },
            { text: 'Gerenciamento manual de máquinas virtuais, suporte limitado a microsserviços e ausência de versionamento de aplicações.', isCorrect: false, rationale: 'Estas características são o oposto das funcionalidades chave dos Azure Container Apps, que abstraem o gerenciamento de VMs e são ideais para microsserviços com versionamento.' },
            { text: 'Foco exclusivo em aplicações web tradicionais e falta de suporte para comunicação assíncrona.', isCorrect: false, rationale: 'Azure Container Apps são adequados para uma ampla gama de workloads conteinerizadas, incluindo microsserviços com comunicação assíncrona, não apenas aplicações web tradicionais.' },
            { text: 'Requer a configuração e manutenção de um cluster Kubernetes completo pelo desenvolvedor.', isCorrect: false, rationale: 'Azure Container Apps é um serviço totalmente gerenciado que abstrai a complexidade do Kubernetes do desenvolvedor.' }
        ],
        hint: 'Pense nas funcionalidades que tornam os Aplicativos de Contêiner ideais para microsserviços e aplicações modernas.'
    },
    {
        question: 'Qual a principal finalidade de um Aplicativo de API do Serviço de Aplicativo do Azure?',
        options: [
            { text: 'É uma plataforma PaaS ideal para hospedar APIs RESTful, fornecendo recursos como CORS e integração com Azure API Management.', isCorrect: true, rationale: 'O Aplicativo de API do Serviço de Aplicativo é de fato otimizado para APIs RESTful e se integra bem com APIM e oferece CORS.' },
            { text: 'É um serviço de máquina virtual para execução de código backend.', isCorrect: false, rationale: 'Não, o Aplicativo de API é um serviço PaaS, não uma máquina virtual. Ele abstrai a infraestrutura subjacente.' },
            { text: 'É uma ferramenta para depuração local de APIs.', isCorrect: false, rationale: 'Embora possa ser usado para depuração, seu propósito principal é hospedar e servir APIs na nuvem, não apenas a depuração local.' },
            { text: 'Permite a criação de APIs apenas em linguagens .NET.', isCorrect: false, rationale: 'O Serviço de Aplicativo suporta várias linguagens e runtimes, incluindo Node.js, Python, Java, etc., além de .NET.' }
        ],
        hint: 'Pense em como este tipo de aplicativo se encaixa no desenvolvimento de APIs na nuvem.'
    },
    {
        question: 'Quais são as ferramentas e recursos essenciais para configurar e implementar diagnósticos e registros em Aplicativos Web do Serviço de Aplicativo do Azure?',
        options: [
            { text: 'Logs do aplicativo, logs do servidor web e Azure Application Insights.', isCorrect: true, rationale: 'Esses são os principais recursos para configurar e implementar diagnósticos e registros detalhados em Aplicativos Web do Serviço de Aplicativo do Azure.' },
            { text: 'Azure Storage Accounts e Azure Data Lake Storage.', isCorrect: false, rationale: 'Embora logs possam ser armazenados no Azure Storage, esses não são os serviços primários para *configurar* e *implementar* diagnósticos e registros do App Service.' },
            { text: 'Azure DevOps e GitHub Actions.', isCorrect: false, rationale: 'Esses são serviços de CI/CD, não ferramentas primárias para diagnósticos e registros *em tempo de execução* de uma aplicação web.' },
            { text: 'Azure AD e Azure Key Vault.', isCorrect: false, rationale: 'Esses são serviços de segurança e gerenciamento de segredos, não focados em diagnósticos e registros de aplicação.' }
        ],
        hint: 'Pense nas fontes de informação sobre o comportamento e a saúde da sua sua aplicação web.'
    },
    {
        question: 'Para implantar código e soluções em contêineres no Azure App Service, qual é a abordagem mais eficiente e escalável?',
        options: [
            { text: 'Usar FTP para cada nova versão ou reiniciar a instância manualmente.', isCorrect: false, rationale: 'Embora o FTP possa ser usado, ele não é um método de implantação contínua e escalável. Reiniciar a instância causa tempo de inatividade.' },
            { text: 'Configurar implantação contínua a partir de um repositório Git (GitHub/Azure Repos) e usar Docker Compose para múltiplos contêineres.', isCorrect: true, rationale: 'A implantação contínua via Git é uma prática recomendada, e o suporte a Docker Compose permite gerenciar aplicações multi-contêiner eficientemente.' },
            { text: 'Apenas copiar arquivos via File Explorer para a pasta wwwroot.', isCorrect: false, rationale: 'Isso é uma abordagem manual e não escalável, não recomendada para ambientes de produção ou equipes de desenvolvimento.' },
            { text: 'Criar uma nova máquina virtual para cada implantação.', isCorrect: false, rationale: 'O App Service é uma plataforma PaaS que abstrai a infraestrutura VM, e esta abordagem seria excessivamente complexa e cara.' }
        ],
        hint: 'Considere as opções que automatizam o processo e suportam aplicações baseadas em contêineres.'
    },
    {
        question: 'Ao configurar um Aplicativo Web do Serviço de Aplicativo do Azure, qual a importância do protocolo TLS e como ele deve ser tratado?',
        options: [
            { text: 'O protocolo TLS (SSL) é importante para criptografar o tráfego e garantir a segurança, e a imposição de HTTPS deve ser configurada.', isCorrect: true, rationale: 'A configuração do TLS/SSL e a imposição de HTTPS são cruciais para a segurança das aplicações web no App Service.' },
            { text: 'As configurações de API só podem ser definidas via arquivos de configuração locais na aplicação.', isCorrect: false, rationale: 'As configurações de API podem e devem ser gerenciadas via "Application settings" no portal do Azure ou via CLI, que as injeta como variáveis de ambiente.' },
            { text: 'Identidades gerenciadas são usadas apenas para autenticar usuários finais.', isCorrect: false, rationale: 'Identidades gerenciadas são para autenticar o *aplicativo* em outros serviços do Azure, não usuários finais.' },
            { text: 'Cadeias de conexão são gerenciadas automaticamente pelo Azure e não exigem configuração.', isCorrect: false, rationale: 'Cadeias de conexão devem ser configuradas no App Service para permitir que o aplicativo se conecte a bancos de dados e outros serviços.' }
        ],
        hint: 'Pense na segurança da comunicação entre o cliente e o seu aplicativo web.'
    },
    {
        question: 'Qual das seguintes afirmações sobre os planos de hospedagem do Azure Functions é verdadeira?',
        options: [
            { text: 'O dimensionamento automático no Azure Functions é suportado apenas no plano Premium.', isCorrect: false, rationale: 'O plano de consumo do Azure Functions também suporta dimensionamento automático, sendo o mais comum para cenários serverless.' },
            { text: 'O plano de consumo do Azure Functions permite escalar automaticamente com base na carga e cobra apenas pelo tempo de execução e consumo de memória, sendo ideal para workloads serverless puras.', isCorrect: true, rationale: 'Esta afirmação descreve corretamente as características e benefícios do plano de consumo, que é o coração do modelo serverless do Azure Functions.' },
            { text: 'O Azure Functions não pode ser executado em um plano de Serviço de Aplicativo existente.', isCorrect: false, rationale: 'O Azure Functions pode ser executado em um plano de Serviço de Aplicativo existente para ter maior controle sobre os recursos, embora perca alguns benefícios serverless.' },
            { text: 'Para usar o Azure Functions, é sempre necessário provisionar máquinas virtuais explicitamente.', isCorrect: false, rationale: 'O Azure Functions abstrai a gestão de máquinas virtuais, especialmente nos planos de consumo e Premium, sendo serverless.' }
        ],
        hint: 'Considere qual plano é o mais "serverless" e seus mecanismos de cobrança e escalabilidade.'
    },
    {
        question: 'Qual é o principal benefício de implementar associações (bindings) em Azure Functions?',
        options: [
            { text: 'As associações (bindings) do Azure Functions são uma forma declarativa de conectar funções a dados e serviços, eliminando a necessidade de escrever código de integração complexo.', isCorrect: true, rationale: 'As associações simplificam significativamente o desenvolvimento, permitindo que os desenvolvedores se concentrem na lógica de negócio, pois o runtime do Functions cuida da integração com os serviços.' },
            { text: 'As associações são usadas apenas para depurar funções localmente, não em produção.', isCorrect: false, rationale: 'As associações são um recurso fundamental tanto para o desenvolvimento local quanto para a execução em produção das Azure Functions.' },
            { text: 'Cada função do Azure Functions pode ter apenas uma associação de entrada e nenhuma associação de saída.', isCorrect: false, rationale: 'Uma função pode ter várias associações de entrada e/ou saída, além do seu gatilho, permitindo integração com múltiplos serviços.' },
            { text: 'Associações exigem que o desenvolvedor escreva um código complexo para autenticar e interagir com cada serviço.', isCorrect: false, rationale: 'O objetivo principal das associações é justamente *evitar* que o desenvolvedor precise escrever código complexo para autenticação e integração com os serviços. Isso é tratado pelo runtime.' }
        ],
        hint: 'Pense em como as associações simplificam a interação da sua função com outros serviços do Azure.'
    },
    {
        question: 'Descreva o propósito e um caso de uso para os seguintes gatilhos do Azure Functions: Gatilho HTTP, Gatilho de Temporizador e Gatilho de Blob Storage.',
        options: [
            { text: 'Gatilho HTTP: Invoca a função via requisições HTTP, ideal para APIs. Gatilho de Temporizador: Executa a função em intervalos agendados (CRON). Gatilho de Blob Storage: Dispara a função quando um novo blob é criado/modificado.', isCorrect: true, rationale: 'Esta opção descreve corretamente a função e o caso de uso principal de cada um dos gatilhos mencionados.' },
            { text: 'Gatilho HTTP: Somente para depuração local. Gatilho de Temporizador: Executa apenas uma vez. Gatilho de Blob Storage: Só funciona para blobs menores que 1MB.', isCorrect: false, rationale: 'As afirmações estão incorretas. Gatilho HTTP é para produção, Temporizador para repetições, e Blob Storage não tem restrição de tamanho para o gatilho.' },
            { text: 'Gatilho HTTP: Recebe mensagens de filas. Gatilho de Temporizador: Requer intervenção manual para cada execução. Gatilho de Blob Storage: Usado para enviar e-mails.', isCorrect: false, rationale: 'As descrições dos gatilhos estão incorretas. HTTP é para chamadas web, Temporizador para agendamento automático, e Blob Storage para eventos de armazenamento.' },
            { text: 'Gatilho HTTP: Necessita de uma VM dedicada. Gatilho de Temporizador: Só pode ser configurado por segundos. Gatilho de Blob Storage: Processa dados de bancos de dados.', isCorrect: false, rationale: 'As afirmações estão incorretas. HTTP não precisa de VM dedicada (serverless), Temporizador usa CRON para agendamentos flexíveis, e Blob Storage trabalha com dados de armazenamento de blobs, não bancos de dados.' }
        ],
        hint: 'Pense em como cada gatilho responde a diferentes tipos de eventos ou agendamentos.'
    },
    {
        question: 'Ao desenvolver soluções com Azure Cosmos DB e sua SQL API, qual o papel do SDK na execução de operações em contêineres e itens?',
        options: [
            { text: 'A SQL API é o modelo de dados padrão para operações CRUD e consultas usando sintaxe SQL-like, sendo ideal para dados estruturados e semi-estruturados.', isCorrect: true, rationale: 'A SQL API é a API nativa do Cosmos DB e permite interação com documentos JSON usando uma linguagem de consulta SQL aprimorada.' },
            { text: 'As operações CRUD em contêineres e itens só podem ser realizadas via portal do Azure, não pelo SDK.', isCorrect: false, rationale: 'O SDK do Cosmos DB é a principal ferramenta para realizar operações CRUD programaticamente em contêineres e itens.' },
            { text: 'O Cosmos DB suporta apenas o modelo de dados de grafo (Gremlin API).', isCorrect: false, rationale: 'O Cosmos DB é multimodelo, suportando SQL API, MongoDB API, Cassandra API, Gremlin API e Table API.' },
            { text: 'Throughput (RU/s) é uma métrica irrelevante para o desempenho das operações.', isCorrect: false, rationale: 'Throughput (RU/s) é a métrica principal para o desempenho e custo no Cosmos DB, representando o custo de operações em termos de recursos.' }
        ],
        hint: 'Pense em como o SDK permite que seu código interaja com o banco de dados e quais operações ele suporta.'
    },
    {
        question: 'Descreva o significado de "nível de consistência" no Azure Cosmos DB e forneça um exemplo para três níveis diferentes (Forte, Sessão, Final).',
        options: [
            { text: 'Forte: Maior consistência, ideal para dados financeiros. Sessão: Consistência garantida para a sessão do cliente, padrão para a maioria das aplicações. Final: Menor consistência, mas maior throughput, para dados não críticos.', isCorrect: true, rationale: 'Esta opção descreve corretamente as características e casos de uso de três níveis de consistência importantes no Cosmos DB.' },
            { text: 'O nível de consistência padrão para Cosmos DB é sempre "Forte".', isCorrect: false, rationale: 'O nível de consistência padrão para o Cosmos DB é "Sessão", não "Forte".' },
            { text: 'Não é possível configurar o nível de consistência por operação individualmente, apenas no nível da conta.', isCorrect: false, rationale: 'É possível substituir o nível de consistência padrão e definir um nível diferente para operações individuais usando o SDK do Cosmos DB.' },
            { text: 'Todos os níveis de consistência oferecem o mesmo trade-off entre latência e throughput.', isCorrect: false, rationale: 'Os níveis de consistência no Cosmos DB representam um trade-off explícito entre latência, throughput e consistência de dados.' }
        ],
        hint: 'Pense nos diferentes trade-offs entre consistência e desempenho que o Cosmos DB oferece.'
    },
    {
        question: 'Qual é o propósito do Change Feed no Azure Cosmos DB e como ele pode ser utilizado para implementar notificações de alterações?',
        options: [
            { text: 'O Change Feed do Cosmos DB fornece um log persistente de todas as alterações em um contêiner, permitindo processamento de dados em tempo real e integração com serviços como Azure Functions e Event Hubs.', isCorrect: true, rationale: 'Esta afirmação captura a essência e os principais casos de uso do Change Feed do Cosmos DB, incluindo sua capacidade de integração com funções serverless e hubs de eventos.' },
            { text: 'As notificações do Change Feed são usadas apenas para depurar problemas de desempenho do Cosmos DB.', isCorrect: false, rationale: 'O Change Feed é uma ferramenta para processamento de dados em tempo real e integração, embora possa auxiliar na depuração, não é sua finalidade principal.' },
            { text: 'Para usar o Change Feed, é necessário sondar (polling) o contêiner continuamente para novas alterações.', isCorrect: false, rationale: 'O Change Feed funciona de forma push, usando um processador de feed de alterações para capturar eventos de forma eficiente, sem a necessidade de sondagem manual.' },
            { text: 'O Change Feed registra apenas as exclusões de documentos, não as criações ou atualizações.', isCorrect: false, rationale: 'O Change Feed registra todas as operações de modificação de dados, incluindo criações, atualizações e exclusões.' }
        ],
        hint: 'Pense no conceito de um log de eventos para um banco de dados e como isso permite a reatividade.'
    },
    {
        question: 'No Azure Blob Storage, qual a diferença entre as propriedades de um blob e os metadados definidos pelo usuário, e como eles são usados?',
        options: [
            { text: 'As propriedades padrão fornecem informações como Content-Type e Last-Modified, enquanto os metadados são pares chave-valor definidos pelo usuário para informações personalizadas sobre o blob.', isCorrect: true, rationale: 'Esta opção descreve corretamente a distinção e a utilidade das propriedades padrão e dos metadados definidos pelo usuário para blobs no Azure Blob Storage.' },
            { text: 'Propriedades e metadados são a mesma coisa e são usados apenas para identificar o blob de forma única.', isCorrect: false, rationale: 'Propriedades e metadados são distintos; propriedades são predefinidas pelo sistema, enquanto metadados são customizáveis pelo usuário.' },
            { text: 'Os metadados não podem ser recuperados após o upload do blob.', isCorrect: false, rationale: 'Os metadados são armazenados com o blob e podem ser recuperados e atualizados a qualquer momento usando o SDK.' },
            { text: 'As propriedades só podem ser definidas na criação do blob e não podem ser alteradas.', isCorrect: false, rationale: 'Algumas propriedades (como Content-Type) podem ser alteradas após a criação do blob, e os metadados são projetados para serem mutáveis.' }
        ],
        hint: 'Pense nas informações que são inerentes ao arquivo versus as informações adicionais que você pode anexar.'
    },
    {
        question: 'Explique os níveis de acesso (Access Tiers) do Azure Blob Storage e o conceito de Assinaturas de Acesso Compartilhado (SAS) ao executar operações em dados.',
        options: [
            { text: 'Hot (acesso frequente), Cool (acesso infrequente), Archive (acesso raro). O uso de SAS permite acesso delegado e limitado a recursos sem expor chaves da conta.', isCorrect: true, rationale: 'Esta opção descreve corretamente os níveis de acesso e o propósito das Assinaturas de Acesso Compartilhado (SAS) para segurança e custo-benefício no Blob Storage.' },
            { text: 'Todos os níveis de acesso têm o mesmo custo e tempo de acesso.', isCorrect: false, rationale: 'Os níveis de acesso são projetados para otimizar custos com base na frequência de acesso, e têm diferentes custos de armazenamento e de acesso.' },
            { text: 'SAS é uma credencial permanente que deve ser usada por todos os usuários da conta de armazenamento.', isCorrect: false, rationale: 'SAS é uma credencial temporária e limitada, usada para delegar acesso de forma segura, não é uma credencial permanente para todos os usuários.' },
            { text: 'As operações de upload e download de blobs só podem ser feitas via portal do Azure.', isCorrect: false, rationale: 'As operações de upload e download de blobs são comumente realizadas programaticamente usando os SDKs do Azure Blob Storage.' }
        ],
        hint: 'Considere como diferentes padrões de acesso aos dados podem impactar o custo e a segurança.'
    },
    {
        question: 'Descreva as políticas de armazenamento e gerenciamento do ciclo de vida de dados no Azure Blob Storage, incluindo gerenciamento do ciclo de vida, imutabilidade e soft delete.',
        options: [
            { text: 'O gerenciamento do ciclo de vida move ou exclui blobs automaticamente com base em regras de tempo. A imutabilidade garante que os dados não possam ser alterados ou excluídos por um período. Soft delete retém blobs excluídos por um tempo para recuperação.', isCorrect: true, rationale: 'Esta opção descreve precisamente as funcionalidades e benefícios dessas políticas para otimização de custos, conformidade e proteção de dados no Blob Storage.' },
            { text: 'Políticas de ciclo de vida só podem ser aplicadas manualmente a cada blob.', isCorrect: false, rationale: 'As políticas de ciclo de vida são automatizadas e aplicadas a contêineres ou blobs que correspondem a regras, não individualmente e manualmente.' },
            { text: 'Imutabilidade de blob impede apenas a exclusão, mas permite modificações.', isCorrect: false, rationale: 'A imutabilidade de blob impede tanto modificações quanto exclusões durante o período de retenção configurado.' },
            { text: 'Soft delete é uma alternativa à versão do blob e não pode ser usado em conjunto.', isCorrect: false, rationale: 'Soft delete e versionamento são recursos complementares. Soft delete foca na recuperação de exclusões, enquanto o versionamento rastreia todas as alterações.' }
        ],
        hint: 'Pense em como o Azure Blob Storage ajuda a otimizar custos e a proteger seus dados ao longo do tempo.'
    },
    {
        question: 'Qual é o conceito e o principal benefício da implementação de identidades gerenciadas para recursos do Azure?',
        options: [
            { text: 'Identidades gerenciadas são identidades no Azure AD que os aplicativos podem usar para se autenticar em outros serviços do Azure sem precisar gerenciar credenciais, como senhas ou chaves.', isCorrect: true, rationale: 'Esta é a definição precisa de identidades gerenciadas, destacando seu principal benefício de eliminar o gerenciamento manual de credenciais em código.' },
            { text: 'Identidades gerenciadas são credenciais de usuário para acessar o portal do Azure.', isCorrect: false, rationale: 'Identidades gerenciadas são para serviços Azure se autenticarem em outros serviços, não para usuários acessarem o portal.' },
            { text: 'Elas exigem que o desenvolvedor armazene chaves secretas no código.', isCorrect: false, rationale: 'O objetivo das identidades gerenciadas é justamente eliminar a necessidade de armazenar credenciais no código, melhorando a segurança.' },
            { text: 'Identidades gerenciadas podem ser atribuídas apenas a máquinas virtuais.', isCorrect: false, rationale: 'Identidades gerenciadas podem ser atribuídas a uma ampla gama de serviços Azure, incluindo App Services, Functions, Logic Apps, etc., além de VMs.' }
        ],
        hint: 'Pense em como os serviços podem se autenticar no Azure sem a necessidade de credenciais explícitas.'
    },
    {
        question: 'Qual a principal diferença entre usar o Azure App Configuration e o Azure Key Vault para proteger dados de configuração de aplicativo?',
        options: [
            { text: 'Azure App Configuration é para configurações dinâmicas, enquanto Azure Key Vault é para segredos de alto valor (chaves, senhas, certificados).', isCorrect: true, rationale: 'Esta opção diferencia corretamente os dois serviços, com App Configuration para configurações gerais e Key Vault para gerenciamento de segredos críticos.' },
            { text: 'Ambos os serviços são usados para armazenar apenas chaves de criptografia.', isCorrect: false, rationale: 'App Configuration gerencia configurações de aplicativo, e Key Vault gerencia chaves, segredos e certificados, não apenas chaves de criptografia para ambos.' },
            { text: 'Azure App Configuration é um substituto direto para o Azure Key Vault.', isCorrect: false, rationale: 'Não são substitutos diretos, são complementares. App Configuration pode fazer referência a segredos no Key Vault.' },
            { text: 'O Azure Key Vault não deve ser usado para armazenar strings de conexão de banco de dados.', isCorrect: false, rationale: 'O Azure Key Vault é ideal para armazenar strings de conexão de banco de dados e outros segredos sensíveis.' }
        ],
        hint: 'Considere o propósito principal de cada serviço: um para configurações mais gerais e outro para dados sensíveis específicos.'
    },
    {
        question: 'Qual é o principal caso de uso para implementar soluções que usam o Azure Event Grid?',
        options: [
            { text: 'Automação de infraestrutura e processamento de dados em tempo real quando um evento ocorre, como um novo blob sendo carregado ou uma alteração em um recurso.', isCorrect: true, rationale: 'O Event Grid é ideal para cenários reativos e de automação, onde a lógica é disparada por eventos específicos em tempo real, como o upload de um blob.' },
            { text: 'Armazenamento de mensagens de longa duração em filas.', isCorrect: false, rationale: 'Isso é mais característico de serviços de fila como Azure Queue Storage ou Azure Service Bus, não do Event Grid, que foca no roteamento de eventos.' },
            { text: 'Ingestão de streaming de dados em larga escala de milhões de eventos por segundo.', isCorrect: false, rationale: 'Esta é a principal função do Azure Event Hubs, que é um serviço de ingestão de telemetria e streaming, não do Event Grid.' },
            { text: 'Gerenciamento de APIs RESTful e aplicação de políticas de tráfego.', isCorrect: false, rationale: 'Esta é a função principal do Azure API Management, um serviço para gerenciar o ciclo de vida das APIs, não do Event Grid.' }
        ],
        hint: 'Pense em como o Event Grid lida com a distribuição de eventos para reações automatizadas.'
    },
    {
        question: 'Qual a diferença fundamental entre Azure Queue Storage e Azure Service Bus para soluções baseadas em mensagem?',
        options: [
            { text: 'Queue Storage é uma fila simples e econômica para comunicação básica e desacoplamento de tarefas, enquanto Service Bus é um broker corporativo com recursos avançados (tópicos, sessões, transações) para integração empresarial complexa.', isCorrect: true, rationale: 'Esta é a distinção chave: Queue Storage para cenários mais simples e Service Bus para necessidades de mensagens mais robustas e complexas.' },
            { text: 'Queue Storage suporta tópicos e assinaturas, e Service Bus não.', isCorrect: false, rationale: 'É o oposto. Service Bus suporta tópicos e assinaturas, enquanto Queue Storage não.' },
            { text: 'Service Bus é para mensagens de longa duração, e Queue Storage é para mensagens de curta duração.', isCorrect: false, rationale: 'Ambos podem lidar com diferentes durações, mas o Service Bus oferece mais recursos para garantir a entrega e o processamento confiável de mensagens.' },
            { text: 'Ambos os serviços oferecem os mesmos recursos de entrega de mensagens e tratamento de erros.', isCorrect: false, rationale: 'Service Bus oferece recursos mais avançados, como dead-letter queueing, detecção de duplicatas e transações, que Queue Storage não possui.' }
        ],
        hint: 'Considere os cenários de uso e o nível de recursos para cada serviço de fila/mensagem.'
    },
    {
        question: 'Para o Azure API Management (APIM), qual a importância das políticas e cite dois exemplos de funcionalidades que elas podem implementar.',
        options: [
            { text: 'As políticas do APIM permitem alterar o comportamento das APIs em tempo de execução. Exemplos: Limitação de taxa (rate-limiting) para controlar o tráfego e cache para melhorar o desempenho.', isCorrect: true, rationale: 'As políticas são um recurso central do APIM para personalizar o comportamento da API, e rate-limiting e cache são exemplos clássicos de uso.' },
            { text: 'As políticas são usadas apenas para documentar as APIs no portal do desenvolvedor.', isCorrect: false, rationale: 'As políticas modificam o comportamento da API, enquanto a documentação é uma função separada do portal do desenvolvedor.' },
            { text: 'As políticas só podem ser aplicadas globalmente a todas as APIs.', isCorrect: false, rationale: 'As políticas podem ser aplicadas em diferentes escopos: global, produto, API e operação.' },
            { text: 'Políticas são scripts que precisam ser escritos em JavaScript ou Python.', isCorrect: false, rationale: 'As políticas são definidas em XML e usam uma sintaxe específica do APIM, não JavaScript ou Python.' }
        ],
        hint: 'Pense em como o APIM permite modificar o comportamento das APIs sem alterar o código do backend.'
    }
];

// Variáveis de estado do quiz
let currentQuestionIndex = 0;
let score = 0;
// Armazena as respostas do usuário para cada questão
// Formato: { questionIndex: { selectedOptionIndex: N, answeredCorrectly: true/false } }
let userAnswers = {}; 

// Elementos do DOM
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-btn');
const questionCounterSpan = document.getElementById('current-q');
const totalQuestionCountSpan = document.getElementById('total-q');
const approvalStatusParagraph = document.getElementById('approval-status');

// Botões de navegação e dica
const showHintButton = document.getElementById('show-hint-btn');
const backButton = document.getElementById('back-btn');
const hintDisplay = document.getElementById('hint-display');


// --- Funções do Quiz ---

// Carrega a pergunta atual na interface
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';

        const questionData = questions[currentQuestionIndex];
        
        // Atualiza o contador de perguntas
        questionCounterSpan.textContent = currentQuestionIndex + 1;
        totalQuestionCountSpan.textContent = questions.length;
        questionText.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
        
        optionsContainer.innerHTML = '';
        submitButton.disabled = true; // Desabilita o botão até uma opção ser selecionada
        submitButton.textContent = 'Verificar Resposta'; // Texto inicial do botão para verificar

        // Remove listeners para evitar múltiplos acionamentos
        submitButton.removeEventListener('click', nextQuestion); 
        submitButton.removeEventListener('click', checkAnswer);
        submitButton.addEventListener('click', checkAnswer); // Adiciona listener para verificar

        // Lógica de exibição e habilitação do botão "Voltar"
        if (currentQuestionIndex === 0) {
            backButton.style.display = 'none'; // Oculta na primeira pergunta
        } else {
            backButton.style.display = 'block'; // Mostra a partir da segunda
        }
        backButton.disabled = currentQuestionIndex === 0; // Desabilita na primeira

        // Oculta e limpa a dica
        hintDisplay.style.display = 'none';
        hintDisplay.textContent = '';
        showHintButton.style.display = 'block'; // Mostra o botão de dica
        showHintButton.disabled = false; // Habilita o botão de dica

        // Cria as opções da pergunta
        questionData.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.textContent = option.text;
            optionDiv.dataset.index = index;
            optionDiv.addEventListener('click', () => selectOption(optionDiv, index));
            optionsContainer.appendChild(optionDiv);
        });

        // Restaura o estado da resposta se já foi respondida
        if (userAnswers[currentQuestionIndex]) {
            restoreAnswerState(userAnswers[currentQuestionIndex]);
        }
    } else {
        showResult(); // Exibe o resultado se todas as perguntas foram respondidas
    }
}

// Seleciona uma opção e habilita o botão de submissão
function selectOption(optionDiv, index) {
    // Apenas permita a seleção se a pergunta ainda não foi respondida ou se está em modo de "revisão"
    if (!userAnswers[currentQuestionIndex] || userAnswers[currentQuestionIndex].selectedOptionIndex === undefined) {
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        optionDiv.classList.add('selected');
        selectedOption = index;
        submitButton.disabled = false;
    }
}

// Verifica a resposta do usuário
function checkAnswer() {
    if (selectedOption === null) return; // Nenhuma opção selecionada

    const questionData = questions[currentQuestionIndex];
    const correctOptionIndex = questionData.options.findIndex(opt => opt.isCorrect);

    // Desabilitar cliques nas opções após a verificação
    document.querySelectorAll('.option').forEach(opt => opt.style.pointerEvents = 'none');

    // Marcar resposta correta/incorreta
    const selectedOptionDiv = optionsContainer.children[selectedOption];
    const correctOptionDiv = optionsContainer.children[correctOptionIndex];

    let answeredCorrectly = false;
    if (questionData.options[selectedOption].isCorrect) {
        selectedOptionDiv.classList.add('correct');
        answeredCorrectly = true;
    } else {
        selectedOptionDiv.classList.add('incorrect');
        if (correctOptionDiv) {
            correctOptionDiv.classList.add('correct');
        }
    }

    // Armazenar a resposta do usuário para esta sessão
    userAnswers[currentQuestionIndex] = {
        selectedOptionIndex: selectedOption,
        answeredCorrectly: answeredCorrectly
    };
    
    // Se a resposta foi correta e não estava marcada como tal, incrementa o score
    // Isso previne que o score aumente ao voltar e avançar sem responder novamente
    if (answeredCorrectly && !questionData.answeredThisSession) {
        score++;
        questionData.answeredThisSession = true; // Marca que esta pergunta já contribuiu para o score
    } else if (!answeredCorrectly && questionData.answeredThisSession) {
        // Se a resposta se tornou incorreta (o que não deve acontecer se o fluxo for de "verificar" uma vez)
        // ou se o usuário muda a resposta de certa para errada (não permitido neste fluxo),
        // precisaríamos de uma lógica mais complexa para decrementar o score.
        // Neste modelo, o score só aumenta e não diminui.
    }


    // Exibir o rationale
    const rationaleDiv = document.createElement('div');
    rationaleDiv.classList.add('rationale');
    rationaleDiv.innerHTML = `**Justificativa:** ${questionData.options[correctOptionIndex].rationale}`;
    optionsContainer.appendChild(rationaleDiv);

    // Oculta o botão de dica e exibe a dica se não estiver visível (após a resposta)
    showHintButton.style.display = 'none';
    hintDisplay.textContent = `Dica: ${questionData.hint}`;
    hintDisplay.style.display = 'block';


    submitButton.textContent = 'Próxima Pergunta';
    submitButton.removeEventListener('click', checkAnswer);
    submitButton.addEventListener('click', nextQuestion);
    submitButton.disabled = false; // Garante que o botão esteja habilitado para ir para a próxima
}

// Restaura o estado da pergunta quando o usuário volta
function restoreAnswerState(answerState) {
    const questionData = questions[currentQuestionIndex];
    const options = optionsContainer.children;
    
    // Remove qualquer classe de feedback anterior para evitar duplicidade
    Array.from(options).forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

    // Seleciona a opção que o usuário escolheu
    if (answerState.selectedOptionIndex !== undefined && options[answerState.selectedOptionIndex]) {
        options[answerState.selectedOptionIndex].classList.add('selected');
    }

    // Marca a opção correta e a selecionada com feedback visual
    const correctOptionIndex = questionData.options.findIndex(opt => opt.isCorrect);
    if (correctOptionIndex !== -1 && options[correctOptionIndex]) {
        options[correctOptionIndex].classList.add('correct');
    }
    
    if (answerState.selectedOptionIndex !== undefined && !questionData.options[answerState.selectedOptionIndex].isCorrect) {
        options[answerState.selectedOptionIndex].classList.add('incorrect');
    }

    // Exibe a justificativa
    const existingRationale = optionsContainer.querySelector('.rationale');
    if (existingRationale) {
        existingRationale.remove();
    }
    const rationaleDiv = document.createElement('div');
    rationaleDiv.classList.add('rationale');
    rationaleDiv.innerHTML = `**Justificativa:** ${questionData.options[correctOptionIndex].rationale}`;
    optionsContainer.appendChild(rationaleDiv);

    // Desabilita cliques nas opções
    Array.from(options).forEach(opt => opt.style.pointerEvents = 'none');

    // Ajusta o botão de submissão para "Próxima Pergunta"
    submitButton.textContent = 'Próxima Pergunta';
    submitButton.removeEventListener('click', checkAnswer);
    submitButton.addEventListener('click', nextQuestion);
    submitButton.disabled = false; // Sempre habilitado para navegar

    // Exibe a dica
    hintDisplay.textContent = `Dica: ${questionData.hint}`;
    hintDisplay.style.display = 'block';
    showHintButton.style.display = 'none'; // Esconde o botão de dica
}


// Avança para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Volta para a pergunta anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Exibe a tela de resultados
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = questions.length;

    const percentage = (score / questions.length) * 100;
    const approvalThreshold = 70; // 70% para aprovação

    if (percentage >= approvalThreshold) {
        approvalStatusParagraph.textContent = `Parabéns! Você foi APROVADO(A) com ${percentage.toFixed(2)}% de acertos!`;
        approvalStatusParagraph.style.color = '#28a745'; // Verde
    } else {
        approvalStatusParagraph.textContent = `Que pena! Você obteve ${percentage.toFixed(2)}% de acertos. É necessário 70% para ser aprovado(a). Continue estudando!`;
        approvalStatusParagraph.style.color = '#dc3545'; // Vermelho
    }
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    userAnswers = {}; // Limpa todas as respostas salvas na sessão
    // Reseta o estado answeredThisSession para todas as perguntas
    questions.forEach(q => delete q.answeredThisSession);
    loadQuestion();
}

// --- Event Listeners ---
submitButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);
showHintButton.addEventListener('click', () => {
    hintDisplay.textContent = `Dica: ${questions[currentQuestionIndex].hint}`;
    hintDisplay.style.display = 'block';
    showHintButton.style.display = 'none'; // Esconde o botão de dica depois de mostrar
});
backButton.addEventListener('click', previousQuestion);

// Inicia o quiz ao carregar a página
loadQuestion();