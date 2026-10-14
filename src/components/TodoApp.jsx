import { useState } from 'react';

export default function TodoApp() {
  // Estado de la lista de tareas
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Tabla comparativa de los tres métodos', completada: true },
    { id: 2, texto: 'Consultas sobre fechas y periodos en PostgreSQL', completada: true },
    { id: 3, texto: 'Introducción a React - Fundamentos y Primer Componente', completada: true },
    { id: 4, texto: ' Investigación e Implementación de .gitignore', completada: false },
  ]);

  // Estado del input
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;

    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea('');
  };

  const alternarEstado = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const completadas = tareas.filter((t) => t.completada).length;

  return (
    <div className="todo-box">
      <div className="resumen">
        <p>Progreso: <strong>{completadas}</strong> de <strong>{tareas.length}</strong> tareas completadas</p>
      </div>

      <form onSubmit={agregarTarea} className="form-tarea">
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul className="lista-tareas">
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => alternarEstado(tarea.id)}
            className={tarea.completada ? 'completada' : ''}
          >
            <span>{tarea.completada ? '✓' : '✗'}</span>
            <span className="texto">{tarea.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}