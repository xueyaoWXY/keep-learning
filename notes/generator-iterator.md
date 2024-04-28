## 生成器和迭代器

### 生成器

```js
/**
 * 简单生成器
 */

function* numberGenerator(n) {
    let i = 1;
    while (i <= n) {
        yield i;
        i++;
    }
}

// 使用生成器
const generator = numberGenerator(5);
for (const num of generator) {
    console.log(num);
}
```


### 迭代器
```js
/**
 *  简单迭代器
 */

const simpleIterator = {
    data: [1, 2, 3, 4, 5],
    index: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.index >= this.data.length) {
            return { done: true };
        }
        return { value: this.data[this.index++], done: false };
    }
};

// 使用迭代器
for (const item of simpleIterator) {
    console.log(item);
}

```

