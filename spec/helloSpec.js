// spec/helloSpec.js
const hello = require('../hello');

describe("Hello function", () => {
    it("should return 'Hello, World!'", () => {
        expect(hello()).toEqual('Hello, World!');
    });
});