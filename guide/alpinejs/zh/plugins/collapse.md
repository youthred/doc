---
order: 6
title: Collapse
description: Collapse and expand elements with robust animations
graph_image: https://alpinejs.dev/social_collapse.jpg
---

# Collapse Plugin

Alpine 的 Collapse 插件允许你使用平滑的动画展开和折叠元素。

由于这种行为与实现方式不同于 Alpine 标准的过渡系统，因此该功能被做成了一个专门的插件。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Collapse，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/collapse
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

...
```

<a name="x-collapse"></a>
## x-collapse

使用此插件的主要 API 是 `x-collapse` 指令。

`x-collapse` 只能存在于已经带有 `x-show` 指令的元素上。当添加到带有 `x-show` 的元素上时，每当元素的可见性被切换，`x-collapse` 都会通过动画处理其 height 属性，平滑地"折叠"和"展开"该元素。

例如：

```alpine
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="modifiers"></a>
## 修饰符

<a name="dot-duration"></a>
### .duration

你可以通过附加 `.duration` 修饰符来自定义折叠/展开过渡的持续时间，如下所示：

```alpine
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse.duration.1000ms>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse.duration.1000ms>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="dot-min"></a>
### .min

默认情况下，`x-collapse` 的"折叠"状态会将元素的高度设置为 `0px`，同时设置 `display: none;`。

有时，"截断"一个元素而不是完全隐藏它会更有用。通过使用 `.min` 修饰符，你可以为 `x-collapse` 的"折叠"状态设置一个最小高度。例如：

```alpine
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse.min.50px>
        ...
    </p>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ expanded: false }" class="demo">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <div x-show="expanded" x-collapse.min.50px>
        <div class="pt-4">
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        </div>
    </div>
</div>
<!-- END_VERBATIM -->
