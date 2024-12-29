const e={docsHtml:`<p>Cards are versatile components that serve as containers for content and actions about a single subject.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/card.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Card } from &#39;mdui/components/card.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-card style=&quot;width: 200px;height: 124px&quot;&gt;Card&lt;/mdui-card&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variant</a>
                </h3>
<p>The <code>variant</code> attribute determines the card&#39;s appearance.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card variant=&quot;elevated&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
&lt;mdui-card variant=&quot;filled&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
&lt;mdui-card variant=&quot;outlined&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-clickable">
                  <a href="#example-clickable">Clickable</a>
                </h3>
<p>Add the <code>clickable</code> attribute to make the card interactive. This will add hover and click ripple effects.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card clickable style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>Use the <code>href</code> attribute to transform the card into a link. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>Use the <code>disabled</code> attribute to disable the card.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card disabled style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
`,elements:[{name:"Card",tagName:"mdui-card",summary:`<p>Card Component.</p>
<pre><code class="language-html">&lt;mdui-card&gt;card content&lt;/mdui-card&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the card style. Possible values:</p>
<ul>
<li><code>elevated</code>: Shadowed, providing more visual separation from the background than <code>filled</code>, but less than <code>outlined</code>.</li>
<li><code>filled</code>: Provides minimal visual separation from the background.</li>
<li><code>outlined</code>: Bordered, providing maximum visual separation from the background.</li>
</ul>
`,type:"'elevated' | 'filled' | 'outlined'",enum:["'elevated'","'filled'","'outlined'"],default:"'elevated'"},{attributeName:"clickable",propertyName:"clickable",reflect:!0,description:`<p>Makes the card clickable. When set, a mouse hover effect and click ripple effect are added.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the card.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If specified, the component renders as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
`,type:"string",enum:[]},{attributeName:"download",propertyName:"download",reflect:!0,description:`<p>Instructs the browser to treat the linked URL as a download.</p>
<p><strong>Note</strong>:  This is only available when <code>href</code> is specified.</p>
`,type:"string",enum:[]},{attributeName:"target",propertyName:"target",reflect:!0,description:`<p>Defines where to display the linked URL. Possible values:</p>
<ul>
<li><code>_blank</code>: Opens in a new tab or window.</li>
<li><code>_parent</code>: Opens in the parent browsing context or <code>_self</code> if no parent exists.</li>
<li><code>_self</code>: Opens in the current browsing context. (Default).</li>
<li><code>_top</code>: Opens in the topmost browsing context or <code>_self</code> if no ancestors exist.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"'_blank' | '_parent' | '_self' | '_top'",enum:["'_blank'","'_parent'","'_self'","'_top'"]},{attributeName:"rel",propertyName:"rel",reflect:!0,description:`<p>Specifies the relationship of the linked URL as space-separated link types. Possible values:</p>
<ul>
<li><code>alternate</code>: Alternate versions of the current document.</li>
<li><code>author</code>: Author of the current document or article.</li>
<li><code>bookmark</code>: Permanent link for the nearest ancestor section.</li>
<li><code>external</code>: The referenced document is not part of the same site as the current document.</li>
<li><code>help</code>: Link to context-sensitive help.</li>
<li><code>license</code>: Indicates that the main content of the current document is covered by the copyright license described by the referenced document.</li>
<li><code>me</code>: Indicates that the current document represents the person who owns the linked content.</li>
<li><code>next</code>: Indicates that the current document is part of a series and the next document in the series is the referenced document.</li>
<li><code>nofollow</code>: Indicates that the current document&#39;s original author or publisher does not endorse the referenced document.</li>
<li><code>noreferrer</code>: No <code>Referer</code> header will be included. Also has the same effect as <code>noopener</code>.</li>
<li><code>opener</code>: Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not an auxiliary browsing context (i.e., has &quot;<code>_blank</code>&quot; as <code>target</code> attribute value).</li>
<li><code>prev</code>: Indicates that the current document is part of a series and the previous document in the series is the referenced document.</li>
<li><code>search</code>: Links to a resource that can be used to search through the current document and its related pages.</li>
<li><code>tag</code>: Gives a tag (identified by the given address) that applies to the current document.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'me' | 'next' | 'nofollow' | 'noreferrer' | 'opener' | 'prev' | 'search' | 'tag'",enum:["'alternate'","'author'","'bookmark'","'external'","'help'","'license'","'me'","'next'","'nofollow'","'noreferrer'","'opener'","'prev'","'search'","'tag'"]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the card gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the card loses focus.</p>
`}],slots:[{name:"",description:`<p>Card content.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
