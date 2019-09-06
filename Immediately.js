(function() {
  function test(callback) {
    callback();
  }

  this.one = '111';
  
  test(function() {
    console.log('anonymous:', this==global ? '`this` is global.' : this);
  });
  test(() => {
    console.log('arrow:', this==global ? '`this` is global.' : this);
  });
})();
