window.onload = function () {
    Particles.init
        ({
            selector: '.background'
        });
};


const arr = [5, 3, 2, 1, 4];

function removeSmallest(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    let arrTemp = [...numbers];
    // console.log(arrTemp);
    arrTemp.splice(arrTemp.indexOf(min), 1);

    // console.log(arrTemp);
    // console.log(min);
}
removeSmallest(arr);


//  function which takes a list of strings and returns each line prepended by the correct number.
let arrstr = ["a", "b", "c"];
function number(array) {
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            array.splice(i, 1, `${i + 1}: ${array[i]}`);
        }
        // return (console.log(array));
    }
    else {
        return ([]);
    }
}
number(arrstr);

// function that returns both the minimum and maximum number of the given list/array.
let arrN = [1, 2, 3, 4, 5];
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // return [min, max];
    // return(console.log( [min, max])); 
}
minMax(arrN);

// function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
let arrS = ['', 'Moderately', 'Brains', 'Pizza'];
function sortByLength(array) {
    let obj1 = {};
    for (let i = 0; i < array.length; i++) {
        obj1[array[i].length] = array[i];
    }
    // console.log(Object.values(obj1));
    // let sortByLength = arr => arr.sort((a,b) => a.length - b.length);


    // for (let i = 0; i < array.length; i++) {
    //     array.splice(i, 1, `${array[i].length}: ${array[i]}`)
    // }
    // array.sort(function (a, b) {
    //     if(a < b){
    //         return -1
    //     }
    //     })
    // for (let i = 0; i < array.length; i++) {
    //     array.splice(i, 1, `${array[i].split(' ')[1]}`)
    // }

    // return(console.log(array) );
};
sortByLength(arrS);

// return the two oldest/oldest ages within the array of ages passed in.
const arrOld = [6, 5, 83, 5, 3, 18];
function twoOldestAges(ages) {
    ages.sort(function (a, b) {
        if (a < b) {
            return -1
        }
    });

    return ([ages[ages.length - 2], ages[ages.length - 1]]);

    // console.log([ages[ages.length - 2], ages[ages.length -1]])
}

// return ages.sort(function(a,b){return a-b;}).slice(-2);
twoOldestAges(arrOld);

// compare two array like an axam.
const arrEx1 = ["c", "b", "b", "b", "a", "c", "c", "a", "b", "c", "b", "b", "a", "b", "b", "a", "c", "c", "b"];
const arrEx2 = ["a", "b", "b", "", "c", "b", "c", "b", "c", "a", "a", "a", "", "a", "a", "b", "c", "b", ""];

function checkExam(array1, array2) {

    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") { count += 0 }
        else if (array1[i] === array2[i]) { count += 4 }
        else if (array1[i] != array2[i]) { count -= 1 }

    }

    if (count < 0) return 0;
    // console.log(count);
    return (count);


}
// checkExam=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)
// ===
// let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c + 4 : c - 1) : c, 0);
// return result < 0 ? 0 : result;
checkExam(arrEx1, arrEx2)

// summing the weights of the two teams
const arrW = [80];
function rowWeights(array) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            count1 += array[i]
            // console.log(i, count1, array[i]);
        }
        else {
            count2 += array[i]
        }
    }

    return (count1, count2);
    // console.log(count1, count2)
}
// let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
// let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);
// ======
// rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])
// ======
// const rowWeights = arr => arr.reduce((a, w, i) => (a[i%2]+=w, a), [0, 0]);
rowWeights(arrW);



// return the flattened version of the array with all the integers in the sorted (ascending) order.
"use strict";
const arrAnd = [[], [1]];
function flattenAndSort(array) {
    let arrNew = [];
    for (let i = 0; i < array.length; i++) {
        arrNew.push(...array[i])
    }
    arrNew.sort(function (a, b) { return a - b; })
    // console.log(arrNew);
    return arrNew;
}
// return [].concat(...array).sort((a,b) => a - b);
// =========
//   return array
// .reduce((result, current) => [...result, ...current], [])
// .sort((a, b) => a - b);
// =========
// const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);
// =========
// const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)
flattenAndSort(arrAnd);


