//import { Subject } from 'rxjs/Subject';

const { Observable, Subject } = require('rxjs')

const s = new Subject()
s.next(0)
s.next(1)
const sub = s.subscribe(
    (x) => {console.log('next : ' + x)},
    (err) => {console.log('error: ' + err)},
    () => {console.log('completed')}
)
s.next(2)
//sub.unsubscribe()
s.next(3)
s.complete()