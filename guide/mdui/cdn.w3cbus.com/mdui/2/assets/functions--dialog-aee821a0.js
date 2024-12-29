const t={docsHtml:`<p>The <code>dialog</code> function, a wrapper for the <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> component. It offers a more convenient way to open a dialog without the need to write HTML code for the component.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { dialog } from &#39;mdui/functions/dialog.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-button class=&quot;example-button&quot;&gt;open&lt;/mdui-button&gt;

&lt;script type=&quot;module&quot;&gt;
  import { dialog } from &quot;mdui/functions/dialog.js&quot;;

  const button = document.querySelector(&quot;.example-button&quot;);

  button.addEventListener(&quot;click&quot;, () =&gt; {
    dialog({
      headline: &quot;Dialog Title&quot;,
      description: &quot;Dialog description&quot;,
      actions: [
        {
          text: &quot;Cancel&quot;,
        },
        {
          text: &quot;OK&quot;,
          onClick: () =&gt; {
            console.log(&quot;confirmed&quot;);
            return false;
          },
        }
      ]
    });
  });
&lt;/script&gt;
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">dialog(options: <a href="#api-options">Options</a>): <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a></code></pre>

<p>The <code>dialog</code> function accepts an <a href="#api-options">Options</a> object as a parameter and returns an instance of the <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> component.</p>
<h3 id="api-options">
                  <a href="#api-options">Options</a>
                </h3>
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr id="options-headline">
      <td><a href="#options-headline"><code>headline</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The title of the dialog.</td>
    </tr>
    <tr id="options-description">
      <td><a href="#options-description"><code>description</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The description of the dialog.</td>
    </tr>
    <tr id="options-body">
      <td><a href="#options-body"><code>body</code></a></td>
      <td><code>string</code> | <code>HTMLElement</code> | <code><a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The content of the dialog's body, accepts HTML string, DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>.</td>
    </tr>
    <tr id="options-icon">
      <td><a href="#options-icon"><code>icon</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The Material Icons name displayed at the top of the dialog.</td>
    </tr>
    <tr id="options-closeOnEsc">
      <td><a href="#options-closeOnEsc"><code>closeOnEsc</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether the dialog can be closed by pressing the Esc key. If set to <code>true</code>, the dialog closes when the Esc key is pressed.</td>
    </tr>
    <tr id="options-closeOnOverlayClick">
      <td><a href="#options-closeOnOverlayClick"><code>closeOnOverlayClick</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether the dialog can be closed by clicking on the overlay.</td>
    </tr>
    <tr id="options-actions">
      <td><a href="#options-actions"><code>actions</code></a></td>
      <td><code><a href="#api-action">Action</a>[]</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The array of bottom action buttons.</td>
    </tr>
    <tr id="options-stackedActions">
      <td><a href="#options-stackedActions"><code>stackedActions</code></a></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether to stack the bottom action buttons vertically.</td>
    </tr>
    <tr id="options-queue">
      <td><a href="#options-queue"><code>queue</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>The queue name.</p>
        <p>By default, the queue is disabled. If this function is invoked multiple times, multiple dialogs will appear simultaneously.</p>
        <p>If a queue name is provided, dialogs with the same queue name will open sequentially, each one after the previous one closes.</p>
        <p>The <a href="https://cdn.w3cbus.com/en/docs/2/functions/dialog"><code>dialog()</code></a>, <code>alert()</code>, <a href="https://cdn.w3cbus.com/en/docs/2/functions/confirm"><code>confirm()</code></a>, and <a href="https://cdn.w3cbus.com/en/docs/2/functions/prompt"><code>prompt()</code></a> functions share the same queue if their queue names match.</p>
      </td>
    </tr>
    <tr id="options-onOpen">
      <td><a href="#options-onOpen"><code>onOpen</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog starts to open.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onOpened">
      <td><a href="#options-onOpened"><code>onOpened</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog's opening animation completes.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onClose">
      <td><a href="#options-onClose"><code>onClose</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog starts to close.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onClosed">
      <td><a href="#options-onClosed"><code>onClosed</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the dialog's closing animation completes.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
    <tr id="options-onOverlayClick">
      <td><a href="#options-onOverlayClick"><code>onOverlayClick</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the overlay is clicked.</p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="api-action">
                  <a href="#api-action">Action</a>
                </h3>
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr id="action-text">
      <td><a href="#action-text"><code>text</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">Button text.</td>
    </tr>
    <tr id="action-onClick">
      <td><a href="#action-onClick"><code>onClick</code></a></td>
      <td><code>(dialog: <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog">Dialog</a>) => void | boolean | Promise&lt;void&gt;</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>A callback function that is triggered when the button is clicked. </p>
        <p>The function receives the dialog instance as a parameter, and <code>this</code> also refers to the dialog instance.</p>
        <p>By default, clicking the button closes the dialog. If the return value is <code>false</code>, the dialog remains open. If the return value is a promise, the dialog closes after the promise resolves.</p>
      </td>
    </tr>
  </tbody>
</table>
`,elements:[]};export{t as default};
