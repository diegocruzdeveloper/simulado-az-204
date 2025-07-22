// --- Definição das Questões ---

// Perguntas para o EXAME 1 (24 Questões)
const questionsExam1 = [
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
    },
    {
        question: 'Você precisa criar um contêiner em um grupo de contêineres e montar um compartilhamento de arquivos do Azure como volume. Qual segmento de código você deve usar?',
        options: [
            { text: 'az container create -g MyResourceGroup --name myapp --image myimage:latest --command-line "cat /mnt/azfile/myfile" --azure-file-volume-share-name myshare --azure-file-volume-account-name mystorageaccount --azure-file-volume-account-key mystoragekey --azure-file-volume-mount-path /mnt/azfile', isCorrect: true, rationale: 'O segmento de código que inclui o parâmetro `--azure-file-volume-mount-path` e o parâmetro `--azure-file-volume-share-name` cria um contêiner em um grupo de contêineres e monta um compartilhamento de arquivos do Azure como volume.' },
            { text: 'az container create -g MyResourceGroup --name myapp --image myimage:latest --secrets-mount-path /mnt/secrets', isCorrect: false, rationale: 'Os segmentos de código que incluem o parâmetro `--secrets-mount-path` não montarão um compartilhamento de arquivos do Azure como volume.' },
            { text: 'az container create -g MyResourceGroup --name myapp --image myimage:latest --azure-file-volume-account-name mystorageaccount --azure-file-volume-mount-path /mnt/azfile', isCorrect: false, rationale: 'O segmento de código que não inclui o `--azure-file-volume-share-name` é inválido.' },
            { text: 'az container create -g MyResourceGroup --name myapp --image myimage:latest --volume-mount-path /mnt/azfile --volume-name myshare', isCorrect: false, rationale: 'Esta sintaxe não é a correta para montar um compartilhamento de arquivos do Azure File em ACI.' }
        ],
        hint: 'Para montar um compartilhamento de arquivos do Azure File em um contêiner ACI, você precisa especificar o nome da conta de armazenamento, a chave e o caminho de montagem.'
    },
    {
        question: 'Você precisa excluir uma imagem com a marca `dev/nginx:latest` de um registro de contêiner do Azure chamado `devregistry`. Qual segmento de código você deve usar?',
        options: [
            { text: 'az acr repository delete --name devregistry --image dev/nginx:latest', isCorrect: true, rationale: 'O segmento de código `acr repository delete --name devregistry --image dev/nginx:latest` excluirá a imagem de um registro de contêiner.' },
            { text: 'az acr repository delete --name devregistry --suffix latest', isCorrect: false, rationale: 'Os segmentos de código que incluem o parâmetro de sufixo devem ser usados se você estiver acessando o registro de uma assinatura diferente ou tiver permissão para acessar imagens, mas não permissão para gerenciar o recurso do Registro.' },
            { text: 'az acr repository delete --name devregistry --manifest dev/nginx:latest', isCorrect: false, rationale: 'Os segmentos de código que incluem os parâmetros `manifest` excluem o manifesto do artefato e não a imagem.' },
            { text: 'az acr delete --name devregistry --image dev/nginx:latest', isCorrect: false, rationale: 'O comando correto para gerenciar repositórios é `az acr repository`, não `az acr` diretamente para a imagem.' }
        ],
        hint: 'Pense no comando da CLI do Azure para operações de repositório no ACR.'
    },
    {
        question: 'Uma empresa usa Instâncias de Contêiner do Azure para um aplicativo. Você precisa garantir que os contêineres sejam reiniciados quando o processo terminar com um código de saída diferente de zero. O que você deve fazer?',
        options: [
            { text: 'Defina uma política de reinicialização de contêiner de `Always`.', isCorrect: true, rationale: 'Os contêineres no grupo de contêineres são sempre reiniciados com uma política `Always` em vigor, independentemente do código de saída. Isso garante que eles sejam reiniciados mesmo se o processo terminar com um código de saída diferente de zero (indicando falha).' },
            { text: 'Defina uma política de reinicialização de contêiner de `OnFailure`.', isCorrect: false, rationale: 'A política `OnFailure` reinicia os contêineres somente quando o processo termina com um código de saída diferente de zero, mas o requisito é "quando o processo terminar com um código de saída diferente de zero" que implica que deve ser sempre reiniciado em caso de falha, e "Always" cobre esse cenário de forma mais abrangente para qualquer término inesperado.' },
            { text: 'Implemente uma identidade gerenciada para o contêiner.', isCorrect: false, rationale: 'A execução de contêineres usando uma identidade gerenciada simplificaria o acesso aos recursos externos do Azure, mas isso não tem efeito sobre quando um contêiner é reiniciado.' },
            { text: 'Use contêineres de inicialização para o processo do aplicativo.', isCorrect: false, rationale: 'Os contêineres de inicialização destinam-se a executar a lógica de inicialização para contêineres de aplicativo, em execução até a conclusão antes do início dos contêineres do aplicativo, e não para gerenciar reinicializações pós-falha.' }
        ],
        hint: 'Considere as políticas de reinicialização disponíveis no ACI e qual garante a reinicialização em qualquer término de processo, incluindo falhas.'
    },
    {
        question: 'Um grupo de contêineres nas Instâncias de Contêiner do Azure tem vários contêineres. Os contêineres devem ser reiniciados quando o processo executado no grupo de contêineres for encerrado devido a um erro. Você precisa definir a política de reinicialização para o grupo de contêineres. Qual comando da CLI do Azure você deve usar?',
        options: [
            { text: 'az container create --resource-group myResourceGroup --name mycontainer --image mycontainerimage --restart-policy OnFailure', isCorrect: true, rationale: 'Ao criar um grupo de contêineres na ACI, você pode especificar uma das três configurações de política de reinicialização: Always, Never e OnFailure. Se `--restart-policy` for mencionado como `OnFailure`, os contêineres no grupo de contêineres serão reiniciados somente quando o processo executado no contêiner falhar (quando ele terminar com um código de saída diferente de zero).' },
            { text: 'az container restart --name mycontainer --resource-group myResourceGroup --no-wait', isCorrect: false, rationale: 'O comando `az container restart` é usado para reiniciar todos os contêineres em um grupo de contêineres, não para definir uma política de reinicialização para um grupo de contêineres.' },
            { text: 'az container update --name mycontainer --resource-group myResourceGroup --restart-policy OnFailure', isCorrect: false, rationale: 'Embora o `az container update` possa ser usado para algumas configurações, a política de reinicialização é geralmente definida na criação do grupo de contêineres para esse comportamento. A questão se refere a *definir* a política.' },
            { text: 'az container create --resource-group myResourceGroup --name mycontainer --image mycontainerimage --restart-policy Always', isCorrect: false, rationale: 'A política `Always` reiniciaria o contêiner independentemente do código de saída, o que é mais amplo que o requisito de reiniciar *apenas por erro*.' }
        ],
        hint: 'Para *definir* a política de reinicialização de um grupo de contêineres ACI para que reinicie apenas em caso de falha, qual comando de *criação* de contêiner e qual parâmetro de política você usaria?'
    },
    {
        question: 'Você gerencia a implantação de um Registro de Contêiner do Azure chamado `registry1` para uma empresa. Você precisa garantir que o `registry1` possa ser compartilhado entre múltiplos grupos na empresa, de modo a permitir o isolamento entre os grupos. O que você deve usar?',
        options: [
            { text: 'espaço para nome (namespace)', isCorrect: true, rationale: 'Um `namespace` permite a identificação de repositórios relacionados e propriedade do artefato usando nomes delimitados por barra, o que possibilita o isolamento e organização de imagens e artefatos entre diferentes grupos ou equipes dentro de um único registro de contêiner.' },
            { text: 'um repositório', isCorrect: false, rationale: 'Um repositório é uma coleção de imagens/artefatos com o mesmo nome, mas tags diferentes. Embora ajude a organizar, não fornece isolamento entre grupos da forma que um namespace pode.' },
            { text: 'uma tag', isCorrect: false, rationale: 'Uma tag é usada para especificar a versão de uma imagem e não fornece isolamento entre grupos.' },
            { text: 'uma camada', isCorrect: false, rationale: 'Imagens de contêiner consistem em camadas, usadas para otimizar o armazenamento e transferência, mas não para isolamento organizacional.' }
        ],
        hint: 'Para organizar e isolar logicamente coleções de imagens dentro de um único ACR para diferentes grupos, qual conceito de nomenclatura você usaria?'
    },
    {
        question: 'Sua empresa está desenvolvendo um novo aplicativo Web que será implantado como uma solução em contêineres no Azure. Espera-se que o aplicativo tenha cargas de trabalho flutuantes e precise estar altamente disponível. Você precisa criar uma solução que permita que o aplicativo seja dimensionado com base na demanda e se recupere de falhas automaticamente. Quais são as duas ações que você deve executar?',
        options: [
            { text: 'Implantar aplicativos conteinerizados em Aplicativos de Contêiner do Azure. e Publicar uma imagem de contêiner para o Registro de Contêiner do Azure.', isCorrect: true, rationale: 'A publicação da imagem do aplicativo no Registro de Contêiner do Azure permite que ela seja facilmente acessada e implantada nos serviços do Azure. Os Aplicativos de Contêiner do Azure são um serviço de contêiner sem servidor que dimensiona e recupera automaticamente de falhas, tornando-o adequado para aplicativos com cargas de trabalho flutuantes e requisitos de alta disponibilidade.' },
            { text: 'Publicar uma imagem de contêiner para o Registro de Contêiner do Azure. e Executar contêineres usando a Instância de Contêiner do Azure.', isCorrect: false, rationale: 'Embora publicar no ACR seja correto, executar contêineres usando a Instância de Contêiner do Azure (ACI) não fornece dimensionamento automático ou recuperação de falhas para workloads de produção e alta disponibilidade em larga escala.' },
            { text: 'Implantar aplicativos conteinerizados em Aplicativos Web do Serviço de Aplicativo do Azure. e Armazenar imagens de contêiner no Armazenamento de Blobs do Azure.', isCorrect: false, rationale: 'O Armazenamento de Blobs do Azure não foi projetado para armazenar imagens de contêiner (o ACR é). Embora o App Service possa hospedar contêineres, os Aplicativos de Contêiner do Azure são mais adequados para o cenário de microsserviços e dimensionamento baseado em evento.' },
            { text: 'Utilizar Azure Functions com gatilhos HTTP e Gerenciador de Tráfego do Azure.', isCorrect: false, rationale: 'Azure Functions é serverless, mas o cenário é sobre um *aplicativo web conteinerizado*. O Gerenciador de Tráfego não provê a orquestração e recuperação automática da aplicação conteinerizada em si.' }
        ],
        hint: 'Pense em qual serviço do Azure é mais adequado para hospedar aplicações conteinerizadas com dimensionamento automático e alta disponibilidade, e onde você armazenaria as imagens.'
    },
    {
        question: 'Você cria um aplicativo Web do Azure localmente. O aplicativo Web consiste em um pacote ZIP. Você precisa implantar o aplicativo Web usando a CLI do Azure. A implantação deve reduzir a probabilidade de arquivos bloqueados. O que você deve fazer?',
        options: [
            { text: 'Execute `az webapp deploy` em um slot de preparo com a troca automática habilitada.', isCorrect: true, rationale: 'O uso de um slot de produção e preparo com a troca automática habilitada reduz a probabilidade de arquivos bloqueados. Durante uma troca, os arquivos são primeiro copiados e preparados no slot de destino antes da troca real, minimizando o tempo de inatividade e problemas de bloqueio.' },
            { text: 'Execute `az webapp deploy` especificando `--clean true`.', isCorrect: false, rationale: 'Se `--clean true` for usada, a pasta de destino será limpa, mas isso não terá efeito sobre a probabilidade de arquivos bloqueados durante a implantação, embora possa ajudar com arquivos residuais.' },
            { text: 'Reinicie o aplicativo Web após a implantação usando `az webapp restart`.', isCorrect: false, rationale: 'É bom reiniciar o aplicativo após a implantação. Isso, no entanto, é o comportamento padrão de uma implantação ZIP e não tem nenhum efeito sobre a probabilidade reduzida de arquivos bloqueados durante a implantação, já que o bloqueio pode ocorrer *durante* a cópia dos arquivos.' },
            { text: 'Use o parâmetro `--timeout` com um valor alto para dar tempo aos arquivos para desbloquear.', isCorrect: false, rationale: 'O parâmetro `--timeout` não tem efeito sobre a probabilidade de arquivos bloqueados. Ele controla apenas o tempo máximo de espera para a conclusão do comando.' }
        ],
        hint: 'Para implantações de aplicativos web que minimizem o bloqueio de arquivos e eliminem o tempo de inatividade, qual funcionalidade do App Service é mais eficaz?'
    },
    {
        question: 'Você gerencia os slots de implantação de preparo e produção de um aplicativo Web do Serviço de Aplicativo do Azure chamado `app1`. Você precisa garantir que uma cadeia de conexão não seja trocada quando a troca for executada. Qual configuração você deve usar?',
        options: [
            { text: 'Configuração do slot de implantação', isCorrect: true, rationale: 'Marcar uma configuração como uma configuração de slot de implantação a mantém aderida a esse slot de implantação. Por exemplo, uma configuração de aplicativo marcada como uma configuração de slot de implantação no `app1/preparo` sempre ficará com o `app1/preparo` e nunca será movida para `app1` (produção) durante uma troca.' },
            { text: 'Configuração do Centro de Implantação', isCorrect: false, rationale: 'A configuração do Centro de Implantação é usada para configurar a implantação contínua e a implantação manual, não para fixar configurações a um slot.' },
            { text: 'Identidade gerenciada', isCorrect: false, rationale: 'A identidade gerenciada fornece uma identidade para os aplicativos usarem ao conectarem-se a recursos que suportam a autenticação do Microsoft Entra ID. Não está relacionada à troca de configurações entre slots.' },
            { text: 'Escala vertical (Scale Up)', isCorrect: false, rationale: 'A escala vertical garante que o aplicativo Web tenha o direito de obter CPU, memória, espaço em disco e recursos extras, como máquinas virtuais dedicadas, domínios e certificados personalizados, slots de preparo e colocação em escala automática. Não está relacionada à troca de configurações entre slots de implantação.' }
        ],
        hint: 'Para que uma configuração (como uma cadeia de conexão) permaneça vinculada a um slot específico e não seja trocada com outros slots, o que você deve fazer com essa configuração?'
    },
    {
        question: 'Você gerencia uma implantação de várias instâncias de um aplicativo Web do Serviço de Aplicativo do Azure chamado `app1`. Você precisa garantir que um aplicativo cliente seja roteado para a mesma instância durante a vida útil da sessão. Qual configuração de plataforma você deve usar?',
        options: [
            { text: 'Afinidade ARR', isCorrect: true, rationale: 'Em uma implantação de várias instâncias, a configuração de Afinidade ARR garante que um aplicativo cliente seja roteado para a mesma instância durante a vida útil da sessão (também conhecido como "sticky sessions" ou "sessões pegajosas").' },
            { text: 'Versão HTTP', isCorrect: false, rationale: 'A versão HTTP (ex: HTTP/2) se refere ao protocolo de comunicação e não garante que um cliente seja roteado para a mesma instância.' },
            { text: 'WebSockets', isCorrect: false, rationale: 'WebSockets é um protocolo de comunicação full-duplex e não está diretamente relacionado à afinidade de sessão para roteamento de clientes.' },
            { text: 'Sempre ativado (Always On)', isCorrect: false, rationale: 'Sempre ativado mantém o aplicativo carregado mesmo quando não há tráfego, evitando "cold starts", mas não garante afinidade de sessão.' }
        ],
        hint: 'Em ambientes com múltiplas instâncias de um aplicativo web, qual configuração garante que um usuário continue interagindo com a mesma instância do servidor durante sua sessão?'
    },
    {
        question: 'Você desenvolve um aplicativo do Serviço de Aplicativo hospedado na Plataforma Windows. Os usuários relatam que o aplicativo está falhando. Você precisa começar a solucionar problemas do aplicativo inspecionando uma cópia da página retornada quando o código de retorno HTTP for maior que 400. Qual tipo de log você deve examinar?',
        options: [
            { text: 'erro detalhado', isCorrect: true, rationale: 'O log de erros detalhado contém cópias das páginas de erro, produzidas em resposta a códigos HTTP maiores que 400, que teriam sido enviadas aos clientes. Essas páginas não são enviadas por motivos de segurança, mas são registradas para depuração.' },
            { text: 'log do servidor Web', isCorrect: false, rationale: 'O log do servidor Web mostra informações sobre a solicitação HTTP bruta (método, bytes, agente de usuário cliente), mas não uma cópia das páginas de erro detalhadas.' },
            { text: 'log do aplicativo', isCorrect: false, rationale: 'O log do aplicativo é específico do aplicativo, registrando informações que o código do aplicativo grava, mas não necessariamente cópias das páginas de erro HTTP.' },
            { text: 'log de implantação', isCorrect: false, rationale: 'O log de implantação armazena informações para diagnosticar os motivos de uma implantação com falha, não erros em tempo de execução HTTP.' }
        ],
        hint: 'Para ver o conteúdo exato das páginas de erro HTTP (códigos 4xx ou 5xx) que seriam enviadas aos clientes, qual tipo de log você procuraria?'
    },
    {
        question: 'Você planeja criar um aplicativo do Azure Functions chamado `app1`. Você precisa garantir que o `app1` atenda aos seguintes requisitos: Dar suporte à colocação em escala automática; Ter um comportamento de colocação em escala baseada em evento; Fornecer um modelo de preço sem servidor. Qual plano de hospedagem você deve usar?',
        options: [
            { text: 'Consumo', isCorrect: true, rationale: 'O plano de hospedagem de Consumo atende a todos os requisitos: ele dá suporte à colocação em escala automática (escalando conforme a demanda), tem comportamento de colocação em escala baseada em eventos (disparado por mensagens, HTTP, etc.) e fornece um modelo de preços sem servidor (você paga apenas pelo tempo de execução e consumo de memória).' },
            { text: 'Serviço de Aplicativo', isCorrect: false, rationale: 'O plano de Serviço de Aplicativo dá suporte à colocação em escala automática, mas não fornece um modelo de preços sem servidor e seu comportamento de colocação em escala não é puramente baseado em evento como o plano de Consumo.' },
            { text: 'Ambiente do Serviço de Aplicativo', isCorrect: false, rationale: 'O Ambiente do Serviço de Aplicativo (ASE) é uma implantação isolada do App Service, que oferece isolamento de rede e alta escalabilidade, mas não se encaixa no modelo de preços sem servidor e escalabilidade baseada em evento como o plano de Consumo.' },
            { text: 'Functions Premium', isCorrect: false, rationale: 'O plano Functions Premium oferece pré-aquecimento de instâncias e conectividade VNet, e suporte à colocação em escala automática, mas tem um custo base (não é puramente "sem servidor" em termos de preço de ociosidade) e sua colocação em escala é baseada em desempenho, não puramente em eventos.' }
        ],
        hint: 'Pense no plano de hospedagem do Azure Functions que é o mais "serverless" em termos de custo e escalabilidade baseada em demanda real.'
    },
    {
        question: 'Você tem um Azure Key Vault chamado `MyVault`. Você precisa alterar as configurações do Serviço de Aplicativo do Azure usando uma referência de cofre de chaves para acessar um segredo chamado `MyConnection` do `MyVault`. Qual segmento de código você deve usar?',
        options: [
            { text: '@Microsoft.KeyVault(SecretName=MyConnection;VaultName=MyVault)', isCorrect: true, rationale: 'A sintaxe `@Microsoft.KeyVault(SecretName=<secret-name>;VaultName=<vault-name>)` é o formato correto para uma referência de Key Vault nas configurações de aplicativo do Serviço de Aplicativo do Azure. Isso permite que o aplicativo recupere o segredo de forma segura sem codificá-lo diretamente.' },
            { text: '@Microsoft.KeyVault(Secret=MyConnection,Vault=MyVault)', isCorrect: false, rationale: 'Esta sintaxe usa parâmetros inválidos (Secret e Vault) e vírgula em vez de ponto e vírgula.' },
            { text: '@KeyVault(Secret=MyConnection;Vault=MyVault)', isCorrect: false, rationale: 'Esta sintaxe está incorreta porque falta o prefixo `Microsoft.` e usa parâmetros inválidos.' },
            { text: '@AzureKeyVault(SecretName=MyConnection;VaultName=MyVault)', isCorrect: false, rationale: 'Esta sintaxe usa o prefixo `AzureKeyVault` que não é o formato correto; o correto é `Microsoft.KeyVault`.' }
        ],
        hint: 'Pense na sintaxe de referência específica para acessar segredos do Azure Key Vault a partir das configurações do aplicativo no Azure App Service.'
    },
    {
        question: 'Você planeja criar um aplicativo do Azure Functions baseado em script em C#. Você precisa configurar o gatilho e as associações para as funções do aplicativo do Azure Functions. O que você deve fazer?',
        options: [
            { text: 'Crie um arquivo `function.json` para cada função.', isCorrect: true, rationale: 'Ao usar linguagens de script, como script C# ou JavaScript, o arquivo `function.json` para cada função contém suas definições de gatilhos e associações e precisa ser criado explicitamente no diretório da função.' },
            { text: 'Modifique o arquivo `host.json` para cada função.', isCorrect: false, rationale: 'O arquivo `host.json` tem configurações específicas de runtime para todo o Function App, não definições de gatilhos e associações para funções individuais.' },
            { text: 'Use métodos de decoração no código para definir gatilhos e associações.', isCorrect: false, rationale: 'Métodos de decoração (como atributos em C# compilado) são usados para definir gatilhos e associações ao usar idiomas compilados, não scripts C#.' },
            { text: 'Defina as configurações de gatilhos e associações no arquivo `appsettings.json`.', isCorrect: false, rationale: 'O arquivo `appsettings.json` é usado para configurações gerais do aplicativo em projetos .NET, mas as definições de gatilhos e associações para Azure Functions script-based são feitas no `function.json`.' }
        ],
        hint: 'Para funções do Azure baseadas em script, qual arquivo JSON dentro do diretório de cada função é responsável por definir seus gatilhos e associações?'
    },
    {
        question: 'Uma empresa planeja criar um aplicativo do Azure Functions. Você precisa recomendar uma solução para atender aos seguintes requisitos: Executa várias funções simultaneamente. Executa a agregação nos resultados das funções. Evita inícios frios. Minimiza os custos. Quais dois componentes você deve recomendar? Cada resposta correta apresenta parte da solução',
        options: [
            { text: 'O plano Premium e Padrão fan-out/fan-in', isCorrect: true, rationale: 'O plano Premium evita inícios frios (cold starts) e oferece duração de execução ilimitada, o que ajuda a minimizar custos em cenários de alta demanda, mantendo a responsividade. O padrão fan-out/fan-in (com Durable Functions) permite que várias funções sejam executadas em paralelo e que seus resultados sejam agregados, atendendo aos requisitos de execução simultânea e agregação.' },
            { text: 'O plano de Consumo e Padrão fan-out/fan-in', isCorrect: false, rationale: 'O plano de Consumo evita pagar pelo tempo ocioso, mas pode enfrentar inícios frios, o que contradiz o requisito de evitar inícios frios.' },
            { text: 'O plano Premium e Padrão de encadeamento de funções', isCorrect: false, rationale: 'O padrão de encadeamento de funções executa funções em sequência (a saída de uma é a entrada da próxima), o que não atende ao requisito de executar *várias funções simultaneamente* e agregar seus resultados.' },
            { text: 'O plano de Consumo e Padrão de encadeamento de funções', isCorrect: false, rationale: 'Ambos os componentes nesta opção não atendem aos requisitos de evitar inícios frios e executar funções simultaneamente com agregação.' }
        ],
        hint: 'Para alta performance (sem cold starts), paralelização de tarefas e agregação de resultados em Azure Functions, qual plano de hospedagem e qual padrão de orquestração você usaria?'
    },
    {
        question: 'Você cria uma rotina de lote usando um gatilho de temporizador no Azure Functions. Você precisa configurar a rotina do lote para ser executada a cada 15 minutos, de segunda a sexta. Qual segmento de código você deve usar?',
        options: [
            { text: '[Function(nameof(TimerTriggerCSharp)] [FixedDelayRetry(5, "00:00:10")] public static void Run([TimerTrigger("0 */15 * * * 1-5")] TimerInfo myTimer, FunctionContext contexto)', isCorrect: true, rationale: 'A expressão CRON "0 */15 * * * 1-5" significa: 0 segundos, a cada 15 minutos, a cada hora, a cada dia do mês, a cada mês, e de segunda (1) a sexta (5). Esta é a configuração correta para executar a função a cada 15 minutos, de segunda a sexta-feira.' },
            { text: '[Function(nameof(TimerTriggerCSharp)] [FixedDelayRetry(5, "00:00:10")] public static void Run([TimerTrigger("*/15 * * * 0-4")] TimerInfo myTimer, FunctionContext contexto)', isCorrect: false, rationale: 'A parte dos dias da semana (0-4) representa Domingo a Quinta-feira, não Segunda a Sexta-feira.' },
            { text: '[Function(nameof(TimerTriggerCSharp)] [FixedDelayRetry(5, "00:00:10")] public static void Run([TimerTrigger("0 15 * * * ")] TimerInfo myTimer, FunctionContext contexto)', isCorrect: false, rationale: 'Esta expressão CRON significa "no minuto 15 de cada hora, a cada dia". Não define "a cada 15 minutos" nem "de segunda a sexta".' },
            { text: '[Function(nameof(TimerTriggerCSharp)] [FixedDelayRetry(5, "00:00:10")] public static void Run([TimerTrigger("* 15 * * 1-5")] TimerInfo myTimer, FunctionContext contexto)', isCorrect: false, rationale: 'Esta expressão CRON está incorreta na parte dos minutos (`* 15` significa "no minuto 15 de cada hora") e falta o atributo de segundos (`0`) no início.' }
        ],
        hint: 'Lembre-se da sintaxe das expressões CRON no Azure Functions (segundos, minutos, horas, dia do mês, mês, dia da semana) e como especificar intervalos e dias da semana.'
    },
    {
        question: 'Você está desenvolvendo um aplicativo do Azure Functions que será implantado em um plano de consumo. O aplicativo consome dados de um servidor de banco de dados que tem taxa de transferência limitada. Você precisa usar a propriedade `functionAppScaleLimit` para controlar o número de instâncias do aplicativo que será criado. Qual valor você deve usar para a configuração da propriedade?',
        options: [
            { text: '10', isCorrect: true, rationale: 'A propriedade `functionAppScaleLimit` permite definir o número máximo de instâncias do aplicativo do Azure Functions que serão criadas. Definir um valor baixo, como 10 (em contraste com o padrão de 200 para o plano de consumo), é apropriado para evitar sobrecarregar componentes de *backend* com taxa de transferência limitada.' },
            { text: '200', isCorrect: false, rationale: '200 é o limite padrão de instâncias para o plano de consumo. Usar esse valor não limitaria efetivamente o número de instâncias para proteger um banco de dados com taxa de transferência limitada.' },
            { text: '0', isCorrect: false, rationale: 'Um valor igual a 0 ou nulo para a propriedade `functionAppScaleLimit` significa que um número *irrestrito* de instâncias do aplicativo do Azure Functions será criado, o que é o oposto do que é necessário para proteger um *backend* limitado.' },
            { text: 'Nulo', isCorrect: false, rationale: 'Um valor nulo, assim como 0, resulta em um número irrestrito de instâncias, o que não atende ao requisito de controlar o número de instâncias devido a uma taxa de transferência limitada.' }
        ],
        hint: 'Para limitar o dimensionamento de um Function App (Plano de Consumo) para proteger um *backend* com taxa de transferência limitada, você deve definir um valor específico que não seja o padrão e que imponha um limite.'
    },
    {
        question: 'Você está desenvolvendo uma API sem servidor usando o Azure Functions. Espera-se que a API lide com um grande número de solicitações HTTP e faça solicitações de saída para um serviço de terceiros. O serviço de terceiros tem um limite de taxa no número de solicitações que pode manipular por minuto. Você precisa garantir que a Função do Azure não exceda o limite de taxa do serviço de terceiros e gerencie a utilização de recursos de maneira eficaz. Quais são as duas ações que você deve executar?',
        options: [
            { text: 'Defina a propriedade `maxConcurrentRequests` no arquivo `host.json` para limitar o número de execuções paralelas. e Defina a propriedade `maxOutstandingRequests` no arquivo `host.json` para limitar o número de solicitações pendentes a qualquer momento.', isCorrect: true, rationale: 'Definir a propriedade `maxConcurrentRequests` no arquivo `host.json` limitará o número de funções HTTP executadas em paralelo, o que pode ajudar a gerenciar a utilização de recursos e evitar exceder o limite de taxa do serviço de terceiros. A propriedade `maxOutstandingRequests` limita o número de solicitações pendentes que são mantidas a qualquer momento, incluindo solicitações enfileiradas e execuções em andamento, que também podem ajudar a gerenciar a utilização de recursos.' },
            { text: 'Habilite a propriedade `dynamicThrottlesEnabled` no arquivo `host.json` para rejeitar solicitações com uma resposta 429 \'Too Busy\' quando os contadores de desempenho do sistema estiverem acima de um limite alto. e Defina a propriedade `routePrefix` no arquivo `host.json`.', isCorrect: false, rationale: 'Habilitar a propriedade `dynamicThrottlesEnabled` não ajudaria nesse cenário, pois rejeita solicitações com base em contadores de desempenho do sistema, não com base no limite de taxa de um serviço de terceiros. A propriedade `routePrefix` é usada para definir o prefixo de rota para todas as rotas e não afeta a utilização de recursos ou a limitação de taxa.' },
            { text: 'Defina a propriedade `hsts` no arquivo `host.json` e `routePrefix`.', isCorrect: false, rationale: 'A propriedade `hsts` é usada para impor o comportamento HSTS (Segurança de Transporte Estrito HTTP) e não está relacionada ao gerenciamento de utilização de recursos ou limitação de taxa. A propriedade `routePrefix` também não é relevante para este problema.' },
            { text: 'Defina a propriedade `maxConcurrentRequests` e `dynamicThrottlesEnabled`.', isCorrect: false, rationale: 'A propriedade `dynamicThrottlesEnabled` não é a solução adequada para limitar o número de chamadas a um serviço de terceiros com limite de taxa, pois foca em contadores de desempenho do sistema da própria Função, não no serviço externo.' }
        ],
        hint: 'Para controlar o tráfego de saída de uma Azure Function para um serviço com limite de taxa, quais duas configurações no `host.json` controlam a concorrência e o número de requisições pendentes?'
    },
    {
        question: 'Você gerencia uma implantação de várias regiões de uma conta do Azure Cosmos DB chamada `account1`. Você precisa configurar o nível de consistência padrão para `account1`. O nível de consistência deve maximizar a taxa de transferência e minimizar a latência para operações de gravação. Qual nível de consistência você deve usar?',
        options: [
            { text: 'Eventual', isCorrect: true, rationale: 'O nível de consistência eventual maximiza a taxa de transferência e minimiza a latência. Embora ofereça a consistência mais flexível (sem garantia de ordenação), ele confirma qualquer operação de gravação no primário imediatamente, o que resulta na maior taxa de transferência e menor latência para operações de gravação.' },
            { text: 'Desatualização Limitada', isCorrect: false, rationale: 'O nível de consistência de desatualização limitada fornece menor taxa de transferência e maior latência em comparação com a consistência eventual. Ele oferece garantias de consistência mais fortes que a eventual, mas não maximiza a taxa de transferência de gravação.' },
            { text: 'Prefixo Consistente', isCorrect: false, rationale: 'O nível de consistência de prefixo consistente fornece maior taxa de transferência e menor latência para operações de gravação do que o nível de consistência da sessão, mas taxa de transferência mais baixa e latência maior do que os níveis de consistência eventual. Não é o que maximiza.' },
            { text: 'Sessão', isCorrect: false, rationale: 'O nível de consistência da sessão fornece maior taxa de transferência e menor latência para operações de gravação do que o nível de consistência de desatualização limitada, mas taxa de transferência mais baixa e latência maior do que os níveis de consistência eventual e de prefixo consistente.' }
        ],
        hint: 'Para maximizar a taxa de transferência e minimizar a latência para gravações no Cosmos DB, mesmo que isso signifique a menor consistência entre as réplicas, qual nível de consistência é o mais adequado?'
    },
    {
        question: 'Você precisa ler um feed de alterações do Azure Cosmos DB usando um modelo de push. Quais são os dois componentes que você pode usar para atingir esse objetivo? Cada resposta correta apresenta uma solução completa.',
        options: [
            { text: 'Azure Functions com um gatilho do Azure Cosmos DB. e Biblioteca do processador do feed de alterações.', isCorrect: true, rationale: 'O Azure Functions com um gatilho do Azure Cosmos DB permite que você selecione o contêiner para se conectar e a Função do Azure é disparada sempre que há uma alteração no contêiner, implementando um modelo de push. A Biblioteca do processador do feed de alterações segue o padrão de observador, onde a função de processamento é chamada pela biblioteca, e verifica e envia automaticamente as alterações por push para o cliente.' },
            { text: 'Azure Functions com um gatilho da Grade de Eventos. e Modelo de pull do feed de alterações.', isCorrect: false, rationale: 'O Azure Functions com um gatilho da Grade de Eventos executará a função quando um evento da Grade de Eventos for expedido, mas não tem relação com um feed de alterações do Azure Cosmos DB. Um modelo de pull usaria um modelo de pull em vez de um modelo de push.' },
            { text: 'Azure Stream Analytics. e Azure Data Factory.', isCorrect: false, rationale: 'Embora esses serviços possam processar dados do Cosmos DB, eles não são os componentes principais para *ler* um feed de alterações usando um modelo de push nativo do Cosmos DB com a flexibilidade que Azure Functions ou a Biblioteca do Processador oferecem para este cenário.' },
            { text: 'SDK do Azure Cosmos DB para operações de consulta. e Azure Logic Apps.', isCorrect: false, rationale: 'O SDK para operações de consulta é para leituras diretas, não para consumir o feed de alterações em um modelo de push. O Azure Logic Apps pode ser um destino de eventos, mas não o componente *leitor* principal do feed de alterações para o modelo de push.' }
        ],
        hint: 'Para consumir o Change Feed do Cosmos DB usando um modelo de push, quais duas ferramentas ou bibliotecas são as mais comuns e eficazes?'
    },
    {
        question: 'Você gerencia um banco de dados do Azure Cosmos DB chamado `database1`. Você precisa ler itens do banco de dados sem nenhuma garantia de ordenação e garantir a maior disponibilidade. Qual nível de consistência você deve usar?',
        options: [
            { text: 'Eventual', isCorrect: true, rationale: 'A consistência eventual tem a consistência mais flexível e confirma qualquer operação de gravação no primário imediatamente. Isso fornecerá a maior disponibilidade e a menor consistência (sem nenhuma garantia de ordenação), o que é ideal para o requisito de "sem nenhuma garantia de ordenação e garantir a maior disponibilidade".' },
            { text: 'Desatualização Limitada', isCorrect: false, rationale: 'A consistência de desatualização limitada não fornecerá a maior disponibilidade em comparação com a eventual. Ela oferece uma garantia de prefixo consistente.' },
            { text: 'Forte', isCorrect: false, rationale: 'A consistência forte oferece a maior consistência (leituras sempre retornam a última gravação confirmada), mas sofre com a redução da disponibilidade, o que é o oposto do requisito.' },
            { text: 'Sessão', isCorrect: false, rationale: 'A consistência da sessão garante que todas as operações de leitura e gravação sejam consistentes em uma sessão de usuário. Como o aplicativo não requer garantia de consistência, esse nível de consistência não é apropriado para maximizar a disponibilidade neste cenário específico.' }
        ],
        hint: 'Para leituras que priorizam a *maior disponibilidade* e *não* precisam de garantia de ordenação, qual é o nível de consistência mais "relaxado" no Cosmos DB?'
    },
    {
        question: 'Você tem um aplicativo que grava dados no Azure Cosmos DB. O aplicativo deve oferecer leituras monotônicas, sem garantia de que o valor lido seja o último valor gravado. Você precisa configurar o nível de consistência. Qual nível de consistência você deve usar?',
        options: [
            { text: 'Sessão', isCorrect: true, rationale: 'A consistência da sessão oferece todas as garantias listadas, incluindo leituras monotônicas (garantia de que você nunca verá dados mais antigos do que os que você já leu), sem necessariamente garantir que o valor lido seja o último gravado. Ela fornece latências de gravação, disponibilidade e taxa de transferência de leitura comparáveis à consistência eventual, sendo um bom equilíbrio para a maioria dos aplicativos que operam no contexto de um usuário.' },
            { text: 'Forte', isCorrect: false, rationale: 'A consistência forte tem leituras garantidas para retornar a versão confirmada mais recente de um item. Um cliente nunca vê uma gravação não confirmada ou parcial, mas tem maior latência e menor throughput.' },
            { text: 'Desatualização Limitada', isCorrect: false, rationale: 'Na consistência de desatualização limitada, as leituras têm a garantia de honrar a garantia de prefixo consistente, mas pode não ser a melhor opção quando a leitura monotônica é o foco principal e outras garantias não são estritamente necessárias.' },
            { text: 'Eventual', isCorrect: false, rationale: 'Em consistência eventual, não há garantia de ordenação para leituras (nem mesmo monotônica). É a forma mais fraca de consistência, onde um cliente pode ler valores mais antigos do que os que havia lido antes.' }
        ],
        hint: 'Para garantir leituras monotônicas (você sempre vê dados tão novos quanto os que você já viu), mas sem a garantia de "última escrita", qual nível de consistência do Cosmos DB é frequentemente o padrão para aplicativos de usuário?'
    },
    {
        question: 'Você tem blobs no Armazenamento de Blobs do Azure. Os blobs armazenam imagens. Você precisa registrar as informações de localização e condição climática de quando as fotos foram tiradas. Você deve garantir que possa usar até 2.000 caracteres ao gravar as informações. O que você deve fazer?',
        options: [
            { text: 'Use cabeçalhos de metadados definidos com uma solicitação PUT.', isCorrect: true, rationale: 'Os metadados são a maneira adequada de definir esse tipo de dados para blobs, permitindo modificações independentes e dando suporte a até 8 KB no tamanho total, o que acomoda os 2.000 caracteres. O verbo HTTP para definir metadados é PUT, usado para criar ou atualizar o blob e seus metadados.' },
            { text: 'Armazene as informações como parte do nome do blob, usando um nome de até 1.024 caracteres.', isCorrect: false, rationale: 'O tamanho máximo de um nome de blob é de 1.024 caracteres, o que é menos que os 2.000 caracteres necessários. Além disso, essa não é uma abordagem ideal porque os metadados podem ser obtidos e definidos de forma independente, mantendo o mesmo nome de arquivo.' },
            { text: 'Use um cabeçalho de metadados definido com uma solicitação POST.', isCorrect: false, rationale: 'Os metadados são a maneira adequada de definir esse tipo de dados, mas o verbo HTTP para definir metadados é PUT, não POST.' },
            { text: 'Armazene as informações como parte do nome do contêiner, com um nome de até 63 caracteres.', isCorrect: false, rationale: 'A combinação de locais e tipos de clima pode ser potencialmente ilimitada, e os nomes de contêiner são limitados a 63 caracteres, o que é muito restritivo para 2.000 caracteres de informação.' }
        ],
        hint: 'Para anexar informações descritivas e flexíveis a um blob, sem alterar seu conteúdo principal ou nome, qual recurso de armazenamento de blob é projetado para isso e qual verbo HTTP é usado?'
    },
    {
        question: 'Você tem uma política de ciclo de vida de Armazenamento do Microsoft Azure para blobs de blocos. Você precisa criar uma regra de filtro `prefixMatch` que conterá uma matriz de cadeias de caracteres para que os prefixos sejam correspondidos. Qual deve ser o primeiro elemento da cadeia de caracteres de prefixo?',
        options: [
            { text: 'um nome de contêiner', isCorrect: true, rationale: 'Ao criar uma regra de filtro `prefixMatch` para uma política de ciclo de vida de Armazenamento do Microsoft Azure para blobs de blocos, o primeiro elemento da cadeia de caracteres de prefixo deve ser um nome de contêiner. Isso permite que a política de ciclo de vida atue em blobs dentro de um contêiner específico que correspondem ao prefixo.' },
            { text: 'uma marca de índice de blob de blocos', isCorrect: false, rationale: 'Uma marca de índice de blob de blocos é usada para indexar blobs para pesquisa, não como o primeiro elemento de um prefixo de caminho em políticas de ciclo de vida.' },
            { text: 'um nome de blob de blocos', isCorrect: false, rationale: 'Um nome de blob de blocos é o nome completo do blob, mas o `prefixMatch` é usado para corresponder a prefixos do caminho do blob, que começam com o nome do contêiner.' },
            { text: 'um nome de conta de armazenamento', isCorrect: false, rationale: 'O filtro `prefixMatch` opera dentro de uma conta de armazenamento, mas o prefixo em si começa no nível do contêiner.' }
        ],
        hint: 'Em uma regra de política de ciclo de vida de blob, quando você usa `prefixMatch` para filtrar blobs, o prefixo do caminho logicamente começa com qual componente do armazenamento?'
    },
    {
        question: 'Você cria a política de retenção a seguir. Você precisará fazer a transição de blobs na camada de acesso frequente para uma camada online se os blobs não tiverem sido modificados em mais de 90 dias. Qual segmento de código você deve adicionar à linha 14? (Linha 14 se refere à seção "baseBlob" dentro de "actions".)',
        options: [
            { text: '"tierToCool": { "daysAfterModificationGreaterThan": 90 }', isCorrect: true, rationale: 'O segmento de código `"tierToCool": { "daysAfterModificationGreaterThan": 90 }` é a sintaxe correta para uma política de ciclo de vida de blob que move blobs para a camada Cool se eles não tiverem sido modificados em mais de 90 dias. "Cool" é uma camada online adequada.' },
            { text: '"tierToArchive": { "daysAfterModificationGreaterThan": 90 }', isCorrect: false, rationale: 'O segmento de código que inclui "tierToArchive" moveria os blobs para a camada Arquivo Morto, que não é uma camada de acesso online, mas sim uma camada offline (para dados raramente acessados e de baixo custo).' },
            { text: '"tierToCool": { "daysAfterCreationGreaterThan": 90 }', isCorrect: false, rationale: 'O segmento de código `"tierToCool": { "daysAfterCreationGreaterThan": 90 }` move os blobs para a camada Cool 90 dias após a *criação*, o que não atende ao requisito de mover blobs *após 90 dias sem modificação*.' },
            { text: '"tierToHot": { "daysAfterModificationGreaterThan": 90 }', isCorrect: false, rationale: 'A camada "Hot" é para dados de acesso frequente. Mover para "Hot" após 90 dias de modificação geralmente não faz sentido em uma política de ciclo de vida para economizar custos; o objetivo é mover para uma camada mais fria.' }
        ],
        hint: 'Para transicionar blobs para uma camada de acesso online *mais fria* (que não seja Archive) com base no tempo desde a *última modificação*, qual ação e parâmetro de tempo você usaria na política de ciclo de vida?'
    },
    {
        question: 'Você precisa reidratar um blob armazenado na camada de Arquivos alterando a camada de acesso. Qual blob de destino você deve usar?',
        options: [
            { text: 'Um blob na camada de acesso esporádico (Cool) na mesma região.', isCorrect: true, rationale: 'Os blobs na camada arquivo morto (Archive) podem ser reidratados apenas para camadas online (ou seja, Cool ou Hot). O destino pode ser qualquer conta de armazenamento na mesma região. A camada Cool é uma camada de acesso online, e a reidratação é sempre feita para uma camada dentro da mesma região.' },
            { text: 'Um blob na camada de acesso esporádico (Cool) em uma região diferente.', isCorrect: false, rationale: 'A reidratação de blobs da camada Archive é restrita à mesma região da conta de armazenamento original.' },
            { text: 'Um blob na camada de arquivo morto (Archive) na mesma região.', isCorrect: false, rationale: 'Reidratar para a mesma camada Archive não faz sentido; o objetivo é tornar o blob online novamente.' },
            { text: 'Um blob na camada de acesso frequente (Hot) em uma região diferente.', isCorrect: false, rationale: 'A reidratação para a camada Hot é possível, mas não em uma região diferente.' }
        ],
        hint: 'Ao reidratar um blob da camada Archive, para quais camadas online e em qual localização geográfica a reidratação pode ser feita?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo. Você precisa definir as propriedades HTTP padrão de contêineres no Armazenamento de Blobs do Azure. Quais são as duas propriedades HTTP que você pode definir? Cada resposta correta apresenta uma parte da solução.',
        options: [
            { text: 'ETag e Last-Modified', isCorrect: true, rationale: 'As duas únicas propriedades HTTP padrão que podem ser definidas para *contêineres* no Armazenamento de Blobs do Azure são `ETag` e `Last-Modified`. Outras propriedades HTTP como `Cache-Control` ou `Origin` são geralmente associadas a *blobs* individuais ou configurações de CORS, não a contêineres diretamente.' },
            { text: 'Cache-Control e Origem', isCorrect: false, rationale: '`Cache-Control` e `Origin` são propriedades HTTP que se aplicam a *blobs*, não a contêineres.' },
            { text: 'Content-Type e Content-Disposition', isCorrect: false, rationale: '`Content-Type` e `Content-Disposition` são propriedades HTTP que se aplicam a *blobs*, não a contêineres.' },
            { text: 'Content-Length e Range', isCorrect: false, rationale: '`Content-Length` e `Range` são propriedades HTTP que se aplicam a *blobs* (ou a requisições/respostas HTTP específicas), não a contêineres.' }
        ],
        hint: 'Pense nas propriedades HTTP que o Azure Blob Storage gerencia automaticamente ou permite definir para *contêineres*, especificamente.'
    },
    {
        question: 'Você deve planejar usar o Microsoft Graph para recuperar uma lista de usuários em um locatário do Microsoft Entra ID. Você precisa otimizar os resultados da consulta. Quais duas opções de consulta você deve usar? Cada resposta correta apresenta uma parte da solução.',
        options: [
            { text: '$filter e $select', isCorrect: true, rationale: 'A opção de consulta `$filter` deve ser usada para limitar os resultados retornados com base em critérios específicos. A opção de consulta `$select` limita os atributos (propriedades) projetados do conjunto de resultados, retornando apenas as colunas necessárias e tornando a consulta mais eficiente ao reduzir o volume de dados transferidos.' },
            { text: '$count e $expand', isCorrect: false, rationale: 'A opção de consulta `$count` destina-se a recuperar a contagem total de recursos correspondentes, não a otimizar os resultados da consulta para uma lista de usuários em si. A opção de consulta `$expand` é usada para recuperar recursos relacionados, o que pode aumentar, e não otimizar, o tamanho da resposta se não for usada com cuidado.' },
            { text: '$orderby e $top', isCorrect: false, rationale: '`$orderby` é para ordenar os resultados e `$top` para limitar o número de resultados. Embora úteis, `$filter` e `$select` são mais diretamente relacionados à *otimização* dos dados *retornados* para uma lista de usuários.' },
            { text: '$skip e $count', isCorrect: false, rationale: '`$skip` é para paginação e `$count` para contagem total. Nenhum deles otimiza o *conteúdo* dos resultados da consulta.' }
        ],
        hint: 'Para reduzir o volume de dados e o tempo de processamento de uma consulta do Microsoft Graph, quais duas opções de consulta são usadas para refinar *quais* itens e *quais propriedades* desses itens são retornados?'
    },
    {
        question: 'Você tem uma conta de Armazenamento do Microsoft Azure. Você precisa fornecer aos usuários externos a capacidade de criar e atualizar blobs. Qual valor de enumeração de `BlobSasPermissions` você deve usar?',
        options: [
            { text: 'Gravar', isCorrect: true, rationale: 'A permissão de gravação (`Write`) para `BlobSasPermissions` permitirá que os usuários criem e atualizem blobs. A documentação da Microsoft para `BlobSasPermissions.Write` indica que ela concede permissões para criar ou substituir conteúdo de blob ou bloco.' },
            { text: 'Adicionar', isCorrect: false, rationale: 'A permissão `Add` é aplicável apenas para blobs de acréscimo (`Append Blobs`), permitindo adicionar blocos a um blob existente, mas não criar ou atualizar um blob de bloco ou página comum.' },
            { text: 'Criar', isCorrect: false, rationale: 'A permissão `Create` só permite que os usuários criem blobs, mas não permite que os usuários *atualizem* blobs existentes. Para atualizar e criar, `Write` é a permissão necessária.' },
            { text: 'Leitura', isCorrect: false, rationale: 'A permissão de `Leitura` permite apenas ler o conteúdo de um blob ou seus metadados, mas não criar ou atualizar blobs.' }
        ],
        hint: 'Para conceder permissão para criar *e* modificar o conteúdo de um blob usando uma SAS, qual é a permissão mais abrangente relacionada à escrita?'
    },
    {
        question: 'Você desenvolve um aplicativo. O aplicativo será acessado por um fornecedor. O fornecedor requer uma Assinatura de Acesso Compartilhado (SAS) para acessar os serviços do Azure na assinatura da sua empresa. Você precisa proteger a SAS. Quais são as três ações que você deve executar? Cada resposta correta apresenta uma solução completa.',
        options: [
            { text: 'Sempre usar HTTPS.; Use os logs do Azure Monitor e do Armazenamento do Microsoft Azure para monitorar o aplicativo.; Defina uma política de acesso armazenada para uma SAS de serviço.', isCorrect: true, rationale: 'Sempre usar HTTPS é uma recomendação de segurança fundamental para proteger dados em trânsito com SAS. O monitoramento através dos logs do Azure Monitor e do Armazenamento do Microsoft Azure é crucial para observar qualquer uso indevido ou picos de falhas de autorização. A definição de uma política de acesso armazenada para uma SAS de serviço é uma prática recomendada, pois permite revogar permissões para uma SAS de serviço sem precisar regenerar as chaves da conta de armazenamento, oferecendo maior controle e segurança.' },
            { text: 'Sempre usar HTTP.; Use os logs do Azure Monitor para monitorar o aplicativo.; Defina uma política de acesso armazenada para uma SAS de conta.', isCorrect: false, rationale: 'Nunca use HTTP para SAS; HTTPS é obrigatório. Embora os logs sejam importantes, usar HTTP anula a segurança. A política de acesso armazenada para SAS de conta é menos granular e potencialmente mais arriscada que uma SAS de serviço.' },
            { text: 'Use os logs do Armazenamento do Microsoft Azure para monitorar o aplicativo.; Defina uma política de acesso armazenada para uma SAS de delegação de usuário.; Limite o tempo de expiração da SAS para 24 horas.', isCorrect: false, rationale: 'Embora o monitoramento e a limitação do tempo de expiração sejam boas práticas, a pergunta pede três *ações* para proteger a SAS. A SAS de delegação de usuário é uma opção, mas não é a única forma de "proteger a SAS" nas opções dadas.' },
            { text: 'Defina uma política de acesso armazenada para uma SAS de serviço.; Use uma SAS de conta para simplificar o gerenciamento.; Implemente o Azure Firewall para proteger o acesso.', isCorrect: false, rationale: 'Uma SAS de conta é menos segura que uma SAS de serviço para acesso limitado. O Azure Firewall protege a rede, mas não é uma ação direta para proteger a *própria SAS*.' }
        ],
        hint: 'Para proteger uma SAS para um fornecedor, pense em segurança de transporte, observabilidade de uso e controle de revogação.'
    },
    {
        question: 'Você planeja permitir que um usuário crie uma identidade gerenciada para uma máquina virtual (VM) do Azure. Você precisa garantir que os seguintes requisitos sejam atendidos: A conta de usuário deve ter permissões suficientes para criar a identidade gerenciada. O princípio de privilégio mínimo deve ser usado. Qual função de permissão você deve atribuir?',
        options: [
            { text: 'Colaborador de Máquina Virtual', isCorrect: true, rationale: 'Colaborador de Máquina Virtual é a função interna menos privilegiada necessária para criar uma identidade gerenciada *atribuída ao sistema* para uma VM do Azure. Isso adere ao princípio de privilégio mínimo, pois não concede permissões excessivas que não são necessárias para a tarefa.' },
            { text: 'Logon do Administrador de Máquina Virtual', isCorrect: false, rationale: 'O Logon do Administrador de Máquina Virtual concede permissões de login na VM, mas não é suficiente para criar uma identidade gerenciada para a VM.' },
            { text: 'Administrador Global', isCorrect: false, rationale: 'O Administrador Global tem permissões excessivas em todo o Microsoft Entra ID e não segue o princípio de privilégios mínimos para essa tarefa específica.' },
            { text: 'Administrador de Segurança', isCorrect: false, rationale: 'O Administrador de Segurança tem permissões amplas de segurança no Microsoft Entra ID e não segue o princípio de privilégios mínimos para a tarefa de criar identidades gerenciadas em VMs.' }
        ],
        hint: 'Para criar uma identidade gerenciada *atribuída ao sistema* para uma VM, qual função de RBAC específica para VMs oferece o privilégio mínimo necessário?'
    },
    {
        question: 'Você precisa agrupar chaves na Configuração de Aplicativos do Azure. Quais são as duas maneiras possíveis de atingir essa meta? Cada resposta correta apresenta uma solução completa.',
        options: [
            { text: 'Organize as chaves usando prefixos de chave. e Organize as chaves usando rótulos.', isCorrect: true, rationale: 'Os prefixos de chave (partes iniciais dos nomes das chaves) são uma maneira de agrupar um conjunto de chaves. Os rótulos são um atributo opcional nas chaves que podem ser usados para criar variantes de uma chave ou agrupar chaves por ambiente (desenvolvimento, produção), tipo de aplicativo, etc.' },
            { text: 'Use o controle de acesso baseado em função do Azure. e Conceda a permissão de leitura para ler chaves que pertencem ao aplicativo.', isCorrect: false, rationale: 'O controle de acesso baseado em função (RBAC) é para gerenciar permissões de acesso às chaves, não para agrupá-las logicamente *dentro* do App Configuration.' },
            { text: 'Use a identidade gerenciada. e Conceda a permissão de leitura para ler chaves que pertencem ao aplicativo.', isCorrect: false, rationale: 'Identidades gerenciadas são para autenticação do aplicativo, não para agrupar chaves na Configuração de Aplicativos.' },
            { text: 'Crie grupos de chaves usando categorias e tags de recursos do Azure.', isCorrect: false, rationale: 'Embora categorias e tags sejam usadas para organizar recursos do Azure, elas não são um método nativo para agrupar chaves *dentro* da Configuração de Aplicativos do Azure. As formas nativas são prefixos e rótulos.' }
        ],
        hint: 'Para organizar as configurações e chaves dentro do Azure App Configuration, quais dois mecanismos nativos do serviço você usaria para categorizá-las?'
    },
    {
        question: 'Você gerencia um aplicativo Web do Serviço de Aplicativo do Azure chamado `app1` e um Azure Key Vault chamado `vault1`. Você precisa garantir que o `app1` possa autenticar e conduzir operações com o `vault1` sem gerenciar a rotação de um segredo. O recurso necessário para implementar a solução deve ser excluído automaticamente quando o aplicativo for excluído. Qual método de autenticação você deve usar para o `app1`?',
        options: [
            { text: 'identidade gerenciada atribuída ao sistema', isCorrect: true, rationale: 'Uma identidade gerenciada atribuída pelo sistema é criada automaticamente com o recurso Azure (neste caso, o `app1`) e seu ciclo de vida está vinculado ao ciclo de vida desse recurso. Ela pode ser usada para autenticar em outros serviços do Azure (como o Key Vault) sem a necessidade de gerenciar segredos ou rotação de credenciais. Quando o `app1` é excluído, a identidade também é excluída automaticamente.' },
            { text: 'identidade gerenciada atribuída ao usuário', isCorrect: false, rationale: 'Uma identidade gerenciada atribuída pelo usuário pode ser usada para autenticar, mas seu ciclo de vida é independente do recurso. Ela não é excluída automaticamente quando o aplicativo é excluído e precisaria ser gerenciada separadamente, o que não atende a todos os requisitos.' },
            { text: 'entidade de serviço e um segredo', isCorrect: false, rationale: 'Uma entidade de serviço e um segredo exigem gerenciamento manual de credenciais (o segredo precisaria ser rotacionado), o que contradiz o requisito de "sem gerenciar a rotação de um segredo".' },
            { text: 'entidade de serviço e um certificado associado', isCorrect: false, rationale: 'Assim como a entidade de serviço com segredo, o uso de um certificado também exige gerenciamento (rotação do certificado), o que não atende ao requisito de "sem gerenciar a rotação de um segredo".' }
        ],
        hint: 'Para uma autenticação sem gerenciamento de credenciais e que tenha o mesmo ciclo de vida do recurso ao qual está associada, qual tipo de identidade gerenciada é o mais adequado?'
    },
    {
        question: 'Você planeja criar uma hierarquia de namespace de chave na Configuração de Aplicativos do Azure. Você precisa separar nomes de chave individuais. Qual caractere você deve usar?',
        options: [
            { text: ':', isCorrect: true, rationale: 'O caractere de dois-pontos (:) é a convenção recomendada e amplamente utilizada para separar nomes de chaves individuais ao criar uma hierarquia de namespace na Configuração de Aplicativos do Azure (ex: `MinhaApp:Configuracao:Versao`).' },
            { text: '*', isCorrect: false, rationale: 'O caractere asterisco (*) é um dos caracteres reservados na Configuração de Aplicativos do Azure e não pode ser usado para separar nomes de chaves individuais.' },
            { text: ',', isCorrect: false, rationale: 'O caractere de vírgula (,) é um dos caracteres reservados na Configuração de Aplicativos do Azure e não pode ser usado para separar nomes de chaves individuais.' },
            { text: '\\', isCorrect: false, rationale: 'O caractere de barra invertida (\\) é um dos caracteres reservados na Configuração de Aplicativos do Azure e não pode ser usado para separar nomes de chaves individuais.' }
        ],
        hint: 'Em sistemas de configuração hierárquica, qual caractere é comumente usado como um delimitador de caminho ou namespace para chaves?'
    },
    {
        question: 'Uma empresa planeja usar a Configuração de Aplicativos do Azure para sinalizadores de recursos em um aplicativo. A empresa tem os seguintes requisitos de criptografia: Chaves gerenciadas pelo cliente; Chaves protegidas por HSM (módulo de segurança de hardware). Você precisa recomendar camadas de serviço. Quais duas camadas você deve recomendar? Cada resposta correta apresenta uma parte da solução.',
        options: [
            { text: 'Camada Standard da Configuração de Aplicativos do Azure e Camada Premium do Azure Key Vault', isCorrect: true, rationale: 'A camada Standard da Configuração de Aplicativos do Azure deve ser usada para dar suporte a chaves gerenciadas pelo cliente. A camada Premium do Azure Key Vault é necessária para dar suporte a chaves protegidas por HSM (Hardware Security Module). HSMs fornecem um nível mais alto de segurança para chaves criptográficas.' },
            { text: 'Camada Gratuita da Configuração de Aplicativos do Azure e Camada Standard do Azure Key Vault', isCorrect: false, rationale: 'A camada Gratuita de Configuração de Aplicativos não permite o uso de chaves gerenciadas pelo cliente. A camada Standard do Key Vault não dá suporte a chaves protegidas por HSM.' },
            { text: 'Camada Premium da Configuração de Aplicativos do Azure e Camada Premium do Azure Key Vault', isCorrect: false, rationale: 'Não existe uma "Camada Premium da Configuração de Aplicativos do Azure" para gerenciar chaves de criptografia; o Azure App Configuration tem camadas Gratuita e Standard.' },
            { text: 'Camada Standard da Configuração de Aplicativos do Azure e Camada Gratuita do Azure Key Vault', isCorrect: false, rationale: 'A camada Gratuita do Key Vault não suporta chaves protegidas por HSM.' }
        ],
        hint: 'Para gerenciar chaves de criptografia no Azure, qual camada do Azure App Configuration permite chaves gerenciadas pelo cliente, e qual camada do Azure Key Vault é necessária para chaves protegidas por HSM?'
    },
    {
        question: 'Você está desenvolvendo uma solução que armazena segredos em um Azure Key Vault chamado `myvault`. Você precisa recuperar o valor de um segredo chamado `mysecret` armazenado em `myvault`. Qual comando da CLI você deve usar?',
        options: [
            { text: 'az keyvault secret show --name mysecret --vault-name myvault', isCorrect: true, rationale: 'O comando `az keyvault secret show` é usado para recuperar o valor de um segredo armazenado no Azure Key Vault. Os parâmetros `--name` e `--vault-name` são usados para especificar o segredo e o cofre de chaves, respectivamente.' },
            { text: 'az keyvault secret get --name mysecret --vault-name myvault', isCorrect: false, rationale: 'Não existe um comando `az keyvault secret get`. O comando correto para visualizar é `show`.' },
            { text: 'az keyvault secret list --vault-name myvault --query "[?name==\'mysecret\']"', isCorrect: false, rationale: 'O comando `az keyvault secret list` lista todos os segredos no cofre. Embora uma consulta possa filtrar, o comando mais direto para obter um segredo específico é `show`.' },
            { text: 'az keyvault secret download --name mysecret --vault-name myvault', isCorrect: false, rationale: 'O comando `az keyvault secret download` é usado para baixar certificados do Key Vault, não para simplesmente exibir o valor de um segredo.' }
        ],
        hint: 'Para visualizar o conteúdo de um segredo específico no Azure Key Vault usando a CLI, qual subcomando de `az keyvault secret` você utilizaria?'
    },
    {
        question: 'Você tem a tarefa de aprimorar a segurança de um aplicativo Web do Azure existente. Atualmente, o aplicativo armazena dados de configuração confidenciais, como cadeias de conexão e chaves de API em seu código, o que gerou preocupações de segurança. Você precisa proteger os dados de configuração do aplicativo para evitar acesso não autorizado e possíveis violações de dados, garantindo acesso contínuo ao próprio aplicativo. Quais são as duas opções que podem atingir esse objetivo? (Escolha duas.)',
        options: [
            { text: 'Migre os dados de configuração confidenciais para o Azure Key Vault e utilize identidades gerenciadas para acessar os segredos com segurança. e Armazene os dados de configuração confidenciais na Configuração de Aplicativos do Azure e restrinja o acesso usando o RBAC (controle de acesso baseado em função) do Azure.', isCorrect: true, rationale: 'Migrar dados de configuração confidenciais para o Azure Key Vault e utilizar identidades gerenciadas para acessar segredos com segurança é uma prática recomendada, pois o Key Vault é projetado para armazenar segredos e as identidades gerenciadas eliminam a necessidade de credenciais no código. Armazenar dados de configuração confidenciais na Configuração de Aplicativos do Azure e restringir o acesso com o RBAC do Azure é um método seguro e centralizado para gerenciar configurações, mantendo o controle sobre quem pode acessar os dados.' },
            { text: 'Criptografe os dados de configuração confidenciais e armazene-os diretamente no código do aplicativo. e Armazene os dados de configuração em um repositório privado do GitHub.', isCorrect: false, rationale: 'Criptografar e armazenar dados no código ainda representa um risco, pois os dados residem na base de código. Armazenar em um repositório privado do GitHub é melhor que público, mas não é uma solução de gerenciamento de segredos para aplicativos em tempo de execução e não protege contra acesso de dentro do próprio aplicativo se comprometido.' },
            { text: 'Use variáveis de ambiente do sistema operacional da VM do Azure e acesso de rede restrito. e Armazene os dados de configuração confidenciais em um banco de dados SQL do Azure seguro.', isCorrect: false, rationale: 'Embora variáveis de ambiente e bancos de dados seguros possam ser parte de uma estratégia de segurança, eles não são as soluções primárias e mais recomendadas para gerenciar *segredos de aplicativo* de forma centralizada e sem credenciais no código. Além disso, as variáveis de ambiente em VMs exigem gerenciamento manual.' },
            { text: 'Configure o Azure Front Door para proteger o acesso ao aplicativo Web e use um Firewall do Azure para restringir o acesso ao aplicativo.', isCorrect: false, rationale: 'O Azure Front Door e o Firewall do Azure são para segurança de rede e proteção contra ataques, não para gerenciar e proteger dados de configuração confidenciais *dentro* do aplicativo.' }
        ],
        hint: 'Para proteger dados de configuração confidenciais em um aplicativo Web do Azure e evitar credenciais no código, pense em serviços de gerenciamento de segredos e configurações, e como o aplicativo se autenticaria nesses serviços de forma segura.'
    },
    {
        question: 'Você tem um aplicativo Web do Azure que ocasionalmente experimenta tempos de resposta altos. Você precisa ser notificado quando o tempo de resposta exceder um determinado limite. O que você deve fazer?',
        options: [
            { text: 'Implementar alertas e testes Web do Application Insights.', isCorrect: true, rationale: 'O Application Insights permite que você crie testes da Web (como testes de ping de URL ou testes de várias etapas) que simulam interações do usuário com seu aplicativo e, em seguida, configure alertas com base nos resultados desses testes. Isso é ideal para ser notificado quando o tempo de resposta exceder um determinado limite.' },
            { text: 'Configurar alertas do Azure Monitor Resource Health.', isCorrect: false, rationale: 'Os alertas do Azure Monitor Resource Health são usados para monitoramento de *infraestrutura* (saúde do recurso Azure), não para o desempenho do *aplicativo* em si (como o tempo de resposta HTTP).' },
            { text: 'Verificar o status no Azure Service Health.', isCorrect: false, rationale: 'A Integridade do Serviço do Azure fornece informações sobre problemas de serviço do Azure e manutenção planejada, não o desempenho do aplicativo individualmente.' },
            { text: 'Consultar recomendações do Azure Advisor.', isCorrect: false, rationale: 'O Assistente do Azure fornece recomendações de práticas recomendadas para otimização de custos, segurança, confiabilidade, excelência operacional e desempenho, mas não fornece alertas em tempo real para o tempo de resposta excedido.' }
        ],
        hint: 'Para ser notificado sobre problemas de desempenho em tempo real, como tempos de resposta altos em um aplicativo web, qual serviço de monitoramento focado em APM (Application Performance Management) você usaria?'
    },
    {
        question: 'Sua equipe está desenvolvendo um novo recurso para um aplicativo existente baseado no Azure que depende muito do processamento de dados em tempo real. O recurso envolve a integração de vários serviços do Azure e APIs de terceiros. Você precisa criar uma estratégia para garantir que a integração desses serviços não introduza problemas ou falhas de desempenho. Você precisa projetar a solução de monitoramento para detectar e resolver possíveis problemas. O que você deve fazer?',
        options: [
            { text: 'Use Métricas Dinâmicas no Application Insights para observar a atividade do aplicativo implantado em tempo real.', isCorrect: true, rationale: 'O Live Metrics (ou Métricas Dinâmicas) no Application Insights fornece observação em tempo real da atividade do aplicativo, incluindo desempenho, taxas de falha, e chamadas de dependência. Isso permite detecção e resposta imediatas a problemas de desempenho e falhas de integração, o que é crucial para um aplicativo que depende do processamento de dados em tempo real e integra vários serviços.' },
            { text: 'Execute verificações noturnas de integridade e desempenho usando Azure Automation.', isCorrect: false, rationale: 'Embora verificações noturnas sejam úteis para auditoria, elas não são suficientes para as necessidades de monitoramento e solução de problemas *em tempo real* de um aplicativo que processa dados em tempo real.' },
            { text: 'Configure um único teste de disponibilidade do Application Insights para verificar a acessibilidade da API principal do aplicativo.', isCorrect: false, rationale: 'Um único teste de disponibilidade não fornece monitoramento abrangente de todos os serviços integrados ou detecção de problemas de desempenho *dentro* do fluxo de processamento de dados em tempo real.' },
            { text: 'Revise manualmente os logs do Azure Monitor diariamente para identificar erros e gargalos.', isCorrect: false, rationale: 'A revisão manual dos logs não é eficiente para monitoramento em tempo real e pode atrasar a resposta aos problemas, especialmente em um sistema que lida com grandes volumes de dados em tempo real.' }
        ],
        hint: 'Para monitorar a atividade de um aplicativo complexo em tempo real e identificar problemas de desempenho imediatamente, qual recurso do Application Insights fornece uma visão "ao vivo"?'
    },
    {
        question: 'Uma plataforma de comércio eletrônico está planejando expandir seus serviços globalmente. A plataforma está hospedada no Azure e utiliza vários serviços do Azure e integrações de terceiros. Você precisa projetar e criar uma solução de monitoramento robusta que possa ser dimensionada com a expansão e fornecer insights sobre o desempenho da plataforma em diferentes regiões. O que você deve fazer?',
        options: [
            { text: 'Implante várias instâncias do Application Insights para cada região e use o Azure Monitor para agregar os dados.', isCorrect: true, rationale: 'A implantação de várias instâncias do Application Insights (uma por região) permite o monitoramento localizado e granular do desempenho do aplicativo em cada região. O uso do Azure Monitor (especificamente o Log Analytics Workspace) para agregar os dados de todas essas instâncias fornece uma exibição centralizada e unificada do desempenho global da plataforma, permitindo insights e análises em escala.' },
            { text: 'Use uma única instância do Application Insights e configure-a para coletar telemetria de todas as regiões.', isCorrect: false, rationale: 'Embora uma única instância possa coletar telemetria globalmente, ela pode não ser dimensionada de forma eficaz para monitoramento de alto volume em várias regiões, e pode introduzir latência na ingestão de dados de regiões distantes. Além disso, pode dificultar a análise de desempenho por região.' },
            { text: 'Implemente a instrumentação manual de todos os serviços e armazene os logs em Blobs do Azure para análise offline.', isCorrect: false, rationale: 'A instrumentação manual de todos os serviços e o armazenamento em Blobs do Azure não fornecem recursos de monitoramento e análise em tempo real ou uma solução robusta e escalável para insights de desempenho globalmente.' },
            { text: 'Configure testes da Web e alertas do Application Insights de um único local geográfico.', isCorrect: false, rationale: 'Os testes da Web e alertas são apenas parte de uma solução de monitoramento robusta e, se configurados de um único local, não fornecerão insights sobre o desempenho em diferentes regiões ou um monitoramento global abrangente.' }
        ],
        hint: 'Para monitoramento global de um aplicativo web com múltiplos serviços, qual estratégia de implantação do Application Insights combinada com uma ferramenta de agregação de dados no Azure é a mais escalável e eficaz?'
    },
    {
        question: 'Uma equipe de desenvolvimento está usando o Application Insights para monitorar seu aplicativo Web implantado no Azure. Eles notaram discrepâncias nas métricas relatadas devido ao alto volume de telemetria. Você precisa garantir que as métricas relatadas reflitam com precisão o desempenho do aplicativo sem serem afetadas pela amostragem de telemetria. O que você deve implementar para atingir esse objetivo?',
        options: [
            { text: 'Configure o Application Insights para usar métricas padrão pré-agregadas para painéis e alertas em tempo real.', isCorrect: true, rationale: 'As métricas padrão pré-agregadas no Application Insights (também conhecidas como métricas baseadas em log de Application Insights ou "Standard Metrics") não são afetadas pela amostragem de telemetria e fornecem dados precisos em tempo real, o que as torna adequadas para painéis e alertas que exigem precisão, mesmo com alto volume de telemetria onde a amostragem pode ocorrer.' },
            { text: 'Aumente a taxa de amostragem de telemetria para 100% para garantir que todos os dados sejam coletados.', isCorrect: false, rationale: 'Aumentar a taxa de amostragem para 100% (ou desabilitar completamente a amostragem) aumentaria significativamente os custos de ingestão de dados e ainda pode não ser viável para volumes extremamente altos. O objetivo é a *precisão* com amostragem.' },
            { text: 'Desabilite completamente a amostragem de telemetria.', isCorrect: false, rationale: 'Desabilitar completamente a amostragem aumentaria dramaticamente os custos e pode ser impraticável para aplicações de alto volume, além de que a questão busca precisão *sem ser afetada pela amostragem*, o que implica que a amostragem pode continuar.' },
            { text: 'Crie uma consulta personalizada do Kusto para recalcular as métricas a partir dos dados de telemetria brutos.', isCorrect: false, rationale: 'A criação de uma consulta personalizada do Kusto exigiria esforço manual contínuo e não resolve o problema da amostragem afetando a *coleta* original da telemetria bruta. As métricas pré-agregadas já fornecem a solução mais eficiente para este cenário.' }
        ],
        hint: 'Para garantir a precisão das métricas do Application Insights, mesmo com amostragem de telemetria para alto volume, qual tipo de métrica é inerentemente projetado para ser preciso por ser pré-calculado?'
    }
];

