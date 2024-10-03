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
    return (((a/1) | 0)+c)
}

console.log(euc(-687194767555.6))