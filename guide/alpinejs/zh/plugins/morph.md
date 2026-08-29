---
order: 8
title: Morph
description: Morph an element into the provided HTML
graph_image: https://alpinejs.dev/social_morph.jpg
---

# Morph Plugin

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
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

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
## Alpine.morph()

`Alpine.morph(el, newHtml)` 允许你基于传入的 HTML 以命令式的方式变形一个 DOM 节点。它接受以下参数：

| 参数 | 说明 |
| ---       | --- |
| `el`      | 页面上的一个 DOM 元素。 |
| `newHtml` | 用作将 DOM 元素变形为的模板的 HTML 字符串。 |
| `options`（可选） | 一个选项对象，主要用于[注入生命周期钩子](#lifecycle-hooks)。 |

下面是一个使用 `Alpine.morph()` 用新的 HTML 更新 Alpine 组件的示例：（在真实应用中，这些新 HTML 很可能来自服务器）

```alpine
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
### 生命周期钩子

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
### 键

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
## Alpine.morphBetween()

`Alpine.morphBetween(startMarker, endMarker, newHtml, options)` 方法允许你基于传入的 HTML，将两个标记元素之间的 DOM 节点范围进行变形。当你只想更新 DOM 的特定部分而无需提供一个单一根节点时，这非常有用。

| 参数 | 说明 |
| ---       | --- |
| `startMarker` | 一个标记变形范围开始的 DOM 节点（通常是注释节点） |
| `endMarker` | 一个标记变形范围结束的 DOM 节点（通常是注释节点） |
| `newHtml` | 用于替换标记之间内容的 HTML 字符串或 DOM 元素 |
| `options` | 一个选项对象（与 `Alpine.morph()` 相同） |
