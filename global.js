function test(callback) {
  callback();
}

this.aaa = 'aaa';

test(function() {
  console.log('anonymous:', this==global ? '`this` is global.' : this);
});
test(() => {
  console.log('arrow:', this==global ? '`this` is global.' : this);
});
