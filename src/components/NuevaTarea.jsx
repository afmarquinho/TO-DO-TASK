import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = styled.form`
  background-color: white;
  padding: 2rem 3rem;
  margin: auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H2 = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
`;

const Nombre = styled.input`
  background-color: rgba(147, 207, 245, 0.3);
  color: rgb(0, 0, 0);
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  border: none;
  margin-bottom: 1.2rem;
  width: 100%;
  padding: 0.8rem;
  text-align: left;
`;
const Select = styled.select`
  background-color: rgba(147, 207, 245, 0.3);
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1.2rem;
  width: 100%;
  padding: 0.8rem;
`;
const Fecha = styled.input`
  background-color: rgba(147, 207, 245, 0.3);
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1.2rem;
  padding: 0.8rem;
  width: 100%;
`;
const MasInfo = styled.textarea`
  background-color: rgba(147, 207, 245, 0.3);
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.8rem;
  width: 100%;
  height: 60%;
  resize: none;
`;
const Enviar = styled.input`
  background-color: rgba(10, 152, 240, 1);
  color: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    background-color: rgb(4, 100, 160);
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 800;
`;
const Div = styled.div`
  width: 100%;
`;

const NuevaTarea = ({
  tareas,
  setTareas,
  tareaEditar,
  setTareaEditar,
  activarEditar,
  setActivarEditar,
}) => {
  // CAPTURAR LOS INPUTS
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [masInfo, setMasInfo] = useState("");

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) {
      setNombre(tareaEditar.nombre);
      setTipo(tareaEditar.tipo);
      setFecha(tareaEditar.fecha);
      setMasInfo(tareaEditar.masInfo);
    }
  }, [tareaEditar]);

  // GENERAR ID ALEATORIO
  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now();
    return random + fecha;
  };

  // VALIDACION DEL FORMULARIO
  const [error, setError] = useState(false);
  const [dateValidation, setDateValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fechaActual = new Date();
    let fechaVaidar = new Date(fecha);
    if (fechaVaidar < fechaActual) {
      setError(false)
      setDateValidation(true);
      return;
    }
    setDateValidation(false);

    if ([nombre, tipo, fecha].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objetoTareas = {
      //objeto que va guardar cada tarea agendadas, y las va a agregar al array Tareas, despues de pasar la
      nombre,
      tipo,
      fecha,
      masInfo,
    };
    console.log(objetoTareas);

    if (tareaEditar.id) {
      objetoTareas.id = tareaEditar.id;

      // NUEVO ARRAY CON LAS TAREAS ACTUALIZADAS O EDITADAS
      const tareasfiltradas = tareas.filter(
        (tareasState) => tareasState.id !== tareaEditar.id
      );
      setTareas([...tareasfiltradas, objetoTareas]);

      setTareaEditar({});
    } else {
      objetoTareas.id = generarID();
      setTareas([...tareas, objetoTareas]);
    }
    // REINICIO FORMULACIO AL FINAL DEL PROCESO
    setNombre("");
    setTipo("");
    setFecha("");
    setMasInfo("");
    setActivarEditar(false);
  };
  const onChangeDate = (e) => {
    setFecha(e.target.value);
  };

  return (
    <>
      <Formulario className="nueva__tarea" action="" onSubmit={handleSubmit}>
        {dateValidation && (
          <Error mensaje="* Seleccione una fecha válida"></Error>
        )}
        {error && (
          <Error mensaje="* Los campos, Nombre, Tipo, Fecha son obligatorios"></Error>
        )}
        <H2>{activarEditar ? "EDITAR TAREA" : "AGENDA TU NUEVA TAREA"}</H2>
        <Div>
          <Label htmlFor="nombre">Nombre de la tarea *</Label>
          <Nombre
            type="text"
            placeholder="Ingrese nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Div>
        <Div>
          <Label htmlFor="tipo_urgencia">Tipo de Urgencia *</Label>
          <Select
            name="tipo_urgencia"
            id=""
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="urgente">Urgente</option>
            <option value="medio">Medio</option>
            <option value="esperar">Puede Esperar</option>
          </Select>
        </Div>
        <Div>
          <Label htmlFor="fecha">Fecha Entrega *</Label>
          <Fecha
            type="date"
            name="fecha"
            value={fecha}
            onChange={onChangeDate}
          />
        </Div>
        <Div>
          <Label>Mas Información de la tarea</Label>
          <MasInfo
            name=""
            id=""
            placeholder="Mas Información..."
            value={masInfo}
            onChange={(e) => setMasInfo(e.target.value)}
          ></MasInfo>
        </Div>

        <Enviar
          type="submit"
          value={activarEditar ? "ACTUALIZAR" : "CREAR TAREA"}
          className="btn__enviar"
        />
      </Formulario>
    </>
  );
};

export default NuevaTarea;
