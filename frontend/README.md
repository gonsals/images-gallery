# Frontend - React App

Este directorio contiene la aplicación frontend desarrollada en React.

## Tecnologías Utilizadas

- **React** con Create-React-App
- **Bootstrap** para estilos
- **React Toastify** para notificaciones
- **Axios** para las peticiones HTTP

## Instalación y Ejecución

### Requisitos previos

- Node.js y npm instalados

### Pasos para ejecutar en local

```sh
npm install  # o yarn install
npm start    # o yarn start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Ejecutar con Docker

```sh
docker build -t frontend .
docker run -p 3000:3000 frontend
```

## Variables de Entorno

- `REACT_APP_API_URL`: URL de la API Backend

---

**Autor:** [@gonsals](https://www.github.com/gonsals)
