window.onload= function () {
        Particles.init
            ({
                selector:'.background'
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
function number (array) {
    if (array.length) {
    for (let i = 0; i < array.length; i++) {
        array.splice(i, 1, `${i+1}: ${array[i]}`);
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
            min=arr[i]
        }
        if (arr[i] > max) {
            max= arr[i];
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
        if(a < b){
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
        if (array2[i] === "") {count+=0}
        else if (array1[i] === array2[i]) {count+=4}
        else if (array1[i] != array2[i]) {count-=1}
        
    }
    
    if (count < 0) return 0;
    // console.log(count);
    return(count);

    
}
// checkExam=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)
// ===
// let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c + 4 : c - 1) : c, 0);
// return result < 0 ? 0 : result;
checkExam(arrEx1, arrEx2)

// summing the weights of the two teams
const arrW = [80 ];
function rowWeights(array) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i%2==0) {
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
        if (list[i].continent == 'Europe' && list[i].language == 'JavaScript') {count++}
    }
    // console.log(count)
    return(count);
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
    let arrNew =[];
    let answer = '';
    arrNew = array.slice();
    arrNew.sort((a,b)=>a-b);
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
        if (temp1 != 1) {out.push(arr1[i])};
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
    let arr1 = [], arr2 = [], sum1 = 0, sum2=0;
    for (let i = 0; i < arr.length; i++) {
        i === 0 ? arr1 = arr.slice(0, 0) : arr1 = arr.slice(0, i);
        // arr1 = arr.slice(-1, i);
        console.log(i, arr1);
        arr2 = arr.slice(i+1, arr.length);
        console.log(arr2);
        sum1 = arr1.reduce(function (a, b) { return (a + b) }, 0);
        console.log('sum1-->',sum1);
        sum2 = arr2.reduce(function (a, b) { return (a + b) }, 0);
        console.log('sum2-->', sum2);
        if (sum1 === sum2) {
            console.log(i);
            return i;
        }
    }
    console.log("-1");
    return -1;
}
findEvenIndex(arrSum);