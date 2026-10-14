import './App.css';
import TodoApp from "./components/TodoApp";
// Componente que recibe y muestra PROPS
function Header({ titulo, usuario }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <p>Desarrollado por: <strong>{usuario}</strong></p>
    </header>
  );
}

export default function App() {
  return (
    <div className="container">
      {/* Componente con Props */}
      <Header titulo="Lista de Tareas" usuario="Jordi" />
      
      {/* Componente con Estado y Lista (.map) */}
      <TodoApp />
    </div>
  );
}