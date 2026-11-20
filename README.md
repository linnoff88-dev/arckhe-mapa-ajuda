# mapa-ajuda

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


[![Mapa de Ajuda](guia/assets/banner.jpg)](https://inematds.github.io/mapa-ajuda/guia/)

**ðŸ‡§ðŸ‡· [PortuguÃªs](README.md) Â· ðŸ‡ºðŸ‡¸ [English](README.en.md) Â· ðŸ‡ªðŸ‡¸ [EspaÃ±ol](README.es.md)**

## O que Ã©

O mapa-ajuda Ã© um modelo pronto de central de ajuda para sites, cursos, comunidades e produtos. Em vez de uma lista de perguntas frequentes, o visitante clica no problema que tem agora e vÃª um caminho em etapas, com o link certo em cada uma. Serve para quem recebe sempre as mesmas dÃºvidas ou tem conteÃºdo espalhado em vÃ¡rios lugares. Ã‰ uma pÃ¡gina HTML sÃ³: para usar, basta editar um arquivo de texto com os seus caminhos e publicar em qualquer hospedagem.

## ðŸ“– Guia de uso

Guia completo (landing + passo a passo): **https://inematds.github.io/mapa-ajuda/guia/**

Modelo de **central de ajuda em formato de mapa**: a pessoa escolhe o problema que tem agora e recebe um caminho em ordem, com perguntas de sim ou nÃ£o e o link certo em cada etapa. Uma pÃ¡gina HTML, sem build e sem servidor, com ilustraÃ§Ã£o 3D em cada cartÃ£o (opcional: sem imagem, o cartÃ£o usa Ã­cone).

**Ao vivo (exemplo do ecossistema INEMA):** https://inematds.github.io/mapa-ajuda/
**Exemplo genÃ©rico:** https://inematds.github.io/mapa-ajuda/?config=exemplos/config.vazio.js

## Como usar

1. Use este repositÃ³rio como template (ou baixe o ZIP).
2. Copie `exemplos/config.vazio.js` para `config.js` e edite os textos e links.
3. Publique em qualquer hospedagem estÃ¡tica (GitHub Pages, Vercel, Netlify).

Abrir direto no navegador (`file://`) tambÃ©m funciona.

## Arquivos

| Arquivo | O que Ã© |
|---|---|
| `index.html` | Motor: visual, tema claro/escuro, montagem dos caminhos. NÃ£o precisa mexer |
| `config.js` | ConteÃºdo do exemplo INEMA (6 caminhos) |
| `exemplos/config.vazio.js` | Exemplo genÃ©rico comentado, ponto de partida |
| `assets/` | IlustraÃ§Ãµes do exemplo INEMA (capa + uma por caminho) |
| `ANALISE.md` | AnÃ¡lise do padrÃ£o: por que funciona e como escrever bons caminhos |

## ConfiguraÃ§Ã£o geral

`marca`, `titulo` (aceita `**destaque**` em gradiente), `subtitulo`, `destaques[]`, `capa` (imagem da capa), `rodape`. Cada problema: `id`, `titulo`, `resumo`, `icone`, `imagem`, `inicio`, `fluxo[]`, `rodape`.

## Tipos de nÃ³

| Tipo | Campos |
|---|---|
| `passo` | `rotulo`, `titulo`, `texto`, `icone`, `tempo`, `marcadores[]`, `link:{texto,url}` |
| `seta` | `rotulo`, `cor: 'sim' \| 'nao'` |
| `pergunta` | `pergunta`, `ramo:{rotulo, tipo, titulo, texto, link, abrir}` |
| `lista` | `titulo`, `itens:[{titulo, texto, url}]` |
| `saida` | `pergunta`, `texto`, `destino` (id de outro problema) |

Recursos: link direto para cada caminho (`#id`), tecla Esc fecha, tema lembrado, respeita "reduzir movimento", layout em coluna no celular, texto escapado (sÃ³ `**negrito**` Ã© interpretado).

## LicenÃ§a

MIT.

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>