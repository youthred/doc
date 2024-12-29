const t={docsHtml:`<p>Tooltips provide supplementary text information for a specific element, enhancing the comprehension of its function or purpose.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-tooltip content=&quot;Plain tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-plain">
                  <a href="#example-plain">Plain Text Tooltip</a>
                </h3>
<p>By default, the tooltip displays plain text. The <code>content</code> attribute specifies the tooltip content.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip content=&quot;Plain tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<p>Alternatively, the <code>content</code> slot can also be used for this purpose.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
  &lt;div slot=&quot;content&quot;&gt;
    &lt;div style=&quot;font-size: 1.4em&quot;&gt;title&lt;/div&gt;
    &lt;div&gt;content&lt;/div&gt;
  &lt;/div&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-rich">
                  <a href="#example-rich">Rich Text Tooltip</a>
                </h3>
<p>For a rich text tooltip, set the <code>variant</code> attribute to <code>rich</code>. The tooltip&#39;s title and content can be specified using the <code>headline</code> and <code>content</code> attributes, respectively.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip
  variant=&quot;rich&quot;
  headline=&quot;Rich tooltip&quot;
  content=&quot;Rich tooltips bring attention to a particular element of feature that warrants the user&#39;s focus. It supports multiple lines of informational text.&quot;
&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<p>Alternatively, the <code>headline</code> and <code>content</code> slots can be used to specify the tooltip&#39;s title and content. The <code>action</code> slot is used to specify the tooltip&#39;s action button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip variant=&quot;rich&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
  &lt;div slot=&quot;headline&quot;&gt;Rich tooltip&lt;/div&gt;
  &lt;div slot=&quot;content&quot;&gt;Rich tooltips bring attention to a particular element of feature that warrants the user&#39;s focus. It supports multiple lines of informational text.&lt;/div&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Action&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Placement</a>
                </h3>
<p>The <code>placement</code> attribute sets the tooltip&#39;s position.</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;top-left&quot; content=&quot;top-left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-start&quot; content=&quot;top-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top&quot; content=&quot;top&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-end&quot; content=&quot;top-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-right&quot; content=&quot;top-right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left-start&quot; content=&quot;left-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right-start&quot; content=&quot;right-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left&quot; content=&quot;left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right&quot; content=&quot;right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left-end&quot; content=&quot;left-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right-end&quot; content=&quot;right-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;bottom-left&quot; content=&quot;bottom-left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-start&quot; content=&quot;bottom-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom&quot; content=&quot;bottom&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-end&quot; content=&quot;bottom-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-right&quot; content=&quot;bottom-right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.example-placement mdui-card {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.25rem;
}

.example-placement .row:nth-child(2) mdui-tooltip:last-child mdui-card,
.example-placement .row:nth-child(3) mdui-tooltip:last-child mdui-card,
.example-placement .row:nth-child(4) mdui-tooltip:last-child mdui-card {
  margin-left: 10rem;
}
&lt;/style&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">Trigger Method</a>
                </h3>
<p>The <code>trigger</code> attribute determines the trigger method for the tooltip.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip trigger=&quot;click&quot; content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-delay">
                  <a href="#example-delay">Open/Close Delay</a>
                </h3>
<p>When the trigger method is <code>hover</code>, the <code>open-delay</code> and <code>close-delay</code> attributes set the opening and closing delays, respectively. The unit is in milliseconds.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip open-delay=&quot;1000&quot; close-delay=&quot;1000&quot; content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>The <code>disabled</code> attribute disables the tooltip.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip disabled content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
`,elements:[{name:"Tooltip",tagName:"mdui-tooltip",summary:`<p>Tooltip Component.</p>
<pre><code class="language-html">&lt;mdui-tooltip content=&quot;tooltip content&quot;&gt;
..&lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the tooltip shape. Default is <code>plain</code>. Possible values:</p>
<ul>
<li><code>plain</code>: For simple single-line text.</li>
<li><code>rich</code>: For text including a title, body text, and action buttons.</li>
</ul>
`,type:"'plain' | 'rich'",enum:["'plain'","'rich'"],default:"'plain'"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Sets the tooltip position. Default is <code>auto</code>. Possible values:</p>
<ul>
<li><code>auto</code>: Position is determined automatically.</li>
<li><code>top-left</code>: Top-left corner.</li>
<li><code>top-start</code>: Top, left-aligned.</li>
<li><code>top</code>: Top, centered.</li>
<li><code>top-end</code>: Top, right-aligned.</li>
<li><code>top-right</code>: Top-right corner.</li>
<li><code>bottom-left</code>: Bottom-left corner.</li>
<li><code>bottom-start</code>: Bottom, left-aligned.</li>
<li><code>bottom</code>: Bottom, centered.</li>
<li><code>bottom-end</code>: Bottom, right-aligned.</li>
<li><code>bottom-right</code>: Bottom-right corner.</li>
<li><code>left-start</code>: Left, top-aligned.</li>
<li><code>left</code>: Left, centered.</li>
<li><code>left-end</code>: Left, bottom-aligned.</li>
<li><code>right-start</code>: Right, top-aligned.</li>
<li><code>right</code>: Right, centered.</li>
<li><code>right-end</code>: Right, bottom-aligned.</li>
</ul>
`,type:"'auto' | 'top-left' | 'top-start' | 'top' | 'top-end' | 'top-right' | 'bottom-left' | 'bottom-start' | 'bottom' | 'bottom-end' | 'bottom-right' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'auto'","'top-left'","'top-start'","'top'","'top-end'","'top-right'","'bottom-left'","'bottom-start'","'bottom'","'bottom-end'","'bottom-right'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'auto'"},{attributeName:"open-delay",propertyName:"openDelay",reflect:!0,description:`<p>Sets the delay in milliseconds before the tooltip appears on hover.</p>
`,type:"number",enum:[],default:"150"},{attributeName:"close-delay",propertyName:"closeDelay",reflect:!0,description:`<p>Sets the delay in milliseconds before the tooltip disappears on hover.</p>
`,type:"number",enum:[],default:"150"},{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>Sets the tooltip title. Only applicable when <code>variant=&quot;rich&quot;</code>. Alternatively, use <code>slot=&quot;headline&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"content",propertyName:"content",reflect:!0,description:`<p>Sets the tooltip content. Alternatively, use <code>slot=&quot;content&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"trigger",propertyName:"trigger",reflect:!0,description:`<p>Defines the trigger method. Supports multiple values separated by spaces. Possible values:</p>
<ul>
<li><code>click</code>: Triggered on click.</li>
<li><code>hover</code>: Triggered on mouse hover.</li>
<li><code>focus</code>: Triggered on focus.</li>
<li><code>manual</code>: Can only open and close the tooltip programmatically, cannot specify other trigger methods.</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'manual' | string",enum:["'click'","'hover'","'focus'","'manual'","string"],default:"'hover focus'"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the tooltip.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>Opens the tooltip.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>Emitted when the tooltip starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"opened",description:`<p>Emitted after the tooltip has opened and the animations are completed.</p>
`},{name:"close",description:`<p>Emitted when the tooltip starts to close. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"closed",description:`<p>Emitted after the tooltip has closed and the animations are completed.</p>
`}],slots:[{name:"",description:`<p>Target element that triggers the tooltip. Only the first element in the <code>default</code> slot is used as the target.</p>
`},{name:"headline",description:`<p>Title of the tooltip. Effective only when <code>variant=&quot;rich&quot;</code>.</p>
`},{name:"content",description:`<p>Content of the tooltip, can contain HTML. If only plain text is included, can also use <code>content</code> attribute instead.</p>
`},{name:"action",description:`<p>Button at the bottom of the tooltip. Effective only when <code>variant=&quot;rich&quot;</code>.</p>
`}],cssParts:[{name:"popup",description:`<p>Container for the tooltip.</p>
`},{name:"headline",description:`<p>Title of the tooltip.</p>
`},{name:"content",description:`<p>Body text of the tooltip.</p>
`},{name:"action",description:`<p>Action button of the tooltip.</p>
`}],cssProperties:[{name:"--shape-corner-plain",description:`<p>Corner radius of the component when <code>variant=&quot;plain&quot;</code>. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--shape-corner-rich",description:`<p>Corner radius of the component when <code>variant=&quot;rich&quot;</code>. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{t as default};
