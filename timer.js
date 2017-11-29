const { Observable } = require('rxjs')

const ob = Observable.timer(2000, 1000)
//const ob = Observable.timer(new Date('Aug 15, 2017'), 1000)

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