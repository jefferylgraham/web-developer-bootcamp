var colors = ["red", "orange", "yellow", "green","blue", "indigo", "violet"];

function myForEach(arr, func) {
    for(var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

// myForEach(colors, alert);
myForEach(colors, function(color) {
    console.log(color);
})

Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

colors.myForEach(function(color) {
    console.log(color + " is part of the rainbow!");
})