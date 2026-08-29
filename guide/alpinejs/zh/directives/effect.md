---
order: 11
title: effect
---

# x-effect

`x-effect` 是一个有用的指令，用于在其某个依赖发生变化时重新求值表达式。你可以把它看作一个侦听器，无需指定要侦听哪个属性，它会侦听其中使用的所有属性。

如果这个定义让你感到困惑，没关系。通过一个例子可以更好地解释它：

```alpine
<div x-data="{ label: 'Hello' }" x-effect="console.log(label)">
    <button @click="label += ' World!'">Change Message</button>
</div>
```

当这个组件加载时，`x-effect` 表达式会被执行，并在控制台中输出 “Hello”。

由于 Alpine 能感知 `x-effect` 中包含的所有属性引用，当按钮被点击且 `label` 发生变化时，该效果会被重新触发，并在控制台中输出 “Hello World!”。
