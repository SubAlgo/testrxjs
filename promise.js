const add = (x,y) => {
    return new Promise((resolve, reject) => {
        //ย่อ return Promise.resolve(x + y)
        resolve(x+y)  
    })
}

const div = (x, y) => {
    if (y === 0) return Promise.reject('can not div by 0')
    return Promise.resolve(x / y)
}

div(1,2)
    .then((res) => {
        return div(res, 0)
    }, (err) => {
        console.log('error1 :' + err)
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log('error: ' + err)
    })

add(1,2)
    .then((res) => {
        return add(res,3)
    })
    .then((res) => {
        return console.log(res)
    })
    