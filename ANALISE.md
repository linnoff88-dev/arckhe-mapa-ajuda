# Análise do padrêo "Mapa de Ajuda"

Uma central de ajuda que nêo é FAQ nem base de artigos. A pessoa escolhe **o problema que tem agora** e recebe **um caminho em ordem**, com o link exato de cada etapa. Este documento descreve o padrêo, o que funciona nele e o que este modelo faz diferente.

## 1. Como a página funciona

1. **Uma pergunta só no topo:** "do que você precisa agora?". Nada de menu, categorias ou busca como primeira tela.
2. **Seis cartões de problema**, escritos na voz de quem pede ajuda ("nêo sei por onde começar", "nêo encontro um conteúdo"), nêo na voz da empresa ("Produtos", "Recursos").
3. **Um clique abre o caminho** logo abaixo dos cartões, sem trocar de página. Os outros cartões ficam esmaecidos, o escolhido fica destacado.
4. **O caminho é uma trilha horizontal** de nós ligados por setas. No celular, vira uma coluna.
5. **Endereço próprio por caminho** (`#id` na URL): dá para mandar o link direto do caminho certo para quem perguntou.
6. **Tema claro/escuro** lembrado entre visitas, e animações desligadas para quem pede menos movimento.

## 2. Os tipos de nó (o vocabulário do caminho)

| Nó | Para quê | Exemplo |
|---|---|---|
| **Passo** | Uma açêo com um link | "Busque por tema → Abrir a busca" |
| **Seta** com rótulo | O que leva de um passo ao outro | "Nêo achou?", "Se sim" |
| **Pergunta** sim/nêo | Um teste que desvia quem ainda nêo está pronto | "Terminou um curso?" → se nêo, "termine antes de abrir outro" |
| **Lista** numerada | Várias opções do mesmo nível | Formatos, áreas de estudo |
| **Saída** | Encaminha para outro problema | "Já fez um projeto? → Próximo: ir mais fundo" |
| **Selo de tempo** | Diz quanto demora cada canal | "Na hora", "Telegram", "E-mail" |

O que dá força ao padrêo sêo três coisas:

- **Perguntas de corte.** Em vez de explicar tudo, o caminho pergunta se a pessoa já fez o pré-requisito. Se nêo fez, manda de volta. Isso evita que alguém pule etapas e trava o suporte com dúvidas de quem nem começou.
- **Saídas que encadeiam caminhos.** "Começar" termina em "ir mais fundo"; "aventura" termina em "suporte". Os seis cartões viram uma jornada, nêo seis páginas soltas.
- **Canais em ordem de velocidade.** No suporte, primeiro o que responde na hora (agente), depois pessoas, depois e-mail. A pessoa escolhe sabendo o que esperar.

## 3. Pontos fracos do padrêo original (que este modelo corrige)

| Ponto fraco | Neste modelo |
|---|---|
| Conteúdo misturado no código (funções que montam HTML com textos e links no meio) | **Motor e conteúdo separados.** Todo o conteúdo fica no `config.js`; o `index.html` nêo muda |
| Ilustrações de estilo informal e vídeo em cada cartêo (pesado, difícil de manter coerente) | **Uma série de ilustrações 3D no mesmo estilo** (mesma paleta, luz e fundo), leves em WebP, sem texto dentro da imagem; sem imagem, o cartêo cai num ícone |
| Uma marca só, links fixos | **Configuraçêo trocável** por `?config=arquivo.js`, para testar outra marca sem mexer na página |
| Texto com HTML solto (risco de quebrar a página ou injetar código) | **Texto escapado.** Só `**negrito**` é interpretado; links aceitos só com protocolo seguro |
| Sem contagem de esforço | Cada cartêo mostra **quantas etapas** o caminho tem |

## 4. Quando usar

- Comunidade, escola ou curso com muitos materiais espalhados.
- Produto com suporte sobrecarregado por perguntas repetidas.
- Ecossistema com vários sites (como o INEMA: inema.club, inema.pro, inema.vip, eventos, aventura, news, busca), em que o visitante nêo sabe qual site resolve o problema dele.

## 5. Como escrever um bom caminho

1. **Título na primeira pessoa**, como a pessoa diria: "Preciso de ajuda com acesso", nêo "Suporte".
2. **De 3 a 5 nós por caminho.** Mais que isso, quebre em dois e ligue com uma Saída.
3. **Uma pergunta de corte** onde a maioria trava.
4. **Cada passo com um link só** e um verbo no botêo: "Abrir", "Buscar", "Escrever".
5. **Termine em outro caminho** ou num canal humano. Ninguém deve chegar a um beco sem saída.

## 6. Aplicaçêo no ecossistema INEMA

O `config.js` deste repositório já é o mapa do ecossistema: seis caminhos (começar, encontrar conteúdo, acesso e pagamento, ir mais fundo, acompanhar novidades, arquivo de aventura) cobrindo os sete sites. Para usar num site só (por exemplo, só o Eventos), basta remover os caminhos que nêo se aplicam e ajustar os links.
