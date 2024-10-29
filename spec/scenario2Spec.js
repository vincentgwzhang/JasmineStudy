describe("Spy study", () => {

    let foo;
    let bar=null;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                this.bar = value;
            }
        };

        jest.spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it('Verify foo has been called', () => {
        expect(foo.setBar).toHaveBeenCalled();
    });

});