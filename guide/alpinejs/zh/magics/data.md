---
order: 8
prefix: $
title: data
---

# $data

`$data` 是一个魔法属性，可以让您访问当前的 Alpine 数据作用域（通常由 `x-data` 提供）。

大多数情况下，您可以直接在表达式中访问 Alpine 数据。例如，`x-data="{ message: 'Hello Caleb!' }"` 将允许您执行类似 `x-text="message"` 的操作。

然而，有时拥有一个封装了所有作用域的实际对象，并将其传递给其他函数，会很有帮助：

```alpine
<div x-data="{ greeting: 'Hello' }">
    <div x-data="{ name: 'Caleb' }">
        <button @click="sayHello($data)">Say Hello</button>
    </div>
</div>

<script>
    function sayHello({ greeting, name }) {
        alert(greeting + ' ' + name + '!')
    }
</script>
```

<!-- START_VERBATIM -->
<div x-data="{ greeting: 'Hello' }" class="demo">
    <div x-data="{ name: 'Caleb' }">
        <button @click="sayHello($data)">Say Hello</button>
    </div>
</div>

<script>
    function sayHello({ greeting, name }) {
        alert(greeting + ' ' + name + '!')
    }
</script>
<!-- END_VERBATIM -->

现在，当按下按钮时，浏览器将弹出 `Hello Caleb!` 的提示，因为它接收到的数据对象包含了调用它的表达式（`@click="..."`）的所有 Alpine 作用域。

大多数应用不需要这个魔法属性，但对于更深入、更复杂的 Alpine 工具来说，它会非常有用。
