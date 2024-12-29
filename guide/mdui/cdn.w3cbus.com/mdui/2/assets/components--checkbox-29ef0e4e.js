const e={docsHtml:`<p>Checkboxes allow users to select one or more options from a set. Each checkbox can toggle between checked and unchecked states.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/checkbox.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Checkbox } from &#39;mdui/components/checkbox.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-checkbox&gt;Checkbox&lt;/mdui-checkbox&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-checked">
                  <a href="#example-checked">Checked State</a>
                </h3>
<p>The <code>checked</code> property is <code>true</code> when the checkbox is checked. Add the <code>checked</code> attribute to set the checkbox to the checked state by default.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-checkbox checked&gt;Checkbox&lt;/mdui-checkbox&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>Use the <code>disabled</code> attribute to disable the checkbox.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-checkbox disabled&gt;Checkbox&lt;/mdui-checkbox&gt;
&lt;mdui-checkbox disabled checked&gt;Checkbox&lt;/mdui-checkbox&gt;
</code></pre>
<h3 id="example-indeterminate">
                  <a href="#example-indeterminate">Indeterminate State</a>
                </h3>
<p>The <code>indeterminate</code> attribute indicates an indeterminate state for the checkbox.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-checkbox indeterminate&gt;Checkbox&lt;/mdui-checkbox&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>Use the <code>unchecked-icon</code>, <code>checked-icon</code>, and <code>indeterminate-icon</code> attributes to set Material Icons for the checkbox in unchecked, checked, and indeterminate states, respectively. Alternatively, use the corresponding slots for setting icons.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-checkbox
  unchecked-icon=&quot;radio_button_unchecked&quot;
  checked-icon=&quot;check_circle&quot;
  indeterminate-icon=&quot;playlist_add_check_circle&quot;
&gt;Checkbox&lt;/mdui-checkbox&gt;

&lt;mdui-checkbox
  indeterminate
  unchecked-icon=&quot;radio_button_unchecked&quot;
  checked-icon=&quot;check_circle&quot;
  indeterminate-icon=&quot;playlist_add_check_circle&quot;
&gt;Checkbox&lt;/mdui-checkbox&gt;

&lt;br/&gt;

&lt;mdui-checkbox&gt;
  &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;radio_button_unchecked&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;check_circle&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;indeterminate-icon&quot; name=&quot;playlist_add_check_circle&quot;&gt;&lt;/mdui-icon&gt;
  Checkbox
&lt;/mdui-checkbox&gt;

&lt;mdui-checkbox indeterminate&gt;
  &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;radio_button_unchecked&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;check_circle&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;indeterminate-icon&quot; name=&quot;playlist_add_check_circle&quot;&gt;&lt;/mdui-icon&gt;
  Checkbox
&lt;/mdui-checkbox&gt;
</code></pre>
`,elements:[{name:"Checkbox",tagName:"mdui-checkbox",summary:`<p>Checkbox Component.</p>
<pre><code class="language-html">&lt;mdui-checkbox&gt;Checkbox&lt;/mdui-checkbox&gt;
</code></pre>
`,attributes:[{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Dsiables the checkbox.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"checked",propertyName:"checked",reflect:!0,description:`<p>Sets the checkbox to the checked state.</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"defaultChecked",reflect:!1,description:`<p>Sets the default checked state. Resets to this state when the form is reset. Can only be set via JavaScript property.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"indeterminate",propertyName:"indeterminate",reflect:!0,description:`<p>Sets the checkbox to an indeterminate state.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>Requires the checkbox to be checked for form submission.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the checkbox with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the checkbox is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows checkbox elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>Sets the checkbox&#39;s name, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Sets the checkbox&#39;s value, which is submitted with form data.</p>
`,type:"string",enum:[],default:"'on'"},{attributeName:"unchecked-icon",propertyName:"uncheckedIcon",reflect:!0,description:`<p>Sets the Material Icons name for the unchecked state. Alternatively, use <code>slot=&quot;unchecked-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"checked-icon",propertyName:"checkedIcon",reflect:!0,description:`<p>Sets the Material Icons name for the checked state. Alternatively, use <code>slot=&quot;checked-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"indeterminate-icon",propertyName:"indeterminateIcon",reflect:!0,description:`<p>Sets the Material Icons name for the indeterminate state. Alternatively, use <code>slot=&quot;indeterminate-icon&quot;</code>.</p>
`,type:"string",enum:[]},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the checkbox gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the checkbox loses focus.</p>
`},{name:"change",description:`<p>Emitted when the checked state changes.</p>
`},{name:"input",description:`<p>Emitted when the checked state changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"",description:`<p>Text.</p>
`},{name:"unchecked-icon",description:`<p>Icon for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Icon for the checked state.</p>
`},{name:"indeterminate-icon",description:`<p>Icon for the indeterminate state.</p>
`}],cssParts:[{name:"control",description:`<p>Container for the left icon.</p>
`},{name:"unchecked-icon",description:`<p>Icon for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Icon for the checked state.</p>
`},{name:"indeterminate-icon",description:`<p>Icon for the indeterminate state.</p>
`},{name:"label",description:`<p>Text.</p>
`}],cssProperties:[]}]};export{e as default};
