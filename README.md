ï»¿# mapa-ajuda

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


[![Mapa de Ajuda](guia/assets/banner.jpg)](https://linnoff88-dev.github.io/arckhe-/guia/)

**ê°Å¸â¡Â§ê°Å¸â¡Â· [PortuguêÂªs](README.md) êÂ· ê°Å¸â¡Âºê°Å¸â¡Â¸ [English](README.en.md) êÂ· ê°Å¸â¡Âªê°Å¸â¡Â¸ [EspaêÂ±ol](README.es.md)**

## O que êÂ©

O mapa-ajuda êÂ© um modelo pronto de central de ajuda para sites, cursos, comunidades e produtos. Em vez de uma lista de perguntas frequentes, o visitante clica no problema que tem agora e vêÂª um caminho em etapas, com o link certo em cada uma. Serve para quem recebe sempre as mesmas dêÂºvidas ou tem conteêÂºdo espalhado em vêÂ¡rios lugares. êâ° uma pêÂ¡gina HTML sêÂ³: para usar, basta editar um arquivo de texto com os seus caminhos e publicar em qualquer hospedagem.

## ê°Å¸ââ Guia de uso

Guia completo (landing + passo a passo): **https://linnoff88-dev.github.io/arckhe-/guia/**

Modelo de **central de ajuda em formato de mapa**: a pessoa escolhe o problema que tem agora e recebe um caminho em ordem, com perguntas de sim ou nêÂ£o e o link certo em cada etapa. Uma pêÂ¡gina HTML, sem build e sem servidor, com ilustraêÂ§êÂ£o 3D em cada cartêÂ£o (opcional: sem imagem, o cartêÂ£o usa êÂ­cone).

**Ao vivo (exemplo do ecossistema ARCKHÉ):** https://linnoff88-dev.github.io/arckhe-/
**Exemplo genêÂ©rico:** https://linnoff88-dev.github.io/arckhe-/?config=exemplos/config.vazio.js

## Como usar

1. Use este repositêÂ³rio como template (ou baixe o ZIP).
2. Copie `exemplos/config.vazio.js` para `config.js` e edite os textos e links.
3. Publique em qualquer hospedagem estêÂ¡tica (GitHub Pages, Vercel, Netlify).

Abrir direto no navegador (`file://`) tambêÂ©m funciona.

## Arquivos

| Arquivo | O que êÂ© |
|---|---|
| `index.html` | Motor: visual, tema claro/escuro, montagem dos caminhos. NêÂ£o precisa mexer |
| `config.js` | ConteêÂºdo do exemplo ARCKHÉ (6 caminhos) |
| `exemplos/config.vazio.js` | Exemplo genêÂ©rico comentado, ponto de partida |
| `assets/` | IlustraêÂ§êÂµes do exemplo ARCKHÉ (capa + uma por caminho) |
| `ANALISE.md` | AnêÂ¡lise do padrêÂ£o: por que funciona e como escrever bons caminhos |

## ConfiguraêÂ§êÂ£o geral

`marca`, `titulo` (aceita `**destaque**` em gradiente), `subtitulo`, `destaques[]`, `capa` (imagem da capa), `rodape`. Cada problema: `id`, `titulo`, `resumo`, `icone`, `imagem`, `inicio`, `fluxo[]`, `rodape`.

## Tipos de nêÂ³

| Tipo | Campos |
|---|---|
| `passo` | `rotulo`, `titulo`, `texto`, `icone`, `tempo`, `marcadores[]`, `link:{texto,url}` |
| `seta` | `rotulo`, `cor: 'sim' \| 'nao'` |
| `pergunta` | `pergunta`, `ramo:{rotulo, tipo, titulo, texto, link, abrir}` |
| `lista` | `titulo`, `itens:[{titulo, texto, url}]` |
| `saida` | `pergunta`, `texto`, `destino` (id de outro problema) |

Recursos: link direto para cada caminho (`#id`), tecla Esc fecha, tema lembrado, respeita "reduzir movimento", layout em coluna no celular, texto escapado (sêÂ³ `**negrito**` êÂ© interpretado).

## LicenêÂ§a

MIT.

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>