// sorting data in object.
const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
function countDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent == 'Europe' && list[i].language == 'JavaScript') { count++ }
    }
    // console.log(count)
    return (count);
}
// return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
// =========
// return list
//     .filter(dev => dev.language === "JavaScript")
//     .filter(dev => dev.continent === "Europe")
//     .length
countDevelopers(list1);


// Sorted And How: ascending or descending or not
// const arrSr = [15, 7, 3, -8];
const arrSr = [1, 2];

function isSortedAndHow(array) {
    let arrNew = [];
    let answer = '';
    arrNew = array.slice();
    arrNew.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === arrNew[i]) {
            answer = 'yes, ascending';
            // console.log(answer);
            return answer;
        }
        else {
            answer = 'no';
            break
        };
    }
    for (let i = 0; i < array.length; i++) {
        arrNew.sort((a, b) => b - a);
        if (array[i] === arrNew[i]) {
            // answer = 'yes, descending';
            console.log(answer);
            return answer;
        }
        else {
            answer = 'no';
            break
        };
    }
    // console.log(answer);
    return answer;
}
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
// arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no'
// =========
// switch (JSON.stringify(array)) {
//     case JSON.stringify(array.sort((a, b) => a - b)): return 'yes, ascending';
//     case JSON.stringify(array.sort((a, b) => b - a)): return 'yes, descending';
//     default: return 'no';
// }
isSortedAndHow(arrSr);


// array differences
const arrToS1 = [1, 2, 2];
const arrToS2 = [2];
function arrayDiff(arr1, arr2) {
    let temp1 = 0, temp2 = {}, out = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k]) {
                temp1 = 1;
            }
        }
        if (temp1 != 1) { out.push(arr1[i]) };
        temp1 = 0;
        // console.log(out)
    }
    return out;
}
// return a.filter(e => !b.includes(e));
// =========
// return a.filter(function(x) { return b.indexOf(x) == -1; });
// =========
// var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0)
arrayDiff(arrToS1, arrToS2);



// const names = ['vLadiMir', 'maRk', 'LoGAn', 'VicTOr', 'mAks', 'KaTe', 'alEx'];
// names.forEach((item, i) => {
//     names[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });


// returns a string in the form of a phone number.
let arrTel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//  "(123) 456-7890"
function createPhoneNumber(numbers) {
    // console.log(`"(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}"`)
    return (`"(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}"`);
}
// return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// ==========
// var format = "(xxx) xxx-xxxx";
// for (var i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
// }
// return format;
// ==========
// return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// ==========
// return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
createPhoneNumber(arrTel);



// find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right
// arr.reduce(function(a,b){return(a+b)})
// const count = (arr) => arr.reduce((acc, num) => acc + num, 0);
const arrSum = [1, 2, 3, 4, 3, 2, 1];
function findEvenIndex(arr) {
    let arr1 = [], arr2 = [], sum1 = 0, sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        i === 0 ? arr1 = arr.slice(0, 0) : arr1 = arr.slice(0, i);
        // console.log(i, arr1);
        arr2 = arr.slice(i + 1, arr.length);
        // console.log(arr2);
        sum1 = arr1.reduce(function (a, b) { return (a + b) }, 0);
        // console.log('sum1-->',sum1);
        sum2 = arr2.reduce(function (a, b) { return (a + b) }, 0);
        // console.log('sum2-->', sum2);
        if (sum1 === sum2) {
            // console.log(i);
            return i;
        }
    }
    // console.log("-1");
    return -1;
}
findEvenIndex(arrSum);


// Try to find unique number.
let arrAn = [3, 10, 3, 3, 3];
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] !== arr[1]) {
        // console.log(arr[0]);
        return arr[0];
    }
    if (arr[arr.length - 2] !== arr[arr.length - 1]) {
        // console.log(arr[arr.length-1])
        return arr[arr.length - 1];
    }
}
findUniq(arrAn);

