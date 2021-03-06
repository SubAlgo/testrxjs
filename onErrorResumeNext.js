const { Observable } = require('rxjs')


const ob1 = Observable.interval(1000).take(5)
const ob2 = Observable.throw('T_T')
const ob3 = Observable.of('ChaiYo')

const ob = Observable.onErrorResumeNext(ob1, ob2, ob3)
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