---
order: 1
title: Start Here
---

# 开始使用

在你的电脑上某个位置创建一个空白 HTML 文件，名称可以像这样：`i-love-alpine.html`

使用文本编辑器，将以下内容填入该文件：

```alpine
<html>
<head>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
</body>
</html>
```

在浏览器中打开该文件，如果你看到 `I ❤️ Alpine`，那就说明你已经准备好大展拳脚了！

既然你已经准备好开始动手实践了，让我们通过三个实用示例来学习 Alpine 的基础知识。完成本节练习后，你应该已经具备独立开发的能力了。我们开始吧。

<!-- START_VERBATIM -->
<ul class="flex flex-col space-y-2 list-inside !list-decimal">
    <li><a href="#building-a-counter">Building a counter</a></li>
    <li><a href="#building-a-dropdown">Building a dropdown</a></li>
    <li><a href="#building-a-search-input">Building a search Input</a></li>
</ul>
<!-- END_VERBATIM -->

<a name="building-a-counter"></a>
## 构建计数器

让我们从一个简单的"计数器"组件开始，以此演示 Alpine 中状态和事件监听这两个核心功能的基础用法。

将以下代码插入到 `<body>` 标签中：

```alpine
<div x-data="{ count: 0 }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ count: 0 }">
        <button x-on:click="count++">Increment</button>
        <span x-text="count"></span>
    </div>
</div>
<!-- END_VERBATIM -->

现在可以看到，只需在 HTML 中融入 3 处 Alpine 代码，我们就创建了一个可交互的"计数器"组件。

让我们简要梳理一下这里发生的事情：

<a name="declaring-data"></a>
### 声明数据

```alpine
<div x-data="{ count: 0 }">
```

Alpine 中的一切都始于 `x-data` 指令。在 `x-data` 内部，你可以用纯 JavaScript 声明一个 Alpine 将跟踪的数据对象。

该对象中的每个属性都将可供此 HTML 元素内部的其他指令使用。此外，当这些属性中的某一个发生变化时，所有依赖它的内容也会随之更新。

> 大多数 Alpine 指令要正常工作，都需要在父元素上使用 `x-data`。

[→ 了解更多关于 `x-data`](/directives/data)

接下来看看 `x-on`，以及它如何访问和修改上面提到的 `count` 属性：

<a name="listening-for-events"></a>
### 监听事件

```alpine
<button x-on:click="count++">Increment</button>
```

`x-on` 是一个指令，你可以用它来监听元素上的任何事件。在本例中我们监听的是 `click` 事件，因此写法为 `x-on:click`。

你也可以监听其他事件，正如你所想的那样。例如，监听 `mouseenter` 事件的写法如下：`x-on:mouseenter`。

当 `click` 事件发生时，Alpine 会调用与之关联的 JavaScript 表达式，在本例中即 `count++`。如你所见，我们可以直接访问在 `x-data` 表达式中声明的数据。

> 你经常会看到用 `@` 代替 `x-on:`。这是一种更简短、更友好的语法，很多人都喜欢。从现在开始，本文档可能会使用 `@` 而不是 `x-on:`。

[→ 了解更多关于 `x-on`](/directives/on)

<a name="reacting-to-changes"></a>
### 响应变化

```alpine
<span x-text="count"></span>
```

`x-text` 是 Alpine 的一个指令，你可以用它把元素的文本内容设置为某个 JavaScript 表达式的结果。

在本例中，我们告诉 Alpine 始终确保这个 `span` 标签的内容反映 `count` 属性的值。

如果还不清楚的话，`x-text` 与大多数指令一样，接受一个纯 JavaScript 表达式作为参数。例如，你也可以把它的内容设置为：`x-text="count * 2"`，那么 `span` 的文本内容将始终是 `count` 值的 2 倍。

[→ 了解更多关于 `x-text`](/directives/text)

<a name="building-a-dropdown"></a>
## 构建下拉菜单

我们已经见识了一些基本功能，接下来继续学习 Alpine 中一个重要的指令：`x-show`，我们将通过构建一个演示用的"下拉菜单"组件来学习它。

将以下代码插入到 `<body>` 标签中：

```alpine
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" @click.outside="open = false">Contents...</div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle</button>
        <div x-show="open" @click.outside="open = false">Contents...</div>
    </div>
</div>
<!-- END_VERBATIM -->

如果你加载这个组件，应该会看到"Contents..."默认是隐藏的。你可以通过点击"Toggle"按钮来切换它们在页面上的显示。

`x-data` 和 `x-on` 指令你应该从上一个示例中已经很熟悉了，所以这里就不再赘述。

<a name="toggling-elements"></a>
### 切换元素

```alpine
<div x-show="open" ...>Contents...</div>
```

`x-show` 是 Alpine 中一个非常强大的指令，它可以根据 JavaScript 表达式的结果来显示或隐藏页面上的 HTML 区块，在本例中即：`open`。

[→ 了解更多关于 `x-show`](/directives/show)

<a name="listening-for-a-click-outside"></a>
### 监听外部点击

```alpine
<div ... @click.outside="open = false">Contents...</div>
```

你会在这个示例中注意到一个新东西：`.outside`。Alpine 中的许多指令都接受"修饰符"，它们被串联在指令的末尾，并用句点分隔。

在本例中，`.outside` 告诉 Alpine 不要监听 `<div>` 内部的点击，而只监听发生在 `<div>` 外部的点击。

这是 Alpine 内置的一个便捷工具，因为这是一个常见需求，而手动实现它既繁琐又复杂。

