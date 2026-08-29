# Alpine.js v3.16.3 中文文档

> 本文档由 Alpine.js 官方英文文档（v3.16.3）翻译整理而成，章节按源文件 frontmatter 中的 `order` 排序，`type: sub-directory` 类型的目录文档嵌套在其对应的类型章节之下。

## 基础

### 本地下载

[本地文件 cdn.min.js](dist/cdn.min.js)

### 安装

有两种方式可以将 Alpine 引入你的项目：

* 通过 `<script>` 标签引入
* 将其作为模块导入

两种方式都完全有效，具体取决于项目的需求和开发者的偏好。

<a name="from-a-script-tag"></a>
#### 通过 script 标签引入

这是开始使用 Alpine 最简单的方式。在你的 HTML 页面的 head 中引入下面的 `<script>` 标签。

```html
<html>
    <head>
        ...

        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </head>
    ...
</html>
```

> 不要忘记 `<script>` 标签中的 "defer" 属性。

注意提供的 CDN 链接中的 `@3.x.x`。这将获取 Alpine 3 的最新版本。为了生产环境的稳定性，建议你在 CDN 链接中硬编码最新版本。

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.16.3/dist/cdn.min.js"></script>
```

就这样！Alpine 现在可以在你的页面中使用了。

请注意，你仍然需要用 `x-data` 定义一个组件，任何 Alpine.js 属性才能正常工作。更多信息请参阅 <https://github.com/alpinejs/alpine/discussions/3805>。

<a name="as-a-module"></a>
#### 作为模块引入

如果你更喜欢更稳健的方式，可以通过 NPM 安装 Alpine 并将其导入到打包文件中。

运行以下命令进行安装。

```shell
npm install alpinejs
```

现在将 Alpine 导入到你的打包文件中并按如下方式初始化：

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```

> `window.Alpine = Alpine` 这行是可选的，但为了自由和灵活性，加上它也不错。例如，当你想从 devtools 中摆弄 Alpine 时。

> 如果你将 Alpine 导入到打包文件中，你必须确保在导入 `Alpine` 全局对象之后、调用 `Alpine.start()` 初始化 Alpine 之前，注册任何扩展代码。

> 确保 `Alpine.start()` 每个页面只调用一次。多次调用会导致多个 Alpine "实例"同时运行。


[→ 了解更多关于扩展 Alpine](/advanced/extending)

### 状态

状态（Alpine 监听变化的 JavaScript 数据）是你在 Alpine 中所做一切的核心。你可以使用 `x-data` 为一段 HTML 提供局部数据，也可以使用 `Alpine.store()` 让数据在页面上的任何地方全局可用。

<a name="local-state-x-data"></a>
#### 局部状态

Alpine 允许你在单个 `x-data` 属性中声明一个 HTML 块的状态，而无需离开你的标记。

这是一个基本示例：

```html
<div x-data="{ open: false }">
    ...
</div>
```

现在，该元素上或内部的任何其他 Alpine 语法都能访问 `open`。正如你所猜测的那样，当 `open` 因任何原因发生变化时，所有依赖它的内容都会自动作出响应。

[→ 了解更多关于 `x-data`](/directives/data)

<a name="nesting-data"></a>
##### 嵌套数据

在 Alpine 中，数据是可以嵌套的。例如，如果两个元素都附加了 Alpine 数据（一个在另一个内部），你可以从子元素内部访问父元素的数据。

```html
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
##### 单元素数据

虽然这对一些人来说可能显而易见，但值得提及的是，Alpine 数据可以在同一个元素内使用。例如：

```html
<button x-data="{ label: 'Click Here' }" x-text="label"></button>
```

<a name="data-less-alpine"></a>
##### 无数据的 Alpine

有时你可能想使用 Alpine 的功能，但不需要任何响应式数据。在这种情况下，你可以完全选择不向 `x-data` 传递表达式。例如：

```html
<button x-data @click="alert('I\'ve been clicked!')">Click Me</button>
```

<a name="re-usable-data"></a>
##### 可复用的数据

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

```html
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
#### 全局状态

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

```html
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

### 模板渲染

Alpine 提供了一些有用的指令，用于操作网页上的 DOM。

这里我们先介绍几个基本的模板指令，但请务必查看侧边栏中可用的指令，以获取完整的列表。

<a name="text-content"></a>
#### 文本内容

Alpine 通过 `x-text` 指令让控制元素的文本内容变得简单。

```html
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

```html
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
#### 切换元素

切换元素是网页和应用程序中的常见需求。下拉菜单、模态框、对话框、"show-more"等都是很好的例子。

Alpine 提供了 `x-show` 和 `x-if` 指令，用于切换页面上的元素。

<a name="x-show"></a>
##### `x-show`

这是一个使用 `x-show` 的简单切换组件。

```html
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
##### `x-if`

这是之前的同一个切换示例，但这次使用 `x-if` 而不是 `x-show`。

```html
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
#### 使用过渡进行切换

Alpine 通过 `x-transition` 指令让在"显示"和"隐藏"状态之间平滑过渡变得简单。

> `x-transition` 只适用于 `x-show`，不适用于 `x-if`。

这里还是那个简单的切换示例，但这次应用了过渡：

```html
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

```html
<div x-show="open" x-transition>
```

单独的 `x-transition` 会为切换应用合理的默认过渡（淡入淡出和缩放）。

有两种方式可以自定义这些过渡：

* 过渡辅助工具
* 过渡 CSS 类。

让我们逐一看看这些方法：

<a name="transition-helpers"></a>
##### 过渡辅助工具

假设你想让过渡的持续时间更长，你可以像这样使用 `.duration` 修饰符手动指定：

```html
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

```html
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

```html
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
##### 过渡类

如果你需要对应用程序中的过渡进行更细粒度的控制，可以使用以下语法在过渡的特定阶段应用特定的 CSS 类（此示例使用 [Tailwind CSS](https://tailwindcss.com/)）：

```html
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
#### 绑定属性

你可以使用 `x-bind` 指令向 Alpine 中的元素添加 `class`、`style`、`disabled` 等 HTML 属性。

下面是一个动态绑定 `class` 属性的示例：

```html
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

```html
<button ... :class="red ? 'bg-red' : ''">
```

根据 Alpine 中的数据切换类的开和关是一个常见需求。下面是一个使用 Alpine 的 `class` 绑定对象语法切换类的示例：（注意：此语法仅适用于 `class` 属性）

```html
<div x-data="{ open: true }">
    <span :class="{ 'hidden': ! open }">...</span>
</div>
```

现在，如果 `open` 为 false，`hidden` 类将被添加到元素上；如果 `open` 为 true，则会被移除。

<a name="looping-elements"></a>
#### 循环元素

Alpine 允许使用 `x-for` 指令根据 JavaScript 数据迭代模板的部分内容。下面是一个简单的示例：

```html
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
#### 内部 HTML

Alpine 通过 `x-html` 指令让控制元素的 HTML 内容变得简单。

```html
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

### 事件

Alpine 让监听浏览器事件并对其作出响应变得简单。

<a name="listening-for-simple-events"></a>
#### 监听简单事件

通过使用 `x-on`，你可以监听在元素上或元素内部触发的浏览器事件。

下面是一个监听按钮点击事件的基本示例：

```html
<button x-on:click="console.log('clicked')">...</button>
```

作为替代方案，如果你愿意，可以使用事件简写语法：`@`。下面是之前的同一个示例，但使用了简写语法（从现在开始我们将一直使用它）：

```html
<button @click="...">...</button>
```

除了 `click`，你还可以按名称监听任何浏览器事件。例如：`@mouseenter`、`@keyup` 等都是有效的语法。

<a name="listening-for-specific-keys"></a>
#### 监听特定按键

假设你想监听 `<input>` 元素内的 `enter` 键被按下。Alpine 通过添加 `.enter` 让这变得简单，如下所示：

```html
<input @keyup.enter="...">
```

你甚至可以组合按键修饰符来监听组合按键，例如按住 `shift` 的同时按下 `enter`：

```html
<input @keyup.shift.enter="...">
```

<a name="preventing-default"></a>
#### 阻止默认行为

在对浏览器事件作出响应时，通常需要"阻止默认行为"（阻止浏览器事件的默认行为）。

例如，如果你想监听表单提交，但阻止浏览器发送表单请求，可以使用 `.prevent`：

```html
<form @submit.prevent="...">...</form>
```

你还可以应用 `.stop` 来实现与 `event.stopPropagation()` 相同的效果。

<a name="accessing-the-event-object"></a>
#### 访问事件对象

有时你可能想在自己的代码中访问原生浏览器事件对象。为了简化这一点，Alpine 会自动注入一个 `$event` 魔法变量：

```html
<button @click="$event.target.remove()">Remove Me</button>
```

<a name="dispatching-custom-events"></a>
#### 派发自定义事件

除了监听浏览器事件，你还可以派发事件。这对于与其他 Alpine 组件通信，或在 Alpine 之外的工具中触发事件非常有用。

Alpine 为此暴露了一个名为 `$dispatch` 的魔法辅助方法：

```html
<div @foo="console.log('foo was dispatched')">
    <button @click="$dispatch('foo')"></button>
</div>
```

如你所见，当按钮被点击时，Alpine 会派发一个名为 "foo" 的浏览器事件，我们在 `<div>` 上的 `@foo` 监听器会捕获它并作出响应。

<a name="listening-for-events-on-window"></a>
#### 在 window 上监听事件

由于浏览器中事件的特性，有时在顶层 window 对象上监听事件会很有用。

这允许你像下面的示例一样在组件之间完全通信：


```html
<div x-data>
    <button @click="$dispatch('foo')"></button>
</div>

<div x-data @foo.window="console.log('foo was dispatched')">...</div>
```

在上面的示例中，如果我们点击第一个组件中的按钮，Alpine 会派发 "foo" 事件。由于事件在浏览器中的工作方式，它们会沿着父元素一路"冒泡"到顶层的 "window"。

现在，因为我们在第二个组件中监听 window 上的 "foo" 事件（使用 `.window`），当按钮被点击时，这个监听器会捕获它并记录 "foo was dispatched" 消息。

[→ 了解更多关于 x-on](/directives/on)

### 生命周期

Alpine 有几种不同的技术，用于接入其生命周期的不同部分。让我们了解一下最有用的几种，以便熟悉它们：

<a name="element-initialization"></a>
#### 元素初始化

Alpine 中另一个极其有用的生命周期钩子是 `x-init` 指令。

`x-init` 可以添加到页面上的任何元素上，当 Alpine 开始初始化该元素时，它会执行你在其中调用的任何 JavaScript。

```html
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
#### 状态改变之后

Alpine 允许你在某块数据（状态）发生变化时执行代码。为此它提供了两种不同的 API：`$watch` 和 `x-effect`。

<a name="watch"></a>
##### `$watch`

```html
<div x-data="{ open: false }" x-init="$watch('open', value => console.log(value))">
```

如上所示，`$watch` 允许你使用点表示法的 key 接入数据变化。当那块数据发生变化时，Alpine 会调用传入的回调，并向它传递新值以及变化前的旧值。

[→ 了解更多关于 $watch](/magics/watch)

<a name="x-effect"></a>
##### `x-effect`

`x-effect` 在底层使用与 `$watch` 相同的机制，但用法完全不同。

`x-effect` 不需要指定你想要监听的哪个数据 key，它会调用提供的代码，并智能地查找其中使用的任何 Alpine 数据。当其中某块数据发生变化时，`x-effect` 表达式将重新运行。

下面是使用 `x-effect` 重写的 `$watch` 示例中的同一段代码：

```html
<div x-data="{ open: false }" x-effect="console.log(open)">
```

现在，这个表达式会立即被调用，并且每次 `open` 更新时都会再次被调用。

这种方法有两个主要的行为差异：

1. 提供的代码会立即运行，并且会在数据变化时运行（`$watch` 是"懒惰"的——在第一次数据变化之前不会运行）
2. 不知道之前的值。（提供给 `$watch` 的回调会同时接收到新值和旧值）

[→ 了解更多关于 x-effect](/directives/effect)

<a name="alpine-initialization"></a>
#### Alpine 初始化

<a name="alpine-initializing"></a>
##### `alpine:init`

确保一段代码在 Alpine 加载之后、但在它在页面上初始化自身之前执行，是一项必要的任务。

这个钩子允许你在 Alpine 在页面上做它的事情之前，注册自定义数据、指令、魔法方法等。

你可以通过监听 Alpine 派发的一个名为 `alpine:init` 的事件来接入生命周期的这个节点。

```js
document.addEventListener('alpine:init', () => {
    Alpine.data(...)
})
```

<a name="alpine-initialized"></a>
##### `alpine:initialized`

Alpine 还提供了一个钩子，你可以在它完成初始化之后执行代码，这个钩子叫做 `alpine:initialized`：

```js
document.addEventListener('alpine:initialized', () => {
    //
})
```

## 指令

### x-data

Alpine 中的一切始于 `x-data` 指令。

`x-data` 将一段 HTML 定义为一个 Alpine 组件，并为该组件提供可供引用的响应式数据。

下面是一个虚构的下拉菜单组件示例：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Content</button>

    <div x-show="open">
        Content...
    </div>
</div>
```

不用担心示例中的其他指令（`@click` 和 `x-show`），我们稍后会讲到它们。现在，让我们先专注于 `x-data`。

<a name="scope"></a>
#### 作用域

在 `x-data` 指令中定义的属性，对其所有的子元素都可用，即使是其他嵌套的 `x-data` 组件内部的元素也是如此。

例如：

```html
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
#### 方法

由于 `x-data` 会像普通 JavaScript 对象一样被求值，因此除了状态之外，你还可以在其中存储方法甚至 getter。

例如，让我们把“Toggle Content”（切换内容）的行为提取为 `x-data` 上的一个方法。

```html
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

```html
<!-- Before -->
<button @click="toggle()">...</button>

<!-- After -->
<button @click="toggle">...</button>
```

<a name="getters"></a>
#### Getters

JavaScript [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 在某个方法的唯一用途是基于其他状态返回数据时非常实用。

你可以把它们想象成“计算属性”（不过，它们不像 Vue 的计算属性那样会被缓存）。

让我们重构组件，改用名为 `isOpen` 的 getter，而不是直接访问 `open`。

```html
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
#### 无数据组件

有时，你想创建一个 Alpine 组件，但不需要任何数据。

在这种情况下，你总是可以传入一个空对象。

```html
<div x-data="{}">
```

不过，如果你觉得更好看，也可以完全省略属性值。

```html
<div x-data>
```

<a name="single-element-components"></a>
#### 单元素组件

有时，你的 Alpine 组件内部可能只有一个元素，如下所示：

```html
<div x-data="{ open: true }">
    <button @click="open = false" x-show="open">Hide Me</button>
</div>
```

在这种情况下，你可以直接在单个元素上声明 `x-data`：

```html
<button x-data="{ open: true }" @click="open = false" x-show="open">
    Hide Me
</button>
```

<a name="re-usable-data"></a>
#### 可复用数据

如果你发现自己重复编写 `x-data` 的内容，或者觉得内联语法过于冗长，可以使用 `Alpine.data` 将 `x-data` 对象提取到一个专门的组件中。

下面是一个快速示例：

```html
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

### x-init

`x-init` 指令允许你挂接到 Alpine 中任意元素的初始化阶段。

```html
<div x-init="console.log('I\'m being initialized!')"></div>
```

在上面的示例中，控制台会在进行进一步的 DOM 更新之前输出“I\'m being initialized!”。

再考虑另一个示例：在组件被处理之前，使用 `x-init` 获取一些 JSON 并将其存储到 `x-data` 中。

```html
<div
    x-data="{ posts: [] }"
    x-init="posts = await (await fetch('/posts')).json()"
>...</div>
```

<a name="next-tick"></a>
#### $nextTick

有时，你想等到 Alpine 完全完成渲染之后再执行某些代码。

这就好比 React 中的 `useEffect(..., [])`，或者 Vue 中的 `mount`。

通过使用 Alpine 内部的 `$nextTick` 魔法属性，你可以实现这一点。

```html
<div x-init="$nextTick(() => { ... })"></div>
```

<a name="standalone-x-init"></a>
#### 独立使用 `x-init`

你可以将 `x-init` 添加到 `x-data` HTML 块内部或外部的任意元素上。例如：

```html
<div x-data>
    <span x-init="console.log('I can initialize')"></span>
</div>

<span x-init="console.log('I can initialize too')"></span>
```

<a name="auto-evaluate-init-method"></a>
#### 自动求值 init() 方法

如果组件的 `x-data` 对象包含 `init()` 方法，它将被自动调用。例如：

```html
<div x-data="{
    init() {
        console.log('I am called automatically')
    }
}">
    ...
</div>
```

对于使用 `Alpine.data()` 语法注册的组件也是如此。

```js
Alpine.data('dropdown', () => ({
    init() {
        console.log('I will get evaluated when initializing each "dropdown" component.')
    },
}))
```

如果同时存在包含 `init()` 方法的 `x-data` 对象和 `x-init` 指令，`x-data` 中的方法将先于该指令被调用。

```html
<div
    x-data="{
        init() {
            console.log('I am called first')
        }
    }"
    x-init="console.log('I am called second')"
    >
    ...
</div>
```

### x-show

`x-show` 是 Alpine 中最有用、最强大的指令之一。它提供了一种富有表现力的方式来显示和隐藏 DOM 元素。

下面是一个使用 `x-show` 的简单下拉菜单组件示例。

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open">
        Dropdown Contents...
    </div>
</div>
```

当点击“Toggle Dropdown”按钮时，下拉菜单将相应地显示和隐藏。

> 如果 `x-show` 在页面加载时的“默认”状态为“false”，你可能需要在页面上使用 `x-cloak` 来避免“页面闪烁”（即浏览器在 Alpine 完成初始化并将其隐藏之前就渲染出你的内容的效果）。你可以在 `x-cloak` 的文档中了解更多相关内容。

<a name="with-transitions"></a>
#### 配合过渡效果

如果你想为 `x-show` 的行为应用平滑的过渡效果，可以将它与 `x-transition` 配合使用。你可以[在此处](/directives/transition)了解更多关于该指令的内容，下面是一个与上面相同的组件的快速示例，只是应用了过渡效果。

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open" x-transition>
        Dropdown Contents...
    </div>
</div>
```

<a name="using-the-important-modifier"></a>
#### 使用 important 修饰符

有时你需要施加更大的力度才能真正隐藏元素。当 CSS 选择器使用 `!important` 标志应用 `display` 属性时，它将优先于 Alpine 设置的内联样式。

在这种情况下，你可以使用 `.important` 修饰符将内联样式设置为 `display: none !important`。

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show.important="open">
        Dropdown Contents...
    </div>
</div>
```

### x-bind

`x-bind` 允许你根据 JavaScript 表达式的求值结果来设置元素的 HTML 属性。

例如，下面这个组件中，我们将使用 `x-bind` 来设置输入框的 placeholder 值。

```html
<div x-data="{ placeholderText: 'Type here...' }">
    <input type="text" x-bind:placeholder="placeholderText">
</div>
```

<a name="shorthand-syntax"></a>
#### 简写语法

如果你觉得 `x-bind:` 过于冗长，可以使用简写形式：`:`。例如，下面是与上面相同的输入元素，只是改用了简写语法。

```html
<input type="text" :placeholder="placeholderText">
```

> 尽管上面的代码片段中没有包含这一点，但如果没有父元素定义 `x-data`，`x-bind` 就无法使用。[→ 了解更多关于 `x-data`](/directives/data)

