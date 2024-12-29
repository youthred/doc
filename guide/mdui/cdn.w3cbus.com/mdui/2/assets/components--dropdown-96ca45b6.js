const e={docsHtml:`<p>下拉组件用于在一个弹出的控件中展示特定内容，通常与菜单组件一起使用。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/dropdown.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Dropdown } from &#39;mdui/components/dropdown.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-dropdown&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>添加 <code>disabled</code> 属性可以禁用下拉组件。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown disabled&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">打开位置</a>
                </h3>
<p>使用 <code>placement</code> 属性可以设置下拉组件的打开位置。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown placement=&quot;right-start&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">触发方式</a>
                </h3>
<p>使用 <code>trigger</code> 属性可以设置下拉组件的触发方式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;hover&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-open-on-pointer">
                  <a href="#example-open-on-pointer">在光标处打开</a>
                </h3>
<p>添加 <code>open-on-pointer</code> 属性可以在光标处打开下拉组件。通常与 <code>trigger=&quot;contextmenu&quot;</code> 配合使用，实现用鼠标右键打开菜单。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;contextmenu&quot; open-on-pointer&gt;
  &lt;mdui-card slot=&quot;trigger&quot; style=&quot;width:100%;height: 80px&quot;&gt;在此区域使用鼠标右键打开菜单&lt;/mdui-card&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-stay-open-on-click">
                  <a href="#example-stay-open-on-click">保持菜单打开状态</a>
                </h3>
<p>在下拉组件中使用菜单时，默认点击菜单项后，会自动关闭下拉组件。通过添加 <code>stay-open-on-click</code> 属性，可以在点击菜单项时，保持下拉组件的打开状态。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;click&quot; stay-open-on-click&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-delay">
                  <a href="#example-delay">打开/关闭的延时</a>
                </h3>
<p>在设置了 <code>trigger=&quot;hover&quot;</code> 时，可以通过 <code>open-delay</code>、<code>close-delay</code> 属性设置打开和关闭的延时。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;hover&quot; open-delay=&quot;1000&quot; close-delay=&quot;1000&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
`,elements:[{name:"Dropdown",tagName:"mdui-dropdown",summary:`<p>下拉组件</p>
<pre><code class="language-html">&lt;mdui-dropdown&gt;
..&lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
..&lt;mdui-menu&gt;
....&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
....&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
..&lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>是否打开下拉组件</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用下拉组件</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"trigger",propertyName:"trigger",reflect:!0,description:`<p>下拉组件的触发方式，支持多个值，用空格分隔。可选值包括：</p>
<ul>
<li><code>click</code>：点击触发</li>
<li><code>hover</code>：鼠标悬浮触发</li>
<li><code>focus</code>：聚焦触发</li>
<li><code>contextmenu</code>：鼠标右键点击、或触摸长按触发</li>
<li><code>manual</code>：仅能通过编程方式打开和关闭下拉组件，不能再指定其他触发方式</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'contextmenu' | 'manual' | string",enum:["'click'","'hover'","'focus'","'contextmenu'","'manual'","string"],default:"'click'"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>下拉组件内容的位置。可选值包括：</p>
<ul>
<li><code>auto</code>：自动判断位置</li>
<li><code>top-start</code>：上方左对齐</li>
<li><code>top</code>：上方居中</li>
<li><code>top-end</code>：上方右对齐</li>
<li><code>bottom-start</code>：下方左对齐</li>
<li><code>bottom</code>：下方居中</li>
<li><code>bottom-end</code>：下方右对齐</li>
<li><code>left-start</code>：左侧顶部对齐</li>
<li><code>left</code>：左侧居中</li>
<li><code>left-end</code>：左侧底部对齐</li>
<li><code>right-start</code>：右侧顶部对齐</li>
<li><code>right</code>：右侧居中</li>
<li><code>right-end</code>：右侧底部对齐</li>
</ul>
`,type:"'auto' | 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'auto'","'top-start'","'top'","'top-end'","'bottom-start'","'bottom'","'bottom-end'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'auto'"},{attributeName:"stay-open-on-click",propertyName:"stayOpenOnClick",reflect:!0,description:`<p>点击 <a href="https://cdn.w3cbus.com/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a> 后，下拉组件是否保持打开状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"open-delay",propertyName:"openDelay",reflect:!0,description:`<p>鼠标悬浮触发下拉组件打开的延时，单位为毫秒</p>
`,type:"number",enum:[],default:"150"},{attributeName:"close-delay",propertyName:"closeDelay",reflect:!0,description:`<p>鼠标悬浮触发下拉组件关闭的延时，单位为毫秒</p>
`,type:"number",enum:[],default:"150"},{attributeName:"open-on-pointer",propertyName:"openOnPointer",reflect:!0,description:`<p>是否在触发下拉组件的光标位置打开下拉组件，常用于打开鼠标右键菜单</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>下拉组件开始打开时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止下拉组件打开</p>
`},{name:"opened",description:`<p>下拉组件打开动画完成时，事件被触发</p>
`},{name:"close",description:`<p>下拉组件开始关闭时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止下拉组件关闭</p>
`},{name:"closed",description:`<p>下拉组件关闭动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>下拉组件的内容</p>
`},{name:"trigger",description:`<p>触发下拉组件的元素，例如 <a href="https://cdn.w3cbus.com/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> 元素</p>
`}],cssParts:[{name:"trigger",description:`<p>触发下拉组件的元素的容器，即 <code>trigger</code> slot 的容器</p>
`},{name:"panel",description:`<p>下拉组件内容的容器</p>
`}],cssProperties:[{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{e as default};
