const { Observable } = require('rxjs')


const ob = Observable.interval(1000).take(3)

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