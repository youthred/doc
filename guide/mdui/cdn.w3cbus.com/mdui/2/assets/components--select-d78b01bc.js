const e={docsHtml:`<p>The Select component is designed to present a list of options in a dropdown menu.</p>
<p>This guide focuses on the usage of the <code>&lt;mdui-select&gt;</code> component. For information on dropdown menu items, please refer to the <a href="https://cdn.w3cbus.com/en/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a> section.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/select.js&#39;;
import &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Select } from &#39;mdui/components/select.js&#39;;
import type { MenuItem } from &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variants</a>
                </h3>
<p>The <code>variant</code> attribute allows you to modify the shape of the select.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select variant=&quot;filled&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-select variant=&quot;outlined&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-multiple">
                  <a href="#example-multiple">Multiple Selection</a>
                </h3>
<p>By default, the component is set to single-select. The <code>value</code> of the <code>&lt;mdui-select&gt;</code> component corresponds to the <code>value</code> of the currently selected <a href="https://cdn.w3cbus.com/en/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a>.</p>
<p>To enable multi-select, add the <code>multiple</code> attribute. In this case, the <code>value</code> of <code>&lt;mdui-select&gt;</code> becomes an array containing the <code>value</code> properties of the currently selected <a href="https://cdn.w3cbus.com/en/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a> components.</p>
<p>Note: When multiple selections are enabled, the <code>value</code> of <code>&lt;mdui-select&gt;</code> is an array. This value can only be read and set using JavaScript properties.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select multiple class=&quot;example-multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;script&gt;
  // Set default selection to item-1 and item-2
  const select = document.querySelector(&quot;.example-multiple&quot;);
  select.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-helper-text">
                  <a href="#example-helper-text">Helper Text</a>
                </h3>
<p>The <code>label</code> attribute allows you to display label text above the select.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select label=&quot;Text Field&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>The <code>placeholder</code> attribute allows you to display placeholder text when no value is selected.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select placeholder=&quot;Placeholder&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>The <code>helper</code> attribute allows you to display helper text at the bottom of the select. Alternatively, use the <code>helper</code> slot to set helper text.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select helper=&quot;Supporting text&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-select&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;span slot=&quot;helper&quot; style=&quot;color: blue&quot;&gt;Supporting text&lt;/span&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-readonly">
                  <a href="#example-readonly">Read-Only State</a>
                </h3>
<p>To make the select read-only, add the <code>readonly</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select readonly value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>To disable the select, add the <code>disabled</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select disabled value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-clearable">
                  <a href="#example-clearable">Clearable</a>
                </h3>
<p>The <code>clearable</code> attribute adds a clear button on the right when the select has a value.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select clearable value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>You can customize the clear button using the <code>clear</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select clearable value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-icon slot=&quot;clear&quot; name=&quot;delete&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Dropdown Menu Position</a>
                </h3>
<p>You can set the dropdown menu position using the <code>placement</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select placement=&quot;top&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-end-aligned">
                  <a href="#example-end-aligned">Text Alignment</a>
                </h3>
<p>To align the text to the right, add the <code>end-aligned</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select end-aligned value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-prefix-suffix">
                  <a href="#example-prefix-suffix">Prefix, Suffix, and Icons</a>
                </h3>
<p>You can add Material Icons to the left and right of the select by setting the <code>icon</code> and <code>end-icon</code> attributes. Alternatively, use the <code>icon</code> and <code>end-icon</code> slots to add elements to the select.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select value=&quot;item-1&quot; icon=&quot;search&quot; end-icon=&quot;mic&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-button-icon slot=&quot;icon&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon slot=&quot;end-icon&quot; icon=&quot;mic&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>You can add text to the left and right of the select by setting the <code>prefix</code> and <code>suffix</code> attributes. Alternatively, use the <code>prefix</code> and <code>suffix</code> slots to add text elements. This text is displayed when the select is focused or has a value.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select value=&quot;item-1&quot; prefix=&quot;$&quot; suffix=&quot;/100&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;span slot=&quot;prefix&quot; style=&quot;color: blue&quot;&gt;$&lt;/span&gt;
  &lt;span slot=&quot;suffix&quot; style=&quot;color: blue&quot;&gt;/100&lt;/span&gt;
&lt;/mdui-select&gt;
</code></pre>
`,elements:[{name:"Select",tagName:"mdui-select",summary:`<p>Select Component. It should be used in conjunction with the <code>&lt;mdui-menu-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-select&gt;
..&lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the select style. Possible values:</p>
<ul>
<li><code>filled</code>: Solid background, strong visual emphasis.</li>
<li><code>outlined</code>: Bordered, less visual emphasis.</li>
</ul>
`,type:"'filled' | 'outlined'",enum:["'filled'","'outlined'"],default:"'filled'"},{attributeName:"multiple",propertyName:"multiple",reflect:!0,description:`<p>Enables multiple selections.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>Name of the select, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>Value of the select, which is submitted with form data.</p>
<p>If <code>multiple</code> is not set, the value is a string; if set, it&#39;s an array of strings. HTML attributes can only set string values; array values must be set via JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>Default selected value. Resets to this value when form is reset. Can only be set via JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>Label text.</p>
`,type:"string",enum:[]},{attributeName:"placeholder",propertyName:"placeholder",reflect:!0,description:`<p>Placeholder text.</p>
`,type:"string",enum:[]},{attributeName:"helper",propertyName:"helper",reflect:!0,description:`<p>Helper text displayed below the select. Alternatively, use <code>slot=&quot;helper&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"clearable",propertyName:"clearable",reflect:!0,description:`<p>Allows the select to be cleared.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clear-icon",propertyName:"clearIcon",reflect:!0,description:`<p>Material Icons name for the clear button displayed on the right of the select when clearable. Alternatively, use <code>slot=&quot;clear-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Select placement. Possible values:</p>
<ul>
<li><code>auto</code>: Automatically determined.</li>
<li><code>bottom</code>: Below the input.</li>
<li><code>top</code>: Above the input.</li>
</ul>
`,type:"'auto' | 'bottom' | 'top'",enum:["'auto'","'bottom'","'top'"],default:"'auto'"},{attributeName:"end-aligned",propertyName:"endAligned",reflect:!0,description:`<p>Aligns text to the right.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"prefix",propertyName:"prefix",reflect:!0,description:`<p>Prefix text of the select. Displayed only when the select is focused or has a value. Alternatively, use <code>slot=&quot;prefix&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"suffix",propertyName:"suffix",reflect:!0,description:`<p>Suffix text of the select. Displayed only when the select is focused or has a value. Alternatively, use <code>slot=&quot;suffix&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Material Icons name for the prefix icon. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Material Icons name for the suffix icon. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"error-icon",propertyName:"errorIcon",reflect:!0,description:`<p>Material Icons name displayed on the right when form field validation fails. Alternatively, use <code>slot=&quot;error-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the select with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the select is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows select elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"readonly",propertyName:"readonly",reflect:!0,description:`<p>Makes the select read-only.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the select.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>Requires a selection when the form is submitted.</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the select gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the select loses focus.</p>
`},{name:"change",description:`<p>Emitted when the selected value changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`},{name:"clear",description:`<p>Emitted when the clear button is clicked. Can be prevented with <code>event.preventDefault()</code>.</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-menu-item&gt;</code> elements.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"error-icon",description:`<p>Right icon when validation fails.</p>
`},{name:"prefix",description:`<p>Left text.</p>
`},{name:"suffix",description:`<p>Right text.</p>
`},{name:"clear-button",description:`<p>Clear button.</p>
`},{name:"clear-icon",description:`<p>Icon in the clear button.</p>
`},{name:"helper",description:`<p>Bottom helper text.</p>
`}],cssParts:[{name:"chips",description:`<p>Container for option chips when <code>multiple</code> is enabled.</p>
`},{name:"chip",description:`<p>Individual chip representing each multiselect option.</p>
`},{name:"chip__button",description:`<p>The <code>&lt;button&gt;</code> element within the chip.</p>
`},{name:"chip__label",description:`<p>Text part of the chip.</p>
`},{name:"chip__delete-icon",description:`<p>Delete icon within the chip.</p>
`},{name:"text-field",description:`<p>Text field, i.e., <a href="https://cdn.w3cbus.com/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> element.</p>
`},{name:"text-field__container",description:`<p>Container for the text field.</p>
`},{name:"text-field__icon",description:`<p>Icon within the text field.</p>
`},{name:"text-field__end-icon",description:`<p>Right-side icon within the text field.</p>
`},{name:"text-field__error-icon",description:`<p>Icon displayed in the text field upon validation failure.</p>
`},{name:"text-field__prefix",description:`<p>Text on the left side of the text field.</p>
`},{name:"text-field__suffix",description:`<p>Text on the right side of the text field.</p>
`},{name:"text-field__label",description:`<p>Label text displayed above the text field.</p>
`},{name:"text-field__input",description:`<p>The <code>&lt;input&gt;</code> element within the text field.</p>
`},{name:"text-field__clear-button",description:`<p>Clear button within the text field.</p>
`},{name:"text-field__clear-icon",description:`<p>Icon within the clear button of the text field.</p>
`},{name:"text-field__supporting",description:`<p>Container for supporting information at the bottom of the text field, including helper and error messages.</p>
`},{name:"text-field__helper",description:`<p>Helper text displayed at the bottom of the text field.</p>
`},{name:"text-field__error",description:`<p>Error message displayed at the bottom of the text field.</p>
`},{name:"menu",description:`<p>Dropdown menu, i.e., <a href="https://cdn.w3cbus.com/docs/2/components/menu"><code>&lt;mdui-menu&gt;</code></a> element.</p>
`}],cssProperties:[]}]};export{e as default};
