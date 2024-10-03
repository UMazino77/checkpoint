const sign = (s) => {
    if (s > 0) {
        return 1
    } else if (s < 0) {
        return -1
    } else {
        return 0
    }
}

const sameSign = (s, t) => {
    return (sign(s) == sign(t))
}

const multiply = (a, b) => {
    let res=0
    for (let i=0; i<Math.abs(b);i++) {
            res += a
    }
    if (!sameSign(a,b)) {
        return -(Math.abs(res))
    } 
    return Math.abs(res)
} 

const divide = (a, b) => {
    if (Math.abs(a)<Math.abs(b)) {
        return 0
    }
    let res=0
    for (let i=1 ; multiply(i,Math.abs(b))<=Math.abs(a);i++ ) {
        res = i
    }
    if (!sameSign(a,b)) {
        return -res
    } 
    return res
} 

const modulo = (a, b) => {
    return (a-multiply(divide(a,b),b))
} 

const euc = (a,c=0) => {
if (a >= 2147483647) {
    a -= 2147483647
    c += 2147483647
    return euc(a,c)
} else if (a <= -2147483648) {
    a += 2147483648
    c -= 2147483648
    return euc(a,c)
}
    return ((divide(a,1))+c)
}

console.log(euc(-687194767555.6))