const t={docsHtml:`<p>图标用于表示常见的操作。它支持 Material Icons 图标，也支持使用 SVG 图标。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/icon.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Icon } from &#39;mdui/components/icon.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-icon name=&quot;search&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<h3 id="usage-material-icons">
                  <a href="#usage-material-icons">使用 Material Icons 图标</a>
                </h3>
<p>如果需要通过该组件使用 Material Icons 图标，你需要单独导入 Material Icons 的 CSS 文件。Material Icons 共有 5 种变体，分别为：Filled、Outlined、Rounded、Sharp、Two Tone，请根据你要使用的图标变体，导入对应的 CSS 文件：</p>
<pre><code class="language-html">&lt;!-- Filled --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons&quot; rel=&quot;stylesheet&quot;&gt;

&lt;!-- Outlined --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons+Outlined&quot; rel=&quot;stylesheet&quot;&gt;

&lt;!-- Rounded --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons+Round&quot; rel=&quot;stylesheet&quot;&gt;

&lt;!-- Sharp --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons+Sharp&quot; rel=&quot;stylesheet&quot;&gt;

&lt;!-- Two Tone --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone&quot; rel=&quot;stylesheet&quot;&gt;
</code></pre>
<p>使用组件时，在 <code>name</code> 属性中传入图标名称，并以图标变体名称为后缀（Filled 变体无需添加后缀），下面是 <code>delete</code> 图标的 5 种变体的使用方式：</p>
<pre><code class="language-html,example">&lt;!-- Filled --&gt;
&lt;mdui-icon name=&quot;delete&quot;&gt;&lt;/mdui-icon&gt;

&lt;!-- Outlined --&gt;
&lt;mdui-icon name=&quot;delete--outlined&quot;&gt;&lt;/mdui-icon&gt;

&lt;!-- Rounded --&gt;
&lt;mdui-icon name=&quot;delete--rounded&quot;&gt;&lt;/mdui-icon&gt;

&lt;!-- Sharp --&gt;
&lt;mdui-icon name=&quot;delete--sharp&quot;&gt;&lt;/mdui-icon&gt;

&lt;!-- Two Tone --&gt;
&lt;mdui-icon name=&quot;delete--two-tone&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<p>你可以直接在页面下方的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/icon#search">Material Icons 图标搜索</a> 工具中搜索图标，然后点击需要使用的图标，就会自动将图标代码复制到剪贴板。</p>
<p>另外，mdui 还提供了一个独立的包 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/libraries/icons"><code>@mdui/icons</code></a>，这个包里每一个图标组件都是一个独立的文件，使你可以按需导入需要的图标组件，而无需导入整个图标库。</p>
<h3 id="usage-svg">
                  <a href="#usage-svg">使用 SVG 图标</a>
                </h3>
<p>该组件也支持使用 SVG 图标作为图标内容。可通过组件的 <code>src</code> 属性传入 SVG 图标的链接。例如：</p>
<pre><code class="language-html,example">&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<p>也可以在组件的 default slot 中传入 SVG 的内容。例如：</p>
<pre><code class="language-html,example">&lt;mdui-icon&gt;
  &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;&gt;
    &lt;path d=&quot;M0 0h24v24H0z&quot; fill=&quot;none&quot;/&gt;
    &lt;path d=&quot;M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z&quot;/&gt;
  &lt;/svg&gt;
&lt;/mdui-icon&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-color">
                  <a href="#example-color">设置颜色</a>
                </h3>
<p>设置 <code>&lt;mdui-icon&gt;</code> 元素或父元素的 <code>color</code> CSS 样式修改图标颜色。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-icon name=&quot;delete&quot; style=&quot;color: red&quot;&gt;&lt;/mdui-icon&gt;
&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot; style=&quot;color: red&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<h3 id="example-size">
                  <a href="#example-size">设置大小</a>
                </h3>
<p>设置 <code>&lt;mdui-icon&gt;</code> 元素或父元素的 <code>font-size</code> CSS 样式修改图标大小。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-icon name=&quot;delete&quot; style=&quot;font-size: 32px&quot;&gt;&lt;/mdui-icon&gt;
&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot; style=&quot;font-size: 32px&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
`,elements:[{name:"Icon",tagName:"mdui-icon",summary:`<p>图标组件</p>
<pre><code class="language-html">&lt;mdui-icon name=&quot;search&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
`,attributes:[{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>Material Icons 图标名</p>
`,type:"string",enum:[]},{attributeName:"src",propertyName:"src",reflect:!0,description:`<p>svg 图标的路径</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p><code>svg</code> 图标的内容</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