// find two different items in the array that, when added together, give the target value.
let arrNu = [1, 2, 3];
let targ = 4;
function twoSum(numbers, target) {
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
        temp = target - numbers[i];
        // console.log('temp=',i, temp);
        for (let k = 0; k < i; k++) {
            // console.log('k-->',k);
            if (temp === numbers[k]) {
                // console.log(i,k);
                return ([i, k]);
            }
        }
        for (let k = i + 1; k < numbers.length; k++) {
            // console.log('k==>', k);
            if (temp === numbers[k]) {
                // console.log(i,k);
                return ([i, k]);
            }
        }
    }
}
twoSum(arrNu, targ);

// a pseudo-encryption algorithm
let strTest = "hskt svr neetn!Ti aai eyitrsig";
let n = 1;
function encrypt(text, n) {
    let im = text;
    let out = '';
    if (n <= 0 || text === null || text === "") {
        out = text;
        console.log(out);
        return out;
    }
    else {
        for (k = 0; k < n; k++) {
            out = '';
            for (let i = 1; i < text.length; i += 2) { out += im[i] }
            for (let i = 0; i < text.length; i += 2) { out += im[i] }
            im = out;
        }
    }
    console.log(out);
    return out;
}

function decrypt(encryptedText, n) {
    let im = encryptedText;
    let out = '';
    let begin = Math.floor(encryptedText.length / 2);
    console.log(begin);
    console.log(encryptedText.length);
    if (n <= 0 || encryptedText === null || encryptedText === "") {
        out = encryptedText;
        console.log(out);
        return out;
    }
    else {
        for (k = 0; k < n; k++) {
            out = '';
            let count = 0;

            for (let i = begin; i < encryptedText.length; i++) {
                out += im[i];
                if (encryptedText.length % 2 != 0) {
                    if (count < encryptedText.length - begin - 1) {
                        out += im[count];
                    }
                }
                else {
                    if (count < encryptedText.length - begin) {
                        out += im[count];
                    }
                }
                count++;
            }


            // if (encryptedText.length % 2 === 0) {
            //     for (let i = begin; i < encryptedText.length; i++) {
            //         out += im[i];
            //         out += im[count];
            //         count++;
            //     }
            // }
            // else {
            //     for (let i = begin; i < encryptedText.length; i++) {
            //         console.log(i, im[i], count, im[count])
            //         out += im[i];
            //         out += im[count];
            //         count++;
            //     }
            // }
            im = out;
        }
    }
    console.log(out);
    return out;
}
// encrypt(strTest, n);

// decrypt(strTest, n);


// "g".charCodeAt()
// create secret messages.

let textToEn = "The more he saw the less he spoke";
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var encryptThis = function (text) {
    let a = [];
    let b = '';
    let c = '';
    let d = '';

    a = text.split(" ");
    for (let i = 0; i < a.length; i++) {
        if (a[i][1] && a[i][2]) {
            b = a[i][1];
            c = a[i][a[i].length - 1];
            // d = a[i].replaceAt(a[i].length - 1, b).replaceAt(1, c)
            a[i] = a[i].replaceAt(a[i].length - 1, b).replaceAt(1, c)
        }
        b = a[i][0].charCodeAt().toString();
        c = a[i][0];
        a[i] = a[i].replace(c, b);
        b = a.join(" ");
    }
    // console.log(b);
    return b;
}

encryptThis(textToEn);



