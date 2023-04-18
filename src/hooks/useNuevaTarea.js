import { useState } from "react";

const useNuevaTarea = () => {
  const [actNuevaTarea, setActNuevaTarea] = useState(false); //hook para cambiar el boton de editar a cancelar
  const activar = () => {
    if (!actNuevaTarea) {
      setActNuevaTarea(true);
    } else {
      setActNuevaTarea(false);
    }
  };
  
  return {
      activar,
      actNuevaTarea
  }
  
  
};

export default useNuevaTarea;
