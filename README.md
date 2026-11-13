# Alrededor de los EE. UU.

## 📖 Descripción

Aplicación web interactiva desarrollada como parte del programa de Desarrollo Web de TripleTen.

El proyecto muestra un perfil de usuario y una galería de tarjetas con imágenes de lugares. Permite editar la información del perfil, agregar nuevas tarjetas, dar "me gusta", eliminar tarjetas y ver cada imagen ampliada en una ventana emergente. Los formularios cuentan con validación en tiempo real, y los popups se pueden cerrar con el botón de cierre, la tecla Esc o un clic en el área sombreada.

En esta etapa, el proyecto fue refactorizado de JavaScript a TypeScript, aplicando programación orientada a objetos. El código se organizó en clases con responsabilidades independientes (`Card`, `Section`, `FormValidator`, `Popup`, `PopupWithImage`, `PopupWithForm` y `UserInfo`), usando herencia, encapsulamiento con métodos públicos y privados, acoplamiento débil mediante callbacks, e interfaces y tipos para asegurar el manejo correcto de los datos y los elementos del DOM.

## 🌐 Demo

[Ver proyecto en GitHub Pages] https://pbatista01.github.io/web_project_around/

## Vista previa

![Project Preview](./images/project-preview.png)

## Tecnologías utilizadas

- HTML5
- CSS3
- TypeScript
- JavaScript (ES6+)
- Programación orientada a objetos (POO)
- Módulos ES6
- Manipulación del DOM
- Validación de formularios
- Metodología BEM
- Responsive Design
- Git
- GitHub

## Planes de mejora

- Conectar la aplicación a una API para guardar el perfil y las tarjetas en un servidor.
- Mantener el estado de los "me gusta" al recargar la página.
- Agregar un popup de confirmación antes de eliminar una tarjeta.
- Permitir cambiar la foto de perfil del usuario.
- Mostrar indicadores de carga mientras se envían los formularios.
- Incorporar pruebas automatizadas para las clases principales.