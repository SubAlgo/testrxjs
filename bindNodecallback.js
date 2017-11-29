const { Observable } = require('rxjs')

const f = (cb) => {
    //cb(null,1)
    cb('T_T',2)
    cb(null,2)
}

const ob = Observable.bindNodeCallback(f)()

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