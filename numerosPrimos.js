export function solution(n) {
  const esPrimo = new Array(n + 1).fill(true);
  esPrimo[0] = esPrimo[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (esPrimo[i]) {
      for (let j = i * i; j <= n; j += i) {
        esPrimo[j] = false;
      }
    }
  }

  const primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo[i]) {
      primos.push(i);
    }
  }

  return primos;
}