<a name="binding-classes"></a>
#### 绑定 class

`x-bind` 最常见的用途是根据你的 Alpine 状态在元素上设置特定的 class。

下面是一个简单下拉切换的示例，但我们将不使用 `x-show`，而是使用 "hidden" class 来切换元素的显示。

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div :class="open ? '' : 'hidden'">
        Dropdown Contents...
    </div>
</div>
```

现在，当 `open` 为 `false` 时，"hidden" class 将被添加到下拉菜单上。

<a name="shorthand-conditionals"></a>
##### 简写条件表达式

在这种情况下，如果你喜欢更简洁的语法，可以使用 JavaScript 的短路求值来代替标准的条件表达式：

```html
<div :class="show ? '' : 'hidden'">
<!-- Is equivalent to: -->
<div :class="show || 'hidden'">
```

反之亦然。假设我们不用 `open`，而是使用一个值相反的变量：`closed`。

```html
<div :class="closed ? 'hidden' : ''">
<!-- Is equivalent to: -->
<div :class="closed && 'hidden'">
```

<a name="class-object-syntax"></a>
##### class 对象语法

如果你愿意，Alpine 还提供了一种用于切换 class 的额外语法。通过传入一个以 class 为键、以布尔值为值的 JavaScript 对象，Alpine 将知道要应用哪些 class、要移除哪些 class。例如：

```html
<div :class="{ 'hidden': ! show }">
```

与其他方法相比，这种技术具有独特的优势。使用对象语法时，Alpine 将不会保留已应用到元素 `class` 属性上的原始 class。

例如，如果你想在 Alpine 加载之前就将 "hidden" class 应用到元素上，并且还要使用 Alpine 来切换它的存在与否，那么你只能通过对象语法来实现这种行为：

```html
<div class="hidden" :class="{ 'hidden': ! show }">
```

如果这让你感到困惑，让我们更深入地了解 Alpine 是如何以不同于其他属性的方式处理 `x-bind:class` 的。

<a name="special-behavior"></a>
##### 特殊行为

在底层实现中，`x-bind:class` 的行为与其他属性不同。

请考虑以下情况。

```html
<div class="opacity-50" :class="hide && 'hidden'">
```

如果 "class" 是任何其他属性，`:class` 绑定将会覆盖已有的 class 属性，导致 `opacity-50` 被 `hidden` 或 `''` 覆盖。

然而，Alpine 会以不同的方式处理 `class` 绑定。它足够智能，会保留元素上已有的 class。

例如，如果 `hide` 为 true，上面的示例将产生如下的 DOM 元素：

```html
<div class="opacity-50 hidden">
```

如果 `hide` 为 false，DOM 元素将如下所示：

```html
<div class="opacity-50">
```

对于大多数用户来说，这种行为应该是无感且直观的，但对于好奇的开发者或可能出现的任何特殊情况，还是值得明确提及。

<a name="binding-styles"></a>
#### 绑定 style

与使用 JavaScript 对象绑定 class 的特殊语法类似，Alpine 也提供了一种基于对象来绑定 `style` 属性的语法。

与 class 对象一样，这种语法完全是可选的。只有在对你有益处时才使用它。

```html
<div :style="{ color: 'red', display: 'flex' }">

<!-- Will render: -->
<div style="color: red; display: flex;" ...>
```

使用表达式进行条件内联样式设置是可行的，就像 x-bind:class 一样。同样，在这里也可以使用短路运算符，只需将样式对象作为第二个操作数即可。

```html
<div x-bind:style="true && { color: 'red' }">

<!-- Will render: -->
<div style="color: red;">
```

这种方法的一个优点是能够与元素上已有的样式混合使用：

```html
<div style="padding: 1rem;" :style="{ color: 'red', display: 'flex' }">

<!-- Will render: -->
<div style="padding: 1rem; color: red; display: flex;" ...>
```

与 Alpine 中的大多数表达式一样，你始终可以使用 JavaScript 表达式的求值结果作为引用：

```html
<div x-data="{ styles: { color: 'red', display: 'flex' }}">
    <div :style="styles">
</div>

<!-- Will render: -->
<div ...>
    <div style="color: red; display: flex;" ...>
</div>
```

<a name="bind-directives"></a>
#### 直接绑定 Alpine 指令

`x-bind` 允许你将一个包含各种指令和属性的对象绑定到元素上。

对象的键可以是你在 Alpine 中通常会作为属性名编写的任何内容，包括 Alpine 指令和修饰符，也包括普通的 HTML 属性。对象的值要么是普通字符串，要么在动态 Alpine 指令的情况下，是需要由 Alpine 求值的回调。

```html
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

### x-on

`x-on` 允许你轻松地在已派发的 DOM 事件上运行代码。

下面是一个简单按钮的示例，点击时会弹出一个 alert 提示框。

```html
<button x-on:click="alert('Hello World!')">Say Hi</button>
```

> `x-on` 只能监听小写名称的事件，因为 HTML 属性不区分大小写。编写 `x-on:CLICK` 将监听名为 `click` 的事件。如果你需要监听 camelCase 名称的自定义事件，可以使用 [`.camel` 辅助](#camel) 来绕开这一限制。或者，你也可以使用 [`x-bind`](/directives/bind#bind-directives) 在 javascript 代码中将 `x-on` 指令附加到元素上（这样会保留大小写）。

<a name="shorthand-syntax"></a>
#### 简写语法

如果你觉得 `x-on:` 过于冗长，可以使用简写语法：`@`。

下面是与上面相同的组件，只是改用了简写语法：

```html
<button @click="alert('Hello World!')">Say Hi</button>
```

> 尽管上面的代码片段中没有包含这一点，但如果没有父元素定义 `x-data`，`x-on` 就无法使用。[→ 了解更多关于 `x-data`](/directives/data)

<a name="the-event-object"></a>
#### 事件对象

如果你想在表达式中访问原生的 JavaScript 事件对象，可以使用 Alpine 的魔法属性 `$event`。

```html
<button @click="alert($event.target.getAttribute('message'))" message="Hello World">Say Hi</button>
```

此外，对于任何不带尾随括号引用的方法，Alpine 也会将事件对象传递给它。例如：

```html
<button @click="handleClick">...</button>

<script>
    function handleClick(e) {
        // Now you can access the event object (e) directly
    }
</script>
```

<a name="keyboard-events"></a>
#### 键盘事件

Alpine 让监听特定按键上的 `keydown` 和 `keyup` 事件变得轻而易举。

下面是在输入元素中监听 `Enter` 键的示例。

```html
<input type="text" @keyup.enter="alert('Submitted!')">
```

你也可以串联这些按键修饰符，以实现更复杂的监听器。

下面这个监听器会在按住 `Shift` 键并按下 `Enter` 时运行，而单独按下 `Enter` 时不会运行。

```html
<input type="text" @keyup.shift.enter="alert('Submitted!')">
```

你可以将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露出的任何有效按键名称转换为 kebab-case 后，直接用作修饰符。

```html
<input type="text" @keyup.page-down="alert('Submitted!')">
```

为了方便查阅，下面列出了你可能想要监听的一些常用按键。

| 修饰符                        | 键盘按键                          |
| ------------------------------ | ---------------------------------- |
| `.shift`                       | Shift                              |
| `.enter`                       | Enter                              |
| `.space`                       | Space                              |
| `.ctrl`                        | Ctrl                               |
| `.cmd`                         | Cmd                                |
| `.meta`                        | Mac 上的 Cmd 键，Windows 上的 Windows 键 |
| `.alt`                         | Alt                                |
| `.up` `.down` `.left` `.right` | 上/下/左/右方向键                  |
| `.escape`                      | Escape                             |
| `.tab`                         | Tab                                |
| `.caps-lock`                   | Caps Lock                          |
| `.equal`                       | 等号, `=`                          |
| `.period`                      | 句点, `.`                          |
| `.comma`                       | 逗号, `,`                          |
| `.slash`                       | 正斜杠, `/`                        |

<a name="mouse-events"></a>
#### 鼠标事件

与上面的键盘事件类似，Alpine 允许使用一些按键修饰符来处理 `click` 事件。

| 修饰符 | 事件键 |
| -------- | --------- |
| `.shift` | shiftKey  |
| `.ctrl`  | ctrlKey   |
| `.cmd`   | metaKey   |
| `.meta`  | metaKey   |
| `.alt`   | altKey    |

它们适用于 `click`、`auxclick`、`context` 和 `dblclick` 事件，甚至也适用于 `mouseover`、`mousemove`、`mouseenter`、`mouseleave`、`mouseout`、`mouseup` 和 `mousedown` 事件。

下面是一个按钮的示例，当按住 `Shift` 键时，它的行为会发生变化。

```html
<button type="button"
    x-data="{ message: 'select' }"
    @click="message = 'selected'"
    @click.shift="message = 'added to selection'"
    @mousemove.shift="message = 'add to selection'"
    @mouseout="message = 'select'"
    x-text="message"></button>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <button type="button"
            x-data="{ message: 'select' }"
            @click="message = 'selected'"
            @click.shift="message = 'added to selection'"
            @mousemove.shift="message = 'add to selection'"
            @mouseout="message = 'select'"
            x-text="message"></button>
    </div>
</div>
<!-- END_VERBATIM -->

> **注意：** 在大多数浏览器中，带有某些修饰符（如 `ctrl`）的普通点击事件将自动变成 `contextmenu` 事件。同样，`right-click` 事件会触发 `contextmenu` 事件，但如果 `contextmenu` 事件被阻止，它也会触发 `auxclick` 事件。

<a name="custom-events"></a>
#### 自定义事件

Alpine 事件监听器是原生 DOM 事件监听器的封装。因此，它们可以监听任何 DOM 事件，包括自定义事件。

下面是一个组件示例，它既派发自定义 DOM 事件，也监听该事件。

```html
<div x-data @foo="alert('Button Was Clicked!')">
    <button @click="$event.target.dispatchEvent(new CustomEvent('foo', { bubbles: true }))">...</button>
</div>
```

当按钮被点击时，`@foo` 监听器将被调用。

由于 `.dispatchEvent` API 过于冗长，Alpine 提供了 `$dispatch` 辅助工具来简化操作。

下面是用 `$dispatch` 魔法属性重写的同一个组件。

```html
<div x-data @foo="alert('Button Was Clicked!')">
    <button @click="$dispatch('foo')">...</button>
</div>
```

[→ 了解更多关于 `$dispatch`](/magics/dispatch)

<a name="modifiers"></a>
#### 修饰符

Alpine 提供了许多指令修饰符，用于自定义事件监听器的行为。

<a name="prevent"></a>
##### .prevent

`.prevent` 等同于在监听器内部对浏览器事件对象调用 `.preventDefault()`。

```html
<form @submit.prevent="console.log('submitted')" action="/foo">
    <button>Submit</button>
</form>
```

在上面的示例中，由于使用了 `.prevent`，点击按钮将不会把表单提交到 `/foo` 端点。相反，Alpine 的监听器会处理它，并“阻止”该事件被进一步处理。

<a name="stop"></a>
##### .stop

与 `.prevent` 类似，`.stop` 等同于在监听器内部对浏览器事件对象调用 `.stopPropagation()`。

```html
<div @click="console.log('I will not get logged')">
    <button @click.stop>Click Me</button>
</div>
```

在上面的示例中，点击按钮将不会输出日志消息。这是因为我们立即停止了事件的传播，不允许它“冒泡”到带有 `@click` 监听器的 `<div>` 上。

<a name="outside"></a>
##### .outside

`.outside` 是一个便捷辅助，用于监听其所附加元素外部的点击。下面是一个简单的下拉菜单组件示例：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" @click.outside="open = false">
        Contents...
    </div>
</div>
```

在上面的示例中，点击“Toggle”按钮显示下拉菜单内容后，你可以通过点击页面上内容之外的任何位置来关闭下拉菜单。

这是因为 `.outside` 监听的是并非源自其所注册元素的点击。

> 值得注意的是，`.outside` 表达式只会在其所注册的元素在页面上可见时才会被求值。否则，就会出现棘手的竞态条件：当元素不可见时，点击“Toggle”按钮也会触发 `@click.outside` 处理器。

<a name="window"></a>
##### .window

当存在 `.window` 修饰符时，Alpine 将把事件监听器注册到页面根部的 `window` 对象上，而不是元素本身。

```html
<div @keyup.escape.window="...">...</div>
```

上面的代码片段将监听页面上任何位置按下的“escape”键。

当你的标记中有一小部分关心发生在整个页面上的事件时，为监听器添加 `.window` 会非常有用。

<a name="document"></a>
##### .document

`.document` 的工作方式与 `.window` 类似，只是它将监听器注册在全局的 `document` 对象上，而不是全局的 `window` 对象上。

<a name="once"></a>
##### .once

通过为监听器添加 `.once`，你可以确保处理器只被调用一次。

```html
<button @click.once="console.log('I will only log once')">...</button>
```

<a name="debounce"></a>
##### .debounce

有时，对事件处理器进行“防抖”是很有用的，这样它只会在经过一段特定的无操作时间之后才会被调用（默认 250 毫秒）。

例如，如果你有一个搜索框，会在用户输入时发起网络请求，那么添加防抖将防止网络请求在每次按键时都触发。

```html
<input @input.debounce="fetchResults">
```

现在，`fetchResults` 不会在每次按键后都被调用，而只会在 250 毫秒内没有任何按键之后才被调用。

如果你想延长或缩短防抖时间，可以在 `.debounce` 修饰符后面附加一个时长，如下所示：

```html
<input @input.debounce.500ms="fetchResults">
```

现在，`fetchResults` 只会在 500 毫秒无操作之后才被调用。

<a name="throttle"></a>
##### .throttle

`.throttle` 与 `.debounce` 类似，不同的是它会每 250 毫秒释放一次处理器调用，而不是无限期地延迟。

这在事件可能重复且长时间触发的情况下很有用，此时使用 `.debounce` 并不合适，因为你希望仍然每隔一段时间就处理一次事件。

例如：

```html
<div @scroll.window.throttle="handleScroll">...</div>
```

上面的示例是节流的绝佳用例。如果没有 `.throttle`，当用户向下滚动页面时，`handleScroll` 方法将被触发数百次，这会严重拖慢网站速度。通过添加 `.throttle`，我们可以确保 `handleScroll` 每 250 毫秒才被调用一次。

> **有趣的事实：** 这个文档站点正是使用了这种策略来更新右侧边栏中当前高亮的章节。

与 `.debounce` 一样，你也可以为节流事件添加自定义时长：

```html
<div @scroll.window.throttle.750ms="handleScroll">...</div>
```

现在，`handleScroll` 将每 750 毫秒被调用一次。

<a name="self"></a>
##### .self

通过为事件监听器添加 `.self`，你可以确保事件起源于声明该监听器的元素本身，而不是子元素。

```html
<button @click.self="handleClick">
    Click Me

    <img src="...">
</button>
```

在上面的示例中，我们在 `<button>` 标签内有一个 `<img>` 标签。通常情况下，任何起源于 `<button>` 元素内部的点击（例如在 `<img>` 上）都会被按钮上的 `@click` 监听器捕获。

然而，在这个例子中，由于我们添加了 `.self`，只有点击按钮本身才会调用 `handleClick`。只有起源于 `<img>` 元素的点击将不会被处理。

<a name="camel"></a>
##### .camel

```html
<div @custom-event.camel="handleCustomEvent">
    ...
</div>
```

有时你可能想监听 camelCase 命名的事件，比如我们示例中的 `customEvent`。由于 HTML 属性中不支持 camelCase 写法，因此有必要添加 `.camel` 修饰符，让 Alpine 在内部将事件名称转换为 camelCase。

在上面的示例中添加 `.camel` 后，Alpine 现在监听的是 `customEvent` 而不是 `custom-event`。

<a name="dot"></a>
##### .dot

```html
<div @custom-event.dot="handleCustomEvent">
    ...
</div>
```

与 `.camelCase` 修饰符类似，在某些情况下你可能想监听名称中包含点的自定义事件（如 `custom.event`）。由于事件名称中的点被 Alpine 保留，你需要用短横线来书写它们，并添加 `.dot` 修饰符。

在上面的代码示例中，`custom-event.dot` 将对应于事件名称 `custom.event`。

<a name="passive"></a>
##### .passive

即使在页面上执行 JavaScript 时，浏览器也会优化页面滚动，使其快速流畅。然而，实现不当的触摸和滚轮监听器会阻碍这种优化，并导致网站性能不佳。

如果你正在监听触摸事件，务必为监听器添加 `.passive`，以免阻碍滚动性能。

```html
<div @touchstart.passive="...">...</div>
```

[→ 了解更多关于 passive 监听器的内容](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners)

<a name="passive-false"></a>
##### .passive.false

在现代浏览器中，触摸和滚轮事件监听器默认是 passive 的。传入 `.passive.false` 可以使这些事件可取消，这样你就可以对它们调用 `preventDefault`。

```html
<div @touchmove.passive.false="$event.preventDefault()">...</div>
```

##### .capture

如果你想在事件的捕获阶段执行此监听器，请添加此修饰符，例如在事件从目标元素沿 DOM 向上冒泡之前。

```html
<div @click.capture="console.log('I will log first')">
    <button @click="console.log('I will log second')"></button>
</div>
```

[→ 了解更多关于事件捕获与冒泡阶段的内容](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture)

### x-text

`x-text` 会将元素的文本内容设置为给定表达式的结果。

下面是一个使用 `x-text` 显示用户用户名的基本示例。

```html
<div x-data="{ username: 'calebporzio' }">
    Username: <strong x-text="username"></strong>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: 'calebporzio' }">
        Username: <strong x-text="username"></strong>
    </div>
</div>
<!-- END_VERBATIM -->

现在，`<strong>` 标签的文本内容将被设置为 “calebporzio”。

### x-html

`x-html` 会将元素的 "innerHTML" 属性设置为给定表达式的结果。

> ⚠️ 仅对可信内容使用，切勿用于用户提供的内容。⚠️
> 动态渲染来自第三方的 HTML 很容易导致 XSS 漏洞。

下面是一个使用 `x-html` 显示用户用户名的基本示例。

```html
<div x-data="{ username: '<strong>calebporzio</strong>' }">
    Username: <span x-html="username"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: '<strong>calebporzio</strong>' }">
        Username: <span x-html="username"></span>
    </div>
</div>
<!-- END_VERBATIM -->

现在，`<span>` 标签的内部 HTML 将被设置为 “<strong>calebporzio</strong>”。

### x-model

`x-model` 允许你将输入元素的值绑定到 Alpine 数据。

下面是一个使用 `x-model` 将文本字段的值绑定到 Alpine 中某个数据的简单示例。

```html
<div x-data="{ message: '' }">
    <input type="text" x-model="message">

    <span x-text="message"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message...">

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->


现在，当用户在文本字段中输入时，`message` 会实时反映在 `<span>` 标签中。

`x-model` 是双向绑定的，这意味着它既能"设置"也能"获取"。除了修改数据之外，如果数据本身发生变化，元素也会反映这一变化。


我们可以使用与上面相同的示例，但这次我们将添加一个按钮来修改 `message` 属性的值。

```html
<div x-data="{ message: '' }">
    <input type="text" x-model="message">

    <button x-on:click="message = 'changed'">Change Message</button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message...">

        <button x-on:click="message = 'changed'">Change Message</button>
    </div>
</div>
<!-- END_VERBATIM -->

现在，当 `<button>` 被点击时，输入元素的值将立即更新为 “changed”。

`x-model` 适用于以下输入元素：

