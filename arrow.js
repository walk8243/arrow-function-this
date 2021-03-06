function Test() {
  this.test1 = 'test';
};

Test.prototype.test2 = function() {
  console.log('test2', this);

  dummy(() => {
    console.log('dummy', this);
  });
};
Test.prototype.test3 = () => {
  console.log('test3', this);
};

const test = new Test();

console.log('test', test);
test.test2();
test.test3();
console.log('global[this]', this);

function dummy(fn) {
  fn();
}
