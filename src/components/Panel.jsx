import TareaHTML from "./TareaHTML";


const Panel = ({ tareas, setTareaEditar, setActivarEditar, activarEditar,  eliminartarea}) => {
  return (
    <>
    {/* ESTOY PASANDO EL "TAREA" DEL MAP COMO PROP AL COMPONENTE */}
      {tareas.map((tarea ) => {
        return <TareaHTML
        key={tarea.id}
        tarea = {tarea}
        setTareaEditar = {setTareaEditar}
        setActivarEditar = {setActivarEditar}
        activarEditar={activarEditar}
        eliminartarea={eliminartarea}/>;
        
      })}
    </>
  );
};

export default Panel;
