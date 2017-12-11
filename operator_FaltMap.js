import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const EventEmitter = require('events')
//connect to web socket

const repeat = (n) => Observable.range(4, n)
                       // .map((x) => `${n}:${x}`)

const ob = Observable.range(2, 3)
    .flatMap(repeat, (n,x) => `${n}:${x}`)
    .first()
    .subscribe(
        (x) => { console.log(x) },
        (err) => { console.log('Error: ' + err) },
        () => { console.log('Completed')}
    )

    