function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}

async function hello() {
  let str = await getString()
  console.log(str);
}

export default hello
