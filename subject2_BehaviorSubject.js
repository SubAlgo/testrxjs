const { Observable, Subject, BehaviorSubject } = require('rxjs')

const s = new BehaviorSubject(0)
s.next(0)
s.next(1)
const sub = s.subscribe(
    (x) => { console.log('next : ' + x) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)
s.next(2)
s.next(3)
s.complete()