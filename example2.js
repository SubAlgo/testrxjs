const { Observable } = require('rxjs')

let n

const ob = Observable.create((o) => {
    n = o
})


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

n.next(1)
n.next(2)