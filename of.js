const { Observable } = require('rxjs')

const ob = Observable.of(1)

const sub = ob.subscribe(
    (x) => {console.log('next1 : ' + x)},
    (err) => {console.log('error: ' + err)},
    () => {console.log('completed')}
)

