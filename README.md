# 📑 Sistema de Calidad – A11 OHLA-ASCH

Este repositorio contiene el **portal digital de calidad de la obra A11 (Langa – Aranda)**, desarrollado para centralizar y organizar toda la documentación técnica, ensayos, PPIs y registros de obra.

El objetivo es disponer de un **único punto de acceso online**, accesible desde cualquier equipo, donde se puedan consultar los documentos agrupados por capítulos (01–21) y filtrados mediante buscador y etiquetas.

---

## 📂 Estructura del repositorio

- **/assets** → hojas de estilo, scripts y utilidades.
- **/data/manifest.json** → catálogo maestro donde se listan todos los documentos.
- **/registros** → aquí se suben los documentos en formato HTML.
- **/index.html** → página principal con menú, buscador y acceso a las secciones.

---

## 📝 Cómo añadir un nuevo documento

1. Subir el archivo HTML a la carpeta `/registros`.
   - Nombre recomendado: `AAAA-MM-DD_pk-tipo.html`  
     Ejemplo: `2025-09-25_PI-26950_placa-k.html`

2. Editar el archivo `/data/manifest.json` y añadir una entrada en la sección correspondiente, por ejemplo:
   ```json
   {
     "titulo": "PI 26+950 – Placa de carga y coeficiente k",
     "ruta": "registros/2025-09-25_PI-26950_placa-k.html",
     "tags": ["placa","k","cimentación","DF"],
     "fecha": "2025-09-25"
   }
