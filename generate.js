const { Observable } = require('rxjs')

/*
const ob = Observable.create((o) => {
    for(let i = 0 ; i < 10; i++) {
        o.next(i * i)
    }
    o.complete()
})
*/

const ob = Observable.generate(
    0,
    (x) => x < 10,
    (x) => x + 1,
    (x) => x * x
)


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