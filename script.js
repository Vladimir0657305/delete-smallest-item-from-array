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