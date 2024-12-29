const t={docsHtml:`<p>布局组件提供了一个灵活的布局系统，用于创建复杂的页面布局。</p>
<style>
.example-top-app-bar {
  background-color: rgb(var(--mdui-color-surface-container));
}

.example-navigation-drawer::part(panel) {
  background-color: rgb(var(--mdui-color-surface-container-low));
}

.example-layout-item {
  background-color: rgb(var(--mdui-color-surface-container-low));
}

.example-layout-main {
  background-color: rgb(var(--mdui-color-surface-container-lowest));
}

@media (min-width: 840px) {
  .example-md-visible {
    display: none;
  }
}
</style>

<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/layout.js&#39;;
import &#39;mdui/components/layout-item.js&#39;;
import &#39;mdui/components/layout-main.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Layout } from &#39;mdui/components/layout.js&#39;;
import type { LayoutItem } from &#39;mdui/components/layout-item.js&#39;;
import type { LayoutMain } from &#39;mdui/components/layout-main.js&#39;;
</code></pre>
<p><strong>介绍：</strong></p>
<p>布局系统遵循从外向内的原则构建，每个布局组件（<code>&lt;mdui-layout-item&gt;</code> 组件）都会在四个方向（上、下、左、右）之一的位置占据空间，随后的布局组件会在剩余空间中继续占据空间。</p>
<p>以下组件直接继承自 <code>&lt;mdui-layout-item&gt;</code> 组件，因此也可以作为布局组件使用：</p>
<ul>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-bar"><code>&lt;mdui-navigation-bar&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/bottom-app-bar"><code>&lt;mdui-bottom-app-bar&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a></li>
</ul>
<p>布局系统的最后一部分是 <code>&lt;mdui-layout-main&gt;</code> 组件，它会占据剩余空间，你可以在该组件内放置页面内容。</p>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="layout-default-order">
                  <a href="#layout-default-order">布局组件顺序</a>
                </h3>
<p>默认情况下，布局组件会按照在代码中出现的顺序来占据空间。你可以从下面两个示例来理解这个概念，这两个示例中，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> 和 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> 在代码中出现的顺序不同。</p>
<p class="example-md-visible">请在大屏显示器上查看该示例。</p>

<pre><code class="language-html,example,expandable">&lt;mdui-layout&gt;
  &lt;mdui-top-app-bar class=&quot;example-top-app-bar&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Top App Bar&lt;/mdui-top-app-bar-title&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;mdui-navigation-drawer open class=&quot;example-navigation-drawer&quot;&gt;
    &lt;mdui-list&gt;
      &lt;mdui-list-item&gt;Navigation drawer&lt;/mdui-list-item&gt;
    &lt;/mdui-list&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;mdui-layout-main class=&quot;example-layout-main&quot; style=&quot;min-height: 300px&quot;&gt;Main&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
<pre><code class="language-html,example,expandable">&lt;mdui-layout&gt;
  &lt;mdui-navigation-drawer open class=&quot;example-navigation-drawer&quot;&gt;
    &lt;mdui-list&gt;
      &lt;mdui-list-item&gt;Navigation drawer&lt;/mdui-list-item&gt;
    &lt;/mdui-list&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;mdui-top-app-bar class=&quot;example-top-app-bar&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Top App Bar&lt;/mdui-top-app-bar-title&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;mdui-layout-main class=&quot;example-layout-main&quot; style=&quot;min-height: 300px&quot;&gt;Main&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
<p>可以发现，将 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> 放在 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> 之前时，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> 会率先占满屏幕的宽度，而 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> 只能在剩余的空间内占满高度。调换二者顺序后，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> 会率先占满屏幕的高度，而 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> 只能在剩余的空间内占满宽度。</p>
<h3 id="example-placement">
                  <a href="#example-placement">布局组件位置</a>
                </h3>
<p>对于 <code>&lt;mdui-layout-item&gt;</code> 组件，你可以使用 <code>placement</code> 属性来指定其在布局中的上、下、左、右位置。 对于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> 和 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a> 组件，你也可以使用 <code>placement</code> 属性来指定其在布局中的左、右位置。</p>
<p>下面的示例中，我们将两个 <code>&lt;mdui-layout-item&gt;</code> 组件放在了应用的两侧。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-layout&gt;
  &lt;mdui-top-app-bar class=&quot;example-top-app-bar&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Top App Bar&lt;/mdui-top-app-bar-title&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;mdui-layout-item
    placement=&quot;left&quot;
    class=&quot;example-layout-item&quot;
    style=&quot;width: 100px&quot;
  &gt;Layout Item&lt;/mdui-layout-item&gt;

  &lt;mdui-layout-item
    placement=&quot;right&quot;
    class=&quot;example-layout-item&quot;
    style=&quot;width: 100px&quot;
  &gt;Layout Item&lt;/mdui-layout-item&gt;

  &lt;mdui-layout-main class=&quot;example-layout-main&quot; style=&quot;min-height: 300px&quot;&gt;Main&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
<h3 id="example-order">
                  <a href="#example-order">自定义布局组件顺序</a>
                </h3>
<p>在大多数情况下，只要按顺序放置布局组件就能实现你想要的布局。</p>
<p>你也可以使用 <code>order</code> 属性来指定布局顺序，系统将按 <code>order</code> 的值从小到大排列组件，<code>order</code> 相同时则按代码顺序排列。所有布局组件的默认 <code>order</code> 都为 <code>0</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-layout class=&quot;example-order&quot;&gt;
  &lt;mdui-layout-item
    placement=&quot;left&quot;
    class=&quot;example-layout-item&quot;
    style=&quot;width: 100px&quot;
  &gt;Layout Item&lt;/mdui-layout-item&gt;

  &lt;mdui-top-app-bar class=&quot;example-top-app-bar&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Top App Bar&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-checkbox&gt;order=&quot;-1&quot;&lt;/mdui-checkbox&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;mdui-layout-main class=&quot;example-layout-main&quot; style=&quot;min-height: 300px&quot;&gt;Main&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;

&lt;script&gt;
  const topAppBar = document.querySelector(&quot;.example-order mdui-top-app-bar&quot;);
  const checkbox = document.querySelector(&quot;.example-order mdui-checkbox&quot;);

  checkbox.addEventListener(&quot;change&quot;, (event) =&gt; {
    topAppBar.order = event.target.checked ? -1 : 0;
  });
&lt;/script&gt;
</code></pre>
`,elements:[{name:"LayoutItem",tagName:"mdui-layout-item",summary:`<p>布局项组件</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>组件的位置。可选值包括：</p>
<ul>
<li><code>top</code>：上方</li>
<li><code>bottom</code>：下方</li>
<li><code>left</code>：左侧</li>
<li><code>right</code>：右侧</li>
</ul>
`,type:"'top' | 'bottom' | 'left' | 'right'",enum:["'top'","'bottom'","'left'","'right'"],default:"'top'"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>可以包含任意内容</p>
`}],cssParts:[],cssProperties:[]},{name:"LayoutMain",tagName:"mdui-layout-main",summary:`<p>布局主体内容组件</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>可以包含任意内容</p>
`}],cssParts:[],cssProperties:[]},{name:"Layout",tagName:"mdui-layout",summary:`<p>布局组件</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[{attributeName:"full-height",propertyName:"fullHeight",reflect:!0,description:`<p>设置当前布局的高度为 100%</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[],slots:[{name:"",description:`<p>可以包含 <a href="https://cdn.w3cbus.com/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/bottom-app-bar"><code>&lt;mdui-bottom-app-bar&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/navigation-bar"><code>&lt;mdui-navigation-bar&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a>、<code>&lt;mdui-layout-item&gt;</code>、<code>&lt;mdui-layout-main&gt;</code> 元素</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
