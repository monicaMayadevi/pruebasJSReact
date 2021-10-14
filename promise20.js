
const inicializarBaseDeDatos = () => new Promise(resolve =>
{
  console.log('inicializando base de datos')
  setTimeout( resolve, 2000)
}
)

const inicializarServidor = () => new Promise((resolve, reject) =>
{
  console.log('inicializando servidor')
  setTimeout( () => reject(Error('falle')), 1000)
  setTimeout( resolve, 3000)
}
)

Promise.all( [ inicializarBaseDeDatos(), inicializarServidor() ] )
.then ( () => console.log('todos los sistemas se han inicializado'))
.catch( error => {console.error("hubo un error", error.message)})
.then( () => console.log('finalizado'))
