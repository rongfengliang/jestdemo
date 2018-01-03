const sum = require("./sum.js");
describe("sum test suit", () => {
    test("test sum result", () => {
        expect(sum.sum(1, 3)).toBe(4);
    })
    test("appdemo", () => {
        expect(sum.sum(1, 4)).toBeGreaterThan(2);
    })
    test("deleinfo",()=>{
        expect(sum.deleteinfo(3,1)).toBe(2);
    })
    test("add user",()=>{
        let users =sum.addUser("dalong");
        expect(users).toContain("dalong");
     })
    it("demo"=>{
 
      console.log("this is a demo")
    })
});
