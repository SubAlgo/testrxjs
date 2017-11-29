const { Observable } = require('rxjs')

const f = (start, cb) => {
    cb(start)
    cb(start + 1)
    cb(start + 2)
}

const ob = Observable.bindCallback(f)(5) //(callback)(argument)


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

/*
next1 : 5
completed
*/