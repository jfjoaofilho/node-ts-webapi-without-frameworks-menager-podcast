# 🎧 Podcast Manager

Um app ao estilo **Netflix**, que centraliza diferentes episódios de podcasts em vídeo, organizados por categorias.

## 📌 Descrição

O **Podcast Manager** permite que o usuário navegue por episódios de podcasts separados por categorias como **saúde, bodybuilder, mentalidade, humor, esporte**, entre outros.

Além disso, o app possibilita **filtrar episódios pelo nome do podcast**, facilitando a busca e a experiência do usuário.

---

## ✨ Features

✔️ Listar os episódios dos podcasts em sessões de categorias

✔️ Filtrar episódios por nome do podcast

✔️ Retornar informações principais (nome, episódio, vídeo, capa, link e categorias)

---

## 📡 Endpoints

| Método | Rota                     | Descrição                               |
| ------ | ------------------------ | --------------------------------------- |
| GET    | `/episodes`              | Retorna a lista de episódios            |
| GET    | `/episodes?podcastName=` | Retorna episódios filtrados por podcast |

### 🔹 Exemplo de resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---


## ⚙️ Tecnologias Utilizadas

* **Node.js** – servidor HTTP nativo
* **TypeScript** – tipagem estática e organização do código
* **tsx** – execução direta de arquivos `.ts` no ambiente Node
* **tsup** – empacotamento e build otimizado do projeto
* **@types/node** – tipagens para APIs nativas do Node.js

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/jfjoaofilho/node-ts-webapi-without-frameworks-menager-podcast.git

# Entre no diretório
cd node-ts-webapi-without-frameworks-menager-podcast

# Instale as dependências
npm install

# Rodar em modo desenvolvimento
npm run start:dev

# Rodar em modo watch (hot reload)
npm run start:watch

# Gerar build de produção
npm run dist

# Executar versão buildada
npm run start:dist
```

---

## 📌 Próximos Passos

* [ ] Implementar paginação dos episódios
* [ ] Criar endpoint para listar episódios por categoria
* [ ] Autenticação de usuário e playlists personalizadas
* [ ] Integração com player embutido de vídeo

---

## 👨‍💻 Autor

Projeto desenvolvido por **João Filho** 🚀
🔗 [GitHub](https://github.com/jfjoaofilho)

---