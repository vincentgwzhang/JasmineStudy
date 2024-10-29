describe("A suite is just a function", () => {

    it("and so is a spec", () => {
        let a = true;
        expect(a).toBe(true);
    });

    it("and can have a negative case", function() {
        expect(false).not.toBe(true);
    });

});

describe("xxx", () => {

    it("xxxx", () => {
        let a = 1;
        expect(a).toEqual(1);
        expect(a).toBeGreaterThan(0);
    });

});