const e={docsHtml:`<p>Dialogs are used to display crucial information during a user&#39;s workflow.</p>
<p>In addition to directly using this component, mdui also provides four functions: <a href="https://cdn.w3cbus.com/en/docs/2/functions/dialog"><code>mdui.dialog</code></a>, <a href="https://cdn.w3cbus.com/en/docs/2/functions/alert"><code>mdui.alert</code></a>, <a href="https://cdn.w3cbus.com/en/docs/2/functions/confirm"><code>mdui.confirm</code></a>, <a href="https://cdn.w3cbus.com/en/docs/2/functions/prompt"><code>mdui.prompt</code></a>. These functions simplify the use of the Dialog component.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/dialog.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Dialog } from &#39;mdui/components/dialog.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-dialog class=&quot;example-dialog&quot;&gt;
  Dialog
  &lt;mdui-button&gt;Close&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-dialog&quot;);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = false);
&lt;/script&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-close-on-overlay-click">
                  <a href="#example-close-on-overlay-click">Close on Overlay Click</a>
                </h3>
<p>Add the <code>close-on-overlay-click</code> attribute to close the dialog when the overlay is clicked.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-overlay&quot;&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-overlay&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-close-on-esc">
                  <a href="#example-close-on-esc">Close on ESC</a>
                </h3>
<p>Add the <code>close-on-esc</code> attribute to enable closing the dialog when the ESC key is pressed.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  close-on-esc
  close-on-overlay-click
  class=&quot;example-ecs&quot;
&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-ecs&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-fullscreen">
                  <a href="#example-fullscreen">Fullscreen</a>
                </h3>
<p>Add the <code>fullscreen</code> attribute to make the dialog fullscreen.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog fullscreen class=&quot;example-fullscreen&quot;&gt;
  Dialog
  &lt;mdui-button&gt;Close&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-fullscreen&quot;);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icon</a>
                </h3>
<p>Set the <code>icon</code> attribute to add a Material Icon above the dialog.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  icon=&quot;restart_alt&quot;
  close-on-overlay-click
  class=&quot;example-icon&quot;
&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-icon&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>Alternatively, add an icon element above the dialog using the <code>icon</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-icon-slot&quot;&gt;
  Dialog
  &lt;mdui-icon slot=&quot;icon&quot; name=&quot;restart_alt&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-icon-slot&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-headline">
                  <a href="#example-headline">Title and Description</a>
                </h3>
<p>Use the <code>headline</code> and <code>description</code> attributes to set the dialog&#39;s title and description.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  headline=&quot;Delete selected images?&quot;
  description=&quot;Images will be permenantly removed from you account and all synced devices.&quot;
  close-on-overlay-click
  class=&quot;example-headline&quot;
&gt;&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-headline&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>Alternatively, use the <code>headline</code> and <code>description</code> slots to set the title and description elements.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-headline-slot&quot;&gt;
  &lt;span slot=&quot;headline&quot;&gt;Delete selected images?&lt;/span&gt;
  &lt;span slot=&quot;description&quot;&gt;Images will be permenantly removed from you account and all synced devices.&lt;/span&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-headline-slot&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-action">
                  <a href="#example-action">Action Buttons at the Bottom</a>
                </h3>
<p>Use the <code>action</code> slot to add action buttons at the bottom of the dialog.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  close-on-overlay-click
  headline=&quot;Delete selected images?&quot;
  class=&quot;example-action&quot;
&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Cancel&lt;/mdui-button&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;tonal&quot;&gt;Delete&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-action&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>Add the <code>stacked-actions</code> attribute to stack the action buttons vertically.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  stacked-actions
  close-on-overlay-click
  headline=&quot;Use location service?&quot;
  class=&quot;example-stacked-actions&quot;
&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Turn on speed boost&lt;/mdui-button&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;No thanks&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-stacked-actions&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-header">
                  <a href="#example-header">Top Content</a>
                </h3>
<p>Use the <code>header</code> slot to set the top content of the dialog.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-header&quot;&gt;
  &lt;mdui-top-app-bar slot=&quot;header&quot;&gt;
    &lt;mdui-button-icon icon=&quot;close&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;mdui-button variant=&quot;text&quot;&gt;Save&lt;/mdui-button&gt;
  &lt;/mdui-top-app-bar&gt;
  &lt;div style=&quot;height: 100px&quot;&gt;&lt;/div&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;Open Dialog&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-header&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"Dialog",tagName:"mdui-dialog",summary:`<p>Dialog Component.</p>
<pre><code class="language-html">&lt;mdui-dialog&gt;content&lt;/mdui-dialog&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Sets the Material Icons name for the top icon. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>Sets the dialog title. Alternatively, use <code>slot=&quot;headline&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"description",propertyName:"description",reflect:!0,description:`<p>Sets the text below the title. Alternatively, use <code>slot=&quot;description&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>Opens the dialog.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"fullscreen",propertyName:"fullscreen",reflect:!0,description:`<p>Sets the dialog to full-screen.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-esc",propertyName:"closeOnEsc",reflect:!0,description:`<p>Closes the dialog when the ESC key is pressed.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-overlay-click",propertyName:"closeOnOverlayClick",reflect:!0,description:`<p>Closes the dialog when the overlay is clicked.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"stacked-actions",propertyName:"stackedActions",reflect:!0,description:`<p>Stacks the bottom action buttons vertically.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>Emitted when the dialog starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"opened",description:`<p>Emitted after the dialog has opened and the animations are completed.</p>
`},{name:"close",description:`<p>Emitted when the dialog starts to close. Can be prevented with <code>event.preventDefault().</code>.</p>
`},{name:"closed",description:`<p>Emitted after the dialog has closed and the animations are completed.</p>
`},{name:"overlay-click",description:`<p>Emitted when the overlay is clicked.</p>
`}],slots:[{name:"header",description:`<p>Top element, contains the <code>icon</code> slot and <code>headline</code> slot by default.</p>
`},{name:"icon",description:`<p>Top icon.</p>
`},{name:"headline",description:`<p>Top headline.</p>
`},{name:"description",description:`<p>Text below the title.</p>
`},{name:"",description:`<p>Main content of the dialog.</p>
`},{name:"action",description:`<p>Elements in the bottom action bar.</p>
`}],cssParts:[{name:"overlay",description:`<p>Overlay layer.</p>
`},{name:"panel",description:`<p>Dialog container.</p>
`},{name:"header",description:`<p>Dialog header, includes icon and headline.</p>
`},{name:"icon",description:`<p>Top icon in header.</p>
`},{name:"headline",description:`<p>Top headline in header.</p>
`},{name:"body",description:`<p>Dialog body.</p>
`},{name:"description",description:`<p>Subtext in body.</p>
`},{name:"action",description:`<p>Bottom action buttons.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{e as default};
