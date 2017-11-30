const { Observable } = require('rxjs')




const ob = Observable.from([1, 2,3 ,4])
    .do(console.log)
    .map((x) => 'Num' + x)
    //.do((x) => console.log('Print by do : ' + x))
    .do(console.log)
    .toArray()



ob.subscribe(
    (x) => {
        console.log('next : ' + x)
    },
    (err) => {
        console.log('error: ' + err)
    },
    () => {
        console.log('completed')
    }
)