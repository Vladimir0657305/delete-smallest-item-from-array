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
    return (console.log(array));
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
    return(console.log( [min, max])); 
}
minMax(arrN);