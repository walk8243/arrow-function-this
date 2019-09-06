(function() {
  this.one = '111';

  (function() {
    function test(callback) {
      callback();
    }

    this.two = '222';

    test(function() {
      console.log('anonymous:', this==global ? '`this` is global.' : this);
    });
    test(() => {
      console.log('arrow:', this==global ? '`this` is global.' : this);
    });
  })();

  (() => {
    function test(callback) {
      callback();
    }

    this.three = '333';

    test(function() {
      console.log('anonymous:', this==global ? '`this` is global.' : this);
    });
    test(() => {
      console.log('arrow:', this==global ? '`this` is global.' : this);
    });
  })();
})();
