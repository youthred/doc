---
order: 1
title: data()
---

# Alpine.data

`Alpine.data(...)` 提供了一种在应用中复用 `x-data` 上下文的方式。

例如，这里有一个演示用的 `dropdown` 组件：

```alpine
<div x-data="dropdown">
    <button @click="toggle">...</button>

    <div x-show="open">...</div>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            toggle() {
                this.open = ! this.open
            }
        }))
    })
</script>
```

如你所见，我们将通常直接定义在 `x-data` 中的属性和方法抽取到了一个独立的 Alpine 组件对象中。

<a name="registering-from-a-bundle"></a>
## 从打包文件中注册

如果你选择为 Alpine 代码使用构建步骤，你应该按以下方式注册你的组件：

```js
import Alpine from 'alpinejs'
import dropdown from './dropdown.js'

Alpine.data('dropdown', dropdown)

Alpine.start()
```

这假设你有一个名为 `dropdown.js` 的文件，其内容如下：

```js
export default () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
})
```

<a name="initial-parameters"></a>
## 初始参数

除了直接按名称引用 `Alpine.data` 提供者（如 `x-data="dropdown"`），你还可以将它们作为函数来引用（`x-data="dropdown()"`）。通过直接以函数方式调用它们，你可以在创建初始数据对象时传入额外的参数，如下所示：

```alpine
<div x-data="dropdown(true)">
```
```js
Alpine.data('dropdown', (initialOpenState = false) => ({
    open: initialOpenState
}))
```

现在，你可以复用 `dropdown` 对象，并根据需要为其提供不同的参数。

<a name="init-functions"></a>
## 初始化函数

如果你的组件包含一个 `init()` 方法，Alpine 会在渲染组件之前自动执行它。例如：

```js
Alpine.data('dropdown', () => ({
    init() {
        // This code will be executed before Alpine
        // initializes the rest of the component.
    }
}))
```

<a name="destroy-functions"></a>
## 销毁函数

如果你的组件包含一个 `destroy()` 方法，Alpine 会在清理组件之前自动执行它。

一个典型的例子是：当你要注册一个由其他库或浏览器 API 提供、而 Alpine 无法提供的事件处理器时。
请参考以下示例代码，了解如何使用 `destroy()` 方法来清理这样一个处理器。

```js
Alpine.data('timer', () => ({
    timer: null,
    counter: 0,
    init() {
      // Register an event handler that references the component instance
      this.timer = setInterval(() => {
        console.log('Increased counter to', ++this.counter);
      }, 1000);
    },
    destroy() {
        // Detach the handler, avoiding memory and side-effect leakage
        clearInterval(this.timer);
    },
}))
```

组件被销毁的一个例子是在 `x-if` 中使用它：

```html
<span x-data="{ enabled: false }">
    <button @click.prevent="enabled = !enabled">Toggle</button>

    <template x-if="enabled">
        <span x-data="timer" x-text="counter"></span>
    </template>
</span>
```

<a name="using-magic-properties"></a>
## 使用魔法属性

如果你想从组件对象中访问魔法方法或魔法属性，可以通过 `this` 上下文来实现：

```js
Alpine.data('dropdown', () => ({
    open: false,

    init() {
        this.$watch('open', () => {...})
    }
}))
```

<a name="encapsulating-directives-with-x-bind"></a>
## 使用 `x-bind` 封装指令

如果你希望复用的不仅仅是组件的数据对象，你可以使用 `x-bind` 封装整个 Alpine 模板指令。

下面是一个使用 `x-bind` 抽取我们之前 dropdown 组件中模板细节的示例：

```alpine
<div x-data="dropdown">
    <button x-bind="trigger"></button>

    <div x-bind="dialogue"></div>
</div>
```

```js
Alpine.data('dropdown', () => ({
    open: false,

    trigger: {
        ['@click']() {
            this.open = ! this.open
        },
    },

    dialogue: {
        ['x-show']() {
            return this.open
        },
    },
}))
```
