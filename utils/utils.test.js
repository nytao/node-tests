const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(2, 5);
      // if (res !== 2 + 5) {
      //   throw new Error(`Expected 7, but returned ${res}.`);
      // }
      expect(res).toBe(7);
    });
  });
  
  it('Test async operation', (done) => {
    utils.asyncOperation(2, 5, (sum) => {
      expect(sum).toBeA('number').toBe(7);
      done();
    });
  });

  it('should return the square of a number', () => {
    var res = utils.square(17);
    // if (res !== 17 * 17) {
    //   throw new Error(`Expected ${17 * 17}, but returned ${res}.`);
    // }
    expect(res).toEqual(17 * 17).toBeA('number').toBeA('number');
  });
  
  it('Test async square', (done) => {
    utils.asyncSquare(7, (s) => {
      expect(s.toString()).toBeA('string').toBe("49");
      done();
    });
  });

  it('set the first and last name of the user', () => {
    var res = utils.setName({}, 'Laura Wilson');
    expect(res).toEqual({
      firstName: "Laura",
      lastName: "Wilson"
    });
    res = utils.setName({
      firstName: 'William',
      lastName: 'Gates',
      middleName: 'Gregory'
    }, 'Pike Dole');
    expect(res).toInclude({
      firstName: 'Pike',
      lastName: 'Dole'
    });
  });
});

// it('test some values', () => {
//   // expect(12).toNotBe(11).toNotEqual(12);
//   // expect({}).toBe({});
//   expect({
//     name: 'Tao',
//     title: 'scientist'
//   }).toInclude({
//     name: 'Tao'
//   });
// });
