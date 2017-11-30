const { Observable } = require('rxjs')


const ob1 = Observable.interval(1000).take(5)
const ob2 = Observable.interval(100).take(3)

const ob = Observable.race(ob1, ob2)
// เหมือนแข่งกัน อย่างกรณีนี้ ob1 มาก่อน ob2 จะไม่ถูกสนใจเลย


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