---
order: 3
title: Extending
---

# Extending

Alpine 的代码库非常开放，允许以多种方式进行扩展。事实上，Alpine 本身提供的每一个指令和魔法属性都使用这些完全相同的 API。理论上，你可以使用这些 API 自行重建 Alpine 的全部功能。

<a name="lifecycle-concerns"></a>
## 生命周期注意事项
在深入研究每个单独的 API 之前，让我们先谈谈你应该在代码库的哪个位置使用这些 API。

由于这些 API 会影响 Alpine 初始化页面的方式，因此它们必须在 Alpine 下载完成并在页面上可用之后、但在其初始化页面本身之前进行注册。

根据你是将 Alpine 导入到打包文件中，还是通过 `<script>` 标签直接引入，有两种不同的技巧。让我们分别看看：

<a name="via-script-tag"></a>
### 通过 script 标签

如果你通过 script 标签引入 Alpine，则需要在一个 `alpine:init` 事件监听器内注册任何自定义扩展代码。

下面是一个示例：

```alpine
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

```alpine
<html>
    <script src="/js/foo.js" defer></script>
    <script src="/js/alpine.js" defer></script>

    <div x-data x-foo></div>
</html>
```

<a name="via-npm"></a>
### 通过 NPM 模块

如果你将 Alpine 导入到打包文件中，则必须确保在导入 `Alpine` 全局对象与调用 `Alpine.start()` 初始化 Alpine 之间注册任何扩展代码。例如：

```js
import Alpine from 'alpinejs'

Alpine.directive('foo', ...)

window.Alpine = Alpine
window.Alpine.start()
```

现在我们已经知道在哪里使用这些扩展 API，接下来让我们更详细地了解如何使用每一个：

<a name="custom-directives"></a>
## 自定义指令

Alpine 允许你使用 `Alpine.directive()` API 注册自己的自定义指令。

<a name="method-signature"></a>
### 方法签名

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
### 简单示例

下面是一个我们要创建的简单指令示例，名为 `x-uppercase`：

```js
Alpine.directive('uppercase', el => {
    el.textContent = el.textContent.toUpperCase()
})
```
```alpine
<div x-data>
    <span x-uppercase>Hello World!</span>
</div>
```

<a name="evaluating-expressions"></a>
### 求值表达式

在注册自定义指令时，你可能希望求值用户提供的 JavaScript 表达式：

例如，假设你想创建一个自定义指令，作为 `console.log()` 的快捷方式。类似这样：

```alpine
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
### 引入响应性

基于之前的 `x-log` 示例，假设我们希望 `x-log` 记录 `message` 的值，并且在值发生变化时也进行记录。

给定以下模板：

```alpine
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
### 清理

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
### 自定义顺序

默认情况下，任何新指令都会在大多数标准指令之后运行（`x-teleport` 除外）。这通常是可以接受的，但有时你可能需要在某个特定指令之前运行你的自定义指令。
这可以通过在 `Alpine.directive()` 上链式调用 `.before()` 函数，并指定哪个指令需要在你自定义指令之后运行来实现。

```js
Alpine.directive('foo', (el, { value, modifiers, expression }) => {
    Alpine.addScopeToNode(el, {foo: 'bar'})
}).before('bind')
```
```alpine
<div x-data>
    <span x-foo x-bind:foo="foo"></span>
</div>
```
> 注意，指令名称必须不带 `x-` 前缀（或你使用的任何其他自定义前缀）书写。

<a name="custom-magics"></a>
## 自定义魔法属性

Alpine 允许你使用 `Alpine.magic()` 注册自定义“魔法属性”（属性或方法）。你注册的任何魔法属性都将以 `$` 前缀提供给应用中所有 Alpine 代码使用。

<a name="method-signature"></a>
### 方法签名

```js
Alpine.magic('[name]', (el, { Alpine }) => {})
```

&nbsp; | &nbsp;
---|---
name | 魔法属性的名称。例如，名称 "foo" 将被用作 `$foo`
el | 触发该魔法属性的 DOM 元素
Alpine | Alpine 全局对象

<a name="magic-properties"></a>
### 魔法属性

下面是一个“$now”魔法辅助属性的基本示例，用于从 Alpine 中的任何位置轻松获取当前时间：

```js
Alpine.magic('now', () => {
    return (new Date).toLocaleTimeString()
})
```
```alpine
<span x-text="$now"></span>
```

现在，`<span>` 标签将包含当前时间，类似“12:00:00 PM”这样的内容。

正如你所看到的，`$now` 的行为像一个静态属性，但在底层实际上是一个 getter，每次访问该属性时都会进行求值。

正因为如此，你可以通过从 getter 中返回一个函数来实现魔法“函数”。

<a name="magic-functions"></a>
### 魔法函数

例如，如果我们想创建一个 `$clipboard()` 魔法函数，它接受一个要复制到剪贴板的字符串，我们可以这样实现：

```js
Alpine.magic('clipboard', () => {
    return subject => navigator.clipboard.writeText(subject)
})
```
```alpine
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
## 编写和共享插件

到目前为止，你应该已经看到在你的应用中注册自定义指令和魔法属性是多么友好和简单。但如果你想把这种功能通过 NPM 包或其他方式与他人共享呢？

你可以使用 Alpine 官方的 “plugin-blueprint” 包快速上手。只需克隆仓库并运行 `npm install && npm run build`，即可编写出一个插件。

为了演示，让我们从头创建一个名为 `Foo` 的虚构 Alpine 插件，它同时包含一个指令（`x-foo`）和一个魔法属性（`$foo`）。

我们将先把插件制作为与 Alpine 一起使用的简单 `<script>` 标签形式，然后再将其升级为可导入到打包文件中的模块：

<a name="script-include"></a>
### 通过 script 引入

让我们从反向开始，先看看我们的插件将如何被引入到项目中：

```alpine
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
### 打包模块

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