* `<input type="text">`
* `<textarea>`
* `<input type="checkbox">`
* `<input type="radio">`
* `<select>`
* `<input type="range">`

<a name="text-inputs"></a>
#### 文本输入

```html
<input type="text" x-model="message">

<span x-text="message"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message">

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->

> 尽管上面的代码片段中没有包含，但如果没有任何父元素定义 `x-data`，则无法使用 `x-model`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="textarea-inputs"></a>
#### 文本域输入

```html
<textarea x-model="message"></textarea>

<span x-text="message"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <textarea x-model="message" placeholder="Type message"></textarea>

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="checkbox-inputs"></a>
#### 复选框输入

<a name="single-checkbox-with-boolean"></a>
##### 带布尔值的单个复选框

```html
<input type="checkbox" id="checkbox" x-model="show">

<label for="checkbox" x-text="show"></label>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: '' }">
        <input type="checkbox" id="checkbox" x-model="open">

        <label for="checkbox" x-text="open"></label>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="multiple-checkboxes-bound-to-array"></a>
##### 绑定到数组的多个复选框

```html
<input type="checkbox" value="red" x-model="colors">
<input type="checkbox" value="orange" x-model="colors">
<input type="checkbox" value="yellow" x-model="colors">

Colors: <span x-text="colors"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ colors: [] }">
        <input type="checkbox" value="red" x-model="colors">
        <input type="checkbox" value="orange" x-model="colors">
        <input type="checkbox" value="yellow" x-model="colors">

        <div class="pt-4">Colors: <span x-text="colors"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="radio-inputs"></a>
#### 单选按钮输入

```html
<input type="radio" value="yes" x-model="answer">
<input type="radio" value="no" x-model="answer">

Answer: <span x-text="answer"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ answer: '' }">
        <input type="radio" value="yes" x-model="answer">
        <input type="radio" value="no" x-model="answer">

        <div class="pt-4">Answer: <span x-text="answer"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="select-inputs"></a>
#### 下拉选择输入


<a name="single-select"></a>
##### 单个下拉选择

```html
<select x-model="color">
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Color: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="single-select-with-placeholder"></a>
##### 带占位符的单个下拉选择

```html
<select x-model="color">
    <option value="" disabled>Select A Color</option>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Color: <span x-text="color"></span>
```


<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <option value="" disabled>Select A Color</option>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="multiple-select"></a>
##### 多选下拉选择

```html
<select x-model="color" multiple>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Colors: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color" multiple>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="dynamically-populated-select-options"></a>
##### 动态填充的下拉选择选项

```html
<select x-model="color">
    <template x-for="color in ['Red', 'Orange', 'Yellow']">
        <option x-text="color"></option>
    </template>
</select>

Color: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <template x-for="color in ['Red', 'Orange', 'Yellow']">
                <option x-text="color"></option>
            </template>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="range-inputs"></a>
#### 范围（滑块）输入

```html
<input type="range" x-model="range" min="0" max="1" step="0.1">

<span x-text="range"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ range: 0.5 }">
        <input type="range" x-model="range" min="0" max="1" step="0.1">

        <div class="pt-4" x-text="range"></div>
    </div>
</div>
<!-- END_VERBATIM -->


<a name="modifiers"></a>
#### 修饰符

<a name="lazy"></a>
##### `.lazy`

对于文本输入，默认情况下，`x-model` 会在每次按键时更新属性。通过添加 `.lazy` 修饰符，你可以强制 `x-model` 输入仅在用户将焦点移开输入元素时才更新属性。

这对于实时表单验证等场景非常有用，例如你可能希望在用户按 Tab 键离开某个字段之前，不显示输入验证错误。

```html
<input type="text" x-model.lazy="username">
<span x-show="username.length > 20">The username is too long.</span>
```

<a name="change"></a>
##### `.change`

`.change` 仅在输入失去焦点且其值已发生变化时（即原生的 `change` 事件）同步数据。它在功能上等同于 `.lazy`。

```html
<input type="text" x-model.change="username">
```

<a name="blur"></a>
##### `.blur`

`.blur` 在输入失去焦点时同步数据，无论值是否发生变化。

```html
<input type="text" x-model.blur="email">
```

<a name="enter"></a>
##### `.enter`

`.enter` 在用户按下 Enter 键时同步数据。这对于搜索字段非常有用，因为你可能只想在用户明确提交时才触发某个操作。

```html
<input type="text" x-model.enter="search">
```

> 注意：`.enter` 不会阻止默认行为。如果输入位于表单内，表单仍然会提交。

<a name="combining-event-modifiers"></a>
##### 组合事件修饰符

`.change`、`.blur` 和 `.enter` 修饰符可以组合使用，以便在多个事件上同步。当你希望让用户在提交数据的方式上拥有灵活性时，这非常有用。

```html
<!-- Sync on blur OR enter -->
<input type="text" x-model.blur.enter="search" placeholder="Press Enter or click away">

<!-- Sync on change, blur, OR enter -->
<input type="text" x-model.change.blur.enter="message">
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ search: '' }">
        <input type="text" x-model.blur.enter="search" placeholder="Press Enter or click away">

        <div class="pt-4">Search: <span x-text="search"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="number"></a>
##### `.number`

默认情况下，通过 `x-model` 存储在属性中的任何数据都会以字符串形式存储。要强制 Alpine 以 JavaScript 数字的形式存储该值，请添加 `.number` 修饰符。

```html
<input type="text" x-model.number="age">
<span x-text="typeof age"></span>
```

<a name="boolean"></a>
##### `.boolean`

默认情况下，通过 `x-model` 存储在属性中的任何数据都会以字符串形式存储。要强制 Alpine 以 JavaScript 布尔值的形式存储该值，请添加 `.boolean` 修饰符。整数（1/0）和字符串（true/false）都是有效的布尔值。

```html
<select x-model.boolean="isActive">
    <option value="true">Yes</option>
    <option value="false">No</option>
</select>
<span x-text="typeof isActive"></span>
```

<a name="debounce"></a>
##### `.debounce`

通过为 `x-model` 添加 `.debounce`，你可以轻松地对绑定输入的更新进行防抖处理。

这对于实时搜索输入等场景非常有用，这类输入会在搜索属性每次变化时从服务器获取新数据。

```html
<input type="text" x-model.debounce="search">
```

默认的防抖时间为 250 毫秒，你可以像下面这样通过添加时间修饰符轻松自定义。

```html
<input type="text" x-model.debounce.500ms="search">
```

<a name="throttle"></a>
##### `.throttle`

与 `.debounce` 类似，你可以将 `x-model` 触发的属性更新限制为仅按指定间隔更新。

<input type="text" x-model.throttle="search">

默认的节流间隔为 250 毫秒，你可以像下面这样通过添加时间修饰符轻松自定义。

```html
<input type="text" x-model.throttle.500ms="search">
```

<a name="fill"></a>
##### `.fill`

默认情况下，如果输入带有 value 属性，Alpine 会忽略它，转而将输入的值设置为使用 `x-model` 绑定的属性的值。

但如果绑定的属性为空，你可以通过添加 `.fill` 修饰符，利用输入的 value 属性来填充该属性。

<div x-data="{ message: null }">
  <input type="text" x-model.fill="message" value="This is the default message.">
</div>

<a name="programmatic access"></a>
#### 编程式访问

Alpine 暴露了用于获取和设置通过 `x-model` 绑定的属性的底层工具。这对于可能需要覆盖默认 x-model 行为的复杂 Alpine 工具，或希望允许在非输入元素上使用 `x-model` 的情况非常有用。

你可以通过 `x-model` 所绑定元素上的 `_x_model` 属性来访问这些工具。`_x_model` 提供了两个方法用于获取和设置绑定的属性：

* `el._x_model.get()`（返回绑定属性的值）
* `el._x_model.set()`（设置绑定属性的值）

```html
<div x-data="{ username: 'calebporzio' }">
    <div x-ref="div" x-model="username"></div>

    <button @click="$refs.div._x_model.set('phantomatrix')">
        Change username to: 'phantomatrix'
    </button>

    <span x-text="$refs.div._x_model.get()"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: 'calebporzio' }">
        <div x-ref="div" x-model="username"></div>

        <button @click="$refs.div._x_model.set('phantomatrix')">
            Change username to: 'phantomatrix'
        </button>
    
        <span x-text="$refs.div._x_model.get()"></span>
    </div>
</div>
<!-- END_VERBATIM -->

### x-modelable

`x-modelable` 允许你将 Alpine 状态暴露为 `x-model` 指令的目标。

下面是一个使用 `x-modelable` 暴露变量以供 `x-model` 绑定的简单示例。

```html
<div x-data="{ number: 5 }">
    <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
        <button @click="count++">Increment</button>
    </div>

    Number: <span x-text="number"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ number: 5 }">
        <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
            <button @click="count++">Increment</button>
        </div>

        Number: <span x-text="number"></span>
    </div>
</div>
<!-- END_VERBATIM -->

如你所见，外部作用域的属性 "number" 现在已绑定到内部作用域的属性 "count"。

通常，此功能会与 Laravel Blade 等后端模板框架结合使用。它有助于将 Alpine 组件抽象到后端模板中，并通过 `x-model` 像原生输入一样将状态暴露给外部。

#### 支持的值

`x-modelable` 通过以 JSON 形式克隆值来保持内部和外部状态的独立。因此，它适用于与 JSON 兼容的状态，例如字符串、数字、布尔值、`null`、数组，以及包含这些值的普通对象。

浏览器对象及其他无法表示为 JSON 的状态无法完好无损地跨越这一边界。例如，`File` 会丢失其 name、size 和 type 等属性。同样的限制也适用于 `FileList`、`Map`、`Set`、`Date`、类实例和 DOM 节点等值。

对于会产生这些值之一的自定义输入，请省略 `x-modelable`，改为[派发 `input` 事件](/magics/dispatch#dispatching-to-x-model)。`x-model` 会直接从事件中读取值，而不会克隆它：

```html
<div x-data="{ files: [] }">
    <div x-model="files">
        <input
            type="file"
            multiple
            @change="$dispatch('input', Array.from($event.target.files))"
        >
    </div>

    <template x-for="file in files" :key="file.name">
        <p x-text="file.name"></p>
    </template>
</div>
```

### x-for

Alpine 的 `x-for` 指令允许你通过遍历列表来创建 DOM 元素。下面是一个使用它根据数组创建颜色列表的简单示例。

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

<!-- START_VERBATIM -->
<div class="demo">
    <ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
        <template x-for="color in colors">
            <li x-text="color"></li>
        </template>
    </ul>
</div>
<!-- END_VERBATIM -->

你也可以向 `x-for` 传递对象。

```html
<ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
    <template x-for="(value, index) in car">
        <li>
            <span x-text="index"></span>: <span x-text="value"></span>
        </li>
    </template>
</ul>
```

<!-- START_VERBATIM -->
<div class="demo">
    <ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
        <template x-for="(value, index) in car">
            <li>
                <span x-text="index"></span>: <span x-text="value"></span>
            </li>
        </template>
    </ul>
</div>
<!-- END_VERBATIM -->

关于 `x-for`，有两条值得注意的规则：

> `x-for` 必须声明在 `<template>` 元素上。
> 该 `<template>` 元素必须只包含一个根元素

<a name="keys"></a>
#### 键（Keys）

如果你要重新排列项目，为每次 `x-for` 迭代指定唯一的键非常重要。如果没有动态键，Alpine 可能难以跟踪项目的重新排序，并会产生奇怪的副作用。

```html
<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id">
        <li x-text="color.label"></li>
    </template>
</ul>
```

现在，如果颜色被添加、移除、重新排序，或者它们的 "id" 发生变化，Alpine 将相应地保留或销毁被迭代的 `<li>` 元素。

<a name="accessing-indexes"></a>
#### 访问索引

如果你需要访问迭代中每个项目的索引，可以使用 `([item], [index]) in [items]` 语法，如下所示：

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="(color, index) in colors">
        <li>
            <span x-text="index + ': '"></span>
            <span x-text="color"></span>
        </li>
    </template>
</ul>
```

你也可以在动态 `:key` 表达式中访问索引。

```html
<template x-for="(color, index) in colors" :key="index">
```

<a name="iterating-over-a-range"></a>
#### 按范围迭代

如果你只需要简单地循环 `n` 次，而不是遍历数组，Alpine 提供了一种简写语法。

```html
<ul>
    <template x-for="i in 10">
        <li x-text="i"></li>
    </template>
</ul>
```

在这种情况下，`i` 可以命名为任何你喜欢的名称。

> 尽管上面的代码片段中没有包含，但如果没有任何父元素定义 `x-data`，则无法使用 `x-for`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="contents-of-a-template"></a>
#### `<template>` 的内容

如上所述，`<template>` 标签必须只包含一个根元素。

例如，以下代码将无法正常工作：

```html
<template x-for="color in colors">
    <span>The next color is </span><span x-text="color">
</template>
```

但以下代码可以正常工作：
```html
<template x-for="color in colors">
    <p>
        <span>The next color is </span><span x-text="color">
    </p>
</template>
```

### x-transition

Alpine 开箱即用地提供了一个强大的过渡工具。只需几个 `x-transition` 指令，你就可以在元素显示或隐藏时创建平滑的过渡效果。

在 Alpine 中有两种处理过渡的主要方式：

* [过渡辅助指令](#the-transition-helper)
* [应用 CSS 类](#applying-css-classes)

<a name="the-transition-helper"></a>
#### 过渡辅助指令

使用 Alpine 实现过渡最简单的方法是在带有 `x-show` 的元素上添加 `x-transition`。例如：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" x-transition>
        Hello 👋
    </div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle</button>

        <div x-show="open" x-transition>
            Hello 👋
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

正如你所看到的，默认情况下，`x-transition` 会应用令人愉悦的默认过渡设置，使显示出来的元素淡入淡出并进行缩放。

你可以通过附加到 `x-transition` 上的修饰符来覆盖这些默认设置。让我们来看看这些修饰符。

<a name="customizing-duration"></a>
##### 自定义持续时间

初始情况下，进入时持续时间设置为 150 毫秒，离开时设置为 75 毫秒。

你可以使用 `.duration` 修饰符配置过渡所需的持续时间：

```html
<div ... x-transition.duration.500ms>
```

上面的 `<div>` 在进入时会过渡 500 毫秒，离开时也会过渡 500 毫秒。

如果你希望分别为进入和离开定制持续时间，可以像这样操作：

```html
<div ...
    x-transition:enter.duration.500ms
    x-transition:leave.duration.400ms
>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-transition`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="customizing-delay"></a>
##### 自定义延迟

你可以像这样使用 `.delay` 修饰符来延迟过渡：

```html
<div ... x-transition.delay.50ms>
```

上面的示例将使元素的进入和离开过渡都延迟 50 毫秒。

<a name="customizing-opacity"></a>
##### 自定义透明度

默认情况下，Alpine 的 `x-transition` 会同时应用缩放和透明度过渡，以实现“淡入淡出”效果。

如果你只想应用透明度过渡（不进行缩放），可以像这样实现：

```html
<div ... x-transition.opacity>
```

<a name="customizing-scale"></a>
##### 自定义缩放

与 `.opacity` 修饰符类似，你可以将 `x-transition` 配置为仅进行缩放（同时不进行透明度过渡），如下所示：

```html
<div ... x-transition.scale>
```

`.scale` 修饰符还提供了配置缩放值和原点值的能力：

```html
<div ... x-transition.scale.80>
```

上面的代码片段会将元素放大和缩小 80%。

同样，你可以像这样分别为进入和离开过渡定制这些值：

```html
<div ...
    x-transition:enter.scale.80
    x-transition:leave.scale.90
>
```

要自定义缩放过渡的原点，你可以使用 `.origin` 修饰符：

```html
<div ... x-transition.scale.origin.top>
```

现在缩放将以元素的顶部作为原点，而不是默认的中心。

正如你可能已经猜到的，此自定义的可能值为：`top`、`bottom`、`left` 和 `right`。

如果你愿意，还可以组合两个原点值。例如，如果你希望缩放的原点是“右上角”，可以使用 `.origin.top.right` 作为修饰符。


<a name="applying-css-classes"></a>
#### 应用 CSS 类

为了直接控制过渡中的具体内容，你可以在过渡的不同阶段应用 CSS 类。

> 以下示例使用了 [TailwindCSS](https://tailwindcss.com/docs/transition-property) 工具类。

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90"
    >Hello 👋</div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 transform scale-90"
        x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90"
    >Hello 👋</div>
</div>
</div>
<!-- END_VERBATIM -->

| 指令           | 描述 |
| ---            | --- |
| `:enter`       | 在整个进入阶段应用。 |
| `:enter-start` | 在元素插入之前添加，在元素插入一帧后移除。 |
| `:enter-end`   | 在元素插入一帧后添加（与 `enter-start` 移除同时），在过渡/动画结束时移除。
| `:leave`       | 在整个离开阶段应用。 |
| `:leave-start` | 在离开过渡触发时立即添加，一帧后移除。 |
| `:leave-end`   | 在离开过渡触发一帧后添加（与 `leave-start` 移除同时），在过渡/动画结束时移除。

### x-effect

`x-effect` 是一个有用的指令，用于在其某个依赖发生变化时重新求值表达式。你可以把它看作一个侦听器，无需指定要侦听哪个属性，它会侦听其中使用的所有属性。

如果这个定义让你感到困惑，没关系。通过一个例子可以更好地解释它：

```html
<div x-data="{ label: 'Hello' }" x-effect="console.log(label)">
    <button @click="label += ' World!'">Change Message</button>
</div>
```

当这个组件加载时，`x-effect` 表达式会被执行，并在控制台中输出 “Hello”。

由于 Alpine 能感知 `x-effect` 中包含的所有属性引用，当按钮被点击且 `label` 发生变化时，该效果会被重新触发，并在控制台中输出 “Hello World!”。

### x-ignore

默认情况下，Alpine 会遍历并初始化包含 `x-init` 或 `x-data` 的元素的整个 DOM 树。

如果出于某种原因，你不希望 Alpine 处理 HTML 中的某个特定区域，你可以使用 `x-ignore` 来阻止它这样做。

```html
<div x-data="{ label: 'From Alpine' }">
    <div x-ignore>
        <span x-text="label"></span>
    </div>
</div>
```

在上面的示例中，`<span>` 标签将不会包含 “From Alpine”，因为我们告诉 Alpine 完全忽略该 `div` 的内容。

### x-ref

`x-ref` 与 `$refs` 结合使用是一个有用的工具，可以轻松地直接访问 DOM 元素。它作为 `getElementById` 和 `querySelector` 等 API 的替代方案最为有用。

```html
<button @click="$refs.text.remove()">Remove Text</button>

<span x-ref="text">Hello 👋</span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data>
        <button @click="$refs.text.remove()">Remove Text</button>

        <div class="pt-4" x-ref="text">Hello 👋</div>
    </div>
</div>
<!-- END_VERBATIM -->

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-ref`。[→ 了解更多关于 `x-data`](/directives/data)

### x-cloak

有时，当你在模板的某一部分使用 AlpineJS 时，会出现一个“闪烁”，即页面加载后、Alpine 加载前，你可能会看到尚未初始化的模板。

`x-cloak` 通过隐藏它所附加的元素来解决这个问题，直到 Alpine 在页面上完全加载。

不过，要让 `x-cloak` 生效，你必须在页面中添加以下 CSS：

```css
[x-cloak] { display: none !important; }
```

下面的示例会隐藏 `<span>` 标签，直到其 `x-show` 被明确设置为 true，从而防止隐藏元素在 Alpine 加载时“闪现”到屏幕上。

```html
<span x-cloak x-show="false">This will not 'blip' onto screen at any point</span>
```

`x-cloak` 不仅适用于被 `x-show` 或 `x-if` 隐藏的元素：它还能确保包含数据的元素在数据被正确设置之前保持隐藏。下面的示例会隐藏 `<span>` 标签，直到 Alpine 将其文本内容设置为 `message` 属性。

```html
<span x-cloak x-text="message"></span>
```

当 Alpine 在页面上加载时，它会从元素上移除 `x-cloak` 属性，这也会移除 CSS 应用的 `display: none;`，从而显示该元素。

#### 全局语法的替代方案

如果你希望实现同样的行为，但又不想包含全局样式，可以使用下面这个很酷、但确实有点奇怪的技巧：

```html
<template x-if="true">
    <span x-text="message"></span>
</template>
```

这只需利用 `x-if` 的工作方式，就能达到与 `x-cloak` 相同的效果。

由于 `<template>` 元素在浏览器中默认是“隐藏”的，因此在 Alpine 有机会渲染 `x-if="true"` 并将其显示出来之前，你不会看到 `<span>`。

同样，这个方案并不适合所有人，但在特殊情况下值得一提。

### x-teleport

`x-teleport` 指令允许你将 Alpine 模板的一部分传送到页面上 DOM 的另一个位置。

这对于模态框（尤其是嵌套模态框）之类的场景非常有用，因为这样可以跳出当前 Alpine 组件的 z-index 层级。

<a name="x-teleport"></a>
#### x-teleport

通过将 `x-teleport` 附加到 `<template>` 元素上，你是在告诉 Alpine 将该元素“追加”到所提供的选择器。

> `x-teleport` 的选择器可以是任何你通常会传给 `document.querySelector` 之类的字符串。它会找到第一个匹配的元素，无论是标签名（`body`）、类名（`.my-class`）、ID（`#my-id`）还是任何其他有效的 CSS 选择器。

[→ 了解更多关于 `document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

下面是一个虚构的模态框示例：

```html
<body>
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle Modal</button>

        <template x-teleport="body">
            <div x-show="open">
                Modal contents...
            </div>
        </template>
    </div>

    <div>Some other content placed AFTER the modal markup.</div>

    ...

</body>
```

<!-- START_VERBATIM -->
<div class="demo" x-ref="root" id="modal2">
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle Modal</button>

        <template x-teleport="#modal2">
            <div x-show="open">
                Modal contents...
            </div>
        </template>
    
    </div>
    
    <div class="py-4">Some other content placed AFTER the modal markup.</div>
</div>
<!-- END_VERBATIM -->

注意，切换模态框时，实际的模态框内容会出现在 “Some other content...” 元素之后？这是因为 Alpine 在初始化时看到 `x-teleport="body"`，就会将该元素追加并初始化到所提供的元素选择器中。

<a name="forwarding-events"></a>
#### 转发事件

Alpine 会尽力让传送的体验无缝衔接。任何你通常在模板中能做的事情，都应该能在 `x-teleport` 模板中完成。被传送的内容可以访问组件正常的 Alpine 作用域，以及 `$refs`、`$root` 等其他功能……

然而，原生 DOM 事件没有传送的概念，因此，例如，如果你从被传送的元素内部触发 “click” 事件，该事件会像往常一样在 DOM 树中向上冒泡。

为了让这种体验更加无缝，你可以直接在 `<template x-teleport...>` 元素本身注册事件监听器来“转发”事件，如下所示：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>

    <template x-teleport="body" @click="open = false">
        <div x-show="open">
            Modal contents...
            (click to close)
        </div>
    </template>
</div>
```

<!-- START_VERBATIM -->
<div class="demo" x-ref="root" id="modal3">
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle Modal</button>

        <template x-teleport="#modal3" @click="open = false">
            <div x-show="open">
                Modal contents...
                <div>(click to close)</div>
            </div>
        </template>
    </div>
</div>
<!-- END_VERBATIM -->

注意，我们现在可以在 `<template>` 元素本身的外部监听从被传送元素内部派发的事件了，不是吗？

Alpine 通过查找注册在 `<template x-teleport...>` 上的事件监听器来实现这一点，并阻止这些事件在被传送的实际 DOM 元素之外继续传播。然后，它会创建该事件的副本，并从 `<template x-teleport...>` 重新派发它。

<a name="nesting"></a>
#### 嵌套

如果你试图将一个模态框嵌套在另一个模态框内，传送功能尤其有用。Alpine 让这变得很简单：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>

    <template x-teleport="body">
        <div x-show="open">
            Modal contents...

            <div x-data="{ open: false }">
                <button @click="open = ! open">Toggle Nested Modal</button>

                <template x-teleport="body">
                    <div x-show="open">
                        Nested modal contents...
                    </div>
                </template>
            </div>
        </div>
    </template>
</div>
```

<!-- START_VERBATIM -->
<div class="demo" x-ref="root" id="modal4">
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle Modal</button>

        <template x-teleport="#modal4">
            <div x-show="open">
                <div class="py-4">Modal contents...</div>
    
                <div x-data="{ open: false }">
                    <button @click="open = ! open">Toggle Nested Modal</button>
    
                    <template x-teleport="#modal4">
                        <div class="pt-4" x-show="open">
                            Nested modal contents...
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>
    
    <template x-teleport-target="modals3"></template>
</div>
<!-- END_VERBATIM -->

将两个模态框都切换为“开启”后，它们在编写时是作为子元素的，但在页面上会渲染为同级元素，而不是相互嵌套。

### x-if

`x-if` 用于切换页面上的元素，与 `x-show` 类似，但它会完全添加和移除它所应用的元素，而不仅仅是将其 CSS 的 display 属性改为 “none”。

由于行为上的这种差异，`x-if` 不应直接应用于元素本身，而应应用于包裹该元素的 `<template>` 标签。这样，Alpine 就能在元素从页面移除后保留它的记录。

```html
<template x-if="open">
    <div>Contents...</div>
</template>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-if`。[→ 了解更多关于 `x-data`](/directives/data)

#### 注意事项

与 `x-show` 不同，`x-if` 不支持使用 `x-transition` 进行过渡切换。

`<template>` 标签只能包含一个根元素。

### x-id

`x-id` 允许你为使用 `$id()` 生成的任何新 ID 声明一个新的“作用域”。它接受一个字符串数组（ID 名称），并为其内部生成的每个 `$id('...')` 添加一个在页面上的其他 ID 中唯一的后缀。

`x-id` 旨在与 `$id(...)` 魔法方法配合使用。

[访问 $id 文档](/magics/id) 以更好地了解此功能。

下面是该指令的一个简单示例：

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-1" -->

    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-2" -->

    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-2" -->
</div>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-id`。[→ 了解更多关于 `x-data`](/directives/data)

## 魔法属性

### $el

`$el` 是一个魔法属性，可用于获取当前 DOM 节点。

```html
<button @click="$el.innerHTML = 'Hello World!'">Replace me with "Hello World!"</button>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data>
        <button @click="$el.textContent = 'Hello World!'">Replace me with "Hello World!"</button>
    </div>
</div>
<!-- END_VERBATIM -->

### $refs

`$refs` 是一个魔法属性，可用于获取组件内标记了 `x-ref` 的 DOM 元素。当您需要手动操作 DOM 元素时，这会非常有用。它通常作为 `document.querySelector` 的一种更简洁、更具作用域限制的替代方案。

```html
<button @click="$refs.text.remove()">Remove Text</button>

<span x-ref="text">Hello 👋</span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data>
        <button @click="$refs.text.remove()">Remove Text</button>

        <div class="pt-4" x-ref="text">Hello 👋</div>
    </div>
</div>
<!-- END_VERBATIM -->

现在，当按下 `<button>` 时，`<span>` 将被移除。

<a name="limitations"></a>
##### 限制

在 V2 中，可以将 `$refs` 动态绑定到元素，如下所示：

```html
<template x-for="item in items" :key="item.id" >
    <div :x-ref="item.name">
    some content ...
    </div>
</template>
```

然而，在 V3 中，`$refs` 只能访问静态创建的元素。因此，对于上面的示例：如果您期望 `$refs` 中 `item.name` 的值是 *Batteries* 之类的内容，您应该注意，`$refs` 实际上包含的是字面字符串 `'item.name'`，而不是 *Batteries*。

### $store

您可以使用 `$store` 方便地访问通过 [`Alpine.store(...)`](/globals/alpine-store) 注册的全局 Alpine store。例如：

```html
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>

...

<div x-data :class="$store.darkMode.on && 'bg-black'">
    ...
</div>


<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

既然我们已经注册了 `darkMode` store 并将 `on` 设置为 "false"，当按下 `<button>` 时，`on` 将变为 "true"，页面的背景颜色将变为黑色。

<a name="single-value-stores"></a>
#### 单值 store

如果您不需要为 store 使用完整的对象，您可以将任何类型的数据设置并用作 store。

下面是上面的示例，但更简单地将其用作一个布尔值：

```html
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>

...

<div x-data :class="$store.darkMode && 'bg-black'">
    ...
</div>


<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', false)
    })
