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
