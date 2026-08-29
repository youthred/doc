---
order: 2
title: store()
---

# Alpine.store

Alpine 通过 `Alpine.store()` API 提供全局状态管理。

<a name="registering-a-store"></a>
## 注册全局状态

你可以在 `alpine:init` 监听器中定义 Alpine 全局状态（适用于通过 `<script>` 标签引入 Alpine 的情况），也可以在手动调用 `Alpine.start()` 之前定义它（适用于将 Alpine 导入到构建产物中的情况）：

**通过 `<script>` 标签：**
```alpine
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

**从打包文件中：**
```js
import Alpine from 'alpinejs'

Alpine.store('darkMode', {
    on: false,

    toggle() {
        this.on = ! this.on
    }
})

Alpine.start()
```

<a name="accessing stores"></a>
## 访问全局状态

你可以使用 `$store` 魔法属性在 Alpine 表达式中访问任何全局状态中的数据：

```alpine
<div x-data :class="$store.darkMode.on && 'bg-black'">...</div>
```

你还可以修改全局状态中的属性，所有依赖这些属性的内容都会自动做出响应。例如：

```alpine
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>
```

此外，你也可以通过省略第二个参数，在外部使用 `Alpine.store()` 来访问全局状态，如下所示：

```alpine
<script>
    Alpine.store('darkMode').toggle()
</script>
```

<a name="initializing-stores"></a>
## 初始化全局状态

如果你在 Alpine 全局状态中提供了 `init()` 方法，它会在全局状态注册后立即执行。这对于使用合理的初始值来初始化全局状态中的任何状态非常有用。

```alpine
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            init() {
                this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
            },

            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

请注意上例中新添加的 `init()` 方法。有了它，`on` 全局状态变量会在 Alpine 渲染页面上的任何内容之前，被设置为浏览器的配色方案偏好。

<a name="single-value-stores"></a>
## 单值全局状态

如果你不需要为全局状态使用一个完整的对象，你可以将任何类型的数据设置为全局状态。

下面是上面的示例，但更简单地将其用作一个布尔值：

```alpine
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>

...

<div x-data :class="$store.darkMode && 'bg-black'">
    ...
</div>


<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', false)
    })
</script>
```