// Perguntas para o EXAME 2 (24 Questões)
const questionsExam2 = [
    {
        question: 'Você está desenvolvendo um Aplicativo Web do Azure que processa pedidos de clientes. O aplicativo requer uma tarefa em segundo plano do Serviço de Aplicativo para lidar com operações assíncronas, como o envio de e-mails de confirmação de pedidos e a atualização do estoque em resposta a novos pedidos de clientes. Você precisa de uma solução que possa ser executada continuamente ou conforme um cronograma no ambiente do Serviço de Aplicativo do Azure. Você planeja usar o WebJobs SDK para integrar com uma fila do Azure Storage para processar solicitações de pedidos recebidas com eficiência. Qual das seguintes opções atenderá a esse requisito?',
        options: [
            { text: 'Microsoft Power Automate', isCorrect: false, rationale: 'O Power Automate é principalmente uma ferramenta de automação de fluxo de trabalho, não projetada para executar processos contínuos em segundo plano no Serviço de Aplicativo do Azure. Ele também não possui suporte nativo para o SDK do WebJobs nem para o processamento baseado em filas necessário para o processamento de pedidos.' },
            { text: 'WebJobs', isCorrect: true, rationale: 'WebJobs é um recurso do Serviço de Aplicativo do Azure que permite executar um programa ou script na mesma instância do seu aplicativo web. Todos os planos do Serviço de Aplicativo oferecem suporte a WebJobs. Além disso, você pode usar o SDK do Azure WebJobs para simplificar diversas tarefas de programação associadas a WebJobs. Trata-se de uma solução de processamento em segundo plano totalmente gerenciada, que opera no ambiente do Serviço de Aplicativo do Azure. Ela permite a execução assíncrona de tarefas em segundo plano e oferece suporte a operações contínuas e agendadas. Integrando-se perfeitamente ao SDK do WebJobs, ela processa com eficiência mensagens de uma Fila de Armazenamento do Azure, tornando-se ideal para processar solicitações de pedidos de clientes.' },
            { text: 'Funções do Azure', isCorrect: false, rationale: 'O Azure Functions é uma solução sem servidor executada fora do ambiente do Serviço de Aplicativo do Azure. Embora possa processar tarefas em segundo plano e integrar-se às Filas de Armazenamento do Azure, o requisito especifica que a solução deve ser executada dentro do Serviço de Aplicativo.' },
            { text: 'Lote do Azure', isCorrect: false, rationale: 'O Azure Batch é usado principalmente para computação de alto desempenho (HPC) e processamento em lote paralelo, o que não é adequado para lidar com tarefas em segundo plano leves e orientadas a eventos, como processamento de pedidos ou envio de e-mails.' }
        ],
        hint: 'Pense em uma funcionalidade do App Service para executar tarefas em segundo plano.'
    },
    {
        question: 'Você gerencia um Serviço de Aplicativo do Azure que atende usuários em várias regiões. O aplicativo utiliza o Gerenciador de Tráfego do Azure para rotear o tráfego de forma inteligente e possui o Application Insights habilitado para monitoramento. Além disso, o Azure Front Door está configurado para aprimorar o balanceamento de carga global e a entrega de conteúdo. Sua equipe deve gerar relatórios mensais sobre tendências de tempo de atividade e analisar dados históricos de desempenho para garantir alta disponibilidade. Quais soluções atingirão esse objetivo? (Selecione DUAS.)',
        options: [
            { text: 'Registros do Azure Monitor e Métricas do Azure Monitor', isCorrect: true, rationale: 'O Azure Monitor Logs é um serviço robusto projetado para ajudar você a coletar e analisar dados de telemetria dos seus recursos do Azure. Ele fornece insights profundos sobre seus aplicativos, infraestrutura e rede, reunindo dados de log de diversas fontes. Com o poder da Linguagem de Consulta Kusto (KQL), você pode realizar consultas complexas para analisar o desempenho do sistema, solucionar problemas e detectar padrões anormais. O Azure Monitor Metrics complementa os Logs do Azure Monitor, oferecendo dados de desempenho em tempo real e de alta frequência para seus recursos do Azure. Ele rastreia métricas importantes, como uso de CPU, consumo de memória, taxas de solicitação e tempos de resposta, proporcionando visibilidade instantânea do desempenho do seu aplicativo.' },
            { text: 'Sondas de integridade do Azure Front Door e Testes de disponibilidade do Application Insights', isCorrect: false, rationale: 'Sondas de integridade do Azure Front Door são usadas principalmente para monitoramento de integridade em tempo real dos endpoints do aplicativo. Testes de Disponibilidade do Application Insights são usados principalmente para simular o tráfego de usuários de vários locais para medir a disponibilidade do seu aplicativo em tempo real. Embora ajudem com o status de integridade imediato e decisões de roteamento, elas não fornecem a análise histórica ou as tendências de tempo de atividade de longo prazo necessárias para gerar relatórios mensais ou analisar o desempenho ao longo do tempo.' },
            { text: 'Monitoramento de endpoint do Gerenciador de Tráfego do Azure e Registros do Azure Monitor', isCorrect: false, rationale: 'O Monitoramento de Endpoints do Gerenciador de Tráfego do Azure é útil apenas para monitorar a integridade dos endpoints para os quais o roteamento está sendo feito e ajuda a garantir que apenas endpoints íntegros estejam recebendo tráfego. Ele se concentra em verificações de integridade e decisões de roteamento em tempo real, em vez de armazenar e analisar dados históricos ao longo do tempo.' },
            { text: 'Métricas do Azure Monitor e Monitoramento de endpoint do Gerenciador de Tráfego do Azure', isCorrect: false, rationale: 'Métricas do Azure Monitor é correto, mas Monitoramento de endpoint do Gerenciador de Tráfego do Azure não é suficiente para a análise histórica e relatórios mensais exigidos.' }
        ],
        hint: 'Para relatórios mensais e dados históricos de desempenho, pense nos serviços do Azure Monitor que coletam e permitem consultar grandes volumes de telemetria.'
    },
    {
        question: 'Você gerencia várias APIs hospedadas pelo Azure API Management (APIM) para sua organização. Uma das APIs precisa de pequenas alterações não drásticas. Essas atualizações devem atender às seguintes condições: – Os consumidores existentes não devem sofrer interrupções. – Um mecanismo de reversão deve estar disponível caso surjam problemas. – As modificações devem ser documentadas para informar os desenvolvedores sobre as atualizações. – As mudanças devem ser exaustivamente testadas antes de serem tornadas públicas. Qual das seguintes opções é a abordagem mais eficaz para atualizar a API e, ao mesmo tempo, garantir a conformidade com essas condições?',
        options: [
            { text: 'Utilize o controle de versão baseado em cabeçalho para direcionar solicitações para diferentes versões de API sem alterar as configurações existentes do cliente.', isCorrect: false, rationale: 'Embora o versionamento baseado em cabeçalhos permita que os clientes especifiquem qual versão de uma API usar, ele normalmente é empregado para gerenciar alterações significativas em diferentes versões da API. A implementação desse método exige que os clientes incluam cabeçalhos específicos em suas solicitações, o que pode exigir modificações do lado do cliente. Além disso, essa abordagem é mais adequada para versionamento do que para lidar com alterações não significativas dentro da mesma versão da API.' },
            { text: 'Crie uma nova revisão na instância do Gerenciamento de API do Azure (APIM). Aplique as alterações e teste-as antes de aplicar a revisão atual.', isCorrect: true, rationale: 'O Azure API Management (APIM) oferece suporte a revisões, permitindo que os desenvolvedores introduzam alterações ininterruptas nas APIs sem afetar os consumidores existentes. Ao criar uma nova revisão, as modificações podem ser aplicadas e testadas exaustivamente de forma isolada. Uma vez validada, a revisão pode ser promovida para a versão atual, garantindo uma transição tranquila para os usuários. Em caso de problemas, a reversão para uma revisão anterior é simples, fornecendo um mecanismo de reversão confiável.' },
            { text: 'Configure um perfil do Gerenciador de Tráfego do Azure para rotear solicitações entre versões de API para testes controlados e reversão.', isCorrect: false, rationale: 'O Gerenciador de Tráfego do Azure foi projetado para distribuir o tráfego do usuário entre vários pontos de extremidade de serviço, principalmente para balanceamento de carga, failover e otimização de desempenho. Ele opera no nível do DNS e não é personalizado para rotear tráfego entre diferentes versões de API dentro do APIM. Usar o Gerenciador de Tráfego para essa finalidade seria uma abordagem pouco convencional e pode introduzir complexidade desnecessária sem atender aos requisitos específicos de controle de versão e revisões da API.' },
            { text: 'Use o Azure Pipelines para automatizar a implantação e os testes de API antes de implementar alterações.', isCorrect: false, rationale: 'O Azure Pipelines facilita os processos de integração e implantação contínuas (CI/CD), não fornecendo inerentemente os recursos necessários para modificações ininterruptas de API no Gerenciamento de API do Azure (APIM). Utilizar apenas o Azure Pipelines não atende aos requisitos de fazer pequenas alterações ininterruptas de API que precisam ser exaustivamente testadas, documentadas e implementadas com segurança, sem interromper os consumidores existentes.' }
        ],
        hint: 'Dentro do APIM, qual recurso permite fazer alterações e testá-las sem impactar a versão de produção, com opção de reversão?'
    },
    {
        question: 'Você está projetando uma API do Azure que precisa chamar com segurança outra API interna hospedada no Gerenciamento de API do Azure. Os seguintes requisitos de segurança devem ser atendidos: – A API deve se autenticar ao fazer chamadas para a API interna. – Nenhuma credencial de cliente, chaves de API ou tokens devem ser enviados manualmente. – A autenticação deve ser integrada ao Microsoft Entra ID para segurança perfeita. Qual mecanismo de autenticação deve ser implementado?',
        options: [
            { text: 'Autenticação de chave de API', isCorrect: false, rationale: 'A Autenticação de Chave de API envolve principalmente a passagem manual de uma chave de API nos cabeçalhos de solicitação para autenticar o chamador. Esse método exige o gerenciamento e o armazenamento seguro de chaves de API, o que não atende ao requisito de evitar o envio manual de credenciais ou tokens.' },
            { text: 'Política OAuth 2.0 do Gerenciamento de API do Azure', isCorrect: false, rationale: 'A política OAuth 2.0 do Azure API Management normalmente exige a geração e o gerenciamento manual de tokens de acesso, o que contradiz o requisito de não manipular tokens ou credenciais manualmente.' },
            { text: 'Identidade Gerenciada', isCorrect: true, rationale: 'Identidade Gerenciada é um recurso do Azure que permite que os serviços do Azure se autentiquem em outros recursos do Azure sem a necessidade de gerenciar credenciais manualmente. Quando um serviço recebe uma identidade gerenciada, ele pode usar o Microsoft Entra ID para se autenticar em recursos do Azure com segurança, eliminando a necessidade de os desenvolvedores manipularem credenciais.' },
            { text: 'Autenticação Básica', isCorrect: false, rationale: 'A Autenticação Básica requer apenas um nome de usuário e uma senha para autenticar uma solicitação, enviando essas credenciais no cabeçalho HTTP a cada chamada. Este método não atende ao requisito de segurança, pois envolve a transmissão de dados confidenciais em texto simples, a menos que sejam criptografados via HTTPS, e não se integra ao Microsoft Entra ID para autenticação automática.' }
        ],
        hint: 'Pense na solução do Azure que permite que os serviços se autentiquem usando o Microsoft Entra ID sem credenciais embutidas.'
    },
    {
        question: 'Você é um engenheiro de nuvem de uma empresa que está implementando o Azure Key Vault para armazenar e gerenciar chaves criptográficas, segredos e certificados com segurança. Você foi designado para configurar o Azure Key Vault usando o PowerShell para atender aos requisitos de segurança e conformidade. Você precisa garantir que, depois que uma chave ou segredo for excluído, ele não possa ser removido permanentemente de imediato e deve ser retido por um período obrigatório de 90 dias antes que a exclusão permanente seja permitida. Quais configurações devem ser habilitadas para atender a esse requisito? (Selecione DUAS).',
        options: [
            { text: 'EnablePurgeProtection e EnableSoftDelete', isCorrect: true, rationale: 'O recurso de exclusão reversível (soft delete) permite a recuperação de cofres e objetos excluídos (chaves, segredos, certificados) por um período configurável (7 a 90 dias). A proteção contra limpeza (purge protection) impede a exclusão permanente de um cofre ou objeto no estado excluído até que o período de retenção expire. Ambas devem ser habilitadas para garantir a retenção obrigatória e impedir a remoção imediata.' },
            { text: 'EnabledForDeployment e EnableSoftDelete', isCorrect: false, rationale: 'EnabledForDeployment permite apenas que máquinas virtuais e serviços do Azure recuperem segredos e certificados para implantação, mas não tem nada a ver com políticas de retenção ou exclusão. EnableSoftDelete é correto, mas não é suficiente por si só para impedir a exclusão permanente.' },
            { text: 'EnablePurgeProtection e EnabledForDiskEncryption', isCorrect: false, rationale: 'EnabledForDiskEncryption é usado principalmente para habilitar o Azure Disk Encryption (ADE) para acessar o Key Vault e gerenciar chaves de criptografia. Não afeta a forma como chaves ou segredos excluídos são retidos ou eliminados. EnablePurgeProtection é correto, mas não é suficiente por si só.' },
            { text: 'EnableSoftDelete e EnableRbacAuthorization', isCorrect: false, rationale: 'EnableRbacAuthorization habilita o Controle de Acesso Baseado em Função (RBAC) do Azure para o Key Vault, que está relacionado à autorização e ao gerenciamento de acesso. Ele não controla as configurações de proteção contra exclusão, retenção ou limpeza. EnableSoftDelete é correto, mas não é suficiente por si só.' }
        ],
        hint: 'Pense nos recursos do Key Vault que protegem contra exclusão acidental e forçam um período de retenção.'
    },
    {
        question: 'Você está criando um aplicativo Web do Serviço de Aplicativo do Azure que se conecta a um Banco de Dados SQL do Azure. Para melhorar o desempenho e a escalabilidade, você usará o Azure Cache para Redis para armazenar dados de sessão, armazenar em cache informações usadas com frequência e habilitar mensagens em tempo real entre componentes do aplicativo. Sua organização também considera o Azure Cosmos DB com gravações multirregionais para melhorar a disponibilidade do banco de dados. No entanto, sua tarefa é otimizar o cache e as mensagens com o Cache do Azure para a instância Redis Enterprise. Quais recursos atendem melhor ao requisito?',
        options: [
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Canal; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Lista; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Conjunto', isCorrect: true, rationale: 'Canal (Channel) em Redis é usado para publicação/assinatura (Pub/Sub), ideal para notificações em tempo real. Lista (List) do Redis funciona como uma fila de duas pontas, perfeita para gerenciar filas de tarefas. Conjunto (Set) garante exclusividade, sendo útil para armazenar funções ou dados únicos eficientemente.' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Hash; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Canal; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Conjunto Classificado', isCorrect: false, rationale: 'Hash armazena pares chave-valor e não é para Pub/Sub. Canal é para Pub/Sub, não para filas. Conjunto Classificado é para classificação, não para garantir exclusividade de forma geral.' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Conjunto; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Hash; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Lista', isCorrect: false, rationale: 'Conjunto é para exclusividade, não para Pub/Sub. Hash não é para filas. Lista é para filas, não para exclusividade.' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Conjunto Classificado; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Canal; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Hash', isCorrect: false, rationale: 'Conjunto Classificado e Canal estão em usos incorretos para os cenários propostos.' }
        ],
        hint: 'Associe as estruturas de dados do Redis (Canal, Lista, Conjunto, Hash, Conjunto Classificado) com seus casos de uso para mensagens, filas e armazenamento de dados únicos.'
    },
    {
        question: 'Você é um administrador de banco de dados que gerencia um Banco de Dados SQL do Azure para sua organização. Você precisa garantir que os usuários possam se conectar ao banco de dados usando a autenticação Microsoft Entra por meio do Microsoft SQL Server Management Studio (SSMS). Você também precisa permitir a autenticação usando credenciais locais do Active Directory, garantindo o mínimo de solicitações de autenticação. Você deseja implementar um método que permita que os usuários façam login sem inserir manualmente as credenciais sempre que se conectarem. Qual método de autenticação deve ser usado para atender a esse requisito?',
        options: [
            { text: 'Active Directory Integrated modo de autenticação', isCorrect: true, rationale: 'O Active Directory Integrated modo de autenticação requer uma instância local do Active Directory vinculada ao Microsoft Entra ID. Com este modo, os usuários conectados a uma máquina associada a um domínio podem acessar fontes de dados do Azure SQL perfeitamente, sem a necessidade de solicitações de credenciais, minimizando os prompts de autenticação.' },
            { text: 'Active Directory Interactive autenticação', isCorrect: false, rationale: 'A Autenticação Interativa do Active Directory requer interação do usuário e solicita autenticação a cada vez, o que contradiz o requisito de minimizar os prompts de autenticação. Normalmente, é usada quando a Autenticação Multifator (MFA) é necessária.' },
            { text: 'Tokens de ID do Microsoft Entra', isCorrect: false, rationale: 'A autenticação baseada em tokens é usada principalmente para aplicativos e serviços, e não para autenticação direta de usuários por meio do SSMS. Ele não permite autenticação integrada para usuários sem intervenção manual.' },
            { text: 'Autenticação do SQL Server', isCorrect: false, rationale: 'A autenticação do SQL Server exige a inserção manual de um nome de usuário e uma senha para cada conexão. Ela não oferece suporte à integração com o Microsoft Enterprise ID ou com o Active Directory local, o que a torna inadequada para os requisitos especificados.' }
        ],
        hint: 'Pense no método de autenticação do Microsoft Entra ID que oferece uma experiência de logon único para usuários de domínio no SSMS.'
    },
    {
        question: 'Sua empresa está desenvolvendo um serviço web ASP.NET Core Web API para alimentar uma plataforma de e-commerce. O serviço se integra ao Azure Application Insights para coletar telemetria e rastrear dependências. O serviço web processa pedidos de clientes, armazena dados no Microsoft SQL Server e se comunica com uma API de gateway de pagamento de terceiros para processar transações. Para garantir o monitoramento completo, você deve configurar o rastreamento de telemetria de dependências para interações com o gateway de pagamento externo. Quais propriedades de telemetria você deve usar para rastrear interações de gateway de pagamento para correlacioná-las com a operação geral da transação e garantir o rastreamento de ponta a ponta? (Escolha DUAS.)',
        options: [
            { text: 'Telemetry.id e Telemetry.Context.Operation.Id', isCorrect: true, rationale: 'O Telemetry.id identifica exclusivamente cada item de telemetria, fornecendo uma referência distinta para cada evento ou dependência rastreada. O Telemetry.Context.Operation.Id reúne vários eventos de telemetria em uma única operação, permitindo o rastreamento de ponta a ponta e a correlação entre diferentes serviços em uma transação unificada. Juntas, essas propriedades fornecem o contexto necessário para compreender o escopo completo das interações do usuário com dependências externas.' },
            { text: 'Telemetry.Context.Session.Id e Telemetry.id', isCorrect: false, rationale: 'Telemetry.Context.Session.Id é usado principalmente para rastrear a sessão do usuário dentro do aplicativo web, não para dependências externas. Embora Telemetry.id seja correto, esta combinação não é a ideal para rastreamento de dependência de ponta a ponta.' },
            { text: 'Telemetry.Context.Dependency.Type e Telemetry.Context.Operation.Id', isCorrect: false, rationale: 'Telemetry.Context.Dependency.Type é usado para especificar o tipo de dependência, mas não é suficiente para rastrear completamente a interação. Telemetry.Context.Operation.Id é correto, mas precisa de Telemetry.id para identificação única.' },
            { text: 'Telemetry.Context.Dependency.Target e Telemetry.Context.Session.Id', isCorrect: false, rationale: 'Telemetry.Context.Dependency.Target é útil para identificar o destino, mas não para o rastreamento de ponta a ponta da transação. Telemetry.Context.Session.Id não é relevante para dependências externas.' }
        ],
        hint: 'Pense nos identificadores que o Application Insights usa para rastrear eventos únicos e para correlacionar múltiplas operações a uma única transação de ponta a ponta.'
    },
    {
        question: 'Você gerencia vários aplicativos Web em execução no Azure e conta com o Azure Monitor para rastrear alterações de telemetria e configuração. Recentemente, modificações de configuração inesperadas foram aplicadas a aplicativos hospedados em um Ambiente de Serviço de Aplicativo (ASE). Você precisa identificar quais alterações de configuração foram feitas no Ambiente de Serviço de Aplicativo para garantir a conformidade e solucionar possíveis problemas relacionados a essas alterações. Qual log do Azure Monitor você deve revisar para rastrear essas alterações de configuração?',
        options: [
            { text: 'AppServiceEnvironmentPlatformLogs', isCorrect: true, rationale: 'AppServiceEnvironmentPlatformLogs são logs do Azure Monitor projetados especificamente para capturar eventos em nível de plataforma no Ambiente de Serviço de Aplicativo (ASE). Esses logs incluem detalhes sobre as alterações feitas na infraestrutura do ASE, como atualizações nas definições de configuração, operações de dimensionamento e modificações na rede. Isso permite que os administradores entendam como o ASE está configurado e identifiquem rapidamente quaisquer alterações inesperadas ou não autorizadas.' },
            { text: 'AppServiceAppLogs', isCorrect: false, rationale: 'AppServiceAppLogs concentra-se principalmente no registro em nível de aplicativo, capturando eventos como solicitações, erros e métricas de desempenho específicas do aplicativo. Ele é útil para diagnosticar problemas no próprio aplicativo, mas não rastreia alterações feitas na infraestrutura subjacente ou na configuração do ASE.' },
            { text: 'AzureResourceChangesLogs', isCorrect: false, rationale: 'AzureResourceChangesLogs rastreia alterações nos recursos do Azure em geral, incluindo aquelas relacionadas a máquinas virtuais, redes ou contas de armazenamento. Embora capture alterações no nível dos recursos em todo o ambiente do Azure, não foi criado especificamente para rastrear alterações de configuração no nível da plataforma em um ASE.' },
            { text: 'AzureDiagnosticsLogs', isCorrect: false, rationale: 'AzureDiagnosticsLogs é importante para monitoramento geral e solução de problemas, mas não rastreia especificamente alterações no nível da plataforma no ambiente ASE. Confiar apenas em AzureDiagnosticsLogs não daria visibilidade detalhada das alterações de configuração no ASE.' }
        ],
        hint: 'Para rastrear mudanças de configuração em nível de plataforma em um Ambiente de Serviço de Aplicativo (ASE), qual tipo de log foca especificamente na infraestrutura do ASE?'
    },
    {
        question: 'Você está criando uma solução baseada em Java que utiliza o Cassandra para armazenamento de dados de chave-valor. O aplicativo foi projetado para utilizar um novo recurso do Azure Cosmos DB com a API do Cassandra. Para facilitar o provisionamento de contas, bancos de dados e contêineres do Azure Cosmos DB, você estabeleceu um Grupo Microsoft Entra chamado Cosmos DB Creators. Além disso, você está considerando implementar um mecanismo de cache para aprimorar o desempenho de leitura. Este grupo não deve ter acesso às chaves necessárias para acesso aos dados. Qual controle de acesso baseado em função deve ser atribuído ao Microsoft Entra Group para atender a esses requisitos?',
        options: [
            { text: 'Operador Cosmos DB', isCorrect: true, rationale: 'A função Operador do Cosmos DB foi projetada especificamente para permitir o provisionamento e o gerenciamento de contas, bancos de dados e contêineres do Azure Cosmos DB sem conceder acesso aos dados contidos neles ou às chaves de acesso associadas. Atribuir esta função ao grupo Cosmos DB Creators garante que eles possam executar as tarefas de gerenciamento necessárias sem comprometer a segurança dos dados acessando chaves ou dados.' },
            { text: 'CosmosRestoreOperator', isCorrect: false, rationale: 'A função CosmosRestoreOperator se concentra principalmente na restauração de contas do Cosmos DB a partir de backups. Embora permita a interação com instâncias do Cosmos DB, não atende ao requisito de provisionamento de novas contas, bancos de dados e contêineres do Cosmos DB.' },
            { text: 'Colaborador do Redis Cache', isCorrect: false, rationale: 'A função "Redis Cache Contributor" é usada apenas para gerenciar o Azure Cache para Redis. Embora o cenário mencione um mecanismo de cache, esta função não é relevante para o controle de acesso do Cosmos DB.' },
            { text: 'Função de leitor de conta do Cosmos DB', isCorrect: false, rationale: 'A função de Leitor de Conta do Cosmos DB concede apenas acesso somente leitura às configurações da conta do Azure Cosmos DB, mas ainda permite acesso às chaves da conta, o que contradiz o requisito de que o Grupo Microsoft Entra não deve ter acesso às chaves.' }
        ],
        hint: 'Para um grupo que deve provisionar recursos do Cosmos DB, mas *não* ter acesso às chaves de dados, qual função RBAC se encaixa melhor?'
    },
    {
        question: 'Você transfere arquivos confidenciais de servidores de arquivos locais para o Armazenamento de Blobs do Azure e protege chaves de criptografia com o Azure Key Vault. Você também usa a Conta de Armazenamento do Azure para gerenciar o acesso seguro e precisa garantir que as chaves excluídas possam ser recuperadas por até 90 dias para evitar perdas acidentais. Você planeja integrar APIs do Azure Key Vault em scripts de automação para gerenciamento de chaves. Qual solução garante que as chaves excluídas possam ser recuperadas por até 90 dias?',
        options: [
            { text: 'Habilite a proteção de exclusão e limpeza suave usando o comando: `az keyvault update --enable-soft-delete true --enable-purge-protection true`', isCorrect: true, rationale: 'O recurso de exclusão reversível (soft delete) permite a recuperação de cofres e objetos excluídos (chaves, segredos, certificados) por um período configurável (7 a 90 dias). A proteção contra limpeza (purge protection) impede a exclusão permanente de um cofre ou objeto no estado excluído até que o período de retenção expire. Ambas devem ser habilitadas para garantir a retenção obrigatória e impedir a remoção imediata.' },
            { text: 'Use o `Add-AzKeyVaultKey` cmdlet do PowerShell.', isCorrect: false, rationale: 'Este comando é usado principalmente para criar ou importar novas chaves para o Azure Key Vault, mas não habilita a exclusão reversível ou a proteção contra limpeza.' },
            { text: 'Habilite o Azure Key Vault Private Link para proteger o acesso e impedir exclusões de chaves não autorizadas.', isCorrect: false, rationale: 'O Private Link apenas fornece segurança de rede restringindo o acesso ao Key Vault por meio de endpoints privados. Ele não impede a exclusão de chaves nem garante a recuperação delas.' },
            { text: 'Configure uma Política de Acesso ao Azure Key Vault para restringir operações de exclusão apenas a usuários específicos.', isCorrect: false, rationale: 'Restringir políticas de acesso pode ajudar a limitar exclusões não autorizadas, mas não fornece um mecanismo de recuperação caso uma chave seja excluída. Sem a exclusão reversível habilitada, as chaves excluídas são perdidas permanentemente.' }
        ],
        hint: 'Para garantir que chaves excluídas possam ser recuperadas por um período, e que a exclusão permanente seja impedida antes desse período, quais duas proteções devem ser ativadas no Key Vault?'
    },
    {
        question: 'Você precisa modificar um Aplicativo Lógico do Azure existente atualizando suas definições de fluxo de trabalho sem criar uma nova instância. Você deve editar a estrutura subjacente diretamente, preservando a implantação atual. Qual método deve ser usado para modificar as definições de fluxo de trabalho do Aplicativo Lógico do Azure existente?',
        options: [
            { text: 'Use a opção Visualização de código do aplicativo lógico no portal do Azure.', isCorrect: true, rationale: 'No portal do Azure, os Aplicativos Lógicos do Azure permitem editar fluxos de trabalho visualmente ou programaticamente. Na Visualização de Código, você pode modificar diretamente o arquivo de definição do fluxo de trabalho no formato JSON, preservando a implantação atual sem a necessidade de criar uma nova instância.' },
            { text: 'Exclua o aplicativo lógico existente e crie um novo com a lógica atualizada.', isCorrect: false, rationale: 'Essa abordagem é ineficiente e desnecessária, pois resulta na perda do histórico de execução, logs e conexões, exigindo uma reimplantação completa.' },
            { text: 'Modifique o aplicativo lógico no portal do Azure usando o modo de exibição Designer.', isCorrect: false, rationale: 'Embora a visualização Designer permita modificações no fluxo de trabalho, ela não oferece controle total sobre a definição do fluxo de trabalho, especialmente para personalizações avançadas. Algumas configurações e ajustes complexos de lógica só podem ser feitos usando a Visualização de Código.' },
            { text: 'Exportar o aplicativo lógico como um modelo ARM, modificar a definição do fluxo de trabalho e reimplantar.', isCorrect: false, rationale: 'Esse método é usado principalmente em cenários de infraestrutura como código (IaC) e não é a maneira mais eficiente de modificar uma instância existente do Aplicativo Lógico, pois requer reimplantação em vez de atualizações diretas no local.' }
        ],
        hint: 'Para modificar diretamente a estrutura JSON de um Logic App existente sem recriá-lo, qual recurso do portal do Azure você usaria?'
    },
    {
        question: 'Você gerencia um site de comércio eletrônico que atende clientes em diversas localizações geográficas. Você precisa garantir que seu site permaneça altamente disponível e ofereça uma experiência de baixa latência para os usuários, mesmo durante períodos de pico de tráfego. Você está procurando uma solução que possa distribuir eficientemente ativos estáticos, como imagens, CSS e arquivos JavaScript para reduzir a carga do servidor e melhorar os tempos de resposta. Solução: implemente o Azure Cache para Redis para armazenar ativos estáticos acessados com frequência e servi-los diretamente da memória. A solução atende ao objetivo?',
        options: [
            { text: 'Sim', isCorrect: false, rationale: 'O Azure Cache para Redis é um armazenamento de dados na memória que aprimora o desempenho e a escalabilidade de aplicativos que dependem fortemente de armazenamentos de dados de back-end. Ele é adequado para aplicativos dentro ou fora do Azure e pode ser usado como um cache distribuído de dados ou conteúdo, um repositório de sessões, um agente de mensagens e muito mais. **No entanto, o Azure Cache para Redis não foi projetado principalmente para distribuir ativos estáticos, como imagens, CSS e arquivos JavaScript.** Ativos estáticos exigem cache de borda e distribuição de conteúdo em várias localizações geográficas para garantir acesso de baixa latência para os usuários. O Redis Cache não oferece suporte inerente a essa funcionalidade, pois fornece dados principalmente de um armazenamento centralizado na memória, em vez de locais geograficamente dispersos. Essa limitação o torna ineficiente para reduzir a latência e distribuir grandes arquivos estáticos globalmente.' },
            { text: 'Não', isCorrect: true, rationale: 'O Azure Cache para Redis é um armazenamento de dados na memória que aprimora o desempenho e a escalabilidade de aplicativos que dependem fortemente de armazenamentos de dados de back-end. Ele é adequado para aplicativos dentro ou fora do Azure e pode ser usado como um cache distribuído de dados ou conteúdo, um repositório de sessões, um agente de mensagens e muito mais. **No entanto, o Azure Cache para Redis não foi projetado principalmente para distribuir ativos estáticos, como imagens, CSS e arquivos JavaScript.** Ativos estáticos exigem cache de borda e distribuição de conteúdo em várias localizações geográficas para garantir acesso de baixa latência para os usuários. O Redis Cache não oferece suporte inerente a essa funcionalidade, pois fornece dados principalmente de um armazenamento centralizado na memória, em vez de locais geograficamente dispersos. Essa limitação o torna ineficiente para reduzir a latência e distribuir grandes arquivos estáticos globalmente.' }
        ],
        hint: 'Considere se o Azure Cache para Redis é a solução ideal para *distribuição global* e *cache de borda* de ativos estáticos, como imagens e arquivos JS/CSS.'
    },
    {
        question: 'Sua organização está implementando serviços de Armazenamento do Azure e precisa fornecer acesso seguro e por tempo limitado aos recursos de armazenamento. Para atender a esse requisito, você planeja configurar uma Assinatura de Acesso Compartilhado (SAS). Além disso, a equipe de segurança sugere considerar o Azure Key Vault para gerenciar credenciais de acesso em serviços de nuvem. No entanto, você precisa determinar os tipos de SAS corretos para diferentes cenários de acesso. Que tipo de Assinatura de Acesso Compartilhado (SAS) deve ser usada para cada cenário?',
        options: [
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Delegação de Usuário SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Serviço SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Conta SAS', isCorrect: true, rationale: 'O SAS de Delegação de Usuário utiliza o Microsoft Entra ID para autenticação e autorização, fornecendo segurança baseada em identidade. O SAS de Serviço fornece acesso a um serviço específico do Armazenamento do Azure (ex: apenas Blob ou apenas Fila). O SAS de Conta concede acesso a vários serviços de armazenamento em uma única conta de Armazenamento do Azure (Blobs, Filas, Tabelas e Arquivos).' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Serviço SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Delegação de Usuário SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Conta SAS', isCorrect: false, rationale: 'As associações estão incorretas. O SAS de Serviço não usa credenciais do Entra ID, e o SAS de Delegação de Usuário não é apenas para um serviço específico.' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Conta SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Delegação de Usuário SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Serviço SAS', isCorrect: false, rationale: 'As associações estão incorretas. O SAS de Conta não usa credenciais do Entra ID, e as outras associações também estão trocadas.' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Delegação de Usuário SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Conta SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Serviço SAS', isCorrect: false, rationale: 'As associações estão incorretas. A Conta SAS não é para um serviço específico, e o Serviço SAS não é para vários serviços.' }
        ],
        hint: 'Associe os tipos de SAS com o escopo de acesso (serviço específico, toda a conta, ou baseado em identidade do Entra ID).'
    },
    {
        question: 'Você está projetando uma plataforma interna de compartilhamento de conhecimento para uma empresa. A plataforma deve gerar relatórios que identifiquem funcionários especialistas em diversos tópicos. Para cumprir as políticas organizacionais, os administradores devem ter controle total e consentimento sobre o acesso e o processamento de dados. Além disso, a solução deve oferecer suporte à extração escalável de dados para análises e relatórios. A empresa também está considerando integrar o Microsoft Purview para governança de dados, mas deve garantir a conformidade com as políticas de segurança internas. Qual tecnologia você deve implementar?',
        options: [
            { text: 'Pesquisa do Microsoft Graph', isCorrect: false, rationale: 'A Pesquisa do Microsoft Graph é projetada para consultar dados indexados em aplicativos do Microsoft 365, não para extrair dados em larga escala para análises com controle administrativo rigoroso.' },
            { text: 'Conexão de dados do Microsoft Graph', isCorrect: true, rationale: 'O Microsoft Graph Data Connect é um serviço que permite a extração segura e em alto volume de dados do Microsoft 365 para soluções de análise e armazenamento baseadas no Azure. Ele oferece um modelo de controle administrativo e consentimento, garantindo governança, segurança e conformidade dos dados, além de suportar o processamento em lote para análises avançadas.' },
            { text: 'Conectores do Microsoft Graph', isCorrect: false, rationale: 'Os Conectores do Microsoft Graph permitem apenas a integração de fontes de dados externas ao Microsoft Graph Search, aprimorando os resultados de pesquisa, mas não facilitam a extração ou análise de dados em larga escala do Microsoft 365.' },
            { text: 'Explorador de gráficos do Microsoft Graph', isCorrect: false, rationale: 'O Microsoft Graph Explorer é uma ferramenta de desenvolvedor usada para interagir com as APIs do Microsoft Graph para testes e recuperação de dados, não para processamento de dados em larga escala ou geração de relatórios com controle administrativo.' }
        ],
        hint: 'Para extração de dados do Microsoft 365 em larga escala para análise, com foco em controle administrativo e conformidade, qual serviço do Microsoft Graph é o mais adequado?'
    },
    {
        question: 'Você implantou um aplicativo Web do Serviço de Aplicativo do Azure e configurou um registro de aplicativo no Microsoft Entra ID e no GitHub. O aplicativo precisa autenticar os usuários e, ao mesmo tempo, aplicar o SSL para comunicação segura. Além disso, o GitHub está definido como o provedor de identidade para autenticação do usuário. Para garantir a autenticação segura, o aplicativo precisa validar a solicitação do Microsoft Entra ID no código do aplicativo. Qual componente do token de ID deve ser validado para confirmar sua autenticidade?',
        options: [
            { text: 'Cabeçalho do token de ID', isCorrect: false, rationale: 'O cabeçalho do token de ID contém apenas metadados, como o algoritmo de assinatura e o identificador da chave, mas não verifica a autenticidade do token. Embora ajude a determinar como o token foi assinado, não prova que o token é válido ou não foi modificado.' },
            { text: 'Assinatura de token de ID', isCorrect: true, rationale: 'A assinatura do token de ID garante que o Microsoft Entra ID emitiu o token e que ele não foi adulterado. Quando o aplicativo recebe um token de ID, ele deve validar a assinatura usando as chaves públicas fornecidas pelo ponto de extremidade de descoberta OpenID Connect do Microsoft Entra ID para confirmar sua autenticidade.' },
            { text: 'ID do cliente', isCorrect: false, rationale: 'O ID do Cliente identifica apenas o aplicativo que solicitou a autenticação, mas não valida a autenticidade do token de ID. Ele é usado para diferenciar aplicativos no Microsoft Entra ID, mas um invasor pode modificar as declarações de um token e ainda incluir um ID do Cliente válido.' },
            { text: 'ID do aplicativo URI', isCorrect: false, rationale: 'O URI do ID do Aplicativo normalmente define o identificador exclusivo de uma API no Microsoft Entra ID, usado ao solicitar permissões e validar o público. Embora ajude a determinar a quem o token se destina, não confirma a autenticidade do token nem impede adulterações.' }
        ],
        hint: 'Para garantir que um token de ID não foi adulterado e foi emitido por uma autoridade confiável, qual parte do token você deve verificar criptograficamente?'
    },
    {
        question: 'Você é um administrador de TI de uma empresa de comércio eletrônico que está migrando seu sistema de processamento de pedidos para uma máquina virtual (VM) do Azure. Você deve considerar os seguintes requisitos: – Garanta um desempenho rápido de disco com baixa latência para lidar com milhares de transações de clientes por segundo. – Selecione um tipo de disco que forneça alto IOPS e taxa de transferência para acompanhar o alto volume de operações de leitura/gravação do banco de dados. Você também precisa de uma opção de redundância que garanta a disponibilidade dos dados mesmo se um data center inteiro do Azure na região falhar, evitando tempo de inatividade durante eventos de pico de vendas. Qual tipo de disco gerenciado do Azure e opção de redundância devem ser usados para atender a esses requisitos?',
        options: [
            { text: 'Tipo de disco gerenciado do Azure: SSD Premium; Tipo de redundância de armazenamento do Azure: ZRS (Armazenamento Redundante de Zona)', isCorrect: true, rationale: 'Os SSDs Premium do Azure oferecem suporte a discos de alto desempenho e baixa latência para VMs que lidam com cargas de trabalho intensivas de E/S. O armazenamento redundante de zona (ZRS) garante que seus dados sejam replicados de forma síncrona em três zonas de disponibilidade do Azure dentro da região primária, protegendo contra falhas em data centers inteiros dentro da mesma região. Esta combinação atende aos requisitos de alto desempenho e alta disponibilidade dentro da região.' },
            { text: 'Tipo de disco gerenciado do Azure: SSD Padrão; Tipo de redundância de armazenamento do Azure: GRS (armazenamento geo-redundante)', isCorrect: false, rationale: 'O SSD Padrão oferece IOPS mais baixos e latência mais alta, tornando-o inadequado para aplicativos de alto desempenho. O GRS replica dados entre regiões, mas não fornece failover automático para discos gerenciados, o que não atende ao requisito de disponibilidade contínua para discos de VM.' },
            { text: 'Tipo de disco gerenciado do Azure: Ultra Disco; Tipo de redundância de armazenamento do Azure: RA-GRS (Armazenamento Geo-Redundante de Acesso de Leitura)', isCorrect: false, rationale: 'Embora o Ultra Disk ofereça desempenho extremo, ele não oferece suporte principal ao ZRS, o que significa que não tem proteção contra falhas em todo o data center. RA-GRS é usado para contas de armazenamento e blobs, não para Azure Managed Disks, e não fornece redundância em nível de zona.' },
            { text: 'Tipo de disco gerenciado do Azure: SSD Premium; Tipo de redundância de armazenamento do Azure: GRS (armazenamento geo-redundante)', isCorrect: false, rationale: 'SSD Premium é correto para desempenho, mas GRS não fornece a redundância em nível de zona necessária para alta disponibilidade dentro da mesma região para discos de VM.' }
        ],
        hint: 'Para alto IOPS e baixa latência de disco, e proteção contra falhas de data center dentro da mesma região, qual combinação de tipo de disco e redundância é a ideal?'
    },
    {
        question: 'Você é engenheiro de segurança em nuvem em uma empresa de SaaS que fornece serviços de criptografia de documentos para empresas. A empresa utiliza o Azure Key Vault para armazenar as chaves criptográficas para criptografar os documentos dos clientes. Para atender à conformidade de segurança ISO 27001, sua organização deve: – Aplicar algoritmos criptográficos específicos para chaves armazenadas no Key Vault. – Garantir que as chaves sejam rotacionadas regularmente. – Impedir o uso de algoritmos de criptografia legados. Qual solução você deve implementar?',
        options: [
            { text: 'Firewall do Key Vault', isCorrect: false, rationale: 'O firewall do Key Vault controla principalmente o acesso em nível de rede ao Azure Key Vault, restringindo o acesso com base em endereços IP ou redes virtuais. Embora aumente a segurança ao impedir o acesso não autorizado, ele não lida com políticas criptográficas nem impõe a rotação de chaves ou impede o uso de algoritmos legados.' },
            { text: 'Política do Azure', isCorrect: true, rationale: 'O Azure Policy é um serviço de governança que permite que organizações criem, atribuam e gerenciem definições de políticas para aplicar regras e efeitos específicos em seus recursos. Com o Azure Policy, você pode aplicar regras como exigir algoritmos criptográficos específicos, garantir a rotação regular de chaves e impedir o uso de algoritmos legados para conformidade com padrões como ISO 27001. Ele avalia os recursos durante seu ciclo de vida para garantir a conformidade contínua.' },
            { text: 'Política de Rotação de Chaves', isCorrect: false, rationale: 'Embora o Azure ofereça funcionalidade de rotação de chaves, ela geralmente é gerenciada manualmente ou por automação. A Política do Azure seria mais eficaz para impor a rotação de chaves regularmente, juntamente com outros requisitos criptográficos, de forma holística e automatizada.' },
            { text: 'Especificações do modelo do Azure Resource Manager', isCorrect: false, rationale: 'As especificações do modelo do Azure Resource Manager são usadas principalmente para implantar e gerenciar recursos do Azure com base em configurações predefinidas. Embora eficazes para a configuração inicial, não fornecem a aplicação contínua de políticas necessária para gerenciar rotações de chaves ou padrões criptográficos após a implantação dos recursos.' }
        ],
        hint: 'Para impor padrões de segurança contínuos e conformidade em recursos do Azure, como quais algoritmos criptográficos usar ou a rotação de chaves, qual serviço de governança você deve utilizar?'
    },
    {
        question: 'Você é desenvolvedor de APIs para uma empresa de tecnologia financeira que fornece processamento de transações em tempo real por meio de uma instância de nível Standard do Azure API Management (APIM) chamada Agila. Essa instância APIM é configurada com um gateway gerenciado para expor APIs com segurança a clientes externos. Uma das APIs, a TransactionAPI, interage com um banco de dados de back-end que só pode lidar com um volume limitado de solicitações por minuto devido a restrições de licenciamento. Para evitar a degradação do desempenho, você precisa aplicar uma política que limite o número de chamadas de API de um endereço IP individual para garantir o uso justo e, ao mesmo tempo, proteger o sistema de back-end contra sobrecarga. Qual política de APIM você deve aplicar ao TransactionAPI para atender a esse requisito?',
        options: [
            { text: 'set-backend-service', isCorrect: false, rationale: 'Esta política é usada principalmente para especificar o serviço de back-end para o qual as chamadas de API são encaminhadas. Ela não aborda a limitação de taxa ou o controle do volume de solicitações.' },
            { text: 'rate-limit-by-key', isCorrect: true, rationale: 'A política `rate-limit-by-key` no Gerenciamento de API do Azure (APIM) permite controlar a taxa de processamento das solicitações, impondo limites com base em uma chave específica, como uma chave de API, ID de assinatura ou endereço IP do cliente. Isso é particularmente útil para evitar o uso excessivo ou abusivo do sistema por um único cliente ou grupo de clientes, protegendo o back-end contra sobrecarga.' },
            { text: 'rate-limit', isCorrect: false, rationale: 'A política `rate-limit` aplica-se globalmente, sem estar vinculada a uma chave específica (como IP individual). Isso significa que limitaria o número total de solicitações para toda a API, não para usuários ou clientes individuais, o que não atende ao requisito de uso justo por IP individual.' },
            { text: 'set-query-parameter', isCorrect: false, rationale: 'Esta política é útil apenas para modificar parâmetros de consulta em solicitações, não para controlar a taxa de chamadas de API ou limitar solicitações. É irrelevante para o cenário em que a limitação de taxa por endereço IP é necessária.' }
        ],
        hint: 'Para limitar o número de chamadas de API por cliente individual (como um endereço IP) no APIM, qual política de limitação de taxa específica você usaria?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo web para um cliente corporativo que se integra à plataforma de identidade da Microsoft para autenticação de usuários. A aplicação deve implementar com segurança a identificação de usuários para rastreá-los em vários serviços dentro do mesmo locatário do Microsoft Enterprise ID. Para garantir a consistência, o aplicativo deve usar um identificador único e imutável para cada usuário. Que tipo de reivindicação é necessária para esse cenário?',
        options: [
            { text: 'Reivindicação de ID de Objeto (OID)', isCorrect: true, rationale: 'A Reivindicação de ID de Objeto (OID) é um identificador exclusivo e permanente atribuído a cada usuário em um locatário do Microsoft Entra ID. Ele rastreia e gerencia usuários de forma consistente em vários aplicativos e serviços na mesma organização, permanecendo inalterado durante todo o ciclo de vida do usuário, o que o torna um identificador confiável e imutável.' },
            { text: 'Reivindicação de identificação do inquilino (TID)', isCorrect: false, rationale: 'A Declaração de ID do Locatário (TID) é usada principalmente para identificar o locatário do Microsoft Entra ID ao qual um usuário pertence, não para identificar usuários individuais de forma exclusiva.' },
            { text: 'Nome Principal do Usuário (UPN)', isCorrect: false, rationale: 'O Nome Principal do Usuário (UPN) é geralmente usado como nome de login do usuário, mas não é um identificador imutável, pois pode mudar se o endereço de e-mail ou o domínio do usuário mudar.' },
            { text: 'Identificador Pseudônimo em Par (PPID)', isCorrect: false, rationale: 'O Identificador Pseudônimo Parcial (PPID) é usado em cenários de preservação da privacidade para um pseudônimo atribuído a um usuário para interações entre aplicativos, não para ser um identificador permanente ou imutável para rastrear usuários de forma consistente em todos os serviços.' }
        ],
        hint: 'Para um identificador de usuário único e imutável dentro de um locatário do Microsoft Entra ID, qual reivindicação é a mais adequada?'
    },
    {
        question: 'Você está desenvolvendo um sistema de rastreamento logístico em tempo real para caminhões de entrega que envia dados de localização e status para o backend via Azure Web PubSub. Um aplicativo do Azure Functions processa esses dados para análises em tempo real, estimando os tempos de entrega e sinalizando atrasos. Uma rede de distribuição de conteúdo (CDN) otimiza a transmissão de dados para os painéis do cliente. Para aprimorar a segurança da API, o Gerenciamento de API do Azure (APIM) é introduzido para proteger endpoints e impor a autenticação. A configuração correta do cabeçalho HTTP é necessária para garantir a comunicação segura entre a CDN e o aplicativo do Azure Functions. Qual cabeçalho HTTP deve ser adicionado à lista permitida?',
        options: [
            { text: 'WebHook-Allowed-Rate', isCorrect: false, rationale: 'Este cabeçalho é usado principalmente para fins de limitação de taxa e não valida a origem das solicitações.' },
            { text: 'WebHook-Request-Origin', isCorrect: true, rationale: 'Ao configurar cabeçalhos HTTP para comunicação segura entre uma Rede de Distribuição de Conteúdo (CDN) e o Azure Functions, é essencial definir cabeçalhos apropriados que validem a origem das solicitações. Em particular, cabeçalhos como `WebHook-Request-Origin` podem ser usados para especificar as origens permitidas das solicitações, garantindo que elas sejam provenientes de fontes confiáveis, como a CDN, e evitando problemas de origem cruzada.' },
            { text: 'WebHook-Allowed-Origin', isCorrect: false, rationale: 'Cabeçalhos como este não são padrão em configurações de segurança de API para validar a origem das solicitações de forma segura entre serviços.' },
            { text: 'WebHook-Request-Callback', isCorrect: false, rationale: 'Este cabeçalho está relacionado à especificação de URLs de retorno de chamada para receber a resposta de um webhook e não serve ao propósito de validar a origem das solicitações.' }
        ],
        hint: 'Para garantir que as requisições de webhook para seu Azure Function venham de uma origem confiável como uma CDN, qual cabeçalho HTTP é usado para validar a origem da requisição?'
    },
    {
        question: 'Você faz parte de uma equipe de desenvolvimento de uma empresa de tecnologia que fornece vários serviços web baseados em nuvem. Todos os serviços web devem observar as seguintes normas de segurança e acesso. – As solicitações de API devem ser gerenciadas pelo Gerenciamento de API do Azure. – A autenticação deve ser feita usando o OpenID Connect. – Solicitações anônimas devem ser estritamente bloqueadas. – O API Gateway deve registrar tentativas de acesso para fins de auditoria. Uma avaliação de segurança recente descobriu que alguns endpoints de API são acessíveis sem autenticação, o que pode levar ao acesso não autorizado a dados. Qual política de Gerenciamento de API do Azure você deve configurar para impor a autenticação?',
        options: [
            { text: 'authentication-managed-identity', isCorrect: false, rationale: 'Esta política permite que o Gerenciamento de API do Azure se autentique ao chamar um serviço de back-end usando a Identidade Gerenciada do Azure, mas não valida a autenticação para solicitações de API de cliente recebidas usando OpenID Connect.' },
            { text: 'validate-jwt', isCorrect: true, rationale: 'No Gerenciamento de API do Azure, a política `validate-jwt` garante que cada solicitação de API contenha um JSON Web Token (JWT) válido antes de ser processada. Essa política valida o emissor (provedor do OpenID Connect), o público, a expiração e a assinatura do token. Se o token estiver ausente, expirado ou inválido, a solicitação de API será negada, impedindo o acesso não autorizado, e atendendo ao requisito de autenticação via OpenID Connect e bloqueio de solicitações anônimas.' },
            { text: 'check-header', isCorrect: false, rationale: 'Esta política inspeciona apenas cabeçalhos de solicitação HTTP para determinar se um cabeçalho específico está presente ou possui um valor específico. Embora possa verificar a existência de um cabeçalho `Authorization`, ela não valida JWTs nem garante a autenticação do OpenID Connect.' },
            { text: 'authentication-basic', isCorrect: false, rationale: 'Esta política normalmente habilita a Autenticação Básica (nome de usuário e senha no cabeçalho `Authorization`). No entanto, a Autenticação Básica não oferece suporte à validação OpenID Connect ou JWT, que são necessárias neste cenário.' }
        ],
        hint: 'Para impor a autenticação OpenID Connect e bloquear solicitações anônimas em um API Gateway do Azure, qual política do APIM valida a presença e validade de um token de segurança?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo Web no Serviço de Aplicativo do Azure que precisa de acesso seguro aos segredos do Azure Key Vault. Você deve autenticar sem armazenar credenciais no código ao usar a autenticação do Microsoft Entra ID e do Serviço de Aplicativo do Azure. Você precisa de uma maneira segura e com privilégios mínimos para autenticar e acessar o Key Vault. Qual solução atenderá a esse requisito?',
        options: [
            { text: 'Configure uma política de acesso ao Azure Key Vault para permitir a Identidade Gerenciada do aplicativo Web.', isCorrect: true, rationale: 'Identidades gerenciadas fornecem uma identidade gerenciada automaticamente no Microsoft Entra ID para recursos do Azure, permitindo que aplicativos se conectem a recursos que suportam a autenticação do Microsoft Entra (como o Key Vault) sem a necessidade de provisionar ou rotacionar segredos no código. Configurar uma política de acesso no Key Vault para permitir essa Identidade Gerenciada é a maneira segura e de privilégios mínimos de acesso aos segredos.' },
            { text: 'Armazene um ID de cliente de aplicativo e um segredo nas configurações do aplicativo para autenticar com o Microsoft Entra ID.', isCorrect: false, rationale: 'Armazenar credenciais nas configurações do aplicativo representa um risco à segurança e exige rotação manual, o que aumenta a sobrecarga administrativa. A Identidade Gerenciada elimina esse risco.' },
            { text: 'Recupere segredos usando o `az keyvault secret show` comando.', isCorrect: false, rationale: 'Este comando é para uso interativo ou scripts de automação. A autenticação da CLI do Azure não é uma solução prática ou escalável para aplicativos de produção, pois requer autenticação manual e não se integra aos mecanismos de autenticação internos do Serviço de Aplicativo.' },
            { text: 'Crie uma entidade de serviço Microsoft Entra, atribua a ela acesso ao Key Vault e gerencie as credenciais manualmente.', isCorrect: false, rationale: 'Criar uma Entidade de Serviço e gerenciar suas credenciais manualmente normalmente requer gerenciamento manual de credenciais (ID de cliente e segredo ou certificado), o que aumenta os riscos de segurança e a complexidade desnecessária em comparação com a Identidade Gerenciada.' }
        ],
        hint: 'Para que um aplicativo Web acesse o Key Vault de forma segura, sem credenciais no código e usando o Microsoft Entra ID, qual recurso do Azure fornece uma identidade automática para o aplicativo?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo de compartilhamento de viagens em tempo real, onde as localizações dos motoristas são armazenadas em uma instância do Azure Cache para Redis. O sistema em desenvolvimento deve: – Priorize motoristas recentemente ativos para uma rápida correspondência de passageiros. – Excluir motoristas inativos que ficaram offline por um período definido. – Otimize o uso da memória para armazenar locais de drivers relevantes. – Use o Azure Event Grid para notificar quando um driver estiver disponível. Qual política de despejo deve ser implementada?',
        options: [
            { text: 'noeviction', isCorrect: false, rationale: 'A política `noeviction` impede a remoção quando o limite de memória é atingido, o que significa que, se o cache estiver cheio, novas gravações falharão. Isso é inadequado para o caso de uso, pois você precisa atualizar continuamente os locais dos drivers sem o risco de bloquear as gravações.' },
            { text: 'volatile-lru', isCorrect: true, rationale: 'A política `volatile-lru` (Least Recently Used) remove as chaves menos usadas recentemente entre aquelas com uma expiração definida. Isso é ideal para o cenário, pois prioriza motoristas ativos (recentemente usados) e permite que motoristas inativos (que não foram usados por um tempo e têm expiração definida) sejam removidos, otimizando o uso da memória e priorizando a atualidade.' },
            { text: 'allkeys-lru', isCorrect: false, rationale: 'A política `allkeys-lru` remove as chaves menos usadas recentemente de *todas* as chaves, independentemente de terem ou não uma expiração definida. Embora possa priorizar a atividade recente, ela não gerencia especificamente chaves expiradas ou inativas e não requer expiração explícita, o que adicionaria complexidade manual para lidar com motoristas inativos.' },
            { text: 'volatile-lfu', isCorrect: false, rationale: 'A política `volatile-lfu` (Least Frequently Used) remove as chaves menos *frequentemente* usadas com uma expiração definida. No entanto, em um aplicativo de compartilhamento de viagens, a *atualidade* (recentemente usado) é mais importante do que a frequência geral de uso para priorizar motoristas ativos, tornando `volatile-lru` mais adequado.' }
        ],
        hint: 'Para um cache Redis onde a atualidade dos dados é crucial e dados inativos devem ser removidos, qual política de despejo baseada na "menos recentemente usada" e com expiração definida é a mais apropriada?'
    },
    {
        question: 'Você mantém um aplicativo web de missão crítica do Serviço de Aplicativo do Azure para milhares de usuários e habilitou o Application Insights para monitoramento. Sua equipe observou diversas exceções no ambiente de produção, causando falhas intermitentes. Para identificar a causa raiz, você precisa examinar a execução do código-fonte e os valores das variáveis quando ocorrem exceções sem afetar o desempenho ao vivo. Além disso, sua equipe usa os Alertas do Azure Monitor para ser notificada quando a taxa de exceção excede um limite. Qual recurso do Application Insights é mais adequado para esse cenário?',
        options: [
            { text: 'Depurador de Snapshot', isCorrect: true, rationale: 'O Snapshot Debugger do Application Insights é uma ferramenta poderosa projetada para ajudar desenvolvedores a diagnosticar e resolver exceções em ambientes de produção sem afetar o desempenho do aplicativo. Quando ocorre uma exceção, ele captura automaticamente um instantâneo do estado do aplicativo, incluindo a pilha de chamadas e os valores das variáveis, fornecendo insights detalhados sobre o problema. Isso permite a depuração de causa raiz sem interrupção do serviço.' },
            { text: 'Painel de falhas do Application Insights', isCorrect: false, rationale: 'O Painel de Falhas do Application Insights agrega dados de falhas de alto nível, como solicitações com falha e exceções, mas não fornece recursos de depuração aprofundados para inspecionar a execução real do código-fonte ou os valores das variáveis quando ocorre uma exceção.' },
            { text: 'Perfilador', isCorrect: false, rationale: 'O Profiler se concentra principalmente em rastrear problemas de desempenho, como uso da CPU, chamadas de função e tempos de execução. Ele não se concentra em depurar exceções ou examinar o estado do aplicativo quando ocorre um erro.' },
            { text: 'Logs do Azure Monitor com consulta Kusto', isCorrect: false, rationale: 'O Azure Monitor Logs com Kusto Query é usado para consultar e analisar dados de log a fim de identificar tendências, padrões ou anomalias. Embora possa ajudar a identificar exceções, não fornece acesso direto ao estado de execução do aplicativo no momento de uma exceção ou a valores de variáveis, como o Snapshot Debugger.' }
        ],
        hint: 'Para examinar o estado do código-fonte e os valores das variáveis *no momento de uma exceção* em produção, sem impactar o desempenho, qual recurso do Application Insights é o mais adequado?'
    },
    {
        question: 'Você tem dois Hyper-V hosts named Host1 and Host2. Host1 has an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource Manager template. You need to move VM1 to Host2. [cite_start]What should you do? [cite: 836, 837, 838, 839]',
        options: [
            [cite_start],{ text: 'From the Update management blade, click Enable. [cite: 840]', isCorrect: false, rationale: 'A lâmina "Update management" e o clique em "Enable" não são as ações corretas para mover uma máquina virtual entre hosts Hyper-V. Isso está relacionado ao gerenciamento de atualizações, não à migração de VM.' },
            [cite_start],{ text: 'From the Overview blade, move VM1 to a different subscription. [cite: 841]', isCorrect: false, rationale: 'Mover VM1 para uma assinatura diferente a partir da lâmina "Overview" não moverá a VM para outro host Hyper-V (Host2). Isso é uma operação de gerenciamento de recursos no Azure, não uma migração de máquina virtual subjacente entre hosts físicos.' },
            [cite_start],{ text: 'From the Redeploy blade, click Redeploy. [cite: 842]', isCorrect: true, rationale: 'A opção "Redeploy" (Reimplantar) de uma máquina virtual no Azure recria a VM no mesmo grupo de disponibilidade (se aplicável) e, o mais importante, a migra para um *novo host* no cluster do Azure. Isso atende ao requisito de mover a VM1 para o Host2 (assumindo que Host2 é o novo host no qual o Azure a realocará).' },
            [cite_start],{ text: 'From the Profile blade, modify the usage location. [cite: 843]', isCorrect: false, rationale: 'A lâmina "Profile" e a modificação da localização de uso não são as ações corretas para migrar uma VM entre hosts. A localização de uso refere-se à região do Azure, não ao host físico.' }
        ],
        hint: 'Para migrar uma VM do Azure para um novo host subjacente (sem precisar de migração Hyper-V manual), qual operação do portal do Azure ou CLI você usaria para forçar uma realocação?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Você baixou um modelo do Azure Resource Manager para implantar várias máquinas virtuais. O modelo é baseado em uma máquina virtual atual, mas deve ser adaptado para fazer referência a uma senha administrativa. Você precisa garantir que a senha não seja armazenada em texto simples. Você está se preparando para criar os componentes necessários para atingir seu objetivo. Quais dos seguintes você deve criar para atingir seu objetivo?',
        options: [
            { text: 'An Azure Key Vault and An access policy', isCorrect: true, rationale: 'Para garantir que a senha administrativa não seja armazenada em texto simples, você deve usar um Azure Key Vault para armazenar a senha com segurança. [cite_start]Em seguida, você precisa criar uma política de acesso no Key Vault para conceder ao modelo ARM (ou à identidade que implanta o modelo) permissão para ler o segredo que contém a senha. [cite: 854, 856]' },
            { text: 'An Azure Storage account and An Azure policy', isCorrect: false, rationale: 'Uma conta de armazenamento do Azure é usada para armazenar dados, mas não é a solução segura para senhas. [cite_start]Uma política do Azure é usada para impor padrões, mas não para armazenar segredos. [cite: 854]' },
            { text: 'Azure Active Directory (AD) Identity Protection and A backup policy', isCorrect: false, rationale: 'O Azure AD Identity Protection ajuda a detectar e remediar riscos de identidade, mas não armazena senhas. [cite_start]Uma política de backup é para backups de dados, não para gerenciamento de senhas. [cite: 854]' },
            [cite_start],{ text: 'An Azure Key Vault and A backup policy', isCorrect: false, rationale: 'Embora um Azure Key Vault seja correto para armazenar a senha, uma política de backup não é o componente necessário para *acessar* a senha do Key Vault para a implantação do modelo ARM. [cite: 854]' }
        ],
        hint: 'Para armazenar senhas de forma segura e acessá-las programaticamente em modelos ARM, qual serviço de gerenciamento de segredos e qual configuração de permissão você precisaria?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Sua empresa tem um cluster Azure Kubernetes Service (AKS) que você gerencia a partir de um dispositivo associado ao Azure AD. O cluster está localizado em um grupo de recursos. Desenvolvedores criaram um aplicativo chamado MyApp. MyApp foi empacotado em uma imagem de contêiner. Você precisa implantar o arquivo de manifesto YAML para o aplicativo. Solução: Você instala a CLI do Azure no dispositivo e executa o comando `kubectl apply -f myapp.yaml`. Isso atende ao objetivo?',
        options: [
            { text: 'Sim', isCorrect: true, rationale: 'A instalação da CLI do Azure é necessária para interagir com os recursos do Azure, incluindo AKS. O comando `kubectl apply -f myapp.yaml` é o comando padrão e correto do Kubernetes para implantar um manifesto YAML (que descreve o aplicativo) em um cluster AKS. [cite_start]Portanto, essa solução atende ao objetivo. [cite: 861, 862, 865]' },
            [cite_start],{ text: 'Não', isCorrect: false, rationale: 'A solução proposta é a maneira padrão e eficaz de implantar um manifesto YAML em um cluster Kubernetes gerenciado pelo Azure. [cite: 861, 862, 865]' }
        ],
        hint: 'Para implantar uma aplicação em um cluster Kubernetes (AKS) a partir de um arquivo YAML, qual ferramenta de linha de comando e qual comando específico são utilizados?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Sua empresa tem um cluster Azure Kubernetes Service (AKS) que você gerencia a partir de um dispositivo associado ao Azure AD. O cluster está localizado em um grupo de recursos. Desenvolvedores criaram um aplicativo chamado MyApp. MyApp foi empacotado em uma imagem de contêiner. Você precisa implantar o arquivo de manifesto YAML para o aplicativo. Solução: Você instala o cliente docker no dispositivo e executa o comando `docker run -it microsoft/azure-cli:0.10.17`. Isso atende ao objetivo?',
        options: [
            { text: 'Sim', isCorrect: false, rationale: 'O comando `docker run` é usado para executar um contêiner Docker *localmente* ou em um *host Docker*, não para implantar um arquivo de manifesto YAML em um cluster Kubernetes (AKS). [cite_start]Embora o cliente Docker seja usado para construir e gerenciar imagens, ele não é a ferramenta para implantação em AKS via YAML. [cite: 873, 874, 877]' },
            { text: 'Não', isCorrect: true, rationale: 'O comando `docker run` é usado para executar um contêiner Docker *localmente* ou em um *host Docker*, não para implantar um arquivo de manifesto YAML em um cluster Kubernetes (AKS). [cite_start]A ferramenta correta para isso seria `kubectl`. [cite: 873, 874, 877]' }
        ],
        hint: 'O comando `docker run` é para executar contêineres Docker. É ele que você usa para implantar um arquivo YAML em um cluster Kubernetes?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Sua empresa tem um aplicativo web chamado WebApp1. Você usa o WebJobs SDK para projetar uma tarefa em segundo plano do App Service acionada que invoca automaticamente uma função no código toda vez que novos dados são recebidos em uma fila. Você está se preparando para configurar os processos de serviço em um item de dados da fila. Qual dos seguintes serviços você deve usar?',
        options: [
            [cite_start],{ text: 'Logic Apps', isCorrect: false, rationale: 'Logic Apps são ferramentas de orquestração de fluxo de trabalho sem código/baixo código, não a solução para executar funções de código acionadas por fila usando o WebJobs SDK em um App Service. [cite: 885, 886]' },
            { text: 'WebJobs', isCorrect: true, rationale: 'WebJobs é um recurso do Azure App Service que permite executar programas ou scripts em segundo plano. [cite_start]O WebJobs SDK é projetado especificamente para simplificar o desenvolvimento de tarefas em segundo plano acionadas por eventos (como dados em uma fila) dentro do contexto de um aplicativo Web do App Service. [cite: 887, 890]' },
            [cite_start],{ text: 'Flow', isCorrect: false, rationale: 'Flow (agora Microsoft Power Automate) é uma ferramenta de automação de fluxo de trabalho, similar ao Logic Apps, e não se integra diretamente com o WebJobs SDK ou é usada para o cenário de processamento de código acionado por fila no App Service. [cite: 888]' },
            { text: 'Functions', isCorrect: false, rationale: 'Azure Functions é uma solução de computação serverless baseada em eventos, mas é uma alternativa ao WebJobs, não o serviço que você usaria *com o WebJobs SDK* dentro de um App Service. [cite_start]A questão especifica o uso do WebJobs SDK. [cite: 889]' }
        ],
        hint: 'Qual serviço do Azure App Service é projetado para executar tarefas em segundo plano e se integra ao WebJobs SDK?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Sua empresa tem uma assinatura do Azure. Você precisa implantar várias máquinas virtuais do Azure na assinatura usando modelos do Azure Resource Manager (ARM). As máquinas virtuais serão incluídas em um único conjunto de disponibilidade. Você precisa garantir que o modelo ARM permita que o maior número possível de máquinas virtuais permaneça acessível em caso de falha de tecido ou manutenção. Qual dos seguintes é o valor que você deve configurar para a propriedade `platformFaultDomainCount`?',
        options: [
            { text: '10', isCorrect: false, rationale: 'O valor máximo recomendado para `platformFaultDomainCount` é 3, não 10. A opção para maximizar a disponibilidade é escolher o valor máximo permitido para domínios de falha, que em muitos cenários é 3. No entanto, a opção "Max Value" é a resposta mais geral e correta para *maximizar* a disponibilidade, implicando o maior número suportado pelo Azure (geralmente 3 para a maioria das regiões).' },
            { text: '30', isCorrect: false, rationale: '30 é um valor muito alto e não corresponde a um número suportado para domínios de falha.' },
            { text: 'Min Value', isCorrect: false, rationale: 'O valor mínimo de domínios de falha (ex: 1) não maximizaria a disponibilidade, pois todas as VMs estariam no mesmo domínio de falha ou em muito poucos.' },
            { text: 'Max Value', isCorrect: true, rationale: 'Para garantir que o maior número possível de VMs permaneça acessível em caso de falha de hardware ou manutenção (ou seja, maximizar a disponibilidade), você deve configurar o valor máximo de domínios de falha (`platformFaultDomainCount`), que é 3 para a maioria das regiões do Azure. [cite_start]A opção "Max Value" é a que melhor representa essa intenção. [cite: 900, 904]' }
        ],
        hint: 'Para maximizar a resiliência contra falhas de hardware em um conjunto de disponibilidade, você deve distribuir suas VMs pelo maior número possível de domínios de falha. Qual é a melhor forma de expressar isso?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Sua empresa tem uma assinatura do Azure. Você precisa implantar várias máquinas virtuais do Azure na assinatura usando modelos do Azure Resource Manager (ARM). As máquinas virtuais serão incluídas em um único conjunto de disponibilidade. Você precisa garantir que o modelo ARM permita que o maior número possível de máquinas virtuais permaneça acessível em caso de falha de tecido ou manutenção. Qual dos seguintes é o valor que você deve configurar para a propriedade `platformUpdateDomainCount`?',
        options: [
            [cite_start],{ text: '10', isCorrect: true, rationale: 'Para um conjunto de disponibilidade, o valor padrão e máximo recomendado para `platformUpdateDomainCount` é 5 ou 10. Para maximizar a disponibilidade durante atualizações planejadas, você deve distribuir as VMs em 5 domínios de atualização no máximo ou 10, dependendo da região e do tamanho da implantação, sendo 10 o valor que oferece a maior distribuição para grandes conjuntos. [cite: 913, 915]' },
            { text: '20', isCorrect: false, rationale: '20 é um valor muito alto e não corresponde a um número suportado para domínios de atualização.' },
            { text: '30', isCorrect: false, rationale: '30 é um valor muito alto e não corresponde a um número suportado para domínios de atualização.' },
            { text: '40', isCorrect: false, rationale: '40 é um valor muito alto e não corresponde a um número suportado para domínios de atualização.' }
        ],
        hint: 'Para maximizar a resiliência durante atualizações planejadas em um conjunto de disponibilidade, você deve distribuir suas VMs pelo maior número possível de domínios de atualização. Qual é um valor comum que maximiza essa distribuição?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Você está criando uma conta do Azure Cosmos DB que faz uso da API SQL. Os dados serão adicionados à conta todos os dias por um aplicativo web. Você precisa garantir que uma notificação por e-mail seja enviada quando as informações forem recebidas de dispositivos IoT e que o custo de computação seja reduzido. Você decide implantar um aplicativo de função. Quais dos seguintes você deve configurar o aplicativo de função para usar?',
        options: [
            { text: 'Plano de consumo e SendGrid binding', isCorrect: true, rationale: 'Para reduzir o custo de computação para um aplicativo de função (que implica o modelo serverless), o Plano de Consumo é a escolha mais eficiente, pois você paga apenas pelo uso. [cite_start]Para enviar uma notificação por e-mail, o SendGrid binding (associação SendGrid) é a forma mais simples e declarativa de fazer isso no Azure Functions. [cite: 927, 929]' },
            { text: 'Azure Cosmos DB connector e SendGrid action', isCorrect: false, rationale: 'O conector do Azure Cosmos DB é para entrada/saída de dados do Cosmos DB. [cite_start]SendGrid action é uma ação de Logic Apps/Power Automate, não um binding de Function App. [cite: 927, 929]' },
            { text: 'Azure Event Hubs binding e SendGrid action', isCorrect: false, rationale: 'Azure Event Hubs binding seria para entrada de dados de Event Hubs, não diretamente do Cosmos DB. [cite_start]SendGrid action é uma ação de Logic Apps/Power Automate. [cite: 927, 929]' },
            { text: 'Azure Cosmos DB connector e Consumption plan', isCorrect: false, rationale: 'Embora o Cosmos DB connector e o Consumption plan sejam relevantes, a questão pede a solução para *enviar e-mail* e *reduzir custo*. O SendGrid binding é a forma de enviar e-mail com baixo custo de configuração, e o Consumption plan reduz o custo de computação. [cite_start]Faltaria a parte do SendGrid. [cite: 927, 929]' }
        ],
        hint: 'Para um aplicativo de função que precisa enviar e-mails com baixo custo, qual plano de hospedagem serverless e qual tipo de associação de saída você usaria?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Você empresa tem uma implantação local de MongoDB, e uma conta Azure Cosmos DB que usa a API MongoDB. Você precisa elaborar uma estratégia para migrar o MongoDB para a conta Azure Cosmos DB. Você inclui a ferramenta Data Management Gateway em sua estratégia de migração. [cite_start][PERGUNTA]: O uso da ferramenta Data Management Gateway está correto para essa estratégia de migração? [cite: 933, 934, 935, 936]',
        options: [
            { text: 'Sim, nenhuma mudança é necessária.', isCorrect: false, rationale: 'O Data Management Gateway é uma ferramenta para conectar fontes de dados locais a serviços de nuvem para movimentação de dados e é usado em cenários como Azure Data Factory. [cite_start]No entanto, para migrar dados do MongoDB para o Cosmos DB (API MongoDB), a ferramenta mais apropriada e comumente usada é o `mongorestore` ou outras ferramentas de migração de dados específicas do Cosmos DB. [cite: 938, 935]' },
            [cite_start],{ text: 'Não, o correto é `mongorestore`.', isCorrect: true, rationale: 'Para migrar dados de uma implantação local do MongoDB para o Azure Cosmos DB (API MongoDB), a ferramenta `mongorestore` é a ferramenta de linha de comando mais adequada e comumente usada para restaurar despejos de banco de dados MongoDB para uma instância de banco de dados. [cite: 938, 941]' },
            [cite_start],{ text: 'Não, o correto é Azure Storage Explorer.', isCorrect: false, rationale: 'O Azure Storage Explorer é uma ferramenta para gerenciar recursos do Azure Storage (Blobs, Filas, Tabelas, Arquivos), e não é usado para migração direta de dados de um banco de dados MongoDB para o Cosmos DB. [cite: 939]' },
            [cite_start],{ text: 'Não, o correto é AzCopy.', isCorrect: false, rationale: 'AzCopy é uma ferramenta de linha de comando para copiar dados de e para o Azure Blob, File e Table Storage, mas não para migração de dados de um banco de dados MongoDB para o Cosmos DB. [cite: 940]' }
        ],
        hint: 'Para migrar dados de um MongoDB local para o Cosmos DB (API MongoDB), qual ferramenta de linha de comando nativa do MongoDB ou ferramenta específica de migração para Cosmos DB você usaria?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    },
    {
        question: 'Você está desenvolvendo um aplicativo Web de e-Commerce. Você deseja usar o Azure Key Vault para garantir que os logins no aplicativo Web de e-Commerce sejam protegidos usando a autenticação do Azure App Service e do Azure Active Directory (AAD). O que você deve fazer no aplicativo Web de e-Commerce?',
        options: [
            [cite_start],{ text: 'Executar o comando `az keyvault secret`.', isCorrect: false, rationale: 'O comando `az keyvault secret` é uma operação da CLI do Azure para interagir com segredos no Key Vault, não uma ação que você faria no próprio aplicativo Web para habilitar a autenticação AAD. [cite: 949]' },
            { text: 'Habilitar o Azure AD Connect.', isCorrect: false, rationale: 'O Azure AD Connect é usado para sincronizar diretórios locais com o Azure AD para cenários de identidade híbrida. [cite_start]Ele não é uma configuração do aplicativo Web para habilitar a autenticação de login de usuários. [cite: 950]' },
            { text: 'Habilitar a Identidade Gerenciada (MSI).', isCorrect: true, rationale: 'Para proteger os logins no aplicativo Web usando a autenticação do Azure App Service e do Azure Active Directory, e integrar-se com o Azure Key Vault (implícito para gerenciar segredos de forma segura para a autenticação), você deve habilitar a Identidade Gerenciada (MSI - Managed Service Identity, agora conhecido como Managed Identities) para o aplicativo Web. [cite_start]Isso permite que o aplicativo se autentique no Azure AD e acesse outros recursos (como o Key Vault) sem gerenciar credenciais. [cite: 951, 953]' },
            [cite_start],{ text: 'Criar um Service Principal do Azure AD.', isCorrect: false, rationale: 'Criar um Service Principal (Entidade de Serviço) do Azure AD é uma identidade para um aplicativo, mas habilitar a Identidade Gerenciada no App Service é a forma simplificada e recomendada de fazer isso para recursos do Azure, eliminando o gerenciamento manual do Service Principal. [cite: 952]' }
        ],
        hint: 'Para proteger os logins de um aplicativo web usando a autenticação do App Service e Azure AD, sem precisar gerenciar credenciais manualmente para acessar segredos como chaves de assinatura, qual recurso de identidade você deve habilitar no aplicativo web?',
        image: 'no_image_provided.png' // Imagem não fornecida, usar placeholder
    }
];


