---
order: 2
title: Reactivity
---

# Reactivity

Alpine 之所以是“响应式”的，是因为当你更改某条数据时，所有依赖该数据的内容都会自动对该更改作出“响应”。

Alpine 中发生的每一点响应性，都源于 Alpine 核心中两个非常重要的响应式函数：`Alpine.reactive()` 和 `Alpine.effect()`。

> Alpine 底层使用 VueJS 的响应式引擎来提供这些函数。
> [→ 了解更多关于 @vue/reactivity](https://github.com/vuejs/vue-next/tree/master/packages/reactivity)

理解这两个函数将赋予你超能力——无论是作为 Alpine 开发者，还是作为普通的 Web 开发者。

<a name="alpine-reactive"></a>
## Alpine.reactive()

让我们先来看看 `Alpine.reactive()`。这个函数接受一个 JavaScript 对象作为参数，并返回该对象的“响应式”版本。例如：

```js
let data = { count: 1 }

let reactiveData = Alpine.reactive(data)
```

在底层，当 `Alpine.reactive` 接收到 `data` 时，它会将其包裹在一个自定义的 JavaScript 代理（proxy）中。

代理是 JavaScript 中的一种特殊对象，可以拦截对 JavaScript 对象的“get”和“set”调用。

[→ 了解更多关于 JavaScript 代理](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

从表面上看，`reactiveData` 的行为应该与 `data` 完全一致。例如：

```js
console.log(data.count) // 1
console.log(reactiveData.count) // 1

reactiveData.count = 2

console.log(data.count) // 2
console.log(reactiveData.count) // 2
```

你在这里看到的是：由于 `reactiveData` 是 `data` 的一层薄封装，任何获取或设置属性的尝试，其行为都会与直接操作 `data` 完全一致。

这里的主要区别在于：每当你修改或读取（get 或 set）`reactiveData` 中的某个值时，Alpine 都会感知到，并可以执行任何依赖该数据的其他逻辑。

`Alpine.reactive` 只是故事的前半部分，`Alpine.effect` 是另一半，让我们深入了解一下。

<a name="alpine-effect"></a><a name="alpine-effect"></a>
## Alpine.effect()

`Alpine.effect` 接受一个回调函数。一旦调用 `Alpine.effect`，它就会运行所提供的函数，并主动侦测与响应式数据的任何交互。如果检测到交互（上述响应式代理的 get 或 set），它就会将其记录下来，并确保将来任何响应式数据发生变化时重新运行该回调。例如：

```js
let data = Alpine.reactive({ count: 1 })

Alpine.effect(() => {
    console.log(data.count)
})
```

当这段代码首次运行时，控制台会输出“1”。每当 `data.count` 发生变化时，它的值都会再次输出到控制台。

这就是解锁 Alpine 核心中所有响应性的机制。

为了进一步串联起这些概念，让我们看一个简单的“计数器”组件示例——完全不使用 Alpine 语法，只使用 `Alpine.reactive` 和 `Alpine.effect`：

```alpine
<button>Increment</button>

Count: <span></span>
```
```js
let button = document.querySelector('button')
let span = document.querySelector('span')

let data = Alpine.reactive({ count: 1 })

Alpine.effect(() => {
    span.textContent = data.count
})

button.addEventListener('click', () => {
    data.count = data.count + 1
})
```

<!-- START_VERBATIM -->
<div x-data="{ count: 1 }" class="demo">
    <button @click="count++">Increment</button>

    <div>Count: <span x-text="count"></span></div>
</div>
<!-- END_VERBATIM -->

正如你所看到的，你可以让任何数据变得响应式，也可以将任何功能包裹在 `Alpine.effect` 中。

这种组合为 Web 开发解锁了一种极其强大的编程范式。尽情发挥吧。
