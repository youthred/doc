const e={docsHtml:`<p>A divider is a thin line that groups content in lists and layouts.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/divider.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Divider } from &#39;mdui/components/divider.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-divider&gt;&lt;/mdui-divider&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-vertical">
                  <a href="#example-vertical">Vertical Divider</a>
                </h3>
<p>To display the divider vertically, add the <code>vertical</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;height: 80px;padding: 0 20px&quot;&gt;
  &lt;mdui-divider vertical&gt;&lt;/mdui-divider&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-inset">
                  <a href="#example-inset">Left Inset</a>
                </h3>
<p>To inset the divider from the left, add the <code>inset</code> attribute. This is typically used in lists to align the divider with the text on the left.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-divider inset&gt;&lt;/mdui-divider&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-middle">
                  <a href="#example-middle">Middle Inset</a>
                </h3>
<p>To inset the divider from both sides, add the <code>middle</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-divider middle&gt;&lt;/mdui-divider&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"Divider",tagName:"mdui-divider",summary:`<p>Divider Component.</p>
<pre><code class="language-html">&lt;mdui-divider&gt;&lt;/mdui-divider&gt;
</code></pre>
`,attributes:[{attributeName:"vertical",propertyName:"vertical",reflect:!0,description:`<p>Displays the divider vertically.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"inset",propertyName:"inset",reflect:!0,description:`<p>Adds an inset from the left side.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"middle",propertyName:"middle",reflect:!0,description:`<p>Adds insets from both the left and right sides.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[],slots:[],cssParts:[],cssProperties:[]}]};export{e as default};
