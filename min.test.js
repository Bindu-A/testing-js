const min = require('./min');

test('returns minimum element of an array ', () => {

    expect(min([1,2,3,4])).toBe(1);
    
})