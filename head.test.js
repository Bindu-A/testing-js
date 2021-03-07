const head = require('./head');

test('returns first element of an array ', () => {

    expect(head([1,2,3])).toBe(1);
    expect(head([])).toBe(null);

})