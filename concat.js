const { Observable } = require('rxjs')


//const ob1 = Observable.interval(1000).take(5)
const ob1 = Observable.throw('T_T')
const ob2 = Observable.interval(1500).take(3)

const ob = Observable.concat(ob1, ob2) 
//เหมือนการต่อ stream (เอามาต่อ ไม่ใช่รวม)
// ถ้ามี error จะไม่มีการทำอะไรต่อเลย

ob.subscribe(
    (x) => {
        console.log('next : ' + x)
    },
    (err) => {
        console.log('error: ' + err)
    },
    () => {
        console.log('completed')
    }
)