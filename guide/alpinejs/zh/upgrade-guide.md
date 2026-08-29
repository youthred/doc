---
order: 2
title: Upgrade From V2
---

# 从 V2 升级

下面是 Alpine V3 破坏性变更的详尽指南，但如果你更喜欢生动直观的方式，可以通过观看 Alpine Day 2021 的"Future of Alpine"主题演讲来了解 V3 中的所有变更以及新特性：

<!-- START_VERBATIM -->
<div class="relative w-full" style="padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden;">
    <iframe
            class="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src="https://www.youtube.com/embed/WixS4JXMwIQ?modestbranding=1&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
    ></iframe>
</div>
<!-- END_VERBATIM -->

从 Alpine V2 升级到 V3 应该相当轻松。在很多情况下，你的代码库无需做任何改动即可使用 V3。下面按照用户受影响可能性从高到低的顺序，列出了所有破坏性变更和弃用项：

> 注意：如果你同时使用 Laravel Livewire 和 Alpine，要使用 Alpine V3，你需要将 Livewire 升级到 v2.5.1 或更高版本。

<a name="breaking-changes"></a>
## 破坏性变更
* [`$el` 现在始终是当前元素](#el-no-longer-root)
* [自动执行数据对象上定义的 `init()` 函数](#auto-init)
* [导入后需要调用 `Alpine.start()`](#need-to-call-alpine-start)
* [`x-show.transition` 现在是 `x-transition`](#removed-show-dot-transition)
* [`x-if` 不再支持 `x-transition`](#x-if-no-transitions)
* [`x-data` 级联作用域](#x-data-scope)
* [`x-init` 不再接受返回回调](#x-init-no-callback)
* [事件处理器返回 `false` 不再隐式"preventDefault"](#no-false-return-from-event-handlers)
* [`x-spread` 现在是 `x-bind`](#x-spread-now-x-bind)
* [`x-ref` 不再支持绑定](#x-ref-no-more-dynamic)
* [使用全局生命周期事件代替 `Alpine.deferLoadingAlpine()`](#use-global-events-now)
* [不再支持 IE11](#no-ie-11)

<a name="el-no-longer-root"></a>
### `$el` 现在始终是当前元素

`$el` 现在始终表示表达式所执行的那个元素，而不再表示组件的根元素。这将取代大多数 `x-ref` 的用法，如果你仍然想访问组件的根元素，可以使用 `$root`。例如：

```alpine
<!-- 🚫 Before -->
<div x-data>
    <button @click="console.log($el)"></button>
    <!-- In V2, $el would have been the <div>, now it's the <button> -->
</div>

<!-- ✅ After -->
<div x-data>
    <button @click="console.log($root)"></button>
</div>
```

为了获得更顺畅的升级体验，你可以用名为 `$root` 的魔法属性替换所有 `$el` 的实例。

[→ 在 V3 中了解更多关于 $el](/magics/el)  
[→ 在 V3 中了解更多关于 $root](/magics/root)

<a name="auto-init"></a>
### 自动执行数据对象上定义的 `init()` 函数

在 V2 中，一个常见的模式是在 `x-data` 对象上手动调用 `init()`（或类似命名的方法）。

在 V3 中，Alpine 会自动调用数据对象上的 `init()` 方法。

```alpine
<!-- 🚫 Before -->
<div x-data="foo()" x-init="init()"></div>

<!-- ✅ After -->
<div x-data="foo()"></div>

<script>
    function foo() {
        return {
            init() {
                //
            }
        }
    }
</script>
```

[→ 了解更多关于自动执行的 init 函数](/globals/alpine-data#init-functions)

<a name="need-to-call-alpine-start"></a>
### 导入后需要调用 Alpine.start()

如果你是从 NPM 导入 Alpine V2，那么现在使用 V3 时你需要手动调用 `Alpine.start()`。如果你使用的是 Alpine 的构建文件或通过 `<template>` 标签使用 CDN，则不受影响。

```js
// 🚫 Before
import 'alpinejs'

// ✅ After
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```

[→ 了解更多关于初始化 Alpine V3](/essentials/installation#as-a-module)

<a name="removed-show-dot-transition"></a>
### `x-show.transition` 现在是 `x-transition`

`x-show.transition...` 辅助方法所提供的所有便捷功能仍然可用，但现在它们来自一个更统一的 API：`x-transition`：

```alpine
<!-- 🚫 Before -->
<div x-show.transition="open"></div>
<!-- ✅ After -->
<div x-show="open" x-transition></div>

<!-- 🚫 Before -->
<div x-show.transition.duration.500ms="open"></div>
<!-- ✅ After -->
<div x-show="open" x-transition.duration.500ms></div>

<!-- 🚫 Before -->
<div x-show.transition.in.duration.500ms.out.duration.750ms="open"></div>
<!-- ✅ After -->
<div
    x-show="open"
    x-transition:enter.duration.500ms
    x-transition:leave.duration.750ms
></div>
```

[→ 了解更多关于 x-transition](/directives/transition)

<a name="x-if-no-transitions"></a>
### `x-if` 不再支持 `x-transition`

在 Alpine 中，你不再能对元素应用过渡，也无法在元素被从 DOM 中移除前/后为其添加进出场效果。

这是一个很少有人知道它存在、更不用说会去使用的功能。

由于过渡系统很复杂，从维护的角度来看，只支持用 `x-show` 对元素应用过渡更合理。

```alpine
<!-- 🚫 Before -->
<template x-if.transition="open">
    <div>...</div>
</template>

<!-- ✅ After -->
<div x-show="open" x-transition>...</div>
```

[→ 了解更多关于 x-if](/directives/if)

<a name="x-data-scope"></a>
### `x-data` 级联作用域

现在，`x-data` 中定义的作用域对所有子元素都可用，除非被嵌套的 `x-data` 表达式覆盖。

```alpine
<!-- 🚫 Before -->
<div x-data="{ foo: 'bar' }">
    <div x-data="{}">
        <!-- foo is undefined -->
    </div>
</div>

<!-- ✅ After -->
<div x-data="{ foo: 'bar' }">
    <div x-data="{}">
        <!-- foo is 'bar' -->
    </div>
</div>
```

[→ 了解更多关于 x-data 作用域](/directives/data#scope)

<a name="x-init-no-callback"></a>
### `x-init` 不再接受返回回调

在 V3 之前，如果 `x-init` 接收到一个 `typeof` 为 "function" 的返回值，它会在 Alpine 完成初始化树中所有其他指令后执行该回调。现在，你必须手动调用 `$nextTick()` 才能实现同样的行为。`x-init` 不再"感知返回值"。

```alpine
<!-- 🚫 Before -->
<div x-data x-init="() => { ... }">...</div>

<!-- ✅ After -->
<div x-data x-init="$nextTick(() => { ... })">...</div>
```

[→ 了解更多关于 $nextTick](/magics/next-tick)

<a name="no-false-return-from-event-handlers"></a>
### 事件处理器返回 `false` 不再隐式"preventDefault"

Alpine V2 会将 `false` 的返回值视为对事件执行 `preventDefault` 的意图。这符合原生内联监听器的标准行为：`<... oninput="someFunctionThatReturnsFalse()">`。Alpine V3 不再支持这一 API。大多数人并不知道它的存在，因此这是一种令人意外的行为。

```alpine
<!-- 🚫 Before -->
<div x-data="{ blockInput() { return false } }">
    <input type="text" @input="blockInput()">
</div>

<!-- ✅ After -->
<div x-data="{ blockInput(e) { e.preventDefault() }">
    <input type="text" @input="blockInput($event)">
</div>
```

[→ 了解更多关于 x-on](/directives/on)

<a name="x-spread-now-x-bind"></a>
### `x-spread` 现在是 `x-bind`

Alpine 复用功能的方式之一，是把 Alpine 指令抽象成对象，然后用 `x-spread` 将它们应用到元素上。这一行为保持不变，只不过现在代替 `x-spread` 的 API 是 `x-bind`（不指定属性）。

```alpine
<!-- 🚫 Before -->
<div x-data="dropdown()">
    <button x-spread="trigger">Toggle</button>

    <div x-spread="dialogue">...</div>
</div>

<!-- ✅ After -->
<div x-data="dropdown()">
    <button x-bind="trigger">Toggle</button>

    <div x-bind="dialogue">...</div>
</div>


<script>
    function dropdown() {
        return {
            open: false,

            trigger: {
                'x-on:click'() { this.open = ! this.open },
            },

            dialogue: {
                'x-show'() { return this.open },
                'x-bind:class'() { return 'foo bar' },
            },
        }
    }
</script>
```

[→ 了解更多关于使用 x-bind 绑定指令](/directives/bind#bind-directives)

<a name="use-global-events-now"></a>
### 使用全局生命周期事件代替 `Alpine.deferLoadingAlpine()`

```alpine
<!-- 🚫 Before -->
<script>
    window.deferLoadingAlpine = startAlpine => {
        // Will be executed before initializing Alpine.

        startAlpine()

        // Will be executed after initializing Alpine.
    }
</script>

<!-- ✅ After -->
<script>
    document.addEventListener('alpine:init', () => {
        // Will be executed before initializing Alpine.
    })

    document.addEventListener('alpine:initialized', () => {
        // Will be executed after initializing Alpine.
    })
</script>
```

[→ 了解更多关于 Alpine 生命周期事件](/essentials/lifecycle#alpine-initialization)


<a name="x-ref-no-more-dynamic"></a>
### `x-ref` 不再支持绑定

在 Alpine V2 中，对于以下代码

```alpine
<div x-data="{options: [{value: 1}, {value: 2}, {value: 3}] }">
    <div x-ref="0">0</div>
    <template x-for="option in options">
        <div :x-ref="option.value" x-text="option.value"></div>
    </template>

    <button @click="console.log($refs[0], $refs[1], $refs[2], $refs[3]);">Display $refs</button>
</div>
```

点击按钮后，所有 `$refs` 都会被显示出来。然而，在 Alpine V3 中，只能访问静态创建的元素的 `$refs`，因此按预期只会返回第一个 ref。


<a name="no-ie-11"></a>
### 不再支持 IE11

Alpine 将不再官方支持 Internet Explorer 11。如果你需要 IE11 支持，我们建议继续使用 Alpine V2。

## 已弃用的 API

以下 2 个 API 在 V3 中仍然可以使用，但已被视为弃用，并且很可能在未来的某个时候被移除。

<a name="away-replace-with-outside"></a>
### 事件监听器修饰符 `.away` 应替换为 `.outside`

```alpine
<!-- 🚫 Before -->
<div x-show="open" @click.away="open = false">
    ...
</div>

<!-- ✅ After -->
<div x-show="open" @click.outside="open = false">
    ...
</div>
```

<a name="alpine-data-instead-of-global-functions"></a>
### 优先使用 `Alpine.data()` 而不是全局 Alpine 函数数据提供者

```alpine
<!-- 🚫 Before -->
<div x-data="dropdown()">
    ...
</div>

<script>
    function dropdown() {
        return {
            ...
        }
    }
</script>

<!-- ✅ After -->
<div x-data="dropdown">
    ...
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            ...
        }))
    })
</script>
```

> 注意：你需要在调用 `Alpine.start()` 之前定义 `Alpine.data()` 扩展。更多信息请参阅 [生命周期注意事项](https://alpinejs.dev/advanced/extending#lifecycle-concerns) 和 [作为模块安装](https://alpinejs.dev/essentials/installation#as-a-module) 文档页面。 
