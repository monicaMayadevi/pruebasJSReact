
const promise = new Promise((resolve) =>
{
  console.log('empece')
  setTimeout( resolve, 2000)
}
)


async function  ejecutar()
{
  await promise
  console.log('ya termino')
}

ejecutar()
