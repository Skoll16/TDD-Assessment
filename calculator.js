"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    var delimiter = /[\n,]/; // Default delimiters (new line or comma)
    if (numbers.startsWith("//")) {
        var delimiterEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEnd)); // Custom delimiter
        numbers = numbers.substring(delimiterEnd + 1); // Remove delimiter line
    }
    var numArray = numbers.split(delimiter).map(function (num) { return parseInt(num, 10); });
    var negatives = numArray.filter(function (num) { return num < 0; });
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: ".concat(negatives.join(",")));
    }
    return numArray.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(add("")); // Output - 0
console.log(add("1")); // Output - 1
console.log(add("1,2")); // Output - 3
console.log(add("1\n2,3")); // Output - 6
console.log(add("//;\n1;2")); // Output - 3
console.log(add("1,-2,3")); // Output - negative numbers not allowed: -2
