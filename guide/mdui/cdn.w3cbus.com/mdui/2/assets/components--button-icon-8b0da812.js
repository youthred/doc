const e={docsHtml:`<p>Icon buttons are used to execute minor actions with a single click.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/button-icon.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { ButtonIcon } from &#39;mdui/components/button-icon.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-button-icon icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-icon">
                  <a href="#example-icon">Icon</a>
                </h3>
<p>Use the <code>icon</code> attribute to specify the Material Icons name. Alternatively, you can use the default slot to specify the icon element.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon&gt;
  &lt;mdui-icon name=&quot;search&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-button-icon&gt;
</code></pre>
<h3 id="example-variant">
                  <a href="#example-variant">Shape</a>
                </h3>
<p>The <code>variant</code> attribute determines the shape of the icon button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon variant=&quot;standard&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon variant=&quot;filled&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon variant=&quot;tonal&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon variant=&quot;outlined&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
<h3 id="example-selectable">
                  <a href="#example-selectable">Selectable</a>
                </h3>
<p>Add the <code>selectable</code> attribute to make the icon button selectable.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon selectable icon=&quot;favorite_border&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
<p>Use the <code>selected-icon</code> attribute to specify the Material Icons name for the selected state. Alternatively, use the <code>selected-icon</code> slot to specify the selected state icon element.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon selectable icon=&quot;favorite_border&quot; selected-icon=&quot;favorite&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon selectable icon=&quot;favorite_border&quot;&gt;
  &lt;mdui-icon slot=&quot;selected-icon&quot; name=&quot;favorite&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-button-icon&gt;
</code></pre>
<p>The <code>selected</code> property is <code>true</code> when the icon button is selected. Add the <code>selected</code> attribute to set the icon button to the selected state by default.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon selectable selected icon=&quot;favorite_border&quot; selected-icon=&quot;favorite&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>Use the <code>href</code> attribute to turn the icon button into a link. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon icon=&quot;search&quot; href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled and Loading State</a>
                </h3>
<p>Use the <code>disabled</code> attribute to disable the icon button. The <code>loading</code> attribute displays the loading state.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-button-icon disabled icon=&quot;search&quot; variant=&quot;tonal&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon loading icon=&quot;search&quot; variant=&quot;tonal&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;mdui-button-icon loading disabled icon=&quot;search&quot; variant=&quot;tonal&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
`,elements:[{name:"ButtonIcon",tagName:"mdui-button-icon",summary:`<p>Icon Button Component.</p>
<pre><code class="language-html">&lt;mdui-button-icon icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the icon button style. Possible values:</p>
<ul>
<li><code>standard</code>: For low-priority actions.</li>
<li><code>filled</code>: Has the strongest visual effect, suitable for high-priority actions.</li>
<li><code>tonal</code>: A visual effect between <code>filled</code> and <code>outlined</code>, suitable for medium to high-priority actions.</li>
<li><code>outlined</code>: For medium-priority actions.</li>
</ul>
`,type:"'standard' | 'filled' | 'tonal' | 'outlined'",enum:["'standard'","'filled'","'tonal'","'outlined'"],default:"'standard'"},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Specifies the Material Icons name. Alternatively, use the default slot.</p>
`,type:"string",enum:[]},{attributeName:"selected-icon",propertyName:"selectedIcon",reflect:!0,description:`<p>Specifies the Material Icons name when selected. Alternatively, use <code>slot=&quot;selected-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"selectable",propertyName:"selectable",reflect:!0,description:`<p>Indicates if the button is selectable.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"selected",propertyName:"selected",reflect:!0,description:`<p>Indicates if the button is selected.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If provided, the component is rendered as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
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
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the button gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the button loses focus.</p>
`},{name:"change",description:`<p>Emitted when the selected state changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"",description:`<p>Icon component.</p>
`},{name:"selected-icon",description:`<p>Icon in the selected state.</p>
`}],cssParts:[{name:"button",description:`<p>Internal <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element.</p>
`},{name:"icon",description:`<p>Icon.</p>
`},{name:"selected-icon",description:`<p>Icon in the selected state.</p>
`},{name:"loading",description:`<p>The <code>&lt;mdui-circular-progress&gt;</code> element for the loading state.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
