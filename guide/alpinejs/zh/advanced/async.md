---
order: 4
title: Async
---

# Async

Alpine 的设计目标是在大多数支持标准函数的地方同样支持异步函数。

例如，假设你有一个名为 `getLabel()` 的简单函数，用作 `x-text` 指令的输入：

```js
function getLabel() {
    return 'Hello World!'
}
```
```alpine
<span x-text="getLabel()"></span>
```

因为 `getLabel` 是同步的，所以一切都能按预期工作。

现在让我们假设 `getLabel` 需要发起网络请求来获取标签，无法立即返回（异步）。通过将 `getLabel` 改为 async 函数，你就可以使用 JavaScript 的 `await` 语法从 Alpine 中调用它。

```js
async function getLabel() {
    let response = await fetch('/api/label')

    return await response.text()
}
```
```alpine
<span x-text="await getLabel()"></span>
```

此外，如果你更喜欢在 Alpine 中调用方法时不带结尾的括号，你可以省略它们，Alpine 会检测所提供的函数是否为异步函数并相应地处理。例如：

```alpine
<span x-text="getLabel"></span>
```
