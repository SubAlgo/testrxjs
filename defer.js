const { Observable } = require('rxjs')

const v = 1

/* เขียนแบบ function

const ob = v === 1 ? Observable.of(1) : Observable.throw('invalid pre-condition')
-----------------*/

/* เขียนแบบใช้ defer
-----------------*/

const ob = Observable.defer(() => {
if (v === 1) {
        return Observable.of(1)
    }
    return Observable.throw('invalid pre-condition')
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