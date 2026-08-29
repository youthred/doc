---
order: 5
title: Lifecycle
---

# 生命周期

Alpine 有几种不同的技术，用于接入其生命周期的不同部分。让我们了解一下最有用的几种，以便熟悉它们：

<a name="element-initialization"></a>
## 元素初始化

Alpine 中另一个极其有用的生命周期钩子是 `x-init` 指令。

`x-init` 可以添加到页面上的任何元素上，当 Alpine 开始初始化该元素时，它会执行你在其中调用的任何 JavaScript。

```alpine
<button x-init="console.log('Im initing')">
```

除了该指令之外，Alpine 还会自动调用存储在数据对象上的任何 `init()` 方法。例如：

```js
Alpine.data('dropdown', () => ({
    init() {
        // I get called before the element using this data initializes.
    }
}))
```

<a name="after-a-state-change"></a>
## 状态改变之后

Alpine 允许你在某块数据（状态）发生变化时执行代码。为此它提供了两种不同的 API：`$watch` 和 `x-effect`。

<a name="watch"></a>
### `$watch`

```alpine
<div x-data="{ open: false }" x-init="$watch('open', value => console.log(value))">
```

如上所示，`$watch` 允许你使用点表示法的 key 接入数据变化。当那块数据发生变化时，Alpine 会调用传入的回调，并向它传递新值以及变化前的旧值。

[→ 了解更多关于 $watch](/magics/watch)

<a name="x-effect"></a>
### `x-effect`

`x-effect` 在底层使用与 `$watch` 相同的机制，但用法完全不同。

`x-effect` 不需要指定你想要监听的哪个数据 key，它会调用提供的代码，并智能地查找其中使用的任何 Alpine 数据。当其中某块数据发生变化时，`x-effect` 表达式将重新运行。

下面是使用 `x-effect` 重写的 `$watch` 示例中的同一段代码：

```alpine
<div x-data="{ open: false }" x-effect="console.log(open)">
```

现在，这个表达式会立即被调用，并且每次 `open` 更新时都会再次被调用。

这种方法有两个主要的行为差异：

1. 提供的代码会立即运行，并且会在数据变化时运行（`$watch` 是"懒惰"的——在第一次数据变化之前不会运行）
2. 不知道之前的值。（提供给 `$watch` 的回调会同时接收到新值和旧值）

[→ 了解更多关于 x-effect](/directives/effect)

<a name="alpine-initialization"></a>
## Alpine 初始化

<a name="alpine-initializing"></a>
### `alpine:init`

确保一段代码在 Alpine 加载之后、但在它在页面上初始化自身之前执行，是一项必要的任务。

这个钩子允许你在 Alpine 在页面上做它的事情之前，注册自定义数据、指令、魔法方法等。

你可以通过监听 Alpine 派发的一个名为 `alpine:init` 的事件来接入生命周期的这个节点。

```js
document.addEventListener('alpine:init', () => {
    Alpine.data(...)
})
```

<a name="alpine-initialized"></a>
### `alpine:initialized`

Alpine 还提供了一个钩子，你可以在它完成初始化之后执行代码，这个钩子叫做 `alpine:initialized`：

```js
document.addEventListener('alpine:initialized', () => {
    //
})
```
