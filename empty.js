const { Observable } = require('rxjs')

const ob = Observable.empty()

const sub = ob.subscribe(
    (x) => { console.log('next1 : ' + x) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)

