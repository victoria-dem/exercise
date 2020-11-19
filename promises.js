/**
 * Создайте класс, обладающий следующим поведением:
 * const values = ['hello', 'javascript', 'world'];
 * const instances = values.map(str => new NumberAndString(str));
 *
 * const resultConcatenation = instances.join(' '); // == 'hello javascript world'
 * const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20
 * @class NumberAndString
 * @param {String} str - initial value
 */

class NumberAndString {
  constructor(str) {
      this._str = str;
  }
  toString() {
      return this._str;
  }
  valueOf() {
      return this._str.length;
  }
}


const values = ['hello', 'javascript', 'world'];


const instances = values.map(str => {
  return new NumberAndString(str);
});
const resultConcatenation = instances.join(' '); // == 'hello javascript world'
const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20

console.log("task 1 --",resultConcatenation,resultCharCount)




/**
 * Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
 * если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
 * В учебных целях для этой задачи просьба не использовать Promise.race.
 *
 * @param {Promise} promise исходный промис
 * @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
 * @return {Promise} промис с нужным поведением
 */
const rejectOnTimeout = function(promise,ms){
  // Create a promise that rejects in <ms> milliseconds
  let promiseRejected = new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('Timed out in ' + ms + 'ms.')
      }, ms)
  })
  let promisesArray = [promise, promiseRejected]
  function promiseRace(promisesArray) {
      return new Promise((resolve, reject) => {
          promisesArray.forEach((promise) => {
              Promise.resolve(promise)
                  .then(resolve) // resolve outer promise, as and when any of the input promise resolves
                  .catch(reject); // reject outer promise, as and when any of the input promise rejects
          });
      });
  }
  promiseRace(promisesArray).then(r => console.log(r)).catch(error=>console.log(error));
}
const newPromise = new Promise((resolve) => {
  setTimeout(()=>resolve(true), 2000)
})
// rejectOnTimeout(newPromise, 2300)  



/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((result) => {
        results.push(result);
        if (index === promises.length - 1) {
          resolve(results);
        }
      }).catch((err) => reject(err));
    });
  })
};

// let promise1 = Promise.resolve("promise1");
// let promise2 = Promise.reject(new Error("promise2_error"));


// promiseAll([promise1,promise2])
// .then (res => console.log(res))
// .catch (err => console.log(err));
  




/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.race,
 * которая возвращает в качестве результата промис c первым resolve value или reject value в массиве исходных промисов
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
        Promise.resolve(promise)
            .then(resolve) // resolve outer promise, as and when any of the input promise resolves
            .catch(reject); // reject outer promise, as and when any of the input promise rejects
    });
});
}

// const promiseFirst = new Promise((resolve) => {
//   setTimeout(()=>resolve("promise1 resolved"), 200)
// });
// const promiseSecond = new Promise((resolve) => {
//     setTimeout(()=>resolve("promise2 resolved"), 100)
//   });
// promiseRace([promiseFirst, promiseSecond])
//   .then (res => console.log(res))
//   .catch (err => console.log(err));
