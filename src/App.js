import { useState } from "react";
import Lista from "./components/Lista";
import Tarea from "./components/Tarea";
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  const [lista, setLista] = useState([]);
  const [estadoEdicion, setEstadoEdicion] = useState(false);
  const [elementoEditado, setelementoEditado] = useState("");

  const agregarLista = (tarea) => {
    setContador(contador + 1);
    setLista([...lista, { id: contador, nombreTarea: tarea }]);
  };

  const elementoEliminado = (elemento) => {
    setLista(elemento);
  };

  const editarElemento = (elemento) => {
    setelementoEditado(elemento);
  };

  const nuevaLista = (nuevo) => {
    setLista(nuevo);
  };

  const eliminarTodo = () => {
    setLista([]);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* TAREAS */}
          <div className="col-5">
            <h5 className="text-center">Agregar tarea</h5>

            <Tarea
              listado={lista}
              agregarLista={agregarLista}
              estadoEdicion={estadoEdicion}
              elementoEditado={elementoEditado}
              nuevaLista={nuevaLista}
              setEstadoEdicion={setEstadoEdicion}
            />
          </div>

          {/*LISTA DE TAREAS */}
          <div className="col-7">
            <h5 className="text-center">Lista de tareas</h5>
            <Lista
              listado={lista}
              elementoEliminado={elementoEliminado}
              editarElemento={editarElemento}
              estadoEdicion={setEstadoEdicion}
              eliminarTodo={eliminarTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
