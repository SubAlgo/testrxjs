const { Observable } = require('rxjs')

const getUser = (id) => Observable.of('user: ' + id).delay(1000) //return user: {id}

const ob = Observable.from([1, 2, 3, 4])
    //.flatMap((x) => getUser(x), (x,result) => x + ' => ' + result) // x = 1,2,3,4 
    //.flatMap((x) => getUser(x))
    .switchMap((x) => getUser(x))


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