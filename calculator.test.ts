import { add } from './calculator';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    it('should return 1 for a string with a single number', () => {
        expect(add("1")).toBe(1);
    });

    it('should return the sum of two comma-separated numbers', () => {
        expect(add("1,2")).toBe(3);
    });

    it('should handle newlines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
    });

    it('should handle multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
    });
});
