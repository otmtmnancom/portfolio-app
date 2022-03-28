let store = {
  A001: 10
}

const path = '/api/order'
let checkStore = {}

function post(path, req) {
  for (let item of Object.keys(req?.body)) {
    if (!checkStore[item]) {
      checkStore[item] = req?.body[item]
    } else {
      checkStore[item] += req?.body[item]
    }
  }
  setTimeout(() => {
    for (let item of Object.keys(checkStore)) {
      if (!store[item]) {
        continue
      } else {
        if (store[item] > checkStore[item]) {
          // 
        } else {
          console.log({
            ok: 0 ,
            err : 'ขณะนี้มีผู้ใช้งานจำนวนมาก กรุณาทำรายการใหม่อีกครั้ง'
          }) 
        }
      }
    }
  }, 1000)
}

function run(){
  post(path,{body : { A001 : 8 }})
  post(path,{body : { A001 : 5 }})
}

run()