</script>
```

[→ 了解更多关于 Alpine stores](/globals/alpine-store)

### $watch

您可以使用 `$watch` 魔法方法来"侦听"组件属性。例如：

```html
<div x-data="{ open: false }" x-init="$watch('open', value => console.log(value))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

在上面的示例中，当按下按钮且 `open` 发生变化时，提供的回调将被触发，并在控制台 `console.log` 输出新值：

您可以使用"点"表示法侦听深度嵌套的属性

```html
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo.bar', value => console.log(value))">
    <button @click="foo.bar = 'bob'">Toggle Open</button>
</div>
```

当按下 `<button>` 时，`foo.bar` 将被设置为 "bob"，并且 "bob" 将被记录到控制台。

<a name="getting-the-old-value"></a>
##### 获取"旧"值

`$watch` 会跟踪被侦听属性的先前值。您可以通过回调的可选第二个参数来访问它，如下所示：

```html
<div x-data="{ open: false }" x-init="$watch('open', (value, oldValue) => console.log(value, oldValue))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

<a name="deep-watching"></a>
##### 深度侦听

`$watch` 会自动侦听任何级别的更改，但您应该记住：当检测到更改时，侦听器将返回被侦测属性的值，而不是发生更改的子属性的值。

```html
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo', (value, oldValue) => console.log(value, oldValue))">
    <button @click="foo.bar = 'bob'">Update</button>
</div>
```

当按下 `<button>` 时，`foo.bar` 将被设置为 "bob"，并且 "{bar: 'bob'} {bar: 'baz'}" 将被记录到控制台（新值和旧值）。

> ⚠️ 在 `$watch` 回调中作为副作用更改"被侦听"对象的属性，将产生无限循环并最终报错。

```html
<!-- 🚫 Infinite loop -->
<div x-data="{ foo: { bar: 'baz', bob: 'lob' }}" x-init="$watch('foo', value => foo.bob = foo.bar)">
    <button @click="foo.bar = 'bob'">Update</button>
</div>
```

### $dispatch

`$dispatch` 是派发浏览器事件的一个便捷快捷方式。

```html
<div @notify="alert('Hello World!')">
    <button @click="$dispatch('notify')">
        Notify
    </button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data @notify="alert('Hello World!')">
        <button @click="$dispatch('notify')">
            Notify
        </button>
    </div>
</div>
<!-- END_VERBATIM -->

如果您愿意，还可以随派发的事件一起传递数据。这些数据将作为事件的 `.detail` 属性被访问：

```html
<div @notify="alert($event.detail.message)">
    <button @click="$dispatch('notify', { message: 'Hello World!' })">
        Notify
    </button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data @notify="alert($event.detail.message)">
        <button @click="$dispatch('notify', { message: 'Hello World!' })">Notify</button>
    </div>
</div>
<!-- END_VERBATIM -->


在底层，`$dispatch` 是对更冗长的 API：`element.dispatchEvent(new CustomEvent(...))` 的封装。

**关于事件传播的说明**

请注意，由于[事件冒泡](https://en.wikipedia.org/wiki/Event_bubbling)，当您需要捕获从同一嵌套层级下的节点派发的事件时，您需要使用 [`.window`](https://github.com/alpinejs/alpine#x-on) 修饰符：

**示例：**

```html
<!-- 🚫 Won't work -->
<div x-data>
    <span @notify="..."></span>
    <button @click="$dispatch('notify')">Notify</button>
</div>

<!-- ✅ Will work (because of .window) -->
<div x-data>
    <span @notify.window="..."></span>
    <button @click="$dispatch('notify')">Notify</button>
</div>
```

> 第一个示例无法工作，因为当 `notify` 被派发时，它会传播到它们的共同祖先 `div`，而不是其兄弟元素 `<span>`。第二个示例可以工作，因为兄弟元素在 `window` 级别监听 `notify`，自定义事件最终会冒泡到该级别。

<a name="dispatching-to-components"></a>
#### 向其他组件派发事件

您还可以利用前面的技术让您的组件相互通信：

**示例：**

```html
<div
    x-data="{ title: 'Hello' }"
    @set-title.window="title = $event.detail"
>
    <h1 x-text="title"></h1>
</div>

<div x-data>
    <button @click="$dispatch('set-title', 'Hello World!')">Click me</button>
</div>
<!-- When clicked, the content of the h1 will set to "Hello World!". -->
```

<a name="dispatching-to-x-model"></a>
#### 向 x-model 派发事件

您还可以使用 `$dispatch()` 触发 `x-model` 数据绑定的数据更新。例如：

```html
<div x-data="{ title: 'Hello' }">
    <span x-model="title">
        <button @click="$dispatch('input', 'Hello World!')">Click me</button>
        <!-- After the button is pressed, `x-model` will catch the bubbling "input" event, and update title. -->
    </span>
</div>
```

这为创建可以通过 `x-model` 设置值的自定义输入组件打开了大门。

<a name="cancelable-events"></a>
#### 可取消的事件

您可以使用 `$dispatch` 的返回值来检查事件是否被取消。当您想阻止某个操作的默认行为时，这非常有用。

```html
<div x-data x-on:open="$event.preventDefault()">
    <div x-data="{ open: false }">
        <button @click="if($dispatch('open')){ open = true; }">Click me</button>
        <!-- When the button is pressed an event is dispatched and only if the result is truthy (not prevented by any handler) the content will be shown. -->
        
        <div x-show="open">
            <h1>Hello</h1>
        </div>
    </div>
</div>
```

当您想通过事件处理程序阻止打开/关闭模态框之类的操作时，这会很有用。

<a name="overwriting-options"></a>
#### 覆盖选项

您可以使用 `$dispatch` 的第三个参数来覆盖事件的默认选项。例如，您可以将 `bubbles` 设置为 `false`：

```html
<!-- 🚫 Won't work because the event is being listened on the parent element -->
<div x-data="{ title: 'Hello' }" x-on:update-title="title = $event.detail">
    <button @click="$dispatch('update-title', 'Hello World!', {bubbles: false})">Click me</button>
</div>

<!-- ✅ Will work because the event is being listened on the same element -->
<div x-data="{ title: 'Hello' }">
    <button x-on:update-title="title = $event.detail" @click="$dispatch('update-title', 'Hello World!', {bubbles: false})">Click me</button>
</div>
```

当您想阻止事件冒泡到父元素时，这会很有用。

### $nextTick

`$nextTick` 是一个魔法属性，它允许您仅在 Alpine 完成其响应式 DOM 更新之后才执行给定的表达式。当您想在 DOM 状态反映了您所做的任何数据更新之后与其交互时，这会很有用。

```html
<div x-data="{ title: 'Hello' }">
    <button
        @click="
            title = 'Hello World!';
            $nextTick(() => { console.log($el.innerText) });
        "
        x-text="title"
    ></button>
</div>
```

在上面的示例中，控制台记录的将是 "Hello World!" 而不是 "Hello"，因为使用了 `$nextTick` 来等待 Alpine 完成 DOM 更新。

<a name="promises"></a>

#### Promises

`$nextTick` 返回一个 promise，允许使用 `$nextTick` 暂停异步函数，直到待处理的 DOM 更新完成。以这种方式使用时，`$nextTick` 也不需要传递参数。

```html
<div x-data="{ title: 'Hello' }">
    <button
        @click="
            title = 'Hello World!';
            await $nextTick();
            console.log($el.innerText);
        "
        x-text="title"
    ></button>
</div>
```

### $root

`$root` 是一个魔法属性，可用于获取任何 Alpine 组件的根元素。换句话说，就是 DOM 树中向上最近的包含 `x-data` 的元素。

```html
<div x-data data-message="Hello World!">
    <button @click="alert($root.dataset.message)">Say Hi</button>
</div>
```

<!-- START_VERBATIM -->
<div x-data data-message="Hello World!" class="demo">
    <button @click="alert($root.dataset.message)">Say Hi</button>
</div>
<!-- END_VERBATIM -->

### $data

`$data` 是一个魔法属性，可以让您访问当前的 Alpine 数据作用域（通常由 `x-data` 提供）。

大多数情况下，您可以直接在表达式中访问 Alpine 数据。例如，`x-data="{ message: 'Hello Caleb!' }"` 将允许您执行类似 `x-text="message"` 的操作。

然而，有时拥有一个封装了所有作用域的实际对象，并将其传递给其他函数，会很有帮助：

```html
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

### $id

`$id` 是一个魔法属性，可用于生成元素的 ID，并确保它不会与同一页面上其他同名的 ID 冲突。

在构建可能在页面上出现多次并使用 ID 属性的可复用组件（通常在后端模板中）时，这个工具非常有用。

诸如输入组件、模态框、列表框等都会从这个工具中受益。

<a name="basic-usage"></a>
#### 基本用法

假设页面上有两个输入元素，您希望它们拥有彼此唯一的 ID，您可以这样做：

```html
<input type="text" :id="$id('text-input')">
<!-- id="text-input-1" -->

<input type="text" :id="$id('text-input')">
<!-- id="text-input-2" -->
```

如您所见，`$id` 接收一个字符串，并输出一个追加了后缀的、在页面上唯一的 ID。

<a name="groups-with-x-id"></a>
#### 使用 x-id 分组

现在假设您想要同样的两个输入元素，但这一次您希望为它们各自添加 `<label>` 元素。

这带来了一个问题：您现在需要能够两次引用同一个 ID。一个用于 `<label>` 的 `for` 属性，另一个用于输入元素的 `id`。

下面是一种您可能会想到的实现方式，而且完全有效：

```html
<div x-data="{ id: $id('text-input') }">
    <label :for="id"> <!-- "text-input-1" -->
    <input type="text" :id="id"> <!-- "text-input-1" -->
</div>

<div x-data="{ id: $id('text-input') }">
    <label :for="id"> <!-- "text-input-2" -->
    <input type="text" :id="id"> <!-- "text-input-2" -->
</div>
```

这种方法没问题，但是，必须在组件作用域中命名并存储 ID 感觉有些繁琐。

为了以更灵活的方式完成同样的任务，您可以使用 Alpine 的 `x-id` 指令为一组 ID 声明一个"ID 作用域"：

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-2" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
</div>
```

如您所见，`x-id` 接受一个 ID 名称的数组。现在，该作用域内任何对 `$id()` 的使用都将使用相同的 ID。可以将它们视为"ID 组"。

<a name="nesting"></a>
#### 嵌套

正如您可能已经猜到的那样，您可以随意嵌套这些 `x-id` 组，如下所示：

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->

    <div x-id="['text-input']">
        <label :for="$id('text-input')"> <!-- "text-input-2" -->
        <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
    </div>
</div>
```

