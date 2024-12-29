const e={docsHtml:`<p>A List is a vertical arrangement of items that can contain text or images.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/list.js&#39;;
import &#39;mdui/components/list-item.js&#39;;
import &#39;mdui/components/list-subheader.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { List } from &#39;mdui/components/list.js&#39;;
import type { ListItem } from &#39;mdui/components/list-item.js&#39;;
import type { ListSubheader } from &#39;mdui/components/list-subheader.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-text">
                  <a href="#example-text">Text Content</a>
                </h3>
<p>The <code>headline</code> attribute on <code>&lt;mdui-list-item&gt;</code> sets the primary text, while the <code>description</code> attribute sets the secondary text.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item headline=&quot;Headline&quot;&gt;&lt;/mdui-list-item&gt;
  &lt;mdui-list-item headline=&quot;Headline&quot; description=&quot;Supporting text&quot;&gt;&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>Alternatively, use the default slot for the primary text and the <code>description</code> slot for the secondary text.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;
    Headline
    &lt;span slot=&quot;description&quot;&gt;Supporting text&lt;/span&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>By default, both primary and secondary text are displayed in full. To limit the number of lines, use the <code>headline-line</code> and <code>description-line</code> attributes. The maximum limit is <code>3</code> lines.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item headline-line=&quot;1&quot; description-line=&quot;2&quot;&gt;
    Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline
    &lt;span slot=&quot;description&quot;&gt;Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text&lt;/span&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-side">
                  <a href="#example-side">Side Content</a>
                </h3>
<p>The <code>icon</code> and <code>end-icon</code> attributes on <code>&lt;mdui-list-item&gt;</code> add Material Icons to the left and right sides, respectively.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item icon=&quot;people&quot; end-icon=&quot;arrow_right&quot;&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>Alternatively, use the <code>icon</code> and <code>end-icon</code> slots to add elements to the left and right sides of the list item.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;
    Headline
    &lt;mdui-avatar slot=&quot;icon&quot; src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
    &lt;mdui-checkbox slot=&quot;end-icon&quot;&gt;&lt;/mdui-checkbox&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>The <code>href</code> attribute turns the list into a link, with <code>download</code>, <code>target</code>, and <code>rel</code> attributes available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>The <code>disabled</code> attribute on <code>&lt;mdui-list-item&gt;</code> disables the item. This also disables components within the list item.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item disabled&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-active">
                  <a href="#example-active">Active State</a>
                </h3>
<p>The <code>active</code> attribute on <code>&lt;mdui-list-item&gt;</code> activates the item.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item active&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-nonclickable">
                  <a href="#example-nonclickable">Nonclickable State</a>
                </h3>
<p>The <code>nonclickable</code> attribute on <code>&lt;mdui-list-item&gt;</code> removes mouse hover and click ripple effects.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item nonclickable&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-rounded">
                  <a href="#example-rounded">Rounded Shape</a>
                </h3>
<p>The <code>rounded</code> attribute on <code>&lt;mdui-list-item&gt;</code> gives the item a rounded appearance.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item rounded&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item rounded&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-alignment">
                  <a href="#example-alignment">Vertical Alignment</a>
                </h3>
<p>The <code>alignment</code> attribute on <code>&lt;mdui-list-item&gt;</code> aligns elements on the left and right. Possible values:</p>
<ul>
<li><code>start</code>: top alignment.</li>
<li><code>center</code>: center alignment.</li>
<li><code>end</code>: bottom alignment.</li>
</ul>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item alignment=&quot;start&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
  &lt;mdui-list-item alignment=&quot;center&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
  &lt;mdui-list-item alignment=&quot;end&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">Custom Content</a>
                </h3>
<p>The <code>custom</code> slot in <code>&lt;mdui-list-item&gt;</code> allows for full customization of the list item content.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;
    &lt;div slot=&quot;custom&quot; style=&quot;display: flex;&quot;&gt;
      &lt;mdui-icon name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
      &lt;div&gt;test&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"ListItem",tagName:"mdui-list-item",summary:`<p>List Item Component. It should be used in conjunction with the <code>&lt;mdui-list&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>Main text. Alternatively, use the default slot.</p>
`,type:"string",enum:[]},{attributeName:"headline-line",propertyName:"headlineLine",reflect:!0,description:`<p>Line limit for main text. Truncates after exceeding. Default is no limit. Possible values:</p>
<ul>
<li><code>1</code>: Single-line text, truncates after exceeding</li>
<li><code>2</code>: Double-line text, truncates after exceeding.</li>
<li><code>3</code>: Triple-line text, truncates after exceeding.</li>
</ul>
`,type:"1 | 2 | 3",enum:["1","2","3"]},{attributeName:"description",propertyName:"description",reflect:!0,description:`<p>Subtext. Alternatively, use <code>slot=&quot;description&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"description-line",propertyName:"descriptionLine",reflect:!0,description:`<p>Line limit for subtext. Truncates after exceeding. Default is no limit. Possible values:</p>
<ul>
<li><code>1</code>: Single-line text, truncates after exceeding</li>
<li><code>2</code>: Double-line text, truncates after exceeding.</li>
<li><code>3</code>: Triple-line text, truncates after exceeding.</li>
</ul>
`,type:"1 | 2 | 3",enum:["1","2","3"]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Material Icons name on the left. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Material Icons name on the right. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the list item. Grays out the item and disables elements like <a href="https://cdn.w3cbus.com/docs/2/components/checkbox"><code>&lt;mdui-checkbox&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/radio"><code>&lt;mdui-radio&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/switch"><code>&lt;mdui-switch&gt;</code></a>.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"active",propertyName:"active",reflect:!0,description:`<p>Activates the list item.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"nonclickable",propertyName:"nonclickable",reflect:!0,description:`<p>Makes the list item non-clickable. Elements like <a href="https://cdn.w3cbus.com/docs/2/components/checkbox"><code>&lt;mdui-checkbox&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/radio"><code>&lt;mdui-radio&gt;</code></a>, <a href="https://cdn.w3cbus.com/docs/2/components/switch"><code>&lt;mdui-switch&gt;</code></a> remain interactive.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"rounded",propertyName:"rounded",reflect:!0,description:`<p>Applies rounded style to the list item.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"alignment",propertyName:"alignment",reflect:!0,description:`<p>Vertical alignment of the list item. Possible values:</p>
<ul>
<li><code>start</code>: Top alignment.</li>
<li><code>center</code>: Center alignment.</li>
<li><code>end</code>: Bottom alignment.</li>
</ul>
`,type:"'start' | 'center' | 'end'",enum:["'start'","'center'","'end'"],default:"'center'"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If specified, the component renders as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
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
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the list item gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the list item loses focus.</p>
`}],slots:[{name:"",description:`<p>Main text.</p>
`},{name:"description",description:`<p>Subtext.</p>
`},{name:"icon",description:`<p>Element on the left of the list item.</p>
`},{name:"end-icon",description:`<p>Element on the right of the list item.</p>
`},{name:"custom",description:`<p>Any custom content.</p>
`}],cssParts:[{name:"container",description:`<p>List item container.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"body",description:`<p>Middle part.</p>
`},{name:"headline",description:`<p>Main title.</p>
`},{name:"description",description:`<p>Subtitle.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--shape-corner-rounded",description:`<p>The size of the component corner when <code>rounded</code> is specified. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]},{name:"ListSubheader",tagName:"mdui-list-subheader",summary:`<p>List Subheader Component. It should be used in conjunction with the <code>&lt;mdui-list&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>Subheader text.</p>
`}],cssParts:[],cssProperties:[]},{name:"List",tagName:"mdui-list",summary:`<p>List Component. It should be used in conjunction with the <code>&lt;mdui-list-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>Contains <code>&lt;mdui-list-item&gt;</code> elements.</p>
`}],cssParts:[],cssProperties:[]}]};export{e as default};
