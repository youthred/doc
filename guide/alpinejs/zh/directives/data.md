---
order: 1
title: data
---

# x-data

Alpine 中的一切始于 `x-data` 指令。

`x-data` 将一段 HTML 定义为一个 Alpine 组件，并为该组件提供可供引用的响应式数据。

下面是一个虚构的下拉菜单组件示例：

```alpine
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Content</button>

    <div x-show="open">
        Content...
    </div>
</div>
```

不用担心示例中的其他指令（`@click` 和 `x-show`），我们稍后会讲到它们。现在，让我们先专注于 `x-data`。

<a name="scope"></a>
## 作用域

在 `x-data` 指令中定义的属性，对其所有的子元素都可用，即使是其他嵌套的 `x-data` 组件内部的元素也是如此。

例如：

```alpine
<div x-data="{ foo: 'bar' }">
    <span x-text="foo"><!-- Will output: "bar" --></span>

    <div x-data="{ bar: 'baz' }">
        <span x-text="foo"><!-- Will output: "bar" --></span>

        <div x-data="{ foo: 'bob' }">
            <span x-text="foo"><!-- Will output: "bob" --></span>
        </div>
    </div>
</div>
```

<a name="methods"></a>
## 方法

由于 `x-data` 会像普通 JavaScript 对象一样被求值，因此除了状态之外，你还可以在其中存储方法甚至 getter。

例如，让我们把“Toggle Content”（切换内容）的行为提取为 `x-data` 上的一个方法。

```alpine
<div x-data="{ open: false, toggle() { this.open = ! this.open } }">
    <button @click="toggle()">Toggle Content</button>

    <div x-show="open">
        Content...
    </div>
</div>
```

请注意 `x-data` 上新添加的 `toggle() { this.open = ! this.open }` 方法。现在，可以从组件内部的任何位置调用此方法。

你还会注意到，我们使用了 `this.` 来访问对象自身上的状态。这是因为 Alpine 会像对待任何带有 `this` 上下文的标准 JavaScript 对象一样来求值这个数据对象。

如果你愿意，也可以完全省略调用 `toggle` 方法时的括号。例如：

```alpine
<!-- Before -->
<button @click="toggle()">...</button>

<!-- After -->
<button @click="toggle">...</button>
```

<a name="getters"></a>
## Getters

JavaScript [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 在某个方法的唯一用途是基于其他状态返回数据时非常实用。

你可以把它们想象成“计算属性”（不过，它们不像 Vue 的计算属性那样会被缓存）。

让我们重构组件，改用名为 `isOpen` 的 getter，而不是直接访问 `open`。

```alpine
<div x-data="{
    open: false,
    get isOpen() { return this.open },
    toggle() { this.open = ! this.open },
}">
    <button @click="toggle()">Toggle Content</button>

    <div x-show="isOpen">
        Content...
    </div>
</div>
```

请注意，现在“Content”依赖的是 `isOpen` getter，而不是直接依赖 `open` 属性。

在这种情况下并没有实际的益处。但在某些情况下，getter 有助于在组件中提供更具表现力的语法。

<a name="data-less-components"></a>
## 无数据组件

有时，你想创建一个 Alpine 组件，但不需要任何数据。

在这种情况下，你总是可以传入一个空对象。

```alpine
<div x-data="{}">
```

不过，如果你觉得更好看，也可以完全省略属性值。

```alpine
<div x-data>
```

<a name="single-element-components"></a>
## 单元素组件

有时，你的 Alpine 组件内部可能只有一个元素，如下所示：

```alpine
<div x-data="{ open: true }">
    <button @click="open = false" x-show="open">Hide Me</button>
</div>
```

在这种情况下，你可以直接在单个元素上声明 `x-data`：

```alpine
<button x-data="{ open: true }" @click="open = false" x-show="open">
    Hide Me
</button>
```

<a name="re-usable-data"></a>
## 可复用数据

如果你发现自己重复编写 `x-data` 的内容，或者觉得内联语法过于冗长，可以使用 `Alpine.data` 将 `x-data` 对象提取到一个专门的组件中。

下面是一个快速示例：

```alpine
<div x-data="dropdown">
    <button @click="toggle">Toggle Content</button>

    <div x-show="open">
        Content...
    </div>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            toggle() {
                this.open = ! this.open
            },
        }))
    })
</script>
```

[→ 了解更多关于 `Alpine.data(...)`](/globals/alpine-data)
