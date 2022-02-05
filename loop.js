// breaks at fib(79) and onwards

function fib(n) {
    if (n === 0) {
        return 0;
    } else {
        let prev = 0, final = 1, store = 0;
        for (let i = 0; i < n - 1; i = i + 1) {
            store = prev;
            prev = final;
            final = final + store;
        }
        return final;
    }
}
