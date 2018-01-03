const sum = require("./sum.js")
describe("demo sum test", () => {
    test('should behave sum ', () => {
        const diff = require('jest-diff');
        const a = { a: { b: { c: 5 } } };
        const b = { a: { b: { c: 6 } } };
        const result = diff(a, b);
        // print diff
        console.log(result);
    });
    test("this is a demo", () => {
        const mockFn = jest.fn().mockImplementation(scalar => 42 + scalar);
        console.log(mockFn(1));
        console.log(mockFn(3));
    })
})