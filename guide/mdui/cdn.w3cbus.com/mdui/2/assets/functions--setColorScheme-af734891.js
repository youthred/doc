const e={docsHtml:`<p>The <code>setColorScheme</code> function is used to set the color scheme for the current page or a specific element based on a provided hexadecimal color value.</p>
<p>This function affects all mdui components on the page. For more information, refer to the <a href="https://cdn.w3cbus.com/en/docs/2/styles/dynamic-color">Dynamic Color</a> section.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">setColorScheme(&#39;#ff0000&#39;);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">setColorScheme(color: string, options: <a href="#api-options">Options</a>): void;</code></pre>

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
    <tr id="options-target">
      <td><a href="#options-target"><code>target</code></a></td>
      <td><code>string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;</code></td>
      <td><code>document.documentElement</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>The element to which the color scheme should be applied. The value can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>. If this parameter is set, the color scheme will only take effect within the specified element.</p>
        <p>The default value is <code>document.documentElement</code>, which refers to the <code>&lt;html&gt;</code> element and affects the entire page.</p>
      </td>
    </tr>
    <tr id="options-customColors">
      <td><a href="#options-customColors"><code>customColors</code></a></td>
      <td><code><a href="#api-custom-color">CustomColor</a>[]</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">An array of custom colors. For usage, please refer to the <a href="https://cdn.w3cbus.com/en/docs/2/styles/dynamic-color#color-scheme">Dynamic Color</a> section.</td>
    </tr>
  </tbody>
</table>

<h3 id="api-custom-color">
                  <a href="#api-custom-color">CustomColor</a>
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
    <tr id="custom-color-name">
      <td><a href="#custom-color-name"><code>name</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The name of the custom color.</td>
    </tr>
    <tr id="custom-color-value">
      <td><a href="#custom-color-value"><code>value</code></a></td>
      <td><code>string</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">The hexadecimal value of the custom color, such as <code>#f82506</code>.</td>
    </tr>
  </tbody>
</table>
`,elements:[]};export{e as default};
