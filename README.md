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

**GET - Obtener todos los productos:**

```bash
localhost:3000/api/products
```

**GET - Obtener un producto por Id:**

```bash
localhost:3000/api/products/id
```

**GET - Obtener categorias para armar el NavBar:**

```bash
localhost:3000/api/categorias
```

**POST - Cargar un nuevo producto: (El Id se genera automaticamente)**

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

**PUT - Actualizar un producto mediante su Id:**

```bash
localhost:3000/api/products/id

{
    "nombre":"Nombre del Producto",
    "categoria":"Categoria",
    "precio":"Precio",
    "descripcion":"Descripción del Producto",
    "disponible": true / false
}
```

**DELETE - Eliminar un producto mediante su Id:**

```bash
localhost:3000/api/products/id
```




## Estructura del proyecto
``` plaintext
carpeta-destino/
├── public/                 # Acceso publico
│   └── index.html          # Index de Home
|
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── product.controller.js
│   └── categorias.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── product.service.js
│   └── categorias.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── product.routes.js
│   └── categorias.routes.js
│
├── models/                # Modelos de datos (FireStore)
│   └── product.model.js
│   └── categorias.model.js
│
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto
├── .env                   # Credenciales de FireStore (Ejemplo: .env.example)

```
---

## Licencia

En construcción....
