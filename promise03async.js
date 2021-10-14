
const promise = new Promise((resolve) =>
{
  console.log('empece')
  setTimeout( resolve, 2000)
}
)
//sin async no funciona
const ejecutar = async () =>
{
  await promise
  console.log('ya termino')
}
//ponerlo aqui no funciona
//await promise
//  console.log('ya termino')
//quitando el ejecutar
ejecutar()
