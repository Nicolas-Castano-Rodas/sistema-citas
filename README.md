# Sistema de Gestión de Citas 📅

**Una solución profesional y moderna para la gestión de citas y agendamiento.**

---

## 📋 Descripción

Sistema completo de gestión de citas diseñado para empresas y profesionales. Proporciona una interfaz moderna, segura y fácil de usar para agendar, visualizar y administrar citas de manera eficiente.

### Características Principales

✨ **Autenticación Segura**
- Registro e inicio de sesión con encriptación de contraseñas
- Tokens JWT para sesiones seguras
- Validación de credenciales

📅 **Gestión de Citas**
- Crear nuevas citas con descripción, fecha y hora
- Visualizar todas las citas agendadas
- Editar citas existentes
- Eliminar citas con confirmación

🎨 **Interfaz Profesional**
- Diseño responsivo y moderno
- Tema oscuro/claro automático
- Animaciones suaves y fluidas
- Componentes UI consistentes

🔐 **Seguridad**
- Validación de datos en cliente y servidor
- Autenticación en todas las rutas protegidas
- Tokens JWT con expiración
- Protección contra acceso no autorizado

📱 **Responsive**
- Compatible con dispositivos móviles
- Tablet y escritorio optimizados
- Interfaz adaptativa

---

## 🏗️ Arquitectura

### Estructura del Proyecto

```
sistema-citas/
├── backend/                      # API REST con Node.js
│   ├── controllers/              # Lógica de negocio
│   │   ├── authController.js    # Autenticación
│   │   └── appointmentController.js
│   ├── middleware/               # Middlewares de Express
│   │   └── auth.js              # Validación de JWT
│   ├── models/                   # Esquemas de MongoDB
│   │   ├── User.js
│   │   └── Appointment.js
│   ├── routes/                   # Rutas API
│   │   ├── authRoutes.js
│   │   └── appointmentRoutes.js
│   ├── server.js                # Punto de entrada
│   └── package.json
│
└── frontend/                     # Aplicación React
    ├── src/
    │   ├── components/           # Componentes React
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── api/
    │   │   └── axios.js         # Configuración HTTP
    │   ├── App.jsx
    │   ├── App.css              # Estilos globales
    │   ├── index.css            # Temas y variables
    │   └── main.jsx
    ├── tailwind.config.js       # Configuración Tailwind
    ├── vite.config.js           # Configuración Vite
    └── package.json
```

### Stack Tecnológico

**Backend**
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación segura
- **bcryptjs** - Encriptación de contraseñas
- **CORS** - Control de acceso

**Frontend**
- **React** - Librería UI
- **Vite** - Bundler rápido
- **Tailwind CSS** - Utilidades CSS
- **Lucide Icons** - Iconos escalables
- **Axios** - Cliente HTTP
- **React Router** - Enrutamiento

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js (v16 o superior)
- MongoDB (local o en la nube)
- npm o yarn

### Backend

1. **Clonar repositorio y navegar a la carpeta backend**
   ```bash
   cd backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear archivo `.env` en la raíz del backend:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sistema-citas
   JWT_SECRET=tu_clave_secreta_super_segura
   NODE_ENV=development
   ```

4. **Ejecutar servidor**
   ```bash
   npm start
   ```
   El servidor estará disponible en `http://localhost:5000`

### Frontend

1. **Navegar a la carpeta frontend**
   ```bash
   cd frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear archivo `.env` en la raíz del frontend:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Ejecutar aplicación en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

---

## 📚 API Documentation

### Autenticación

#### POST `/api/auth/login`
Inicio de sesión
```json
{
  "email": "usuario@empresa.com",
  "password": "contraseña"
}
```
**Respuesta:**
```json
{
  "token": "eyJhbGc..."
}
```

#### POST `/api/auth/register`
Registro de nuevo usuario
```json
{
  "email": "usuario@empresa.com",
  "password": "contraseña"
}
```

### Citas

#### GET `/api/appointments`
Obtener todas las citas del usuario (requiere autenticación)

**Headers:**
```
Authorization: Bearer {token}
```

#### POST `/api/appointments`
Crear nueva cita
```json
{
  "description": "Reunión con cliente",
  "date": "2024-05-15",
  "time": "14:30"
}
```

#### PUT `/api/appointments/:id`
Actualizar cita
```json
{
  "description": "Reunión actualizada",
  "date": "2024-05-16",
  "time": "15:00"
}
```

#### DELETE `/api/appointments/:id`
Eliminar cita

---

## 🎨 Customización de Estilos

### Variables CSS

Las variables CSS se encuentran en `frontend/src/index.css`:

```css
:root {
  --primary: #3b82f6;        /* Azul principal */
  --secondary: #4f46e5;      /* Índigo secundario */
  --success: #10b981;        /* Verde para éxito */
  --error: #ef4444;          /* Rojo para errores */
  --warning: #f59e0b;        /* Ámbar para advertencias */
  --info: #0891b2;           /* Cian para información */
}
```

### Tailwind CSS

Personalizar temas en `frontend/tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        // Agregar más colores según sea necesario
      }
    }
  }
}
```

---

## 🔄 Flujo de Trabajo

### Autenticación
1. Usuario accede a `/login`
2. Ingresa credenciales
3. Backend valida y retorna JWT
4. Token se almacena en localStorage
5. Axios interceptor añade token a cada petición

### Gestión de Citas
1. Usuario autenticado accede a Dashboard
2. Visualiza sus citas agendadas
3. Puede crear nueva cita con formulario
4. Puede editar o eliminar citas existentes
5. Backend valida propiedad de cita antes de modificar

---

## 🛡️ Medidas de Seguridad

- ✅ Contraseñas encriptadas con bcryptjs
- ✅ Tokens JWT con tiempo de expiración
- ✅ Validación de datos en servidor
- ✅ CORS configurado apropiadamente
- ✅ Protección contra acceso no autorizado
- ✅ Validación de propiedad de recursos

---

## 🐛 Solución de Problemas

### "Error de conexión"
- Verificar que MongoDB está ejecutándose
- Validar URL de MONGODB_URI en .env
- Confirmar que el servidor está activo

### "Token expirado"
- Se cierra sesión automáticamente
- Redirige a página de login
- Ingresar credenciales nuevamente

### "No se carga el frontend"
- Verificar que Vite está ejecutándose
- Confirmar puerto 5173 disponible
- Limpiar cache del navegador

---

## 📈 Mejoras Futuras

- [ ] Notificaciones por email
- [ ] Recordatorios de citas
- [ ] Exportar citas a PDF/iCal
- [ ] Calendario visual interactivo
- [ ] Roles de usuario (admin, usuario)
- [ ] Panel de administración
- [ ] Análisis y reportes
- [ ] Integración con calendarios (Google, Outlook)
- [ ] Búsqueda y filtrado avanzado
- [ ] Múltiples idiomas

---

## 📝 Licencia

Este proyecto está bajo licencia ISC.

---

## 👥 Autor

Desarrollado como solución profesional de gestión de citas.

---

## 📞 Soporte

Para reportar problemas o sugerencias, contactar a soporte.

---

**Última actualización:** Abril 2026

---

### 🎯 Próximos pasos

1. **Desarrollo**
   ```bash
   npm run dev  # Frontend
   npm start    # Backend
   ```

2. **Build para producción**
   ```bash
   npm run build  # Frontend
   ```

3. **Deployment**
   - Frontend: Vercel, Netlify o similar
   - Backend: Heroku, AWS, DigitalOcean o similar

¡Gracias por usar el Sistema de Gestión de Citas! 🙏
