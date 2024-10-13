export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/; // Default delimiters (new line or comma)
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEnd)); // Custom delimiter
        numbers = numbers.substring(delimiterEnd + 1); // Remove delimiter line
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((acc, num) => acc + num, 0);
}

console.log(add("")); // Output - 0
console.log(add("1")); // Output - 1
console.log(add("1,2")); // Output - 3
console.log(add("1\n2,3")); // Output - 6
console.log(add("//;\n1;2")); // Output - 3
console.log(add("1,-2,3")); // Output - negative numbers not allowed: -2