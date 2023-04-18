import TareaHTML from "./TareaHTML";

const Panel = ({
  tareas,
  setTareaEditar,
  setActivarEditar,
  activarEditar,
  eliminartarea,
  filtro,
  tareasFiltradas,
}) => {
  return (
    <>
      {/* ESTOY PASANDO EL "TAREA" DEL MAP COMO PROP AL COMPONENTE */}
      {
        filtro ? (
          <>
          <p>{!tareasFiltradas.length && 'NO HAY TAREAS PARA MOSTRAR' }</p>
           {tareasFiltradas.map((tarea) => {
            return (
              <TareaHTML
                key={tarea.id}
                tarea={tarea}
                setTareaEditar={setTareaEditar}
                setActivarEditar={setActivarEditar}
                activarEditar={activarEditar}
                eliminartarea={eliminartarea}
              />
            );
          })}
          </>
        ):(
          tareas.map((tarea) => {
            return (
              <TareaHTML
                key={tarea.id}
                tarea={tarea}
                setTareaEditar={setTareaEditar}
                setActivarEditar={setActivarEditar}
                activarEditar={activarEditar}
                eliminartarea={eliminartarea}
              />
            );
          })
        )
      }
     
    </>
  );
};

export default Panel;
