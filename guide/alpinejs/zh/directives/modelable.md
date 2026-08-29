---
order: 7
title: modelable
---

# x-modelable

`x-modelable` 允许你将 Alpine 状态暴露为 `x-model` 指令的目标。

下面是一个使用 `x-modelable` 暴露变量以供 `x-model` 绑定的简单示例。

```alpine
<div x-data="{ number: 5 }">
    <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
        <button @click="count++">Increment</button>
    </div>

    Number: <span x-text="number"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ number: 5 }">
        <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
            <button @click="count++">Increment</button>
        </div>

        Number: <span x-text="number"></span>
    </div>
</div>
<!-- END_VERBATIM -->

如你所见，外部作用域的属性 "number" 现在已绑定到内部作用域的属性 "count"。

通常，此功能会与 Laravel Blade 等后端模板框架结合使用。它有助于将 Alpine 组件抽象到后端模板中，并通过 `x-model` 像原生输入一样将状态暴露给外部。

## 支持的值

`x-modelable` 通过以 JSON 形式克隆值来保持内部和外部状态的独立。因此，它适用于与 JSON 兼容的状态，例如字符串、数字、布尔值、`null`、数组，以及包含这些值的普通对象。

浏览器对象及其他无法表示为 JSON 的状态无法完好无损地跨越这一边界。例如，`File` 会丢失其 name、size 和 type 等属性。同样的限制也适用于 `FileList`、`Map`、`Set`、`Date`、类实例和 DOM 节点等值。

对于会产生这些值之一的自定义输入，请省略 `x-modelable`，改为[派发 `input` 事件](/magics/dispatch#dispatching-to-x-model)。`x-model` 会直接从事件中读取值，而不会克隆它：

```alpine
<div x-data="{ files: [] }">
    <div x-model="files">
        <input
            type="file"
            multiple
            @change="$dispatch('input', Array.from($event.target.files))"
        >
    </div>

    <template x-for="file in files" :key="file.name">
        <p x-text="file.name"></p>
    </template>
</div>
```
