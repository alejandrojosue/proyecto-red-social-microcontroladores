---
title: 'Readme'
layout: '../layouts/Layout.astro'
---

# Proyecto Red Social

### Ejecutar proyecto en modo desarrollo
```sh
npm run dev
```
<!-- 
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554) -->

## 🚀 Estructura del Proyecto

Dentro de su proyecto Astro, verá las siguientes carpetas y archivos:

```text
/
├── public/
│   ├── assets/
│   |   ├── img/
|   |   |   ├── 1.jpg
|   |   |   └── publi1.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Aside.astro
│   │   ├── Navbar.astro
│   │   ├── Notification.astro
│   │   └── Post.astro
│   ├── css/
│   │   ├── config/
│   │   │   └── config/
│   │   │       └── colors.css
│   │   └── style.css
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── home.astro
│   |   ├── index.astro
│   |   └── notifications.astro
│   └── services/
│       └── redSocial.ts
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta según su nombre de archivo.

En `src/components/` es donde se colocan los componentes hechos con Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, se puede colocar en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command                   | Action                                                |
| :------------------------ | :-----------------------------------------------      |
| `npm install`             | Instalar dependencias                                 |
| `npm run dev`             | Iniciar servidor local dev en `localhost:4321`        |
| `npm run build`           | Contruye para producción tu proyecto `./dist/`        |
| `npm run preview`         | Vista previa de su compilación antes de implementarla |
| `npm run astro ...`       | Ejecute comandos CLI como `astro add`, `astro check`  |
| `npm run astro -- --help` | Obtenga ayuda para usar Astro CLI                     |
