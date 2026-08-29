---
order: 4
title: Events
---

# 事件

Alpine 让监听浏览器事件并对其作出响应变得简单。

<a name="listening-for-simple-events"></a>
## 监听简单事件

通过使用 `x-on`，你可以监听在元素上或元素内部触发的浏览器事件。

下面是一个监听按钮点击事件的基本示例：

```alpine
<button x-on:click="console.log('clicked')">...</button>
```

作为替代方案，如果你愿意，可以使用事件简写语法：`@`。下面是之前的同一个示例，但使用了简写语法（从现在开始我们将一直使用它）：

```alpine
<button @click="...">...</button>
```

除了 `click`，你还可以按名称监听任何浏览器事件。例如：`@mouseenter`、`@keyup` 等都是有效的语法。

<a name="listening-for-specific-keys"></a>
## 监听特定按键

假设你想监听 `<input>` 元素内的 `enter` 键被按下。Alpine 通过添加 `.enter` 让这变得简单，如下所示：

```alpine
<input @keyup.enter="...">
```

你甚至可以组合按键修饰符来监听组合按键，例如按住 `shift` 的同时按下 `enter`：

```alpine
<input @keyup.shift.enter="...">
```

<a name="preventing-default"></a>
## 阻止默认行为

在对浏览器事件作出响应时，通常需要"阻止默认行为"（阻止浏览器事件的默认行为）。

例如，如果你想监听表单提交，但阻止浏览器发送表单请求，可以使用 `.prevent`：

```alpine
<form @submit.prevent="...">...</form>
```

你还可以应用 `.stop` 来实现与 `event.stopPropagation()` 相同的效果。

<a name="accessing-the-event-object"></a>
## 访问事件对象

有时你可能想在自己的代码中访问原生浏览器事件对象。为了简化这一点，Alpine 会自动注入一个 `$event` 魔法变量：

```alpine
<button @click="$event.target.remove()">Remove Me</button>
```

<a name="dispatching-custom-events"></a>
## 派发自定义事件

除了监听浏览器事件，你还可以派发事件。这对于与其他 Alpine 组件通信，或在 Alpine 之外的工具中触发事件非常有用。

Alpine 为此暴露了一个名为 `$dispatch` 的魔法辅助方法：

```alpine
<div @foo="console.log('foo was dispatched')">
    <button @click="$dispatch('foo')"></button>
</div>
```

如你所见，当按钮被点击时，Alpine 会派发一个名为 "foo" 的浏览器事件，我们在 `<div>` 上的 `@foo` 监听器会捕获它并作出响应。

<a name="listening-for-events-on-window"></a>
## 在 window 上监听事件

由于浏览器中事件的特性，有时在顶层 window 对象上监听事件会很有用。

这允许你像下面的示例一样在组件之间完全通信：


```alpine
<div x-data>
    <button @click="$dispatch('foo')"></button>
</div>

<div x-data @foo.window="console.log('foo was dispatched')">...</div>
```

在上面的示例中，如果我们点击第一个组件中的按钮，Alpine 会派发 "foo" 事件。由于事件在浏览器中的工作方式，它们会沿着父元素一路"冒泡"到顶层的 "window"。

现在，因为我们在第二个组件中监听 window 上的 "foo" 事件（使用 `.window`），当按钮被点击时，这个监听器会捕获它并记录 "foo was dispatched" 消息。

[→ 了解更多关于 x-on](/directives/on)
