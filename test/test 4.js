let primes = []

function primeAt(index) {
  let t0 = new Date().getTime()
  if (typeof index !== 'number' || index === 0) {
    return
  }
  if (primes.length >= index) {
    return primes[index - 1]
  } else {
    
    let i = primes?.length > 0 ? primes[primes.length - 1] : 0
    while (primes.length < index) {
      if (i === 0) {
        primes.push(2)
        i = primes[primes.length - 1]
      } else {
        let check = true
        for (let item of primes) {
          
          if (i % item === 0) {
            check = false
            break
          }
        }
        if (check) {
          primes.push(i)
        }
      }
      i++
    }
    return `no: ${primes.length}, value: ${primes[primes.length-1]}, ts: ${new Date().getTime()-t0} ms`
  }
}

function run() {  
  console.log(primeAt(1234))  
  console.log(primeAt(12345))
  console.log(primeAt(1000000))
  console.log(primeAt(20000000))
}

run()