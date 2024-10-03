package main

import "fmt"

func main(){
	fmt.Println(ItoaBase(-2147483648,16))
}

func ItoaBase(value, base int) string {
	bs := "0123456789ABCDEF"
	k, t, n := "","", value
	for value != 0 {
		k += string(bs[Abs(value%base)])
		value /= base
	}
	for i := len(k) - 1; i >= 0; i-- {
		t += string(k[i])
	}
	if n < 0 {
		return "-" + t
	}
	return t
}

func Abs(s int) int {
	if s < 0 {
		return -s
	}
	return s
}
