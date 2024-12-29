const e={docsHtml:`<p>Linear progress indicators are horizontal bars that display the status of ongoing operations, such as data loading or form submission.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/linear-progress.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { LinearProgress } from &#39;mdui/components/linear-progress.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-linear-progress&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">Determinate Progress</a>
                </h3>
<p>By default, the linear progress indicator is in an indeterminate state. Use the <code>value</code> attribute to set the current progress. The default maximum progress value is <code>1</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-linear-progress value=&quot;0.5&quot;&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
<p>Set the maximum progress value with the <code>max</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-linear-progress value=&quot;30&quot; max=&quot;100&quot;&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
`,elements:[{name:"LinearProgress",tagName:"mdui-linear-progress",summary:`<p>Linear Progress Component.</p>
<pre><code class="language-html">&lt;mdui-linear-progress&gt;&lt;/mdui-linear-progress&gt;
</code></pre>
`,attributes:[{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>Sets the maximum value for the progress indicator. The default value is <code>1</code>.</p>
`,type:"number",enum:[],default:"1"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>Sets the current value of the progress indicator. If not specified, the progress indicator is in an indeterminate state.</p>
`,type:"number",enum:[]}],methods:[],events:[],slots:[],cssParts:[{name:"indicator",description:`<p>The indicator part.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
