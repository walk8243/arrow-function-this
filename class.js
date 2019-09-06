function callback(func) {
  func();
}

class Test {
  test() {
    this.one = '111';

    callback(function() {
      console.log('callback-anonymous:', this==global ? '`this` is global.' : this);
    });
    callback(() => {
      console.log('callback-arrow:', this==global ? '`this` is global.' : this);
    });
  }

  anonymous() {
    (function() {
      console.log('anonymous:', this);
    })();
  }

  arrow() {
    (() => {
      console.log('arrow:', this);
    })();
  }
}

const test = new Test();
test.test();
test.anonymous();
test.arrow();
