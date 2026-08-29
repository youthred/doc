---
order: 5
title: Focus
description: Easily manage focus within the page
graph_image: https://alpinejs.dev/social_focus.jpg
---

> 注意：此插件以前被称为 "Trap"。Trap 的功能已并入此插件，并附带了额外的功能。你可以无破坏性地将 Trap 替换为 Focus。

# Focus Plugin

Alpine 的 Focus 插件允许你管理页面上的焦点。

> 此插件在内部大量使用了开源工具：[Tabbable](https://github.com/focus-trap/tabbable)。非常感谢该团队为这一问题提供了亟需的解决方案。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

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
## x-trap

Focus 提供了一个专用 API，用于将焦点限制在某个元素内：`x-trap` 指令。

`x-trap` 接受一个 JS 表达式。如果该表达式的结果为 true，焦点将被限制在该元素内部，直到表达式变为 false；到那时，焦点将返回到之前所在的位置。

例如：

```alpine
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
### 嵌套对话框

有时你可能希望在一个对话框内嵌套另一个对话框。`x-trap` 让这变得非常简单，并且会自动处理。

`x-trap` 会跟踪新被"限制"的元素，并存储最后活跃聚焦的元素。一旦元素被"解除限制"，焦点将返回到最初的位置。

这种机制是递归的，因此你可以在一个已被限制的元素内无限次地限制焦点，然后依次"解除限制"每个元素。

下面是嵌套的实际效果：

```alpine
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
### 修饰符

<a name="inert"></a>
#### .inert

在构建对话框/模态框之类的组件时，建议在限制焦点时将页面上的所有其他元素对屏幕阅读器隐藏。

通过向 `x-trap` 添加 `.inert`，当焦点被限制时，页面上的所有其他元素都会获得 `aria-hidden="true"` HTML 属性；当焦点限制被禁用时，这些属性也会被移除。

```alpine
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
#### .noscroll

使用 Alpine 构建对话框/模态框时，建议在对话框打开时禁用周围内容的滚动。

`x-trap` 允许你通过 `.noscroll` 修饰符自动完成此操作。

通过添加 `.noscroll`，当对话框打开时，Alpine 会移除页面上的滚动条，并阻止用户滚动页面。

例如：

```alpine
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
#### .noreturn

有时你可能不希望焦点返回到之前的位置。试想一个在输入框获得焦点时触发的下拉菜单：关闭时若将焦点返回到输入框，只会再次触发下拉菜单打开。

`x-trap` 允许你通过 `.noreturn` 修饰符禁用此行为。

通过添加 `.noreturn`，当 `x-trap` 的表达式求值为 false 时，Alpine 将不会返还焦点。

例如：

```alpine
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
#### .noautofocus

默认情况下，当 `x-trap` 将焦点限制在某个元素内时，它会聚焦该元素内第一个可聚焦的元素。这是一个合理的默认行为，但有些时候你可能想禁用此行为，让 `x-trap` 生效时不自动聚焦任何元素。

通过添加 `.noautofocus`，Alpine 在限制焦点时不会自动聚焦任何元素。

<a name="focus-magic"></a>
## $focus

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

```alpine
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

```alpine
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

```alpine
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
