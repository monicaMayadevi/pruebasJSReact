
const inicializarBaseDeDatos = () => new Promise(resolve =>
{
  console.log('inicializando base de datos')
  setTimeout( resolve, 2000)
}
)

const inicializarServidor = () => new Promise(resolve =>
{
  console.log('inicializando servidor')
  setTimeout( resolve, 3000)
}
)

const ejecutar =  async () =>
{
  await inicializarBaseDeDatos()
  await inicializarServidor()
  console.log('terminet los sistemas han inicializado')
}

ejecutar()
