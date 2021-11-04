import React, { useState } from "react";

const Tarea = ({
  agregarLista,
  estadoEdicion,
  elementoEditado,
  listado,
  nuevaLista,
  setEstadoEdicion,
}) => {
  const [tarea, setTarea] = useState("");
  const [editarElemento, setEditarElemento] = useState("");
  const [error, setError] = useState(false);

  const enviarDatos = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Falta tarea");
      setError(true);
      return;
    }
    agregarLista(tarea);
    setTarea("");
    setError(false);
  };

  const nuevoEditado = (e) => {
    e.preventDefault();
    if (!editarElemento.trim()) {
      console.log("Falta tarea");
      setError(true);
      return;
    }

    const nuevo = listado.map((item) =>
      item.id === elementoEditado.id
        ? { id: item.id, nombreTarea: editarElemento }
        : item
    );

    nuevaLista(nuevo);
    setEstadoEdicion(false);
    setEditarElemento("");
    setError(false);
  };

  const cancelar = () => {
    setEstadoEdicion(false);
    setEditarElemento("");
    setError(false);
  };

  return (
    <>
      {estadoEdicion ? (
        <>
          <form onSubmit={nuevoEditado}>
            <input
              type="text"
              className="form-control"
              placeholder={`Editando: ${elementoEditado.nombreTarea} `}
              onChange={(e) => setEditarElemento(e.target.value)}
              value={editarElemento}
            />

            <button type="submit" className="btn btn-success mt-2">
              Editar
            </button>
            <button
              type="button"
              className="btn btn-warning mt-2 mx-2 "
              onClick={cancelar}
            >
              Cancelar
            </button>
            {error ? (
              <span className="lead mx-3 text-danger">Ingresar tarea</span>
            ) : null}
          </form>
        </>
      ) : (
        <>
          <form onSubmit={enviarDatos}>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />

            <button className="btn btn-primary mt-2">Agregar</button>
            {error ? (
              <span className="lead mx-3 text-danger">Ingresar tarea</span>
            ) : null}
          </form>
        </>
      )}
    </>
  );
};

export default Tarea;
