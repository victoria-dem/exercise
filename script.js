function palindrome(passString) {
  const string = passString.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  if (string.length === 0 || typeof string !== "string") {
    return undefined;
  }
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string.charAt(i) !== string.charAt(string.length - i - 1)) {
      return false;
    }
    return true;
  }
}

// console.log(palindrome("О, лета тело!")); //true
// console.log(palindrome("топот")); // true
// console.log(palindrome("Saippuakivikauppias")); // true
// console.log(palindrome("привет")); // false

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("fizz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

function reverseWords(str) {
  const words = str.split(" ");
  let newString = "";
  for (let i = words.length - 1; i >= 0; i--) {
    i === 0 ? (newString += words[i]) : (newString += words[i] + " ");
  }
  return newString;
}

// более легкое решение
function reverseWords1(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseWords1('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
// console.log(reverseWords1('испробовать их все должны вы')); // "вы должны все их испробовать"

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

// Более правильное решение через set
function findVowels1(str) {
  let vowelsCount = 0;
  const letters = str.split("");
  const vowelsSet = new Set(["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"]);
  letters.forEach((letter) => {
    if (vowelsSet.has(letter)) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

// console.log(findVowels1('хеллоу')); // 3
// console.log(findVowels1('аааапрт')); // 4
// console.log(findVowels1('кокококо')); // 4

function uniq(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}
// Лучшее решение через set

function uniq1(arr) {
  const newSet = new Set();
  arr.forEach((element) => {
    newSet.add(element);
  });
  return Array.from(newSet);
}

// console.log(uniq1([1, 2, 3, 7, 7, 4, 5, 5, 1]));

function anagram(str1, str2) {
  const Str1 = str1.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");

  const Str2 = str2.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  const obj1 = new Object();
  const obj2 = new Object();
  for (let i = 0; i <= arrayStr1.length - 1; i++) {
    if (!normalStr2.includes(arrayStr1[i])) {
      return false;
    }
    return true;
  }
}

// решение чтобы избежать цикла в цикле через сравнивание объектов
function anagram1(str1, str2) {
  function toObject(string) {
    const object = new Object();
    const array = string.split("");
    array.forEach((elem) => {
      if (!object.hasOwnProperty(elem)) {
        object[elem] = 1;
      } else {
        object[elem] += 1;
      }
    });
    return object;
  }

  function shallowCompare(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
      return false;
    }
    key1.forEach((elem) => {
      if (obj1[elem] !== obj2[elem]) {
        return false;
      }
    });
    return true;
  }
  const strReady1 = str1.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  const strReady2 = str2.toLowerCase().replace(/[^A-Za-zА-Яа-я]/g, "");
  return shallowCompare(toObject(strReady1), toObject(strReady2));
}

//   console.log(anagram1("finder", "Friend")); // true
//   console.log(anagram1('hello', 'bye')); // false

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

//решение через рекурсию
function fibonacciRec(num) {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

// console.log(fibonacciRec(11))

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(n % i);
      return false;
    }
  }
  return true;
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
  if (n === 0) {
    return fact;
  }
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
// Решение через рекурсию
function factorialRec(n) {
  if (n === 1) {
    return 1;
  }
  return (n = n * factorialRec(n - 1));
}
//  console.log(factorialRec(6))

function intersection(arr1, arr2) {
  const newArr = [];
  arr1.forEach((element) => {
    arr2.forEach((elem2) => {
      if (element === elem2) {
        newArr.push(element);
      }
    });
  });
  return newArr;
}

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12])); // []

function countZeros(n) {
   let arrayStr = [];
   for (let i = 1; i <= n; i++) {
     arrayStr.push(i.toString());
   }
  return zeros = arrayStr.reduce((accumulator, currentValue) => {
     const isZeros = currentValue.match(/0/g);
    if (isZeros !== null) {
       return (accumulator + isZeros.length);
     }
     return accumulator
  }, 0);

}
// решение без приведения к строке

console.log(countZeros(200)); // 2 – два нуля, по одному в числах 10 и 20
// console.log(countZeros(200)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

function sumOfTwo(arr, num) {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}

// console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
// console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false

function primes(n) {
  const newArr = [];
  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        console.log(n % i);
        return false;
      }
    }
    return true;
  }
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      newArr.push(i);
    }
  }
  return newArr;
  return n.filter(isPrime);
}
// console.log(primes(6)); // [2, 3, 5]
// console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
