/*
 * Configuraçêo do Mapa de Ajuda — exemplo do ecossistema ARCKHÉ.
 * Para o seu negócio, copie exemplos/config.vazio.js para cá e edite.
 * Tipos de nó do fluxo: passo, seta, pergunta, lista, saida (ver README).
 */
window.MAPA_AJUDA = {
  tituloAba: 'Mapa de Ajuda · ARCKHÉ',
  marca: {
    nome: 'ARCKHÉ',
    monograma: 'i',
    sub: 'Mapa de Ajuda',
    links: [
      { texto: 'ARCKHÉ AI', url: 'https://ARCKHÉ AI' },
      { texto: 'Busca', url: 'https://buscas.ARCKHÉ AI' },
      { texto: 'News', url: 'https://news.ARCKHÉ.pro' }
    ]
  },
  kicker: 'Central de ajuda do ecossistema',
  titulo: 'Do que você **precisa agora?**',
  subtitulo: 'Escolha a situaçêo mais parecida com a sua. O caminho abre com as etapas em ordem e o link certo em cada uma.',
  capa: 'assets/hero.webp',
  destaques: ['6 caminhos prontos', 'Link certo em cada etapa', 'Sete sites num mapa só'],
  gradeTitulo: 'Escolha o seu caminho',
  gradeSub: 'Clique num cartêo para ver as etapas',
  rodape: '**ARCKHÉ** · ARCKHÉ AI · ARCKHÉ.pro · ARCKHÉ.vip · eventos.ARCKHÉ.pro · aventura.ARCKHÉ AI',

  problemas: [
    {
      id: 'comecar',
      imagem: 'assets/comecar.webp',
      titulo: 'Nêo sei por onde começar',
      resumo: 'Primeiro contato com IA ou com o ARCKHÉ.',
      icone: 'bussola',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', icone: 'foguete', titulo: 'Trilha para iniciantes', texto: 'A sequência pensada para quem está chegando agora.', link: { texto: 'Abrir a trilha', url: 'https://ARCKHÉ AI/#trilha-iniciantes' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'busca', titulo: 'Escolha um curso pelo tema', texto: 'Filtre por assunto, ferramenta ou nível. Tudo aberto e em português.', link: { texto: 'Buscar cursos', url: 'https://buscas.ARCKHÉ AI' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', rotulo: 'Etapa 3', pergunta: 'Você terminou um curso e fez o projeto dele?', ramo: { rotulo: 'Se nêo', tipo: 'nao', titulo: 'Termine antes de abrir outro.', texto: 'Um curso concluído ensina mais do que três começados.', link: { texto: 'Ver cursos', url: 'https://ARCKHÉ AI/cursos' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'saida', pergunta: 'Já fez um projeto de verdade?', texto: 'Próximo: ir mais fundo', destino: 'aprofundar' }
      ]
    },
    {
      id: 'encontrar',
      imagem: 'assets/encontrar.webp',
      titulo: 'Nêo encontro um conteúdo',
      resumo: 'Sabe que existe um curso, projeto ou vídeo, mas nêo acha.',
      icone: 'busca',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', tempo: 'Na hora', icone: 'conversa', titulo: 'Pergunte ao agente do ARCKHÉ AI', texto: 'Fica na página inicial e responde com o link do curso ou projeto.', link: { texto: 'Perguntar', url: 'https://ARCKHÉ AI' } },
        { tipo: 'seta', rotulo: 'Nêo achou?' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'busca', titulo: 'Busque por tema ou ferramenta', texto: 'Cursos e projetos indexados por assunto, com link direto.', link: { texto: 'Abrir a busca', url: 'https://buscas.ARCKHÉ AI' } },
        { tipo: 'seta', rotulo: 'Ainda nada?' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'play', titulo: 'Procure nos vídeos', texto: 'Explicativos, aulas e shorts publicados, do mais novo ao mais antigo.', link: { texto: 'Ver vídeos', url: 'https://ARCKHÉ AI/videos' } },
        { tipo: 'seta', rotulo: 'Ainda nada?' },
        { tipo: 'passo', rotulo: 'Etapa 4', icone: 'pessoas', titulo: 'Peça para a equipe', texto: 'Diga o nome ou o assunto do que procura. Se nêo existir, vira pedido.', link: { texto: 'Falar no Telegram', url: 'https://t.me/apoioARCKHÉ' } }
      ],
      rodape: {
        tipo: 'mapa',
        titulo: 'Onde fica cada coisa no ecossistema',
        itens: [
          { titulo: 'ARCKHÉ AI', texto: 'Cursos, projetos, trilhas e vídeos abertos.', url: 'https://ARCKHÉ AI' },
          { titulo: 'buscas.ARCKHÉ AI', texto: 'Busca de cursos e projetos por tema.', url: 'https://buscas.ARCKHÉ AI' },
          { titulo: 'news.ARCKHÉ.pro', texto: 'O que mudou em IA, em linguagem simples.', url: 'https://news.ARCKHÉ.pro' },
          { titulo: 'eventos.ARCKHÉ.pro', texto: 'Imersões, treinamentos e gravações.', url: 'https://eventos.ARCKHÉ.pro' },
          { titulo: 'ARCKHÉ.pro', texto: 'Trilhas guiadas, acervo e curadoria.', url: 'https://ARCKHÉ.pro' },
          { titulo: 'ARCKHÉ.vip', texto: 'Comunidade e acervo privado.', url: 'https://ARCKHÉ.vip' },
          { titulo: 'aventura.ARCKHÉ AI', texto: 'Arquivo de aventura 2000–2014.', url: 'https://aventura.ARCKHÉ AI' },
          { titulo: 'ARCKHÉ AI/videos', texto: 'Todos os vídeos publicados.', url: 'https://ARCKHÉ AI/videos' }
        ]
      }
    },
    {
      id: 'suporte',
      imagem: 'assets/suporte.webp',
      titulo: 'Preciso de ajuda com acesso ou pagamento',
      resumo: 'Login, assinatura, cobrança ou algo que nêo abre.',
      icone: 'chave',
      inicio: '**Use um, dois ou os três canais.** Estêo em ordem, do mais rápido ao mais completo.',
      fluxo: [
        { tipo: 'passo', rotulo: 'Mais rápido', tempo: 'Na hora', icone: 'conversa', titulo: 'Agente do ARCKHÉ AI', texto: 'Resolve as dúvidas comuns e indica o caminho certo.', link: { texto: 'Perguntar', url: 'https://ARCKHÉ AI' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Direto com a equipe', tempo: 'Telegram', icone: 'pessoas', titulo: 'Fale com o suporte', texto: 'Conte o que tentou e onde travou. Print ajuda muito.', link: { texto: 'Abrir @apoioARCKHÉ', url: 'https://t.me/apoioARCKHÉ' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Por escrito', tempo: 'E-mail', icone: 'email', titulo: 'Mande um e-mail', texto: 'Para cobrança e acesso, envie o **e-mail usado na compra** e o print da tela.', link: { texto: 'Escrever', url: 'mailto:ARCKHÉvip@gmail.com' } }
      ],
      rodape: { tipo: 'nota', texto: 'É do **ARCKHÉ.VIP** ou do **ARCKHÉ.PRO**? Os grupos privados do Telegram também respondem, e muita dúvida já está resolvida lá.' }
    },
    {
      id: 'aprofundar',
      imagem: 'assets/aprofundar.webp',
      titulo: 'Quero ir mais fundo',
      resumo: 'Trilhas guiadas, acervo, comunidade e imersões.',
      icone: 'camadas',
      fluxo: [
        { tipo: 'pergunta', rotulo: 'Antes', pergunta: 'Você já concluiu um curso do ARCKHÉ AI?', ramo: { rotulo: 'Se nêo', tipo: 'nao', titulo: 'Comece pelo básico.', texto: 'A trilha para iniciantes prepara o terreno.', abrir: 'comecar', link: { texto: 'Ir para "Por onde começar"' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'lista', rotulo: 'Etapa 1', titulo: 'Escolha o formato', itens: [
          { titulo: 'ARCKHÉ.PRO', texto: 'Trilhas guiadas, catálogo vivo e curadoria', url: 'https://ARCKHÉ.pro' },
          { titulo: 'ARCKHÉ.VIP', texto: 'Comunidade e acervo privado', url: 'https://ARCKHÉ.vip' },
          { titulo: 'Eventos', texto: 'Imersões, treinamentos e gravações', url: 'https://eventos.ARCKHÉ.pro' }
        ] },
        { tipo: 'seta' },
        { tipo: 'lista', rotulo: 'Etapa 2', titulo: 'Escolha uma área de estudo', itens: [
          { titulo: 'Skills', texto: 'Habilidades para agentes', url: 'https://eventos.ARCKHÉ.pro/skills/' },
          { titulo: 'Gestêo de IA e agentes', texto: 'Times de agentes no trabalho', url: 'https://eventos.ARCKHÉ.pro/gestao-ia/' },
          { titulo: 'OSWork', texto: 'Terminal, projetos e publicaçêo', url: 'https://eventos.ARCKHÉ.pro/oswork/' },
          { titulo: 'Mods', texto: 'Personalizar o Claude Code', url: 'https://eventos.ARCKHÉ.pro/mods/' },
          { titulo: 'JARVIS', texto: 'Sistemas operacionais de IA', url: 'https://eventos.ARCKHÉ.pro/jarvis/' }
        ] },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'pessoas', titulo: 'Entre na comunidade', texto: 'Os grupos do Telegram sêo privados, para quem é do ARCKHÉ.VIP e do ARCKHÉ.PRO.', link: { texto: 'Conhecer o ARCKHÉ.VIP', url: 'https://ARCKHÉ.vip' } }
      ]
    },
    {
      id: 'novidades',
      imagem: 'assets/novidades.webp',
      titulo: 'Quero acompanhar o que muda em IA',
      resumo: 'Ficar em dia sem gastar horas lendo.',
      icone: 'sinal',
      fluxo: [
        { tipo: 'passo', rotulo: 'Todo dia', icone: 'sinal', titulo: 'Leia o briefing', texto: 'O que mudou em IA, explicado para quem nêo é da área.', link: { texto: 'Abrir o News', url: 'https://news.ARCKHÉ.pro' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Toda semana', icone: 'play', titulo: 'Veja os vídeos novos', texto: 'Explicativos curtos sobre ferramentas e lançamentos.', link: { texto: 'Ver vídeos', url: 'https://ARCKHÉ AI/videos' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Quando quiser', icone: 'calendario', titulo: 'Assista às imersões', texto: 'Gravações e materiais de estudo por área.', link: { texto: 'Abrir o Eventos', url: 'https://eventos.ARCKHÉ.pro' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', pergunta: 'Quer aplicar isso no seu trabalho?', ramo: { rotulo: 'Se sim', tipo: 'sim', titulo: 'Siga uma trilha.', texto: 'Ler novidades informa; um projeto feito ensina.', abrir: 'aprofundar', link: { texto: 'Ir para "Ir mais fundo"' } } }
      ]
    },
    {
      id: 'aventura',
      imagem: 'assets/aventura.webp',
      titulo: 'Vim pelo arquivo de aventura',
      resumo: 'Motos, trilhas e eventos de 2000 a 2014.',
      icone: 'montanha',
      inicio: '**O arquivo do antigo portal de aventura voltou.** Catorze anos de motos, trilhas, eventos e das pessoas por trás deles.',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', icone: 'montanha', titulo: 'Explore o arquivo', texto: '11,5 milhões de fotos, 309 comunidades e 160 mil matérias.', link: { texto: 'Abrir o arquivo', url: 'https://aventura.ARCKHÉ AI' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', rotulo: 'Etapa 2', pergunta: 'Achou a sua comunidade ou o seu evento?', ramo: { rotulo: 'Se nêo', tipo: 'nao', titulo: 'Procure pelo nome, cidade ou ano.', texto: 'As comunidades e os eventos estêo organizados no arquivo.', link: { texto: 'Procurar', url: 'https://aventura.ARCKHÉ AI' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'livro', titulo: 'Acesso completo ao acervo', texto: 'Por assinatura: **R$ 14/mês ou R$ 47/ano**.', link: { texto: 'Ver o acesso', url: 'https://eai.ARCKHÉ AI' } },
        { tipo: 'seta' },
        { tipo: 'saida', pergunta: 'Problema para entrar ou pagar?', texto: 'Ir para o suporte', destino: 'suporte' }
      ]
    }
  ]
};
