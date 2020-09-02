function palindrome(passString) {
  const string = passString.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  if (string.length == 0 || typeof string !== "string") {
    return undefined;
  } else {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      if (string.charAt(i) !== string.charAt(string.length - i - 1)) {
        return false;
      }
      return true;
    }
  }
}

// console.log(palindrome("О, лета тело!")); //true
// console.log(palindrome("топот")); // true
// console.log(palindrome("Saippuakivikauppias")); // true
// console.log(palindrome("привет")); // false

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      console.log("fizz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else console.log(i);
  }
}

// fizzBuzz(15);

function reverseWords(str) {
  const words = str.split(" ");
  let newString = "";
  for (let i = words.length - 1; i >= 0; i--) {
    i == 0 ? (newString += words[i]) : (newString += words[i] + " ");
  }
  return newString;
}

// console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
// console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"

function capitalize(str) {
  function replacer(match) {
    return match.toUpperCase();
  }
  return str.replace(/^[a-zа-я]|\s+[a-zа-я]/g, replacer);
}

// console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"

function findVowels(str) {
  var vowelsCount = 0;
  let letters = str.split("");
  let vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}
// console.log(findVowels('здравствуй')); // 2
// console.log(findVowels('привет')); // 2
// console.log(findVowels('хеллоу')); // 3

function uniq(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

// console.log(uniq([1, 2, 3, 7, 7, 4, 5, 5, 1]));

function anagram(str1, str2) {
  const arrayStr1 = str1
    .toLowerCase()
    .replace(/[^A-Za-zА-Яа-я]/g, "")
    .split("");
  const normalStr2 = str2.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  for (let i = 0; i <= arrayStr1.length - 1; i++) {
    if (!normalStr2.includes(arrayStr1[i])) {
      console.log("f");
      return false;
    }
    return true;
  }
}

// console.log(anagram('finder', 'Friend')); // true
// console.log(anagram('hello', 'bye')); // false

function fibonacci(num) {
  let fibonacciPrevios = 0;
  let fibonacciCurrent = 1;
  let fibonacciNext = 1;
  for (let i = 2; i <= num; i++) {
    fibonacciNext = fibonacciPrevios + fibonacciCurrent;
    fibonacciPrevios = fibonacciCurrent;
    fibonacciCurrent = fibonacciNext;
  }
  return fibonacciPrevios;
}

// console.log(fibonacci(7));

function isPrime(n) {
  if (n < 2) {
    return false;
  } 
  if (n == 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        console.log(n % i);
        return false;
      }
    }
    return true;
  }
}

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(17));
// console.log(isPrime(17));
// console.log(isPrime(23));
// console.log(isPrime(24));

function factorial(n) {
  let fact = 1;
  if (n == 0) {
    return fact;
  } else {
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
  }
  return fact;
}

// console.log(factorial(6))

function intersection(arr1, arr2) {
  let newArr = [];
  arr1.forEach((element) => {
    for (let i = 0; i <= arr2.length; i++) {
      if (element === arr2[i]) {
        newArr.push(element);
      }
    }
  });
  return newArr;
}

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12])); // []

function countZeros(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let string = i + "";
    if (string.includes("0")) {
      count++;
    }
  }
  return count;
}

// console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
// console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

function sumOfTwo(arr, num) {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] == num) {
        return true;
      }
    }
  }
  return false;
}

// console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
// console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false

function primes(n) {
  let newArr = [];
  function isPrime(n) {
    if (n < 2) {
      return false;
    } 
    if (n == 2) {
      return true;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          console.log(n % i);
          return false;
        }
      }
      return true;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}
// console.log(primes(6)); // [2, 3, 5]
// console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]