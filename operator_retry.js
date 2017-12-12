

/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')

const s = new Subject()

//const ob = Observable.range(0, 5)
s
    .do((x) => console.log('do: ' + x))
    .flatMap((x) => Observable.if(
        () => x % 2 === 0,
        Observable.of(x),
        Observable.throw('invalid number')
    ))
    .retry(5)
    .subscribe(
        (x) => { console.log('log: ' + x) },
        (err) => { console.log('error: ' + err) },
        () => { console.log('completed') }
    )

s.next(0)
s.next(1)
s.next(2)
s.next(3)
s.next(4)