// array that has 1 added to the value represented by the array.
let arrToAdd = [];
function upArray(arr) {
    let copy = [];
    let newAr = [];
    let isZero = 0;
    // let b = 0;
    let c = [];
    let lengt = arr.length;
    console.log(lengt);
    if (lengt === 0) {
        console.log(null)
        return null;
    }

    for (let i = 0; i < lengt; i++) {
        if (arr[i] > 9 || arr[i] < 0 || arr[i] === "") return null;
    }
    // Здесь преобразовуем часть массива в число.
    // for (let i = 0; i < 2; i++) {
    //     console.log('i====', i, arr[lengt - 1 - i]);
    //     if (arr[lengt - 1 - i] >= 0) {
    //         console.log('i-----', i);
    //         console.log('index', lengt - 1 - i, arr[lengt - 1 - i]);
    //         a += (arr[lengt - 1 - i] * 10 ** i);
    //         copy.pop(arr[lengt - 1 - i])
    //         console.log('COPY====',copy, a);

    // a += arr.pop(arr[lengt - 1 - i] ) * 10 ** i;
    // console.log(a);
    // }
    // }

    copy = [...arr];
    console.log(copy);

    if ((arr[lengt - 1] + 1) <= 9) {
        copy.pop(arr[lengt - 1]);
        newAr.push(arr[lengt - 1] + 1);
        console.log([...copy, ...newAr])
        c = [...copy, ...newAr];
        return (c);
    }
    else {
        isZero = 1;
        for (let i = 0; i < lengt; i++) {
            console.log('i==', i);

            if ((arr[lengt - 1 - i] + isZero) <= 9) {

                console.log('I===', i);
                copy.pop(arr[lengt - 1 - i]);
                newAr.push(arr[lengt - 1 - i] + isZero);
                isZero = 0;
                console.log('==>', i, isZero, arr[lengt - 1 - i], copy, newAr);
                console.log([...copy, ...newAr.reverse()])
                c = [...copy, ...newAr.reverse()];
                return (c);
            }
            else {
                if (i === (lengt - 1) && isZero === 1) {
                    copy.pop(arr[lengt - 1]);
                    newAr.push(0);
                    newAr.push(1);
                    console.log([...copy, ...newAr.reverse()])
                    c = [...copy, ...newAr.reverse()];
                    return (c);
                }
                console.log('I++++', i);
                copy.pop(arr[lengt - 1 - i]);
                newAr.push(0);
                // isZero = 1;
                console.log(copy, newAr, isZero);

            }
            console.log('I++!+', i, lengt - 1);
        }
    }

}
// upArray(arrToAdd);


// method, that return the length of the missing array.
let arrayOfArrays = [[], [2, 1, 0, 1], [4], [1, 4], [4, 3, 1, 0, 4, 4, 4, 1, 4, 1], [4, 0, 3], [2, 4, 0, 3, 4], [3, 0, 1, 3, 0, 2], [4, 4, 0, 2, 1, 2, 1], [4, 3, 3, 1, 1, 4, 3, 3]];
function getLengthOfMissingArray(arrayOfArrays) {
    let a = [];
    if (arrayOfArrays == null || arrayOfArrays.length === 0) {
        console.log('==', 0);
        return 0;
    }
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i] == null || arrayOfArrays[i].length === 0) {
            console.log('==-', 0);
            return 0;
        }
        a.push(arrayOfArrays[i].length);
    }
    let min = Math.min(...a);
    a.sort((a, b) => a - b);
    console.log(a)
    for (let i = 0; i < a.length; i++) {
        // console.log(i,a[i]);
        console.log(a[i], i + min);
        if (a[i] != i + min) {
            console.log(a[i], i + min);
            console.log('-->', i + min);
            return i + min
        }
    }
}
// getLengthOfMissingArray(arrayOfArrays);

// to return all pairs of integers from a given array of integers that have a difference of 2.
// creation araray of arrays.
let ddd = [1, 3, 4, 6];
function twosDifference(input) {
    let arr = [];
    let out = [];
    let count = 0;

    input.sort((a, b) => a - b);
    for (let i = 0; i < input.length; i++) {
        // console.log('==>',i,input[i]);
        if (input.includes(input[i] + 2)) {
            // console.log(i, input[i]);
            // arr.push(input[i]);
            // arr.push(input[i] +2);
            arr[0] = input[i];
            arr[1] = input[i] + 2;
            out[count] = [...arr];
            count++;
            // console.log(i,out[i])
            // out2.push(out);
            // out.splice(-1, 0, ...out.splice(-1, 1, arr))
            // console.log(out.splice(-1, 1, arr))
            // console.log(out);
            // console.log(out2);
        }
        // out.splice(-1, 0, ...out.splice(-1, 1, arr))
    }
    // console.log(arr);
    console.log(out);
    return out;
}
// twosDifference(ddd);

