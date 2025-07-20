const questions = [
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
        question: 'Você está projetando uma API do Azure que precisa chamar com segurança outra API interna hospedada no Gerenciamento de API do Azure. Os seguintes requisitos de segurança devem ser atendidos: – A API deve se autenticar ao fazer chamadas para a API interna. – Nenhuma credencial de cliente, chaves de API ou tokens devem ser enviados manualmente. – A autenticação deve ser integrada ao Microsoft Entra ID para segurança perfeita. Qual mecanismo de autenticação deve ser implementado? [IMAGEM RELACIONADA: Gerenciamento de Identidade em Aplicativo Web]',
        options: [
            { text: 'Autenticação de chave de API', isCorrect: false, rationale: 'A Autenticação de Chave de API envolve principalmente a passagem manual de uma chave de API nos cabeçalhos de solicitação para autenticar o chamador. Esse método exige o gerenciamento e o armazenamento seguro de chaves de API, o que não atende ao requisito de evitar o envio manual de credenciais ou tokens.' },
            { text: 'Política OAuth 2.0 do Gerenciamento de API do Azure', isCorrect: false, rationale: 'A política OAuth 2.0 do Azure API Management normalmente exige a geração e o gerenciamento manual de tokens de acesso, o que contradiz o requisito de não manipular tokens ou credenciais manualmente.' },
            { text: 'Identidade Gerenciada', isCorrect: true, rationale: 'Identidade Gerenciada é um recurso do Azure que permite que os serviços do Azure se autentiquem em outros recursos do Azure sem a necessidade de gerenciar credenciais manualmente. Quando um serviço recebe uma identidade gerenciada, ele pode usar o Microsoft Entra ID para se autenticar em recursos do Azure com segurança, eliminando a necessidade de os desenvolvedores manipularem credenciais.' },
            { text: 'Autenticação Básica', isCorrect: false, rationale: 'A Autenticação Básica requer apenas um nome de usuário e uma senha para autenticar uma solicitação, enviando essas credenciais no cabeçalho HTTP a cada chamada. Este método não atende ao requisito de segurança, pois envolve a transmissão de dados confidenciais em texto simples, a menos que sejam criptografados via HTTPS, e não se integra ao Microsoft Entra ID para autenticação automática.' }
        ],
        hint: 'Pense na solução do Azure que permite que os serviços se autentiquem usando o Microsoft Entra ID sem credenciais embutidas.'
    },
    {
        question: 'Você é um engenheiro de nuvem de uma empresa que está implementando o Azure Key Vault para armazenar e gerenciar chaves criptográficas, segredos e certificados com segurança. Você foi designado para configurar o Azure Key Vault usando o PowerShell para atender aos requisitos de segurança e conformidade. Você precisa garantir que, depois que uma chave ou segredo for excluído, ele não possa ser removido permanentemente de imediato e deve ser retido por um período obrigatório de 90 dias antes que a exclusão permanente seja permitida. Quais configurações devem ser habilitadas para atender a esse requisito? (Selecione DUAS). [IMAGEM RELACIONADA: Configurações de recuperação do Key Vault]',
        options: [
            { text: 'EnablePurgeProtection e EnableSoftDelete', isCorrect: true, rationale: 'O recurso de exclusão reversível (soft delete) permite a recuperação de cofres e objetos excluídos (chaves, segredos, certificados) por um período configurável (7 a 90 dias). A proteção contra limpeza (purge protection) impede a exclusão permanente de um cofre ou objeto no estado excluído até que o período de retenção expire. Ambas devem ser habilitadas para garantir a retenção obrigatória e impedir a remoção imediata.' },
            { text: 'EnabledForDeployment e EnableSoftDelete', isCorrect: false, rationale: 'EnabledForDeployment permite apenas que máquinas virtuais e serviços do Azure recuperem segredos e certificados para implantação, mas não tem nada a ver com políticas de retenção ou exclusão. EnableSoftDelete é correto, mas não é suficiente por si só para impedir a exclusão permanente.' },
            { text: 'EnablePurgeProtection e EnabledForDiskEncryption', isCorrect: false, rationale: 'EnabledForDiskEncryption é usado principalmente para habilitar o Azure Disk Encryption (ADE) para acessar o Key Vault e gerenciar chaves de criptografia. Não afeta a forma como chaves ou segredos excluídos são retidos ou eliminados. EnablePurgeProtection é correto, mas não é suficiente por si só.' },
            { text: 'EnableSoftDelete e EnableRbacAuthorization', isCorrect: false, rationale: 'EnableRbacAuthorization habilita o Controle de Acesso Baseado em Função (RBAC) do Azure para o Key Vault, que está relacionado à autorização e ao gerenciamento de acesso. Ele não controla as configurações de proteção contra exclusão, retenção ou limpeza. EnableSoftDelete é correto, mas não é suficiente por si só.' }
        ],
        hint: 'Pense nos recursos do Key Vault que protegem contra exclusão acidental e forçam um período de retenção.'
    },
    {
        question: 'Você está criando um aplicativo Web do Serviço de Aplicativo do Azure que se conecta a um Banco de Dados SQL do Azure. Para melhorar o desempenho e a escalabilidade, você usará o Azure Cache para Redis para armazenar dados de sessão, armazenar em cache informações usadas com frequência e habilitar mensagens em tempo real entre componentes do aplicativo. Sua organização também considera o Azure Cosmos DB com gravações multirregionais para melhorar a disponibilidade do banco de dados. No entanto, sua tarefa é otimizar o cache e as mensagens com o Cache do Azure para a instância Redis Enterprise. Quais recursos atendem melhor ao requisito? [IMAGEM RELACIONADA: Arquitetura de Serviço de Aplicação com Redis Cache]',
        options: [
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Canal; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Lista; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Conjunto', isCorrect: true, rationale: 'Canal (Channel) em Redis é usado para publicação/assinatura (Pub/Sub), ideal para notificações em tempo real. Lista (List) do Redis funciona como uma fila de duas pontas, perfeita para gerenciar filas de tarefas. Conjunto (Set) garante exclusividade, sendo útil para armazenar funções ou dados únicos eficientemente. ' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Hash; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Canal; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Conjunto Classificado', isCorrect: false, rationale: 'Hash armazena pares chave-valor e não é para Pub/Sub. Canal é para Pub/Sub, não para filas. Conjunto Classificado é para classificação, não para garantir exclusividade de forma geral.' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Conjunto; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Hash; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Lista', isCorrect: false, rationale: 'Conjunto é para exclusividade, não para Pub/Sub. Hash não é para filas. Lista é para filas, não para exclusividade.' },
            { text: 'Para "Implementar um mecanismo de publicação/assinatura para notificações em tempo real.": Conjunto Classificado; Para "Manter uma fila de tarefas para processar solicitações geradas pelo usuário na ordem em que são recebidas.": Canal; Para "Armazene funções de usuários exclusivas de forma eficiente para evitar duplicação.": Hash', isCorrect: false, rationale: 'Conjunto Classificado e Canal estão em usos incorretos para os cenários propostos.' }
        ],
        hint: 'Associe as estruturas de dados do Redis (Canal, Lista, Conjunto, Hash, Conjunto Classificado) com seus casos de uso para mensagens, filas e armazenamento de dados únicos.'
    },
    {
        question: 'Você é um administrador de banco de dados que gerencia um Banco de Dados SQL do Azure para sua organização. Você precisa garantir que os usuários possam se conectar ao banco de dados usando a autenticação Microsoft Entra por meio do Microsoft SQL Server Management Studio (SSMS). Você também precisa permitir a autenticação usando credenciais locais do Active Directory, garantindo o mínimo de solicitações de autenticação. Você deseja implementar um método que permita que os usuários façam login sem inserir manualmente as credenciais sempre que se conectarem. Qual método de autenticação deve ser usado para atender a esse requisito? [IMAGEM RELACIONADA: Trecho de código de conexão SQL]',
        options: [
            { text: 'Active Directory Integrated modo de autenticação', isCorrect: true, rationale: 'O Active Directory Integrated modo de autenticação requer uma instância local do Active Directory vinculada ao Microsoft Entra ID. Com este modo, os usuários conectados a uma máquina associada a um domínio podem acessar fontes de dados do Azure SQL perfeitamente, sem a necessidade de solicitações de credenciais, minimizando os prompts de autenticação.' },
            { text: 'Active Directory Interactive autenticação', isCorrect: false, rationale: 'A Autenticação Interativa do Active Directory requer interação do usuário e solicita autenticação a cada vez, o que contradiz o requisito de minimizar os prompts de autenticação. Normalmente, é usada quando a Autenticação Multifator (MFA) é necessária.' },
            { text: 'Tokens de ID do Microsoft Entra', isCorrect: false, rationale: 'A autenticação baseada em tokens é usada principalmente para aplicativos e serviços, e não para autenticação direta de usuários por meio do SSMS. Ele não permite autenticação integrada para usuários sem intervenção manual.' },
            { text: 'Autenticação do SQL Server', isCorrect: false, rationale: 'A autenticação do SQL Server exige a inserção manual de um nome de usuário e uma senha para cada conexão. Ela não oferece suporte à integração com o Microsoft Enterprise ID ou com o Active Directory local, o que a torna inadequada para os requisitos especificados.' }
        ],
        hint: 'Pense no método de autenticação do Microsoft Entra ID que oferece uma experiência de logon único para usuários de domínio no SSMS.'
    },
    {
        question: 'Sua empresa está desenvolvendo um serviço web ASP.NET Core Web API para alimentar uma plataforma de e-commerce. O serviço se integra ao Azure Application Insights para coletar telemetria e rastrear dependências. O serviço web processa pedidos de clientes, armazena dados no Microsoft SQL Server e se comunica com uma API de gateway de pagamento de terceiros para processar transações. Para garantir o monitoramento completo, você deve configurar o rastreamento de telemetria de dependências para interações com o gateway de pagamento externo. Quais propriedades de telemetria você deve usar para rastrear interações de gateway de pagamento para correlacioná-las com a operação geral da transação e garantir o rastreamento de ponta a ponta? (Escolha DUAS.) [IMAGEM RELACIONADA: Modelo de Telemetria do Application Insights]',
        options: [
            { text: 'Telemetry.id e Telemetry.Context.Operation.Id', isCorrect: true, rationale: 'O Telemetry.id identifica exclusivamente cada item de telemetria, fornecendo uma referência distinta para cada evento ou dependência rastreada. O Telemetry.Context.Operation.Id reúne vários eventos de telemetria em uma única operação, permitindo o rastreamento de ponta a ponta e a correlação entre diferentes serviços em uma transação unificada. Juntas, essas propriedades fornecem o contexto necessário para compreender o escopo completo das interações do usuário com dependências externas.' },
            { text: 'Telemetry.Context.Session.Id e Telemetry.id', isCorrect: false, rationale: 'Telemetry.Context.Session.Id é usado principalmente para rastrear a sessão do usuário dentro do aplicativo web, não para dependências externas. Embora Telemetry.id seja correto, esta combinação não é a ideal para rastreamento de dependência de ponta a ponta.' },
            { text: 'Telemetry.Context.Dependency.Type e Telemetry.Context.Operation.Id', isCorrect: false, rationale: 'Telemetry.Context.Dependency.Type é usado para especificar o tipo de dependência, mas não é suficiente para rastrear completamente a interação. Telemetry.Context.Operation.Id é correto, mas precisa de Telemetry.id para identificação única.' },
            { text: 'Telemetry.Context.Dependency.Target e Telemetry.Context.Session.Id', isCorrect: false, rationale: 'Telemetry.Context.Dependency.Target é útil para identificar o destino, mas não para o rastreamento de ponta a ponta da transação. Telemetry.Context.Session.Id não é relevante para dependências externas.' }
        ],
        hint: 'Pense nos identificadores que o Application Insights usa para rastrear eventos únicos e para correlacionar múltiplas operações a uma única transação de ponta a ponta.'
    },
    {
        question: 'Você gerencia vários aplicativos Web em execução no Azure e conta com o Azure Monitor para rastrear alterações de telemetria e configuração. Recentemente, modificações de configuração inesperadas foram aplicadas a aplicativos hospedados em um Ambiente de Serviço de Aplicativo (ASE). Você precisa identificar quais alterações de configuração foram feitas no Ambiente de Serviço de Aplicativo para garantir a conformidade e solucionar possíveis problemas relacionados a essas alterações. Qual log do Azure Monitor você deve revisar para rastrear essas alterações de configuração? [IMAGEM RELACIONADA: Configurações de diagnóstico do App Service Environment]',
        options: [
            { text: 'AppServiceEnvironmentPlatformLogs', isCorrect: true, rationale: 'AppServiceEnvironmentPlatformLogs são logs do Azure Monitor projetados especificamente para capturar eventos em nível de plataforma no Ambiente de Serviço de Aplicativo (ASE). Esses logs incluem detalhes sobre as alterações feitas na infraestrutura do ASE, como atualizações nas definições de configuração, operações de dimensionamento e modificações na rede. Isso permite que os administradores entendam como o ASE está configurado e identifiquem rapidamente quaisquer alterações inesperadas ou não autorizadas.' },
            { text: 'AppServiceAppLogs', isCorrect: false, rationale: 'AppServiceAppLogs concentra-se principalmente no registro em nível de aplicativo, capturando eventos como solicitações, erros e métricas de desempenho específicas do aplicativo. Ele é útil para diagnosticar problemas no próprio aplicativo, mas não rastreia alterações feitas na infraestrutura subjacente ou na configuração do ASE.' },
            { text: 'AzureResourceChangesLogs', isCorrect: false, rationale: 'AzureResourceChangesLogs rastreia alterações nos recursos do Azure em geral, incluindo aquelas relacionadas a máquinas virtuais, redes ou contas de armazenamento. Embora capture alterações no nível dos recursos em todo o ambiente do Azure, não foi criado especificamente para rastrear alterações de configuração no nível da plataforma em um ASE.' },
            { text: 'AzureDiagnosticsLogs', isCorrect: false, rationale: 'AzureDiagnosticsLogs é importante para monitoramento geral e solução de problemas, mas não rastreia especificamente alterações no nível da plataforma no ambiente ASE. Confiar apenas em AzureDiagnosticsLogs não daria visibilidade detalhada das alterações de configuração no ASE.' }
        ],
        hint: 'Para rastrear mudanças de configuração em nível de plataforma em um Ambiente de Serviço de Aplicativo (ASE), qual tipo de log foca especificamente na infraestrutura do ASE?'
    },
    {
        question: 'Você está criando uma solução baseada em Java que utiliza o Cassandra para armazenamento de dados de chave-valor. O aplicativo foi projetado para utilizar um novo recurso do Azure Cosmos DB com a API do Cassandra. Para facilitar o provisionamento de contas, bancos de dados e contêineres do Azure Cosmos DB, você estabeleceu um Grupo Microsoft Entra chamado Cosmos DB Creators. Além disso, você está considerando implementar um mecanismo de cache para aprimorar o desempenho de leitura. Este grupo não deve ter acesso às chaves necessárias para acesso aos dados. Qual controle de acesso baseado em função deve ser atribuído ao Microsoft Entra Group para atender a esses requisitos? [IMAGEM RELACIONADA: Controle de Acesso IAM do Cosmos DB]',
        options: [
            { text: 'Operador Cosmos DB', isCorrect: true, rationale: 'A função Operador do Cosmos DB foi projetada especificamente para permitir o provisionamento e o gerenciamento de contas, bancos de dados e contêineres do Azure Cosmos DB sem conceder acesso aos dados contidos neles ou às chaves de acesso associadas. Atribuir esta função ao grupo Cosmos DB Creators garante que eles possam executar as tarefas de gerenciamento necessárias sem comprometer a segurança dos dados acessando chaves ou dados.' },
            { text: 'CosmosRestoreOperator', isCorrect: false, rationale: 'A função CosmosRestoreOperator se concentra principalmente na restauração de contas do Cosmos DB a partir de backups. Embora permita a interação com instâncias do Cosmos DB, não atende ao requisito de provisionamento de novas contas, bancos de dados e contêineres do Cosmos DB.' },
            { text: 'Colaborador do Redis Cache', isCorrect: false, rationale: 'A função "Redis Cache Contributor" é usada apenas para gerenciar o Azure Cache para Redis. Embora o cenário mencione um mecanismo de cache, esta função não é relevante para o controle de acesso do Cosmos DB.' },
            { text: 'Função de leitor de conta do Cosmos DB', isCorrect: false, rationale: 'A função de Leitor de Conta do Cosmos DB concede apenas acesso somente leitura às configurações da conta do Azure Cosmos DB, mas ainda permite acesso às chaves da conta, o que contradiz o requisito de que o Grupo Microsoft Entra não deve ter acesso às chaves.' }
        ],
        hint: 'Para um grupo que deve provisionar recursos do Cosmos DB, mas *não* ter acesso às chaves de dados, qual função RBAC se encaixa melhor?'
    },
    {
        question: 'Você transfere arquivos confidenciais de servidores de arquivos locais para o Armazenamento de Blobs do Azure e protege chaves de criptografia com o Azure Key Vault. Você também usa a Conta de Armazenamento do Azure para gerenciar o acesso seguro e precisa garantir que as chaves excluídas possam ser recuperadas por até 90 dias para evitar perdas acidentais. Você planeja integrar APIs do Azure Key Vault em scripts de automação para gerenciamento de chaves. Qual solução garante que as chaves excluídas possam ser recuperadas por até 90 dias? [IMAGEM RELACIONADA: Configuração de Soft-delete e Purge Protection do Key Vault]',
        options: [
            { text: 'Habilite a proteção de exclusão e limpeza suave usando o comando: `az keyvault update --enable-soft-delete true --enable-purge-protection true`', isCorrect: true, rationale: 'O recurso de exclusão reversível (soft delete) permite a recuperação de chaves, segredos e certificados por um período configurável (7 a 90 dias). A proteção contra limpeza (purge protection) impede a exclusão permanente de um cofre ou objeto no estado excluído até que o período de retenção expire. Habilitar ambas garante que as chaves excluídas permaneçam recuperáveis e não possam ser apagadas permanentemente antes do período de retenção expirar.' },
            { text: 'Use o `Add-AzKeyVaultKey` cmdlet do PowerShell.', isCorrect: false, rationale: 'Este comando é usado principalmente para criar ou importar novas chaves para o Azure Key Vault, mas não habilita a exclusão reversível ou a proteção contra limpeza.' },
            { text: 'Habilite o Azure Key Vault Private Link para proteger o acesso e impedir exclusões de chaves não autorizadas.', isCorrect: false, rationale: 'O Private Link apenas fornece segurança de rede restringindo o acesso ao Key Vault por meio de endpoints privados. Ele não impede a exclusão de chaves nem garante a recuperação delas.' },
            { text: 'Configure uma Política de Acesso ao Azure Key Vault para restringir operações de exclusão apenas a usuários específicos.', isCorrect: false, rationale: 'Restringir políticas de acesso pode ajudar a limitar exclusões não autorizadas, mas não fornece um mecanismo de recuperação caso uma chave seja excluída. Sem a exclusão reversível habilitada, as chaves excluídas são perdidas permanentemente.' }
        ],
        hint: 'Para garantir que chaves excluídas possam ser recuperadas por um período, e que a exclusão permanente seja impedida antes desse período, quais duas proteções devem ser ativadas no Key Vault?'
    },
    {
        question: 'Você precisa modificar um Aplicativo Lógico do Azure existente atualizando suas definições de fluxo de trabalho sem criar uma nova instância. Você deve editar a estrutura subjacente diretamente, preservando a implantação atual. Qual método deve ser usado para modificar as definições de fluxo de trabalho do Aplicativo Lógico do Azure existente? [IMAGEM RELACIONADA: Visualização de Código do Logic App]',
        options: [
            { text: 'Use a opção Visualização de código do aplicativo lógico no portal do Azure.', isCorrect: true, rationale: 'No portal do Azure, os Aplicativos Lógicos do Azure permitem editar fluxos de trabalho visualmente ou programaticamente. Na Visualização de Código, você pode modificar diretamente o arquivo de definição do fluxo de trabalho no formato JSON, preservando a implantação atual sem a necessidade de criar uma nova instância.' },
            { text: 'Exclua o aplicativo lógico existente e crie um novo com a lógica atualizada.', isCorrect: false, rationale: 'Essa abordagem é ineficiente e desnecessária, pois resulta na perda do histórico de execução, logs e conexões, exigindo uma reimplantação completa.' },
            { text: 'Modifique o aplicativo lógico no portal do Azure usando o modo de exibição Designer.', isCorrect: false, rationale: 'Embora a visualização Designer permita modificações no fluxo de trabalho, ela não oferece controle total sobre a definição do fluxo de trabalho, especialmente para personalizações avançadas. Algumas configurações e ajustes complexos de lógica só podem ser feitos usando a Visualização de Código.' },
            { text: 'Exporte o aplicativo lógico como um modelo ARM, modifique a definição do fluxo de trabalho e reimplante.', isCorrect: false, rationale: 'Esse método é usado principalmente em cenários de infraestrutura como código (IaC) e não é a maneira mais eficiente de modificar uma instância existente do Aplicativo Lógico, pois requer reimplantação em vez de atualizações diretas no local.' }
        ],
        hint: 'Para modificar diretamente a estrutura JSON de um Logic App existente sem recriá-lo, qual recurso do portal do Azure você usaria?'
    },
    {
        question: 'Você gerencia um site de comércio eletrônico que atende clientes em diversas localizações geográficas. Você precisa garantir que seu site permaneça altamente disponível e ofereça uma experiência de baixa latência para os usuários, mesmo durante períodos de pico de tráfego. Você está procurando uma solução que possa distribuir eficientemente ativos estáticos, como imagens, CSS e arquivos JavaScript para reduzir a carga do servidor e melhorar os tempos de resposta. Solução: implemente o Azure Cache para Redis para armazenar ativos estáticos acessados com frequência e servi-los diretamente da memória. A solução atende ao objetivo? [IMAGEM RELACIONADA: Visão geral do Azure Cache para Redis]',
        options: [
            { text: 'Sim', isCorrect: false, rationale: 'O Azure Cache para Redis é um armazenamento de dados na memória que aprimora o desempenho e a escalabilidade de aplicativos que dependem fortemente de armazenamentos de dados de back-end. Ele é adequado para aplicativos dentro ou fora do Azure e pode ser usado como um cache distribuído de dados ou conteúdo, um repositório de sessões, um agente de mensagens e muito mais. **No entanto, o Azure Cache para Redis não foi projetado principalmente para distribuir ativos estáticos, como imagens, CSS e arquivos JavaScript.** Ativos estáticos exigem cache de borda e distribuição de conteúdo em várias localizações geográficas para garantir acesso de baixa latência para os usuários. O Redis Cache não oferece suporte inerente a essa funcionalidade, pois fornece dados principalmente de um armazenamento centralizado na memória, em vez de locais geograficamente dispersos. Essa limitação o torna ineficiente para reduzir a latência e distribuir grandes arquivos estáticos globalmente.' },
            { text: 'Não', isCorrect: true, rationale: 'O Azure Cache para Redis é um armazenamento de dados na memória que aprimora o desempenho e a escalabilidade de aplicativos que dependem fortemente de armazenamentos de dados de back-end. Ele é adequado para aplicativos dentro ou fora do Azure e pode ser usado como um cache distribuído de dados ou conteúdo, um repositório de sessões, um agente de mensagens e muito mais. **No entanto, o Azure Cache para Redis não foi projetado principalmente para distribuir ativos estáticos, como imagens, CSS e arquivos JavaScript.** Ativos estáticos exigem cache de borda e distribuição de conteúdo em várias localizações geográficas para garantir acesso de baixa latência para os usuários. O Redis Cache não oferece suporte inerente a essa funcionalidade, pois fornece dados principalmente de um armazenamento centralizado na memória, em vez de locais geograficamente dispersos. Essa limitação o torna ineficiente para reduzir a latência e distribuir grandes arquivos estáticos globalmente.' }
        ],
        hint: 'Considere se o Azure Cache para Redis é a solução ideal para *distribuição global* e *cache de borda* de ativos estáticos, como imagens e arquivos JS/CSS.'
    },
    {
        question: 'Sua organização está implementando serviços de Armazenamento do Azure e precisa fornecer acesso seguro e por tempo limitado aos recursos de armazenamento. Para atender a esse requisito, você planeja configurar uma Assinatura de Acesso Compartilhado (SAS). Além disso, a equipe de segurança sugere considerar o Azure Key Vault para gerenciar credenciais de acesso em serviços de nuvem. No entanto, você precisa determinar os tipos de SAS corretos para diferentes cenários de acesso. Que tipo de Assinatura de Acesso Compartilhado (SAS) deve ser usada para cada cenário? [IMAGEM RELACIONADA: Fluxo do Provedor SAS]',
        options: [
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Delegação de Usuário SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Serviço SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Conta SAS', isCorrect: true, rationale: 'O SAS de Delegação de Usuário utiliza o Microsoft Entra ID para autenticação e autorização, fornecendo segurança baseada em identidade. O SAS de Serviço fornece acesso a um serviço específico do Armazenamento do Azure (ex: apenas Blob ou apenas Fila). O SAS de Conta concede acesso a vários serviços de armazenamento em uma única conta de Armazenamento do Azure (Blobs, Filas, Tabelas e Arquivos).' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Serviço SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Delegação de Usuário SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Conta SAS', isCorrect: false, rationale: 'As associações estão incorretas. O SAS de Serviço não usa credenciais do Entra ID, e o SAS de Delegação de Usuário não é apenas para um serviço específico.' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Conta SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Delegação de Usuário SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Serviço SAS', isCorrect: false, rationale: 'As associações estão incorretas. O SAS de Conta não usa credenciais do Entra ID, e as outras associações também estão trocadas.' },
            { text: 'Para "Acesso seguro aos recursos usando credenciais do Microsoft Entra ID, como Blob Storage ou Data Lake Storage.": Delegação de Usuário SAS; Para "Forneça acesso controlado a um serviço de armazenamento específico, como Armazenamento de Blobs ou Armazenamento de Filas.": Conta SAS; Para "Conceda acesso a recursos em vários serviços de armazenamento do Azure.": Serviço SAS', isCorrect: false, rationale: 'As associações estão incorretas. A Conta SAS não é para um serviço específico, e o Serviço SAS não é para vários serviços.' }
        ],
        hint: 'Associe os tipos de SAS com o escopo de acesso (serviço específico, toda a conta, ou baseado em identidade do Entra ID).'
    },
    {
        question: 'Você está projetando uma plataforma interna de compartilhamento de conhecimento para uma empresa. A plataforma deve gerar relatórios que identifiquem funcionários especialistas em diversos tópicos. Para cumprir as políticas organizacionais, os administradores devem ter controle total e consentimento sobre o acesso e o processamento de dados. Além disso, a solução deve oferecer suporte à extração escalável de dados para análises e relatórios. A empresa também está considerando integrar o Microsoft Purview para governança de dados, mas deve garantir a conformidade com as políticas de segurança internas. Qual tecnologia você deve implementar? [IMAGEM RELACIONADA: Visão geral do Microsoft Graph Data Connect]',
        options: [
            { text: 'Pesquisa do Microsoft Graph', isCorrect: false, rationale: 'A Pesquisa do Microsoft Graph é projetada para consultar dados indexados em aplicativos do Microsoft 365, não para extrair dados em larga escala para análises com controle administrativo rigoroso.' },
            { text: 'Conexão de dados do Microsoft Graph', isCorrect: true, rationale: 'O Microsoft Graph Data Connect é um serviço que permite a extração segura e em alto volume de dados do Microsoft 365 para soluções de análise e armazenamento baseadas no Azure. Ele oferece um modelo de controle administrativo e consentimento, garantindo governança, segurança e conformidade dos dados, além de suportar o processamento em lote para análises avançadas.' },
            { text: 'Conectores do Microsoft Graph', isCorrect: false, rationale: 'Os Conectores do Microsoft Graph permitem apenas a integração de fontes de dados externas ao Microsoft Graph Search, aprimorando os resultados de pesquisa, mas não facilitam a extração ou análise de dados em larga escala do Microsoft 365.' },
            { text: 'Explorador de gráficos do Microsoft Graph', isCorrect: false, rationale: 'O Microsoft Graph Explorer é uma ferramenta de desenvolvedor usada para interagir com as APIs do Microsoft Graph para testes e recuperação de dados, não para processamento de dados em larga escala ou geração de relatórios com controle administrativo.' }
        ],
        hint: 'Para extração de dados do Microsoft 365 em larga escala para análise, com foco em controle administrativo e conformidade, qual serviço do Microsoft Graph é o mais adequado?'
    },
    {
        question: 'Você implantou um aplicativo Web do Serviço de Aplicativo do Azure e configurou um registro de aplicativo no Microsoft Entra ID e no GitHub. O aplicativo precisa autenticar os usuários e, ao mesmo tempo, aplicar o SSL para comunicação segura. Além disso, o GitHub está definido como o provedor de identidade para autenticação do usuário. Para garantir a autenticação segura, o aplicativo precisa validar a solicitação do Microsoft Entra ID no código do aplicativo. Qual componente do token de ID deve ser validado para confirmar sua autenticidade? [IMAGEM RELACIONADA: Configurações de autenticação do App Registration]',
        options: [
            { text: 'Cabeçalho do token de ID', isCorrect: false, rationale: 'O cabeçalho do token de ID contém apenas metadados, como o algoritmo de assinatura e o identificador da chave, mas não verifica a autenticidade do token. Embora ajude a determinar como o token foi assinado, não prova que o token é válido ou não foi modificado.' },
            { text: 'Assinatura de token de ID', isCorrect: true, rationale: 'A assinatura do token de ID garante que o Microsoft Entra ID emitiu o token e que ele não foi adulterado. Quando o aplicativo recebe um token de ID, ele deve validar a assinatura usando as chaves públicas fornecidas pelo ponto de extremidade de descoberta OpenID Connect do Microsoft Entra ID para confirmar sua autenticidade.' },
            { text: 'ID do cliente', isCorrect: false, rationale: 'O ID do Cliente identifica apenas o aplicativo que solicitou a autenticação, mas não valida a autenticidade do token de ID. Ele é usado para diferenciar aplicativos no Microsoft Entra ID, mas um invasor pode modificar as declarações de um token e ainda incluir um ID do Cliente válido.' },
            { text: 'ID do aplicativo URI', isCorrect: false, rationale: 'O URI do ID do Aplicativo normalmente define o identificador exclusivo de uma API no Microsoft Entra ID, usado ao solicitar permissões e validar o público. Embora ajude a determinar a quem o token se destina, não confirma a autenticidade do token nem impede adulterações.' }
        ],
        hint: 'Para garantir que um token de ID não foi adulterado e foi emitido por uma autoridade confiável, qual parte do token você deve verificar criptograficamente?'
    },
    {
        question: 'Você é um administrador de TI de uma empresa de comércio eletrônico que está migrando seu sistema de processamento de pedidos para uma máquina virtual (VM) do Azure. Você deve considerar os seguintes requisitos: – Garanta um desempenho rápido de disco com baixa latência para lidar com milhares de transações de clientes por segundo. – Selecione um tipo de disco que forneça alto IOPS e taxa de transferência para acompanhar o alto volume de operações de leitura/gravação do banco de dados. Você também precisa de uma opção de redundância que garanta a disponibilidade dos dados mesmo se um data center inteiro do Azure na região falhar, evitando tempo de inatividade durante eventos de pico de vendas. Qual tipo de disco gerenciado do Azure e opção de redundância devem ser usados para atender a esses requisitos? [IMAGEM RELACIONADA: Tipos de disco gerenciado do Azure e redundância de zona]',
        options: [
            { text: 'Tipo de disco gerenciado do Azure: SSD Premium; Tipo de redundância de armazenamento do Azure: ZRS (Armazenamento Redundante de Zona)', isCorrect: true, rationale: 'Os SSDs Premium do Azure oferecem suporte a discos de alto desempenho e baixa latência para VMs que lidam com cargas de trabalho intensivas de E/S. O armazenamento redundante de zona (ZRS) garante que seus dados sejam replicados de forma síncrona em três zonas de disponibilidade do Azure dentro da região primária, protegendo contra falhas em data centers inteiros dentro da mesma região. Esta combinação atende aos requisitos de alto desempenho e alta disponibilidade dentro da região.' },
            { text: 'Tipo de disco gerenciado do Azure: SSD Padrão; Tipo de redundância de armazenamento do Azure: GRS (armazenamento geo-redundante)', isCorrect: false, rationale: 'O SSD Padrão oferece IOPS mais baixos e latência mais alta, tornando-o inadequado para aplicativos de alto desempenho. O GRS replica dados entre regiões, mas não fornece failover automático para discos gerenciados, o que não atende ao requisito de disponibilidade contínua para discos de VM.' },
            { text: 'Tipo de disco gerenciado do Azure: Ultra Disco; Tipo de redundância de armazenamento do Azure: RA-GRS (Armazenamento Geo-Redundante de Acesso de Leitura)', isCorrect: false, rationale: 'Embora o Ultra Disk ofereça desempenho extremo, ele não oferece suporte principal ao ZRS, o que significa que não tem proteção contra falhas em todo o data center. RA-GRS é usado para contas de armazenamento e blobs, não para Azure Managed Disks, e não fornece redundância em nível de zona.' },
            { text: 'Tipo de disco gerenciado do Azure: SSD Premium; Tipo de redundância de armazenamento do Azure: GRS (armazenamento geo-redundante)', isCorrect: false, rationale: 'SSD Premium é correto para desempenho, mas GRS não fornece a redundância em nível de zona necessária para alta disponibilidade dentro da mesma região para discos de VM.' }
        ],
        hint: 'Para alto IOPS e baixa latência de disco, e proteção contra falhas de data center dentro da mesma região, qual combinação de tipo de disco e redundância é a ideal?'
    },
    {
        question: 'Você é engenheiro de segurança em nuvem em uma empresa de SaaS que fornece serviços de criptografia de documentos para empresas. A empresa utiliza o Azure Key Vault para armazenar as chaves criptográficas para criptografar os documentos dos clientes. Para atender à conformidade de segurança ISO 27001, sua organização deve: – Aplicar algoritmos criptográficos específicos para chaves armazenadas no Key Vault. – Garantir que as chaves sejam rotacionadas regularmente. – Impedir o uso de algoritmos de criptografia legados. Qual solução você deve implementar? [IMAGEM RELACIONADA: Definições de política do Azure para Key Vault]',
        options: [
            { text: 'Firewall do Key Vault', isCorrect: false, rationale: 'O firewall do Key Vault controla principalmente o acesso em nível de rede ao Azure Key Vault, restringindo o acesso com base em endereços IP ou redes virtuais. Embora aumente a segurança ao impedir o acesso não autorizado, ele não lida com políticas criptográficas nem impõe a rotação de chaves ou impede o uso de algoritmos legados.' },
            { text: 'Política do Azure', isCorrect: true, rationale: 'O Azure Policy é um serviço de governança que permite que organizações criem, atribuam e gerenciem definições de políticas para aplicar regras e efeitos específicos em seus recursos. Com o Azure Policy, você pode aplicar regras como exigir algoritmos criptográficos específicos, garantir a rotação regular de chaves e impedir o uso de algoritmos legados para conformidade com padrões como ISO 27001. Ele avalia os recursos durante seu ciclo de vida para garantir a conformidade contínua.' },
            { text: 'Política de Rotação de Chaves', isCorrect: false, rationale: 'Embora o Azure ofereça funcionalidade de rotação de chaves, ela geralmente é gerenciada manualmente ou por automação. A Política do Azure seria mais eficaz para impor a rotação de chaves regularmente, juntamente com outros requisitos criptográficos, de forma holística e automatizada.' },
            { text: 'Especificações do modelo do Azure Resource Manager', isCorrect: false, rationale: 'As especificações do modelo do Azure Resource Manager são usadas principalmente para implantar e gerenciar recursos do Azure com base em configurações predefinidas. Embora eficazes para a configuração inicial, não fornecem a aplicação contínua de políticas necessária para gerenciar rotações de chaves ou padrões criptográficos após a implantação dos recursos.' }
        ],
        hint: 'Para impor padrões de segurança contínuos e conformidade em recursos do Azure, como quais algoritmos criptográficos usar ou a rotação de chaves, qual serviço de governança você deve utilizar?'
    },
    {
        question: 'Você é um administrador de nuvem que gerencia 50 máquinas virtuais (VMs) do Azure em execução em um ambiente de produção. Essas VMs têm identidades gerenciadas atribuídas pelo sistema que permitem a autenticação e a interação seguras com serviços do Azure, como o Azure Key Vault e o Azure Storage. Sua equipe está implementando uma estratégia de controle de acesso baseado em função (RBAC), e a equipe de segurança requer o atributo de ID do objeto de cada identidade gerenciada atribuída pelo sistema para configurar políticas de acesso no Azure Key Vault. Qual comando você deve usar para recuperar essas informações? [IMAGEM RELACIONADA: Exemplo de uso de az resource show]',
        options: [
            { text: 'az identity show', isCorrect: false, rationale: 'Este comando foi projetado principalmente para recuperar informações sobre identidades gerenciadas atribuídas pelo usuário, não aquelas atribuídas pelo sistema. As identidades atribuídas pelo sistema estão intrinsecamente vinculadas aos seus respectivos recursos do Azure e são gerenciadas de forma diferente.' },
            { text: 'az resource show', isCorrect: true, rationale: 'O comando `az resource show` recupera informações detalhadas sobre um recurso do Azure, incluindo o ID do objeto da identidade gerenciada atribuída pelo sistema. Identidades gerenciadas atribuídas pelo sistema são vinculadas diretamente a um recurso do Azure (neste caso, VMs), e seus metadados, incluindo o ID principal (ID do objeto), podem ser acessados usando este comando.' },
            { text: 'Get-AzureADServicePrincipal', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera informações sobre entidades de serviço no ID do Microsoft Entra. Embora as identidades gerenciadas tenham uma entidade de serviço correspondente, usar este comando para encontrar o ID do objeto de uma identidade gerenciada atribuída pelo sistema não é simples e requer filtragem e correlação adicionais.' },
            { text: 'Get-AzVM', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera apenas propriedades de VMs do Azure, como tamanho, local e status. Ele não fornece acesso direto ao ID do objeto de uma identidade gerenciada atribuída pelo sistema associada à VM. Para obter o ID do objeto, comandos ou consultas adicionais seriam necessários.' }
        ],
        hint: 'Para obter o ID do objeto de uma identidade gerenciada atribuída pelo sistema a uma VM, qual comando genérico da CLI do Azure para recursos você deve usar?'
    },
    {
        question: 'Você é desenvolvedor de APIs para uma empresa de tecnologia financeira que fornece processamento de transações em tempo real por meio de uma instância de nível Standard do Azure API Management (APIM) chamada Agila. Essa instância APIM é configurada com um gateway gerenciado para expor APIs com segurança a clientes externos. Uma das APIs, a TransactionAPI, interage com um banco de dados de back-end que só pode lidar com um volume limitado de solicitações por minuto devido a restrições de licenciamento. Para evitar a degradação do desempenho, você precisa aplicar uma política que limite o número de chamadas de API de um endereço IP individual para garantir o uso justo e, ao mesmo tempo, proteger o sistema de back-end contra sobrecarga. Qual política de APIM você deve aplicar ao TransactionAPI para atender a esse requisito? [IMAGEM RELACIONADA: Exemplo de política rate-limit-by-key]',
        options: [
            { text: 'set-backend-service', isCorrect: false, rationale: 'Esta política é usada principalmente para especificar o serviço de back-end para o qual as chamadas de API são encaminhadas. Ela não aborda a limitação de taxa ou o controle do volume de solicitações.' },
            { text: 'rate-limit-by-key', isCorrect: true, rationale: 'A política `rate-limit-by-key` no Gerenciamento de API do Azure (APIM) permite controlar a taxa de processamento das solicitações, impondo limites com base em uma chave específica, como uma chave de API, ID de assinatura ou endereço IP do cliente. Isso é particularmente útil para evitar o uso excessivo ou abusivo do sistema por um único cliente ou grupo de clientes, protegendo o back-end contra sobrecarga.' },
            { text: 'rate-limit', isCorrect: false, rationale: 'A política `rate-limit` aplica-se globalmente, sem estar vinculada a uma chave específica (como IP individual). Isso significa que limitaria o número total de solicitações para toda a API, não para usuários ou clientes individuais, o que não atende ao requisito de uso justo por IP individual.' },
            { text: 'set-query-parameter', isCorrect: false, rationale: 'Esta política é útil apenas para modificar parâmetros de consulta em solicitações, não para controlar a taxa de chamadas de API ou limitar solicitações. É irrelevante para o cenário em que a limitação de taxa por endereço IP é necessária.' }
        ],
        hint: 'Para limitar o número de chamadas de API por cliente individual (como um endereço IP) no APIM, qual política de limitação de taxa específica você usaria?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo web para um cliente corporativo que se integra à plataforma de identidade da Microsoft para autenticação de usuários. A aplicação deve implementar com segurança a identificação de usuários para rastreá-los em vários serviços dentro do mesmo locatário do Microsoft Enterprise ID. Para garantir a consistência, o aplicativo deve usar um identificador único e imutável para cada usuário. Que tipo de reivindicação é necessária para esse cenário? [IMAGEM RELACIONADA: Detalhes do registro de aplicativo com Object ID]',
        options: [
            { text: 'Reivindicação de ID de Objeto (OID)', isCorrect: true, rationale: 'A Reivindicação de ID de Objeto (OID) é um identificador exclusivo e permanente atribuído a cada usuário em um locatário do Microsoft Entra ID. Ele rastreia e gerencia usuários de forma consistente em vários aplicativos e serviços na mesma organização, permanecendo inalterado durante todo o ciclo de vida do usuário, o que o torna um identificador confiável e imutável.' },
            { text: 'Reivindicação de identificação do inquilino (TID)', isCorrect: false, rationale: 'A Declaração de ID do Locatário (TID) é usada principalmente para identificar o locatário do Microsoft Entra ID ao qual um usuário pertence, não para identificar usuários individuais de forma exclusiva.' },
            { text: 'Nome Principal do Usuário (UPN)', isCorrect: false, rationale: 'O Nome Principal do Usuário (UPN) é geralmente usado como nome de login do usuário, mas não é um identificador imutável, pois pode mudar se o endereço de e-mail ou o domínio do usuário mudar.' },
            { text: 'Identificador Pseudônimo em Par (PPID)', isCorrect: false, rationale: 'O Identificador Pseudônimo Parcial (PPID) é usado em cenários de preservação da privacidade para um pseudônimo atribuído a um usuário para interações entre aplicativos, não para ser um identificador permanente ou imutável para rastrear usuários de forma consistente em todos os serviços.' }
        ],
        hint: 'Para um identificador de usuário único e imutável dentro de um locatário do Microsoft Entra ID, qual reivindicação é a mais adequada?'
    },
    {
        question: 'Você gerencia um site de comércio eletrônico que atende clientes em diversas localizações geográficas. Você precisa garantir que seu site permaneça altamente disponível e ofereça uma experiência de baixa latência para os usuários, mesmo durante períodos de pico de tráfego. Você está procurando uma solução que possa distribuir eficientemente ativos estáticos, como imagens, CSS e arquivos JavaScript para reduzir a carga do servidor e melhorar os tempos de resposta. Solução: configure um Gerenciador de Tráfego do Azure para rotear solicitações de usuários para várias regiões do Azure com base na proximidade geográfica. A solução atende ao objetivo? [IMAGEM RELACIONADA: Visão geral do Azure Traffic Manager]',
        options: [
            { text: 'Sim', isCorrect: false, rationale: 'O Gerenciador de Tráfego do Azure é um balanceador de carga de tráfego baseado em DNS que permite a distribuição de tráfego para aplicativos públicos nas regiões globais do Azure. Ele garante alta disponibilidade e capacidade de resposta rápida para endpoints públicos. No entanto, o Gerenciador de Tráfego não lida com o armazenamento em cache ou a distribuição de ativos estáticos, como imagens, arquivos CSS e JavaScript. Sua função se limita a rotear o tráfego no nível do DNS, sem fornecer conteúdo diretamente. O requisito enfatiza a necessidade de uma solução eficiente para *distribuir ativos estáticos*, minimizando a carga do servidor e aprimorando os tempos de resposta, o que não é o foco principal do Traffic Manager.' },
            { text: 'Não', isCorrect: true, rationale: 'O Gerenciador de Tráfego do Azure é um balanceador de carga de tráfego baseado em DNS que permite a distribuição de tráfego para aplicativos públicos nas regiões globais do Azure. Ele garante alta disponibilidade e capacidade de resposta rápida para endpoints públicos. No entanto, o Gerenciador de Tráfego não lida com o armazenamento em cache ou a distribuição de ativos estáticos, como imagens, arquivos CSS e JavaScript. Sua função se limita a rotear o tráfego no nível do DNS, sem fornecer conteúdo diretamente. O requisito enfatiza a necessidade de uma solução eficiente para *distribuir ativos estáticos*, minimizando a carga do servidor e aprimorando os tempos de resposta, o que não é o foco principal do Traffic Manager.' }
        ],
        hint: 'Pense na principal funcionalidade do Azure Traffic Manager: ele roteia o tráfego a nível de DNS, mas ele *distribui* ativos estáticos diretamente?'
    },
    {
        question: 'Você gerencia um site de comércio eletrônico que atende clientes em diversas localizações geográficas. Você precisa garantir que seu site permaneça altamente disponível e ofereça uma experiência de baixa latência para os usuários, mesmo durante períodos de pico de tráfego. Você está procurando uma solução que possa distribuir eficientemente ativos estáticos, como imagens, CSS e arquivos JavaScript para reduzir a carga do servidor e melhorar os tempos de resposta. Solução: integre o Azure Front Door à sua arquitetura. A solução atende ao objetivo? [IMAGEM RELACIONADA: Comparação de ofertas do Azure Front Door]',
        options: [
            { text: 'Sim', isCorrect: true, rationale: 'O Azure Front Door aprimora a experiência do usuário ao fornecer maior disponibilidade, menor latência, maior escalabilidade e segurança aprimorada para entrega de conteúdo e desenvolvimento de aplicativos globais. Como uma Rede de Distribuição de Conteúdo (CDN) avançada em nuvem da Microsoft, o Azure Front Door garante acesso rápido, confiável e seguro a conteúdo da web estático e dinâmico em escala global. Ele otimiza a distribuição de conteúdo por meio de pontos de presença (PoPs) globais e locais estrategicamente posicionados, próximos a usuários finais corporativos e consumidores. A incorporação do Azure Front Door na arquitetura atende aos requisitos, fornecendo balanceamento de carga global, habilitando o cache para ativos estáticos e otimizando a latência através da rede de borda global da Microsoft.' },
            { text: 'Não', isCorrect: false, rationale: 'O Azure Front Door aprimora a experiência do usuário ao fornecer maior disponibilidade, menor latência, maior escalabilidade e segurança aprimorada para entrega de conteúdo e desenvolvimento de aplicativos globais. Como uma Rede de Distribuição de Conteúdo (CDN) avançada em nuvem da Microsoft, o Azure Front Door garante acesso rápido, confiável e seguro a conteúdo da web estático e dinâmico em escala global. Ele otimiza a distribuição de conteúdo por meio de pontos de presença (PoPs) globais e locais estrategicamente posicionados, próximos a usuários finais corporativos e consumidores. A incorporação do Azure Front Door na arquitetura atende aos requisitos, fornecendo balanceamento de carga global, habilitando o cache para ativos estáticos e otimizando a latência através da rede de borda global da Microsoft.' }
        ],
        hint: 'Pense na funcionalidade do Azure Front Door como uma CDN global para ativos estáticos e dinâmicos.'
    },
    {
        question: 'Sua equipe está desenvolvendo uma API REST do Serviço de Aplicativo do Azure que será usada por um aplicativo web do Serviço de Aplicativo do Azure para gerenciar perfis de funcionários. A API deve autenticar os usuários e recuperar suas informações de perfil do Microsoft Entra ID. Além disso, a API deve permitir que usuários autorizados atualizem seus dados de perfil com segurança. Qual ferramenta efetivamente alcançará e implementará a funcionalidade? (Selecione DUAS.) [IMAGEM RELACIONADA: Plataforma Microsoft 365 com Microsoft Graph e MSAL]',
        options: [
            { text: 'API do Microsoft Graph e Biblioteca de Autenticação Microsoft (MSAL)', isCorrect: true, rationale: 'A API do Microsoft Graph é um endpoint poderoso e unificado que permite aos desenvolvedores interagir com uma ampla gama de serviços da Microsoft, incluindo o Microsoft Entra ID, para autenticar usuários, recuperar suas informações de perfil e gerenciar dados de diretório. A Biblioteca de Autenticação Microsoft (MSAL) funciona em conjunto com o Microsoft Graph para simplificar a autenticação e proteger o acesso aos serviços Microsoft, lidando com a aquisição de tokens. Juntas, elas fornecem uma solução robusta para a criação de aplicativos seguros que gerenciam perfis de usuários e dados organizacionais.' },
            { text: 'Gerenciamento de Identidade Privilegiada (PIM) da Microsoft Enterprise e ID Externo do Microsoft Entra', isCorrect: false, rationale: 'O PIM é usado principalmente para gerenciar e controlar o acesso a recursos críticos e funções privilegiadas, não para gerenciar ou recuperar perfis de usuário gerais. O ID Externo do Microsoft Entra é para gerenciar o acesso e a colaboração com usuários externos, não para perfis de funcionários internos.' },
            { text: 'Microsoft Entra Connect e API do Microsoft Graph', isCorrect: false, rationale: 'O Microsoft Entra Connect é usado para sincronizar o Active Directory local com o Microsoft Entra ID, não para interagir diretamente com a API para recuperar ou atualizar detalhes do perfil do usuário. Embora a API do Microsoft Graph seja correta, o Entra Connect não é a ferramenta de autenticação/recuperação neste cenário.' },
            { text: 'Biblioteca de Autenticação Microsoft (MSAL) e Microsoft Entra Connect', isCorrect: false, rationale: 'A MSAL é correta, mas o Microsoft Entra Connect é para sincronização de diretórios, não para a funcionalidade de autenticação e recuperação de perfil de API.' }
        ],
        hint: 'Para autenticar usuários com o Microsoft Entra ID e gerenciar perfis de funcionários (leitura e atualização) em uma API, quais duas ferramentas de desenvolvimento são fundamentais?'
    },
    {
        question: 'Você gerencia uma frota de 250 Máquinas Virtuais (VMs) do Azure, cada uma habilitada para VM com identidade gerenciada atribuída pelo sistema. A equipe de segurança solicitou o atributo de ID do objeto para cada identidade para configurar o controle de acesso baseado em função (RBAC). Durante uma discussão, um colega menciona que, como as identidades gerenciadas funcionam de forma semelhante às entidades de serviço no Microsoft Entra ID, o ID do objeto deve ser recuperável usando comandos do Microsoft Entra ID. Qual comando você deve executar para obter essas informações? [IMAGEM RELACIONADA: Exemplo de uso de az resource show]',
        options: [
            { text: 'az identity show', isCorrect: false, rationale: 'Este comando é projetado principalmente para recuperar informações sobre identidades gerenciadas atribuídas pelo usuário, não aquelas atribuídas pelo sistema, que estão intrinsecamente vinculadas aos seus respectivos recursos do Azure.' },
            { text: 'az resource show', isCorrect: true, rationale: 'O comando `az resource show` recupera informações detalhadas sobre um recurso do Azure, incluindo o ID do objeto da identidade gerenciada atribuída pelo sistema. Identidades gerenciadas atribuídas pelo sistema são vinculadas diretamente a um recurso do Azure (neste caso, VMs), e seus metadados, incluindo o ID principal (ID do objeto), podem ser acessados usando este comando.' },
            { text: 'Get-AzureADServicePrincipal', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera informações sobre entidades de serviço no ID do Microsoft Entra. Embora as identidades gerenciadas tenham uma entidade de serviço correspondente, usar este comando para encontrar o ID do objeto de uma identidade gerenciada atribuída pelo sistema não é simples e requer filtragem e correlação adicionais.' },
            { text: 'Get-AzVM', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera apenas propriedades de VMs do Azure, como tamanho, local e status. Ele não fornece acesso direto ao ID do objeto de uma identidade gerenciada atribuída pelo sistema associada à VM.' }
        ],
        hint: 'Para obter o ID do objeto de uma identidade gerenciada atribuída pelo sistema a uma VM usando a CLI do Azure, qual comando genérico de gerenciamento de recursos você utilizaria?'
    },
    {
        question: 'Você está desenvolvendo um sistema de rastreamento logístico em tempo real para caminhões de entrega que envia dados de localização e status para o backend via Azure Web PubSub. Um aplicativo do Azure Functions processa esses dados para análises em tempo real, estimando os tempos de entrega e sinalizando atrasos. Uma rede de distribuição de conteúdo (CDN) otimiza a transmissão de dados para os painéis do cliente. Para aprimorar a segurança da API, o Gerenciamento de API do Azure (APIM) é introduzido para proteger endpoints e impor a autenticação. A configuração correta do cabeçalho HTTP é necessária para garantir a comunicação segura entre a CDN e o aplicativo do Azure Functions. Qual cabeçalho HTTP deve ser adicionado à lista permitida? [IMAGEM RELACIONADA: Exemplo de requisição HTTP com WebHook-Request-Origin]',
        options: [
            { text: 'WebHook-Allowed-Rate', isCorrect: false, rationale: 'Este cabeçalho é usado principalmente para fins de limitação de taxa e não valida a origem das solicitações.' },
            { text: 'WebHook-Request-Origin', isCorrect: true, rationale: 'Ao configurar cabeçalhos HTTP para comunicação segura entre uma Rede de Distribuição de Conteúdo (CDN) e o Azure Functions, é essencial definir cabeçalhos apropriados que validem a origem das solicitações. Em particular, cabeçalhos como `WebHook-Request-Origin` podem ser usados para especificar as origens permitidas das solicitações, garantindo que elas sejam provenientes de fontes confiáveis, como a CDN, e evitando problemas de origem cruzada.' },
            { text: 'WebHook-Allowed-Origin', isCorrect: false, rationale: 'Cabeçalhos como este não são padrão em configurações de segurança de API para validar a origem das solicitações de forma segura entre serviços.' },
            { text: 'WebHook-Request-Callback', isCorrect: false, rationale: 'Este cabeçalho está relacionado à especificação de URLs de retorno de chamada para receber a resposta de um webhook e não serve ao propósito de validar a origem das solicitações.' }
        ],
        hint: 'Para garantir que as solicitações de webhook para seu Azure Function venham de uma origem confiável como uma CDN, qual cabeçalho HTTP é usado para validar a origem da solicitação?'
    },
    {
        question: 'Você está desenvolvendo uma API REST do Serviço de Aplicativo do Azure que será usada por um aplicativo web do Serviço de Aplicativo do Azure para gerenciar perfis de funcionários. A API deve autenticar os usuários e recuperar suas informações de perfil do Microsoft Entra ID. Além disso, a API deve permitir que usuários autorizados atualizem seus dados de perfil com segurança. Qual ferramenta efetivamente alcançará e implementará a funcionalidade? (Selecione DUAS.) [IMAGEM RELACIONADA: Diagrama da Plataforma Microsoft 365]', // Este parece ser um dup da 24/original
        options: [
            { text: 'API do Microsoft Graph e Biblioteca de Autenticação Microsoft (MSAL)', isCorrect: true, rationale: 'A API do Microsoft Graph é um endpoint poderoso e unificado que permite aos desenvolvedores interagir com uma ampla gama de serviços da Microsoft, incluindo o Microsoft Entra ID, para autenticar usuários, recuperar suas informações de perfil e gerenciar dados de diretório. A Biblioteca de Autenticação Microsoft (MSAL) funciona em conjunto com o Microsoft Graph para simplificar a autenticação e proteger o acesso aos serviços Microsoft, lidando com a aquisição de tokens. Juntas, elas fornecem uma solução robusta para a criação de aplicativos seguros que gerenciam perfis de usuários e dados organizacionais.' },
            { text: 'Gerenciamento de Identidade Privilegiada (PIM) da Microsoft Enterprise e ID Externo do Microsoft Entra', isCorrect: false, rationale: 'O PIM é usado principalmente para gerenciar e controlar o acesso a recursos críticos e funções privilegiadas, não para gerenciar ou recuperar perfis de usuário gerais. O ID Externo do Microsoft Entra é para gerenciar o acesso e a colaboração com usuários externos, não para perfis de funcionários internos.' },
            { text: 'Microsoft Entra Connect e API do Microsoft Graph', isCorrect: false, rationale: 'O Microsoft Entra Connect é usado para sincronizar o Active Directory local com o Microsoft Entra ID, não para interagir diretamente com a API para recuperar ou atualizar detalhes do perfil do usuário. Embora a API do Microsoft Graph seja correta, o Entra Connect não é a ferramenta de autenticação/recuperação neste cenário.' },
            { text: 'Biblioteca de Autenticação Microsoft (MSAL) e Microsoft Entra Connect', isCorrect: false, rationale: 'A MSAL é correta, mas o Microsoft Entra Connect é para sincronização de diretórios, não para a funcionalidade de autenticação e recuperação de perfil de API.' }
        ],
        hint: 'Para autenticar usuários com o Microsoft Entra ID e gerenciar perfis de funcionários (leitura e atualização) em uma API, quais duas ferramentas de desenvolvimento são fundamentais?'
    },
    {
        question: 'Você gerencia uma frota de 250 Máquinas Virtuais (VMs) do Azure, cada uma habilitada para VM com identidade gerenciada atribuída pelo sistema. A equipe de segurança solicitou o atributo de ID do objeto para cada identidade para configurar o controle de acesso baseado em função (RBAC). Durante uma discussão, um colega menciona que, como as identidades gerenciadas funcionam de forma semelhante às entidades de serviço no Microsoft Entra ID, o ID do objeto deve ser recuperável usando comandos do Microsoft Entra ID. Qual comando você deve executar para obter essas informações? [IMAGEM RELACIONADA: Exemplo de uso de az resource show]', // Este parece ser um dup da 25/original
        options: [
            { text: 'az identity show', isCorrect: false, rationale: 'Este comando é projetado principalmente para recuperar informações sobre identidades gerenciadas atribuídas pelo usuário, não aquelas atribuídas pelo sistema, que estão intrinsecamente vinculadas aos seus respectivos recursos do Azure.' },
            { text: 'az resource show', isCorrect: true, rationale: 'O comando `az resource show` recupera informações detalhadas sobre um recurso do Azure, incluindo o ID do objeto da identidade gerenciada atribuída pelo sistema. Identidades gerenciadas atribuídas pelo sistema são vinculadas diretamente a um recurso do Azure (neste caso, VMs), e seus metadados, incluindo o ID principal (ID do objeto), podem ser acessados usando este comando.' },
            { text: 'Get-AzureADServicePrincipal', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera informações sobre entidades de serviço no ID do Microsoft Entra. Embora as identidades gerenciadas tenham uma entidade de serviço correspondente, usar este comando para encontrar o ID do objeto de uma identidade gerenciada atribuída pelo sistema não é simples e requer filtragem e correlação adicionais.' },
            { text: 'Get-AzVM', isCorrect: false, rationale: 'Este cmdlet do PowerShell recupera apenas propriedades de VMs do Azure, como tamanho, local e status. Ele não fornece acesso direto ao ID do objeto de uma identidade gerenciada atribuída pelo sistema associada à VM.' }
        ],
        hint: 'Para obter o ID do objeto de uma identidade gerenciada atribuída pelo sistema a uma VM usando a CLI do Azure, qual comando genérico de gerenciamento de recursos você utilizaria?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo de compartilhamento de viagens em tempo real, onde as localizações dos motoristas são armazenadas em uma instância do Azure Cache para Redis. O sistema em desenvolvimento deve: – Priorize motoristas recentemente ativos para uma rápida correspondência de passageiros. – Excluir motoristas inativos que ficaram offline por um período definido. – Otimize o uso da memória para armazenar locais de drivers relevantes. – Use o Azure Event Grid para notificar quando um driver estiver disponível. Qual política de despejo deve ser implementada? [IMAGEM RELACIONADA: Configurações avançadas do Azure Cache para Redis]',
        options: [
            { text: 'noeviction', isCorrect: false, rationale: 'A política `noeviction` impede a remoção quando o limite de memória é atingido, o que significa que, se o cache estiver cheio, novas gravações falharão. Isso é inadequado para o caso de uso, pois você precisa atualizar continuamente os locais dos drivers sem o risco de bloquear as gravações.' },
            { text: 'volatile-lru', isCorrect: true, rationale: 'A política `volatile-lru` (Least Recently Used) remove as chaves menos usadas recentemente entre aquelas com uma expiração definida. Isso é ideal para o cenário, pois prioriza motoristas ativos (recentemente usados) e permite que motoristas inativos (que não foram usados por um tempo e têm expiração definida) sejam removidos, otimizando o uso da memória e priorizando a atualidade.' },
            { text: 'allkeys-lru', isCorrect: false, rationale: 'A política `allkeys-lru` remove as chaves menos usadas recentemente de *todas* as chaves, independentemente de terem ou não uma expiração definida. Embora possa priorizar a atividade recente, ela não gerencia especificamente chaves expiradas ou inativas e não requer expiração explícita, o que adicionaria complexidade manual para lidar com motoristas inativos.' },
            { text: 'volatile-lfu', isCorrect: false, rationale: 'A política `volatile-lfu` (Least Frequently Used) remove as chaves menos *frequentemente* usadas com uma expiração definida. No entanto, em um aplicativo de compartilhamento de viagens, a *atualidade* (recentemente usado) é mais importante do que a frequência geral de uso para priorizar motoristas ativos, tornando `volatile-lru` mais adequado.' }
        ],
        hint: 'Para um cache Redis onde a atualidade dos dados é crucial e dados inativos devem ser removidos, qual política de despejo baseada na "menos recentemente usada" e com expiração definida é a mais apropriada?'
    },
    {
        question: 'Você mantém um aplicativo web de missão crítica do Serviço de Aplicativo do Azure para milhares de usuários e habilitou o Application Insights para monitoramento. Sua equipe observou diversas exceções no ambiente de produção, causando falhas intermitentes. Para identificar a causa raiz, você precisa examinar a execução do código-fonte e os valores das variáveis quando ocorrem exceções sem afetar o desempenho ao vivo. Além disso, sua equipe usa os Alertas do Azure Monitor para ser notificada quando a taxa de exceção excede um limite. Qual recurso do Application Insights é mais adequado para esse cenário? [IMAGEM RELACIONADA: Snapshot Debugger no Application Insights]',
        options: [
            { text: 'Depurador de Snapshot', isCorrect: true, rationale: 'O Snapshot Debugger do Application Insights é uma ferramenta poderosa projetada para ajudar desenvolvedores a diagnosticar e resolver exceções em ambientes de produção sem afetar o desempenho do aplicativo. Quando ocorre uma exceção, ele captura automaticamente um instantâneo do estado do aplicativo, incluindo a pilha de chamadas e os valores das variáveis, fornecendo insights detalhados sobre o problema. Isso permite a depuração de causa raiz sem interrupção do serviço.' },
            { text: 'Painel de falhas do Application Insights', isCorrect: false, rationale: 'O Painel de Falhas do Application Insights agrega dados de falhas de alto nível, como solicitações com falha e exceções, mas não fornece recursos de depuração aprofundados para inspecionar a execução real do código-fonte ou os valores das variáveis quando ocorre uma exceção.' },
            { text: 'Perfilador', isCorrect: false, rationale: 'O Profiler se concentra principalmente em rastrear problemas de desempenho, como uso da CPU, chamadas de função e tempos de execução. Ele não se concentra em depurar exceções ou examinar o estado do aplicativo quando ocorre um erro.' },
            { text: 'Logs do Azure Monitor com consulta Kusto', isCorrect: false, rationale: 'O Azure Monitor Logs com Kusto Query é usado para consultar e analisar dados de log a fim de identificar tendências, padrões ou anomalias. Embora possa ajudar a identificar exceções, não fornece acesso direto ao estado de execução do aplicativo no momento de uma exceção ou a valores de variáveis, como o Snapshot Debugger.' }
        ],
        hint: 'Para examinar o estado do código-fonte e os valores das variáveis *no momento de uma exceção* em produção, sem impactar o desempenho, qual recurso do Application Insights é o mais adequado?'
    },
    {
        question: 'Você está desenvolvendo um sistema de rastreamento logístico em tempo real para caminhões de entrega que envia dados de localização e status para o backend via Azure Web PubSub. Um aplicativo do Azure Functions processa esses dados para análises em tempo real, estimando os tempos de entrega e sinalizando atrasos. Uma rede de distribuição de conteúdo (CDN) otimiza a transmissão de dados para os painéis do cliente. Para aprimorar a segurança da API, o Gerenciamento de API do Azure (APIM) é introduzido para proteger endpoints e impor a autenticação. A configuração correta do cabeçalho HTTP é necessária para garantir a comunicação segura entre a CDN e o aplicativo do Azure Functions. Qual cabeçalho HTTP deve ser adicionado à lista permitida? [IMAGEM RELACIONADA: Exemplo de requisição HTTP com WebHook-Request-Origin]', // Este parece ser um dup da 28/original
        options: [
            { text: 'WebHook-Allowed-Rate', isCorrect: false, rationale: 'Este cabeçalho é usado principalmente para fins de limitação de taxa e não valida a origem das solicitações.' },
            { text: 'WebHook-Request-Origin', isCorrect: true, rationale: 'Ao configurar cabeçalhos HTTP para comunicação segura entre uma Rede de Distribuição de Conteúdo (CDN) e o Azure Functions, é essencial definir cabeçalhos apropriados que validem a origem das solicitações. Em particular, cabeçalhos como `WebHook-Request-Origin` podem ser usados para especificar as origens permitidas das solicitações, garantindo que elas sejam provenientes de fontes confiáveis, como a CDN, e evitando problemas de origem cruzada.' },
            { text: 'WebHook-Allowed-Origin', isCorrect: false, rationale: 'Cabeçalhos como este não são padrão em configurações de segurança de API para validar a origem das solicitações de forma segura entre serviços.' },
            { text: 'WebHook-Request-Callback', isCorrect: false, rationale: 'Este cabeçalho está relacionado à especificação de URLs de retorno de chamada para receber a resposta de um webhook e não serve ao propósito de validar a origem das solicitações.' }
        ],
        hint: 'Para garantir que as requisições de webhook para seu Azure Function venham de uma origem confiável como uma CDN, qual cabeçalho HTTP é usado para validar a origem da requisição?'
    },
    {
        question: 'Você faz parte de uma equipe de desenvolvimento de uma empresa de tecnologia que fornece vários serviços web baseados em nuvem. Todos os serviços web devem observar as seguintes normas de segurança e acesso. – As solicitações de API devem ser gerenciadas pelo Gerenciamento de API do Azure. – A autenticação deve ser feita usando o OpenID Connect. – Solicitações anônimas devem ser estritamente bloqueadas. – O API Gateway deve registrar tentativas de acesso para fins de auditoria. Uma avaliação de segurança recente descobriu que alguns endpoints de API são acessíveis sem autenticação, o que pode levar ao acesso não autorizado a dados. Qual política de Gerenciamento de API do Azure você deve configurar para impor a autenticação? [IMAGEM RELACIONADA: Exemplo de política validate-jwt]',
        options: [
            { text: 'authentication-managed-identity', isCorrect: false, rationale: 'Esta política permite que o Gerenciamento de API do Azure se autentique ao chamar um serviço de back-end usando a Identidade Gerenciada do Azure, mas não valida a autenticação para solicitações de API de cliente recebidas usando OpenID Connect.' },
            { text: 'validate-jwt', isCorrect: true, rationale: 'No Gerenciamento de API do Azure, a política `validate-jwt` garante que cada solicitação de API contenha um JSON Web Token (JWT) válido antes de ser processada. Essa política valida o emissor (provedor do OpenID Connect), o público, a expiração e a assinatura do token. Se o token estiver ausente, expirado ou inválido, a solicitação de API será negada, impedindo o acesso não autorizado, e atendendo ao requisito de autenticação via OpenID Connect e bloqueio de solicitações anônimas.' },
            { text: 'check-header', isCorrect: false, rationale: 'Esta política inspeciona apenas cabeçalhos de solicitação HTTP para determinar se um cabeçalho específico está presente ou possui um valor específico. Embora possa verificar a existência de um cabeçalho `Authorization`, ela não valida JWTs nem garante a autenticação do OpenID Connect.' },
            { text: 'authentication-basic', isCorrect: false, rationale: 'Esta política normalmente habilita a Autenticação Básica (nome de usuário e senha no cabeçalho `Authorization`). No entanto, a Autenticação Básica não oferece suporte à validação OpenID Connect ou JWT, que são necessárias neste cenário.' }
        ],
        hint: 'Para impor a autenticação OpenID Connect e bloquear solicitações anônimas em um API Gateway do Azure, qual política do APIM valida a presença e validade de um token de segurança?'
    },
    {
        question: 'Você está desenvolvendo um aplicativo Web no Serviço de Aplicativo do Azure que precisa de acesso seguro aos segredos do Azure Key Vault. Você deve autenticar sem armazenar credenciais no código ao usar a autenticação do Microsoft Entra ID e do Serviço de Aplicativo do Azure. Você precisa de uma maneira segura e com privilégios mínimos para autenticar e acessar o Key Vault. Qual solução atenderá a esse requisito? [IMAGEM RELACIONADA: Habilitando Identidade Gerenciada no App Service]',
        options: [
            { text: 'Configure uma política de acesso ao Azure Key Vault para permitir a Identidade Gerenciada do aplicativo Web.', isCorrect: true, rationale: 'Identidades gerenciadas fornecem uma identidade gerenciada automaticamente no Microsoft Entra ID para recursos do Azure, permitindo que aplicativos se conectem a recursos que suportam a autenticação do Microsoft Entra (como o Key Vault) sem a necessidade de provisionar ou rotacionar segredos no código. Configurar uma política de acesso no Key Vault para permitir essa Identidade Gerenciada é a maneira segura e de privilégios mínimos de acesso aos segredos.' },
            { text: 'Armazene um ID de cliente de aplicativo e um segredo nas configurações do aplicativo para autenticar com o Microsoft Entra ID.', isCorrect: false, rationale: 'Armazenar credenciais nas configurações do aplicativo representa um risco à segurança e exige rotação manual, o que aumenta a sobrecarga administrativa. A Identidade Gerenciada elimina esse risco.' },
            { text: 'Recupere segredos usando o `az keyvault secret show` comando.', isCorrect: false, rationale: 'Este comando é para uso interativo ou scripts de automação. A autenticação da CLI do Azure não é uma solução prática ou escalável para aplicativos de produção, pois requer autenticação manual e não se integra aos mecanismos de autenticação internos do Serviço de Aplicativo.' },
            { text: 'Crie uma entidade de serviço Microsoft Entra, atribua a ela acesso ao Key Vault e gerencie as credenciais manualmente.', isCorrect: false, rationale: 'Criar uma Entidade de Serviço e gerenciar suas credenciais manualmente normalmente requer gerenciamento manual de credenciais (ID de cliente e segredo ou certificado), o que aumenta os riscos de segurança e a complexidade desnecessária em comparação com a Identidade Gerenciada.' }
        ],
        hint: 'Para que um aplicativo Web acesse o Key Vault de forma segura, sem credenciais no código e usando o Microsoft Entra ID, qual recurso do Azure fornece uma identidade automática para o aplicativo?'
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
        }
    } else {
        showResult(); // Exibe o resultado se todas as perguntas foram respondidas
    }
}

// Seleciona uma opção e habilita o botão de submissão
function selectOption(optionDiv, index) {
    // Apenas permita a seleção se a pergunta ainda não foi respondida (ou está em "revisão" antes de "verificar resposta")
    if (!userAnswers[currentQuestionIndex] || submitButton.textContent === 'Verificar Resposta') {
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
        // Adiciona um flag para saber se a pergunta já foi "verificada"
        isAnswered: true
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

        // Desabilita cliques nas opções se já foi verificada
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
    // Garante que o score da sessão não seja recontado em um restart
    questions.forEach(q => q.answeredThisSession = false); 
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