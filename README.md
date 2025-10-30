## 📝 Lista de Tareas

Proyecto CRUD (Create, Read, Update, Delete) desarrollado para gestionar tareas de manera sencilla y práctica. Permite crear, editar, borrar y buscar tareas por ID, ofreciendo una base sólida para entender el funcionamiento de un sistema completo con frontend y backend conectados a una base de datos.

---

## 👨‍💻 Autor

**Gomez Tolra Maximiliano**

---

## 🚀 Tecnologías utilizadas

- **Frontend:** HTML, Bootstrap, JavaScript, React
- **Backend:** Node.js, Express
- **Base de datos:** MongoDB

---

## 📂 Descripción del proyecto

Esta aplicación permite al usuario gestionar una lista de tareas conectada a una base de datos MongoDB. A través del frontend desarrollado con React y Bootstrap, se pueden realizar las siguientes operaciones: 

- Crear una tarea, 
- Editar una tarea existente, 
- Borrar una tarea, 
- Buscar una tarea por su ID 
- Listar todas las tareas.
 
Cada acción se comunica con el backend mediante una API REST desarrollada con Express.

---

## 🔧 Instalación y uso

Clonar el repositorio:
git clone https://github.com/masheee/backendListaTareas

---

## PUT

Editar una tarea existente
http://localhost:3000/api/tareas/6901431ebf2b83d539815d1b

Body (JSON):
{
"titulo": "Estudiar React",
}

---

## POST

Crear una nueva tarea
http://localhost:3000/api/tareas

Body (JSON):
{
"titulo": "Estudiar React",
}

---

## GET

Listar todas las tareas
http://localhost:3000/api/tareas

Buscar una tarea por ID
http://localhost:3000/api/tareas/6901431ebf2b83d539815d1b


---

## DELETE

Eliminar una tarea
http://localhost:3000/api/tareas/6901431ebf2b83d539815d1b

---

## 📦 Ejemplo de estructura de una tarea (JSON)

{
"_id": "6901431ebf2b83d539815d1b",
"titulo": "Estudiar React",
}

---

## 💡 Notas

El proyecto utiliza MongoDB como base de datos principal. Las peticiones pueden probarse fácilmente con Postman. El frontend se comunica con el backend mediante fetch usando las rutas antes mencionadas.

---

## 🧰 Scripts disponibles

npm run dev → Ejecuta el servidor en modo desarrollo
npm start → Inicia el servidor en producción

