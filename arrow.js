function Test() {
  this.test1 = 'test';
};

Test.prototype.test2 = function() {
  console.log('function', this);

  dummy(() => {
    console.log('arrow', this);
  });
};

const test = new Test();

console.log('global', test);
test.test2();

function dummy(fn) {
  fn();
}
