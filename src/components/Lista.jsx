import React from "react";
import "./lista.css";

const Lista = ({
  listado,
  elementoEliminado,
  editarElemento,
  estadoEdicion,
  eliminarTodo,
}) => {
  const eliminar = (item) => {
    const filtrado = listado.filter((eliminado) => eliminado.id !== item.id);
    elementoEliminado(filtrado);
  };

  const editar = (item) => {
    estadoEdicion(true);
    editarElemento(item);
  };

  return (
    <>
      {listado.length === 0 ? (
        <span className="lead ">No hay tareas agregadas</span>
      ) : (
        <>
          <ul className="list-group">
            {listado.map((item, index) => (
              <li key={index} className="list-group-item lead">
                {item.nombreTarea}

                <button
                  className="btn btn-warning float-end mx-1"
                  onClick={() => editar(item)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger float-end mx-2"
                  onClick={() => eliminar(item)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/#"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className="text-danger">Eliminar todo</span>
          </a>
        </>
      )}

      {/* MODAL DE CONFIRMACION PARA ELIMINAR TODO */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {listado.length < 2
                ? `Esto afectara a 1 tarea`
                : `Esto afectara a ${listado.length} tareas`}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={eliminarTodo}
              >
                Eliminar Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lista;
