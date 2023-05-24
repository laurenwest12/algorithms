const fib = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

// 1 + 2 + 3 = 6
console.log(fib(3));
