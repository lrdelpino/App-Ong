![Alkemy Logo](https://alkemy.org/assets/images/logo-header.png)

# Proyecto Alkemy Labs

Proyecto de desarrollo utilizando AdonisJs

## Requerimientos previos

Es necesaria la última versión estable de Node.js. La misma puede descargarse en el siguiente link:

[https://nodejs.org/es/](https://nodejs.org/es/)

Para simplificar el flujo de desarrollo, se recomienda instalar la CLI de AdonisJS. Para instalarla, ejecutar el siguiente comando

```bash
npm i -g @adonisjs/cli
```

## Configuración Inicial

Una vez clonado el respositorio, ejecutar el comando

```bash
npm install
```

para instalar las dependencias necesarias.
Crear una copia del archivo .env.example y guardarla como .env
En el mismo, se deberán especificar las configuraciones de conexión a la base de datos.

    DB_USER=USUARIODB
    DB_PASSWORD=PASSWORDDB
    DB_DATABASE=NOMBREBASE

Ejecutar el comando

    adonis key:generate

para generar una APP_KEY única (necesaria para el funcionamiento de la aplicación).

Ejecutar el comando

    adonis migration:run

Para migrar las tablas en la base de datos.

Por último, ejecutar

    adonis seed

Para agregar datos de prueba a la base

## Servidor de desarrollo

Para trabajar en el proyecto, es necesario levantar un servidor de desarrollo que escuchará los cambios en los archivos.
Ejecutar el comando

```bash
adonis serve --dev
```

Levantará el servidor en el puerto especificado en .env (por defecto 3333)
