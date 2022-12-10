const sumador = require('../../services/adder');

describe("Test de suma", function() {
    let _numberA;
    let _numberB;

    it("Deberia devolver la suma entre numberA y numberB", function() {
        _numberA = 5;
        _numberB = 10;

        const result = adder.add(_numberA, _numberB);

        expect(result).toEqual(15);
    });
});