[→ 了解更多关于 `x-on` 修饰符](/directives/on#modifiers)

<a name="building-a-search-input"></a>
## 构建搜索输入框

现在让我们构建一个更复杂的组件，并介绍一些其他的指令和模式。

将以下代码插入到 `<body>` 标签中：

```alpine
<div
    x-data="{
        search: '',

        items: ['foo', 'bar', 'baz'],

        get filteredItems() {
            return this.items.filter(
                i => i.startsWith(this.search)
            )
        }
    }"
>
    <input x-model="search" placeholder="Search...">

    <ul>
        <template x-for="item in filteredItems" :key="item">
            <li x-text="item"></li>
        </template>
    </ul>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div
        x-data="{
            search: '',

            items: ['foo', 'bar', 'baz'],

            get filteredItems() {
                return this.items.filter(
                    i => i.startsWith(this.search)
                )
            }
        }"
    >
        <input x-model="search" placeholder="Search...">

        <ul class="pl-6 pt-2">
            <template x-for="item in filteredItems" :key="item">
                <li x-text="item"></li>
            </template>
        </ul>
    </div>
</div>
<!-- END_VERBATIM -->

默认情况下，所有"items"（foo、bar 和 baz）都会显示在页面上，但你可以通过在文本输入框中输入内容来过滤它们。随着你输入，项目列表会随之变化，以反映你正在搜索的内容。

这里涉及的内容不少，让我们逐段剖析这段代码。

<a name="multi-line-formatting"></a>
### 多行格式

首先我想指出的是，`x-data` 现在承载的内容比以前多得多。为了更易于编写和阅读，我们在 HTML 中把它拆分成了多行。这完全取决于你的选择，稍后我们会进一步讨论如何彻底避免这个问题，但就目前而言，我们会把所有这些 JavaScript 直接放在 HTML 中。

<a name="binding-to-inputs"></a>
### 绑定到输入框

```alpine
<input x-model="search" placeholder="Search...">
```

你会注意到一个我们尚未见过的新指令：`x-model`。

`x-model` 用于将输入元素的值与数据属性"绑定"在一起，在本例中即 `x-data="{ search: '', ... }"` 中的 "search"。

这意味着任何时候输入框的值发生变化，"search" 的值都会随之更新。

`x-model` 的能力远不止这个简单的示例。

[→ 了解更多关于 `x-model`](/directives/model)

<a name="computed-properties-using-getters"></a>
### 使用 getter 的计算属性

接下来我想让你关注的是 `x-data` 指令中的 `items` 和 `filteredItems` 属性。

```js
{
    ...
    items: ['foo', 'bar', 'baz'],

    get filteredItems() {
        return this.items.filter(
            i => i.startsWith(this.search)
        )
    }
}
```

`items` 属性不言自明。这里我们将 `items` 的值设置为一个包含 3 个不同项目（foo、bar 和 baz）的 JavaScript 数组。

这段代码中更有趣的部分是 `filteredItems` 属性。

通过属性名前的 `get` 前缀可以看出，`filteredItems` 是该对象中的一个 "getter" 属性。这意味着我们可以像访问数据对象中的普通属性一样访问 `filteredItems`，但当我们这样做时，JavaScript 会在底层执行所提供的函数并返回其结果。

你也可以完全不用 `get`，直接把它写成一个可以在模板中调用的方法，这完全没问题，但有些人更喜欢 getter 这种更简洁的语法。

[→ 了解更多关于 JavaScript getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

现在让我们看看 `filteredItems` getter 的内部，确保我们理解其中的逻辑：

```js
return this.items.filter(
    i => i.startsWith(this.search)
)
```

这些都是纯 JavaScript。我们首先获取项目数组（foo、bar 和 baz），然后使用提供的回调函数对它们进行过滤：`i => i.startsWith(this.search)`。

通过将这个回调传递给 `filter`，我们告诉 JavaScript 只返回以字符串 `this.search` 开头的项目，而正如我们在 `x-model` 中看到的那样，`this.search` 将始终反映输入框的值。

你可能注意到，到目前为止，我们都不需要使用 `this.` 来引用属性。然而，由于我们是在 `x-data` 对象内部直接操作，所以必须使用 `this.[property]` 而不是单纯的 `[property]` 来引用任何属性。

因为 Alpine 是一个"响应式"框架。任何时候 `this.search` 的值发生变化，模板中使用 `filteredItems` 的部分都会自动更新。

<a name="looping-elements"></a>
### 循环元素

既然我们已经理解了组件的数据部分，接下来看看模板中发生了什么，它使我们能够在页面上循环遍历 `filteredItems`。

```alpine
<ul>
    <template x-for="item in filteredItems">
        <li x-text="item"></li>
    </template>
</ul>
```

这里首先要注意的是 `x-for` 指令。`x-for` 表达式采用以下形式：`[item] in [items]`，其中 [items] 是任意数据数组，[item] 是在循环中每次迭代时被赋值的变量名。

还要注意，`x-for` 是声明在 `<template>` 元素上，而不是直接声明在 `<li>` 上。这是使用 `x-for` 的一个要求。它让 Alpine 能够利用浏览器中 `<template>` 标签的现有行为来发挥优势。

现在，`<template>` 标签内的任何元素都会针对 `filteredItems` 中的每个项目重复渲染，并且循环内求值的所有表达式都可以直接访问迭代变量（本例中为 `item`）。

[→ 了解更多关于 `x-for`](/directives/for)

<a name="recap"></a>
## 回顾

如果你坚持读到了这里，那么你已经接触了 Alpine 中的以下指令：

* x-data
* x-on
* x-text
* x-show
* x-model
* x-for

这是一个很好的开始，不过还有更多指令等着你去深入探索。吸收 Alpine 的最佳方式是通读这份文档。你无需逐字细读，但只要至少浏览每一页，你在使用 Alpine 时就会高效得多。

祝你编码愉快！
