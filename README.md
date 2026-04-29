## 📅 Sistema de Gestión de Citas – Full Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

Aplicación full stack desarrollada con **Node.js, Express, MongoDB, React y JWT**, que permite a los usuarios registrarse, autenticarse y gestionar citas de manera segura e intuitiva.

---

## 🚀 Descripción General

Esta aplicación permite a los usuarios:

✅ Registrarse e iniciar sesión de forma segura  
✅ Crear citas con fecha, hora y descripción  
✅ Visualizar sus propias citas  
✅ Editar y eliminar citas existentes  
✅ Gestionar su información de manera protegida  
✅ Interactuar con una interfaz moderna y responsive  

El sistema implementa **autenticación basada en JWT**, asegurando que cada usuario solo acceda a sus propios datos.

---

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- CORS

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router

### Herramientas
- npm
- Postman / Thunder Client

---

## 🧱 Estructura del Proyecto

```
sistema-citas/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
└── frontend/
├── src/
├── components/
├── api/
├── App.jsx
└── package.json
```

---

## 🔐 Autenticación y Seguridad

### Flujo de Autenticación

1. Registro con email y contraseña
2. Encriptación con bcryptjs
3. Generación de JWT
4. Almacenamiento del token en el cliente
5. Validación en cada petición protegida

### Medidas de Seguridad

✅ Contraseñas encriptadas  
✅ Tokens JWT con expiración  
✅ Validación de datos en servidor  
✅ Protección de rutas  
✅ Verificación de propiedad de citas  
✅ Control de acceso mediante middleware  

---

### Autenticación

POST /api/auth/register
POST /api/auth/login


### Citas (requiere token)


GET /api/appointments
POST /api/appointments
PUT /api/appointments/:id
DELETE /api/appointments/:id


---

## ✅ Funcionalidades

- [x] Registro de usuarios
- [x] Login con JWT
- [x] CRUD de citas
- [x] Protección de rutas
- [x] Validación de datos
- [x] Interfaz responsive
- [x] Manejo de errores

---

## 🎨 Interfaz de Usuario

Desarrollada con **Tailwind CSS**, incluye:

- Diseño responsive (mobile, tablet, desktop)
- UI moderna y limpia
- Formularios validados
- Navegación intuitiva
- Componentes reutilizables

---


### 1️⃣ Clonar repositorio

```bash
git clone https://github.com/Nicolas-Castano-Rodas/sistema-citas.git
cd sistema-citas
2️⃣ Backend
cd backend
npm install

Crear .env:

PORT=5000
MONGODB_URI=tu_uri
JWT_SECRET=tu_clave
npm start
3️⃣ Frontend
cd frontend
npm install
npm run dev
🗄️ Base de Datos
Colecciones

Users

{
  "email": "usuario@email.com",
  "password": "hash"
}

Appointments

{
  "description": "Reunión",
  "date": "2026-04-29",
  "time": "14:00",
  "user": "ObjectId"
}
```

## 🎯 Objetivo del Proyecto


Este proyecto demuestra habilidades en:

✅ Desarrollo Full Stack
✅ Arquitectura cliente-servidor
✅ APIs REST
✅ Autenticación segura con JWT
✅ Manejo de bases de datos NoSQL
✅ Buenas prácticas de desarrollo

## 📈 Mejoras Futuras
Notificaciones
Calendario visual
Roles de usuario
Reportes
Integración con Google Calendar

## 👤 Autor

Nicolás Castaño Rodas
Técnico en Análisis y Desarrollo de Software
📧 rodascastanonicolas@gmail.com
🐙 https://github.com/Nicolas-Castano-Rodas