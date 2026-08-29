---
order: 4
title: bind
---

# x-bind

`x-bind` 允许你根据 JavaScript 表达式的求值结果来设置元素的 HTML 属性。

例如，下面这个组件中，我们将使用 `x-bind` 来设置输入框的 placeholder 值。

```alpine
<div x-data="{ placeholderText: 'Type here...' }">
    <input type="text" x-bind:placeholder="placeholderText">
</div>
```

<a name="shorthand-syntax"></a>
## 简写语法

如果你觉得 `x-bind:` 过于冗长，可以使用简写形式：`:`。例如，下面是与上面相同的输入元素，只是改用了简写语法。

```alpine
<input type="text" :placeholder="placeholderText">
```

> 尽管上面的代码片段中没有包含这一点，但如果没有父元素定义 `x-data`，`x-bind` 就无法使用。[→ 了解更多关于 `x-data`](/directives/data)

<a name="binding-classes"></a>
## 绑定 class

`x-bind` 最常见的用途是根据你的 Alpine 状态在元素上设置特定的 class。

下面是一个简单下拉切换的示例，但我们将不使用 `x-show`，而是使用 "hidden" class 来切换元素的显示。

```alpine
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div :class="open ? '' : 'hidden'">
        Dropdown Contents...
    </div>
</div>
```

现在，当 `open` 为 `false` 时，"hidden" class 将被添加到下拉菜单上。

<a name="shorthand-conditionals"></a>
### 简写条件表达式

在这种情况下，如果你喜欢更简洁的语法，可以使用 JavaScript 的短路求值来代替标准的条件表达式：

```alpine
<div :class="show ? '' : 'hidden'">
<!-- Is equivalent to: -->
<div :class="show || 'hidden'">
```

反之亦然。假设我们不用 `open`，而是使用一个值相反的变量：`closed`。

```alpine
<div :class="closed ? 'hidden' : ''">
<!-- Is equivalent to: -->
<div :class="closed && 'hidden'">
```

<a name="class-object-syntax"></a>
### class 对象语法

如果你愿意，Alpine 还提供了一种用于切换 class 的额外语法。通过传入一个以 class 为键、以布尔值为值的 JavaScript 对象，Alpine 将知道要应用哪些 class、要移除哪些 class。例如：

```alpine
<div :class="{ 'hidden': ! show }">
```

与其他方法相比，这种技术具有独特的优势。使用对象语法时，Alpine 将不会保留已应用到元素 `class` 属性上的原始 class。

例如，如果你想在 Alpine 加载之前就将 "hidden" class 应用到元素上，并且还要使用 Alpine 来切换它的存在与否，那么你只能通过对象语法来实现这种行为：

```alpine
<div class="hidden" :class="{ 'hidden': ! show }">
```

如果这让你感到困惑，让我们更深入地了解 Alpine 是如何以不同于其他属性的方式处理 `x-bind:class` 的。

<a name="special-behavior"></a>
### 特殊行为

在底层实现中，`x-bind:class` 的行为与其他属性不同。

请考虑以下情况。

```alpine
<div class="opacity-50" :class="hide && 'hidden'">
```

如果 "class" 是任何其他属性，`:class` 绑定将会覆盖已有的 class 属性，导致 `opacity-50` 被 `hidden` 或 `''` 覆盖。

然而，Alpine 会以不同的方式处理 `class` 绑定。它足够智能，会保留元素上已有的 class。

例如，如果 `hide` 为 true，上面的示例将产生如下的 DOM 元素：

```alpine
<div class="opacity-50 hidden">
```

如果 `hide` 为 false，DOM 元素将如下所示：

```alpine
<div class="opacity-50">
```

对于大多数用户来说，这种行为应该是无感且直观的，但对于好奇的开发者或可能出现的任何特殊情况，还是值得明确提及。

<a name="binding-styles"></a>
## 绑定 style

与使用 JavaScript 对象绑定 class 的特殊语法类似，Alpine 也提供了一种基于对象来绑定 `style` 属性的语法。

与 class 对象一样，这种语法完全是可选的。只有在对你有益处时才使用它。

```alpine
<div :style="{ color: 'red', display: 'flex' }">

<!-- Will render: -->
<div style="color: red; display: flex;" ...>
```

使用表达式进行条件内联样式设置是可行的，就像 x-bind:class 一样。同样，在这里也可以使用短路运算符，只需将样式对象作为第二个操作数即可。

```alpine
<div x-bind:style="true && { color: 'red' }">

<!-- Will render: -->
<div style="color: red;">
```

这种方法的一个优点是能够与元素上已有的样式混合使用：

```alpine
<div style="padding: 1rem;" :style="{ color: 'red', display: 'flex' }">

<!-- Will render: -->
<div style="padding: 1rem; color: red; display: flex;" ...>
```

与 Alpine 中的大多数表达式一样，你始终可以使用 JavaScript 表达式的求值结果作为引用：

```alpine
<div x-data="{ styles: { color: 'red', display: 'flex' }}">
    <div :style="styles">
</div>

<!-- Will render: -->
<div ...>
    <div style="color: red; display: flex;" ...>
</div>
```

<a name="bind-directives"></a>
## 直接绑定 Alpine 指令

`x-bind` 允许你将一个包含各种指令和属性的对象绑定到元素上。

对象的键可以是你在 Alpine 中通常会作为属性名编写的任何内容，包括 Alpine 指令和修饰符，也包括普通的 HTML 属性。对象的值要么是普通字符串，要么在动态 Alpine 指令的情况下，是需要由 Alpine 求值的回调。

```alpine
<div x-data="dropdown">
    <button x-bind="trigger">Open Dropdown</button>

    <span x-bind="dialogue">Dropdown Contents</span>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            trigger: {
                ['x-ref']: 'trigger',
                ['@click']() {
                    this.open = true
                },
            },

            dialogue: {
                ['x-show']() {
                    return this.open
                },
                ['@click.outside']() {
                    this.open = false
                },
            },
        }))
    })
</script>
```

这种 `x-bind` 用法有几个注意事项：

> 当被“绑定”或“应用”的指令是 `x-for` 时，你应该从回调中返回一个普通的表达式字符串。例如：`['x-for']() { return 'item in items' }`
