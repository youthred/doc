---
order: 6
prefix: $
title: nextTick
---

# $nextTick

`$nextTick` 是一个魔法属性，它允许您仅在 Alpine 完成其响应式 DOM 更新之后才执行给定的表达式。当您想在 DOM 状态反映了您所做的任何数据更新之后与其交互时，这会很有用。

```alpine
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

## Promises

`$nextTick` 返回一个 promise，允许使用 `$nextTick` 暂停异步函数，直到待处理的 DOM 更新完成。以这种方式使用时，`$nextTick` 也不需要传递参数。

```alpine
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
