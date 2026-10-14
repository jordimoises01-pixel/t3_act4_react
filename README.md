# t3_act4_react - Introducción a React: Fundamentos y Primer Componente

## Descripción del Proyecto
Aplicación interactiva de lista de tareas creada con React y Vite. Permite agregar nuevas tareas, marcar o desmarcar elementos como completados y llevar un registro visual del progreso del usuario.

### Estructura y Conceptos Aplicados:
- App.jsx: Componente principal que contiene el encabezado (Header) y pasa información mediante props.
- TodoApp.jsx: Componente modular que maneja el estado de la aplicación (useState) y renderiza dinámicamente la lista de tareas utilizando el método .map() con sus respectivas keys.
- App.css: Estilos de presentación general de la interfaz.

---

## Cuestionario de Comprensión

 a) ¿Qué diferencia hay entre props y state en React?
- Props (Propiedades): Son datos que un componente padre le pasa a un componente hijo. Son de solo lectura, significa que el componente que las recibe no las puede modificar directamente.
- State (Estado): Es una estructura de datos del propio componente que puede cambiar a lo largo del tiempo. Cuando el estado cambia, React vuelve a renderizar el componente automáticamente para reflejar la modificacion.

 b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Porque asigna un identificador único a cada elemento generado. Esto le permite a React identificar exactamente qué elementos han sido modificados, agregados o eliminados, optimizando el rendimiento del DOM virtual sin tener que redibujar toda la lista desde cero.

 c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
useState es un Hook que nos permite agregar memoria a un componente funcional. Regresa la variable del estado y una función para actualizarla. En la mini aplicación lo utilicé dentro de TodoApp.jsx para almacenar el arreglo de tareas y reiniciar la vista cada vez que se añade una nueva tarea o se cambia su estado de completada.

---

## Enlaces de Entrega

- d) Repositorio en GitHub: https://github.com/jordimoises01-pixel/t3_act4_react
- e) Proyecto desplegado en GitHub Pages: https://jordimoises01-pixel.github.io/t3_act4_react/