// sort elements in an array by decreasing frequency of elements.
let arrSolv = [0,
    1,
    1,
    1,
    8,
    10,
    10,
    11,
    49];
function solve(arr) {
    console.log(arr);
    let outSol = {};
    let outArr = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        outSol[arr[i]] ? outSol[arr[i]] += 1 : outSol[arr[i]] = 1;
    }
    // console.log('outSol==', outSol);

    for (let [keys, values] of Object.entries(outSol)) {
    }

    // const treg = Object.values(outSol).sort(function (a, b) { return b - a  })
    // console.log('TREG', treg);
    // for (let j = 0; j < treg.length; j++) {
    //     for (let k in outSol) {
    //         if (outSol[k] === treg[j]) {
    //             for (let i = 0; i < treg[j]; i++) outArr.push(k);
    // console.log('iiiiiiii', list[k], k, keysSorted[j])
    //             delete outSol.k;
    //         }
    //     }
    // }
    // console.log(outArr);
    const treg = Object.values(outSol).sort(function (a, b) { return b - a });
    for (let j = 0; j < treg.length; j++) {
        for (let [keys, values] of Object.entries(outSol)) {
            if (values === treg[j]) {
                for (let i = 0; i < treg[j]; i++) outArr.push(+keys);
                delete outSol[keys];
            }
        }
    }
    console.log(outArr);
    return outArr;

    // const sortedValues = Object.keys(outSol)
    //     .sort((a, b) => outSol[b] - outSol[a])
    //     .reduce((rslt, key) => rslt.set(key, outSol[key]), new Map());
    // console.log('==++==++', sortedValues);
    // for (const [keys, values] of sortedValues.entries()) {
    //     console.log('obj', keys, values)
    //     for (let i = 0; i < values; i++) {
    //         outArr.push(+keys);
    //     }
    // }
    // console.log(outArr);

    console.log([{ name: "John", id: 7 }, { name: "John", id: 4 }, { name: "Adam", id: 3 }, { name: "Adam", id: 30 }, { name: "Rose", id: 1 }].sort(function (a, b) {
        return (b.name < a.name) - (a.name < b.name) || (b.id < a.id) - (a.id < b.id);
    }))
}
// var r = {}
// for (var n of arr) r[n] = r[n] + 1 || 1
// return arr.slice().sort((a, b) => r[b] - r[a] || a - b)
// ===========
// let dict = new Map()
// for (let x of arr) {
//     dict.set(x, (dict.get(x) || 0) + 1)
// }
// return arr.sort((x, y) => {
//     let n = dict.get(x)
//     let m = dict.get(y)
//     return n === m ? x - y : m - n
// })
// ===========
// return arr.map(elem => [elem, arr.filter(num => num == elem).length])
//     .sort((a, b) => b[1] - a[1] || a[0] - b[0])
//     .map(x => x[0])
// ===========
// let obj = {}
// arr.forEach(item => obj[item] = (obj[item] + 1 || 1))
// return arr.sort((a, b) => obj[b] === obj[a] ? a - b : obj[b] - obj[a])
// ===========
// (obj => arr.sort((a, b) => obj[b] - obj[a] || a - b))
//     (arr.reduce((pre, val) => ({ ...pre, [val]: -~pre[val] }), {}));
// ===========
// solve(arrSolv);

var list = { "you": 3, "me": 5, "foo": 11, "bar": 7 };
let listOut = [];
// keysSorted = Object.values(list).sort(function (a, b) { return list[b] - list[a]  })
let keysSorted = Object.values(list).sort(function (a, b) { return b - a });
// console.log(keysSorted); 
for (let j = 0; j < keysSorted.length; j++) {
    for (let k in list) {
        // console.log(k,list[k]);
        if (list[k] === keysSorted[j]) {
            for (let i = 0; i < keysSorted[j]; i++) listOut.push(k);
            // console.log('iiiiiiii', list[k], k, keysSorted[j])
            delete list.k;
        }
    }
}

