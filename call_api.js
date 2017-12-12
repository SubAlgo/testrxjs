//1.29


const { Observable, Subject, BehaviorSubject } = require('rxjs')
const axios = require('axios')

/*New Subject
------------*/
const query$ = new Subject()
const page$ = new BehaviorSubject(1)
//const oreder$ = new Subject()

const search = (q) => Observable.fromPromise(axios
    .get(
    'https://api.github.com/search/repositories?q=${q}',
    //{ query: { q } }
    ))

    query$
    .do((q) => { console.log('start ' + q)} )
    /*Object.assign({}, resq, { q }) คือ สร้าง obj ขึ้นมา1อัน เอาทุกอย่างใน  resq ใส่เข้าไปใน obj และเอาทุกอย่างใน q ใส่เข้าไปใน obj
    ---------------------------------------------------------------------------------------------------------------*/
    .flatMap((q) => search(q), (q, resq) => Object.assign({}, resq, { q }))  
    .do((resq) => { console.log('finished ' + resq.q)})
    .map((resq) => resq.data)
    .map((data) => data.items)
    .flatMap((items) => Observable.from(items))
    .map((item) => item.name)
    .subscribe(
        (item) => {
            console.log(item)
        },
        (err) => {
            console.log('Error: ' + err)
        },
        () => { console.log('Completed')}
    )

    query$.next('rxjs')
    query$.next('golang')

