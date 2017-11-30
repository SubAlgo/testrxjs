const { Observable } = require('rxjs')


const ob = Observable.pairs({a: 1, b: 2, c: 3})


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