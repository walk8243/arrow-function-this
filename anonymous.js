function Test() {
  this.test1 = 'test';
};

Test.prototype.test2 = function() {
  console.log('test2', this);

  const that = this;
  dummy(function() {
    console.log('dummy[this]', this);
    console.log('dummy[that]', that);
  });
};

const test = new Test();

console.log('test', test);
test.test2();

function dummy(fn) {
  fn();
}