// --- Lógica de Distribuição para o Exame 2 ---
// Para garantir a distribuição balanceada, vamos embaralhar e selecionar.
// Isso é uma simulação, em um cenário real, você definiria as questões
// para cada exame explicitamente para maior controle.

// Crie uma cópia profunda das questões para evitar referências
const allQuestions = JSON.parse(JSON.stringify(questionsExam1.concat(questionsExam2)));

// Embaralha todas as questões de forma aleatória
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(allQuestions);

// Divide em dois exames de 24 questões
const questionsExam1_balanced = allQuestions.slice(0, 24);
const questionsExam2_balanced = allQuestions.slice(24, 48); // As próximas 24 questões

// ATENÇÃO: Escolha qual exame carregar por padrão
// Mude para questionsExam2_balanced para carregar o segundo exame
let currentQuestions = questionsExam1_balanced; 

// --- Variáveis de estado do quiz ---
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = {}; // Armazena as respostas do usuário para cada questão

// --- Elementos do DOM ---
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
const changeExamButton = document.getElementById('change-exam-btn');

// Botões de navegação e dica
const showHintButton = document.getElementById('show-hint-btn');
const backButton = document.getElementById('back-btn');
const hintDisplay = document.getElementById('hint-display');


// --- Funções do Quiz ---

