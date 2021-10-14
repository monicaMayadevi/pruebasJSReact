const nombre = 'Bambie'
const genero = 'Drama'
const clasificacion = 'A'

const director =
{
  nombreDirector: 'Juan Perez',
  pais: 'USA',
  fecha: '1950'
}
const pelicula = { nombre, genero, clasificacion, director }

console.log(pelicula)
console.log(JSON.stringify(pelicula))
