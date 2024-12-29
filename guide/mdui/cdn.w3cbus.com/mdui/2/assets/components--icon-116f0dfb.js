const t={docsHtml:`<p>The Icon component represents common actions and supports both Material Icons and SVG icons.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/icon.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Icon } from &#39;mdui/components/icon.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-icon name=&quot;search&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<h3 id="usage-material-icons">
                  <a href="#usage-material-icons">Using Material Icons</a>
                </h3>
<p>To use Material Icons, import the CSS file for the desired variant: Filled, Outlined, Rounded, Sharp, or Two Tone.</p>
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
<p>Use the <code>name</code> attribute to specify the icon, appending the variant name as a suffix (no suffix needed for Filled). Here&#39;s how to use the <code>delete</code> icon in all 5 variants:</p>
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
<p>Search for icons directly using the <a href="https://cdn.w3cbus.com/en/docs/2/components/icon#search">Material Icons Search</a> tool at the page bottom. Click an icon to copy its code to the clipboard.</p>
<p>mdui also provides a standalone package <a href="https://cdn.w3cbus.com/en/docs/2/libraries/icons"><code>@mdui/icons</code></a>, with each icon component as a separate file. This allows importing only needed icon components, without the entire icon library.</p>
<h3 id="usage-svg">
                  <a href="#usage-svg">Using SVG Icon</a>
                </h3>
<p>The component supports SVG icons. Pass the SVG icon link to the <code>src</code> attribute:</p>
<pre><code class="language-html,example">&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<p>Or, pass the SVG content directly into the component&#39;s default slot:</p>
<pre><code class="language-html,example">&lt;mdui-icon&gt;
  &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;&gt;
    &lt;path d=&quot;M0 0h24v24H0z&quot; fill=&quot;none&quot;/&gt;
    &lt;path d=&quot;M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z&quot;/&gt;
  &lt;/svg&gt;
&lt;/mdui-icon&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-color">
                  <a href="#example-color">Set Color</a>
                </h3>
<p>Change the icon color by setting the <code>color</code> CSS style of the <code>&lt;mdui-icon&gt;</code> element or its parent.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-icon name=&quot;delete&quot; style=&quot;color: red&quot;&gt;&lt;/mdui-icon&gt;
&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot; style=&quot;color: red&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
<h3 id="example-size">
                  <a href="#example-size">Set Size</a>
                </h3>
<p>Change the icon size by setting the <code>font-size</code> CSS style of the <code>&lt;mdui-icon&gt;</code> element or its parent.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-icon name=&quot;delete&quot; style=&quot;font-size: 32px&quot;&gt;&lt;/mdui-icon&gt;
&lt;mdui-icon src=&quot;https://fonts.gstatic.com/s/i/materialicons/search/v17/24px.svg&quot; style=&quot;font-size: 32px&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
`,elements:[{name:"Icon",tagName:"mdui-icon",summary:`<p>Icon Component.</p>
<pre><code class="language-html">&lt;mdui-icon name=&quot;search&quot;&gt;&lt;/mdui-icon&gt;
</code></pre>
`,attributes:[{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>Specifies the name of the Material Icons.</p>
`,type:"string",enum:[]},{attributeName:"src",propertyName:"src",reflect:!0,description:`<p>Specifies the path of the SVG icon.</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>The SVG icon content.</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
