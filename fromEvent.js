const { Observable } = require('rxjs')
const EventEmitter = require('events')

const ev = new EventEmitter()
const ob = Observable.fromEvent(ev, 'event')

ev.emit('event', 1)

const sub = ob.subscribe(
    (x) => {
        console.log('next1 : ' + x)
    },
    (err) => {
        console.log('error: ' + err)
    },
    () => {
        console.log('completed')
    }
)

ev.emit('event', 2)
ev.emit('event', 3)
sub.unsubscribe()
ev.emit('event', 4)