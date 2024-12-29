const e={docsHtml:`<p>Circular progress indicators are used to show the progress of ongoing tasks.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/circular-progress.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { CircularProgress } from &#39;mdui/components/circular-progress.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-circular-progress&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">Determinate Progress</a>
                </h3>
<p>By default, the circular progress indicator is in an indeterminate state. To set the current progress, use the <code>value</code> attribute. The default maximum progress value is <code>1</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-circular-progress value=&quot;0.5&quot;&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
<p>To set the maximum progress value, use the <code>max</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-circular-progress value=&quot;30&quot; max=&quot;100&quot;&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
`,elements:[{name:"CircularProgress",tagName:"mdui-circular-progress",summary:`<p>Circular Progress Component.</p>
<pre><code class="language-html">&lt;mdui-circular-progress&gt;&lt;/mdui-circular-progress&gt;
</code></pre>
`,attributes:[{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>Sets the maximum value for the progress indicator. The default value is <code>1</code>.</p>
`,type:"number",enum:[],default:"1"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>Sets the current value of the progress indicator. If not specified, the progress indicator is in an indeterminate state.</p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[],cssParts:[],cssProperties:[]}]};export{e as default};
