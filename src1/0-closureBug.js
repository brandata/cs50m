function makeFunctionArray() {
  const arr = []

  for (let i = 0; i < 5; i++) {
    arr.push(function () { console.log(i) })
  }
  let i = 10
  console.log(i)
  return arr
}

const functionArr = makeFunctionArray()

// we expect this to log 0, but it doesn't
functionArr[0]()
