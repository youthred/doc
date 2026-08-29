---
order: 3
title: Templating
---

# 模板渲染

Alpine 提供了一些有用的指令，用于操作网页上的 DOM。

这里我们先介绍几个基本的模板指令，但请务必查看侧边栏中可用的指令，以获取完整的列表。

<a name="text-content"></a>
## 文本内容

Alpine 通过 `x-text` 指令让控制元素的文本内容变得简单。

```alpine
<div x-data="{ title: 'Start Here' }">
    <h1 x-text="title"></h1>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ title: 'Start Here' }" class="demo">
    <strong x-text="title"></strong>
</div>
<!-- END_VERBATIM -->

现在，Alpine 将使用 `title` 的值（"Start Here"）设置 `<h1>` 的文本内容。当 `title` 发生变化时，`<h1>` 的内容也会随之变化。

与 Alpine 中的所有指令一样，你可以使用任何你喜欢的 JavaScript 表达式。例如：

```alpine
<span x-text="1 + 2"></span>
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <span x-text="1 + 2"></span>
</div>
<!-- END_VERBATIM -->

`<span>` 现在将包含 "1" 和 "2" 的和。

[→ 了解更多关于 `x-text`](/directives/text)

<a name="toggling-elements"></a>
## 切换元素

切换元素是网页和应用程序中的常见需求。下拉菜单、模态框、对话框、"show-more"等都是很好的例子。

Alpine 提供了 `x-show` 和 `x-if` 指令，用于切换页面上的元素。

<a name="x-show"></a>
### `x-show`

这是一个使用 `x-show` 的简单切换组件。

```alpine
<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>

    <div x-show="open">
        Content...
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open" :aria-pressed="open">Expand</button>

    <div x-show="open">
        Content...
    </div>
</div>
<!-- END_VERBATIM -->

现在，包含内容的整个 `<div>` 将根据 `open` 的值显示和隐藏。

在底层，当元素应该被隐藏时，Alpine 会向该元素添加 CSS 属性 `display: none;`。

[→ 了解更多关于 `x-show`](/directives/show)

这在大多数情况下效果很好，但有时你可能希望完全将元素从 DOM 中添加和移除。这正是 `x-if` 的用途。

<a name="x-if"></a>
### `x-if`

这是之前的同一个切换示例，但这次使用 `x-if` 而不是 `x-show`。

```alpine
<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>

    <template x-if="open">
        <div>
            Content...
        </div>
    </template>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open" :aria-pressed="open">Expand</button>

    <template x-if="open">
        <div>
            Content...
        </div>
    </template>
</div>
<!-- END_VERBATIM -->

请注意，`x-if` 必须声明在 `<template>` 标签上。这样 Alpine 就可以利用浏览器对 `<template>` 元素已有的行为，将其作为要添加到页面或从页面移除的目标 `<div>` 的来源。

当 `open` 为 true 时，Alpine 会将 `<div>` 追加到 `<template>` 标签中；当 `open` 为 false 时，将其移除。

[→ 了解更多关于 `x-if`](/directives/if)

<a name="toggling-with-transitions"></a>
## 使用过渡进行切换

Alpine 通过 `x-transition` 指令让在"显示"和"隐藏"状态之间平滑过渡变得简单。

> `x-transition` 只适用于 `x-show`，不适用于 `x-if`。

这里还是那个简单的切换示例，但这次应用了过渡：

```alpine
<div x-data="{ open: false }">
    <button @click="open = ! open">Expands</button>

    <div x-show="open" x-transition>
        Content...
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open">Expands</button>

    <div class="flex">
        <div x-show="open" x-transition style="will-change: transform;">
            Content...
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

让我们放大模板中处理过渡的部分：

```alpine
<div x-show="open" x-transition>
```

单独的 `x-transition` 会为切换应用合理的默认过渡（淡入淡出和缩放）。

有两种方式可以自定义这些过渡：

* 过渡辅助工具
* 过渡 CSS 类。

让我们逐一看看这些方法：

<a name="transition-helpers"></a>
### 过渡辅助工具

假设你想让过渡的持续时间更长，你可以像这样使用 `.duration` 修饰符手动指定：

```alpine
<div x-show="open" x-transition.duration.500ms>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open">Expands</button>

    <div class="flex">
        <div x-show="open" x-transition.duration.500ms style="will-change: transform;">
            Content...
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

现在过渡将持续 500 毫秒。

如果你想为进入和离开过渡指定不同的值，可以使用 `x-transition:enter` 和 `x-transition:leave`：

