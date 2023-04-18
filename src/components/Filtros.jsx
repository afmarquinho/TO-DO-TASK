import styled from "@emotion/styled";
import React from "react";

const Formulario = styled.form`
  font-weight: 900;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Select = styled.select`
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: 769px) {
    width: 20rem;
  }
`;

const Filtros = ({filtro, setFiltro}) => {
  return (
    <Formulario action="">
      <label htmlFor="filtros">Filtrar Por: </label>
      <Select
        name="filtros"
        id=""
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="">--Todas--</option>
        <option value="urgente">Urgente</option>
        <option value="medio">Medio</option>
        <option value="esperar">En Espera</option>
      </Select>
    </Formulario>
  );
};

export default Filtros;
