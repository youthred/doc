const e={docsHtml:`<p>The Range Slider component allows users to select a range from a series of values.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/range-slider.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { RangeSlider } from &#39;mdui/components/range-slider.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-range-slider&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">Default Value</a>
                </h3>
<p>The <code>value</code> property represents the current value of the range slider. You can set the range slider&#39;s value by updating the <code>value</code> property. Note that the <code>value</code> property is an array and can only be accessed and modified through JavaScript property.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider class=&quot;example-value&quot;&gt;&lt;/mdui-range-slider&gt;

&lt;script&gt;
  const slider = document.querySelector(&quot;.example-value&quot;);
  slider.value = [30, 70];
&lt;/script&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>The range slider can be disabled by adding the <code>disabled</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider disabled&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h3 id="example-min-max">
                  <a href="#example-min-max">Range</a>
                </h3>
<p>The <code>min</code> and <code>max</code> attributes allow you to set the minimum and maximum values of the range slider.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider min=&quot;10&quot; max=&quot;20&quot;&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h3 id="example-step">
                  <a href="#example-step">Step Interval</a>
                </h3>
<p>The <code>step</code> attribute defines the interval of the range slider.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider step=&quot;10&quot;&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h3 id="example-tickmarks">
                  <a href="#example-tickmarks">Tickmarks</a>
                </h3>
<p>Tickmarks can be displayed on the range slider by adding the <code>tickmarks</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider tickmarks step=&quot;10&quot;&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h3 id="example-nolabel">
                  <a href="#example-nolabel">Hide Tooltip</a>
                </h3>
<p>The tooltip on the range slider can be hidden by adding the <code>nolabel</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider nolabel&gt;&lt;/mdui-range-slider&gt;
</code></pre>
<h3 id="example-labelFormatter">
                  <a href="#example-labelFormatter">Modify Tooltip</a>
                </h3>
<p>The <code>labelFormatter</code> property allows you to customize the display format of the tooltip. This property is a function that takes the current value of the range slider as a parameter and returns the text you want to display.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-range-slider class=&quot;example-label-formatter&quot;&gt;&lt;/mdui-range-slider&gt;

&lt;script&gt;
  const slider = document.querySelector(&quot;.example-label-formatter&quot;);
  slider.labelFormatter = (value) =&gt; \`\${value} hours\`;
&lt;/script&gt;
</code></pre>
`,elements:[{name:"RangeSlider",tagName:"mdui-range-slider",summary:`<p>Range Slider Component.</p>
<pre><code class="language-html">&lt;mdui-range-slider&gt;&lt;/mdui-range-slider&gt;
</code></pre>
`,attributes:[{propertyName:"defaultValue",reflect:!1,description:`<p>Specifies the default value. Resets to this state when the form is reset. This value can only be set via JavaScript property.</p>
`,type:"number[]",enum:[],default:"[]"},{propertyName:"value",reflect:!1,description:`<p>Specifies the slider value in array format. This value is submitted with form data. It can&#39;t be set with HTML attributes initially, only via JavaScript property.</p>
`,type:"number[]",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]},{attributeName:"min",propertyName:"min",reflect:!0,description:`<p>Specifies the minimum value. Default is <code>0</code>.</p>
`,type:"number",enum:[],default:"0"},{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>Specifies the maximum value. Default is <code>100</code>.</p>
`,type:"number",enum:[],default:"100"},{attributeName:"step",propertyName:"step",reflect:!0,description:`<p>Specifies the step interval. Default is <code>1</code>.</p>
`,type:"number",enum:[],default:"1"},{attributeName:"tickmarks",propertyName:"tickmarks",reflect:!0,description:`<p>Adds tickmarks to the slider.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"nolabel",propertyName:"nolabel",reflect:!0,description:`<p>Hides the tooltip.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the slider.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the slider with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the slider is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows slider elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>Specifies the slider&#39;s name, which is submitted with the form data.</p>
`,type:"string",enum:[],default:"''"},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]},{propertyName:"labelFormatter",reflect:!1,description:`<p>Specifies a function to format the tooltip&#39;s value. The function should take the slider&#39;s value as an argument and return a string to display in the tooltip.</p>
`,type:"(value: number) => string",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}},{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the range slider gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the range slider loses focus.</p>
`},{name:"change",description:`<p>Emitted when the value changes and the range slider loses focus.</p>
`},{name:"input",description:`<p>Emitted when the value changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`}],slots:[],cssParts:[{name:"track-inactive",description:`<p>Track for the inactive state.</p>
`},{name:"track-active",description:`<p>Track for the active state.</p>
`},{name:"handle",description:`<p>Handle for interaction.</p>
`},{name:"label",description:`<p>Tooltip text.</p>
`},{name:"tickmark",description:`<p>Tick mark.</p>
`}],cssProperties:[]}]};export{e as default};
