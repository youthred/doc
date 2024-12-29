const e={docsHtml:`<p>侧边抽屉栏用于在页面侧边提供导航功能，使用户能够快速访问不同的页面或内容。</p>
<p>通常，可以在侧边抽屉栏中使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/list"><code>&lt;mdui-list&gt;</code></a> 组件来添加导航项。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-drawer.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { NavigationDrawer } from &#39;mdui/components/navigation-drawer.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-navigation-drawer close-on-overlay-click class=&quot;example-drawer&quot;&gt;
  &lt;mdui-button&gt;关闭侧边抽屉栏&lt;/mdui-button&gt;
&lt;/mdui-navigation-drawer&gt;

&lt;mdui-button&gt;打开侧边抽屉栏&lt;/mdui-button&gt;

&lt;script&gt;
  const navigationDrawer = document.querySelector(&quot;.example-drawer&quot;);
  const openButton = navigationDrawer.nextElementSibling;
  const closeButton = navigationDrawer.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<p><strong>注意事项：</strong></p>
<p>该组件默认使用 <code>position: fixed</code> 定位。</p>
<p>当 <code>modal</code> 属性为 <code>false</code>，且断点大于等于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a> 时，会自动在 <code>body</code> 上添加 <code>padding-left</code> 或 <code>padding-right</code> 样式，以避免页面内容被该组件遮挡。</p>
<p>但在以下两种情况下，会默认使用 <code>position: absolute</code> 定位：</p>
<ol>
<li><code>contained</code> 属性为 <code>true</code> 时。</li>
<li>当组件位于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> 中时。此时不会添加 <code>padding-left</code> 或 <code>padding-right</code> 样式。</li>
</ol>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-contained">
                  <a href="#example-contained">位于指定容器内</a>
                </h3>
<p>默认情况下，侧边抽屉栏会相对于当前窗口，在页面左侧或右侧显示。如果你希望把侧边抽屉栏放在指定容器内，可以添加 <code>contained</code> 属性，此时侧边抽屉栏会相对于父元素显示（你需要自行在父元素上添加样式 <code>position: relative; overflow: hidden;</code>）。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-contained&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;关闭侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;打开侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-contained&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-modal">
                  <a href="#example-modal">模态化</a>
                </h3>
<p>添加 <code>modal</code> 属性可以在打开侧边抽屉栏时显示遮罩层。注意在窗口或父元素宽度小于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a> 时，会无视该参数，始终会显示遮罩层。</p>
<p>添加 <code>close-on-esc</code> 属性，可以在按下 ESC 键时关闭侧边抽屉栏。</p>
<p>添加 <code>close-on-overlay-click</code> 属性，可以在点击遮罩层时关闭侧边抽屉栏。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-modal&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer modal close-on-esc close-on-overlay-click contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;关闭侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;打开侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-modal&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">位于右侧</a>
                </h3>
<p>通过将 <code>placement</code> 属性设置为 <code>right</code>，可以将侧边抽屉栏显示在页面右侧。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer placement=&quot;right&quot; modal close-on-esc close-on-overlay-click contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;关闭侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;打开侧边抽屉栏&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-placement&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"NavigationDrawer",tagName:"mdui-navigation-drawer",summary:`<p>侧边抽屉栏组件</p>
<pre><code class="language-html">&lt;mdui-navigation-drawer&gt;content&lt;/mdui-navigation-drawer&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>是否打开抽屉栏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"modal",propertyName:"modal",reflect:!0,description:`<p>抽屉栏打开时，是否显示遮罩层</p>
<p>在窄屏设备上（屏幕宽度小于 <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a>），会始终显示遮罩层，无视该参数</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-esc",propertyName:"closeOnEsc",reflect:!0,description:`<p>在有遮罩层的情况下，按下 ESC 键是否关闭抽屉栏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-overlay-click",propertyName:"closeOnOverlayClick",reflect:!0,description:`<p>点击遮罩层时，是否关闭抽屉栏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>抽屉栏的位置。可选值包括：</p>
<ul>
<li><code>left</code>：左侧</li>
<li><code>right</code>：右侧</li>
</ul>
`,type:"'left' | 'right'",enum:["'left'","'right'"],default:"'left'"},{attributeName:"contained",propertyName:"contained",reflect:!0,description:`<p>默认情况下，抽屉栏相对于 <code>body</code> 元素显示。当该参数设置为 <code>true</code> 时，抽屉栏将相对于其父元素显示。</p>
<p><strong>Note</strong>：设置该属性时，必须在父元素上手动设置样式 <code>position: relative; overflow: hidden;</code>。</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[{name:"open",description:`<p>抽屉栏打开之前触发。可以通过调用 <code>event.preventDefault()</code> 阻止抽屉栏打开</p>
`},{name:"opened",description:`<p>抽屉栏打开动画完成之后触发</p>
`},{name:"close",description:`<p>抽屉栏关闭之前触发。可以通过调用 <code>event.preventDefault()</code> 阻止抽屉栏关闭</p>
`},{name:"closed",description:`<p>抽屉栏关闭动画完成之后触发</p>
`},{name:"overlay-click",description:`<p>点击遮罩层时触发</p>
`}],slots:[{name:"",description:`<p>抽屉栏中的内容</p>
`}],cssParts:[{name:"overlay",description:`<p>遮罩层</p>
`},{name:"panel",description:`<p>抽屉栏容器</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{e as default};
