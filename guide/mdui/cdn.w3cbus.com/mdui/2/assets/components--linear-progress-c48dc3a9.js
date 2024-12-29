const e={docsHtml:`<p>线性进度指示器是一种横向的指示器，用于向用户展示任务的执行进度，如数据加载或表单提交等。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/linear-progress.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { LinearProgress } from &#39;mdui/components/linear-progress.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-linear-progress&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">设定进度</a>
                </h3>
<p>线性进度指示器默认为不确定的进度，你可以通过 <code>value</code> 属性来设定当前的进度，默认的进度最大值为 <code>1</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-linear-progress value=&quot;0.5&quot;&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
<p>你也可以通过 <code>max</code> 属性来设定进度的最大值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-linear-progress value=&quot;30&quot; max=&quot;100&quot;&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
`,elements:[{name:"LinearProgress",tagName:"mdui-linear-progress",summary:`<p>线性进度指示器组件</p>
<pre><code class="language-html">&lt;mdui-linear-progress&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
`,attributes:[{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>进度指示器的最大值。默认为 <code>1</code></p>
`,type:"number",enum:[],default:"1"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>进度指示器的当前值。如果未指定该值，则处于不确定状态</p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[],cssParts:[{name:"indicator",description:`<p>指示器部分</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
