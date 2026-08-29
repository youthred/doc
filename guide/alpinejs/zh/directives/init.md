---
order: 2
title: init
---

# x-init

`x-init` 指令允许你挂接到 Alpine 中任意元素的初始化阶段。

```alpine
<div x-init="console.log('I\'m being initialized!')"></div>
```

在上面的示例中，控制台会在进行进一步的 DOM 更新之前输出“I\'m being initialized!”。

再考虑另一个示例：在组件被处理之前，使用 `x-init` 获取一些 JSON 并将其存储到 `x-data` 中。

```alpine
<div
    x-data="{ posts: [] }"
    x-init="posts = await (await fetch('/posts')).json()"
>...</div>
```

<a name="next-tick"></a>
## $nextTick

有时，你想等到 Alpine 完全完成渲染之后再执行某些代码。

这就好比 React 中的 `useEffect(..., [])`，或者 Vue 中的 `mount`。

通过使用 Alpine 内部的 `$nextTick` 魔法属性，你可以实现这一点。

```alpine
<div x-init="$nextTick(() => { ... })"></div>
```

<a name="standalone-x-init"></a>
## 独立使用 `x-init`

你可以将 `x-init` 添加到 `x-data` HTML 块内部或外部的任意元素上。例如：

```alpine
<div x-data>
    <span x-init="console.log('I can initialize')"></span>
</div>

<span x-init="console.log('I can initialize too')"></span>
```

<a name="auto-evaluate-init-method"></a>
## 自动求值 init() 方法

如果组件的 `x-data` 对象包含 `init()` 方法，它将被自动调用。例如：

```alpine
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

```alpine
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
