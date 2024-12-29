const e={docsHtml:`<p>The segmented button group is a component that encapsulates a set of buttons. It is used to provide options, switch views, or sort elements.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/segmented-button-group.js&#39;;
import &#39;mdui/components/segmented-button.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { SegmentedButtonGroup } from &#39;mdui/components/segmented-button-group.js&#39;;
import type { SegmentedButton } from &#39;mdui/components/segmented-button.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-segmented-button-group&gt;
  &lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-full-width">
                  <a href="#example-full-width">Full Width</a>
                </h3>
<p>To make the component take up the full width of its container, add the <code>full-width</code> attribute to the <code>&lt;mdui-segmented-button-group&gt;</code> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group full-width&gt;
  &lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<h3 id="example-selects-single">
                  <a href="#example-selects-single">Single Selection</a>
                </h3>
<p>To enable single selection mode, set the <code>selects</code> attribute of the <code>&lt;mdui-segmented-button-group&gt;</code> component to <code>single</code>. In this mode, the <code>value</code> property of <code>&lt;mdui-segmented-button-group&gt;</code> reflects the <code>value</code> property of the currently selected <code>&lt;mdui-segmented-button&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group selects=&quot;single&quot;&gt;
  &lt;mdui-segmented-button value=&quot;day&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;week&quot;&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;month&quot;&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;

&lt;mdui-segmented-button-group selects=&quot;single&quot; value=&quot;week&quot;&gt;
  &lt;mdui-segmented-button value=&quot;day&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;week&quot;&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;month&quot;&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<h3 id="example-selects-multiple">
                  <a href="#example-selects-multiple">Multiple Selection</a>
                </h3>
<p>To enable multiple selection mode, set the <code>selects</code> attribute of the <code>&lt;mdui-segmented-button-group&gt;</code> component to <code>multiple</code>. In this mode, the <code>value</code> property of <code>&lt;mdui-segmented-button-group&gt;</code> is an array consisting of the <code>value</code> properties of the currently selected <code>&lt;mdui-segmented-button&gt;</code> components.</p>
<p>Note that when supporting multiple selection, the <code>value</code> property of <code>&lt;mdui-segmented-button-group&gt;</code> is an array, and it can only be read and set through JavaScript property.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group selects=&quot;multiple&quot;&gt;
  &lt;mdui-segmented-button value=&quot;day&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;week&quot;&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;month&quot;&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;

&lt;mdui-segmented-button-group selects=&quot;multiple&quot; class=&quot;demo-multiple&quot;&gt;
  &lt;mdui-segmented-button value=&quot;day&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;week&quot;&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;month&quot;&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;

&lt;script&gt;
  // Set the default selection to week and month
  const group = document.querySelector(&quot;.demo-multiple&quot;);
  group.value = [&quot;week&quot;, &quot;month&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>To add Material Icons on the left and right sides of the button, use the <code>icon</code> and <code>end-icon</code> attributes on the <code>&lt;mdui-segmented-button&gt;</code> element. Alternatively, use the <code>icon</code> and <code>end-icon</code> slots to add elements on the left and right sides of the button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group&gt;
  &lt;mdui-segmented-button icon=&quot;search&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button end-icon=&quot;arrow_forward&quot;&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;
    Month
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;downloading&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;end-icon&quot; name=&quot;attach_file&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<p>To set the Material Icon for the selected state, use the <code>selected-icon</code> attribute on the <code>&lt;mdui-segmented-button&gt;</code> element. Alternatively, use the <code>selected-icon</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group selects=&quot;multiple&quot;&gt;
  &lt;mdui-segmented-button value=&quot;day&quot; selected-icon=&quot;cloud_done&quot;&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;week&quot;&gt;
    &lt;mdui-icon slot=&quot;selected-icon&quot; name=&quot;cloud_done&quot;&gt;&lt;/mdui-icon&gt;
    Week
  &lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>To turn the button into a link, use the <code>href</code> attribute on the <code>&lt;mdui-segmented-button&gt;</code> component. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group&gt;
  &lt;mdui-segmented-button href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Link&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled and Loading States</a>
                </h3>
<p>To disable the entire segmented button group, add the <code>disabled</code> attribute to the <code>&lt;mdui-segmented-button-group&gt;</code> element.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group disabled&gt;
  &lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
<p>To disable specific buttons, add the <code>disabled</code> attribute to the <code>&lt;mdui-segmented-button&gt;</code> element. To make a button enter the loading state, add the <code>loading</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-segmented-button-group&gt;
  &lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button disabled&gt;Week&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button loading&gt;Month&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button disabled loading&gt;Year&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
`,elements:[{name:"SegmentedButtonGroup",tagName:"mdui-segmented-button-group",summary:`<p>Segmented Button Group Component. It should be used in conjunction with the <code>&lt;mdui-segmented-button&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-segmented-button-group&gt;
..&lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
..&lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
..&lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
`,attributes:[{attributeName:"full-width",propertyName:"fullWidth",reflect:!0,description:`<p>If set, the segmented button group will fill the width of its parent element.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"selects",propertyName:"selects",reflect:!0,description:`<p>Defines selectable states. Default is non-selectable. Possible values:</p>
<ul>
<li><code>single</code>: Only one can be selected.</li>
<li><code>multiple</code>: Multiple selections are allowed.</li>
</ul>
`,type:"'single' | 'multiple'",enum:["'single'","'multiple'"]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the segmented button group when set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>Requires a selection when the form is submitted.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the segmented button group with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the segmented button group is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows segmented button group elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>The name of the segmented button group, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>The value of the selected <code>&lt;mdui-segmented-button&gt;</code>. This value is submitted with form data.</p>
<p>Note: The HTML attribute is always a string and can only be set as an initial value when <code>selects=&quot;single&quot;</code>. The JavaScript property is a string when <code>selects=&quot;single&quot;</code> and an array of strings when <code>selects=&quot;multiple&quot;</code>. In <code>selects=&quot;multiple&quot;</code>, this value can only be modified by changing the JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>The default selected value. Resets to this state when the form is reset. This value can only be set via JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]}],methods:[{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"change",description:`<p>Emitted when the selected value changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-segmented-button&gt;</code> elements.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]},{name:"SegmentedButton",tagName:"mdui-segmented-button",summary:`<p>Segmented Button Component. It should be used in conjunction with the <code>&lt;mdui-segmented-button-group&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-segmented-button-group&gt;
..&lt;mdui-segmented-button&gt;Day&lt;/mdui-segmented-button&gt;
..&lt;mdui-segmented-button&gt;Week&lt;/mdui-segmented-button&gt;
..&lt;mdui-segmented-button&gt;Month&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Specifies the Material Icons name for the left icon. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the right icon. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"selected-icon",propertyName:"selectedIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the selected state. Alternatively, use <code>slot=&quot;selected-icon&quot;</code>.</p>
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
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the segmented button gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the segmented button loses focus.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"",description:`<p>Text content.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"selected-icon",description:`<p>Icon for the selected state.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`}],cssParts:[{name:"button",description:`<p>Internal <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"selected-icon",description:`<p>Icon for the selected state.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"label",description:`<p>Text content.</p>
`},{name:"loading",description:`<p>The <code>&lt;mdui-circular-progress&gt;</code> element for the loading state.</p>
`}],cssProperties:[]}]};export{e as default};
