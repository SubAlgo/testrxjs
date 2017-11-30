const { Observable } = require('rxjs')


const ob1 = Observable.interval(1000).take(5)
const ob2 = Observable.interval(1500).take(3)

const ob = Observable.forkJoin(ob1, ob2)

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