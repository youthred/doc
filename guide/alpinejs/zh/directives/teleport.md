---
order: 12
title: teleport
description: Send Alpine templates to other parts of the DOM
graph_image: https://alpinejs.dev/social_teleport.jpg
---

# x-teleport

`x-teleport` 指令允许你将 Alpine 模板的一部分传送到页面上 DOM 的另一个位置。

这对于模态框（尤其是嵌套模态框）之类的场景非常有用，因为这样可以跳出当前 Alpine 组件的 z-index 层级。

<a name="x-teleport"></a>
## x-teleport

通过将 `x-teleport` 附加到 `<template>` 元素上，你是在告诉 Alpine 将该元素“追加”到所提供的选择器。

> `x-teleport` 的选择器可以是任何你通常会传给 `document.querySelector` 之类的字符串。它会找到第一个匹配的元素，无论是标签名（`body`）、类名（`.my-class`）、ID（`#my-id`）还是任何其他有效的 CSS 选择器。

[→ 了解更多关于 `document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

下面是一个虚构的模态框示例：

```alpine
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
## 转发事件

Alpine 会尽力让传送的体验无缝衔接。任何你通常在模板中能做的事情，都应该能在 `x-teleport` 模板中完成。被传送的内容可以访问组件正常的 Alpine 作用域，以及 `$refs`、`$root` 等其他功能……

然而，原生 DOM 事件没有传送的概念，因此，例如，如果你从被传送的元素内部触发 “click” 事件，该事件会像往常一样在 DOM 树中向上冒泡。

为了让这种体验更加无缝，你可以直接在 `<template x-teleport...>` 元素本身注册事件监听器来“转发”事件，如下所示：

```alpine
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
## 嵌套

如果你试图将一个模态框嵌套在另一个模态框内，传送功能尤其有用。Alpine 让这变得很简单：

```alpine
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
