exports.add = (a, b) => a + b;
exports.square = x => x * x;
exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  var firstName = names[0];
  var lastName = names[1];
  user.firstName = firstName;
  user.lastName = lastName;
  return user;
};
exports.asyncOperation = (a, b, callback) => {
  setTimeout(() => {
    callback(this.add(a, b));
  }, 1000);
  // return res;
};
exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(this.square(x));
  }, 1000);
};
