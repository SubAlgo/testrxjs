/*Full Function

const sum = (xs) => {
    if (xs.length === 0) {
        return 0
    }
    return xs[0] + sum(xs.slice(1))
}
--------------*/

/*Short Fucntion

const sum = (xs) => xs.length ? xs[0] + sum(xs.slice(1)) : 0
--------------*/

const sum = (xs) => {
    if (xs.length === 0) {
        return 0
    }
    console.log(xs[0])
    console.log('len : ' + xs.length)
    return sum(xs.slice(1))
}
(sum([1, 2, 3, 4, 5]))