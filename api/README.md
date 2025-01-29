# Backend - API Flask

Este directorio contiene la API desarrollada en Flask.

## Tecnologías Utilizadas

-   **Flask**
-   **MongoDB** con MongoClient
-   **Pipenv** para gestión de dependencias

## Instalación y Ejecución

### Requisitos previos

-   Python 3.13 instalado
-   MongoDB en ejecución

### Pasos para ejecutar en local

```sh
pipenv install
pipenv run python main.py
```

La API estará disponible en [http://localhost:5050](http://localhost:5050)

### Ejecutar con Docker

```sh
docker build -t api .
docker run -p 5050:5050 api
```

## Variables de Entorno

-   `UNSPLASH_API_KEY`: API key para desarrollo de aplicaciones con Unsplash
-   `MONGO_USERNAME`: Nombre de usuario para conexión a MongoDB
-   `MONGO_PASSWORD`: Contraseña para conexión a MongoDB

---

**Autor:** [@gonsals](https://www.github.com/gonsals)