<a name="keyed-ids"></a>
#### 带键的 ID（用于循环）

有时，为了在循环中标识某个 ID，在 ID 末尾指定一个额外的后缀会很有帮助。

为此，`$id()` 接受一个可选的第二个参数，该参数将作为后缀添加到生成的 ID 的末尾。

这种需求的一个常见示例是列表框组件，它使用 `aria-activedescendant` 属性来告诉辅助技术列表中哪个元素是"活动"的：

```html
<ul
    x-id="['list-item']"
    :aria-activedescendant="$id('list-item', activeItem.id)"
>
    <template x-for="item in items" :key="item.id">
        <li :id="$id('list-item', item.id)">...</li>
    </template>
</ul>
```

这是一个不完整的列表框示例，但它仍然有助于演示这样的场景：您可能希望组中的每个 ID 在页面上仍然是唯一的，同时在循环中带有键，以便您可以引用该组中的单个 ID。

## 全局属性

### Alpine.data

`Alpine.data(...)` 提供了一种在应用中复用 `x-data` 上下文的方式。

例如，这里有一个演示用的 `dropdown` 组件：

```html
<div x-data="dropdown">
    <button @click="toggle">...</button>

    <div x-show="open">...</div>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            toggle() {
                this.open = ! this.open
            }
        }))
    })
</script>
```

如你所见，我们将通常直接定义在 `x-data` 中的属性和方法抽取到了一个独立的 Alpine 组件对象中。

<a name="registering-from-a-bundle"></a>
#### 从打包文件中注册

如果你选择为 Alpine 代码使用构建步骤，你应该按以下方式注册你的组件：

```js
import Alpine from 'alpinejs'
import dropdown from './dropdown.js'

Alpine.data('dropdown', dropdown)

Alpine.start()
```

这假设你有一个名为 `dropdown.js` 的文件，其内容如下：

```js
export default () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
})
```

<a name="initial-parameters"></a>
#### 初始参数

除了直接按名称引用 `Alpine.data` 提供者（如 `x-data="dropdown"`），你还可以将它们作为函数来引用（`x-data="dropdown()"`）。通过直接以函数方式调用它们，你可以在创建初始数据对象时传入额外的参数，如下所示：

```html
<div x-data="dropdown(true)">
```
```js
Alpine.data('dropdown', (initialOpenState = false) => ({
    open: initialOpenState
}))
```

现在，你可以复用 `dropdown` 对象，并根据需要为其提供不同的参数。

<a name="init-functions"></a>
#### 初始化函数

如果你的组件包含一个 `init()` 方法，Alpine 会在渲染组件之前自动执行它。例如：

```js
Alpine.data('dropdown', () => ({
    init() {
        // This code will be executed before Alpine
        // initializes the rest of the component.
    }
}))
```

<a name="destroy-functions"></a>
#### 销毁函数

如果你的组件包含一个 `destroy()` 方法，Alpine 会在清理组件之前自动执行它。

一个典型的例子是：当你要注册一个由其他库或浏览器 API 提供、而 Alpine 无法提供的事件处理器时。
请参考以下示例代码，了解如何使用 `destroy()` 方法来清理这样一个处理器。

```js
Alpine.data('timer', () => ({
    timer: null,
    counter: 0,
    init() {
      // Register an event handler that references the component instance
      this.timer = setInterval(() => {
        console.log('Increased counter to', ++this.counter);
      }, 1000);
    },
    destroy() {
        // Detach the handler, avoiding memory and side-effect leakage
        clearInterval(this.timer);
    },
}))
```

组件被销毁的一个例子是在 `x-if` 中使用它：

```html
<span x-data="{ enabled: false }">
    <button @click.prevent="enabled = !enabled">Toggle</button>

    <template x-if="enabled">
        <span x-data="timer" x-text="counter"></span>
    </template>
</span>
```

<a name="using-magic-properties"></a>
#### 使用魔法属性

如果你想从组件对象中访问魔法方法或魔法属性，可以通过 `this` 上下文来实现：

```js
Alpine.data('dropdown', () => ({
    open: false,

    init() {
        this.$watch('open', () => {...})
    }
}))
```

<a name="encapsulating-directives-with-x-bind"></a>
#### 使用 `x-bind` 封装指令

如果你希望复用的不仅仅是组件的数据对象，你可以使用 `x-bind` 封装整个 Alpine 模板指令。

下面是一个使用 `x-bind` 抽取我们之前 dropdown 组件中模板细节的示例：

```html
<div x-data="dropdown">
    <button x-bind="trigger"></button>

    <div x-bind="dialogue"></div>
</div>
```

```js
Alpine.data('dropdown', () => ({
    open: false,

    trigger: {
        ['@click']() {
            this.open = ! this.open
        },
    },

    dialogue: {
        ['x-show']() {
            return this.open
        },
    },
}))
```

### Alpine.store

Alpine 通过 `Alpine.store()` API 提供全局状态管理。

<a name="registering-a-store"></a>
#### 注册全局状态

你可以在 `alpine:init` 监听器中定义 Alpine 全局状态（适用于通过 `<script>` 标签引入 Alpine 的情况），也可以在手动调用 `Alpine.start()` 之前定义它（适用于将 Alpine 导入到构建产物中的情况）：

**通过 `<script>` 标签：**
```html
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

**从打包文件中：**
```js
import Alpine from 'alpinejs'

Alpine.store('darkMode', {
    on: false,

    toggle() {
        this.on = ! this.on
    }
})

Alpine.start()
```

<a name="accessing stores"></a>
#### 访问全局状态

你可以使用 `$store` 魔法属性在 Alpine 表达式中访问任何全局状态中的数据：

```html
<div x-data :class="$store.darkMode.on && 'bg-black'">...</div>
```

你还可以修改全局状态中的属性，所有依赖这些属性的内容都会自动做出响应。例如：

```html
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>
```

此外，你也可以通过省略第二个参数，在外部使用 `Alpine.store()` 来访问全局状态，如下所示：

```html
<script>
    Alpine.store('darkMode').toggle()
</script>
```

<a name="initializing-stores"></a>
#### 初始化全局状态

如果你在 Alpine 全局状态中提供了 `init()` 方法，它会在全局状态注册后立即执行。这对于使用合理的初始值来初始化全局状态中的任何状态非常有用。

```html
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            init() {
                this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
            },

            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

请注意上例中新添加的 `init()` 方法。有了它，`on` 全局状态变量会在 Alpine 渲染页面上的任何内容之前，被设置为浏览器的配色方案偏好。

<a name="single-value-stores"></a>
#### 单值全局状态

如果你不需要为全局状态使用一个完整的对象，你可以将任何类型的数据设置为全局状态。

下面是上面的示例，但更简单地将其用作一个布尔值：

```html
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>

...

<div x-data :class="$store.darkMode && 'bg-black'">
    ...
</div>


<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', false)
    })
</script>
```

### Alpine.bind

`Alpine.bind(...)` 提供了一种在应用中复用 [`x-bind`](/directives/bind#bind-directives) 对象的方式。

这里有一个简单的示例。与其使用 Alpine 手动绑定属性：

```html
<button type="button" @click="doSomething()" :disabled="shouldDisable"></button>
```

你可以将这些属性打包成一个可复用的对象，并使用 `x-bind` 来绑定它：

```html
<button x-bind="SomeButton"></button>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.bind('SomeButton', () => ({
            type: 'button',

            '@click'() {
                this.doSomething()
            },

            ':disabled'() {
                return this.shouldDisable
            },
        }))
    })
</script>
```

## 插件

### Mask Plugin

Alpine 的 Mask 插件允许你在用户输入时自动格式化文本输入框。

这对于许多不同类型的输入非常有用：电话号码、信用卡、美元金额、账号、日期等。

<a name="installation"></a>

#### 安装

<div x-data="{ expanded: false }">
<div class=" relative">
<div x-show="! expanded" class="absolute inset-0 flex justify-start items-end bg-gradient-to-t from-white to-[#ffffff66]"></div>
<div x-show="expanded" x-collapse.min.80px class="markdown">

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Mask，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/mask
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'

Alpine.plugin(mask)

...
```

</div>
</div>
<button :aria-expanded="expanded" @click="expanded = ! expanded" class="text-cyan-600 font-medium underline">
    <span x-text="expanded ? 'Hide' : 'Show more'">Show</span> <span x-text="expanded ? '↑' : '↓'">↓</span>
</button>
</div>

<a name="x-mask"></a>

#### x-mask

使用此插件的主要 API 是 `x-mask` 指令。

让我们先看一下下面这个简单的日期字段示例：

```html
<input x-mask="99/99/9999" placeholder="MM/DD/YYYY">
```

<!-- START_VERBATIM -->
<div class="demo">
    <input x-data x-mask="99/99/9999" placeholder="MM/DD/YYYY">
</div>
<!-- END_VERBATIM -->

请注意，你在输入框中输入的文字必须遵循 `x-mask` 提供的格式。除了强制使用数字字符外，如果用户没有先输入斜杠 `/`，系统也会自动添加它们。

掩码支持以下通配符：

| 通配符 | 描述                          |
| ------ | ----------------------------- |
| `*`    | 任意字符                      |
| `a`    | 仅字母字符（a-z、A-Z）        |
| `9`    | 仅数字字符（0-9）             |

<a name="mask-functions"></a>

#### 动态掩码

有时简单的掩码字面量（即 `(999) 999-9999`）并不够用。在这些情况下，`x-mask:dynamic` 允许你根据用户输入动态生成掩码。

下面是一个信用卡输入的示例，它需要根据号码是否以 "34" 或 "37" 开头（这意味着它是 Amex 卡，因此格式不同）来改变其掩码。

```html
<input x-mask:dynamic="
    $input.startsWith('34') || $input.startsWith('37')
        ? '9999 999999 99999' : '9999 9999 9999 9999'
">
```

正如你在上面的示例中所看到的，用户每次在输入框中输入时，该值都会以 `$input` 的形式传递给表达式。根据 `$input` 的不同，输入框会使用不同的掩码。

你可以自己试试，输入一个以 "34" 开头的号码和一个不以 "34" 开头的号码。

<!-- START_VERBATIM -->
<div class="demo">
    <input x-data x-mask:dynamic="
        $input.startsWith('34') || $input.startsWith('37')
            ? '9999 999999 99999' : '9999 9999 9999 9999'
    ">
</div>
<!-- END_VERBATIM -->

`x-mask:dynamic` 也接受函数作为表达式的结果，并会自动将 `$input` 作为第一个参数传递给它。例如：

```html
<input x-mask:dynamic="creditCardMask">

<script>
function creditCardMask(input) {
    return input.startsWith('34') || input.startsWith('37')
        ? '9999 999999 99999'
        : '9999 9999 9999 9999'
}
</script>
```

<a name="money-inputs"></a>

#### 金额输入

因为为金额输入编写自己的动态掩码表达式相当复杂，Alpine 提供了一个预先构建好的表达式，并以 `$money()` 的形式提供。

这是一个功能完整的金额输入掩码：

```html
<input x-mask:dynamic="$money($input)">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input)" placeholder="0.00">
</div>
<!-- END_VERBATIM -->

如果你希望将句点换成逗号，反之亦然（某些货币需要这样做），可以使用第二个可选参数来实现：

```html
<input x-mask:dynamic="$money($input, ',')">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, ',')"  placeholder="0,00">
</div>
<!-- END_VERBATIM -->

你还可以通过提供第三个可选参数来覆盖千位分隔符：

```html
<input x-mask:dynamic="$money($input, '.', ' ')">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, '.', ' ')"  placeholder="3 000.00">
</div>
<!-- END_VERBATIM -->


你还可以使用任意所需的位数作为第四个可选参数，来覆盖默认的 2 位精度：

```html
<input x-mask:dynamic="$money($input, '.', ',', 4)">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, '.', ',', 4)"  placeholder="0.0001">
</div>
<!-- END_VERBATIM -->

### Intersect Plugin

Alpine 的 Intersect 插件是 [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 的便捷封装，它允许你在元素进入视口时轻松做出响应。

这对于以下场景非常有用：图片和其他内容的懒加载、触发动画、无限滚动、记录内容的"浏览量"等。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Intersect，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/intersect
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

Alpine.plugin(intersect)

...
```

<a name="x-intersect"></a>
#### x-intersect

使用此插件的主要 API 是 `x-intersect`。你可以将 `x-intersect` 添加到 Alpine 组件内的任何元素上，当该组件进入视口（滚动到可见区域）时，所提供的表达式将会执行。

例如，在下面的代码片段中，`shown` 将一直保持为 `false`，直到元素被滚动到可见区域。此时，表达式将执行，`shown` 将变为 `true`：

```html
<div x-data="{ shown: false }" x-intersect="shown = true">
    <div x-show="shown" x-transition>
        I'm in the viewport!
    </div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo" style="height: 60px; overflow-y: scroll;" x-data x-ref="root">
    <a href="#" @click.prevent="$refs.root.scrollTo({ top: $refs.root.scrollHeight, behavior: 'smooth' })">Scroll Down 👇</a>
    <div style="height: 50vh"></div>
    <div x-data="{ shown: false }" x-intersect="shown = true" id="yoyo">
        <div x-show="shown" x-transition.duration.1000ms>
            I'm in the viewport!
        </div>
        <div x-show="! shown">&nbsp;</div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="x-intersect-enter"></a>
##### x-intersect:enter

`:enter` 后缀是 `x-intersect` 的别名，工作方式相同：

```html
<div x-intersect:enter="shown = true">...</div>
```

当同时使用 `:leave` 后缀时，你可以选择使用它以提高可读性。

<a name="x-intersect-leave"></a>
##### x-intersect:leave

附加 `:leave` 会在元素离开视口时运行你的表达式。

```html
<div x-intersect:leave="shown = true">...</div>
```
> 默认情况下，这意味着*整个元素*不在视口中。使用 `x-intersect:leave.full` 可以在只有*部分元素*不在视口时运行你的表达式。

[→ 了解更多关于底层 `IntersectionObserver` API 的信息](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

<a name="modifiers"></a>
#### 修饰符

<a name="once"></a>
##### .once

有时，只在元素首次进入视口时（而非后续每次）求值表达式会很有用。例如在触发"进入"动画时。在这些情况下，你可以为 `x-intersect` 添加 `.once` 修饰符来实现这一点。

```html
<div x-intersect.once="shown = true">...</div>
```

<a name="half"></a>
##### .half

当交叉阈值超过 `0.5` 时求值表达式。

对于至少需要显示元素一部分很重要的元素很有用。

```html
<div x-intersect.half="shown = true">...</div> // when `0.5` of the element is in the viewport
```

<a name="full"></a>
##### .full

当交叉阈值超过 `0.99` 时求值表达式。

对于需要显示整个元素很重要的元素很有用。

```html
<div x-intersect.full="shown = true">...</div> // when `0.99` of the element is in the viewport
```

<a name="threshold"></a>
##### .threshold

允许你控制底层 `IntersectionObserver` 的 `threshold` 属性：

该值的范围应为 "0-100"。"0" 表示：如果元素的任何部分进入视口，就触发一次"交叉"（默认行为）。而 "100" 表示：只有当整个元素都进入视口时，才触发"交叉"。

介于两者之间的任何值都是这两个极端值的百分比。

例如，如果你想在元素的一半进入页面后触发一次交叉，可以使用 `.threshold.50`：

```html
<div x-intersect.threshold.50="shown = true">...</div> // when 50% of the element is in the viewport
```

如果你只想在元素的 5% 进入视口时触发，可以使用：`.threshold.05`，以此类推。

<a name="margin"></a>
##### .margin

允许你控制底层 `IntersectionObserver` 的 `rootMargin` 属性。
这实际上会调整视口边界的大小。正值会将边界扩大到视口之外，负值则会将其向内收缩。这些值的用法与 CSS 的 margin 类似：一个值表示所有边；两个值分别表示上下、左右；或四个值分别表示上、右、下、左。你可以使用 `px` 和 `%` 值，也可以直接使用一个裸数字来表示像素值。

```html
<div x-intersect.margin.200px="loaded = true">...</div> // Load when the element is within 200px of the viewport
```

```html
<div x-intersect:leave.margin.10%.25px.25.25px="loaded = false">...</div> // Unload when the element gets within 10% of the top of the viewport, or within 25px of the other three edges
```

```html
<div x-intersect.margin.-100px="visible = true">...</div> // Mark as visible when element is more than 100 pixels into the viewport.
```

<a name="parent"></a>
##### .parent

默认情况下，`x-intersect` 以浏览器的视口为参照来观察元素。`.parent` 修饰符会将底层 `IntersectionObserver` 的 `root` 设置为元素的父元素，因此表达式会基于元素在其父元素内是否可见（而不是在整个页面中）来求值。

当元素位于可滚动容器内时，或者当你关心的是相对于父元素而非视口的可见性时，这非常方便。

```html
<div x-intersect.parent="shown = true">...</div> // Mark as shown when the element scrolls into view within its parent
```

### Resize Plugin

Alpine 的 Resize 插件是 [Resize Observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) 的便捷封装，它允许你在元素尺寸发生变化时轻松做出响应。

这对于以下场景非常有用：基于尺寸的自定义动画、智能的 sticky 定位、根据元素尺寸有条件地添加属性等。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/resize@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Resize，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/resize
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import resize from '@alpinejs/resize'

Alpine.plugin(resize)

...
```

<a name="x-resize"></a>
#### x-resize

使用此插件的主要 API 是 `x-resize`。你可以将 `x-resize` 添加到 Alpine 组件内的任何元素上，当该元素因任何原因调整大小时，所提供的表达式将携带两个魔法属性执行：`$width` 和 `$height`。

例如，下面是一个使用 `x-resize` 在元素尺寸变化时显示其宽度和高度的简单示例。

```html
<div
    x-data="{ width: 0, height: 0 }"
    x-resize="width = $width; height = $height"
>
    <p x-text="'Width: ' + width + 'px'"></p>
    <p x-text="'Height: ' + height + 'px'"></p>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ width: 0, height: 0 }" x-resize="width = $width; height = $height">
        <i>Resize your browser window to see the width and height values change.</i>
        <br><br>
        <p x-text="'Width: ' + width + 'px'"></p>
        <p x-text="'Height: ' + height + 'px'"></p>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="modifiers"></a>
#### 修饰符

<a name="document"></a>
##### .document

观察整个文档的尺寸（而不是某个特定元素）通常很有用。要做到这一点，你可以为 `x-resize` 添加 `.document` 修饰符：

```html
<div x-resize.document="...">
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ width: 0, height: 0 }" x-resize.document="width = $width; height = $height">
        <i>Resize your browser window to see the document width and height values change.</i>
        <br><br>
        <p x-text="'Width: ' + width + 'px'"></p>
        <p x-text="'Height: ' + height + 'px'"></p>
    </div>
</div>
<!-- END_VERBATIM -->

### Persist Plugin

Alpine 的 Persist 插件允许你在页面加载之间持久化 Alpine 状态。

这对于持久化搜索筛选条件、活动标签页等功能非常有用——如果用户在刷新页面，或离开后再重新访问时配置被重置，他们会感到沮丧。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Persist，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/persist
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

Alpine.plugin(persist)

...
```

<a name="magic-persist"></a>
#### $persist

使用此插件的主要 API 是魔法方法 `$persist`。

你可以像下面这样在 `x-data` 中用 `$persist` 包裹任意值，以在页面加载之间持久化其值：

```html
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ count: $persist(0) }">
        <button x-on:click="count++">Increment</button>
        <span x-text="count"></span>
    </div>
