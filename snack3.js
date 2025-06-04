const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2)

const somma = (num1, num2) => num1 + num2

console.log(eseguiOperazione(1, 2, somma))