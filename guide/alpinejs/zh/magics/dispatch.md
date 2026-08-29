---
order: 5
title: dispatch
---

# $dispatch

`$dispatch` 是派发浏览器事件的一个便捷快捷方式。

```alpine
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

```alpine
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

```alpine
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
## 向其他组件派发事件

您还可以利用前面的技术让您的组件相互通信：

**示例：**

```alpine
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
## 向 x-model 派发事件

您还可以使用 `$dispatch()` 触发 `x-model` 数据绑定的数据更新。例如：

```alpine
<div x-data="{ title: 'Hello' }">
    <span x-model="title">
        <button @click="$dispatch('input', 'Hello World!')">Click me</button>
        <!-- After the button is pressed, `x-model` will catch the bubbling "input" event, and update title. -->
    </span>
</div>
```

这为创建可以通过 `x-model` 设置值的自定义输入组件打开了大门。

<a name="cancelable-events"></a>
## 可取消的事件

您可以使用 `$dispatch` 的返回值来检查事件是否被取消。当您想阻止某个操作的默认行为时，这非常有用。

```alpine
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
## 覆盖选项

您可以使用 `$dispatch` 的第三个参数来覆盖事件的默认选项。例如，您可以将 `bubbles` 设置为 `false`：

```alpine
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
