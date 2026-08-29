---
order: 3
prefix: $
title: store
---

# $store

您可以使用 `$store` 方便地访问通过 [`Alpine.store(...)`](/globals/alpine-store) 注册的全局 Alpine store。例如：

```alpine
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>

...

<div x-data :class="$store.darkMode.on && 'bg-black'">
    ...
</div>


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

既然我们已经注册了 `darkMode` store 并将 `on` 设置为 "false"，当按下 `<button>` 时，`on` 将变为 "true"，页面的背景颜色将变为黑色。

<a name="single-value-stores"></a>
## 单值 store

如果您不需要为 store 使用完整的对象，您可以将任何类型的数据设置并用作 store。

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

[→ 了解更多关于 Alpine stores](/globals/alpine-store)