// true if developers from all of the following age groups have signed up
let list11 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
function isAgeDiverse(list) {
    // console.log(list[0].age);
    let obj = {};
    for (let i = 0; i < list.length; i++) {
        console.log(i);
        if (list[i].age >= 10 && list[i].age <20) {
            obj.teens = 1;
        }
        else if (list[i].age >= 20 && list[i].age < 30) {
            obj.twenties = 1;
        }
        else if (list[i].age >= 30 && list[i].age < 40) {
            obj.thirties = 1;
        }
        else if (list[i].age >= 40 && list[i].age < 50) {
            obj.fourteens = 1;
        }
        else if (list[i].age >= 50 && list[i].age < 60) {
            obj.fifteens = 1;
        }
        else if (list[i].age >= 60 && list[i].age < 70) {
            obj.sixteens = 1;
        }
        else if (list[i].age >= 70 && list[i].age < 80) {
            obj.seventeens = 1;
        }
        else if (list[i].age >= 80 && list[i].age < 90) {
            obj.eighteens = 1;
        }
        else if (list[i].age >= 90 && list[i].age < 100) {
            obj.nineteens = 1;
        }
        else if (list[i].age >= 100) {
            obj.hundred = 1;
        }
    }
    console.log(Object.keys(obj))
    if (Object.keys(obj).length < 10) {
        console.log("false");
        return false;
    }
    else {
        console.log("true");
        return true;
    }
}
//   return list.some(h => h.age >= 100)
//   ?[10, 20, 30, 40, 50, 60, 70, 80, 90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
//   : false;
// =============================
// var dec = [/0?\d/, /^1\d$/, /2\d/, /3\d/, /4\d/, /5\d/, /6\d/, /7\d/, /8\d/, /9\d/, /1\d\d/];
// return dec.every(x => list.some(y => x.test(y.age)));
// =============================
// isAgeDiverse(list11);

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher
var list12 = [{ "firstName": "Mariami", "lastName": "G.", "country": "Georgia", "continent": "Europe", "age": 29, "language": "JavaScript" }, { "firstName": "Hanna", "lastName": "L.", "country": "Hungary", "continent": "Europe", "age": 29, "language": "Python" }, { "firstName": "Nareh", "lastName": "Q.", "country": "Armenia", "continent": "Europe", "age": 30, "language": "Python" }, { "firstName": "Nor", "lastName": "E.", "country": "Malaysia", "continent": "Asia", "age": 21, "language": "JavaScript" }, { "firstName": "Sofia", "lastName": "I.", "country": "Argentina", "continent": "Americas", "age": 35, "language": "JavaScript" }, { "firstName": "Althea", "lastName": "I.", "country": "Philippines", "continent": "Asia", "age": 31, "language": "Python" }, { "firstName": "Louise", "lastName": "F.", "country": "France", "continent": "Europe", "age": 22, "language": "Python" }, { "firstName": "Emma", "lastName": "B.", "country": "Norway", "continent": "Europe", "age": 19, "language": "Ruby" }, { "firstName": "Jakub", "lastName": "I.", "country": "Slovakia", "continent": "Europe", "age": 28, "language": "Python" }, { "firstName": "Nikola", "lastName": "H.", "country": "Serbia", "continent": "Europe", "age": 29, "language": "Ruby" }, { "firstName": "Alexander", "lastName": "F.", "country": "Russia", "continent": "Europe", "age": 89, "language": "Python" }, { "firstName": "Chloe", "lastName": "K.", "country": "Guernsey", "continent": "Europe", "age": 28, "language": "Python" }, { "firstName": "Manuel", "lastName": "C.", "country": "Equatorial Guinea", "continent": "Africa", "age": 22, "language": "Ruby" }, { "firstName": "Andrei", "lastName": "E.", "country": "Romania", "continent": "Europe", "age": 19, "language": "JavaScript" }, { "firstName": "Oliver", "lastName": "Q.", "country": "Australia", "continent": "Oceania", "age": 19, "language": "Python" }, { "firstName": "Maria", "lastName": "S.", "country": "Peru", "continent": "Americas", "age": 30, "language": "JavaScript" }, { "firstName": "Mohammad", "lastName": "N.", "country": "United Arab Emirates", "continent": "Asia", "age": 39, "language": "Python" }, { "firstName": "Maia", "lastName": "S.", "country": "Tahiti", "continent": "Oceania", "age": 28, "language": "JavaScript" }, { "firstName": "Fatima", "lastName": "H.", "country": "Pakistan", "continent": "Asia", "age": 28, "language": "Python" }, { "firstName": "Noah", "lastName": "M.", "country": "Switzerland", "continent": "Europe", "age": 19, "language": "JavaScript" }, { "firstName": "Noel", "lastName": "O.", "country": "Albania", "continent": "Europe", "age": 23, "language": "Python" }, { "firstName": "Fatima", "lastName": "A.", "country": "Algeria", "continent": "Africa", "age": 25, "language": "JavaScript" }, { "firstName": "Laia", "lastName": "P.", "country": "Andorra", "continent": "Europe", "age": 55, "language": "Ruby" }];
function isLanguageDiverse(list) {
    let obj = {};
    for (let i = 0; i < list.length; i++) {
        if (list[i].language == 'Python') {
            obj.python ? obj.python++ : obj.python = 1;
        }
        else if (list[i].language == 'Ruby') {
            obj.ruby ? obj.ruby++ : obj.ruby=1;
        }
        else if (list[i].language == 'JavaScript') {
            obj.javascript ? obj.javascript++ : obj.javascript=1;
        }
    }
    console.log(obj);
    console.log(Object.values(obj).sort(function (a, b) { return a - b } ));
    let a = Object.values(obj).sort(function (a, b) { return a - b });
    if (a[a.length-1] / a[0] <= 2) {
        // console.log("true");
        return true;
    }
    else {
        // console.log("false");
        return false;
    }
}
// isLanguageDiverse(list12);