```alpine
<div
    x-show="open"
    x-transition:enter.duration.500ms
    x-transition:leave.duration.1000ms
>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open">Expands</button>

    <div class="flex">
        <div x-show="open" x-transition:enter.duration.500ms x-transition:leave.duration.1000ms style="will-change: transform;">
            Content...
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

此外，你可以添加 `.opacity` 或 `.scale`，只对该属性进行过渡。例如：

```alpine
<div x-show="open" x-transition.opacity>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open">Expands</button>

    <div class="flex">
        <div x-show="open" x-transition:enter.opacity.duration.500 x-transition:leave.opacity.duration.250>
            Content...
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

[→ 了解更多关于过渡辅助工具](/directives/transition#the-transition-helper)

<a name="transition-classes"></a>
### 过渡类

如果你需要对应用程序中的过渡进行更细粒度的控制，可以使用以下语法在过渡的特定阶段应用特定的 CSS 类（此示例使用 [Tailwind CSS](https://tailwindcss.com/)）：

```alpine
<div
    x-show="open"
    x-transition:enter="transition ease-out duration-300"
    x-transition:enter-start="opacity-0 transform scale-90"
    x-transition:enter-end="opacity-100 transform scale-100"
    x-transition:leave="transition ease-in duration-300"
    x-transition:leave-start="opacity-100 transform scale-100"
    x-transition:leave-end="opacity-0 transform scale-90"
>...</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <button @click="open = ! open">Expands</button>

    <div class="flex">
        <div
            x-show="open"
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 transform scale-90"
            x-transition:enter-end="opacity-100 transform scale-100"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-start="opacity-100 transform scale-100"
            x-transition:leave-end="opacity-0 transform scale-90"
            style="will-change: transform"
        >
            Content...
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

[→ 了解更多关于过渡类](/directives/transition#applying-css-classes)

<a name="binding-attributes"></a>
## 绑定属性

你可以使用 `x-bind` 指令向 Alpine 中的元素添加 `class`、`style`、`disabled` 等 HTML 属性。

下面是一个动态绑定 `class` 属性的示例：

```alpine
<button
    x-data="{ red: false }"
    x-bind:class="red ? 'bg-red' : ''"
    @click="red = ! red"
>
    Toggle Red
</button>
```

<!-- START_VERBATIM -->
<div class="demo">
    <button
        x-data="{ red: false }"
        x-bind:style="red && 'background: red'"
        @click="red = ! red"
    >
        Toggle Red
    </button>
</div>
<!-- END_VERBATIM -->


作为快捷方式，你可以省略 `x-bind`，直接使用简写 `:` 语法：

```alpine
<button ... :class="red ? 'bg-red' : ''">
```

根据 Alpine 中的数据切换类的开和关是一个常见需求。下面是一个使用 Alpine 的 `class` 绑定对象语法切换类的示例：（注意：此语法仅适用于 `class` 属性）

```alpine
<div x-data="{ open: true }">
    <span :class="{ 'hidden': ! open }">...</span>
</div>
```

现在，如果 `open` 为 false，`hidden` 类将被添加到元素上；如果 `open` 为 true，则会被移除。

<a name="looping-elements"></a>
## 循环元素

Alpine 允许使用 `x-for` 指令根据 JavaScript 数据迭代模板的部分内容。下面是一个简单的示例：

```alpine
<div x-data="{ statuses: ['open', 'closed', 'archived'] }">
    <template x-for="status in statuses">
        <div x-text="status"></div>
    </template>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ statuses: ['open', 'closed', 'archived'] }" class="demo">
    <template x-for="status in statuses">
        <div x-text="status"></div>
    </template>
</div>
<!-- END_VERBATIM -->

与 `x-if` 类似，`x-for` 必须应用于 `<template>` 标签。在内部，Alpine 会为循环中的每次迭代追加 `<template>` 标签的内容。

如你所见，新的 `status` 变量在迭代模板的作用域内可用。

[→ 了解更多关于 `x-for`](/directives/for)

<a name="inner-html"></a>
## 内部 HTML

Alpine 通过 `x-html` 指令让控制元素的 HTML 内容变得简单。

```alpine
<div x-data="{ title: '<h1>Start Here</h1>' }">
    <div x-html="title"></div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ title: '<h1>Start Here</h1>' }" class="demo">
    <div x-html="title"></div>
</div>
<!-- END_VERBATIM -->

现在，Alpine 将使用元素 `<h1>Start Here</h1>` 设置 `<div>` 的文本内容。当 `title` 发生变化时，`<h1>` 的内容也会随之变化。

> ⚠️ 仅在可信内容上使用，切勿用于用户提供的内容。⚠️
> 动态渲染来自第三方的 HTML 很容易导致 XSS 漏洞。

[→ 了解更多关于 `x-html`](/directives/html)
