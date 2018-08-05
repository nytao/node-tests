const expect = require('expect');

describe('App', () => {
  it('should call spy', () => {
    var spy = expect.createSpy();
    spy('Tao', 'Good');
    expect(spy).toHaveBeenCalledWith('Tao', 'Good');
  });
});