// function that adds the username property to each object
var list13 = [{ "firstName": "Harry", "lastName": "K.", "country": "Brazil", "continent": "Americas", "age": 19, "language": "Python" }];
function addUsername(list) {
    for (let i = 0; i < list.length; i++) {
        let a = list[i].firstName.toLowerCase();
        let b = list[i].lastName.toLowerCase();
        let c = new Date().getFullYear() - list[i].age;
        
        list[i].username = a + b[0] + c;
    }
    console.log(list);
    return (list);
}
// return list.map(function (x) {
//     x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (new Date().getFullYear() - x.age);
//     return x;
// =========================
// const addUsername = (list, year = new Date().getFullYear()) =>
//     list.forEach(x =>
//         x.username = `${x.firstName.toLowerCase()}${x.lastName[0].toLowerCase()}${year - x.age}`
//     ) || list;
// addUsername(list13);
// function that does with an array/list/vector of integers and the expected number n of smallest elements to return.
let list15 = [-4, 9, 3, 10, -10, -8, 0, 3, -9, 9, -9, 7, 4, 9, -3, -2, -4, -10, 1, -7, 1, 1]
let n15 = 19;
function firstNSmallest(array, n) {
    let out = [];
    if(n == 0) return([]);
    let b = [...array].sort(function (a, b) { return a - b });
    let a = b.splice(0,19);
    
    // console.log(a);
    // console.log(b);
        for (let j = 0; j < array.length; j++) {
            
            for (let i = 0; i < n; i++) {
                console.log(j, i, array[j], a[i]);
                if (array[j] == a[i]) {
                out.push(array[j]);
                a.splice(i, 1);
                console.log(out, a)
                // continue;
                break
            }
            }
            if (out.length == n) {
                console.log(out);
                return(out);
            }
        }
}
firstNSmallest(list15, n15);