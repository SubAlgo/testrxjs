/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const EventEmitter = require('events')
//connect to web socket

const ob = Observable.range(0, 5)
    .map((x) => x * 2)
    .subscribe(
        (x) => { console.log(x) },
        (err) => { console.log('error: ' + err) },
        () => { console.log('conpleted')}
    )