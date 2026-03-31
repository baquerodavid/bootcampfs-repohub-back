# RepoHub Backend (Project Break 3 - Bootcamp)

API backend para **RepoHub**, una aplicación de portfolio que muestra los repositorios desarrollados durante el bootcamp (workouts, challenges y proyectos).

Esta API proporciona endpoints para crear, obtener y gestionar repositorios almacenados en MongoDB.

---

## 🚀 Tecnologías

- Node.js  
- Express  
- MongoDB + Mongoose  
- dotenv  
- CORS  

---

## 📦 Estructura del proyecto

```
src/  
  config/  
    db.js  
  models/  
    BootcampRepo.js  
  routes/  
    bootcampRepoRoutes.js  
  controllers/  
    bootcampRepoController.js  

app.js  
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
PORT=puerto  
MONGO_URI=tu_cadena_de_conexion_a_mongodb  
```

---

## ▶️ Cómo empezar

### 1. Instalar dependencias

```
npm install
```

### 2. Ejecutar en desarrollo

```
npm run dev
```

### 3. Ejecutar en producción

```
npm start
```

---

## 📡 Endpoints de la API

URL base:  
`/bootcamp-repos`  

### Crear un repositorio  
`POST /bootcamp-repos`  

### Obtener todos los repositorios  
`GET /bootcamp-repos`  

### Obtener un repositorio por slug  
`GET /bootcamp-repos/:slug`  

---

## 🧱 Modelo de datos

Cada repositorio incluye:

- title  
- summary  
- description  
- type (workout, challenge, project, extra-workout)  
- tags (array)  
- keyLearning  
- takeaways (array)  
- urlRepo  
- urlApp (opcional)  
- slug (opcional)  
- featured (boolean)  
- createdAt, updatedAt  

---

## 🎯 Objetivo del proyecto

Este backend da soporte a una aplicación frontend que:

- Muestra repositorios en formato de tarjetas  
- Permite ver el detalle de cada proyecto  
- Destaca aprendizajes clave  
- Servirá como base para incluirla e integrarla en mi página web personal  

---

## 🖥️ Frontend

El frontend está desarrollado en React y consume esta API.

👉 Repositorio: https://github.com/baquerodavid/bootcampfs-repohub-app

---

## 📌 Notas

### Contexto del proyecto

Este proyecto ha sido desarrollado como parte del Project Break final de un bootcamp de Full-Stack Web Development, con un plazo de 2 semanas dedicadas a la construcción de un MVP funcional.

El objetivo principal ha sido consolidar conocimientos en Node.js, Express y MongoDB, trabajando la creación de una API REST, la estructuración del proyecto siguiendo una arquitectura modular (modelos, rutas y controladores) y la conexión con una base de datos en la nube (MongoDB Atlas).

Durante el desarrollo se ha priorizado la simplicidad y funcionalidad del MVP, sentando una base sólida y escalable que permita futuras mejoras.

### Evolución futura

Este proyecto no termina aquí: está planteado como la base de una aplicación más completa que será integrada en una web personal.

Se prevé su evolución con nuevas funcionalidades como:

- Filtros y búsqueda avanzada (por tipo, tecnologías, etc.)  
- Mejora del modelo de datos  
- Integración completa con el frontend  
- Optimización y mejoras de UX/UI  
- Añadir validaciones  
- Implementar paginación  
- Añadir autenticación (panel admin)  
- Añadir más endpoints (actualización, eliminación)  

---

## 👤 Autor

David Baquero: https://www.davidbaquero.com