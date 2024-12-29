const e={docsHtml:`<p>Chips are compact elements that represent an input, attribute, or action.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/chip.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Chip } from &#39;mdui/components/chip.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-chip&gt;Chip&lt;/mdui-chip&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variant</a>
                </h3>
<p>The <code>variant</code> attribute determines the chip&#39;s appearance. There are four available variants:</p>
<ul>
<li><code>assist</code>: Represents smart or automated actions that can span multiple apps.</li>
<li><code>filter</code>: Represents filters for a collection.</li>
<li><code>input</code>: Represents discrete pieces of information entered by a user.</li>
<li><code>suggestion</code>: Helps narrow a user’s intent by presenting dynamically generated suggestions.</li>
</ul>
<pre><code class="language-html,example,expandable">&lt;mdui-chip variant=&quot;assist&quot;&gt;Assist&lt;/mdui-chip&gt;
&lt;mdui-chip variant=&quot;filter&quot;&gt;Filter&lt;/mdui-chip&gt;
&lt;mdui-chip variant=&quot;input&quot;&gt;Input&lt;/mdui-chip&gt;
&lt;mdui-chip variant=&quot;suggestion&quot;&gt;Suggestion&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-elevated">
                  <a href="#example-elevated">Elevated</a>
                </h3>
<p>Add the <code>elevated</code> attribute to raise the chip, providing it with a shadow.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip elevated&gt;Chip&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>Use the <code>icon</code> and <code>end-icon</code> attributes to add Material Icons to the left and right sides of the chip, respectively. Alternatively, use the <code>icon</code> and <code>end-icon</code> slots to add elements to the chip&#39;s sides.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip icon=&quot;search&quot;&gt;Icon&lt;/mdui-chip&gt;
&lt;mdui-chip end-icon=&quot;arrow_forward&quot;&gt;End Icon&lt;/mdui-chip&gt;
&lt;mdui-chip&gt;
  Slot
  &lt;mdui-icon slot=&quot;icon&quot; name=&quot;downloading&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;end-icon&quot; name=&quot;attach_file&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>Use the <code>href</code> attribute to transform the chip into a link. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Link&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled and Loading States</a>
                </h3>
<p>Use the <code>disabled</code> attribute to disable the chip. The <code>loading</code> attribute displays the loading state.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip disabled&gt;Disabled&lt;/mdui-chip&gt;
&lt;mdui-chip loading&gt;Loading&lt;/mdui-chip&gt;
&lt;mdui-chip loading disabled&gt;Loading &amp; Disabled&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-selectable">
                  <a href="#example-selectable">Selectable</a>
                </h3>
<p>Add the <code>selectable</code> attribute to make the chip selectable.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip selectable&gt;Chip&lt;/mdui-chip&gt;
</code></pre>
<p>Use the <code>selected-icon</code> attribute to specify the Material Icons name for the selected state. Alternatively, use the <code>selected-icon</code> slot to specify the selected state icon element.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip selectable selected-icon=&quot;favorite&quot;&gt;Chip&lt;/mdui-chip&gt;
&lt;mdui-chip selectable&gt;
  Chip
  &lt;mdui-icon slot=&quot;selected-icon&quot; name=&quot;favorite&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-chip&gt;
</code></pre>
<p>The <code>selected</code> property is <code>true</code> when the chip is selected. Add the <code>selected</code> attribute to set the chip as selected by default.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip selectable selected&gt;Chip&lt;/mdui-chip&gt;
</code></pre>
<h3 id="example-deletable">
                  <a href="#example-deletable">Deletable</a>
                </h3>
<p>Add the <code>deletable</code> attribute to add a delete icon to the right of the chip. Clicking this icon triggers the <code>delete</code> event. Use the <code>delete-icon</code> attribute to specify the Material Icons for the delete icon, or use the <code>delete-icon</code> slot to specify the element for the delete icon.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-chip deletable&gt;Chip&lt;/mdui-chip&gt;
&lt;mdui-chip deletable delete-icon=&quot;backspace&quot;&gt;Chip&lt;/mdui-chip&gt;
&lt;mdui-chip deletable&gt;
  Chip
  &lt;mdui-icon slot=&quot;delete-icon&quot; name=&quot;backspace&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-chip&gt;
</code></pre>
`,elements:[{name:"Chip",tagName:"mdui-chip",summary:`<p>Chip Component.</p>
<pre><code class="language-html">&lt;mdui-chip&gt;Chip&lt;/mdui-chip&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the chip type. Possible values:</p>
<ul>
<li><code>assist</code>: Displays auxiliary actions related to the context, such as sharing and favoriting on a meal ordering page.</li>
<li><code>filter</code>: Filters content, like search results on a search results page.</li>
<li><code>input</code>: Represents fragments of user input, such as contacts in the &#39;To&#39; field in Gmail.</li>
<li><code>suggestion</code>: Provides dynamically generated suggestions to simplify user actions, like message predictions in a chat application.</li>
</ul>
`,type:"'assist' | 'filter' | 'input' | 'suggestion'",enum:["'assist'","'filter'","'input'","'suggestion'"],default:"'assist'"},{attributeName:"elevated",propertyName:"elevated",reflect:!0,description:`<p>Gives the chip a shadow.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"selectable",propertyName:"selectable",reflect:!0,description:`<p>Makes the chip selectable.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"selected",propertyName:"selected",reflect:!0,description:`<p>Marks the chip as selected.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"deletable",propertyName:"deletable",reflect:!0,description:`<p>Makes the chip deletable. When set, a delete icon appears on the right.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Sets the Material Icons name for the left icon. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"selected-icon",propertyName:"selectedIcon",reflect:!0,description:`<p>Sets the Material Icons name for the left icon when selected. Alternatively, use <code>slot=&quot;selected-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Sets the Material Icons name for the right icon. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"delete-icon",propertyName:"deleteIcon",reflect:!0,description:`<p>Sets the Material Icons name for the delete icon when deletable. Alternatively, use <code>slot=&quot;delete-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If provided, the component is rendered as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
`,type:"string",enum:[]},{attributeName:"download",propertyName:"download",reflect:!0,description:`<p>Instructs the browser to download the linked URL.</p>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"string",enum:[]},{attributeName:"target",propertyName:"target",reflect:!0,description:`<p>Defines where to open the linked URL. Possible values:</p>
<ul>
<li><code>_blank</code>: Opens in a new tab or window.</li>
<li><code>_parent</code>: Opens in the parent browsing context or <code>_self</code> if no parent.</li>
<li><code>_self</code>: Opens in the current browsing context. (Default).</li>
<li><code>_top</code>: Opens in the topmost browsing context or <code>_self</code> if no ancestors.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"'_blank' | '_parent' | '_self' | '_top'",enum:["'_blank'","'_parent'","'_self'","'_top'"]},{attributeName:"rel",propertyName:"rel",reflect:!0,description:`<p>Specifies the relationship of the linked URL as space-separated link types. Possible values:</p>
<ul>
<li><code>alternate</code>: Alternate versions of the current document.</li>
<li><code>author</code>: The author of the current document or article.</li>
<li><code>bookmark</code>: The permalink for the nearest ancestor section.</li>
<li><code>external</code>: The referenced document is not part of the same site as the current document.</li>
<li><code>help</code>: A link to context-sensitive help.</li>
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
`,type:"'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'me' | 'next' | 'nofollow' | 'noreferrer' | 'opener' | 'prev' | 'search' | 'tag'",enum:["'alternate'","'author'","'bookmark'","'external'","'help'","'license'","'me'","'next'","'nofollow'","'noreferrer'","'opener'","'prev'","'search'","'tag'"]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Specifies that the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Defines the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the element.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"loading",propertyName:"loading",reflect:!0,description:`<p>Indicates that the element is in a loading state.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>The button&#39;s name, which is submitted with form data.</p>
<p><strong>Note</strong>: This is only available when <code>href</code> is not specified.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The button&#39;s value, which is submitted with form data.</p>
<p><strong>Note</strong>: This is only available when <code>href</code> is not specified.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"type",propertyName:"type",reflect:!0,description:`<p>Defines the button&#39;s default behavior. The default is <code>button</code>. Possible values:</p>
<ul>
<li><code>submit</code>: Submits the form data to the server.</li>
<li><code>reset</code>: Resets all the controls to their initial values.</li>
<li><code>button</code>: No default behavior, does nothing when pressed by default.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is not specified.</p>
`,type:"'submit' | 'reset' | 'button'",enum:["'submit'","'reset'","'button'"],default:"'button'"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the button with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the button is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows button elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified.</p>
`,type:"string",enum:[]},{attributeName:"formaction",propertyName:"formAction",reflect:!0,description:`<p>Specifies the URL that processes the button&#39;s submitted information. Overrides the <code>action</code> attribute of the button&#39;s form owner.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified and <code>type=&quot;submit&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"formenctype",propertyName:"formEnctype",reflect:!0,description:`<p>Specifies the form data encoding method. Possible values:</p>
<ul>
<li><code>application/x-www-form-urlencoded</code>: Default if the attribute is not used.</li>
<li><code>multipart/form-data</code>: Used for <code>&lt;input&gt;</code> elements with <code>type</code> set to <code>file</code>.</li>
<li><code>text/plain</code>: For debugging, not for real form submission.</li>
</ul>
<p>Overrides the <code>enctype</code> attribute of the button&#39;s form owner.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified and <code>type=&quot;submit&quot;</code>.</p>
`,type:"'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",enum:["'application/x-www-form-urlencoded'","'multipart/form-data'","'text/plain'"]},{attributeName:"formmethod",propertyName:"formMethod",reflect:!0,description:`<p>Specifies the HTTP method for form submission. Possible values:</p>
<ul>
<li><code>post</code>: Form data included in HTTP request body.</li>
<li><code>get</code>: Form data appended to <code>action</code> URL.</li>
</ul>
<p>Overrides the <code>method</code> attribute of the button&#39;s form owner.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified and <code>type=&quot;submit&quot;</code>.</p>
`,type:"'post' | 'get'",enum:["'post'","'get'"]},{attributeName:"formnovalidate",propertyName:"formNoValidate",reflect:!0,description:`<p>Specifies that the form should not be validated on submission. Overrides the <code>novalidate</code> attribute of the button&#39;s form owner.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified and <code>type=&quot;submit&quot;</code>.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"formtarget",propertyName:"formTarget",reflect:!0,description:`<p>Specifies where to display the form submission response. Possible values:</p>
<ul>
<li><code>_self</code>: Current browsing context. (Default).</li>
<li><code>_blank</code>: New tab or window.</li>
<li><code>_parent</code>: Parent browsing context or <code>_self</code> if no parent.</li>
<li><code>_top</code>: Topmost browsing context or <code>_self</code> if no ancestors.</li>
</ul>
<p>Overrides the <code>target</code> attribute of the button&#39;s form owner.</p>
<p><strong>Note</strong>: Only available when <code>href</code> is not specified and <code>type=&quot;submit&quot;</code>.</p>
`,type:"'_self' | '_blank' | '_parent' | '_top'",enum:["'_self'","'_blank'","'_parent'","'_top'"]},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}},{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the chip gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the chip loses focus.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`},{name:"change",description:`<p>Emitted when the selected state changes.</p>
`},{name:"delete",description:`<p>Emitted when the delete icon is clicked.</p>
`}],slots:[{name:"",description:`<p>Text.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"selected-icon",description:`<p>Left icon when selected.</p>
`},{name:"delete-icon",description:`<p>Delete icon when deletable.</p>
`}],cssParts:[{name:"button",description:`<p>Internal <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element.</p>
`},{name:"label",description:`<p>Text.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"selected-icon",description:`<p>Left icon when selected.</p>
`},{name:"delete-icon",description:`<p>Delete icon on the right.</p>
`},{name:"loading",description:`<p>The <code>&lt;mdui-circular-progress&gt;</code> element for the loading state.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
