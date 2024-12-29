const d={docsHtml:`<p>设计令牌（Design Tokens）是一种用于管理设计系统的策略。</p>
<p>它将设计系统中的所有可复用元素（例如颜色、字体、间距等）抽象为独立的变量，以便在整个设计系统中进行统一的管理和应用。</p>
<style>
.design-tokens-color {
  display: inline-block;
  vertical-align: middle;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--mdui-shape-corner-extra-small);
}

.design-tokens-shape-corner {
  display: inline-block;
  vertical-align: middle;
  width: 5rem;
  height: 5rem;
  background-color: rgb(var(--mdui-color-primary));
}

.design-tokens-typescale-display-large {
  line-height: var(--mdui-typescale-display-large-line-height);
  font-size: var(--mdui-typescale-display-large-size);
  letter-spacing: var(--mdui-typescale-display-large-tracking);
  font-weight: var(--mdui-typescale-display-large-weight);
}

.design-tokens-typescale-display-medium {
  line-height: var(--mdui-typescale-display-medium-line-height);
  font-size: var(--mdui-typescale-display-medium-size);
  letter-spacing: var(--mdui-typescale-display-medium-tracking);
  font-weight: var(--mdui-typescale-display-medium-weight);
}

.design-tokens-typescale-display-small {
  line-height: var(--mdui-typescale-display-small-line-height);
  font-size: var(--mdui-typescale-display-small-size);
  letter-spacing: var(--mdui-typescale-display-small-tracking);
  font-weight: var(--mdui-typescale-display-small-weight);
}

.design-tokens-typescale-headline-large {
  line-height: var(--mdui-typescale-headline-large-line-height);
  font-size: var(--mdui-typescale-headline-large-size);
  letter-spacing: var(--mdui-typescale-headline-large-tracking);
  font-weight: var(--mdui-typescale-headline-large-weight);
}

.design-tokens-typescale-headline-medium {
  line-height: var(--mdui-typescale-headline-medium-line-height);
  font-size: var(--mdui-typescale-headline-medium-size);
  letter-spacing: var(--mdui-typescale-headline-medium-tracking);
  font-weight: var(--mdui-typescale-headline-medium-weight);
}

.design-tokens-typescale-headline-small {
  line-height: var(--mdui-typescale-headline-small-line-height);
  font-size: var(--mdui-typescale-headline-small-size);
  letter-spacing: var(--mdui-typescale-headline-small-tracking);
  font-weight: var(--mdui-typescale-headline-small-weight);
}

.design-tokens-typescale-title-large {
  line-height: var(--mdui-typescale-title-large-line-height);
  font-size: var(--mdui-typescale-title-large-size);
  letter-spacing: var(--mdui-typescale-title-large-tracking);
  font-weight: var(--mdui-typescale-title-large-weight);
}

.design-tokens-typescale-title-medium {
  line-height: var(--mdui-typescale-title-medium-line-height);
  font-size: var(--mdui-typescale-title-medium-size);
  letter-spacing: var(--mdui-typescale-title-medium-tracking);
  font-weight: var(--mdui-typescale-title-medium-weight);
}

.design-tokens-typescale-title-small {
  line-height: var(--mdui-typescale-title-small-line-height);
  font-size: var(--mdui-typescale-title-small-size);
  letter-spacing: var(--mdui-typescale-title-small-tracking);
  font-weight: var(--mdui-typescale-title-small-weight);
}

.design-tokens-typescale-label-large {
  line-height: var(--mdui-typescale-label-large-line-height);
  font-size: var(--mdui-typescale-label-large-size);
  letter-spacing: var(--mdui-typescale-label-large-tracking);
  font-weight: var(--mdui-typescale-label-large-weight);
}

.design-tokens-typescale-label-medium {
  line-height: var(--mdui-typescale-label-medium-line-height);
  font-size: var(--mdui-typescale-label-medium-size);
  letter-spacing: var(--mdui-typescale-label-medium-tracking);
  font-weight: var(--mdui-typescale-label-medium-weight);
}

.design-tokens-typescale-label-small {
  line-height: var(--mdui-typescale-label-small-line-height);
  font-size: var(--mdui-typescale-label-small-size);
  letter-spacing: var(--mdui-typescale-label-small-tracking);
  font-weight: var(--mdui-typescale-label-small-weight);
}

.design-tokens-typescale-body-large {
  line-height: var(--mdui-typescale-body-large-line-height);
  font-size: var(--mdui-typescale-body-large-size);
  letter-spacing: var(--mdui-typescale-body-large-tracking);
  font-weight: var(--mdui-typescale-body-large-weight);
}

.design-tokens-typescale-body-medium {
  line-height: var(--mdui-typescale-body-medium-line-height);
  font-size: var(--mdui-typescale-body-medium-size);
  letter-spacing: var(--mdui-typescale-body-medium-tracking);
  font-weight: var(--mdui-typescale-body-medium-weight);
}

.design-tokens-typescale-body-small {
  line-height: var(--mdui-typescale-body-small-line-height);
  font-size: var(--mdui-typescale-body-small-size);
  letter-spacing: var(--mdui-typescale-body-small-tracking);
  font-weight: var(--mdui-typescale-body-small-weight);
}

.design-tokens-state-layer {
  display: inline-block;
  vertical-align: middle;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--mdui-shape-corner-extra-small);
}

.design-tokens-elevation {
  display: inline-block;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  border-radius: var(--mdui-shape-corner-extra-small);
}
</style>

<p>mdui 使用全局 CSS 自定义属性来实现设计令牌。这意味着，你只需修改 CSS 自定义属性，就能全局修改所有 mdui 组件的样式。同时，对于你自己开发的样式，也推荐优先引用 CSS 自定义属性，以确保你的样式与 mdui 组件的样式保持统一，此外，在修改动态配色时，你自己的样式也能同步更新配色。</p>
<h2 id="color">
                  <a href="#color">颜色</a>
                </h2>
<p>mdui 为亮色模式和暗色模式分别提供了一组 CSS 自定义属性。在亮色模式下，CSS 自定义属性名为 <code>--mdui-color-{name}-light</code>，其中 <code>{name}</code> 为颜色名称；在暗色模式下则为 <code>--mdui-color-{name}-dark</code>。</p>
<p>此外，mdui 还提供了一组名为 <code>--mdui-color-{name}</code> 的 CSS 自定义属性，该属性在亮色模式下会引用 <code>--mdui-color-{name}-light</code>，在暗色模式下会引用 <code>--mdui-color-{name}-dark</code>，因此能根据当前亮、暗色模式自动切换颜色。</p>
<p>如果你需要修改部分颜色的 CSS 自定义属性，需要同时修改 <code>--mdui-color-{name}-light</code> 和 <code>--mdui-color-{name}-dark</code> 两个属性。而在读取 CSS 自定义属性时，直接使用 <code>--mdui-color-{name}</code> 属性即可。</p>
<p>CSS 自定义属性的属性值为 RGB 的三个颜色使用 <code>,</code> 分隔，下面的示例演示了颜色的 CSS 自定义属性的用法：</p>
<pre><code class="language-css">/* 修改 primary 的颜色值 */
:root {
  --mdui-color-primary-light: 103, 80, 164;
  --mdui-color-primary-dark: 208, 188, 255;
}

/* 把 foo 元素的背景色设置为 primary */
.foo {
  background-color: rgb(var(--mdui-color-primary));
}

/* 把 bar 元素的背景色设置为含 0.8 不透明度的 primary */
.bar {
  background-color: rgba(var(--mdui-color-primary), 0.8);
}
</code></pre>
<p>如果你需要创建一套全新的配色，推荐使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> 函数，该函数能根据你给定的一个颜色值生成一整套配色方案。</p>
<table>
  <thead>
    <tr>
      <th>颜色名</th>
      <th>CSS 自定义属性</th>
      <th>默认值</th>
      <th>示例</th>
    <tr>
  <thead>
  <tbody>
    <tr>
      <th rowspan="3">Primary</th>
      <td><code>--mdui-color-primary-light</code></td>
      <td><code>103, 80, 164</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-primary-dark</code></td>
      <td><code>208, 188, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-primary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Primary container</th>
      <td><code>--mdui-color-primary-container-light</code></td>
      <td><code>234, 221, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-primary-container-dark</code></td>
      <td><code>79, 55, 139</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-primary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-primary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On primary</th>
      <td><code>--mdui-color-on-primary-light</code></td>
      <td><code>255, 255, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-primary-dark</code></td>
      <td><code>55, 30, 115</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-primary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On primary container</th>
      <td><code>--mdui-color-on-primary-container-light</code></td>
      <td><code>33, 0, 94</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-primary-container-dark</code></td>
      <td><code>234, 221, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-primary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-primary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Inverse primary</th>
      <td><code>--mdui-color-inverse-primary-light</code></td>
      <td><code>208, 188, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-primary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-primary-dark</code></td>
      <td><code>103, 80, 164</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-primary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-primary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-primary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Secondary</th>
      <td><code>--mdui-color-secondary-light</code></td>
      <td><code>98, 91, 113</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-secondary-dark</code></td>
      <td><code>204, 194, 220</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-secondary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Secondary container</th>
      <td><code>--mdui-color-secondary-container-light</code></td>
      <td><code>232, 222, 248</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-secondary-container-dark</code></td>
      <td><code>74, 68, 88</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-secondary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-secondary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On secondary</th>
      <td><code>--mdui-color-on-secondary-light</code></td>
      <td><code>255, 255, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-secondary-dark</code></td>
      <td><code>51, 45, 65</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-secondary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On secondary container</th>
      <td><code>--mdui-color-on-secondary-container-light</code></td>
      <td><code>30, 25, 43</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-secondary-container-dark</code></td>
      <td><code>232, 222, 248</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-secondary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-secondary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Tertiary</th>
      <td><code>--mdui-color-tertiary-light</code></td>
      <td><code>125, 82, 96</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-tertiary-dark</code></td>
      <td><code>239, 184, 200</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-tertiary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Tertiary container</th>
      <td><code>--mdui-color-tertiary-container-light</code></td>
      <td><code>255, 216, 228</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-tertiary-container-dark</code></td>
      <td><code>99, 59, 72</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-tertiary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-tertiary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On tertiary</th>
      <td><code>--mdui-color-on-tertiary-light</code></td>
      <td><code>255, 255, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-tertiary-dark</code></td>
      <td><code>73, 37, 50</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-tertiary</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On tertiary container</th>
      <td><code>--mdui-color-on-tertiary-container-light</code></td>
      <td><code>55, 11, 30</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-tertiary-container-dark</code></td>
      <td><code>255, 216, 228</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-tertiary-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-tertiary-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface</th>
      <td><code>--mdui-color-surface-light</code></td>
      <td><code>254, 247, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-dark</code></td>
      <td><code>20, 18, 24</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface dim</th>
      <td><code>--mdui-color-surface-dim-light</code></td>
      <td><code>222, 216, 225</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-dim-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-dim-dark</code></td>
      <td><code>20, 18, 24</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-dim-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-dim</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-dim))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface bright</th>
      <td><code>--mdui-color-surface-bright-light</code></td>
      <td><code>254, 247, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-bright-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-bright-dark</code></td>
      <td><code>59, 56, 62</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-bright-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-bright</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-bright))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface container lowest</th>
      <td><code>--mdui-color-surface-container-lowest-light</code></td>
      <td><code>255, 255, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-lowest-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-lowest-dark</code></td>
      <td><code>15, 13, 19</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-lowest-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-lowest</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-lowest))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface container low</th>
      <td><code>--mdui-color-surface-container-low-light</code></td>
      <td><code>247, 242, 250</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-low-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-low-dark</code></td>
      <td><code>29, 27, 32</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-low-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-low</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-low))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface container</th>
      <td><code>--mdui-color-surface-container-light</code></td>
      <td><code>243, 237, 247</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-dark</code></td>
      <td><code>33, 31, 38</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface container high</th>
      <td><code>--mdui-color-surface-container-high-light</code></td>
      <td><code>236, 230, 240</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-high-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-high-dark</code></td>
      <td><code>43, 41, 48</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-high-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-high</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-high))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface container highest</th>
      <td><code>--mdui-color-surface-container-highest-light</code></td>
      <td><code>230, 224, 233</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-highest-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-highest-dark</code></td>
      <td><code>54, 52, 59</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-highest-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-container-highest</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-container-highest))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface variant</th>
      <td><code>--mdui-color-surface-variant-light</code></td>
      <td><code>231, 224, 236</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-variant-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-variant-dark</code></td>
      <td><code>73, 69, 79</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-variant-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-variant</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-variant))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On surface</th>
      <td><code>--mdui-color-on-surface-light</code></td>
      <td><code>28, 27, 31</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-surface-dark</code></td>
      <td><code>230, 225, 229</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-surface</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On surface variant</th>
      <td><code>--mdui-color-on-surface-variant-light</code></td>
      <td><code>73, 69, 78</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface-variant-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-surface-variant-dark</code></td>
      <td><code>202, 196, 208</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface-variant-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-surface-variant</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-surface-variant))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Inverse surface</th>
      <td><code>--mdui-color-inverse-surface-light</code></td>
      <td><code>49, 48, 51</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-surface-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-surface-dark</code></td>
      <td><code>230, 225, 229</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-surface-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-surface</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-surface))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Inverse on surface</th>
      <td><code>--mdui-color-inverse-on-surface-light</code></td>
      <td><code>244, 239, 244</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-on-surface-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-on-surface-dark</code></td>
      <td><code>49, 48, 51</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-on-surface-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-inverse-on-surface</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-inverse-on-surface))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Background</th>
      <td><code>--mdui-color-background-light</code></td>
      <td><code>254, 247, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-background-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-background-dark</code></td>
      <td><code>20, 18, 24</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-background-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-background</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-background))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On background</th>
      <td><code>--mdui-color-on-background-light</code></td>
      <td><code>28, 27, 31</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-background-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-background-dark</code></td>
      <td><code>230, 225, 229</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-background-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-background</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-background))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Error</th>
      <td><code>--mdui-color-error-light</code></td>
      <td><code>179, 38, 30</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-error-dark</code></td>
      <td><code>242, 184, 181</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-error</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Error container</th>
      <td><code>--mdui-color-error-container-light</code></td>
      <td><code>249, 222, 220</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-error-container-dark</code></td>
      <td><code>140, 29, 24</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-error-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-error-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On error</th>
      <td><code>--mdui-color-on-error-light</code></td>
      <td><code>255, 255, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-error-dark</code></td>
      <td><code>96, 20, 16</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-error</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">On error container</th>
      <td><code>--mdui-color-on-error-container-light</code></td>
      <td><code>65, 14, 11</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error-container-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-error-container-dark</code></td>
      <td><code>249, 222, 220</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error-container-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-on-error-container</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-on-error-container))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Outline</th>
      <td><code>--mdui-color-outline-light</code></td>
      <td><code>121, 116, 126</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-outline-dark</code></td>
      <td><code>147, 143, 153</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-outline</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Outline variant</th>
      <td><code>--mdui-color-outline-variant-light</code></td>
      <td><code>196, 199, 197</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline-variant-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-outline-variant-dark</code></td>
      <td><code>68, 71, 70</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline-variant-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-outline-variant</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-outline-variant))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Shadow</th>
      <td><code>--mdui-color-shadow-light</code></td>
      <td><code>0, 0, 0</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-shadow-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-shadow-dark</code></td>
      <td><code>0, 0, 0</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-shadow-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-shadow</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-shadow))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Surface tint</th>
      <td><code>--mdui-color-surface-tint-color-light</code></td>
      <td><code>103, 80, 164</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-tint-color-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-tint-color-dark</code></td>
      <td><code>208, 188, 255</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-tint-color-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-surface-tint-color</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-surface-tint-color))"></div></td>
    </tr>
    <tr>
      <th rowspan="3">Scrim</th>
      <td><code>--mdui-color-scrim-light</code></td>
      <td><code>0, 0, 0</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-scrim-light))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-scrim-dark</code></td>
      <td><code>0, 0, 0</code></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-scrim-dark))"></div></td>
    </tr>
    <tr>
      <td><code>--mdui-color-scrim</code></td>
      <td></td>
      <td><div class="design-tokens-color" style="background-color:rgb(var(--mdui-color-scrim))"></div></td>
    </tr>
  </tbody>
</table>

<h2 id="shape-corner">
                  <a href="#shape-corner">圆角</a>
                </h2>
<p>mdui 提供了 7 种不同大小的圆角。以下是如何使用这些圆角的 CSS 自定义属性的示例：</p>
<pre><code class="language-css">/* 修改 extra-small 的圆角大小 */
:root {
  --mdui-shape-corner-extra-small: 0.3rem;
}

/* 把 foo 元素的圆角设置为 extra-small */
.foo {
  border-radius: var(--mdui-shape-corner-extra-small);
}
</code></pre>
<table>
<thead>
<tr>
<th>CSS 自定义属性</th>
<th>默认值</th>
<th>示例</th>
</tr>
</thead>
<tbody><tr>
<td><code>--mdui-shape-corner-none</code></td>
<td><code>0</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-none)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-extra-small</code></td>
<td><code>0.25rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-extra-small)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-small</code></td>
<td><code>0.5rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-small)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-medium</code></td>
<td><code>0.75rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-medium)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-large</code></td>
<td><code>1rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-large)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-extra-large</code></td>
<td><code>1.75rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-extra-large)"></div></td>
</tr>
<tr>
<td><code>--mdui-shape-corner-full</code></td>
<td><code>1000rem</code></td>
<td><div class="design-tokens-shape-corner" style="border-radius:var(--mdui-shape-corner-full)"></div></td>
</tr>
</tbody></table>
<h2 id="typescale">
                  <a href="#typescale">排版</a>
                </h2>
<p>mdui 提供了 15 种不同的文字样式，包括 Display large、Display medium、Display small、Headline large、Headline medium、Headline small、Title large、Title medium、Title small、Label large、Label medium、Label small、Body large、Body medium、Body small。</p>
<p>下面是使用示例：</p>
<pre><code class="language-css">/* 修改 Body large 的文字样式 */
:root {
  --mdui-typescale-body-large-line-height: 1.6rem;
  --mdui-typescale-body-large-size: 1.2rem;
  --mdui-typescale-body-large-tracking: 0.01rem;
  --mdui-typescale-body-large-weight: 400;
}

/* 把 foo 元素的文字样式设置为 Body large */
.foo {
  line-height: var(--mdui-typescale-body-large-line-height);
  font-size: var(--mdui-typescale-body-large-size);
  letter-spacing: var(--mdui-typescale-body-large-tracking);
  font-weight: var(--mdui-typescale-body-large-weight);
}
</code></pre>
<table>
  <thead>
    <tr>
      <th>CSS 自定义属性</th>
      <th>默认值</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--mdui-typescale-display-large-line-height</code></td>
      <td><code>4rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-display-large">Display large</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-large-size</code></td>
      <td><code>3.5625rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-large-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-large-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-medium-line-height</code></td>
      <td><code>3.25rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-display-medium">Display medium</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-medium-size</code></td>
      <td><code>2.8125rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-medium-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-medium-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-small-line-height</code></td>
      <td><code>2.75rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-display-small">Display small</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-small-size</code></td>
      <td><code>2.25rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-small-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-display-small-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-large-line-height</code></td>
      <td><code>2.5rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-headline-large">Headline large</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-large-size</code></td>
      <td><code>2rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-large-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-large-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-medium-line-height</code></td>
      <td><code>2.25rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-headline-medium">Headline medium</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-medium-size</code></td>
      <td><code>1.75rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-medium-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-medium-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-small-line-height</code></td>
      <td><code>2rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-headline-small">Headline small</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-small-size</code></td>
      <td><code>1.5rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-small-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-headline-small-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-large-line-height</code></td>
      <td><code>1.75rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-title-large">Title large</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-large-size</code></td>
      <td><code>1.375rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-large-tracking</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-large-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-medium-line-height</code></td>
      <td><code>1.5rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-title-medium">Title medium</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-medium-size</code></td>
      <td><code>1rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-medium-tracking</code></td>
      <td><code>0.009375rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-medium-weight</code></td>
      <td><code>500</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-small-line-height</code></td>
      <td><code>1.25rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-title-small">Title small</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-small-size</code></td>
      <td><code>0.875rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-small-tracking</code></td>
      <td><code>0.00625rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-title-small-weight</code></td>
      <td><code>500</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-large-line-height</code></td>
      <td><code>1.25rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-label-large">Label large</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-large-size</code></td>
      <td><code>0.875rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-large-tracking</code></td>
      <td><code>0.00625rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-large-weight</code></td>
      <td><code>500</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-medium-line-height</code></td>
      <td><code>1rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-label-medium">Label medium</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-medium-size</code></td>
      <td><code>0.75rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-medium-tracking</code></td>
      <td><code>0.03125rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-medium-weight</code></td>
      <td><code>500</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-small-line-height</code></td>
      <td><code>0.375rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-label-small">Label small</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-small-size</code></td>
      <td><code>0.6875rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-small-tracking</code></td>
      <td><code>0.03125rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-label-small-weight</code></td>
      <td><code>500</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-large-line-height</code></td>
      <td><code>1.5rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-body-large">Body large</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-large-size</code></td>
      <td><code>1rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-large-tracking</code></td>
      <td><code>0.009375rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-large-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-medium-line-height</code></td>
      <td><code>1.25rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-body-medium">Body medium</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-medium-size</code></td>
      <td><code>0.875rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-medium-tracking</code></td>
      <td><code>0.015625rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-medium-weight</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-small-line-height</code></td>
      <td><code>1rem</code></td>
      <th rowspan="4"><div class="design-tokens-typescale-body-small">Body small</div></th>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-small-size</code></td>
      <td><code>0.75rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-small-tracking</code></td>
      <td><code>0.025rem</code></td>
    </tr>
    <tr>
      <td><code>--mdui-typescale-body-small-weight</code></td>
      <td><code>400</code></td>
    </tr>
  </tbody>
</table>

<h2 id="state-layer">
                  <a href="#state-layer">状态层不透明度</a>
                </h2>
<p>部分 mdui 组件在交互时会在其上添加一层半透明遮罩。例如 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> 组件，在鼠标悬浮、聚焦、按下或拖动时，都会出现半透明遮罩。你可以通过修改 CSS 自定义属性来调整这些遮罩的不透明度。</p>
<p>下面是使用示例：</p>
<pre><code class="language-css">/* 修改状态层不透明度 */
:root {
  --mdui-state-layer-hover: 0.08;
  --mdui-state-layer-focus: 0.12;
  --mdui-state-layer-pressed: 0.12;
  --mdui-state-layer-dragged: 0.16;
}
</code></pre>
<table>
<thead>
<tr>
<th>CSS 自定义属性</th>
<th>默认值</th>
<th>示例</th>
</tr>
</thead>
<tbody><tr>
<td><code>--mdui-state-layer-hover</code></td>
<td><code>0.08</code></td>
<td><div class="design-tokens-state-layer" style="background-color:rgba(var(--mdui-color-primary), 0.08)"></div></td>
</tr>
<tr>
<td><code>--mdui-state-layer-focus</code></td>
<td><code>0.12</code></td>
<td><div class="design-tokens-state-layer" style="background-color:rgba(var(--mdui-color-primary), 0.12)"></div></td>
</tr>
<tr>
<td><code>--mdui-state-layer-pressed</code></td>
<td><code>0.12</code></td>
<td><div class="design-tokens-state-layer" style="background-color:rgba(var(--mdui-color-primary), 0.12)"></div></td>
</tr>
<tr>
<td><code>--mdui-state-layer-dragged</code></td>
<td><code>0.16</code></td>
<td><div class="design-tokens-state-layer" style="background-color:rgba(var(--mdui-color-primary), 0.16)"></div></td>
</tr>
</tbody></table>
<h2 id="elevation">
                  <a href="#elevation">抬升高度（阴影）</a>
                </h2>
<p>部分 mdui 组件具有阴影效果，以模拟组件在页面上的抬升感。你可以通过修改 CSS 自定义属性来调整组件的阴影效果。</p>
<p>下面是使用示例：</p>
<pre><code class="language-css">/* 修改 level1 级别的阴影 */
:root {
  --mdui-elevation-level1: 0 0.5px 1.5px 0 rgba(var(--mdui-color-shadow), 19%), 0 0 1px 0 rgba(var(--mdui-color-shadow), 3.9%);
}

/* 把 foo 元素的阴影设置为 level1 */
.foo {
  box-shadow: var(--mdui-elevation-level1);
}
</code></pre>
<table>
<thead>
<tr>
<th>CSS 自定义属性</th>
<th>默认值</th>
<th>示例</th>
</tr>
</thead>
<tbody><tr>
<td><code>--mdui-elevation-level0</code></td>
<td><code>none</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level0)"></div></td>
</tr>
<tr>
<td><code>--mdui-elevation-level1</code></td>
<td><code>0 0.5px 1.5px 0 rgba(var(--mdui-color-shadow), 19%), 0 0 1px 0 rgba(var(--mdui-color-shadow), 3.9%)</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level1)"></div></td>
</tr>
<tr>
<td><code>--mdui-elevation-level2</code></td>
<td><code>0 0.85px 3px 0 rgba(var(--mdui-color-shadow), 19%), 0 0.25px 1px 0 rgba(var(--mdui-color-shadow), 3.9%)</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level2)"></div></td>
</tr>
<tr>
<td><code>--mdui-elevation-level3</code></td>
<td><code>0 1.25px 5px 0 rgba(var(--mdui-color-shadow), 19%), 0 0.3333px 1.5px 0 rgba(var(--mdui-color-shadow), 3.9%)</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level3)"></div></td>
</tr>
<tr>
<td><code>--mdui-elevation-level4</code></td>
<td><code>0 1.85px 6.25px 0 rgba(var(--mdui-color-shadow), 19%), 0 0.5px 1.75px 0 rgba(var(--mdui-color-shadow), 3.9%)</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level4)"></div></td>
</tr>
<tr>
<td><code>--mdui-elevation-level5</code></td>
<td><code>0 2.75px 9px 0 rgba(var(--mdui-color-shadow), 19%), 0 0.25px 3px 0 rgba(var(--mdui-color-shadow), 3.9%)</code></td>
<td><div class="design-tokens-elevation" style="box-shadow: var(--mdui-elevation-level5)"></div></td>
</tr>
</tbody></table>
<h2 id="motion">
                  <a href="#motion">动画</a>
                </h2>
<p>mdui 组件中的动画缓动曲线和持续时间可以通过 CSS 自定义属性进行配置。</p>
<p>下面是使用示例：</p>
<pre><code class="language-css">/* 修改 standard 的缓动曲线、及 short1 的持续时间 */
:root {
  --mdui-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --mdui-motion-duration-short1: 40ms;
}

/* 设置 foo 元素的过渡效果使用 standard 的缓动曲线、及 short1 的持续时间 */
.foo {
  transition: all var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard);
}
</code></pre>
<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>CSS 自定义属性</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="7">缓动曲线</th>
      <td><code>--mdui-motion-easing-linear</code></td>
      <td><code>cubic-bezier(0, 0, 1, 1)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-standard</code></td>
      <td><code>cubic-bezier(0.2, 0, 0, 1)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-standard-accelerate</code></td>
      <td><code>cubic-bezier(0.3, 0, 1, 1)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-standard-decelerate</code></td>
      <td><code>cubic-bezier(0, 0, 0, 1)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-emphasized</code></td>
      <td><code>var(--mdui-motion-easing-standard)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-emphasized-accelerate</code></td>
      <td><code>cubic-bezier(0.3, 0, 0.8, 0.15)</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-easing-emphasized-decelerate</code></td>
      <td><code>cubic-bezier(0.05, 0.7, 0.1, 1)</code></td>
    </tr>
    <tr>
      <th rowspan="16">持续时间</th>
      <td><code>--mdui-motion-duration-short1</code></td>
      <td><code>50ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-short2</code></td>
      <td><code>100ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-short3</code></td>
      <td><code>150ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-short4</code></td>
      <td><code>200ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-medium1</code></td>
      <td><code>250ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-medium2</code></td>
      <td><code>300ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-medium3</code></td>
      <td><code>350ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-medium4</code></td>
      <td><code>400ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-long1</code></td>
      <td><code>450ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-long2</code></td>
      <td><code>500ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-long3</code></td>
      <td><code>550ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-long4</code></td>
      <td><code>600ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-extra-long1</code></td>
      <td><code>700ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-extra-long2</code></td>
      <td><code>800ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-extra-long3</code></td>
      <td><code>900ms</code></td>
    </tr>
    <tr>
      <td><code>--mdui-motion-duration-extra-long4</code></td>
      <td><code>1000ms</code></td>
    </tr>
  </tbody>
</table>

<h2 id="breakpoint">
                  <a href="#breakpoint">响应式断点</a>
                </h2>
<p>mdui 提供了一系列的响应式断点，这些断点可以通过 CSS 自定义属性进行配置。下面是使用示例：</p>
<pre><code class="language-css">/* 修改 sm 的断点值 */
:root {
  --mdui-breakpoint-sm: 560px;
}
</code></pre>
<p>需要注意的是，这些 CSS 自定义属性不能在 CSS 媒体查询中使用。以下是一个错误的示例：</p>
<pre><code class="language-css">/* 错误用法。媒体查询中无法使用 CSS 自定义属性 */
@media (min-width: var(--mdui-breakpoint-sm)) {

}
</code></pre>
<p>如果你需要在 JavaScript 中进行断点判断，可以使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/breakpoint"><code>breakpoint</code></a> 函数。</p>
<table>
<thead>
<tr>
<th>CSS 自定义属性</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td><code>--mdui-breakpoint-xs</code></td>
<td><code>0px</code></td>
</tr>
<tr>
<td><code>--mdui-breakpoint-sm</code></td>
<td><code>600px</code></td>
</tr>
<tr>
<td><code>--mdui-breakpoint-md</code></td>
<td><code>840px</code></td>
</tr>
<tr>
<td><code>--mdui-breakpoint-lg</code></td>
<td><code>1080px</code></td>
</tr>
<tr>
<td><code>--mdui-breakpoint-xl</code></td>
<td><code>1440px</code></td>
</tr>
<tr>
<td><code>--mdui-breakpoint-xxl</code></td>
<td><code>1920px</code></td>
</tr>
</tbody></table>
`,elements:[]};export{d as default};
