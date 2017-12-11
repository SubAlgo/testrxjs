

/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const {EventEmitter} = require('events')
//connect to web socket

const repeat = (n) => Observable.range(0, n)

const ob = Observable.from([0,0,1,2,2,1])
    .distinctUntilChanged()
    .subscribe(
        (x) => { console.log(x) },
        (err) => { console.log('Error: ' + err) },
        () => {console.log('Completed!!')}
    )
