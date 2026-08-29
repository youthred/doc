---
order: 3
title: bind()
---

# Alpine.bind

`Alpine.bind(...)` 提供了一种在应用中复用 [`x-bind`](/directives/bind#bind-directives) 对象的方式。

这里有一个简单的示例。与其使用 Alpine 手动绑定属性：

```alpine
<button type="button" @click="doSomething()" :disabled="shouldDisable"></button>
```

你可以将这些属性打包成一个可复用的对象，并使用 `x-bind` 来绑定它：

```alpine
<button x-bind="SomeButton"></button>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.bind('SomeButton', () => ({
            type: 'button',

            '@click'() {
                this.doSomething()
            },

            ':disabled'() {
                return this.shouldDisable
            },
        }))
    })
</script>
```
