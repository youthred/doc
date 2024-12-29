const e={docsHtml:`<p>The radio group component is designed for selecting a single option from a set of options.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/radio-group.js&#39;;
import &#39;mdui/components/radio.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { RadioGroup } from &#39;mdui/components/radio-group.js&#39;;
import type { Radio } from &#39;mdui/components/radio.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-checked">
                  <a href="#example-checked">Checked State</a>
                </h3>
<p>The <code>value</code> property of the <code>&lt;mdui-radio-group&gt;</code> component corresponds to the <code>value</code> of the currently selected <code>&lt;mdui-radio&gt;</code> component. You can change the selected radio button by updating the <code>value</code> property of the <code>&lt;mdui-radio-group&gt;</code> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<p>The <code>&lt;mdui-radio&gt;</code> component can also be used independently. In this case, use the <code>checked</code> property to access and modify the checked state.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio checked&gt;Radio&lt;/mdui-radio&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>To disable the entire radio group, add the <code>disabled</code> attribute to the <code>&lt;mdui-radio-group&gt;</code> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group disabled&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<p>To disable a specific radio button, add the <code>disabled</code> attribute to the <code>&lt;mdui-radio&gt;</code> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot; disabled&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>You can set Material Icons for the unchecked and checked states of the radio button using the <code>unchecked-icon</code> and <code>checked-icon</code> attributes, respectively. Alternatively, you can use the <code>unchecked-icon</code> and <code>checked-icon</code> slots.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio
    unchecked-icon=&quot;check_box_outline_blank&quot;
    checked-icon=&quot;lock&quot;
    value=&quot;chinese&quot;
  &gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;
    &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;check_box_outline_blank&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;lock&quot;&gt;&lt;/mdui-icon&gt;
    English
  &lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,elements:[{name:"RadioGroup",tagName:"mdui-radio-group",summary:`<p>Radio Group Component. It should be used in conjunction with the <code>&lt;mdui-radio&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
..&lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
..&lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,attributes:[{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the radio group when set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the radio group with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the radio group is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows radio group elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>The name of the radio group, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the selected radio button, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>The default selected value. Resets to this value when form is reset. This value can only be set via JavaScript property.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>Requires a radio selection when the form is submitted.</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]}],methods:[{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"change",description:`<p>Emitted when the selected value changes.</p>
`},{name:"input",description:`<p>Emitted when the selected value changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-radio&gt;</code> elements.</p>
`}],cssParts:[],cssProperties:[]},{name:"Radio",tagName:"mdui-radio",summary:`<p>Radio Component. It should be used in conjunction with the <code>&lt;mdui-radio-group&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
..&lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
..&lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Specifies the value of the radio.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the radio when set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"checked",propertyName:"checked",reflect:!0,description:`<p>Sets the radio to the checked state.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"unchecked-icon",propertyName:"uncheckedIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the unchecked state. Alternatively, use <code>slot=&quot;unchecked-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"checked-icon",propertyName:"checkedIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the checked state. Alternatively, use <code>slot=&quot;checked-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the radio gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the radio loses focus.</p>
`},{name:"change",description:`<p>Emitted when the radio is selected.</p>
`}],slots:[{name:"",description:`<p>Text content.</p>
`},{name:"unchecked-icon",description:`<p>Icon for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Icon for the checked state.</p>
`}],cssParts:[{name:"control",description:`<p>Container for the left icon.</p>
`},{name:"unchecked-icon",description:`<p>Icon for the unchecked state.</p>
`},{name:"checked-icon",description:`<p>Icon for the checked state.</p>
`},{name:"label",description:`<p>Text content.</p>
`}],cssProperties:[]}]};export{e as default};
