const tail = require('./tail');

test('returns tail of an array ', () => {

    expect(tail([1,2,3])).toStrictEqual([2,3]);
    expect(tail([])).toStrictEqual([]);

})