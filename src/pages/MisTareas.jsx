import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import NuevaTarea from "../components/NuevaTarea";
import Panel from "../components/Panel";
import useNuevaTarea from "../hooks/useNuevaTarea";
import Filtros from "../components/Filtros";

const H2 = styled.h2`
  color: #ffffff;
  background-color: #006983;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem;
`;
const Navegacion = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    margin-top: 1rem;
    margin-bottom: 2rem;
    justify-content: space-between;
  }
`;
const ButtonNuevaTarea = styled.button`
  background-color: #006983;
  border: none;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  color: white;
  font-weight: 900;
  width: 100%;
  transition: all 0.5s ease-out;
  @media (min-width: 769px) {
    background-color: orange;
    margin: 0;
    width: 12rem;
  }
  :hover {
    background-color: #ff5e00;
    cursor: pointer;
  }
`;
const ButtonEjecucion = styled.button`
  background-color: #31c3e7f8;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
  width: 15rem;
  text-align: center;
  border: none;
  transition: all 0.5s ease-out;
  width: 100%;
  @media (min-width: 760px) {
    background-color: rgba(204, 255, 204, 0.5);
    width: 12rem;
  }
  :hover {
    cursor: pointer;
    background-color: #2b6e2b;
    color: rgb(255, 255, 255);
  }
`;
const ButtonHecho = styled.button`
  background-color: #61d6f3;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  width: 15rem;
  text-align: center;
  border: none;
  transition: all 0.5s ease-out;
  width: 100%;
  @media (min-width: 769px) {
    background-color: rgba(146, 208, 80, 0.5);
    width: 12rem;
  }
  :hover {
    cursor: pointer;
    background-color: #07f507;
    color: black;
  }
`;
const Contenedor = styled.div`
  display: block;
  overflow-y: scroll;
  height: 75vh;
  width: 100%;
  padding-top: 1rem;
  @media (min-width: 769px) {
    display:flex;
    flex-wrap: wrap;
    
  }
  /* @media (min-width: 769px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between; */

`;
const P = styled.p`
  font-size: 1.5rem;
`;
const Span = styled.span`
  font-weight: 800;
  color: blue;
`;

const MisTareas = () => {
  const { activar, actNuevaTarea } = useNuevaTarea();

  const initialState = () => JSON.parse(localStorage.getItem("tareas")) ?? [];

  const [tareas, setTareas] = useState(initialState); //prop: array para guardar todas las tareas
  const [tareaEditar, setTareaEditar] = useState({}); //registrar el objeto tarea a editar
  const [activarEditar, setActivarEditar] = useState(false); // activar el form de edicion
  const [filtro, setFiltro] = useState("");
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  useEffect(() => {
    //ejecutar cuando cambie el array tareas
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  // ...

  const eliminartarea = (id) => {
    const nuevoArrary = tareas.filter(
      (tareaEliminar) => tareaEliminar.id !== id
    );
    setTareas(nuevoArrary);
  };
  useEffect(() => {
   if(filtro){
    const Filtradas = tareas.filter(tarea => tarea.tipo === filtro);
    setTareasFiltradas(Filtradas)
   }
  }, [filtro]);

  return (
    <div>
      <H2>MIS TAREAS AGENDADAS</H2>

      <Navegacion>
        <ButtonNuevaTarea type="button" onClick={activar}>
          {actNuevaTarea ? "Cancelar" : "Nueva"}
        </ButtonNuevaTarea>

        <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>

        <div>
          <ButtonEjecucion type="button" className="link__ejecucion">
            En Ejecución
          </ButtonEjecucion>
          <ButtonHecho type="button" className="link__hecho">
            Hecho
          </ButtonHecho>
        </div>
      </Navegacion>
      <Contenedor className="contenedor">
        {actNuevaTarea ? (
          <NuevaTarea
            tareas={tareas}
            setTareas={setTareas}
            tareaEditar={tareaEditar}
            setTareaEditar={setTareaEditar}
            activarEditar={activarEditar}
            setActivarEditar={setActivarEditar}
          ></NuevaTarea>
        ) : activarEditar ? (
          <NuevaTarea
            tareas={tareas}
            setTareas={setTareas}
            tareaEditar={tareaEditar}
            setTareaEditar={setTareaEditar}
            activarEditar={activarEditar}
            setActivarEditar={setActivarEditar}
          ></NuevaTarea>
        ) : tareas && tareas.length ? (
          <Panel
            tareas={tareas}
            setTareaEditar={setTareaEditar}
            setActivarEditar={setActivarEditar}
            activarEditar={activarEditar}
            eliminartarea={eliminartarea}
            filtro ={filtro}
            tareasFiltradas = {tareasFiltradas}
          ></Panel>
        ) : (
          <P>
            No hay tareas agendadas, da click en el botón 'Nueva' y{" "}
            <Span>empieza a gestionar tus tareas"</Span>
          </P>
        )}
      </Contenedor>
    </div>
  );
};

export default MisTareas;
