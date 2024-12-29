const e={docsHtml:`<p>Text fields, typically used in forms and dialogs, allow users to input text.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/text-field.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { TextField } from &#39;mdui/components/text-field.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variant</a>
                </h3>
<p>The <code>variant</code> attribute modifies the shape of the text field.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field variant=&quot;filled&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field variant=&quot;outlined&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-helper-text">
                  <a href="#example-helper-text">Helper Text</a>
                </h3>
<p>The <code>label</code> attribute sets the label text above the text field.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>The <code>placeholder</code> attribute sets the placeholder text when there is no value.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot; placeholder=&quot;Placeholder&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>The <code>helper</code> attribute or <code>helper</code> slot sets the helper text at the bottom of the text field. To display the helper text only when the input is focused, use the <code>helper-on-focus</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot; helper=&quot;Supporting text&quot;&gt;&lt;/mdui-text-field&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;span slot=&quot;helper&quot; style=&quot;color: blue&quot;&gt;Supporting text&lt;/span&gt;
&lt;/mdui-text-field&gt;

&lt;mdui-text-field label=&quot;Text Field&quot; helper=&quot;Supporting text&quot; helper-on-focus&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-clearable">
                  <a href="#example-clearable">Clearable</a>
                </h3>
<p>The <code>clearable</code> attribute adds a clear button on the right when the text field has a value.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field clearable label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-end-aligned">
                  <a href="#example-end-aligned">End-Aligned Text</a>
                </h3>
<p>The <code>end-aligned</code> attribute aligns the text to the right.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field end-aligned label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-prefix-suffix">
                  <a href="#example-prefix-suffix">Prefix, Suffix, Icons</a>
                </h3>
<p>The <code>icon</code> and <code>end-icon</code> attributes or slots add Material Icons to the left and right of the text field, respectively.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field icon=&quot;search&quot; end-icon=&quot;mic&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;mdui-button-icon slot=&quot;icon&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon slot=&quot;end-icon&quot; icon=&quot;mic&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-text-field&gt;
</code></pre>
<p>The <code>prefix</code> and <code>suffix</code> attributes or slots add text to the left and right of the text field. This text is displayed only when the text field is focused or has a value.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field prefix=&quot;$&quot; suffix=&quot;/100&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;span slot=&quot;prefix&quot; style=&quot;color: blue&quot;&gt;$&lt;/span&gt;
  &lt;span slot=&quot;suffix&quot; style=&quot;color: blue&quot;&gt;/100&lt;/span&gt;
&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-readonly">
                  <a href="#example-readonly">Readonly</a>
                </h3>
<p>The <code>readonly</code> attribute makes the text field read-only.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field readonly label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled</a>
                </h3>
<p>The <code>disabled</code> attribute disables the text field.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field disabled label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-rows">
                  <a href="#example-rows">Multi-line Text Field</a>
                </h3>
<p>The <code>rows</code> attribute sets the number of rows for a multi-line text field.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field rows=&quot;3&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>To automatically adjust the height of the text field based on the length of the input, use the <code>autosize</code> attribute. The <code>min-rows</code> and <code>max-rows</code> attributes specify the minimum and maximum number of rows.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field autosize label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field autosize min-rows=&quot;2&quot; max-rows=&quot;5&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-counter">
                  <a href="#example-counter">Character Counter</a>
                </h3>
<p>The <code>maxlength</code> attribute sets the maximum number of characters for the text field. To display a character counter below the text field, use the <code>counter</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field maxlength=&quot;20&quot; counter label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-password">
                  <a href="#example-password">Password Field</a>
                </h3>
<p>For password fields (<code>type=&quot;password&quot;</code>), the <code>toggle-password</code> attribute adds a button on the right to toggle the visibility of the password.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field type=&quot;password&quot; toggle-password label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
`,elements:[{name:"TextField",tagName:"mdui-text-field",summary:`<p>Text Field Component.</p>
<pre><code class="language-html">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the text field style. Default is <code>filled</code>. Possible values:</p>
<ul>
<li><code>filled</code>: Text field with background color, providing a stronger visual effect.</li>
<li><code>outlined</code>: Text field with border, providing a subtler visual effect.</li>
</ul>
`,type:"'filled' | 'outlined'",enum:["'filled'","'outlined'"],default:"'filled'"},{attributeName:"type",propertyName:"type",reflect:!0,description:`<p>Specifies the text field type. Default is <code>text</code>. Possible values:</p>
<ul>
<li><code>text</code>: Standard text field.</li>
<li><code>number</code>: Allows only numeric input. Devices with dynamic keyboards will display a numeric keyboard.</li>
<li><code>password</code>: Masks the input for password confidentiality.</li>
<li><code>url</code>: Validates URL format. Devices with dynamic keyboards will display a URL-specific keyboard.</li>
<li><code>email</code>: Validates email format. Devices with dynamic keyboards will display an email-specific keyboard.</li>
<li><code>search</code>: Changes the enter icon to a search icon on devices with dynamic keyboards.</li>
<li><code>tel</code>: Displays a phone number keyboard on devices with dynamic keyboards.</li>
<li><code>hidden</code>: Hides the control, but its value will still be submitted to the server.</li>
<li><code>date</code>: Activates a date picker or a numeric scroll wheel for year, month, and day in supported browsers.</li>
<li><code>datetime-local</code>: Activates a date and time picker in supported browsers, excluding time zone.</li>
<li><code>month</code>: Allows input for year and month, excluding time zone.</li>
<li><code>time</code>: Allows time input, excluding time zone.</li>
<li><code>week</code>: Allows input for dates consisting of a year and week, excluding time zone.</li>
</ul>
`,type:"'text' | 'number' | 'password' | 'url' | 'email' | 'search' | 'tel' | 'hidden' | 'date' | 'datetime-local' | 'month' | 'time' | 'week'",enum:["'text'","'number'","'password'","'url'","'email'","'search'","'tel'","'hidden'","'date'","'datetime-local'","'month'","'time'","'week'"],default:"'text'"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>The name of text field, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>The value of text field, which is submitted with form data.</p>
`,type:"string",enum:[],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>The default value. The text field resets to this value on form reset. This can only be set via the JavaScript property.</p>
`,type:"string",enum:[],default:"''"},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>Label text.</p>
`,type:"string",enum:[]},{attributeName:"placeholder",propertyName:"placeholder",reflect:!0,description:`<p>Placeholder text.</p>
`,type:"string",enum:[]},{attributeName:"helper",propertyName:"helper",reflect:!0,description:`<p>The helper text displayed at the bottom of the text field. Alternatively, use <code>slot=&quot;helper&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"helper-on-focus",propertyName:"helperOnFocus",reflect:!0,description:`<p>If set, the helper text is only displayed when the text field is focused.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clearable",propertyName:"clearable",reflect:!0,description:`<p>If set, the text field can be cleared.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clear-icon",propertyName:"clearIcon",reflect:!0,description:`<p>Material Icons name displayed on the right when the text field is clearable. Alternatively, use <code>slot=&quot;clear-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-aligned",propertyName:"endAligned",reflect:!0,description:`<p>Aligns the text to the right.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"prefix",propertyName:"prefix",reflect:!0,description:`<p>The prefix text for the text field. It is only displayed when the text field is focused or has a value. Alternatively, use <code>slot=&quot;prefix&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"suffix",propertyName:"suffix",reflect:!0,description:`<p>The suffix text for the text field. It is only displayed when the text field is focused or has a value. Alternatively, use <code>slot=&quot;suffix&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Material Icons name for the prefix icon of the text field. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Material Icons name for the suffix icon of the text field. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"error-icon",propertyName:"errorIcon",reflect:!0,description:`<p>Material Icons name displayed on the right side of the text field when the form field validation fails. Alternatively, use <code>slot=&quot;error-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>Associates the text field with a <code>&lt;form&gt;</code> element. The value should be the <code>id</code> of a <code>&lt;form&gt;</code> in the same document. If not set, the text field is associated with its parent <code>&lt;form&gt;</code>, if any.</p>
<p>This attribute allows text field elements to be associated with <code>&lt;form&gt;</code>s anywhere in the document, not just inside a <code>&lt;form&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"readonly",propertyName:"readonly",reflect:!0,description:`<p>Makes the text field read-only.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the text field.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>The field must be filled in before the form is submitted.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"rows",propertyName:"rows",reflect:!0,description:`<p>The number of rows in the text field.</p>
`,type:"number",enum:[]},{attributeName:"autosize",propertyName:"autosize",reflect:!0,description:`<p>Allows the text field height to adjust automatically based on the input content.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"min-rows",propertyName:"minRows",reflect:!0,description:`<p>The minimum number of rows when <code>autosize</code> is enabled.</p>
`,type:"number",enum:[]},{attributeName:"max-rows",propertyName:"maxRows",reflect:!0,description:`<p>The maximum number of rows when <code>autosize</code> is enabled.</p>
`,type:"number",enum:[]},{attributeName:"minlength",propertyName:"minlength",reflect:!0,description:`<p>The minimum number of characters for input.</p>
`,type:"number",enum:[]},{attributeName:"maxlength",propertyName:"maxlength",reflect:!0,description:`<p>The maximum number of characters for input.</p>
`,type:"number",enum:[]},{attributeName:"counter",propertyName:"counter",reflect:!0,description:`<p>Displays the character count when <code>maxlength</code> is specified.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"min",propertyName:"min",reflect:!0,description:`<p>The minimum value when <code>type</code> is <code>number</code>.</p>
`,type:"number",enum:[]},{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>The maximum value when <code>type</code> is <code>number</code>.</p>
`,type:"number",enum:[]},{attributeName:"step",propertyName:"step",reflect:!0,description:`<p>The step interval during increment and decrement when <code>type</code> is <code>number</code>.</p>
`,type:"number",enum:[]},{attributeName:"pattern",propertyName:"pattern",reflect:!0,description:`<p>The regular expression for form validation.</p>
`,type:"string",enum:[]},{attributeName:"toggle-password",propertyName:"togglePassword",reflect:!0,description:`<p>Adds a toggle button for showing and hiding the password when <code>type</code> is <code>password</code>.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"show-password-icon",propertyName:"showPasswordIcon",reflect:!0,description:`<p>Material Icons name for the visible password toggle button. Alternatively, use <code>slot=&quot;show-password-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"hide-password-icon",propertyName:"hidePasswordIcon",reflect:!0,description:`<p>Material Icons name for the hidden password toggle button. Alternatively, use <code>slot=&quot;hide-password-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"autocapitalize",propertyName:"autocapitalize",reflect:!0,description:`<p>A non-standard iOS attribute for automatic capitalization. Possible values:</p>
<ul>
<li><code>none</code>: Disables automatic capitalization.</li>
<li><code>sentences</code>: Capitalizes the first letter of each sentence.</li>
<li><code>words</code>: Capitalizes the first letter of each word.</li>
<li><code>characters</code>: Capitalizes all letters.</li>
</ul>
`,type:"'none' | 'sentences' | 'words' | 'characters'",enum:["'none'","'sentences'","'words'","'characters'"]},{attributeName:"autocorrect",propertyName:"autocorrect",reflect:!0,description:`<p>The <code>autocorrect</code> attribute of the <code>input</code> element.</p>
`,type:"string",enum:[]},{attributeName:"autocomplete",propertyName:"autocomplete",reflect:!0,description:`<p>The <code>autocomplete</code> attribute of the <code>input</code> element.</p>
`,type:"string",enum:[]},{attributeName:"enterkeyhint",propertyName:"enterkeyhint",reflect:!0,description:`<p>Customizes the Enter key text or icon on the virtual keyboard. The effect varies based on the device and language. Possible values:</p>
<ul>
<li><code>enter</code>: Inserts a new line, typically used in a multi-line text field.</li>
<li><code>done</code>: Indicates input completion, closes the virtual keyboard.</li>
<li><code>go</code>: Navigates to the target of the entered text.</li>
<li><code>next</code>: Moves to the next text field.</li>
<li><code>previous</code>: Moves to the previous text field.</li>
<li><code>search</code>: Navigates to search results.</li>
<li><code>send</code>: Sends a text message.</li>
</ul>
`,type:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",enum:["'enter'","'done'","'go'","'next'","'previous'","'search'","'send'"]},{attributeName:"spellcheck",propertyName:"spellcheck",reflect:!0,description:`<p>Enable spell checking.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"inputmode",propertyName:"inputmode",reflect:!0,description:`<p>Customizes the virtual keyboard. Possible values:</p>
<ul>
<li><code>none</code>: No virtual keyboard. This is useful for custom input controls.</li>
<li><code>text</code>: Standard text input keyboard.</li>
<li><code>decimal</code>: Decimal input keyboard. This includes a period <code>.</code> or comma <code>,</code> and numbers.</li>
<li><code>numeric</code>: Numeric keyboard. This displays numbers 0-9.</li>
<li><code>tel</code>: Phone number keyboard. This includes numbers 0-9, asterisk <code>*</code>, and hash <code>#</code> keys.</li>
<li><code>search</code>: Search-optimized virtual keyboard. &#39;Search&#39; is displayed on the submit button.</li>
<li><code>email</code>: Email-optimized virtual keyboard. This typically includes <code>@ .</code>.</li>
<li><code>url</code>: URL-optimized virtual keyboard. This typically includes <code>. / #</code>.</li>
</ul>
`,type:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",enum:["'none'","'text'","'decimal'","'numeric'","'tel'","'search'","'email'","'url'"]},{propertyName:"validity",reflect:!1,description:`<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a> object that represents the element&#39;s validity states.</p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>The element&#39;s validation message. This is empty if the element meets its constraints.</p>
`,type:"string",enum:[]},{propertyName:"valueAsNumber",reflect:!1,description:`<p>Gets or sets the value as a <code>number</code>. Returns <code>NaN</code> if the value cannot be converted.</p>
`,type:"number",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"select",description:`<p>Selects the content of the text field.</p>
`,parameters:[],return:{type:"void"}},{name:"setSelectionRange",description:`<p>Selects a specific range in the text field.</p>
`,parameters:[{name:"start",type:"number"},{name:"end",type:"number"},{name:"direction",type:"'forward' | 'backward' | 'none'"}],return:{type:"void"}},{name:"setRangeText",description:`<p>Replaces a specific range in the text field with new text.</p>
`,parameters:[{name:"replacement",type:"string"},{name:"start",type:"number"},{name:"end",type:"number"},{name:"selectMode",type:"'select' | 'start' | 'end' | 'preserve'"}],return:{type:"void"}},{name:"checkValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event and returns <code>false</code>. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>Checks the validity of the form field. If it&#39;s invalid, it triggers an <code>invalid</code> event, returns <code>false</code>, and displays a validation message. If it&#39;s valid, it returns <code>true</code>.</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>Sets a custom error message. If the text is non-empty, it indicates that the field is invalid.</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the text field gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the text field loses focus.</p>
`},{name:"change",description:`<p>Emitted when the value changes and the text field loses focus.</p>
`},{name:"input",description:`<p>Emitted when the value changes.</p>
`},{name:"invalid",description:`<p>Emitted when the form control&#39;s validity is checked and it doesn&#39;t meet the constraints.</p>
`},{name:"clear",description:`<p>Emitted when clear button is clicked. Can be prevented with <code>event.preventDefault()</code>.</p>
`}],slots:[{name:"icon",description:`<p>Icon on the left side.</p>
`},{name:"end-icon",description:`<p>Icon on the right side.</p>
`},{name:"error-icon",description:`<p>Icon on the right side for validation failure.</p>
`},{name:"prefix",description:`<p>Text on the left side.</p>
`},{name:"suffix",description:`<p>Text on the right side.</p>
`},{name:"clear-button",description:`<p>Clear button.</p>
`},{name:"clear-icon",description:`<p>Icon in the clear button.</p>
`},{name:"toggle-password-button",description:`<p>Button to toggle password visibility.</p>
`},{name:"show-password-icon",description:`<p>Icon in the password visibility toggle button (show password state).</p>
`},{name:"hide-password-icon",description:`<p>Icon in the password visibility toggle button (hide password state).</p>
`},{name:"helper",description:`<p>Text at the bottom for help.</p>
`}],cssParts:[{name:"container",description:`<p>Container for the text field.</p>
`},{name:"icon",description:`<p>Icon on the left side.</p>
`},{name:"end-icon",description:`<p>Icon on the right side.</p>
`},{name:"error-icon",description:`<p>Icon on the right side for validation failure.</p>
`},{name:"prefix",description:`<p>Text on the left side.</p>
`},{name:"suffix",description:`<p>Text on the right side.</p>
`},{name:"label",description:`<p>Label text above the field.</p>
`},{name:"input",description:`<p>Internal <code>&lt;input&gt;</code> or <code>&lt;textarea&gt;</code> element.</p>
`},{name:"clear-button",description:`<p>Clear button.</p>
`},{name:"clear-icon",description:`<p>Icon in the clear button.</p>
`},{name:"toggle-password-button",description:`<p>Button to toggle password visibility.</p>
`},{name:"show-password-icon",description:`<p>Icon in the password visibility toggle button (show password state).</p>
`},{name:"hide-password-icon",description:`<p>Icon in the password visibility toggle button (hide password state).</p>
`},{name:"supporting",description:`<p>Container for bottom supporting info, including helper, error, and counter.</p>
`},{name:"helper",description:`<p>Text at the bottom for help.</p>
`},{name:"error",description:`<p>Text at the bottom for error.</p>
`},{name:"counter",description:`<p>Character count in the bottom right corner.</p>
`}],cssProperties:[]}]};export{e as default};
