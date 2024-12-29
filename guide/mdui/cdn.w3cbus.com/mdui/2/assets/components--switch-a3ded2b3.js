const e={docsHtml:`<p>The Switch component is utilized to toggle the state of a single setting between on and off.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/switch.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Switch } from &#39;mdui/components/switch.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-switch&gt;&lt;/mdui-switch&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-checked">
                  <a href="#example-checked">Checked State</a>
                </h3>
<p>The <code>checked</code> attribute indicates whether the switch is on or off. To set the switch to the on state by default, add the <code>checked</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch checked&gt;&lt;/mdui-switch&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>The <code>disabled</code> attribute can be used to disable the switch.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch disabled&gt;&lt;/mdui-switch&gt;
&lt;mdui-switch disabled checked&gt;&lt;/mdui-switch&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>The <code>unchecked-icon</code> and <code>checked-icon</code> attributes can be used to set the Material Icons for the unchecked and checked states, respectively. Alternatively, the <code>unchecked-icon</code> and <code>checked-icon</code> slots can be used to set the icons for the unchecked and checked states.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch unchecked-icon=&quot;remove_moderator&quot; checked-icon=&quot;verified_user&quot;&gt;&lt;/mdui-switch&gt;
&lt;mdui-switch&gt;
  &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;remove_moderator&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;verified_user&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-switch&gt;
</code></pre>
`,elements:[{name:"Switch",tagName:"mdui-switch",summary:`<p>Switch Component.</p>
<pre><code class="language-html">&lt;mdui-switch&gt;&lt;/mdui-switch&gt;
</code></pre>
`,attributes:[{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the switch.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"checked",propertyName:"checked",reflect:!0,description:`<p>Sets the switch to the checked state.</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"defaultChecked",reflect:!1,description:`<p>The default checked state. The switch resets to this state when the form is reset. This can only be set via a JavaScript property.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"unchecked-icon",propertyName:"uncheckedIcon",reflect:!0,description:`<p>The Material Icons name for the unchecked state. Alternatively, use <code>slot=&quot;unchecked-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"checked-icon",propertyName:"checkedIcon",reflect:!0,description:`<p>The Material Icons name for the checked state. Alternatively, use <code>slot=&quot;checked-icon&quot;</code>. Defaults to the <code>check</code> icon; an empty string removes the default icon.</p>
`,type:"string",enum:[]},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>The switch must be checked when submitting the form.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the switch with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the switch is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows switch elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>The name of the switch, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the switch, which is submitted with form data.</p>
`,type:"string",enum:[],default:"'on'"},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the switch gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the switch loses focus.</p>
`},{name:"change",description:`<p>Emitted when the checked state changes.</p>
`},{name:"input",description:`<p>Emitted when the checked state changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"unchecked-icon",description:`<p>Element for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Element for the checked state.</p>
`}],cssParts:[{name:"track",description:`<p>Track.</p>
`},{name:"thumb",description:`<p>Icon container.</p>
`},{name:"unchecked-icon",description:`<p>Icon for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Icon for the checked state.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The corner size of the track. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--shape-corner-thumb",description:`<p>The corner size of the icon container. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
