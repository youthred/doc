const t={docsHtml:`<p>Layout components provide a flexible system for page-level layout.</p>
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
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/layout.js&#39;;
import &#39;mdui/components/layout-item.js&#39;;
import &#39;mdui/components/layout-main.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Layout } from &#39;mdui/components/layout.js&#39;;
import type { LayoutItem } from &#39;mdui/components/layout-item.js&#39;;
import type { LayoutMain } from &#39;mdui/components/layout-main.js&#39;;
</code></pre>
<p><strong>Introduction:</strong></p>
<p>The layout system is built from the outside in. Each layout component (<code>&lt;mdui-layout-item&gt;</code>) occupies space in one of the four directions (top, bottom, left, right). Subsequent layout components continue to occupy the remaining space.</p>
<p>The following components inherit from <code>&lt;mdui-layout-item&gt;</code> and can also be used as layout components:</p>
<ul>
<li><a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-bar"><code>&lt;mdui-navigation-bar&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/components/bottom-app-bar"><code>&lt;mdui-bottom-app-bar&gt;</code></a></li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a></li>
</ul>
<p>The <code>&lt;mdui-layout-main&gt;</code> component occupies the remaining space, where you can place page content.</p>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="layout-default-order">
                  <a href="#layout-default-order">Layout Component Order</a>
                </h3>
<p>By default, layout components occupy space in the order they appear in the code. The following examples illustrate this concept, showing different orders for <a href="https://cdn.w3cbus.com/en/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> and <a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a>.</p>
<p class="example-md-visible">View this example on a large screen.</p>

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
<p>When <a href="https://cdn.w3cbus.com/en/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a> is placed before <a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a>, it occupies the full screen width first, leaving only the remaining height for <code>&lt;mdui-navigation-drawer&gt;</code>. If their positions are swapped, <a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> occupies the full screen height first, leaving only the remaining width for <a href="https://cdn.w3cbus.com/en/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a>.</p>
<h3 id="example-placement">
                  <a href="#example-placement">Layout Component Placement</a>
                </h3>
<p>Use the <code>placement</code> attribute to specify the position (top, bottom, left, or right) of the <code>&lt;mdui-layout-item&gt;</code> component in the layout. For <a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a> and <a href="https://cdn.w3cbus.com/en/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a>, the <code>placement</code> attribute specifies their left or right position.</p>
<p>In the following example, two <code>&lt;mdui-layout-item&gt;</code> components are placed on both sides of the application.</p>
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
                  <a href="#example-order">Custom Layout Component Order</a>
                </h3>
<p>In most cases, the order of layout components in the code will achieve the desired layout.</p>
<p>However, you can use the <code>order</code> attribute to specify the layout order. The system arranges the components in ascending order of <code>order</code> value. When <code>order</code> values are the same, it arranges them in the order they appear in the code. The default <code>order</code> for all layout components is <code>0</code>.</p>
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
`,elements:[{name:"LayoutItem",tagName:"mdui-layout-item",summary:`<p>Layout Item Component.</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Determines the component&#39;s position. Possible values:</p>
<ul>
<li><code>top</code>: Positions the component at the top.</li>
<li><code>bottom</code>: Positions the component at the bottom.</li>
<li><code>left</code>: Positions the component on the left.</li>
<li><code>right</code>: Positions the component on the right.</li>
</ul>
`,type:"'top' | 'bottom' | 'left' | 'right'",enum:["'top'","'bottom'","'left'","'right'"],default:"'top'"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>Can contains any content.</p>
`}],cssParts:[],cssProperties:[]},{name:"LayoutMain",tagName:"mdui-layout-main",summary:`<p>Layout Main Component.</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>Can contains any content.</p>
`}],cssParts:[],cssProperties:[]},{name:"Layout",tagName:"mdui-layout",summary:`<p>Layout Component.</p>
<pre><code class="language-html">&lt;mdui-layout&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-item&gt;&lt;/mdui-layout-item&gt;
..&lt;mdui-layout-main&gt;&lt;/mdui-layout-main&gt;
&lt;/mdui-layout&gt;
</code></pre>
`,attributes:[{attributeName:"full-height",propertyName:"fullHeight",reflect:!0,description:`<p>Sets the layout height to 100%.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[],slots:[{name:"",description:`<p>Can contain elements such as <a href="https://cdn.w3cbus.com/docs/2/components/top-app-bar"><code>&lt;mdui-top-app-bar&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/bottom-app-bar"><code>&lt;mdui-bottom-app-bar&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/navigation-bar"><code>&lt;mdui-navigation-bar&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/navigation-drawer"><code>&lt;mdui-navigation-drawer&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/navigation-rail"><code>&lt;mdui-navigation-rail&gt;</code></a>, <code>&lt;mdui-layout-item&gt;</code>, and <code>&lt;mdui-layout-main&gt;</code>.</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
