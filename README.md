# TWITTER

En este reto, vamos a replicar el newsfeed de Twitter, para ello vamos a seguir un flujo de versiones que te guiarán para enfocarte de una manera más eficiente :)

Puedes adaptar el diseño como mejor te parezca, *pero no tardes mucho definiendo los colores o fuentes. Por último puedes replicar el diseño de la [página oficial](https://twitter.com/)* :). Aquí un ejemplo:

![IMAGE](https://media.giphy.com/media/3ov9jP4RIGQCUQOScg/giphy.gif)

## Versión 0.0.1

1. Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
2. Agregar un evento de click al botón o de submit al formulario.
3. En el evento, obtener el texto.
4. Agregar el texto al HTML.


## Versión 0.0.2

1. No ingresar texto vacío (deshabilitar el botón de "twittear").
2. Contar la cantidad de caracteres de forma regresiva.


## Versión 0.0.3

1. Si pasa los 140 caracteres, deshabilitar el botón.
2. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
3. Si pasa los 130 caracteres, mostrar el contador con OTRO color.
4. Si pasa los 140 caracteres, mostrar el contador en negativo.


## Versión 0.0.4

1. Al presionar enter(`/n`) que crezca el textarea de acuerdo al tamaño del texto.


## Versión 0.0.5 (Extra)

1. Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)


## Versión 0.0.6 (Extra)

1. Agregar la hora en que se publicó el tweet. En el formato de 24 horas: `hh:mm`.

>Nota: Para dar formato a la fecha y hora, puedes crear tu propia función o usar una librería como                                                   
[moment.js](https://momentjs.com/).


## Entregables

Debes entregar **un repositorio de GitHub** que contenga:

1. Carpeta **`assets`** que contenga el otros archivos utiles para la página web .
2. Carpeta **`css`** que contenga el archivo **`style.css`** .
    - Archivo **`style.css`** con los estilos que se aplican al HTML.
3. Carpeta **`js`** que contenga el archivo **`app.js`** .
    - Archivo **`app.js`** con el **código** de tu solución.
4. Archivo **`index.html`** vinculado a **`style.css`** y **`app.js`**.
5. Archivo **`README.md`** que explique el programa.