// Carrega a pergunta atual na interface
function loadQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';

        const questionData = currentQuestions[currentQuestionIndex];
        
        // Atualiza o contador de perguntas
        questionCounterSpan.textContent = currentQuestionIndex + 1;
        totalQuestionCountSpan.textContent = currentQuestions.length; // Atualiza a contagem total aqui
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
            backButton.style.display = 'inline-block'; // Mostra a partir da segunda
        }
        backButton.disabled = currentQuestionIndex === 0; // Desabilita na primeira

        // Oculta e limpa a dica
        hintDisplay.style.display = 'none';
        hintDisplay.textContent = '';
        showHintButton.style.display = 'inline-block'; // Mostra o botão de dica
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
        } else {
            selectedOption = null; // Garante que não há opção pré-selecionada se não houver resposta anterior
        }
    } else {
        showResult(); // Exibe o resultado se todas as perguntas foram respondidas
    }
}

// Seleciona uma opção e habilita o botão de submissão
function selectOption(optionDiv, index) {
    // Apenas permita a seleção se a pergunta ainda não foi verificada
    // Se a pergunta JÁ foi respondida e o botão é "Próxima Pergunta", não permite nova seleção
    if (!userAnswers[currentQuestionIndex] || userAnswers[currentQuestionIndex].isAnswered === false) {
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        optionDiv.classList.add('selected');
        selectedOption = index;
        submitButton.disabled = false;
    }
}

