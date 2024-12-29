const t={docsHtml:`<p>Snackbars provide brief updates about app processes at the bottom of the screen.</p>
<p>In addition to direct component usage, mdui also offers a <a href="https://cdn.w3cbus.com/en/docs/2/functions/snackbar"><code>mdui.snackbar</code></a> function for simplified Snackbar component usage.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/snackbar.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Snackbar } from &#39;mdui/components/snackbar.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-snackbar class=&quot;example-snackbar&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-snackbar&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-placement">
                  <a href="#example-placement">Position</a>
                </h3>
<p>You can set the snackbar&#39;s position using the <code>placement</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-snackbar placement=&quot;top-start&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top-start&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;top&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;top-end&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top-end&lt;/mdui-button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-snackbar placement=&quot;bottom-start&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom-start&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;bottom&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;bottom-end&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom-end&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const snackbars = document.querySelectorAll(&quot;.example-placement mdui-snackbar&quot;);

  snackbars.forEach((snackbar) =&gt; {
    const button = snackbar.nextElementSibling;
    button.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
  });
&lt;/script&gt;

&lt;style&gt;
.example-placement mdui-button {
  margin: 0.25rem;
  width: 7.5rem;
}
&lt;/style&gt;
</code></pre>
<h3 id="example-action">
                  <a href="#example-action">Action Button</a>
                </h3>
<p>The <code>action</code> attribute adds an action button on the right side and specifies its text. The <code>action-click</code> event is triggered when the action button is clicked. The <code>action-loading</code> attribute displays a loading state on the action button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar action=&quot;Undo&quot; class=&quot;example-action&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-action&quot;);
  const openButton = snackbar.nextElementSibling;

  snackbar.addEventListener(&quot;action-click&quot;, () =&gt; {
    snackbar.actionLoading = true;
    setTimeout(() =&gt; snackbar.actionLoading = false, 2000);
  });

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>The <code>action</code> slot can also be used to add elements on the right side.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar class=&quot;example-action-slot&quot;&gt;
  Photo archived
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Undo&lt;/mdui-button&gt;
&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-action-slot&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-closeable">
                  <a href="#example-closeable">Closable</a>
                </h3>
<p>The <code>closeable</code> attribute adds a close button on the right. Clicking the button closes the snackbar and triggers the <code>close</code> event.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar closeable class=&quot;example-closeable&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-closeable&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>The <code>close-button</code> slot specifies the element of the close button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar closeable class=&quot;example-close-button-slot&quot;&gt;
  Photo archived
  &lt;mdui-avatar slot=&quot;close-button&quot; icon=&quot;people_alt&quot;&gt;&lt;/mdui-avatar&gt;
&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-button-slot&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>The <code>close-icon</code> attribute sets the Material Icon in the default close button. The <code>close-icon</code> slot sets the icon element in the default close button.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar
  closeable
  close-icon=&quot;delete&quot;
  class=&quot;example-close-icon&quot;
&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-icon&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-message-line">
                  <a href="#example-message-line">Text Lines</a>
                </h3>
<p>The <code>message-line</code> attribute limits the number of lines in the message text, with a maximum of <code>2</code> lines.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar message-line=&quot;1&quot; class=&quot;example-line&quot;&gt;The item already has the label &quot;travel&quot;. You can add a new label. You can add a new label.&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-line&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-auto-close-delay">
                  <a href="#example-auto-close-delay">Auto Close Delay</a>
                </h3>
<p>The <code>auto-close-delay</code> attribute sets the delay for automatic closure, in milliseconds. The default is <code>5000</code> milliseconds.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar auto-close-delay=&quot;2000&quot; class=&quot;example-close-delay&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-delay&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-close-on-outside-click">
                  <a href="#example-close-on-outside-click">Closing on Outside Click</a>
                </h3>
<p>The <code>close-on-outside-click</code> attribute closes the snackbar when clicking outside of its area.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar close-on-outside-click class=&quot;example-outside&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;Open Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-outside&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"Snackbar",tagName:"mdui-snackbar",summary:`<p>Snackbar Component.</p>
<pre><code class="language-html">&lt;mdui-snackbar&gt;message&lt;/mdui-snackbar&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>Opens the Snackbar.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Snackbar placement. Default is <code>bottom</code>. Possible values:</p>
<ul>
<li><code>top</code>: Top, centered.</li>
<li><code>top-start</code>: Top, left-aligned.</li>
<li><code>top-end</code>: Top, right-aligned.</li>
<li><code>bottom</code>: Bottom, centered.</li>
<li><code>bottom-start</code>: Bottom, left-aligned.</li>
<li><code>bottom-end</code>: Bottom, right-aligned.</li>
</ul>
`,type:"'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'",enum:["'top'","'top-start'","'top-end'","'bottom'","'bottom-start'","'bottom-end'"],default:"'bottom'"},{attributeName:"action",propertyName:"action",reflect:!0,description:`<p>Text for the action button. Alternatively, use <code>slot=&quot;action&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"action-loading",propertyName:"actionLoading",reflect:!0,description:`<p>Indicates if the action button is in the loading state.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"closeable",propertyName:"closeable",reflect:!0,description:`<p>Shows a close button on the right.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-icon",propertyName:"closeIcon",reflect:!0,description:`<p>Material Icons name for the close button. Alternatively, use <code>slot=&quot;close-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"message-line",propertyName:"messageLine",reflect:!0,description:`<p>Maximum lines for message text. Default is unlimited. Possible values:</p>
<ul>
<li><code>1</code>: Single line.</li>
<li><code>2</code>: Two lines.</li>
</ul>
`,type:"1 | 2",enum:["1","2"]},{attributeName:"auto-close-delay",propertyName:"autoCloseDelay",reflect:!0,description:`<p>Automatically closes the Snackbar after a specified time (in milliseconds). Set to <code>0</code> to disable auto-closing. Default is 5 seconds.</p>
`,type:"number",enum:[],default:"5000"},{attributeName:"close-on-outside-click",propertyName:"closeOnOutsideClick",reflect:!0,description:`<p>Closes the Snackbar when clicking or touching outside the Snackbar area.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>Emitted when the snackbar starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"opened",description:`<p>Emitted after the snackbar opens and animations complete.</p>
`},{name:"close",description:`<p>Emitted when the snackbar starts to close. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"closed",description:`<p>Emitted after the snackbar closes and animations complete.</p>
`},{name:"action-click",description:`<p>Emitted when the action button is clicked.</p>
`}],slots:[{name:"",description:`<p>Snackbar message.</p>
`},{name:"action",description:`<p>Right action button.</p>
`},{name:"close-button",description:`<p>Right close button. Displayed if <code>closeable</code> is set</p>
`},{name:"close-icon",description:`<p>Icon in right close button.</p>
`}],cssParts:[{name:"message",description:`<p>Message text.</p>
`},{name:"action",description:`<p>Action button.</p>
`},{name:"close-button",description:`<p>Close button.</p>
`},{name:"close-icon",description:`<p>Icon in the close button.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{t as default};
