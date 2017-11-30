/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')
const EventEmitter = require('events')
//connect to web socket

const w = new EventEmitter()
const chat$ = new Subject()

/*addListener
------------*/
w.addListener('onMessage', (msg) => {
    console.log('next msg')
    chat$.next(msg)
})


w.emit('onMessage', 'hello')
w.emit('onMessage', 'test')

/*subscribe
----------*/
chat$.subscribe(
    (x) => { console.log('next : ' + x) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)

w.emit('onMessage', '123')
w.emit('onMessage', '000')

/*result
next msg
next msg
next msg
next : 123
next msg
next : 000
--------*/