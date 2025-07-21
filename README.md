# Final TT Node Js 

## Sistema CRUD API - Rest

Este proyecto NodeJs con Express, es una **API CRUD** orientada a locales comerciales, y poder brindar el catálogo de productos de un local comercial.


## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- Configuración minimalista lista para usar.

---

## Instalación - Clonar el repositorio

```bash
https://github.com/sebastianfelo/final-NodeJs.git

o tambien:

degit sebastianfelo/final-NodeJs carpeta-destino
```

Reemplaza `usuario/repo-nombre` por el nombre del repositorio y `carpeta-destino` por el nombre de la carpeta donde deseas clonar el proyecto.

### Instalar dependencias

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm start
```

### EndPoints

GET - Obtener todos los productos:

```bash
localhost:3000/api/products
```

GET - Obtener un producto por Id:

```bash
localhost:3000/api/products/id
```

POST - Cargar un nuevo producto: (El Id se genera automaticamente)

```bash
localhost:3000/api/products/

{
    "nombre":"Nombre del Producto",
    "categoria":"Categoria",
    "precio":"Precio",
    "descripcion":"Descripción del Producto",
    "disponible": true / false
}
```

DELETE - Eliminar un producto por Id:

```bash
localhost:3000/api/products/id
```





Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
