function getNthFibonacci(conut) {
    let lastCount = 0;
    let index = conut;
    let a = [1, 1]
    for (i = 2; i <= index; i++) {
        a[i] = a[i - 1] + a[i - 2]; //a1=1+0; a2=1+1
    }
    return a[index]
}
// console.log(getNthFibonacci(0));
// console.log(getNthFibonacci(4));
// console.log(getNthFibonacci(5));
// console.log(getNthFibonacci(6));