const e={docsHtml:`<p>徽标用于展示动态信息，如计数或状态指示。它可以包含文字或数字。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/badge.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Badge } from &#39;mdui/components/badge.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-badge&gt;12&lt;/mdui-badge&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>使用 <code>variant</code> 属性来设置徽标的形状。当 <code>variant</code> 为 <code>large</code> 时，将显示大型徽标。你可以在 default slot 中指定要显示的文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-badge variant=&quot;small&quot;&gt;&lt;/mdui-badge&gt;
&lt;mdui-badge variant=&quot;large&quot;&gt;99+&lt;/mdui-badge&gt;
</code></pre>
`,elements:[{name:"Badge",tagName:"mdui-badge",summary:`<p>徽标组件</p>
<pre><code class="language-html">&lt;mdui-badge&gt;12&lt;/mdui-badge&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>徽标的形状。可选值包括：</p>
<ul>
<li><code>small</code>：小型徽标，不显示文本</li>
<li><code>large</code>：大型徽标，会显示文本</li>
</ul>
`,type:"'small' | 'large'",enum:["'small'","'large'"],default:"'large'"}],methods:[],events:[],slots:[{name:"",description:`<p>徽标中显示的文本</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
