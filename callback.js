const add = (x, y, cb) => {
    cb(x+y)
} 

const div = (x, y, cb) => {
    if (y === 0) {
        cb('can not div by 0')
    }
    cb(null, x / y)
}

add(1, 2, (res) => {
    add(res,3,(res) => {
        add(res,4,(res) => {
            console.log(res)
        })
    })
})

div(10,0, (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(res)
})