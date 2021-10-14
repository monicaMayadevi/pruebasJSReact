
const promise = new Promise((resolve) =>
{
  console.log('empece')
  setTimeout( resolve, 2000)
}
)

promise.then ( () => console.log('ya termino') )
