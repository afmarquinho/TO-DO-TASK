export const generarID = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now();
  return random + fecha;
};