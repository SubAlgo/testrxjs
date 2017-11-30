const { Observable } = require('rxjs')

const v = 'wtf'

const ob = Observable.if(
    () => v === 1, //condition
    Observable.of('one'), // then
    Observable.of(v), // else
    Observable.throw('T_T')
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