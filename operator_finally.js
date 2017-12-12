

/*Hot Observable
ถึงไม่มีการ subscribe ก็จะส่ง data
--------------*/

const { Observable, Subject } = require('rxjs')

let loading = false
const getData = () => Observable.of('Data')

const ob = Observable.of({})
    .do(
        () => 
        { 
            console.log('Start load data...') 
            loading = true
        }
    )
    .flatMap(getData)
    .finally(() => { loading = false})
    .subscribe(
        (x) => {console.log(x)},
        (err) => {console.log('Error: ' + err)},
        () => { console.log('completed')}
    )
 