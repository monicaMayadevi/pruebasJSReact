const pelicula =
{
	nombre: 'Viernes 13',
	genero: 'Terror'

}
function imprimir({ nombre, genero, clasificacion = 'A' })
{
	const miNombre = nombre
  console.log (miNombre, genero, clasificacion )
}
//se estrae renombrando el campo a otro nombre de variable
const imprimir2 = function({ nombre: miNombre, genero, clasificacion = 'B' })
{
	console.log (miNombre, genero, clasificacion )
}

const imprimir3 = ({ nombre, genero, clasificacion }) =>
{
	console.log (nombre, genero, clasificacion )
}
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)
