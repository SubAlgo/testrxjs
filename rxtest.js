const { Observable } = require('rxjs')

const ob = Observable.create((o) => {
    o.next(1)
    o.next(2)
    o.error('T_T')
    o.next(3)
    o.complete()
    return () => {
        console.log('unSub')
    }
})

ob.subscribe(
    (x) => {
        console.log('next1 : ' + x)
    },
    (err) => {
        console.log('error: ' + err)
    },
    () => {
        console.log('completed')
    }
)