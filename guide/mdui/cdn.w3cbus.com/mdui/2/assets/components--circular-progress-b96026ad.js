const e={docsHtml:`<p>圆形进度指示器是一个用于显示任务进度的圆形组件，例如数据加载或表单提交等。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/circular-progress.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { CircularProgress } from &#39;mdui/components/circular-progress.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-circular-progress&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">固定进度</a>
                </h3>
<p>圆形进度指示器默认为不确定的进度，可以通过 <code>value</code> 属性设置当前进度，默认进度最大值为 <code>1</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-circular-progress value=&quot;0.5&quot;&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
<p>可以通过 <code>max</code> 属性设置进度的最大值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-circular-progress value=&quot;30&quot; max=&quot;100&quot;&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
`,elements:[{name:"CircularProgress",tagName:"mdui-circular-progress",summary:`<p>圆形进度指示器组件</p>
<pre><code class="language-html">&lt;mdui-circular-progress&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
`,attributes:[{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>进度指示器的最大值。默认为 <code>1</code></p>
`,type:"number",enum:[],default:"1"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>进度指示器的当前值。如果未指定该值，则显示为不确定状态</p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[],cssParts:[],cssProperties:[]}]};export{e as default};
