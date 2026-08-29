---
order: 5
title: on
---

# x-on

`x-on` 允许你轻松地在已派发的 DOM 事件上运行代码。

下面是一个简单按钮的示例，点击时会弹出一个 alert 提示框。

```alpine
<button x-on:click="alert('Hello World!')">Say Hi</button>
```

> `x-on` 只能监听小写名称的事件，因为 HTML 属性不区分大小写。编写 `x-on:CLICK` 将监听名为 `click` 的事件。如果你需要监听 camelCase 名称的自定义事件，可以使用 [`.camel` 辅助](#camel) 来绕开这一限制。或者，你也可以使用 [`x-bind`](/directives/bind#bind-directives) 在 javascript 代码中将 `x-on` 指令附加到元素上（这样会保留大小写）。

<a name="shorthand-syntax"></a>
## 简写语法

如果你觉得 `x-on:` 过于冗长，可以使用简写语法：`@`。

下面是与上面相同的组件，只是改用了简写语法：

```alpine
<button @click="alert('Hello World!')">Say Hi</button>
```

> 尽管上面的代码片段中没有包含这一点，但如果没有父元素定义 `x-data`，`x-on` 就无法使用。[→ 了解更多关于 `x-data`](/directives/data)

<a name="the-event-object"></a>
## 事件对象

如果你想在表达式中访问原生的 JavaScript 事件对象，可以使用 Alpine 的魔法属性 `$event`。

```alpine
<button @click="alert($event.target.getAttribute('message'))" message="Hello World">Say Hi</button>
```

此外，对于任何不带尾随括号引用的方法，Alpine 也会将事件对象传递给它。例如：

```alpine
<button @click="handleClick">...</button>

<script>
    function handleClick(e) {
        // Now you can access the event object (e) directly
    }
</script>
```

<a name="keyboard-events"></a>
## 键盘事件

Alpine 让监听特定按键上的 `keydown` 和 `keyup` 事件变得轻而易举。

下面是在输入元素中监听 `Enter` 键的示例。

```alpine
<input type="text" @keyup.enter="alert('Submitted!')">
```

你也可以串联这些按键修饰符，以实现更复杂的监听器。

下面这个监听器会在按住 `Shift` 键并按下 `Enter` 时运行，而单独按下 `Enter` 时不会运行。

```alpine
<input type="text" @keyup.shift.enter="alert('Submitted!')">
```

你可以将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露出的任何有效按键名称转换为 kebab-case 后，直接用作修饰符。

```alpine
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
## 鼠标事件

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

```alpine
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
## 自定义事件

Alpine 事件监听器是原生 DOM 事件监听器的封装。因此，它们可以监听任何 DOM 事件，包括自定义事件。

下面是一个组件示例，它既派发自定义 DOM 事件，也监听该事件。

```alpine
<div x-data @foo="alert('Button Was Clicked!')">
    <button @click="$event.target.dispatchEvent(new CustomEvent('foo', { bubbles: true }))">...</button>
</div>
```

当按钮被点击时，`@foo` 监听器将被调用。

由于 `.dispatchEvent` API 过于冗长，Alpine 提供了 `$dispatch` 辅助工具来简化操作。

下面是用 `$dispatch` 魔法属性重写的同一个组件。

```alpine
<div x-data @foo="alert('Button Was Clicked!')">
    <button @click="$dispatch('foo')">...</button>
</div>
```

[→ 了解更多关于 `$dispatch`](/magics/dispatch)

<a name="modifiers"></a>
## 修饰符

Alpine 提供了许多指令修饰符，用于自定义事件监听器的行为。

<a name="prevent"></a>
### .prevent

`.prevent` 等同于在监听器内部对浏览器事件对象调用 `.preventDefault()`。

```alpine
<form @submit.prevent="console.log('submitted')" action="/foo">
    <button>Submit</button>
</form>
```

在上面的示例中，由于使用了 `.prevent`，点击按钮将不会把表单提交到 `/foo` 端点。相反，Alpine 的监听器会处理它，并“阻止”该事件被进一步处理。

<a name="stop"></a>
### .stop

与 `.prevent` 类似，`.stop` 等同于在监听器内部对浏览器事件对象调用 `.stopPropagation()`。

```alpine
<div @click="console.log('I will not get logged')">
    <button @click.stop>Click Me</button>
</div>
```

在上面的示例中，点击按钮将不会输出日志消息。这是因为我们立即停止了事件的传播，不允许它“冒泡”到带有 `@click` 监听器的 `<div>` 上。

<a name="outside"></a>
### .outside

`.outside` 是一个便捷辅助，用于监听其所附加元素外部的点击。下面是一个简单的下拉菜单组件示例：

```alpine
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
### .window

当存在 `.window` 修饰符时，Alpine 将把事件监听器注册到页面根部的 `window` 对象上，而不是元素本身。

```alpine
<div @keyup.escape.window="...">...</div>
```

上面的代码片段将监听页面上任何位置按下的“escape”键。

当你的标记中有一小部分关心发生在整个页面上的事件时，为监听器添加 `.window` 会非常有用。

<a name="document"></a>
### .document

`.document` 的工作方式与 `.window` 类似，只是它将监听器注册在全局的 `document` 对象上，而不是全局的 `window` 对象上。

<a name="once"></a>
### .once

通过为监听器添加 `.once`，你可以确保处理器只被调用一次。

```alpine
<button @click.once="console.log('I will only log once')">...</button>
```

<a name="debounce"></a>
### .debounce

有时，对事件处理器进行“防抖”是很有用的，这样它只会在经过一段特定的无操作时间之后才会被调用（默认 250 毫秒）。

例如，如果你有一个搜索框，会在用户输入时发起网络请求，那么添加防抖将防止网络请求在每次按键时都触发。

```alpine
<input @input.debounce="fetchResults">
```

现在，`fetchResults` 不会在每次按键后都被调用，而只会在 250 毫秒内没有任何按键之后才被调用。

如果你想延长或缩短防抖时间，可以在 `.debounce` 修饰符后面附加一个时长，如下所示：

```alpine
<input @input.debounce.500ms="fetchResults">
```

现在，`fetchResults` 只会在 500 毫秒无操作之后才被调用。

<a name="throttle"></a>
### .throttle

`.throttle` 与 `.debounce` 类似，不同的是它会每 250 毫秒释放一次处理器调用，而不是无限期地延迟。

这在事件可能重复且长时间触发的情况下很有用，此时使用 `.debounce` 并不合适，因为你希望仍然每隔一段时间就处理一次事件。

例如：

```alpine
<div @scroll.window.throttle="handleScroll">...</div>
```

上面的示例是节流的绝佳用例。如果没有 `.throttle`，当用户向下滚动页面时，`handleScroll` 方法将被触发数百次，这会严重拖慢网站速度。通过添加 `.throttle`，我们可以确保 `handleScroll` 每 250 毫秒才被调用一次。

> **有趣的事实：** 这个文档站点正是使用了这种策略来更新右侧边栏中当前高亮的章节。

与 `.debounce` 一样，你也可以为节流事件添加自定义时长：

```alpine
<div @scroll.window.throttle.750ms="handleScroll">...</div>
```

现在，`handleScroll` 将每 750 毫秒被调用一次。

<a name="self"></a>
### .self

通过为事件监听器添加 `.self`，你可以确保事件起源于声明该监听器的元素本身，而不是子元素。

```alpine
<button @click.self="handleClick">
    Click Me

    <img src="...">
</button>
```

在上面的示例中，我们在 `<button>` 标签内有一个 `<img>` 标签。通常情况下，任何起源于 `<button>` 元素内部的点击（例如在 `<img>` 上）都会被按钮上的 `@click` 监听器捕获。

然而，在这个例子中，由于我们添加了 `.self`，只有点击按钮本身才会调用 `handleClick`。只有起源于 `<img>` 元素的点击将不会被处理。

<a name="camel"></a>
### .camel

```alpine
<div @custom-event.camel="handleCustomEvent">
    ...
</div>
```

有时你可能想监听 camelCase 命名的事件，比如我们示例中的 `customEvent`。由于 HTML 属性中不支持 camelCase 写法，因此有必要添加 `.camel` 修饰符，让 Alpine 在内部将事件名称转换为 camelCase。

在上面的示例中添加 `.camel` 后，Alpine 现在监听的是 `customEvent` 而不是 `custom-event`。

<a name="dot"></a>
### .dot

```alpine
<div @custom-event.dot="handleCustomEvent">
    ...
</div>
```

与 `.camelCase` 修饰符类似，在某些情况下你可能想监听名称中包含点的自定义事件（如 `custom.event`）。由于事件名称中的点被 Alpine 保留，你需要用短横线来书写它们，并添加 `.dot` 修饰符。

在上面的代码示例中，`custom-event.dot` 将对应于事件名称 `custom.event`。

<a name="passive"></a>
### .passive

即使在页面上执行 JavaScript 时，浏览器也会优化页面滚动，使其快速流畅。然而，实现不当的触摸和滚轮监听器会阻碍这种优化，并导致网站性能不佳。

如果你正在监听触摸事件，务必为监听器添加 `.passive`，以免阻碍滚动性能。

```alpine
<div @touchstart.passive="...">...</div>
```

[→ 了解更多关于 passive 监听器的内容](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners)

<a name="passive-false"></a>
### .passive.false

在现代浏览器中，触摸和滚轮事件监听器默认是 passive 的。传入 `.passive.false` 可以使这些事件可取消，这样你就可以对它们调用 `preventDefault`。

```alpine
<div @touchmove.passive.false="$event.preventDefault()">...</div>
```

### .capture

如果你想在事件的捕获阶段执行此监听器，请添加此修饰符，例如在事件从目标元素沿 DOM 向上冒泡之前。

```alpine
<div @click.capture="console.log('I will log first')">
    <button @click="console.log('I will log second')"></button>
</div>
```

[→ 了解更多关于事件捕获与冒泡阶段的内容](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture)
