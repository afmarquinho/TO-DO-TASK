import styled from "@emotion/styled";


const Contenedor = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  display: inline-block;
  width:100%;
  margin-bottom:1rem;
`;
const NombreTarea = styled.p`
  text-transform: uppercase;
  font-weight: 800;
`;
const Botones = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
const Span = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
`;
const P = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  font-style: italic;
`;
const Button1 = styled.button`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #5569d8;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;
  :hover {
    background-color: #061670;
    cursor: pointer;
  }
`;
const Button2 = styled.button`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: rgba(204, 255, 204, 0.5);
  color: #000000;
  font-weight: bold;
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
    background-color: #2b6e2b;
    color: rgb(255, 255, 255);
  }
`;
const Button3 = styled.button`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: rgba(146, 208, 80, 0.5);
  color: #000000;
  font-weight: bold;
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
    background-color: #07f507;
    color: black;
  }
`;
const Button4 = styled.button`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: rgba(250, 14, 53, 0.616);
  color: #fff9f9;
  font-weight: bold;
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
    background-color: #e91f1f;
    color: #ffffff;
  }
`;

const TareaHTML = ({ tarea, setTareaEditar,setActivarEditar, eliminartarea}) => {
  const { nombre, tipo, fecha, masInfo } = tarea;
  
  const editar = () => {
    //al hacer click, llena objeto y el activa el state para mostrar form
    setTareaEditar(tarea);
    setActivarEditar(true)
        
  };
  const handleDelete = ()=>{
    const alerta = confirm('¿Deseas eliminar la tarea...?')
    if(alerta){
      eliminartarea(tarea.id)
    }
  }

  return (
    <div>
      <Contenedor>
        <NombreTarea>{nombre}</NombreTarea>
        <p>
          Tipo: {""}
          <Span>{tipo}</Span>
        </p>
        <p>
          Fecha de Vencimiento: {""}
          <em>
            <b>{fecha}</b>
          </em>
        </p>
        <P>{masInfo ? masInfo : "NO HAY INFO ADICIONAL"}</P>
        <Botones>
          <Button1 type="button" className="button" onClick={() => editar()}>
            EDITAR
          </Button1>
          <Button2 type="button" className="button">
            EN EJECUCIÓN
          </Button2>
          <Button3 type="button" className="button">
            HECHO
          </Button3>
          <Button4 type="button" className="button" onClick={handleDelete}>
            ELIMINAR
          </Button4>
        </Botones>
      </Contenedor>
    </div>
  );
};

export default TareaHTML;
