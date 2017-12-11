/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const EventEmitter = require('events')
//connect to web socket

const ob = Observable.range(0,  5)
    .filter((x) => x % 2 === 0)
    .map((x) => x * 2)
    .subscribe(
        (x) => console.log(x),
        (er) => console.log('error: ' + er),
        () => console.log('completed!!')
    )