</div>
<!-- END_VERBATIM -->

在上面的示例中，因为我们用 `$persist()` 包裹了 `0`，Alpine 现在会拦截对 `count` 所做的更改，并在页面加载之间持久化它们。

你可以亲自尝试：在上面的示例中递增 "count"，然后刷新此页面，观察 "count" 是否保持其状态而不会被重置为 "0"。

<a name="how-it-works"></a>
#### 它是如何工作的？

如果一个值被 `$persist` 包裹，在初始化时 Alpine 会为该值注册自己的监听器。现在，每当该值因任何原因发生变化时，Alpine 都会将新值存储在 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 中。

现在，当页面重新加载时，Alpine 会（以属性名称作为键）在 localStorage 中查找值。如果找到了，它会立即从 localStorage 中设置该属性的值。

你可以通过打开浏览器开发者工具中的 localStorage 查看器来观察这一行为：

<a href="https://developer.chrome.com/docs/devtools/storage/localstorage/"><img src="/img/persist_devtools.png" alt="Chrome devtools showing the localStorage view with count set to 0"></a>

你会观察到，仅仅通过访问此页面，Alpine 就已经在 localStorage 中设置了 "count" 的值。你还会注意到，它给属性名 "count" 加上了 "_x_" 前缀，作为这些值的命名空间方式，这样 Alpine 就不会与使用 localStorage 的其他工具发生冲突。

现在更改下面示例中的 "count"，并观察 Alpine 对 localStorage 所做的更改：

```html
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ count: $persist(0) }">
        <button x-on:click="count++">Increment</button>
        <span x-text="count"></span>
    </div>
</div>
<!-- END_VERBATIM -->

> `$persist` 适用于原始值，也适用于数组和对象。
不过，值得注意的是，当变量的类型发生变化时，必须清空 localStorage。<br>
> 就前面的示例而言，如果我们把 count 改为 `$persist({ value: 0 })`，那么必须清空 localStorage，或者将变量 'count' 重命名。

<a name="custom-key"></a>
#### 设置自定义键

默认情况下，Alpine 使用 `$persist(...)` 所赋值的属性键（在上面的示例中是 "count"）。

考虑这样一种场景：你在不同页面甚至同一页面上有多个 Alpine 组件，它们都使用 "count" 作为属性键。

Alpine 将无法区分这些组件。

在这些情况下，你可以使用 `.as` 修饰符为任何持久化的值设置自己的自定义键，如下所示：


```html
<div x-data="{ count: $persist(0).as('other-count') }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

现在，Alpine 将使用键 "other-count" 来存储和检索上面的 "count" 值。

下面是 Chrome Devtools 的视图，你可以亲自查看：

<img src="/img/persist_custom_key_devtools.png" alt="Chrome devtools showing the localStorage view with count set to 0">

<a name="custom-storage"></a>
#### 使用自定义存储

默认情况下，数据会保存到 localStorage 中，它没有过期时间，即使页面关闭也会保留。

考虑一种场景：你想在用户关闭标签页时清除数据。在这种情况下，你可以使用 `.using` 修饰符将数据持久化到 sessionStorage，如下所示：


```html
<div x-data="{ count: $persist(0).using(sessionStorage) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

你还可以定义自己的自定义存储对象，暴露一个 getItem 函数和一个 setItem 函数。例如，你可以决定使用会话 cookie 作为存储，具体做法如下：


```html
<script>
    window.cookieStorage = {
        getItem(key) {
            let cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].split("=");
                if (key == cookie[0].trim()) {
                    return decodeURIComponent(cookie[1]);
                }
            }
            return null;
        },
        setItem(key, value) {
            document.cookie = key+' = '+encodeURIComponent(value)
        }
    }
</script>

<div x-data="{ count: $persist(0).using(cookieStorage) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<a name="using-persist-with-alpine-data"></a>
#### 将 $persist 与 Alpine.data 一起使用

如果你想将 `$persist` 与 `Alpine.data` 一起使用，你需要使用标准函数而不是箭头函数，这样 Alpine 在初始求值组件作用域时才能绑定自定义的 `this` 上下文。

```js
Alpine.data('dropdown', function () {
    return {
        open: this.$persist(false)
    }
})
```

<a name="using-alpine-persist-global"></a>
#### 使用 Alpine.$persist 全局变量

`Alpine.$persist` 是全局暴露的，因此可以在 `x-data` 上下文之外使用。这对于持久化来自其他来源（如 `Alpine.store`）的数据非常有用。

```js
Alpine.store('darkMode', {
    on: Alpine.$persist(true).as('darkMode_on')
});
```

### Focus Plugin

> 注意：此插件以前被称为 "Trap"。Trap 的功能已并入此插件，并附带了额外的功能。你可以无破坏性地将 Trap 替换为 Focus。


Alpine 的 Focus 插件允许你管理页面上的焦点。