// Verifica a resposta do usuário
function checkAnswer() {
    if (selectedOption === null) return; // Nenhuma opção selecionada

    const questionData = currentQuestions[currentQuestionIndex];
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
    // Apenas atualiza o score se a pergunta está sendo respondida pela primeira vez ou se a resposta mudou de incorreta para correta
    if (!userAnswers[currentQuestionIndex] || userAnswers[currentQuestionIndex].selectedOptionIndex !== selectedOption) {
        if (answeredCorrectly && (!userAnswers[currentQuestionIndex] || !userAnswers[currentQuestionIndex].answeredCorrectly)) {
             score++; // Incrementa score apenas se a resposta AGORA é correta e ANTES não era
        } else if (!answeredCorrectly && userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answeredCorrectly) {
            score--; // Decrementa score se a resposta AGORA é incorreta e ANTES era correta
        }
    }

    userAnswers[currentQuestionIndex] = {
        selectedOptionIndex: selectedOption,
        answeredCorrectly: answeredCorrectly,
        isAnswered: true // Marca que a pergunta foi verificada
    };
    
    // Exibir o rationale
    const rationaleDiv = document.createElement('div');
    rationaleDiv.classList.add('rationale');
    rationaleDiv.innerHTML = `**Justificativa:** ${questionData.options[correctOptionIndex].rationale}`;
    optionsContainer.appendChild(rationaleDiv);

    // Oculta o botão de dica e exibe a dica
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
    const questionData = currentQuestions[currentQuestionIndex];
    const options = optionsContainer.children;
    
    // Remove qualquer classe de feedback anterior para evitar duplicidade
    Array.from(options).forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
    optionsContainer.querySelector('.rationale')?.remove(); // Remove justificativa anterior

    // Seleciona a opção que o usuário escolheu
    if (answerState.selectedOptionIndex !== undefined && options[answerState.selectedOptionIndex]) {
        options[answerState.selectedOptionIndex].classList.add('selected');
    }

    // Marca a opção correta e a selecionada com feedback visual
    const correctOptionIndex = questionData.options.findIndex(opt => opt.isCorrect);
    if (correctOptionIndex !== -1 && options[correctOptionIndex]) {
        options[correctOptionIndex].classList.add('correct');
    }
    
    if (answerState.selectedOptionIndex !== undefined && !currentQuestions[currentQuestionIndex].options[answerState.selectedOptionIndex].isCorrect) {
        options[answerState.selectedOptionIndex].classList.add('incorrect');
    }

    // Exibe a justificativa se a pergunta já foi verificada
    if (answerState.isAnswered) {
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
    } else {
        // Se ainda não foi verificada, re-habilita cliques e seta o botão para "Verificar Resposta"
        Array.from(options).forEach(opt => opt.style.pointerEvents = 'auto');
        submitButton.textContent = 'Verificar Resposta';
        submitButton.removeEventListener('click', nextQuestion);
        submitButton.addEventListener('click', checkAnswer);
        submitButton.disabled = (selectedOption === null); // Desabilita se nada estiver selecionado
        
        // Oculta dica e mostra botão de dica
        hintDisplay.style.display = 'none';
        showHintButton.style.display = 'inline-block';
    }
    // selectedOption já foi restaurado no início de loadQuestion, mas redefinir aqui para consistência
    selectedOption = answerState.selectedOptionIndex; 
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
    totalQuestionsSpan.textContent = currentQuestions.length;

    const percentage = (score / currentQuestions.length) * 100;
    const approvalThreshold = 70; // 70% para aprovação

    if (percentage >= approvalThreshold) {
        approvalStatusParagraph.textContent = `Parabéns! Você foi APROVADO(A) com ${percentage.toFixed(2)}% de acertos! 🎉`;
        approvalStatusParagraph.style.color = '#28a745'; // Verde
    } else {
        approvalStatusParagraph.textContent = `Que pena! Você obteve ${percentage.toFixed(2)}% de acertos. É necessário ${approvalThreshold}% para ser aprovado(a). Continue estudando! 🙁`;
        approvalStatusParagraph.style.color = '#dc3545'; // Vermelho
    }
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    userAnswers = {}; // Limpa todas as respostas salvas na sessão
    loadQuestion();
}

// --- Lógica para Trocar de Exame ---
function toggleExam() {
    // Alterna entre questionsExam1_balanced e questionsExam2_balanced
    if (currentQuestions === questionsExam1_balanced) {
        currentQuestions = questionsExam2_balanced;
    } else {
        currentQuestions = questionsExam1_balanced;
    }
    // Reinicia o quiz com o novo conjunto de questões
    restartQuiz();
}


// --- Event Listeners ---
submitButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);
showHintButton.addEventListener('click', () => {
    hintDisplay.textContent = `Dica: ${currentQuestions[currentQuestionIndex].hint}`;
    hintDisplay.style.display = 'block';
    showHintButton.style.display = 'none'; // Esconde o botão de dica depois de mostrar
});
backButton.addEventListener('click', previousQuestion);
changeExamButton.addEventListener('click', toggleExam); // Listener para o novo botão de trocar de exame


// Inicia o quiz ao carregar a página
loadQuestion();