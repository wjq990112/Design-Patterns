/**
 * @file JavaScript 单例模式 Class 语法
 */
class Example {
  constructor() {
    /**
     * 构造函数体 例如: this.name = 'Jack'
     */
  }

  static _instance = null;

  static getInstance() {
    if (!Example._instance) {
      Example._instance = new Example();
    }
    return Example._instance;
  }
}

const example1 = Example.getInstance();
const example2 = Example.getInstance();

console.log(example1);
console.log(example2);
console.log(example1 === example2);
