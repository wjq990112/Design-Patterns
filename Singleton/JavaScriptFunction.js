/**
 * @file JavaScript 单例模式 Function 语法 类属性/闭包
 */
function Example1() {
  /**
   * 构造函数体 例如: this.name = 'Jack'
   */
}

Example1._instance = null;

Example1.getInstance = function () {
  if (!Example1._instance) {
    Example1._instance = new Example1();
  }
  return Example1._instance;
};

const example1 = Example1.getInstance();
const example2 = Example1.getInstance();

console.log(example1);
console.log(example2);
console.log(example1 === example2);

let Example2 = (function () {
  let _instance = null;

  return function () {
    if (!_instance) {
      /**
       * 构造函数体 例如: this.name = 'Jack'
       */
      _instance = this;
    }
    return _instance;
  };
})();

const example3 = new Example2();
const example4 = new Example2();

console.log(example3);
console.log(example4);
console.log(example3 === example4);
