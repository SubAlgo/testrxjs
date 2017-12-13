//1.29


const { Observable, Subject, BehaviorSubject } = require('rxjs')
const axios = require('axios')

/*New Subject
------------*/
const query$ = new Subject()
const page$ = new BehaviorSubject(1)


const search = (q, page) => Observable.fromPromise(axios
    .get(
    'https://api.github.com/search/repositories?q=${q}&page=${page}'))

    //รวม query$ กับ page$
Observable.combineLatest(
    query$,
    page$
)
    .debounceTime(100)
    .do((q, page) => { console.log('start ' + q + ' page ' + page) })
    .flatMap(([q,page]) => search(q, page), (q, resq) => Object.assign({}, resq, { q }))
    .do((resq) => { console.log('finished ' + resq.q) })
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
    () => { console.log('Completed') }
    )

query$.next('rxjs')
page$.next(2)
//query$.next('golang')

