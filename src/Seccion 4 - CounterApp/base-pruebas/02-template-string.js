const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${nombre} ${apellido}`;

export default function getSaludo(nombre = 'Gonzalo!') {
  return 'Hola ' + nombre;
}
