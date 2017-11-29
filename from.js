const { Observable } = require('rxjs')

const myArr = [1,2,3,4,5]


const ob = Observable.from(myArr)

ob.subscribe(
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