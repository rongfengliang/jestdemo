const fn =require("./fnmock.js");
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}
describe("app fn mock scope test", () => {

    test("demo", () => {

        const mockCallback = jest.fn();
        forEach([0, 1], mockCallback);
        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

    })
    test("demo2", () => {

        const filterTestFn = jest.fn();

        // Make the mock return `true` for the first call,
        // and `false` for the second call
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

        const result = [11, 12].filter(filterTestFn);

        console.log(result);
        // > [11]
        console.log(filterTestFn.mock.calls);
    })

})
