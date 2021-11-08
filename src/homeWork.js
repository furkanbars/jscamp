//Verilen sayıların asal olup olmadığını kontrol eden fonksiyon
function isPrime(...numbers) {
    let primeNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            primeNumbers.push(numbers[i])
        }
    }

    console.log("Sayılar arasında asal olanlar: " + (primeNumbers))
}

isPrime(2,5,7,8,31,40,5,19)


//Parametre olarak verilen iki sayının kardeş sayı olup olmadığını kontrol eden fonksiyon
function isFriendNumbers(a,b) {
    let firstNumberTotal = 0
    let secondNumberTotal = 0

    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            firstNumberTotal += i
        }
    }

    for (let j = 0; j < b; j++) {
        if (b % j == 0) {
            secondNumberTotal += j
        }
    }

    console.log(firstNumberTotal == b && secondNumberTotal == a ? "Sayılar kardeş sayıdır." : "Sayılar kardeş sayı değildir!" )
}

isFriendNumbers(220,284)

//0'dan 1000'e kadar olan mükemmel sayılar
function allPerfectNumbers() {
    let perfectNumber = []

    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if (total == i) {
            perfectNumber.push(i)
        }
    }

    console.log("0'dan 1000'e kadar olan mükemmel sayılar şunlardır : " + perfectNumber)
}

allPerfectNumbers()

//0'dan 1000'e kadarki asal sayılar
function allPrimeNumbers() {
    let counter = 2
   
    let primeNumbers = []

    for (let i = 2; i < 1000;i++) {
        let isPrime = true
       for (let j = 2; j < i; j++) {
           if (i % j == 0) {
               isPrime = false
           }
       }
       if (isPrime) {
           primeNumbers.push(i)
       }
    }

    console.log(...primeNumbers)
}

allPrimeNumbers()
