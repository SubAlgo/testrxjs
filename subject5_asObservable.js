const { Subject, ReplaySubject } = require('rxjs')
//ใช้กรณีทำ lib ที่จะใช้้ Operator ของ Observable ไม่ต้องการให้ call next
const s = new Subject()
s.next(0)
s.next(1)
const ob = s.asObservable()
ob.subscribe(
    (x) => { console.log('next : ' + x) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)

s.next(2)
s.next(3)
s.complete()