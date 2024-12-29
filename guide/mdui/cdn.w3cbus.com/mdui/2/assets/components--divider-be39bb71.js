const e={docsHtml:`<p>分隔线是一条细线，用于在列表和容器中对内容进行分组。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/divider.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Divider } from &#39;mdui/components/divider.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-divider&gt;&lt;/mdui-divider&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-vertical">
                  <a href="#example-vertical">垂直分割线</a>
                </h3>
<p>添加 <code>vertical</code> 属性，可以使分割线垂直显示。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;height: 80px;padding: 0 20px&quot;&gt;
  &lt;mdui-divider vertical&gt;&lt;/mdui-divider&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-inset">
                  <a href="#example-inset">左侧缩进</a>
                </h3>
<p>添加 <code>inset</code> 属性，可以使分割线左侧缩进。这通常用于列表中，以使分割线和左侧文本对齐。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-divider inset&gt;&lt;/mdui-divider&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-middle">
                  <a href="#example-middle">两侧缩进</a>
                </h3>
<p>添加 <code>middle</code> 属性，可以使分割线两侧缩进。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-divider middle&gt;&lt;/mdui-divider&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"Divider",tagName:"mdui-divider",summary:`<p>分割线组件</p>
<pre><code class="language-html">&lt;mdui-divider&gt;&lt;/mdui-divider&gt;
</code></pre>
`,attributes:[{attributeName:"vertical",propertyName:"vertical",reflect:!0,description:`<p>是否为垂直分割线</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"inset",propertyName:"inset",reflect:!0,description:`<p>是否进行左侧缩进</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"middle",propertyName:"middle",reflect:!0,description:`<p>是否进行左右两侧缩进</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[],slots:[],cssParts:[],cssProperties:[]}]};export{e as default};
