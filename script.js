const questions = [
    // Perguntas Originais sem Imagens (13 Questões)
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

    // Perguntas Adicionadas do Microsoft Learn (25 Questões) - sem imagens
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
        question: 'Você gerencia um contêiner do Azure Cosmos DB chamado `container1`. Você precisa usar o método `ReadItemAsync` para ler um item do serviço do Azure Cosmos. Quais são os dois parâmetros que você deve fornecer? Cada resposta correta apresenta uma parte da solução.',
        options: [
            { text: '`partitionKey` e `id`', isCorrect: true, rationale: 'O método `ReadItemAsync` da classe de contêiner do SDK do .NET para Azure Cosmos DB tem dois parâmetros obrigatórios: `partitionKey` (a chave de partição do item) e `id` (o ID único do item). Ambos são necessários para ler um item diretamente de forma performática.' },
            { text: '`consistencyLevel` e `id`', isCorrect: false, rationale: 'O parâmetro `consistencyLevel` faz parte do parâmetro opcional `ItemRequestOptions` de `ReadItemAsync`, não um parâmetro obrigatório. O `id` é correto, mas não é a única resposta necessária.' },
            { text: '`eTag` e `partitionKey`', isCorrect: false, rationale: 'O parâmetro `eTag` faz parte do parâmetro opcional `ItemRequestOptions` de `ReadItemAsync` para controle de concorrência, não é obrigatório para uma leitura simples. O `partitionKey` é correto, mas não é a única resposta necessária.' },
            { text: '`sessionToken` e `id`', isCorrect: false, rationale: 'O parâmetro `sessionToken` também faz parte do parâmetro opcional `ItemRequestOptions` de `ReadItemAsync` e é usado para consistência de sessão. O `id` é correto, mas o `sessionToken` não é obrigatório.' }
        ],
        hint: 'Para ler um item específico do Cosmos DB de forma direta e eficiente usando `ReadItemAsync`, quais dois identificadores são sempre necessários?'
    },
    {
        question: 'Uma empresa implementa uma conta do Azure Cosmos DB de várias regiões. Você precisa configurar o nível de consistência padrão para a conta. O nível de consistência deve garantir que as operações de atualização feitas como um lote dentro de uma transação estejam sempre visíveis juntas. Qual nível de consistência você deve usar?',
        options: [
            { text: 'Prefixo Consistente', isCorrect: true, rationale: 'O nível de consistência de prefixo consistente garante que as atualizações feitas como um lote dentro de uma transação (como uma transação de vários documentos) sejam retornadas de forma consistente com a transação na qual foram confirmadas. As operações de gravação dentro de uma transação de vários documentos são sempre visíveis juntas, garantindo que os clientes vejam os dados em uma ordem que respeita as relações de ordem de gravação, mesmo que ainda possam ver versões anteriores.' },
            { text: 'Eventual', isCorrect: false, rationale: 'O nível de consistência eventual é usado quando nenhuma garantia de ordenação é necessária e não garante que as operações de atualização feitas como um lote sejam vistas juntas.' },
            { text: 'Desatualização Limitada', isCorrect: false, rationale: 'O nível de consistência Desatualização Limitada é usado para gerenciar o atraso de dados entre duas regiões com base em uma versão atualizada de um item ou nos intervalos de tempo entre leitura e gravação, mas não garante a visibilidade de transações em lote de forma coesa como o Prefixo Consistente.' },
            { text: 'Sessão', isCorrect: false, rationale: 'O nível de consistência de sessão é usado para garantir que, em uma única sessão do cliente, as leituras sejam garantidas para honrar as garantias de leitura de suas gravações (read-your-writes) e garantias de gravação seguida de leitura (write-follows-reads), mas não para a visibilidade de transações em lote em um contexto distribuído mais amplo.' }
        ],
        hint: 'Para garantir que operações em lote dentro de uma transação sejam sempre vistas juntas e em uma ordem consistente com a gravação, qual nível de consistência do Cosmos DB oferece essa garantia de ordenação parcial?'
    },
    {
        question: 'Você precisa baixar o conteúdo do blob para uma matriz de bytes usando uma operação que se recupera automaticamente de falhas transitórias. Qual instrução de código você deve usar?',
        options: [
            { text: 'byte[] data; BlobClientOptions options = new BlobClientOptions(); options.Retry.MaxRetries = 10; options.Retry.Delay = TimeSpan.FromSeconds(20); BlobClient client = new BlobClient(new Uri("https://mystorageaccount.blob.core.windows.net/containers/blob.txt"), options); Response<BlobDownloadResult> response = client.DownloadContent(); data = response.Value.Content.ToArray();', isCorrect: true, rationale: 'Este segmento de código demonstra a criação de `BlobClientOptions` para configurar uma estratégia de repetição (`Retry.MaxRetries` e `Retry.Delay`). Ao passar essas opções para o `BlobClient` e usar `DownloadContent()`, a operação se recupera automaticamente de falhas transitórias conforme as configurações de repetição definidas, e o conteúdo é baixado para uma matriz de bytes.' },
            { text: 'byte[] data; BlobClient client = new BlobClient(new Uri("https://mystorageaccount.blob.core.windows.net/containers/blob.txt")); Response<BlobDownloadResult> response = client.DownloadContent(); data = response.Value.Content.ToArray();', isCorrect: false, rationale: 'Este segmento de código não inclui a configuração de opções de repetição, o que significa que a operação não se recuperará automaticamente de falhas transitórias.' },
            { text: 'byte[] data; BlobClientOptions options = new BlobClientOptions(); BlobClient client = new BlobClient(new Uri("https://mystorageaccount.blob.core.windows.net/containers/blob.txt"), options); data = client.DownloadToStream(new MemoryStream()).ToArray();', isCorrect: false, rationale: 'Embora use `BlobClientOptions`, este segmento não configura as opções de repetição. Além disso, `DownloadToStream` precisaria ser lido para um `MemoryStream` e depois para uma array de bytes, o que é menos direto que `DownloadContent().Value.Content.ToArray()` para este cenário específico.' },
            { text: 'byte[] data; BlobClient client = new BlobClient(new Uri("https://mystorageaccount.blob.core.windows.net/containers/blob.txt")); Response<BlobDownloadInfo> info = client.Download().Value; data = info.Content.ToArray();', isCorrect: false, rationale: 'O método `Download()` retorna `Response<BlobDownloadInfo>`, que é mais para metadados e propriedades. O `DownloadContent()` é o método direto para baixar o conteúdo do blob para processamento.' }
        ],
        hint: 'Para baixar o conteúdo de um blob em C# com o SDK do Azure Blob Storage e configurar uma política de repetição para lidar com falhas transitórias, qual objeto de opções você usaria e quais propriedades dele configuraria?'
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
        question: 'A Fabrikam, Inc. está passando por uma investigação legal e precisa garantir que determinados documentos confidenciais armazenados no Armazenamento de Blobs do Azure não possam ser modificados ou excluídos até que a investigação seja concluída. Você precisa implementar uma política de imutabilidade que possa ser aplicada temporariamente e removida assim que a investigação terminar. O que você deve fazer?',
        options: [
            { text: 'Configure uma política de retenção legal (legal hold) no contêiner em que os documentos estão armazenados.', isCorrect: true, rationale: 'A configuração de uma política de retenção legal (legal hold) no contêiner permite que os documentos sejam protegidos contra modificações ou exclusões até que a retenção seja explicitamente limpa (removida). Esta é a solução ideal para uma suspensão temporária e flexível, pois não tem uma data de término fixa e pode ser removida quando a investigação concluir.' },
            { text: 'Configure uma política de retenção baseada em tempo com um intervalo fixo (ex: 365 dias) no contêiner.', isCorrect: false, rationale: 'Uma política de retenção baseada em tempo com um intervalo fixo não fornece a flexibilidade necessária para uma suspensão *temporária* e indefinida até a conclusão da investigação. Ela teria um término fixo.' },
            { text: 'Habilite o controle de versão para os blobs e configure uma política de retenção baseada em tempo no nível da versão.', isCorrect: false, rationale: 'Habilitar o controle de versão e configurar uma política de retenção baseada em tempo no nível da versão é desnecessário e mais complexo para esse cenário de bloqueio temporário. A política de retenção legal é mais direta para esse caso de uso.' },
            { text: 'Implemente uma política WORM (Write Once, Read Many) no nível do contêiner com um intervalo de retenção fixo.', isCorrect: false, rationale: 'Uma política WORM no nível do contêiner com um intervalo de retenção fixo é semelhante à retenção baseada em tempo e não atende ao requisito de uma política que possa ser *removida* de forma flexível quando a investigação terminar.' }
        ],
        hint: 'Para uma imutabilidade de dados no Blob Storage que pode ser aplicada temporariamente e removida quando necessário (ex: para investigações legais), qual tipo de política de retenção você usaria?'
    },
    {
        question: 'Você tem um contêiner de conta de Armazenamento do Microsoft Azure chamado `container1`. Você precisa configurar o acesso ao contêiner para atender aos seguintes requisitos: O token de assinatura de acesso compartilhado (SAS) deve ser protegido com as credenciais do Microsoft Entra ID. O RBAC (controle de acesso baseado em função) deve ser usado. O token SAS deve dar suporte à concessão de acesso a contêineres. Qual tipo de SAS você deve usar?',
        options: [
            { text: 'delegação de usuário', isCorrect: true, rationale: 'O SAS de delegação de usuário cumpre todos os requisitos: ele é o único tipo de SAS que protege o token SAS com credenciais do Microsoft Entra ID (integrando-se ao RBAC para autorização) e pode conceder acesso a contêineres e blobs. Isso oferece uma camada de segurança mais alta ao vincular o acesso à identidade baseada no Entra ID.' },
            { text: 'conta', isCorrect: false, rationale: 'Uma SAS de conta concede acesso a vários serviços de armazenamento, mas não é protegida com credenciais do Microsoft Entra ID nem suporta RBAC para gerenciar permissões no nível do usuário.' },
            { text: 'serviço', isCorrect: false, rationale: 'Uma SAS de serviço delega acesso a um recurso em apenas um dos serviços de armazenamento (ex: apenas Blob), mas não é protegida com credenciais do Microsoft Entra ID nem suporta RBAC.' },
            { text: 'política de acesso armazenado', isCorrect: false, rationale: 'Uma política de acesso armazenado é usada para agrupar assinaturas de acesso compartilhado e fornecer restrições adicionais para SASs associadas à política, mas não é um *tipo* de SAS por si só e não concede a proteção com credenciais do Microsoft Entra ID.' }
        ],
        hint: 'Para uma SAS que se autentica com o Microsoft Entra ID e utiliza RBAC para conceder permissões a recursos de armazenamento (como contêineres), qual é o tipo de SAS mais seguro e abrangente?'
    },
    {
        question: 'Você planeja usar uma assinatura de acesso compartilhado para proteger o acesso aos serviços em uma conta de armazenamento v2 de uso geral. Você precisa identificar o tipo de serviço que pode ser protegido usando a assinatura de acesso compartilhado de delegação de usuário. Qual serviço do Azure você deve identificar?',
        options: [
            { text: 'BLOB', isCorrect: true, rationale: 'O serviço de Blob é o *único* serviço de armazenamento que suporta assinaturas de acesso compartilhado de delegação de usuário (User Delegation SAS). As SAS de delegação de usuário são autenticadas com credenciais do Microsoft Entra ID, proporcionando maior segurança e integração com o RBAC.' },
            { text: 'FILA', isCorrect: false, rationale: 'O serviço de Fila suporta assinaturas de acesso compartilhado de conta e serviço, mas não de delegação de usuário.' },
            { text: 'ARQUIVO', isCorrect: false, rationale: 'O serviço de Arquivo suporta assinaturas de acesso compartilhado de conta e serviço, mas não de delegação de usuário.' },
            { text: 'TABELA', isCorrect: false, rationale: 'O serviço de Tabela suporta assinaturas de acesso compartilhado de conta e serviço, mas não de delegação de usuário.' }
        ],
        hint: 'Qual dos serviços de armazenamento do Azure é o único que permite gerar uma Assinatura de Acesso Compartilhado que é protegida usando credenciais do Microsoft Entra ID (User Delegation SAS)?'
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
        question: 'Você desenvolve um aplicativo Web multilocatário chamado `App1`. Você deve planejar registrar o `App1` com vários locatários do Microsoft Entra ID. Você precisa identificar a relação entre os objetos do aplicativo e as entidades de segurança associadas ao `App1`. Qual relação você deve identificar?',
        options: [
            { text: 'O `App1` terá um único objeto de aplicativo e várias entidades de serviço.', isCorrect: true, rationale: 'Em um aplicativo multilocatário registrado no Microsoft Entra ID, há um *único objeto de aplicativo* (app registration) que existe no locatário "home" onde o aplicativo foi registrado. No entanto, quando esse aplicativo é provisionado em *outros* locatários (onde usuários de outros locatários o utilizam), uma *entidade de serviço* separada é criada em cada um desses locatários. Portanto, um único objeto de aplicativo pode ter várias entidades de serviço associadas a ele, uma por locatário onde foi consentido.' },
            { text: 'O `App1` terá vários objetos de aplicativo e uma única entidade de serviço.', isCorrect: false, rationale: 'Esta afirmação está incorreta. Um aplicativo sempre terá um único objeto de aplicativo (registro do aplicativo) no locatário home.' },
            { text: 'O `App1` terá vários objetos de aplicativo e várias entidades de serviço.', isCorrect: false, rationale: 'Esta afirmação está incorreta. Haverá apenas um objeto de aplicativo. As entidades de serviço serão múltiplas.' },
            { text: 'O `App1` terá uma única entidade de serviço e vários objetos de aplicativo.', isCorrect: false, rationale: 'Esta afirmação está incorreta. A entidade de serviço pode ser única para um aplicativo de locatário único, mas para multi-locatário, ela será múltipla. O objeto de aplicativo é sempre único.' }
        ],
        hint: 'Para um aplicativo multilocatário no Microsoft Entra ID, pense em quantos registros de aplicativo existem (onde o código é definido) versus quantas representações de serviço existem em cada locatário que o usa.'
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
    },
    {
        question: 'Uma empresa usa o Gerenciamento de API do Azure para expor alguns de seus serviços. Cada desenvolvedor que consome APIs deve usar uma única chave para obter acesso a várias APIs sem a necessidade de aprovação do editor de API. Você precisa recomendar uma solução. Qual solução você deve recomendar?',
        options: [
            { text: 'Defina uma assinatura com o escopo do produto.', isCorrect: true, rationale: 'Ao criar um produto no Azure API Management, várias APIs podem ser adicionadas a ele. Uma única assinatura pode ser associada a esse produto, permitindo que um desenvolvedor obtenha uma única chave que conceda acesso a todas as APIs dentro desse produto, sem a necessidade de aprovação individual por API. Isso atende ao requisito de uma única chave para várias APIs e minimiza a sobrecarga de aprovação.' },
            { text: 'Defina uma assinatura com o escopo de todas as APIs.', isCorrect: false, rationale: 'Embora uma assinatura possa ser criada com escopo para "todas as APIs", esta opção pode conceder acesso mais amplo do que o necessário, e a questão sugere um agrupamento lógico, o que os produtos oferecem.' },
            { text: 'Conceda acesso a cada desenvolvedor independentemente do endereço IP do chamador.', isCorrect: false, rationale: 'Conceder acesso independente do IP é uma configuração de segurança, não uma solução para o requisito de uma única chave para várias APIs sem aprovação individual.' },
            { text: 'Use um certificado de cliente por desenvolvedor e configure uma política para validar o certificado.', isCorrect: false, rationale: 'Um certificado de cliente pode ser usado para autenticação forte, mas não resolve o problema de "uma única chave para várias APIs sem aprovação do editor". Exigiria gerenciamento de certificados por desenvolvedor.' }
        ],
        hint: 'No Azure API Management, qual entidade permite agrupar múltiplas APIs e atribuir uma única chave de assinatura que dá acesso a todas elas?'
    },
    {
        question: 'Você gerencia APIs em produção usando o Gerenciamento de API do Azure. Você precisa remover cabeçalhos `X-Powered-By` e `X-AspNet-Version` de uma resposta. Qual segmento de código você deve usar? (Assuma que o código fornecido representa uma política XML de APIM.)',
        options: [
            { text: '<policies><inbound><base /></inbound><backend><base /></backend><outbound><set-header name="X-Powered-By" exists-action="delete" /><set-header name="X-AspNet-Version" exists-action="delete" /><base /></outbound><on-error><base /></on-error></policies>', isCorrect: true, rationale: 'O segmento de código que inclui o elemento `set-header policy` na seção `<outbound>` (onde as respostas são processadas) com `exists-action="delete"` removerá um cabeçalho específico da resposta HTTP. Remover os cabeçalhos `X-Powered-By` e `X-AspNet-Version` é uma prática comum de segurança para evitar vazamento de informações sobre a tecnologia subjacente.' },
            { text: '<policies><inbound><base /></inbound><backend><base /></backend><outbound><set-header name="X-Powered-By" exists-action="append" /><set-header name="X-AspNet-Version" exists-action="append" /><base /></outbound><on-error><base /></on-error></policies>', isCorrect: false, rationale: 'O segmento de código que inclui `exists-action="append"` não remove os cabeçalhos especificados; ele tentaria anexar um valor, o que não é o objetivo aqui.' },
            { text: '<policies><inbound><set-header name="X-Powered-By" exists-action="delete" /><set-header name="X-AspNet-Version" exists-action="delete" /><base /></inbound><backend><base /></backend><outbound><base /></outbound><on-error><base /></on-error></policies>', isCorrect: false, rationale: 'Os cabeçalhos de resposta são processados na seção `<outbound>` (saída), não na seção `<inbound>` (entrada). A política aplicada na entrada afetaria a requisição, não a resposta.' },
            { text: '<policies><backend><set-header name="X-Powered-By" exists-action="delete" /><set-header name="X-AspNet-Version" exists-action="delete" /><base /></backend><inbound><base /></inbound><outbound><base /></outbound><on-error><base /></on-error></policies>', isCorrect: false, rationale: 'As políticas na seção `<backend>` são aplicadas à requisição *antes* de ser enviada ao serviço de *backend*. A remoção de cabeçalhos de resposta deve ocorrer na seção `<outbound>`.' }
        ],
        hint: 'Para remover cabeçalhos específicos de uma resposta de API no Azure API Management, em qual seção de política você usaria a política `set-header` e com qual ação?'
    },
    {
        question: 'Você planeja usar o Gerenciamento de API do Azure para gerenciamento de API híbrida e multinuvem. Você precisa criar um gateway auto-hospedado para produção. Qual marca de imagem de contêiner você deve usar?',
        options: [
            { text: '2.9.0 (exemplo de uma tag semântica específica)', isCorrect: true, rationale: 'Na produção, a versão do gateway auto-hospedado deve ser *fixada* para garantir estabilidade e evitar atualizações automáticas que possam introduzir regressões. A única maneira de fazer isso de forma confiável é usando uma tag que segue a convenção de versionamento semântico `{major}.{minor}.{patch}` (ex: `2.9.0`).' },
            { text: 'latest', isCorrect: false, rationale: 'A tag `latest` não é recomendada para ambientes de produção porque ela pode mudar a qualquer momento, resultando em atualizações não controladas e potenciais quebras. É usada principalmente para avaliação e desenvolvimento.' },
            { text: 'v3', isCorrect: false, rationale: 'A tag `v3` (ou qualquer tag de versão majoritária como `v1`, `v2`, etc.) resultará sempre na execução de uma versão majoritária com cada novo recurso e patch. Embora melhor que `latest`, ainda não fixa a versão exata como a convenção `{major}.{minor}.{patch}`.' },
            { text: 'v3-preview', isCorrect: false, rationale: 'A tag `v3-preview` deve ser usada para executar a imagem de contêiner de visualização mais recente, o que não é adequado para produção devido à sua natureza de pré-lançamento e instabilidade potencial.' }
        ],
        hint: 'Em ambientes de produção com contêineres, qual prática de marcação de imagem é recomendada para garantir a estabilidade e evitar mudanças inesperadas?'
    },
    {
        question: 'Uma empresa está usando o Gerenciamento de API do Azure para expor suas APIs a parceiros externos. A empresa deseja garantir que as APIs sejam acessíveis somente aos usuários autenticados com o OAuth 2.0 e que as cotas de uso sejam impostas para evitar abusos. Você precisa configurar a instância de Gerenciamento de API para atender aos requisitos de segurança e uso. Quais são as duas ações que você deve executar?',
        options: [
            { text: 'Configure uma política `validate-jwt` para autenticar solicitações de entrada. e Configure um limite de taxa por política de chave para impor cotas de chamadas.', isCorrect: true, rationale: 'A configuração de uma política `validate-jwt` é necessária para autenticar usuários com o OAuth 2.0, pois ela valida os tokens JWT presentes nas solicitações de entrada. Configurar um limite de taxa por política de chave (`rate-limit-by-key`) ajuda a impor cotas de uso, controlando o número de chamadas permitidas por cliente (chave) em um determinado período.' },
            { text: 'Implante um Gateway de Aplicativo do Azure na frente da instância de Gerenciamento de API. e Configure a filtragem de IP na instância de Gerenciamento de API.', isCorrect: false, rationale: 'A implantação de um Gateway de Aplicativo do Azure não é necessária para essas necessidades específicas de autenticação e cotas de API. A filtragem de IP não atende aos requisitos de autenticação OAuth 2.0 ou de cotas de uso, pois controla o acesso à rede, não o acesso autenticado à API.' },
            { text: 'Configure a autenticação básica para as APIs e o cache para melhorar o desempenho.', isCorrect: false, rationale: 'A autenticação básica não atende ao requisito de autenticação OAuth 2.0. O cache é para desempenho, não para segurança e cotas de uso.' },
            { text: 'Defina grupos de usuários no Microsoft Entra ID para controle de acesso e configure políticas de CORS.', isCorrect: false, rationale: 'Definir grupos de usuários é para gerenciamento de acesso a recursos, mas não é uma ação direta no APIM para impor autenticação OAuth 2.0 ou cotas de uso. As políticas de CORS (Cross-Origin Resource Sharing) são para controle de acesso entre domínios, não para autenticação ou cotas.' }
        ],
        hint: 'Para autenticação OAuth 2.0 e imposição de cotas de uso no APIM, quais duas políticas são fundamentais para cada requisito, respectivamente?'
    },
    {
        question: 'Você é um arquiteto de soluções de nuvem que trabalha em uma empresa que recentemente adotou os serviços de Gerenciamento de API do Microsoft Azure para centralizar o gerenciamento de suas APIs. A faculdade tem vários serviços de back-end que fornecem informações sobre cursos, docentes e serviços estudantis. Esses serviços são consumidos por vários aplicativos de front-end, incluindo o site público da faculdade, o portal do aluno e aplicativos móveis. Você precisa garantir que a instância de Gerenciamento de API esteja configurada para expor apenas as operações necessárias, manter a segurança e fornecer a capacidade de simular respostas para fins de teste sem invocar os serviços de back-end. O que você deve fazer?',
        options: [
            { text: 'Crie uma API em branco e defina manualmente as operações necessárias e implemente políticas para validar tokens JWT e limitar as taxas de chamada.', isCorrect: true, rationale: 'A criação de uma API em branco (e não a importação automática de um serviço de *backend* inteiro) permite um controle preciso sobre quais operações são expostas, atendendo ao requisito de "expor apenas as operações necessárias". Implementar políticas para validação JWT e limitação de taxa garante segurança e controle de uso. A capacidade de simular respostas para testes é inerente ao APIM quando as operações são definidas manualmente sem um *backend* real inicial.' },
            { text: 'Importe todos os serviços de back-end como APIs para a instância de Gerenciamento de API e habilite o CORS para permitir solicitações dos domínios da faculdade.', isCorrect: false, rationale: 'A importação de *todos* os serviços de *backend* sem filtragem expõe operações desnecessárias, o que contradiz o requisito de "expor apenas as operações necessárias". Habilitar CORS é importante, mas não aborda a exposição controlada das operações.' },
            { text: 'Exponha automaticamente todas as operações de todos os serviços de back-end e adicione um Web Application Firewall (WAF) para segurança.', isCorrect: false, rationale: 'Expor automaticamente todas as operações pode levar a riscos de segurança e não atende ao requisito de expor apenas as operações necessárias ou simular respostas para testes. Um WAF é uma camada de segurança de rede, não de controle de operações da API.' },
            { text: 'Use uma operação curinga (`*`) para expor todos os endpoints do back-end e aplique o Azure Policy para impor segurança.', isCorrect: false, rationale: 'Usar uma operação curinga (`*`) para expor todos os endpoints pode tornar a API vulnerável a ameaças de segurança e não fornece o controle granular ou a capacidade de simular respostas para operações específicas. O Azure Policy é para governança, mas não substitui a configuração adequada das operações no APIM.' }
        ],
        hint: 'Para expor seletivamente operações de API, manter a segurança e permitir simulação de respostas no APIM, qual abordagem oferece o maior controle sobre as operações expostas e as políticas de segurança?'
    },
    {
        question: 'Você é um arquiteto de soluções de nuvem que trabalha para uma empresa que planeja expor o serviço de processamento de dados interno deles, que atualmente está hospedado no Azure, aos parceiros deles por meio de APIs. O serviço processa grandes conjuntos de dados e fornece recursos de análise e relatório. A empresa deseja garantir que a API esteja bem documentada, que o acesso seja controlado com segurança e que as políticas de uso sejam impostas. Você precisa criar uma instância de Gerenciamento de API do Azure que permita acesso seguro e controlado às APIs com a capacidade de impor políticas de uso e documentar as APIs para seus parceiros. Quais são as três etapas que você deve executar?',
        options: [
            { text: 'Configure o acesso às APIs configurando a autorização de usuário do OAuth 2.0 na instância de Gerenciamento de API do Azure.; Crie uma instância de Gerenciamento de API do Azure e importe a API existente usando a funcionalidade de importação de API do portal do Azure.; Implemente políticas para as APIs na instância de Gerenciamento de API do Azure para impor limites de taxa e cotas.', isCorrect: true, rationale: 'Configurar a autorização de usuário do OAuth 2.0 na instância de Gerenciamento de API do Azure fornecerá controle de acesso seguro para as APIs. A criação de uma instância de Gerenciamento de API do Azure e a importação da API existente é uma maneira direta de expor o serviço interno aos parceiros. A implementação de políticas para as APIs na instância de Gerenciamento de API do Azure para impor limites de taxa e cotas é essencial para controlar o uso das APIs e atender aos requisitos de políticas de uso e documentação (que o APIM faz automaticamente com APIs importadas/definidas).' },
            { text: 'Crie uma API simulada no Gerenciamento de API do Azure para testes.; Documente as APIs diretamente no código do serviço de processamento de dados.; Implemente políticas de CORS para todas as APIs.', isCorrect: false, rationale: 'Criar uma API simulada não atende à necessidade imediata de expor o serviço *real*. A documentação deve ser gerenciada na instância de Gerenciamento de API do Azure (portal do desenvolvedor), não no código do serviço para sincronização automática. Implementar políticas de CORS é útil, mas não cobre os requisitos de autenticação e cotas.' },
            { text: 'Use o Azure DevOps para automatizar a implantação de APIs.; Utilize o Azure Functions para hospedar as APIs.; Habilite o log de diagnóstico em todas as APIs para auditoria.', isCorrect: false, rationale: 'Essas ações são sobre CI/CD, hospedagem e monitoramento, mas não as etapas diretas para *criar uma instância de Gerenciamento de API* com acesso seguro, políticas de uso e documentação para parceiros.' },
            { text: 'Crie uma nova subscrição Azure para os parceiros.; Migre o serviço de processamento de dados para uma VM Azure.; Use Azure Key Vault para gerenciar chaves de API.', isCorrect: false, rationale: 'Criar uma nova subscrição, migrar para VM e usar Key Vault para chaves são ações de arquitetura e segurança, mas não as etapas diretas para *configurar o APIM* para os requisitos específicos de exposição, segurança, políticas e documentação da API.' }
        ],
        hint: 'Para expor uma API interna aos parceiros via APIM com segurança, controle de uso e documentação, quais são as três etapas fundamentais no processo de configuração do APIM?'
    },
    {
        question: 'Você tem um hub de eventos do Azure. Você precisa adicionar partições ao hub de eventos. Qual segmento de código você deve usar?',
        options: [
            { text: 'az eventhubs eventhub update --resource-group MyResourceGroupName --namespace-name MyNamespaceName --name MyEventHubName --partition-count 12', isCorrect: true, rationale: 'O segmento de código `az eventhubs eventhub update` é o comando correto para modificar um hub de eventos existente e o parâmetro `--partition-count` é usado para adicionar partições a ele. Isso permite escalar a capacidade de ingestão do hub de eventos.' },
            { text: 'az eventhubs eventhub consumer-group update --resource-group MyResourceGroupName --namespace-name MyNamespaceName --name MyEventHubName --partition-count 12', isCorrect: false, rationale: 'Este comando é usado para atualizar um *grupo de consumidores* de um hub de eventos, não o próprio hub de eventos para adicionar partições.' },
            { text: 'az eventhubs eventhub consumer-group create --resource-group MyResourceGroupName --namespace-name MyNamespaceName --eventhub-name MyEventHubName --name MyConsumerGroup', isCorrect: false, rationale: 'Este comando é para criar um *grupo de consumidores*, não para adicionar partições a um hub de eventos.' },
            { text: 'az eventhubs eventhub create --resource-group MyResourceGroupName --namespace-name MyNamespaceName --name MyEventHubName --partition-count 12', isCorrect: false, rationale: 'Este comando é para *criar* um novo hub de eventos com um número de partições, não para *adicionar* partições a um hub de eventos *existente*.' }
        ],
        hint: 'Para *modificar* um Event Hub existente e ajustar seu número de partições usando a CLI do Azure, qual subcomando de `az eventhubs eventhub` você utilizaria?'
    },
    {
        question: 'Você desenvolve o código a seguir para ler todos os eventos publicados para a primeira partição nos Hubs de Eventos do Azure. Você precisa concluir o código. Quais são as duas ações que você deve executar? (Considere as linhas 6 e 7 do trecho de código onde as variáveis `startingPosition` e `partitionId` são definidas.)',
        options: [
            { text: 'Insira o seguinte segmento de código na linha 6: `EventPosition startingPosition = EventPosition.Earliest;` e Insira o seguinte segmento de código na linha 7: `string partitionId = (await consumer.GetPartitionIdsAsync()).First();`', isCorrect: true, rationale: 'Para ler *todos* os eventos publicados (desde o início), a posição inicial (`startingPosition`) deve ser definida como `EventPosition.Earliest`. Para obter o ID da primeira partição dinamicamente (para garantir que a leitura seja da primeira partição), o método `GetPartitionIdsAsync()` retorna uma lista de IDs de partição, e `.First()` é usado para selecionar o primeiro. Assim, `string partitionId = (await consumer.GetPartitionIdsAsync()).First();` é a sintaxe correta e completa.' },
            { text: 'Insira o seguinte segmento de código na linha 6: `EventPosition startingPosition = EventPosition.Latest;` e Insira o seguinte segmento de código na linha 7: `string partitionId = (await consumer.GetPartitionIdsAsync()).First();`', isCorrect: false, rationale: 'Usar `EventPosition.Latest` iniciaria a leitura a partir dos eventos mais recentes, não de *todos* os eventos publicados (conforme o requisito de "ler todos os eventos").' },
            { text: 'Insira o seguinte segmento de código na linha 6: `EventPosition startingPosition = EventPosition.Earliest;` e Insira o seguinte segmento de código na linha 7: `int partitionId = (await consumer.GetPartitionIdsAsync()).First();`', isCorrect: false, rationale: 'O método `GetPartitionIdsAsync()` retorna `string[]`, então `.First()` retornará uma `string`, não um `int`. Haveria um erro de tipo.' },
            { text: 'Insira o seguinte segmento de código na linha 6: `var startingPosition = new EventPosition();` e Insira o seguinte segmento de código na linha 7: `string partitionId = "0";`', isCorrect: false, rationale: '`new EventPosition()` sem especificar `Earliest` ou `Latest` não garante ler todos os eventos. Definir `partitionId = "0"` diretamente não é dinâmico e pode não ser o ID da primeira partição garantidamente em todos os casos, além de ser menos robusto.' }
        ],
        hint: 'Para ler *todos* os eventos de uma partição de Event Hubs, você precisa especificar o ponto de partida mais antigo e obter o ID da partição corretamente. Pense nos métodos do SDK para isso.'
    },
    {
        question: 'Você precisa capturar eventos de streaming dos Hubs de Eventos do Azure. Para quais três locais você pode capturar dados? Cada resposta correta apresenta uma solução completa.',
        options: [
            { text: 'Armazenamento de Blobs do Azure, Azure Data Lake Storage Gen1 e Azure Data Lake Storage Gen2', isCorrect: true, rationale: 'O recurso de Captura de Hubs de Eventos do Azure pode fornecer automaticamente os dados de streaming nos Hubs de Eventos para o Armazenamento de Blobs do Azure, o Azure Data Lake Storage Gen1 e o Azure Data Lake Storage Gen2. Esses são os destinos de captura nativamente suportados e os mais comuns para armazenar grandes volumes de dados de streaming.' },
            { text: 'Azure Functions, Armazenamento de Blobs do Azure e Azure Stream Analytics', isCorrect: false, rationale: 'Embora o Azure Functions e o Azure Stream Analytics possam *processar* eventos dos Hubs de Eventos, eles não são destinos de *captura* direta pelo recurso de Captura de Hubs de Eventos para armazenamento de longo prazo de dados brutos de streaming. Eles atuam como consumidores que podem encaminhar dados para outros destinos.' },
            { text: 'Azure Data Lake Storage Gen2, Azure SQL Database e Azure Cosmos DB', isCorrect: false, rationale: 'Azure SQL Database e Azure Cosmos DB não são destinos de captura direta pelo recurso de Captura de Hubs de Eventos para o volume de dados brutos de streaming. Eles seriam destinos *após* algum processamento ou para dados mais estruturados.' },
            { text: 'Armazenamento de Filas do Azure, Armazenamento de Tabelas do Azure e Azure Cosmos DB', isCorrect: false, rationale: 'Armazenamento de Filas e Tabelas, e Cosmos DB não são destinos nativos para o recurso de Captura de Hubs de Eventos para dados de streaming em larga escala, que requerem armazenamento de objetos ou data lake.' }
        ],
        hint: 'O recurso de "Captura" dos Hubs de Eventos permite despejar automaticamente o fluxo de dados em um serviço de armazenamento. Quais serviços de armazenamento são os principais destinos para isso?'
    },
    {
        question: 'Uma empresa está usando a Grade de Eventos do Azure para processar eventos de pedidos de comércio eletrônico. O sistema inclui várias fontes de eventos, como o Armazenamento de Blobs do Azure, o Azure Functions e serviços de terceiros. A empresa deseja garantir que o mecanismo de entrega de eventos seja robusto e possa lidar com diferentes cenários de falha, com perda mínima. Você precisa criar uma estratégia de entrega de eventos que garanta alta confiabilidade, mesmo quando os eventos resultam de códigos de resposta 400 ou 413. O que você deve fazer?',
        options: [
            { text: 'Habilite a colocação em fila de mensagens mortas (dead-lettering) para capturar eventos que não são entregues dentro do agendamento de repetição especificado.', isCorrect: true, rationale: 'Habilitar o dead-lettering ajuda a capturar eventos que não podem ser entregues (seja por falhas no manipulador, erros HTTP como 400/413, ou exceder o número de tentativas de entrega), garantindo que nenhum dado seja perdido durante interrupções temporárias ou problemas de processamento. Isso é crucial para alta confiabilidade e perda mínima.' },
            { text: 'Aumente o número máximo de tentativas de entrega para um valor muito alto.', isCorrect: false, rationale: 'Aumentar o número máximo de tentativas de entrega não garante a entrega se o sistema está inativo ou se o problema é persistente (como um erro 400 que não se resolve com repetição) e pode levar a atrasos desnecessários. O dead-lettering é mais robusto para perdas.' },
            { text: 'Configure a validação síncrona do handshake para todas as assinaturas de eventos.', isCorrect: false, rationale: 'A validação síncrona do handshake está relacionada à validação da assinatura do evento (para garantir a autenticidade da origem), não à confiabilidade da *entrega* de eventos ou ao tratamento de falhas na entrega.' },
            { text: 'Diminua o tempo de vida (TTL) do evento para que eventos falhos sejam descartados rapidamente.', isCorrect: false, rationale: 'A diminuição do TTL do evento (Time To Live) poderá resultar em eventos válidos sendo descartados se o sistema estiver temporariamente indisponível, o que é o oposto do requisito de "perda mínima" e "alta confiabilidade".' }
        ],
        hint: 'Para garantir que eventos da Grade de Eventos não sejam perdidos quando não podem ser entregues (ex: erro no endpoint), qual mecanismo de resiliência captura esses eventos para inspeção ou reprocessamento posterior?'
    },
    {
        question: 'Uma empresa está desenvolvendo um aplicativo multilocatário que lidará com grandes volumes de eventos de várias fontes. O aplicativo precisa ser capaz de processar e analisar esses eventos em tempo real. Você precisa criar um serviço de ingestão de eventos que forneça isolamento de dados e isolamento de desempenho para evitar problemas barulhentos de vizinhos, considerando também a complexidade operacional e o custo. Qual modelo de isolamento dos Hubs de Eventos você deve implementar?',
        options: [
            { text: 'Namespace dedicado para cada locatário', isCorrect: true, rationale: 'Um namespace dedicado para cada locatário fornece o nível mais alto de isolamento de dados e desempenho em Hubs de Eventos. Isso é essencial para evitar problemas de "vizinhos barulhentos" (onde o consumo de recursos de um locatário afeta o desempenho de outro) em um aplicativo multilocatário que lida com grandes volumes de eventos, garantindo que a carga de um locatário não impacte os demais.' },
            { text: 'Namespace compartilhado com hubs de eventos dedicados para cada locatário', isCorrect: false, rationale: 'Um namespace compartilhado com hubs de eventos dedicados para cada locatário oferece um isolamento médio, mas ainda pode levar a problemas de vizinhos barulhentos no nível do namespace (recursos compartilhados como unidades de throughput do namespace).' },
            { text: 'Namespace compartilhado e hubs de eventos para todos os locatários', isCorrect: false, rationale: 'Um namespace compartilhado e hubs de eventos para todos os locatários fornece o nível mais baixo de isolamento e não é adequado para os requisitos de isolamento de dados e desempenho para evitar problemas de vizinhos barulhentos.' },
            { text: 'Multilocação confiável com assinaturas de acesso compartilhado', isCorrect: false, rationale: 'Multilocação confiável com assinaturas de acesso compartilhado não é um modelo de isolamento de infraestrutura, mas sim uma maneira de gerenciar o acesso em um ambiente compartilhado, o que não garante isolamento de desempenho.' }
        ],
        hint: 'Para um aplicativo multilocatário de ingestão de eventos com Hubs de Eventos que requer o *maior nível de isolamento* de dados e desempenho para evitar "vizinhos barulhentos", qual estratégia de provisionamento de recursos você utilizaria?'
    },
    {
        question: 'Você cria um tópico do Barramento de Serviço do Azure com um tempo de vida útil padrão de 10 minutos. Você precisa enviar mensagens para este tópico com um tempo de vida útil de 15 minutos. A solução não deve afetar outros aplicativos que estão usando o tópico. O que você deve recomendar?',
        options: [
            { text: 'Crie um novo tópico com uma vida útil padrão de 15 minutos. Envie as mensagens para este tópico.', isCorrect: true, rationale: 'Para evitar afetar aplicativos existentes, o tempo de vida útil do tópico existente não deve ser alterado. Em vez disso, um novo tópico com o tempo de vida útil padrão de 15 minutos (que é o mínimo necessário) deve ser criado para enviar essas mensagens específicas. O tempo de vida de uma mensagem não pode ser maior do que o tempo de vida do tópico para o qual ela é enviada.' },
            { text: 'Altere a vida útil da mensagem específica para 15 minutos.', isCorrect: false, rationale: 'Um tempo de vida útil em nível de mensagem não pode ser maior do que o tempo de vida útil padrão configurado no tópico (10 minutos, neste caso). Se tentar definir 15 minutos em uma mensagem para um tópico de 10 minutos, a mensagem será limitada a 10 minutos.' },
            { text: 'Altere o tempo de vida útil padrão do tópico existente para 15 minutos.', isCorrect: false, rationale: 'Alterar o tempo de vida útil padrão do tópico existente afetaria outros aplicativos que estão usando o tópico, o que contradiz o requisito de "não deve afetar outros aplicativos".' },
            { text: 'Crie uma nova fila com uma vida útil padrão de 15 minutos e envie as mensagens para esta fila.', isCorrect: false, rationale: 'O requisito é enviar mensagens para um *tópico*, não uma fila. Filas e tópicos são diferentes no Service Bus.' }
        ],
        hint: 'No Azure Service Bus, se você precisa de um tempo de vida maior para mensagens em um tópico sem afetar os consumidores existentes, e sabendo que o tempo de vida da mensagem não pode exceder o do tópico, qual é a melhor abordagem para a arquitetura?'
    },
    {
        question: 'Você tem uma fila do Barramento de Serviço do Azure. Você precisa garantir que um editor possa enviar mensagens para um tópico e que vários assinantes possam se tornar elegíveis para consumir as mensagens. Qual padrão de roteamento de mensagens você deve usar?',
        options: [
            { text: 'solicitação/resposta multicast (publicar/assinar)', isCorrect: true, rationale: 'O padrão de "solicitação/resposta multicast" ou mais comumente "publicar/assinar" (publish/subscribe) com tópicos e assinaturas no Azure Service Bus permite que um editor envie uma mensagem para um tópico e que vários assinantes (cada um com sua própria assinatura) se tornem elegíveis para consumir essa mensagem de forma independente, recebendo suas próprias cópias. Isso é o que "multicast" implica.' },
            { text: 'fila ponto a ponto', isCorrect: false, rationale: 'O padrão de fila ponto a ponto (point-to-point queue) permite que um editor envie uma mensagem para uma fila e que um único consumidor receba essa mensagem. Vários assinantes não podem consumir a mesma mensagem de uma fila de forma independente.' },
            { text: 'sessão de mensagem', isCorrect: false, rationale: 'As sessões de mensagem no Service Bus permitem a multiplexação de fluxos de mensagens relacionadas por meio de uma única fila ou assinatura, garantindo a ordenação e o processamento de mensagens agrupadas. No entanto, não é um padrão para múltiplos assinantes consumirem a *mesma* mensagem de um tópico.' },
            { text: 'multiplexação de resposta', isCorrect: false, rationale: 'A multiplexação de resposta permite que vários editores compartilhem uma fila de resposta para cenários de solicitação/resposta, mas uma mensagem não pode ser consumida por vários assinantes de forma independente usando este conceito para tópicos.' }
        ],
        hint: 'Para um cenário onde uma única mensagem de um editor precisa ser entregue a múltiplas entidades consumidoras que operam de forma independente, qual padrão de comunicação do Service Bus é o mais adequado?'
    },
    {
        question: 'Uma empresa de serviços financeiros está implementando um sistema para processar transações recebidas como mensagens. O sistema precisa garantir que as transações sejam processadas apenas uma vez e, na ordem exata, sejam recebidas para manter a integridade dos dados. Você precisa criar uma solução de mensagens que garanta a entrega e o processamento de mensagens PEPS (primeiro a entrar, primeiro a sair). Quais dois serviços você deve usar?',
        options: [
            { text: 'Barramento de Serviço do Azure com detecção duplicada e Fila do Barramento de Serviço com a opção Sessões habilitada', isCorrect: true, rationale: 'O Barramento de Serviço do Azure com sessões habilitadas permite o processamento PEPS (Primeiro a Entrar, Primeiro a Sair) usando sessões para garantir que as mensagens relacionadas sejam tratadas na ordem em que são recebidas. A detecção duplicada ajuda a garantir que o sistema não processe a mesma transação mais de uma vez (processamento "apenas uma vez"), o que é crucial para a integridade de dados em sistemas financeiros.' },
            { text: 'Armazenamento de Filas do Azure e Grade de Eventos do Azure', isCorrect: false, rationale: 'O Armazenamento de Filas do Azure não garante o processamento PEPS nem tem detecção duplicada nativa. A Grade de Eventos do Azure é um serviço de roteamento de eventos e não fornece garantias de PEPS ou sessões de mensagem.' },
            { text: 'Hubs de Eventos do Azure e Azure Functions com gatilhos HTTP', isCorrect: false, rationale: 'Os Hubs de Eventos do Azure são para ingestão de streaming de dados em larga escala e não garantem processamento PEPS ou detecção duplicada para mensagens individuais. Azure Functions com gatilhos HTTP não são um mecanismo de fila ou tópico com essas garantias.' },
            { text: 'Barramento de Serviço do Azure com detecção duplicada e Hubs de Eventos do Azure', isCorrect: false, rationale: 'Embora a detecção duplicada do Service Bus seja correta, os Hubs de Eventos não fornecem as sessões necessárias para garantir o processamento PEPS para mensagens individuais em cenários transacionais como este.' }
        ],
        hint: 'Para garantir o processamento de mensagens PEPS (FIFO) e a detecção de duplicatas em um sistema de mensagens transacionais, quais recursos específicos do Azure Service Bus você deve habilitar?'
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
// A referência a questionImageContainer não é mais necessária, mas se existir no HTML, o JS irá ignorá-la.

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
        totalQuestionCountSpan.textContent = questions.length; // Atualiza a contagem total aqui
        questionText.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
        
        // Limpa qualquer imagem anterior se o container existisse
        const questionImageContainer = document.getElementById('question-image-container');
        if (questionImageContainer) {
            questionImageContainer.innerHTML = ''; 
        }
        
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
    const questionData = questions[currentQuestionIndex];
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
    
    if (answerState.selectedOptionIndex !== undefined && !questionData.options[answerState.selectedOptionIndex].isCorrect) {
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
        submitButton.disabled = (answerState.selectedOptionIndex === undefined); // Desabilita se nada estiver selecionado
        
        // Oculta dica e mostra botão de dica
        hintDisplay.style.display = 'none';
        showHintButton.style.display = 'inline-block';
    }
    selectedOption = answerState.selectedOptionIndex; // Restaura a opção selecionada
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