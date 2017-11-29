const { Observable } = require('rxjs')

const f = {
    value:1,
    getvalue (cb) {
        cb(this.value)
    }
}

//const ob = Observable.bindCallback(f.getvalue.bind(f))()
const ob = Observable.bindCallback((cb)=>f.getvalue(cb))()


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