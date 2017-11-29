const { Observable } = require('rxjs')

const f = () => Promise.resolve(1)
//const f = () => Promise.reject('T_T')


const ob = Observable.fromPromise(f())

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

/*
const { Observable } = require('rxjs')
const axios = require('axios')

const ob = Observable.fromPromise(axios.get('https://api.github.com/users'))

ob.subscribe(
    (x) => { console.log(x.data) },
    (err) => { console.log('error: ' + err) },
    () => { console.log('completed') }
)
*/