const { Observable, Subject, AsyncSubject } = require('rxjs')

const s = new AsyncSubject()
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