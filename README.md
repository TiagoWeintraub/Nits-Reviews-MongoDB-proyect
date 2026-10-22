# Nits Reviews · MongoDB

NoSQL database for a tech-product reviews app: document model, synthetic data generation, queries, indexing, backups and MongoDB Atlas.  
Base de datos NoSQL para una app de reseñas de productos tecnológicos: modelo de documentos, generación de datos, consultas, índices, backups y MongoDB Atlas.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

[English](#english) · [Español](#español)

## English

### About
Project for **Diseño de Base de Datos II** (Ingeniería en Informática, Universidad de Mendoza, 2022). "Nits Reviews" is an app where users publish reviews of smartphones, tablets and headphones and comment on other people's reviews. This repo holds the database side: population scripts, queries, the dump metadata and the full project report ([`MongoDB_ NitsReviews.pdf`](MongoDB_%20NitsReviews.pdf), in Spanish), which also shows the app's interface screens.

### How it works
**Data model** (database `nitsreviews`):

| Collection | Main fields | Relations |
|---|---|---|
| `usuario` | `Referencia`, `Nombre`, `Apellido`, `Edad`, `Mail`, `Pais`, `Red_social`, `Descripcion` | `Reviews`: array of the user's review `_id`s |
| `marca` | `Referencia`, `Logo`, `Nombre` (Samsung / Apple / Xiaomi), `Producto` (`Celular` / `Tablet` / `Auricular`), `Modelo` | — |
| `review` | `Referencia`, `Opinion`, `Descripcion`, `Fecha_review`, `Cantidad_comentarios`, `Comentarios` | `Autor` → `usuario._id`, `Producto` → `marca._id` |

- **Data generation**: Mongo Shell (JavaScript) loops build random documents from fixed value lists. Each review looks up a random author and product by `Referencia`, is inserted, and its `_id` is `$push`ed into the author's `Reviews` array. The run in the report loaded 273,000 users, 56,000 products and 140,000 reviews.
- **Queries**: filters with `$gte`/`$lte`, `$size`, `$nin`, date ranges, `sort`/`limit`, and aggregation pipelines with `$match`, `$lookup` (review ↔ user ↔ product), `$project`, `$unwind`, `$group`/`$sum` and `$count`.
- **Indexing**: query times measured with `explain("executionStats")` before and after adding single-field indexes (figures from the report):

| Query | Index | Before | After |
|---|---|---|---|
| `db.usuario.find({Referencia: 272000})` | `{ Referencia: 1 }` | 191 ms | 6 ms |
| `db.marca.find({Modelo: "Iphone 14"})` | `{ Modelo: 1 }` | 33 ms | 13 ms |
| `db.review.find({Cantidad_comentarios: {$gte: 9}})` | `{ Cantidad_comentarios: 1 }` | 143 ms | 41 ms |

- **Backup and cloud**: `mongodump` / `mongorestore` locally, then a restore into a free MongoDB Atlas cluster (AWS, 512 MB) managed with MongoDB Compass.

### Tech stack
MongoDB · Mongo Shell (JavaScript) · MongoDB Compass · MongoDB Atlas · MongoDB Database Tools · Python + PyMongo

### Project structure
- `app.js`: Mongo Shell scripts (commented out) to populate `usuario`, `marca` and `review`, plus the queries.
- `app.py`: Python/PyMongo version of the generators against `mongodb://localhost` (inserts commented out) and a `$lookup` aggregation of users with their reviews.
- `Mongo Restore/dump/nitsreviews/`: `mongodump` metadata (collection and index definitions). The `.bson` data files are not included.
- `MongoDB_ NitsReviews.pdf`: project report.

### Getting started
Requirements: MongoDB Server, `mongosh` and MongoDB Database Tools. Compass is optional.

```bash
git clone https://github.com/TiagoWeintraub/Nits-Reviews-MongoDB-proyect.git
cd Nits-Reviews-MongoDB-proyect
mongosh
```

Inside `mongosh`, select the database, then uncomment the generator blocks in `app.js` and paste them in order (`usuario` → `marca` → `review`; loop sizes are editable), then create the indexes:
```js
use nitsreviews
db.usuario.createIndex({ Referencia: 1 })
db.marca.createIndex({ Modelo: 1 })
db.review.createIndex({ Cantidad_comentarios: 1 })
db.usuario.find({ Edad: { $gte: 18, $lte: 30 }, Reviews: { $size: 3 } }).pretty()
```

Backup and restore, as documented in the report:
```bash
mongodump --db nitsreviews
mongorestore --db nitsreviews dump/nitsreviews
mongorestore --uri "mongodb+srv://<user>:<password>@<cluster>.mongodb.net"
```

### Authors
- **Tiago Weintraub** · [github.com/TiagoWeintraub](https://github.com/TiagoWeintraub)
- **Tomás Licciardi**
- **Natalio Hercovich** (listed in the project report)

## Español

### Sobre el proyecto
Proyecto de **Diseño de Base de Datos II** (Ingeniería en Informática, Universidad de Mendoza, 2022). "Nits Reviews" es una app donde los usuarios publican reseñas de celulares, tablets y auriculares y comentan las reseñas de otros. Este repo contiene la parte de base de datos: scripts para poblarla, consultas, la metadata del dump y el informe completo del proyecto ([`MongoDB_ NitsReviews.pdf`](MongoDB_%20NitsReviews.pdf)), que también muestra las pantallas de la app.

### Cómo funciona
**Modelo de datos** (base `nitsreviews`):

| Colección | Campos principales | Relaciones |
|---|---|---|
| `usuario` | `Referencia`, `Nombre`, `Apellido`, `Edad`, `Mail`, `Pais`, `Red_social`, `Descripcion` | `Reviews`: array con los `_id` de sus reseñas |
| `marca` | `Referencia`, `Logo`, `Nombre` (Samsung / Apple / Xiaomi), `Producto` (`Celular` / `Tablet` / `Auricular`), `Modelo` | — |
| `review` | `Referencia`, `Opinion`, `Descripcion`, `Fecha_review`, `Cantidad_comentarios`, `Comentarios` | `Autor` → `usuario._id`, `Producto` → `marca._id` |

- **Generación de datos**: loops de Mongo Shell (JavaScript) arman documentos aleatorios a partir de listas fijas de valores. Cada reseña busca un autor y un producto al azar por `Referencia`, se inserta y su `_id` se agrega con `$push` al array `Reviews` del autor. La carga del informe fue de 273.000 usuarios, 56.000 productos y 140.000 reseñas.
- **Consultas**: filtros con `$gte`/`$lte`, `$size`, `$nin`, rangos de fechas, `sort`/`limit`, y pipelines de agregación con `$match`, `$lookup` (reseña ↔ usuario ↔ producto), `$project`, `$unwind`, `$group`/`$sum` y `$count`.
- **Índices**: tiempos medidos con `explain("executionStats")` antes y después de agregar índices simples (valores del informe):

| Consulta | Índice | Antes | Después |
|---|---|---|---|
| `db.usuario.find({Referencia: 272000})` | `{ Referencia: 1 }` | 191 ms | 6 ms |
| `db.marca.find({Modelo: "Iphone 14"})` | `{ Modelo: 1 }` | 33 ms | 13 ms |
| `db.review.find({Cantidad_comentarios: {$gte: 9}})` | `{ Cantidad_comentarios: 1 }` | 143 ms | 41 ms |

- **Backup y nube**: `mongodump` / `mongorestore` en local y luego un restore a un cluster gratuito de MongoDB Atlas (AWS, 512 MB) administrado con MongoDB Compass.

### Tecnologías
MongoDB · Mongo Shell (JavaScript) · MongoDB Compass · MongoDB Atlas · MongoDB Database Tools · Python + PyMongo

### Estructura
- `app.js`: scripts de Mongo Shell (comentados) para poblar `usuario`, `marca` y `review`, más las consultas.
- `app.py`: versión en Python/PyMongo de los generadores contra `mongodb://localhost` (inserts comentados) y una agregación `$lookup` de usuarios con sus reseñas.
- `Mongo Restore/dump/nitsreviews/`: metadata del `mongodump` (definición de colecciones e índices). Los archivos de datos `.bson` no están incluidos.
- `MongoDB_ NitsReviews.pdf`: informe del proyecto.

### Cómo usarlo
Requisitos: MongoDB Server, `mongosh` y MongoDB Database Tools. Compass es opcional.

```bash
git clone https://github.com/TiagoWeintraub/Nits-Reviews-MongoDB-proyect.git
cd Nits-Reviews-MongoDB-proyect
mongosh
```

Dentro de `mongosh`, seleccionar la base, descomentar los bloques generadores de `app.js` y pegarlos en orden (`usuario` → `marca` → `review`; la cantidad de cada loop es editable) y crear los índices:
```js
use nitsreviews
db.usuario.createIndex({ Referencia: 1 })
db.marca.createIndex({ Modelo: 1 })
db.review.createIndex({ Cantidad_comentarios: 1 })
db.usuario.find({ Edad: { $gte: 18, $lte: 30 }, Reviews: { $size: 3 } }).pretty()
```

Backup y restore, como se documenta en el informe:
```bash
mongodump --db nitsreviews
mongorestore --db nitsreviews dump/nitsreviews
mongorestore --uri "mongodb+srv://<user>:<password>@<cluster>.mongodb.net"
```

### Autores
- **Tiago Weintraub** · [github.com/TiagoWeintraub](https://github.com/TiagoWeintraub)
- **Tomás Licciardi**
- **Natalio Hercovich** (figura en el informe del proyecto)
