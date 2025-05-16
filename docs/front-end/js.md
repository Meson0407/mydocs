# Javascript

## 1. for...of 和 for...in 的区别

for...in 语句迭代一个对象的所有可枚举字符串属性（除 Symbol 以外），包括继承的可枚举属性。  
for...of 语句迭代一个可遍历（iterable）对象的成员。

for...in 遍历的是数组的索引  
for...of 遍历的是数组的元素

for...in 更适合遍历对象，当然也可以遍历数组  
for...of 适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合，但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，你可以用for in循环（这也是它的本职工作）或用内建的Object.keys()方法

**总结**  

1. for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值  
2. for in总是得到对象的key或数组、字符串的下标  
3. for of总是得到对象的value或数组、字符串的值  

## 2. 箭头函数和普通函数的区别

1. 语法差异

- **普通函数**：使用 `function` 关键字定义

  ```js
  function funcName(params) {
    // 函数体
  }
  ```

- **箭头函数**：使用 => 定义，可省略 `function` 和 `return` (单行时)

  ```js
  const funcName = (params) => {
    // 函数体
  };
  ```

2. this指向

- **普通函数**：`this` 是动态的，取决于调用方式，谁调用就指向谁。

  ```js
  const obj = {
    value: 42,
    getValue: function() {
        return this.value; // this 指向 obj
    }
  };
  obj.getValue(); // 42
  ```

- **箭头函数**：`this` 是词法的， 继承自外层作用域（定义时的上下文）。

  ```js
  const obj = {
    value: 42,
    getValue: () => {
        return this.value; // this 指向全局对象（如 window）
    }
  };
  obj.getValue(); // undefined（严格模式下报错）
    ```

3. `arguments` 对象

- **普通函数**：`arguments` 对象包含函数调用的所有参数。
  
  ```js
    function sum() {
        return Array.from(arguments).reduce((a, b) => a + b);
    }
    sum(1, 2, 3); // 6
  ```

- **箭头函数**：箭头函数没有自己的 `arguments` 对象，需用剩余参数（`...args`）。
  ```js
  const sum = (...args) => {
      return args.reduce((a, b) => a + b);
  };
  sum(1, 2, 3); // 6
  ```

4. 构造函数能力

- **普通函数**：可以作为构造函数使用，通过 `new` 关键字调用。
  ```js
  function Person(name) {
      this.name = name;
  }
  const person = new Person('Alice');
  ```
- **箭头函数**：不能作为构造函数使用，不能使用 `new` 关键字调用。
  ```js
  const Person = (name) => {
      this.name = name; // 错误，箭头函数没有自己的 this
  };
  const person = new Person('Alice'); // 错误，不能作为构造函数使用
  ```

5. 方法适用性

- **普通函数**：适用于对象方法，适合作为对象方法（可通过 `this` 访问对象属性）。

  ```js
  const counter = {
    count: 0,
    increment: function() {
        this.count++; // this 指向 counter
    }
  };
  counter.increment();
  ```

- **箭头函数**：不适合作为对象方法（this 不会指向对象）。
  
  ```js
    const counter = {
        count: 0,
        increment: () => {
            this.count++; // this 指向全局对象
        }
    };
    counter.increment(); // 无效（严格模式下报错）
  ```

6. 其他区别

| 特性 | 普通函数 | 箭头函数 |
| :----- | :------ | :----- |
| `prototype`  |   有  |   无 |
| 生成器函数  |   支持（`function*`）  |   不支持 |
| `super` 和 `new.target`  |   支持  |   不支持（继承外层作用域的） |

7. 总结
+ 使用普通函数：  
  - 需要动态 this（如对象方法、事件处理器）。  
  - 需要构造函数或生成器函数。  
  - 需要访问 arguments 对象。

+ 使用箭头函数：
  - 需要词法 this（如回调函数、React 组件方法）。  
  - 需要更简洁的语法（如数组操作 map/filter）。  
  - 避免 this 绑定的意外行为。
