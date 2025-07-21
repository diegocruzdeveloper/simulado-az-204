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
            { text: 'Escala vertical (Scale Up)', isCorrect: false, rationale: 'A escala vertical garante que o aplicativo Web tenha o direito de obter CPU, memória, espaço em disco e recursos extras, mas não está relacionada à troca de configurações entre slots de implantação.' }
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
            { text: 'Consumo', isCorrect: true, rationale: 'O plano de hospedagem de Consumo atende a todos os requisitos: ele dá suporte à colocação em escala automática (escalando conforme a demanda), tem comportamento de colocação em escala baseado em eventos (disparado por mensagens, HTTP, etc.) e fornece um modelo de preços sem servidor (você paga apenas pelo tempo de execução e consumo de memória).' },
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
        question: 'Você gerencia um banco de dados do Azure Cosmos DB chamado `database1`. Você precisa ler itens do banco de dados sem nenhuma garantia de ordenação e garantir a maior disponibilidade. Qual nível de consistência você deve usar?',
        options: [
            { text: 'Eventual', isCorrect: true, rationale: 'A consistência eventual tem a consistência mais flexível e confirma qualquer operação de gravação no primário imediatamente. Isso fornecerá a maior disponibilidade e a menor consistência (nenhuma garantia de ordenação), o que é ideal para o requisito de "sem nenhuma garantia de ordenação e garantir a maior disponibilidade".' },
            { text: 'Desatualização Limitada', isCorrect: false, rationale: 'A consistência de desatualização limitada não fornecerá a maior disponibilidade em comparação com a eventual. Ela oferece uma garantia de prefixo consistente.' },
            { text: 'Forte', isCorrect: false, rationale: 'A consistência forte oferece a maior consistência (leituras sempre retornam a última gravação confirmada), mas sofre com a redução da disponibilidade, o que é o oposto do requisito.' },
            { text: 'Sessão', isCorrect: false, rationale: 'A consistência da sessão garante que todas as operações de leitura e gravação sejam consistentes em uma sessão de usuário. Embora seja o padrão para a maioria das aplicações, não é o nível que maximiza a disponibilidade quando nenhuma garantia de ordenação é necessária.' }
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
            { text: 'Criar', isCorrect: false, rationale: 'A permissão `Create` só permite que os usuários criem blobs, mas não permite que eles *atualizem* blobs existentes. Para atualizar e criar, `Write` é a permissão necessária.' },
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
        hint: 'Para criar uma identidade gerenciada atribuída ao sistema para uma VM do Azure, qual função de permissão interna é a mais adequada que não concede permissões excessivas?'
    }
]