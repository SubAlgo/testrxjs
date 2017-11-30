/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const EventEmitter = require('events')
//connect to web socket

const w = new EventEmitter()

const chat$ = Observable.create((o) => {
    
    const lis = (msg) => {
        console.log('next msg')
        o.next(msg)
    }

    w.addListener('onMessage', lis)
    return () => {
        w.removeListener('onMessage', lis)
    }
})

w.emit('onMessage', 'hello')
w.emit('onMessage', 'test')

/*subscribe
----------*/
const sub = chat$.subscribe(
    (x) => { console.log('next : ' + x) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)

w.emit('onMessage', '000')
w.emit('onMessage', '111')
sub.unsubscribe()
w.emit('onMessage', '222')

/*result
next msg
next : 000
next msg
next : 111
--------*/