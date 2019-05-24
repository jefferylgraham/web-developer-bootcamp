function printReverse(arr) {
    var start = arr.length - 1;
    for (var i = start; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// printReverse([1,2,3,4]);
// printReverse(["A", "B", "C"]);

function isUniform(arr) {
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isUniform(["b", "b", "b"]));

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    })
    return sum;
}
// console.log(sumArray([1,2,3]));
// console.log(sumArray([10,3,10,4]));
// console.log(sumArray([-5, 100]));

function max(arr) {
    var maxNum = arr[0];
    arr.forEach(function(num) {
        if(num > maxNum) {
            maxNum = num;
        }
    })
    return maxNum;
}
console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5, 100]));