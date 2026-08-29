---
order: 4
title: watch
---

# $watch

您可以使用 `$watch` 魔法方法来"侦听"组件属性。例如：

```alpine
<div x-data="{ open: false }" x-init="$watch('open', value => console.log(value))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

在上面的示例中，当按下按钮且 `open` 发生变化时，提供的回调将被触发，并在控制台 `console.log` 输出新值：

您可以使用"点"表示法侦听深度嵌套的属性

```alpine
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo.bar', value => console.log(value))">
    <button @click="foo.bar = 'bob'">Toggle Open</button>
</div>
```

当按下 `<button>` 时，`foo.bar` 将被设置为 "bob"，并且 "bob" 将被记录到控制台。

<a name="getting-the-old-value"></a>
### 获取"旧"值

`$watch` 会跟踪被侦听属性的先前值。您可以通过回调的可选第二个参数来访问它，如下所示：

```alpine
<div x-data="{ open: false }" x-init="$watch('open', (value, oldValue) => console.log(value, oldValue))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

<a name="deep-watching"></a>
### 深度侦听

`$watch` 会自动侦听任何级别的更改，但您应该记住：当检测到更改时，侦听器将返回被侦测属性的值，而不是发生更改的子属性的值。

```alpine
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo', (value, oldValue) => console.log(value, oldValue))">
    <button @click="foo.bar = 'bob'">Update</button>
</div>
```

当按下 `<button>` 时，`foo.bar` 将被设置为 "bob"，并且 "{bar: 'bob'} {bar: 'baz'}" 将被记录到控制台（新值和旧值）。

> ⚠️ 在 `$watch` 回调中作为副作用更改"被侦听"对象的属性，将产生无限循环并最终报错。

```alpine
<!-- 🚫 Infinite loop -->
<div x-data="{ foo: { bar: 'baz', bob: 'lob' }}" x-init="$watch('foo', value => foo.bob = foo.bar)">
    <button @click="foo.bar = 'bob'">Update</button>
</div>
```
