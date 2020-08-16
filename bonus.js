var marks = [98, 86, 98, 76, 87];
/**
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    console.log(element);
}

function add(num1, num2){
    var total = num1 + num2;
    return total;
}
var result = add(12, 98);
console.log(result);
var kodom = "Kodom sandler"
console.log("adam sandler", kodom);
console.log("Add to total number")
var addTotal = add(50, 122);
console.log(addTotal);
 */

function largestNumber(numbers) {
    var larger = numbers[0];
    for(var i = 0; i <numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var numbers = [12, 34, 64, 86, 54, 188, 53, 99 ]
var output = largestNumber(numbers);
console.log("output", output);



