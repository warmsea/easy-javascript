# easy-promise

This project is to help beginners to understand
[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
better.

Promise is one of the most important tools in JavaScript world. Reading
documents and APIs is one way to understand it. But Promise is a little
more complicated than String and Array. To understand it better, I think
more steps need to be taken after reading documents and APIs.

To help beginners to have a deeper understanding of how Promise works,
this project includes a serious of dummy implementations of Promise.

To make the code more clear, this project is using
[TypeScript](www.typescriptlang.org), because it is "typed".

This project assumes you already have a basic knowledge of Promise
and TypeScript. If you can understand the following code, it should be
fine. If not, please learn them first.

```javascript
new Promise((resolve: (result) => void, reject: (reason) => void) => {
  resolve('Hello, world!');
}).then((message) => {
  alert(message);
});
```

The Promise implementations in this project are not intended to be good
ones in the real world. They are target to be understand easily.
