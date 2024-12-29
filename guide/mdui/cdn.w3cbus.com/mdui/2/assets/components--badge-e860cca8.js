const e={docsHtml:`<p>Badges provide dynamic information, such as counts or status indications. They can contain labels or numbers.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/badge.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Badge } from &#39;mdui/components/badge.js&#39;;
</code></pre>
<p>example:</p>
<pre><code class="language-html,example">&lt;mdui-badge&gt;12&lt;/mdui-badge&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variants</a>
                </h3>
<p>The <code>variant</code> attribute determines the badge&#39;s shape. A <code>large</code> value creates a larger badge. Specify the content to display within the default slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-badge variant=&quot;small&quot;&gt;&lt;/mdui-badge&gt;
&lt;mdui-badge variant=&quot;large&quot;&gt;99+&lt;/mdui-badge&gt;
</code></pre>
`,elements:[{name:"Badge",tagName:"mdui-badge",summary:`<p>Badge Component.</p>
<pre><code class="language-html">&lt;mdui-badge&gt;12&lt;/mdui-badge&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the badge shape. Possible values:</p>
<ul>
<li><code>small</code>: A small badge without text.</li>
<li><code>large</code>: A large badge with displayed text.</li>
</ul>
`,type:"'small' | 'large'",enum:["'small'","'large'"],default:"'large'"}],methods:[],events:[],slots:[{name:"",description:`<p>The text to be displayed.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
