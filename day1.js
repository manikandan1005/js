//Given an array of positive integers,
//return the number of elements that are strictly greater than the average of all previous elements. 
//Skip the first element.
console.log(avgCount([100, 200, 350, 134, 453, 455, 100]))

function avgCount(arr){
    let count = 0;
    let avg;
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        avg = sum / i;
        if (avg < arr[i]) count++;
        sum += arr[i]
        //console.log(sum)
    }
    return (count)
}


