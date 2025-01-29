# Full-Stack Web Application

Este proyecto es una aplicación full-stack que utiliza React en el frontend, Flask en el backend y MongoDB como base de datos. Se gestiona con Docker y se ejecuta mediante `docker-compose`.

---

## Tecnologías Utilizadas

-   **Frontend:** React con Bootstrap
-   **Backend:** Flask con MongoDB
-   **Base de Datos:** MongoDB
-   **Despliegue:** Docker y Docker-Compose

## Estructura del Proyecto

```
images-gallery/
|-- frontend/      # Aplicación React
|-- api/           # API con Flask
|-- docker-compose.yml  # Configuración de Docker
|-- README.md      # Documentación general
```

## Instalación y Ejecución

### Requisitos previos

-   Docker y Docker Compose instalados.

### Pasos para ejecutar

```sh
git clone <repositorio>
cd <repositorio>
docker-compose up --build
```

La aplicación estará disponible en:

-   **Frontend:** [http://localhost:3000](http://localhost:3000)
-   **API:** [http://localhost:5050](http://localhost:5050)
-   **Mongo Express:** [http://localhost:8081](http://localhost:8081)

## Despliegue en Producción

1. Usa un VPS con Docker instalado (DigitalOcean, AWS, etc.).
2. Sube el código al servidor.
3. Ejecuta `docker-compose up --build -d` para correrlo en segundo plano.
4. Configura un proxy inverso como Nginx para exponer el frontend y backend.

---

## Documentación por Componentes

### Frontend

[Frontend README](frontend/README.md)

### Backend

[Backend README](api/README.md)

---

**Autor:** Marc Gonzalez  
**Licencia:** MIT