> 此插件在内部大量使用了开源工具：[Tabbable](https://github.com/focus-trap/tabbable)。非常感谢该团队为这一问题提供了亟需的解决方案。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Focus，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/focus
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'

Alpine.plugin(focus)

...
```

<a name="x-trap"></a>
#### x-trap

Focus 提供了一个专用 API，用于将焦点限制在某个元素内：`x-trap` 指令。

`x-trap` 接受一个 JS 表达式。如果该表达式的结果为 true，焦点将被限制在该元素内部，直到表达式变为 false；到那时，焦点将返回到之前所在的位置。

例如：

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog</button>

    <span x-show="open" x-trap="open">
        <p>...</p>

        <input type="text" placeholder="Some input...">

        <input type="text" placeholder="Some other input...">

        <button @click="open = false">Close Dialog</button>
    </span>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <div :class="open && 'opacity-50'">
        <button x-on:click="open = true">Open Dialog</button>
    </div>

    <div x-show="open" x-trap="open" class="mt-4 space-y-4 p-4 border bg-yellow-100" @keyup.escape.window="open = false">
        <strong>
            <div>Focus is now "trapped" inside this dialog, meaning you can only click/focus elements within this yellow dialog. If you press tab repeatedly, the focus will stay within this dialog.</div>
        </strong>
    
        <div>
            <input type="text" placeholder="Some input...">
        </div>
    
        <div>
            <input type="text" placeholder="Some other input...">
        </div>
    
        <div>
            <button @click="open = false">Close Dialog</button>
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="nesting"></a>
##### 嵌套对话框

有时你可能希望在一个对话框内嵌套另一个对话框。`x-trap` 让这变得非常简单，并且会自动处理。

`x-trap` 会跟踪新被"限制"的元素，并存储最后活跃聚焦的元素。一旦元素被"解除限制"，焦点将返回到最初的位置。

这种机制是递归的，因此你可以在一个已被限制的元素内无限次地限制焦点，然后依次"解除限制"每个元素。

下面是嵌套的实际效果：

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog</button>

    <span x-show="open" x-trap="open">

        ...

        <div x-data="{ open: false }">
            <button @click="open = true">Open Nested Dialog</button>

            <span x-show="open" x-trap="open">

                ...

                <button @click="open = false">Close Nested Dialog</button>
            </span>
        </div>

        <button @click="open = false">Close Dialog</button>
    </span>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo">
    <div :class="open && 'opacity-50'">
        <button x-on:click="open = true">Open Dialog</button>
    </div>

    <div x-show="open" x-trap="open" class="mt-4 space-y-4 p-4 border bg-yellow-100" @keyup.escape.window="open = false">
        <div>
            <input type="text" placeholder="Some input...">
        </div>
    
        <div>
            <input type="text" placeholder="Some other input...">
        </div>
    
        <div x-data="{ open: false }">
            <div :class="open && 'opacity-50'">
                <button x-on:click="open = true">Open Nested Dialog</button>
            </div>
    
            <div x-show="open" x-trap="open" class="mt-4 space-y-4 p-4 border border-gray-500 bg-yellow-200" @keyup.escape.window="open = false">
                <strong>
                    <div>Focus is now "trapped" inside this nested dialog. You cannot focus anything inside the outer dialog while this is open. If you close this dialog, focus will be returned to the last known active element.</div>
                </strong>
    
                <div>
                    <input type="text" placeholder="Some input...">
                </div>
    
                <div>
                    <input type="text" placeholder="Some other input...">
                </div>
    
                <div>
                    <button @click="open = false">Close Nested Dialog</button>
                </div>
            </div>
        </div>
    
        <div>
            <button @click="open = false">Close Dialog</button>
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="modifiers"></a>
##### 修饰符

<a name="inert"></a>
###### .inert

在构建对话框/模态框之类的组件时，建议在限制焦点时将页面上的所有其他元素对屏幕阅读器隐藏。

通过向 `x-trap` 添加 `.inert`，当焦点被限制时，页面上的所有其他元素都会获得 `aria-hidden="true"` HTML 属性；当焦点限制被禁用时，这些属性也会被移除。

```html
<!-- When `open` is `false`: -->
<body x-data="{ open: false }">
    <div x-trap.inert="open" ...>
        ...
    </div>

    <div>
        ...
    </div>
</body>

<!-- When `open` is `true`: -->
<body x-data="{ open: true }">
    <div x-trap.inert="open" ...>
        ...
    </div>

    <div aria-hidden="true">
        ...
    </div>
</body>
```

<a name="noscroll"></a>
###### .noscroll

使用 Alpine 构建对话框/模态框时，建议在对话框打开时禁用周围内容的滚动。

`x-trap` 允许你通过 `.noscroll` 修饰符自动完成此操作。

通过添加 `.noscroll`，当对话框打开时，Alpine 会移除页面上的滚动条，并阻止用户滚动页面。

例如：

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog</button>

    <div x-show="open" x-trap.noscroll="open">
        Dialog Contents

        <button @click="open = false">Close Dialog</button>
    </div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: false }">
        <button @click="open = true">Open Dialog</button>

        <div x-show="open" x-trap.noscroll="open" class="border mt-4 p-4">
            <div class="mb-4 text-bold">Dialog Contents</div>
    
            <p class="mb-4 text-gray-600 text-sm">Notice how you can no longer scroll on this page while this dialog is open.</p>
    
            <button class="mt-4" @click="open = false">Close Dialog</button>
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="noreturn"></a>
###### .noreturn

有时你可能不希望焦点返回到之前的位置。试想一个在输入框获得焦点时触发的下拉菜单：关闭时若将焦点返回到输入框，只会再次触发下拉菜单打开。

`x-trap` 允许你通过 `.noreturn` 修饰符禁用此行为。

通过添加 `.noreturn`，当 `x-trap` 的表达式求值为 false 时，Alpine 将不会返还焦点。

例如：

```html
<div x-data="{ open: false }" x-trap.noreturn="open">
    <input type="search" placeholder="search for something" />

    <div x-show="open">
        Search results

        <button @click="open = false">Close</button>
    </div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div
        x-data="{ open: false }"
        x-trap.noreturn="open"
        @click.outside="open = false"
        @keyup.escape.prevent.stop="open = false"
    >
        <input type="search" placeholder="search for something"
            @focus="open = true"
            @keyup.escape.prevent="$el.blur()"
        />

        <div x-show="open">
            <div class="mb-4 text-bold">Search results</div>
    
            <p class="mb-4 text-gray-600 text-sm">Notice when closing this dropdown, focus is not returned to the input.</p>
    
            <button class="mt-4" @click="open = false">Close Dialog</button>
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="noautofocus"></a>
###### .noautofocus

默认情况下，当 `x-trap` 将焦点限制在某个元素内时，它会聚焦该元素内第一个可聚焦的元素。这是一个合理的默认行为，但有些时候你可能想禁用此行为，让 `x-trap` 生效时不自动聚焦任何元素。

通过添加 `.noautofocus`，Alpine 在限制焦点时不会自动聚焦任何元素。

<a name="focus-magic"></a>
#### $focus

该插件提供了许多用于管理页面内焦点的小型工具。这些工具通过 `$focus` 魔法属性提供。

| 属性 | 说明 |
| ---       | --- |
| `focus(el)`   | 聚焦传入的元素（内部处理各种麻烦问题：使用 nextTick 等） |
| `focusable(el)`   | 检测元素是否可聚焦 |
| `focusables()`   | 获取当前元素内的所有"可聚焦"元素 |
| `focused()`   | 获取页面上当前聚焦的元素 |
| `lastFocused()`   | 获取页面上最后一个聚焦的元素 |
| `within(el)`   | 指定一个元素来限定 `$focus` 魔法属性的作用域（默认为当前元素） |
| `first()`   | 聚焦第一个可聚焦元素 |
| `last()`   | 聚焦最后一个可聚焦元素 |
| `next()`   | 聚焦下一个可聚焦元素 |
| `previous()`   | 聚焦上一个可聚焦元素 |
| `noscroll()`   | 阻止滚动到即将被聚焦的元素 |
| `wrap()`   | 在获取"下一个"或"上一个"时使用"循环"（例如，获取最后一个元素的"下一个"元素时返回第一个元素） |
| `getFirst()`   | 获取第一个可聚焦元素 |
| `getLast()`   | 获取最后一个可聚焦元素 |
| `getNext()`   | 获取下一个可聚焦元素 |
| `getPrevious()`   | 获取上一个可聚焦元素 |

让我们通过几个示例来了解这些工具的实际用法。下面的示例允许用户使用方向键在按钮组内控制焦点。你可以先点击一个按钮，然后使用方向键移动焦点来测试：

```html
<div
    @keydown.right="$focus.next()"
    @keydown.left="$focus.previous()"
>
    <button>First</button>
    <button>Second</button>
    <button>Third</button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
<div
    x-data
    @keydown.right="$focus.next()"
    @keydown.left="$focus.previous()"
>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">First</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Second</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Third</button>
</div>
(Click a button, then use the arrow keys to move left and right)
</div>
<!-- END_VERBATIM -->

注意，如果最后一个按钮被聚焦，按"右箭头"将不会有任何作用。让我们添加 `.wrap()` 方法，使焦点可以"循环"：

```html
<div
    @keydown.right="$focus.wrap().next()"
    @keydown.left="$focus.wrap().previous()"
>
    <button>First</button>
    <button>Second</button>
    <button>Third</button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
<div
    x-data
    @keydown.right="$focus.wrap().next()"
    @keydown.left="$focus.wrap().previous()"
>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">First</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Second</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Third</button>
</div>
(Click a button, then use the arrow keys to move left and right)
</div>
<!-- END_VERBATIM -->

现在，让我们添加两个按钮，一个用于聚焦按钮组中的第一个元素，另一个用于聚焦最后一个元素：

```html
<button @click="$focus.within($refs.buttons).first()">Focus "First"</button>
<button @click="$focus.within($refs.buttons).last()">Focus "Last"</button>

<div
    x-ref="buttons"
    @keydown.right="$focus.wrap().next()"
    @keydown.left="$focus.wrap().previous()"
>
    <button>First</button>
    <button>Second</button>
    <button>Third</button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
<button @click="$focus.within($refs.buttons).first()">Focus "First"</button>
<button @click="$focus.within($refs.buttons).last()">Focus "Last"</button>

<hr class="mt-2 mb-2"/>

<div
    x-ref="buttons"
    @keydown.right="$focus.wrap().next()"
    @keydown.left="$focus.wrap().previous()"
>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">First</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Second</button>
    <button class="focus:outline-none focus:ring-2 focus:ring-cyan-400">Third</button>
</div>
</div>
<!-- END_VERBATIM -->

注意，我们需要为每个按钮添加一个 `.within()` 方法，以便 `$focus` 知道要把自己的作用域限定到另一个元素（包裹按钮的那个 `div`）上。

### Collapse Plugin

Alpine 的 Collapse 插件允许你使用平滑的动画展开和折叠元素。

由于这种行为与实现方式不同于 Alpine 标准的过渡系统，因此该功能被做成了一个专门的插件。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Collapse，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/collapse
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

...
```

<a name="x-collapse"></a>
#### x-collapse

使用此插件的主要 API 是 `x-collapse` 指令。

`x-collapse` 只能存在于已经带有 `x-show` 指令的元素上。当添加到带有 `x-show` 的元素上时，每当元素的可见性被切换，`x-collapse` 都会通过动画处理其 height 属性，平滑地"折叠"和"展开"该元素。

例如：

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="modifiers"></a>
#### 修饰符

<a name="dot-duration"></a>
##### .duration

你可以通过附加 `.duration` 修饰符来自定义折叠/展开过渡的持续时间，如下所示：

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse.duration.1000ms>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse.duration.1000ms>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="dot-min"></a>
##### .min

默认情况下，`x-collapse` 的"折叠"状态会将元素的高度设置为 `0px`，同时设置 `display: none;`。

有时，"截断"一个元素而不是完全隐藏它会更有用。通过使用 `.min` 修饰符，你可以为 `x-collapse` 的"折叠"状态设置一个最小高度。例如：

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse.min.50px>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse.min.50px>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

### Anchor Plugin

Alpine 的 Anchor 插件允许你轻松地将一个元素的定位锚定到页面上的另一个元素。

在使用 Alpine 创建下拉菜单、弹出框、对话框和工具提示时，此功能非常有用。

此插件使用的"锚定"功能由 [Floating UI](https://floating-ui.com/) 项目提供。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/anchor@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Anchor，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/anchor
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'

Alpine.plugin(anchor)

...
```

<a name="x-anchor"></a>
#### x-anchor

使用此插件的主要 API 是 `x-anchor` 指令。

要使用此插件，请将 `x-anchor` 指令添加到任意元素，并向它传入一个你想要将其位置锚定到的元素的引用（通常是页面上的一个按钮）。

默认情况下，`x-anchor` 会将元素的 CSS 设置为 `position: absolute`，并设置相应的 `top` 和 `left` 值。如果被锚定的元素通常会显示在参照元素下方，但页面上没有足够的空间，其样式会被调整为在元素上方渲染。

例如，下面是一个简单的下拉菜单，它锚定到切换它的按钮上：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="positioning"></a>
#### 定位

`x-anchor` 允许你使用以下修饰符自定义被锚定元素的定位：

* 底部：`.bottom`、`.bottom-start`、`.bottom-end`
* 顶部：`.top`、`.top-start`、`.top-end`
* 左侧：`.left`、`.left-start`、`.left-end`
* 右侧：`.right`、`.right-start`、`.right-end`

下面是一个使用 `.bottom-start` 将下拉菜单定位到参照元素下方偏右位置的示例：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.bottom-start="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.bottom-start="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="fixed-positioning"></a>
##### 固定定位

默认情况下，`x-anchor` 会为被锚定元素应用 `position: absolute`。这在大多数情况下都没问题，但当参照元素位于带有 `overflow: hidden`、`overflow: clip` 或 `overflow: auto` 的容器内时，就会出现问题——被锚定元素会随之被裁剪。

你可以通过添加 `.fixed` 修饰符，指示 Floating UI 改用固定定位策略：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.fixed="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.fixed="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

> **注意：** 任何祖先元素上的 `transform`、`filter`、`perspective`、`backdrop-filter`、`will-change` 或 `contain` 都会为 `position: fixed` 的后代元素创建一个新的包含块（[根据 CSS 规范](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed_positioning)）。发生这种情况时，`.fixed` 将相对于该祖先元素表现得像 `position: absolute`——并且无法逃脱其 `overflow: hidden`。如果 `.fixed` 似乎没有生效，请检查是否存在设置了 transform 的祖先元素。

<a name="offset"></a>
#### 偏移

你可以使用 `.offset.[px value]` 修饰符为被锚定元素添加偏移，如下所示：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.offset.10="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.offset.10="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="prevent-flipping"></a>
#### 防止位置翻转

默认情况下，如果被锚定元素没有足够的空间渲染在参照元素下方，`x-anchor` 会翻转其位置。

你可以通过添加 `.noflip` 修饰符来防止此行为：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.noflip="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.noflip="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="manual-styling"></a>
#### 手动样式

默认情况下，`x-anchor` 会在内部为你的元素应用定位样式。如果你希望完全掌控样式，可以传入 `.no-style` 修饰符，并使用 `$anchor` 魔法属性在其他 Alpine 表达式中访问这些值。

下面是一个绕过 `x-anchor` 的内部样式、改为使用 `x-bind:style` 自行应用样式的示例：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
    >
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
        class="bg-white rounded p-4 border shadow z-10"
    >
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

> **将 `.no-style` 与 `.fixed` 结合使用：** 当你选择不使用 Alpine 的内部样式并且还需要固定定位时，请记得自己设置 `position: 'fixed'`。`$anchor.x` 和 `$anchor.y` 会在当前生效策略的坐标空间中返回——绝对坐标相对于偏移父元素，固定坐标相对于视口——因此应用错误的 `position` 会把你的元素放到错误的位置。
>
> ```alpine
> <div
>     x-show="open"
>     x-anchor.no-style.fixed="$refs.button"
>     x-bind:style="{ position: 'fixed', top: $anchor.y+'px', left: $anchor.x+'px' }"
> >
>     Dropdown content
> </div>
> ```

<a name="from-id"></a>
#### 锚定到 ID

到目前为止，所有示例都是使用 Alpine 的 refs 锚定到其他元素的。

由于 `x-anchor` 接受对任意 DOM 元素的引用，你可以使用 `document.getElementById()` 之类的工具，通过元素的 `id` HTML 属性进行锚定：

```html
<div x-data="{ open: false }">
    <button id="trigger" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor="document.getElementById('trigger')">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button class="trigger" @click="open = ! open">Toggle</button>
    </div>


    <div x-show="open" x-anchor="document.querySelector('.trigger')">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

### Morph Plugin

Alpine 的 Morph 插件允许你将页面上的元素"变形"为所提供的 HTML 模板，同时保留"变形后"元素中的任何浏览器或 Alpine 状态。

这对于在不丢失 Alpine 页面状态的情况下，通过服务器请求更新 HTML 非常有用。这样的工具是 [Laravel Livewire](https://laravel-livewire.com/) 和 [Phoenix LiveView](https://dockyard.com/blog/2018/12/12/phoenix-liveview-interactive-real-time-apps-no-need-to-write-javascript) 等全栈框架的核心。

理解其用途的最佳方式是观看下面的交互式可视化演示。试一试吧！

<!-- START_VERBATIM -->
<div x-data="{ slide: 1 }" class="border rounded">
    <div>
        <img :src="'/img/morphs/morph'+slide+'.png'">
    </div>

    <div class="flex w-full justify-between" style="padding-bottom: 1rem">
        <div class="w-1/2 px-4">
            <button @click="slide = (slide === 1) ? 13 : slide - 1" class="w-full bg-cyan-400 rounded-full text-center py-3 font-bold text-white">Previous</button>
        </div>
        <div class="w-1/2 px-4">
            <button @click="slide = (slide % 13) + 1" class="w-full bg-cyan-400 rounded-full text-center py-3 font-bold text-white">Next</button>
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Morph，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/morph
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'

window.Alpine = Alpine
Alpine.plugin(morph)

...
```

<a name="alpine-morph"></a>
#### Alpine.morph()

`Alpine.morph(el, newHtml)` 允许你基于传入的 HTML 以命令式的方式变形一个 DOM 节点。它接受以下参数：

| 参数 | 说明 |
| ---       | --- |
| `el`      | 页面上的一个 DOM 元素。 |
| `newHtml` | 用作将 DOM 元素变形为的模板的 HTML 字符串。 |
| `options`（可选） | 一个选项对象，主要用于[注入生命周期钩子](#lifecycle-hooks)。 |

下面是一个使用 `Alpine.morph()` 用新的 HTML 更新 Alpine 组件的示例：（在真实应用中，这些新 HTML 很可能来自服务器）

```html
<div x-data="{ message: 'Change me, then press the button!' }">
    <input type="text" x-model="message">
    <span x-text="message"></span>
</div>

<button>Run Morph</button>

<script>
    document.querySelector('button').addEventListener('click', () => {
        let el = document.querySelector('div')

        Alpine.morph(el, `
            <div x-data="{ message: 'Change me, then press the button!' }">
                <h2>See how new elements have been added</h2>

                <input type="text" x-model="message">
                <span x-text="message"></span>

                <h2>but the state of this component hasn't changed? Magical.</h2>
            </div>
        `)
    })
</script>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: 'Change me, then press the button!' }" id="morph-demo-1" class="space-y-2">
        <input type="text" x-model="message" class="w-full">
        <span x-text="message"></span>
    </div>

    <button id="morph-button-1" class="mt-4">Run Morph</button>
</div>

<script>
    document.querySelector('#morph-button-1').addEventListener('click', () => {
        let el = document.querySelector('#morph-demo-1')

        Alpine.morph(el, `
            <div x-data="{ message: 'Change me, then press the button!' }" id="morph-demo-1" class="space-y-2">
                <h4>See how new elements have been added</h4>
                <input type="text" x-model="message" class="w-full">
                <span x-text="message"></span>
                <h4>but the state of this component hasn't changed? Magical.</h4>
            </div>
        `)
    })
</script>
<!-- END_VERBATIM -->

<a name="lifecycle-hooks"></a>
##### 生命周期钩子

"Morph" 插件的工作原理是比较两棵 DOM 树：当前实际存在的元素和传入的 HTML。

Morph 会同时遍历两棵树，并比较每个节点及其子节点。如果发现差异，它就会"修补"（更改）当前 DOM 树，使其与传入的 HTML 树匹配。

虽然默认算法已经非常强大，但在某些情况下，你可能希望在其生命周期中插入钩子，观察或改变它正在发生的行为。

在深入介绍可用的生命周期钩子之前，让我们先列出它们可能接收的所有参数，并解释每个参数的含义：

| 参数 | 说明 |
| ---       | --- |
| `el` | 这始终是页面上将被"修补"（被 Morph 更改）的实际的、当前的 DOM 元素。 |
| `toEl` | 这是一个"模板元素"。它是一个临时元素，表示当前实际的 `el` 将被修补成什么样子。它永远不会真正出现在页面上，只应用于参考。 |
| `childrenOnly()` | 这是一个可以在钩子内部调用的函数，用于告诉 Morph 跳过当前元素，只"修补"其子元素。 |
| `skip()` | 一个函数，在钩子内调用时会"跳过"对当前元素及其子元素的比较/修补。 |

以下是可用的生命周期钩子（作为第三个参数传入 `Alpine.morph(..., options)`）：

| 选项 | 说明 |
| ---       | --- |
| `updating(el, toEl, childrenOnly, skip)` | 在使用比较用的 `toEl` 修补 `el` 之前调用。 |
| `updated(el, toEl)` | 在 Morph 修补完 `el` 之后调用。 |
| `removing(el, skip)` | 在 Morph 从实际 DOM 中移除一个元素之前调用。 |
| `removed(el)` | 在 Morph 从实际 DOM 中移除一个元素之后调用。 |
| `adding(el, skip)` | 在添加新元素之前调用。 |
| `added(el)` | 在向实际 DOM 树添加新元素之后调用。 |
| `key(el)` | 一个可复用的函数，用于确定 Morph 在比较/修补之前如何为树中的元素"打键"。[更多信息请点击此处](#keys) |
| `lookahead` | 一个布尔值，告诉 Morph 在其算法中启用一项额外的"前瞻"功能，以确保一个即将被移除的 DOM 元素应该只是被"移动"到后面的兄弟位置。 |

以下是所有这些生命周期钩子的代码，供更具体的参考：

```js
Alpine.morph(el, newHtml, {
    updating(el, toEl, childrenOnly, skip) {
        //
    },

    updated(el, toEl) {
        //
    },

    removing(el, skip) {
        //
    },

    removed(el) {
        //
    },

    adding(el, skip) {
        //
    },

    added(el) {
        //
    },

    key(el) {
        // By default Alpine uses the `key=""` HTML attribute.
        return el.id
    },

    lookahead: true, // Default: false
})
```

<a name="keys"></a>
##### 键

像 Morph 这样的 DOM 差异比较工具会尽力将原始 DOM 准确地"变形"为新的 HTML。然而，在某些情况下，无法判断一个元素是应该仅被修改，还是被完全替换。

由于这种限制，Morph 提供了一套"键"系统，允许开发者"强制"保留某些元素，而不是替换它们。

它们最常见的用例是循环中的同级元素列表。下面是一个说明为什么有时需要键的示例：

```html
<!-- "Live" Dom on the page: -->
<ul>
    <li>Mark</li>
    <li>Tom</li>
    <li>Travis</li>
</ul>

<!-- New HTML to "morph to": -->
<ul>
    <li>Travis</li>
    <li>Mark</li>
    <li>Tom</li>
</ul>
```

在上述情况下，Morph 无法知道"Travis"节点已经在 DOM 树中被移动。它只会认为"Mark"被改成了"Travis"，"Travis"被改成了"Tom"。

这并不是我们真正想要的。我们希望 Morph 保留原始元素，并且不是修改它们，而是在 `<ul>` 内移动它们。

通过为每个节点添加键，我们可以这样实现：

```html
<!-- "Live" Dom on the page: -->
<ul>
    <li key="1">Mark</li>
    <li key="2">Tom</li>
    <li key="3">Travis</li>
</ul>

<!-- New HTML to "morph to": -->
<ul>
    <li key="3">Travis</li>
    <li key="1">Mark</li>
    <li key="2">Tom</li>
</ul>
```

现在 `<li>` 上有了"键"，Morph 会在两棵树中匹配它们并相应地移动。

你可以通过 `key:` 配置选项来配置 Morph 将什么视为"键"。[更多信息请点击此处](#lifecycle-hooks)

<a name="alpine-morph-between"></a>
#### Alpine.morphBetween()

`Alpine.morphBetween(startMarker, endMarker, newHtml, options)` 方法允许你基于传入的 HTML，将两个标记元素之间的 DOM 节点范围进行变形。当你只想更新 DOM 的特定部分而无需提供一个单一根节点时，这非常有用。

| 参数 | 说明 |
| ---       | --- |
| `startMarker` | 一个标记变形范围开始的 DOM 节点（通常是注释节点） |
| `endMarker` | 一个标记变形范围结束的 DOM 节点（通常是注释节点） |
| `newHtml` | 用于替换标记之间内容的 HTML 字符串或 DOM 元素 |
| `options` | 一个选项对象（与 `Alpine.morph()` 相同） |

### Sort Plugin

Alpine 的 Sort 插件允许你通过鼠标拖拽轻松地重新排列元素。

此功能适用于看板、待办事项列表、可排序的表格列等场景。

此插件使用的拖拽功能由 [SortableJS](https://github.com/SortableJS/Sortable) 项目提供。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

##### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```html
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/sort@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你可以从 NPM 安装 Sort，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/sort
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

...
```

<a name="basic-usage"></a>
#### 基本用法

使用此插件的主要 API 是 `x-sort` 指令。通过向一个元素添加 `x-sort`，其包含 `x-sort:item` 的子元素将变得可排序——也就是说，你可以用鼠标拖拽它们，它们会改变位置。

```html
<ul x-sort>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort>
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="sort-handlers"></a>
#### 排序处理函数

你可以通过向 `x-sort` 传入处理函数，并使用 `x-sort:item` 为每个项目添加键来响应排序变化。下面是一个简单处理函数的示例，它会显示一个包含被移动项目的键及其新位置的提示对话框：

```html
<ul x-sort="alert($item + ' - ' + $position)">
    <li x-sort:item="1">foo</li>
    <li x-sort:item="2">bar</li>
    <li x-sort:item="3">baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort="alert($item + ' - ' + $position)">
        <li x-sort:item="1" class="cursor-pointer">foo</li>
        <li x-sort:item="2" class="cursor-pointer">bar</li>
        <li x-sort:item="3" class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

每当项目的排序顺序发生变化时，`x-sort` 处理函数都会被调用。`$item` 魔法属性将包含被排序元素的键（来自 `x-sort:item`），`$position` 将包含项目的新位置（从索引 `0` 开始）。

你也可以向 `x-sort` 传入一个处理函数，该函数将接收 `item` 和 `position` 作为第一个和第二个参数：

```html
<div x-data="{ handle: (item, position) => { ... } }">
    <ul x-sort="handle">
        <li x-sort:item="1">foo</li>
        <li x-sort:item="2">bar</li>
        <li x-sort:item="3">baz</li>
    </ul>
</div>
```

处理函数通常用于将项目的新顺序持久化到数据库中，以便在页面刷新后保留列表的排序顺序。

<a name="sorting-groups"></a>
#### 排序分组

此插件允许你通过向两个列表添加相同的 `x-sort:group` 值，将项目从一个 `x-sort` 可排序列表拖拽到另一个列表中：

```html
<div>
    <ul x-sort x-sort:group="todos">
        <li x-sort:item="1">foo</li>
        <li x-sort:item="2">bar</li>
        <li x-sort:item="3">baz</li>
    </ul>

    <ol x-sort x-sort:group="todos">
        <li x-sort:item="4">foo</li>
        <li x-sort:item="5">bar</li>
        <li x-sort:item="6">baz</li>
    </ol>
</div>
```

因为上面两个可排序列表使用了相同的组名（`todos`），所以你可以将项目从一个列表拖到另一个列表中。

> 当使用 `x-sort="handle"` 之类的排序处理函数，并将项目从一个组拖到另一个组时，只有目标列表的处理函数会被调用，并传入键和新位置。

<a name="drag-handles"></a>
#### 拖拽手柄

默认情况下，每个 `x-sort:item` 元素都可以通过在其中的任意位置点击并拖拽来进行移动。然而，你可能希望指定一个更小、更具体的元素作为"拖拽手柄"，这样元素的其余部分可以像往常一样进行交互，只有手柄会对鼠标拖拽做出响应：

```html
<ul x-sort>
    <li x-sort:item>
        <span x-sort:handle> - </span>foo
    </li>

    <li x-sort:item>
        <span x-sort:handle> - </span>bar
    </li>

    <li x-sort:item>
        <span x-sort:handle> - </span>baz
    </li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>foo
        </li>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>bar
        </li>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>baz
        </li>
    </ul>
</div>
<!-- END_VERBATIM -->

正如你在上面的示例中看到的，连字符 "-" 是可拖拽的，但项目文本（"foo"）则不能。

<a name="ignoring-elements"></a>
#### 忽略元素

有时你可能希望阻止可排序项目中的某些元素发起拖拽操作。当你拥有按钮、下拉菜单或链接等交互元素，希望用户可以点击而不意外拖拽可排序项目时，这尤其有用。

你可以使用 `x-sort:ignore` 指令来标记不应触发拖拽的元素：

```html
<ul x-sort>
    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>

    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>

    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>
</ul>
```

在上面的示例中，用户可以点击并拖拽项目本身，但点击 "Edit" 按钮不会发起拖拽操作。

> **注意：** 带有 `x-sort:ignore` 的元素仍将正常工作（按钮可以被点击、输入框可以被聚焦等）——它们只是被排除在拖拽操作之外。

<a name="ghost-elements"></a>
#### 幽灵元素

当用户拖拽项目时，元素会跟随鼠标移动，看起来就像真的在拖拽这个元素一样。

默认情况下，拖拽期间会在原始元素的位置留下一个"空洞"（空白区域）。

如果你希望在原位置显示原始元素的"幽灵"而不是空白区域，可以向 `x-sort` 添加 `.ghost` 修饰符：

```html
<ul x-sort.ghost>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort.ghost>
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="ghost-styling"></a>
##### 设置幽灵元素的样式

默认情况下，当原始元素被拖拽时，"幽灵"元素会附带一个 `.sortable-ghost` CSS 类。

这使得添加任何你想要的自定义样式变得很容易：

```html
<style>
.sortable-ghost {
    opacity: .5 !important;
}
</style>

<ul x-sort.ghost>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort.ghost x-sort:config="{ ghostClass: 'opacity-50' }">
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="sorting-class"></a>
#### body 上的排序类

当一个元素被拖拽时，Alpine 会自动向页面的 `<body>` 元素添加一个 `.sorting` 类。

这对于仅使用 CSS 对页面上的任何元素进行条件样式设置非常有用。

例如，你可以设置一个只在用户排序项目时显示的警告：

```html
<div id="sort-warning">
    Page functionality is limited while sorting
</div>
```

要让它只在排序时显示，你可以使用 `body.sorting` CSS 选择器：

```css
#sort-warning {
    display: none;
}

body.sorting #sort-warning {
    display: block;
}
```

<a name="css-hover-bug"></a>
#### CSS 悬停 bug

目前，[Chrome 和 Safari 中存在一个 bug](https://issues.chromium.org/issues/41129937)（Firefox 中没有），会导致悬停样式出现问题。

请看下面的 HTML，列表中的每个项目会根据悬停状态进行不同的样式设置（这里我们使用 Tailwind 的 `.hover` 类来条件性地添加边框）：

```html
<div x-sort>
    <div x-sort:item class="hover:border">foo</div>
    <div x-sort:item class="hover:border">bar</div>
    <div x-sort:item class="hover:border">baz</div>
</div>
```

如果你拖拽下面列表中的某个元素，你会看到悬停效果会被错误地应用到位于原始元素位置上的任何元素：

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort class="flex flex-col items-start">
        <li x-sort:item class="hover:border border-black cursor-pointer">foo</li>
        <li x-sort:item class="hover:border border-black cursor-pointer">bar</li>
        <li x-sort:item class="hover:border border-black cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

要解决这个问题，你可以利用排序时应用到 body 上的 `.sorting` 类，将悬停效果限制为只在 `body` 上不存在 `.sorting` 时才生效。

下面是如何使用 Tailwind 任意变体直接在行内实现这一点：

```html
<div x-sort>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">foo</div>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">bar</div>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">baz</div>
</div>
```

现在你可以在下面看到，悬停效果只会应用到被拖拽的元素上，而不是列表中的其他元素。

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort class="flex flex-col items-start">
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">foo</li>
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">bar</li>
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="custom-configuration"></a>
#### 自定义配置

Alpine 在内部为配置 [SortableJS](https://github.com/SortableJS/Sortable?tab=readme-ov-file#options) 选择了合理的默认值。不过，你可以使用 `x-sort:config` 自行添加或覆盖这些选项中的任意一项：

```html
<ul x-sort x-sort:config="{ animation: 0 }">
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort x-sort:config="{ animation: 0 }">
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

> 传入的任何配置选项都会覆盖 Alpine 的默认值。对于 `animation` 来说这没有问题，但请注意，覆盖 `handle`、`group`、`filter`、`onSort`、`onStart` 或 `onEnd` 可能会破坏功能。

[在此查看 SortableJS 配置选项的完整列表 →](https://github.com/SortableJS/Sortable?tab=readme-ov-file#options)

## 进阶

### CSP (Content-Security Policy) Build

为了让 Alpine 能够执行 HTML 属性中的 JavaScript 表达式（如 `x-on:click="console.log()"`），它需要使用一些会违反“unsafe-eval”[内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)的工具，而某些应用出于安全目的会强制执行该策略。

> 在底层，Alpine 实际上并不使用 eval() 本身，因为它既慢又容易出问题。相反，它使用 Function 声明，这要好得多，但仍然会违反“unsafe-eval”。

Alpine 提供了一个不会违反“unsafe-eval”的替代构建版本，并且支持 Alpine 的大部分内联表达式语法。

<a name="installation"></a>
#### 安装

你可以通过 `<script>` 标签引入此构建版本，或者通过 NPM 安装它：

##### 通过 CDN

你可以像使用标准 Alpine 构建版本一样，将此构建版本的 CDN 以 `<script>` 标签的形式引入：

```html
<!-- Alpine's CSP-friendly Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
```

##### 通过 NPM

你也可以从 NPM 安装此构建版本，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/csp
```

然后在你的打包文件中初始化它：

```js
import Alpine from '@alpinejs/csp'

window.Alpine = Alpine

Alpine.start()
```

<a name="basic-example"></a>
#### 基础示例

下面是一个使用 Alpine CSP 构建版本的可运行计数器组件。请注意，大多数表达式与常规 Alpine 中的用法完全一致：

```html
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'nonce-a23gbfz9e'">
        <script defer nonce="a23gbfz9e" src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
    </head>
    <body>
        <div x-data="{ count: 0, message: 'Hello' }">
            <button x-on:click="count++">Increment</button>
            <button x-on:click="count = 0">Reset</button>

            <span x-text="count"></span>
            <span x-text="message + ' World'"></span>
            <span x-show="count > 5">Count is greater than 5!</span>
        </div>
    </body>
</html>
```

<a name="whats-supported"></a>
#### 支持的内容

CSP 构建版本支持你想在 Alpine 中使用的大多数 JavaScript 表达式：

##### 对象与数组字面量
```html
<!-- ✅ These work -->
<div x-data="{ user: { name: 'John', age: 30 }, items: [1, 2, 3] }">
    <span x-text="user.name"></span>
    <span x-text="items[0]"></span>
</div>
```

##### 基础运算
```html
<!-- ✅ These work -->
<div x-data="{ count: 5, name: 'Alpine' }">
    <span x-text="count + 10"></span>
    <span x-text="count > 3"></span>
    <span x-text="count === 5 ? 'Yes' : 'No'"></span>
    <span x-text="'Hello ' + name"></span>
    <div x-show="!loading && count > 0"></div>
</div>
```

##### 赋值与更新
```html
<!-- ✅ These work -->
<div x-data="{ count: 0, user: { name: '' } }">
    <button x-on:click="count++">Increment</button>
    <button x-on:click="count = 0">Reset</button>
    <input x-model="user.name">
</div>
```

##### 方法调用
```html
<!-- ✅ These work -->
<div x-data="{ items: ['a', 'b'] }">
    <button x-on:click="items.push('c')">Add Item</button>
</div>
```

<a name="whats-not-supported"></a>
#### 不支持的内容

某些高级且可能存在危险的 JavaScript 特性不受支持：

##### 复杂表达式
```html
<!-- ❌ These don't work -->
<div x-data="{ user: { name: '' } }">
    <!-- Property assignments -->
    <button x-on:click="user.name = 'John'">Bad</button>

    <!-- Arrow functions -->
    <button x-on:click="() => console.log('hi')">Bad</button>

    <!-- Destructuring -->
    <div x-text="{ name } = user">Bad</div>

    <!-- Template literals -->
    <div x-text="`Hello ${name}`">Bad</div>

    <!-- Spread operator -->
    <div x-data="{ ...defaults }">Bad</div>
</div>
```

##### 全局变量与函数
```html
<!-- ❌ These don't work -->
<div x-data>
    <button x-on:click="console.log('hi')"></button>
    <span x-text="document.title"></span>
    <span x-text="window.innerWidth"></span>
    <span x-text="Math.max(count, 100)"></span>
    <span x-text="parseInt('123') + count"></span>
    <span x-text="JSON.stringify({ value: count })"></span>
</div>
```

##### HTML 注入
```html
<!-- ❌ These don't work -->
<div x-data="{ message: 'Hello <span>World</span>' }">
    <span x-html="message"></span>
    <span x-init="$el.insertAdjacentHTML('beforeend', message)"></span>
</div>
```

<a name="when-to-extract-logic"></a>
#### 何时提取逻辑

虽然 CSP 构建版本支持简单的内联表达式，但为了更好地组织代码，你应将复杂逻辑提取到专门的函数或 Alpine.data() 组件中：

```html
<!-- Instead of this -->
<div x-data="{ users: [] }" x-show="users.filter(u => u.active && u.role === 'admin').length > 0">
```

```html
<!-- Do this -->
<div x-data="userManager" x-show="hasActiveAdmins">

<script nonce="...">
    Alpine.data('userManager', () => ({
        users: [],

        get hasActiveAdmins() {
            return this.users.filter(u => u.active && u.role === 'admin').length > 0
        }
    }))
</script>
```

这种方法会让你的代码更易读、更易测试、更易维护，尤其适用于复杂的应用。

<a name="csp-headers"></a>
#### CSP 响应头

下面是一个可与 Alpine 的 CSP 构建版本配合使用的 CSP 响应头示例：

```
Content-Security-Policy: default-src 'self'; script-src 'nonce-[random]' 'strict-dynamic';
```

关键在于从你的 `script-src` 指令中移除 `'unsafe-eval'`，同时仍然允许基于 nonce 的脚本运行。

### Reactivity

Alpine 之所以是“响应式”的，是因为当你更改某条数据时，所有依赖该数据的内容都会自动对该更改作出“响应”。

Alpine 中发生的每一点响应性，都源于 Alpine 核心中两个非常重要的响应式函数：`Alpine.reactive()` 和 `Alpine.effect()`。

> Alpine 底层使用 VueJS 的响应式引擎来提供这些函数。
> [→ 了解更多关于 @vue/reactivity](https://github.com/vuejs/vue-next/tree/master/packages/reactivity)

理解这两个函数将赋予你超能力——无论是作为 Alpine 开发者，还是作为普通的 Web 开发者。

<a name="alpine-reactive"></a>
#### Alpine.reactive()

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
#### Alpine.effect()

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

```html
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

### Extending

Alpine 的代码库非常开放，允许以多种方式进行扩展。事实上，Alpine 本身提供的每一个指令和魔法属性都使用这些完全相同的 API。理论上，你可以使用这些 API 自行重建 Alpine 的全部功能。

<a name="lifecycle-concerns"></a>
#### 生命周期注意事项
在深入研究每个单独的 API 之前，让我们先谈谈你应该在代码库的哪个位置使用这些 API。

由于这些 API 会影响 Alpine 初始化页面的方式，因此它们必须在 Alpine 下载完成并在页面上可用之后、但在其初始化页面本身之前进行注册。

根据你是将 Alpine 导入到打包文件中，还是通过 `<script>` 标签直接引入，有两种不同的技巧。让我们分别看看：

<a name="via-script-tag"></a>
##### 通过 script 标签

如果你通过 script 标签引入 Alpine，则需要在一个 `alpine:init` 事件监听器内注册任何自定义扩展代码。

下面是一个示例：

```html
<html>
    <script src="/js/alpine.js" defer></script>

    <div x-data x-foo></div>

    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.directive('foo', ...)
        })
    </script>
</html>
```

如果你想将扩展代码提取到外部文件中，则需要确保该文件的 `<script>` 标签位于 Alpine 的 `<script>` 标签之前，如下所示：

```html
<html>
    <script src="/js/foo.js" defer></script>
    <script src="/js/alpine.js" defer></script>

    <div x-data x-foo></div>
</html>
```

<a name="via-npm"></a>
##### 通过 NPM 模块

如果你将 Alpine 导入到打包文件中，则必须确保在导入 `Alpine` 全局对象与调用 `Alpine.start()` 初始化 Alpine 之间注册任何扩展代码。例如：

```js
import Alpine from 'alpinejs'

Alpine.directive('foo', ...)

window.Alpine = Alpine
window.Alpine.start()
```

现在我们已经知道在哪里使用这些扩展 API，接下来让我们更详细地了解如何使用每一个：

<a name="custom-directives"></a>
#### 自定义指令

Alpine 允许你使用 `Alpine.directive()` API 注册自己的自定义指令。

<a name="method-signature"></a>
##### 方法签名

```js
Alpine.directive('[name]', (el, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {})
```

&nbsp; | &nbsp;
---|---
name | 指令的名称。例如，名称 "foo" 将被用作 `x-foo`
el | 添加了该指令的 DOM 元素
value | 如果提供，则为指令中冒号后面的部分。例如：`x-foo:bar` 中的 `'bar'`
modifiers | 指令中以点分隔的尾随附加项的数组。例如：`x-foo.baz.lob` 中的 `['baz', 'lob']`
expression | 指令的属性值部分。例如：`x-foo="law"` 中的 `law`
Alpine | Alpine 全局对象
effect | 用于创建响应式效果的函数，当该指令从 DOM 中移除时会自动清理
cleanup | 你可以向其传入自定义回调的函数，这些回调会在该指令从 DOM 中移除时运行

<a name="simple-example"></a>
##### 简单示例

下面是一个我们要创建的简单指令示例，名为 `x-uppercase`：

```js
Alpine.directive('uppercase', el => {
    el.textContent = el.textContent.toUpperCase()
})
```
```html
<div x-data>
    <span x-uppercase>Hello World!</span>
</div>
```

<a name="evaluating-expressions"></a>
##### 求值表达式

在注册自定义指令时，你可能希望求值用户提供的 JavaScript 表达式：

例如，假设你想创建一个自定义指令，作为 `console.log()` 的快捷方式。类似这样：

```html
<div x-data="{ message: 'Hello World!' }">
    <div x-log="message"></div>
</div>
```

你需要通过 `x-data` 作用域将其作为 JavaScript 表达式进行求值，从而检索 `message` 的实际值。

幸运的是，Alpine 通过 `evaluate()` API 公开了其求值 JavaScript 表达式的系统。下面是一个示例：

```js
Alpine.directive('log', (el, { expression }, { evaluate }) => {
    // expression === 'message'

    console.log(
        evaluate(expression)
    )
})
```

现在，当 Alpine 初始化 `<div x-log...>` 时，它将检索传入指令的表达式（本例中为“message”），并在当前元素的 Alpine 组件作用域上下文中对其求值。

<a name="introducing-reactivity"></a>
##### 引入响应性

基于之前的 `x-log` 示例，假设我们希望 `x-log` 记录 `message` 的值，并且在值发生变化时也进行记录。

给定以下模板：

```html
<div x-data="{ message: 'Hello World!' }">
    <div x-log="message"></div>

    <button @click="message = 'yolo'">Change</button>
</div>
```

我们希望初始记录“Hello World!”，然后在按下 `<button>` 后记录“yolo”。

我们可以调整 `x-log` 的实现，并引入两个新 API 来实现这一点：`evaluateLater()` 和 `effect()`：

```js
Alpine.directive('log', (el, { expression }, { evaluateLater, effect }) => {
    let getThingToLog = evaluateLater(expression)

    effect(() => {
        getThingToLog(thingToLog => {
            console.log(thingToLog)
        })
    })
})
```

让我们逐行分析上面的代码。

```js
let getThingToLog = evaluateLater(expression)
```

在这里，我们不会立即求值 `message` 并获取结果，而是将字符串表达式（“message”）转换为一个可以在任何时候运行的实际 JavaScript 函数。如果你要多次求值同一个 JavaScript 表达式，强烈建议先生成一个 JavaScript 函数并使用它，而不是直接调用 `evaluate()`。原因在于，将纯字符串解释为 JavaScript 函数的过程代价高昂，应避免不必要的使用。

```js
effect(() => {
    ...
})
```

通过向 `effect()` 传入回调，我们是在告诉 Alpine：立即运行该回调，然后跟踪它使用的任何依赖项（在我们的例子中，是像 `message` 这样的 `x-data` 属性）。现在，只要其中一个依赖项发生变化，该回调就会重新运行。这为我们带来了“响应性”。

你可能会认出这个功能来自 `x-effect`。底层是相同的机制。

你可能还会注意到 `Alpine.effect()` 的存在，并疑惑我们为什么在这里不使用它。原因是，通过方法参数提供的 `effect` 函数具有特殊功能：当该指令因任何原因从页面中移除时，它会自动清理自身。

例如，如果带有 `x-log` 的元素因某种原因从页面中移除，那么由于使用了 `effect()` 而不是 `Alpine.effect()`，当 `message` 属性发生变化时，其值将不再记录到控制台。

[→ 了解更多关于 Alpine 中的响应性](/advanced/reactivity)

```js
getThingToLog(thingToLog => {
    console.log(thingToLog)
})
```

现在我们将调用 `getThingToLog`，如果你还记得，它就是字符串表达式“message”的实际 JavaScript 函数版本。

你可能会期望 `getThingToCall()` 立即返回结果，但 Alpine 反而要求你传入一个回调来接收结果。

这样做的原因是为了支持像 `await getMessage()` 这样的异步表达式。通过传入“接收者”回调而不是立即获取结果，你可以让指令同样适用于异步表达式。

[→ 了解更多关于 Alpine 中的异步](/advanced/async)

<a name="cleaning-up"></a>
##### 清理

假设你需要从自定义指令中注册一个事件监听器。当该指令因任何原因从页面中移除后，你也会希望移除该事件监听器。

Alpine 通过在注册自定义指令时提供 `cleanup` 函数，让这一切变得简单。

下面是一个示例：

```js
Alpine.directive('...', (el, {}, { cleanup }) => {
    let handler = () => {}

    window.addEventListener('click', handler)

    cleanup(() => {
        window.removeEventListener('click', handler)
    })

})
```

现在，如果指令从此元素上移除，或者元素本身被移除，事件监听器也会一并移除。

<a name="custom-order"></a>
##### 自定义顺序

默认情况下，任何新指令都会在大多数标准指令之后运行（`x-teleport` 除外）。这通常是可以接受的，但有时你可能需要在某个特定指令之前运行你的自定义指令。
这可以通过在 `Alpine.directive()` 上链式调用 `.before()` 函数，并指定哪个指令需要在你自定义指令之后运行来实现。

```js
Alpine.directive('foo', (el, { value, modifiers, expression }) => {
    Alpine.addScopeToNode(el, {foo: 'bar'})
}).before('bind')
```
```html
<div x-data>
    <span x-foo x-bind:foo="foo"></span>
</div>
```
> 注意，指令名称必须不带 `x-` 前缀（或你使用的任何其他自定义前缀）书写。

<a name="custom-magics"></a>
#### 自定义魔法属性

Alpine 允许你使用 `Alpine.magic()` 注册自定义“魔法属性”（属性或方法）。你注册的任何魔法属性都将以 `$` 前缀提供给应用中所有 Alpine 代码使用。

<a name="method-signature"></a>
##### 方法签名

```js
Alpine.magic('[name]', (el, { Alpine }) => {})
```

&nbsp; | &nbsp;
---|---
name | 魔法属性的名称。例如，名称 "foo" 将被用作 `$foo`
el | 触发该魔法属性的 DOM 元素
Alpine | Alpine 全局对象

<a name="magic-properties"></a>
##### 魔法属性

下面是一个“$now”魔法辅助属性的基本示例，用于从 Alpine 中的任何位置轻松获取当前时间：

```js
Alpine.magic('now', () => {
    return (new Date).toLocaleTimeString()
})
```
```html
<span x-text="$now"></span>
```

现在，`<span>` 标签将包含当前时间，类似“12:00:00 PM”这样的内容。

正如你所看到的，`$now` 的行为像一个静态属性，但在底层实际上是一个 getter，每次访问该属性时都会进行求值。

正因为如此，你可以通过从 getter 中返回一个函数来实现魔法“函数”。

<a name="magic-functions"></a>
##### 魔法函数

例如，如果我们想创建一个 `$clipboard()` 魔法函数，它接受一个要复制到剪贴板的字符串，我们可以这样实现：

```js
Alpine.magic('clipboard', () => {
    return subject => navigator.clipboard.writeText(subject)
})
```
```html
<button @click="$clipboard('hello world')">Copy "Hello World"</button>
```

现在，访问 `$clipboard` 返回的本身就是一个函数，我们可以立即调用它并传入一个参数，就像我们在模板中看到的 `$clipboard('hello world')` 一样。

如果你愿意，也可以使用更简洁的语法（双重箭头函数）来从一个函数返回另一个函数：

```js
Alpine.magic('clipboard', () => subject => {
    navigator.clipboard.writeText(subject)
})
```

<a name="writing-and-sharing-plugins"></a>
#### 编写和共享插件

到目前为止，你应该已经看到在你的应用中注册自定义指令和魔法属性是多么友好和简单。但如果你想把这种功能通过 NPM 包或其他方式与他人共享呢？

你可以使用 Alpine 官方的 “plugin-blueprint” 包快速上手。只需克隆仓库并运行 `npm install && npm run build`，即可编写出一个插件。

为了演示，让我们从头创建一个名为 `Foo` 的虚构 Alpine 插件，它同时包含一个指令（`x-foo`）和一个魔法属性（`$foo`）。

我们将先把插件制作为与 Alpine 一起使用的简单 `<script>` 标签形式，然后再将其升级为可导入到打包文件中的模块：

<a name="script-include"></a>
##### 通过 script 引入

让我们从反向开始，先看看我们的插件将如何被引入到项目中：

```html
<html>
    <script src="/js/foo.js" defer></script>
    <script src="/js/alpine.js" defer></script>

    <div x-data x-init="$foo()">
        <span x-foo="'hello world'">
    </div>
</html>
```

请注意，我们的脚本是在 Alpine 本身之前引入的。这一点很重要，否则当我们的插件加载时，Alpine 可能已经初始化了。

现在让我们看看 `/js/foo.js` 的内容：

```js
document.addEventListener('alpine:init', () => {
    window.Alpine.directive('foo', ...)

    window.Alpine.magic('foo', ...)
})
```

就这样！使用 Alpine 编写一个通过 script 标签引入的插件极其简单。

<a name="bundle-module"></a>
##### 打包模块

现在假设你想编写一个插件，让别人可以通过 NPM 安装并将其包含到他们的打包文件中。

和上一个示例一样，我们将反向进行，先从使用这个插件会是什么样子开始：

```js
import Alpine from 'alpinejs'

import foo from 'foo'
Alpine.plugin(foo)

window.Alpine = Alpine
window.Alpine.start()
```

你会注意到这里有一个新 API：`Alpine.plugin()`。这是 Alpine 提供的一个便捷方法，用于避免你的插件使用者自行注册多个不同的指令和魔法属性。

现在让我们看看插件的源码，以及 `foo` 导出了什么：

```js
export default function (Alpine) {
    Alpine.directive('foo', ...)
    Alpine.magic('foo', ...)
}
```

你会看到 `Alpine.plugin` 极其简单。它接受一个回调并立即调用它，同时将 `Alpine` 全局对象作为参数提供，供回调内部使用。

然后，你就可以随心所欲地扩展 Alpine 了。

### Async

Alpine 的设计目标是在大多数支持标准函数的地方同样支持异步函数。

例如，假设你有一个名为 `getLabel()` 的简单函数，用作 `x-text` 指令的输入：

```js
function getLabel() {
    return 'Hello World!'
}
```
```html
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
```html
<span x-text="await getLabel()"></span>
```

此外，如果你更喜欢在 Alpine 中调用方法时不带结尾的括号，你可以省略它们，Alpine 会检测所提供的函数是否为异步函数并相应地处理。例如：

```html
<span x-text="getLabel"></span>
```
