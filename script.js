const arr = [5, 3, 2, 1, 4];

function removeSmallest(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    let arrTemp = [...numbers];
    console.log(arrTemp);
    arrTemp.splice(arrTemp.indexOf(min), 1);

    // console.log(arrTemp);
    // console.log(min);
}
removeSmallest(arr);

