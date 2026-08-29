---
order: 2
title: State
---

# 状态

状态（Alpine 监听变化的 JavaScript 数据）是你在 Alpine 中所做一切的核心。你可以使用 `x-data` 为一段 HTML 提供局部数据，也可以使用 `Alpine.store()` 让数据在页面上的任何地方全局可用。

<a name="local-state-x-data"></a>
## 局部状态

Alpine 允许你在单个 `x-data` 属性中声明一个 HTML 块的状态，而无需离开你的标记。

这是一个基本示例：

```alpine
<div x-data="{ open: false }">
    ...
</div>
```

现在，该元素上或内部的任何其他 Alpine 语法都能访问 `open`。正如你所猜测的那样，当 `open` 因任何原因发生变化时，所有依赖它的内容都会自动作出响应。

[→ 了解更多关于 `x-data`](/directives/data)

<a name="nesting-data"></a>
### 嵌套数据

在 Alpine 中，数据是可以嵌套的。例如，如果两个元素都附加了 Alpine 数据（一个在另一个内部），你可以从子元素内部访问父元素的数据。

```alpine
<div x-data="{ open: false }">
    <div x-data="{ label: 'Content:' }">
        <span x-text="label"></span>
        <span x-show="open"></span>
    </div>
</div>
```

这与 JavaScript 本身的作用域类似（函数内的代码可以访问在该函数外部声明的变量）。

你可能已经猜到，如果子元素有一个与父元素属性同名的数据属性，那么子元素的属性将优先。

<a name="single-element-data"></a>
### 单元素数据

虽然这对一些人来说可能显而易见，但值得提及的是，Alpine 数据可以在同一个元素内使用。例如：

```alpine
<button x-data="{ label: 'Click Here' }" x-text="label"></button>
```

<a name="data-less-alpine"></a>
### 无数据的 Alpine

有时你可能想使用 Alpine 的功能，但不需要任何响应式数据。在这种情况下，你可以完全选择不向 `x-data` 传递表达式。例如：

```alpine
<button x-data @click="alert('I\'ve been clicked!')">Click Me</button>
```

<a name="re-usable-data"></a>
### 可复用的数据

在使用 Alpine 时，你可能会发现需要复用一块数据和/或其对应的模板。

如果你使用的是 Rails 或 Laravel 等后端框架，Alpine 首先建议你将整个 HTML 块提取到模板局部文件（partial）或 include 中。

如果出于某种原因这对你来说并不理想，或者你不在后端模板环境中，Alpine 允许你使用 `Alpine.data(...)` 全局注册并复用组件的数据部分。

```js
Alpine.data('dropdown', () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
}))
```

既然你已经注册了 "dropdown" 数据，就可以在标记中的任意多个位置使用它：

```alpine
<div x-data="dropdown">
    <button @click="toggle">Expand</button>

    <span x-show="open">Content...</span>
</div>

<div x-data="dropdown">
    <button @click="toggle">Expand</button>

    <span x-show="open">Some Other Content...</span>
</div>
```

[→ 了解更多关于使用 `Alpine.data()`](/globals/alpine-data)

<a name="global-state"></a>
## 全局状态

如果你希望让某些数据对页面上的每个组件都可用，可以使用 Alpine 的"全局 store"功能来实现。

你可以使用 `Alpine.store(...)` 注册一个 store，并使用魔法方法 `$store()` 来引用它。

让我们看一个简单的示例。首先，我们将全局注册这个 store：

```js
Alpine.store('tabs', {
    current: 'first',

    items: ['first', 'second', 'third'],
})
```

现在，我们可以从页面上的任何位置访问或修改它的数据：

```alpine
<div x-data>
    <template x-for="tab in $store.tabs.items">
        ...
    </template>
</div>

<div x-data>
    <button @click="$store.tabs.current = 'first'">First Tab</button>
    <button @click="$store.tabs.current = 'second'">Second Tab</button>
    <button @click="$store.tabs.current = 'third'">Third Tab</button>
</div>
```

[→ 了解更多关于 `Alpine.store()`](/globals/alpine-store)
