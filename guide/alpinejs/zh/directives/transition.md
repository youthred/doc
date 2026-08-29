---
order: 10
title: transition
---

# x-transition

Alpine 开箱即用地提供了一个强大的过渡工具。只需几个 `x-transition` 指令，你就可以在元素显示或隐藏时创建平滑的过渡效果。

在 Alpine 中有两种处理过渡的主要方式：

* [过渡辅助指令](#the-transition-helper)
* [应用 CSS 类](#applying-css-classes)

<a name="the-transition-helper"></a>
## 过渡辅助指令

使用 Alpine 实现过渡最简单的方法是在带有 `x-show` 的元素上添加 `x-transition`。例如：

```alpine
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
### 自定义持续时间

初始情况下，进入时持续时间设置为 150 毫秒，离开时设置为 75 毫秒。

你可以使用 `.duration` 修饰符配置过渡所需的持续时间：

```alpine
<div ... x-transition.duration.500ms>
```

上面的 `<div>` 在进入时会过渡 500 毫秒，离开时也会过渡 500 毫秒。

如果你希望分别为进入和离开定制持续时间，可以像这样操作：

```alpine
<div ...
    x-transition:enter.duration.500ms
    x-transition:leave.duration.400ms
>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-transition`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="customizing-delay"></a>
### 自定义延迟

你可以像这样使用 `.delay` 修饰符来延迟过渡：

```alpine
<div ... x-transition.delay.50ms>
```

上面的示例将使元素的进入和离开过渡都延迟 50 毫秒。

<a name="customizing-opacity"></a>
### 自定义透明度

默认情况下，Alpine 的 `x-transition` 会同时应用缩放和透明度过渡，以实现“淡入淡出”效果。

如果你只想应用透明度过渡（不进行缩放），可以像这样实现：

```alpine
<div ... x-transition.opacity>
```

<a name="customizing-scale"></a>
### 自定义缩放

与 `.opacity` 修饰符类似，你可以将 `x-transition` 配置为仅进行缩放（同时不进行透明度过渡），如下所示：

```alpine
<div ... x-transition.scale>
```

`.scale` 修饰符还提供了配置缩放值和原点值的能力：

```alpine
<div ... x-transition.scale.80>
```

上面的代码片段会将元素放大和缩小 80%。

同样，你可以像这样分别为进入和离开过渡定制这些值：

```alpine
<div ...
    x-transition:enter.scale.80
    x-transition:leave.scale.90
>
```

要自定义缩放过渡的原点，你可以使用 `.origin` 修饰符：

```alpine
<div ... x-transition.scale.origin.top>
```

现在缩放将以元素的顶部作为原点，而不是默认的中心。

正如你可能已经猜到的，此自定义的可能值为：`top`、`bottom`、`left` 和 `right`。

如果你愿意，还可以组合两个原点值。例如，如果你希望缩放的原点是“右上角”，可以使用 `.origin.top.right` 作为修饰符。


<a name="applying-css-classes"></a>
## 应用 CSS 类

为了直接控制过渡中的具体内容，你可以在过渡的不同阶段应用 CSS 类。

> 以下示例使用了 [TailwindCSS](https://tailwindcss.com/docs/transition-property) 工具类。

```alpine
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
