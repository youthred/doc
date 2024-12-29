const e={docsHtml:`<p>mdui components, as standard Web Components, can be used like <code>&lt;div&gt;</code> elements. Each component&#39;s documentation provides a comprehensive API, including attributes, methods, events, slots, CSS parts, and CSS custom properties.</p>
<p>This guide focuses on the usage of Web Components.</p>
<h2 id="attribute">
                  <a href="#attribute">Attributes</a>
                </h2>
<p>Attributes are divided into HTML attributes and JavaScript properties. They usually correspond one-to-one and are synchronized. This means that updating an HTML attribute value also updates the JavaScript property value, and vice versa.</p>
<p>HTML attributes can be set directly in the component&#39;s HTML string. They can be read or modified using the <code>getAttribute</code> and <code>setAttribute</code> methods:</p>
<pre><code class="language-html">&lt;mdui-button variant=&quot;text&quot;&gt;Click me&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  // Modify HTML attribute
  button.setAttribute(&#39;variant&#39;, &#39;outlined&#39;);

  // Read HTML attribute
  console.log(button.getAttribute(&#39;variant&#39;)); // outlined
&lt;/script&gt;
</code></pre>
<p>JavaScript properties can be accessed directly on the component instance or set to modify the property value:</p>
<pre><code class="language-html">&lt;mdui-button variant=&quot;text&quot;&gt;Click me&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  // Set JavaScript property
  button.variant = &#39;outlined&#39;;

  // Read JavaScript property
  console.log(button.variant); // outlined
&lt;/script&gt;
</code></pre>
<p>Some attributes are boolean. The corresponding JavaScript property is <code>true</code> when the HTML attribute exists and <code>false</code> otherwise. However, mdui treats the string value <code>false</code> as equivalent to the boolean value <code>false</code> for compatibility with certain frameworks.</p>
<pre><code class="language-html">&lt;!-- This component has the disabled attribute, so the disabled property is true by default --&gt;
&lt;mdui-button disabled&gt;&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  button.removeAttribute(&#39;disabled&#39;); // Equivalent to button.disabled = false;
  button.setAttribute(&#39;disabled&#39;, &#39;&#39;); // Equivalent to button.disabled = true;

  // Exception: setting to the string &quot;false&quot; value is equivalent to setting to the boolean value false
  button.setAttribute(&#39;disabled&#39;, &#39;false&#39;); // Equivalent to button.disabled = false;
&lt;/script&gt;
</code></pre>
<p>For properties that are arrays, objects, or functions, there is only a JavaScript property, and no corresponding HTML attribute. For example, the <a href="https://cdn.w3cbus.com/en/docs/2/components/slider"><code>&lt;mdui-slider&gt;</code></a> component&#39;s <a href="https://cdn.w3cbus.com/en/docs/2/components/slider#attributes-labelFormatter"><code>labelFormatter</code></a> property is a function, which can only be set using JavaScript property:</p>
<pre><code class="language-html">&lt;mdui-slider&gt;&lt;/mdui-slider&gt;

&lt;script&gt;
  const slider = document.querySelector(&#39;mdui-slider&#39;);
  slider.labelFormatter = (value) =&gt; \`\${value}%\`;
&lt;/script&gt;
</code></pre>
<p>Here&#39;s an example from the attribute documentation of the <a href="https://cdn.w3cbus.com/en/docs/2/components/slider"><code>&lt;mdui-slider&gt;</code></a> component:</p>
<table>
<thead>
<tr>
<th>HTML Attribute</th>
<th>JavaScript Property</th>
<th>reflect</th>
</tr>
</thead>
<tbody><tr>
<td><code>name</code></td>
<td><code>name</code></td>
<td><mdui-icon name="check--rounded" style="user-select:none;font-size:1rem;"></mdui-icon></td>
</tr>
<tr>
<td><code>value</code></td>
<td><code>value</code></td>
<td></td>
</tr>
<tr>
<td></td>
<td><code>labelFormatter</code></td>
<td></td>
</tr>
</tbody></table>
<p>The <code>name</code> attribute of this component has both HTML and JavaScript properties, and the reflect column indicates that if the JavaScript property is updated, the HTML attribute will also be updated. However, the <code>value</code> attribute does not reflect changes from the JavaScript property to the HTML attribute. The <code>labelFormatter</code> property only exists as a JavaScript property.</p>
<h2 id="method">
                  <a href="#method">Methods</a>
                </h2>
<p>Components provide public methods that trigger specific behaviors. For example, the <a href="https://cdn.w3cbus.com/en/docs/2/components/text-field#methods-focus"><code>focus()</code></a> method of the <a href="https://cdn.w3cbus.com/en/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> component sets the focus on the text field.</p>
<pre><code class="language-html">&lt;mdui-text-field&gt;&lt;/mdui-text-field&gt;

&lt;script&gt;
  const textField = document.querySelector(&#39;mdui-text-field&#39;);
  textField.focus();
&lt;/script&gt;
</code></pre>
<p>Please refer to the individual documentation of each component for a comprehensive list of methods and their parameters.</p>
<h2 id="event">
                  <a href="#event">Events</a>
                </h2>
<p>Components emit events in response to specific actions. For example, the <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> component emits an <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog#events-open"><code>open</code></a> event when it begins to open. These events can be listened to, enabling the execution of custom actions.</p>
<pre><code class="language-html">&lt;mdui-dialog&gt;Dialog&lt;/mdui-dialog&gt;

&lt;script&gt;
  const dialog = document.querySelector(&#39;mdui-dialog&#39;);

  dialog.addEventListener(&#39;open&#39;, () =&gt; {
    console.log(&#39;This event is triggered when the dialog starts opening&#39;);
  });
&lt;/script&gt;
</code></pre>
<p>A comprehensive list of events and their parameters for each component can be found in their respective documentation pages.</p>
<p>When integrating mdui with other frameworks such as Vue, React, or Angular, you can use the framework&#39;s syntax to bind events. However, some frameworks, like React, may only support standard events like <code>click</code> and not custom events like <code>open</code>. In these cases, you may need to manually bind the event using <code>addEventListener</code> by obtaining a reference to the element.</p>
<p>For more information on using mdui with React, please refer to the <a href="https://cdn.w3cbus.com/en/docs/2/frameworks/react">Frameworks - React</a> section.</p>
<h2 id="slot">
                  <a href="#slot">Slot</a>
                </h2>
<p>Components often provide slots for inserting custom HTML content.</p>
<p>The default slot is the most common, used for plain HTML or text within the component. For example, the default slot of the <a href="https://cdn.w3cbus.com/en/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> component sets the button&#39;s text:</p>
<pre><code class="language-html">&lt;mdui-button&gt;Click me&lt;/mdui-button&gt;
</code></pre>
<p>Some components also offer named slots. You should specify the slot name in the HTML&#39;s <code>slot</code> attribute. For example, the <a href="https://cdn.w3cbus.com/en/docs/2/components/icon"><code>&lt;mdui-icon&gt;</code></a> component uses <code>slot=&quot;start&quot;</code> to indicate a named slot called <a href="https://cdn.w3cbus.com/en/docs/2/components/button#slots-icon"><code>start</code></a>, positioning the icon on the left inside the component:</p>
<pre><code class="language-html">&lt;mdui-button&gt;
  &lt;mdui-icon slot=&quot;start&quot; name=&quot;settings&quot;&gt;&lt;/mdui-icon&gt;
  Settings
&lt;/mdui-button&gt;
</code></pre>
<p>For components with multiple named slots, the order doesn&#39;t matter. They just need to be inside the component, and the browser will automatically place them in the correct positions.</p>
<p>Refer to each component&#39;s documentation for a list of supported slots.</p>
<h2 id="css-custom-properties">
                  <a href="#css-custom-properties">CSS Custom Properties</a>
                </h2>
<p>mdui utilizes CSS Custom Properties, also known as CSS variables, to establish a series of <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens">global design tokens</a>. These tokens are referenced by various components, enabling you to adjust the styles of mdui components globally.</p>
<p>For example, you can reduce the corner radius of all components by modifying the relevant CSS custom properties:</p>
<pre><code class="language-css">:root {
  --mdui-shape-corner-extra-small: 0.125rem;
  --mdui-shape-corner-small: 0.25rem;
  --mdui-shape-corner-medium: 0.375rem;
  --mdui-shape-corner-large: 0.5rem;
  --mdui-shape-corner-extra-large: 0.875rem;
}
</code></pre>
<p>CSS custom properties can also be adjusted within a local scope. For example, you can reduce the corner radius for elements with the <code>class=&quot;sharp&quot;</code> and their child elements by setting the appropriate CSS custom properties:</p>
<pre><code class="language-css">.sharp {
  --mdui-shape-corner-extra-small: 0.125rem;
  --mdui-shape-corner-small: 0.25rem;
  --mdui-shape-corner-medium: 0.375rem;
  --mdui-shape-corner-large: 0.5rem;
  --mdui-shape-corner-extra-large: 0.875rem;
}
</code></pre>
<p>Certain components also provide unique CSS custom properties. These are scoped to specific components and do not include the <code>--mdui</code> prefix. For example, you can modify the <code>z-index</code> style of the <a href="https://cdn.w3cbus.com/en/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> component by adjusting its <code>--z-index</code> property.</p>
<pre><code class="language-css">mdui-dialog {
  --z-index: 3000;
}
</code></pre>
<p>Please refer to the documentation of each component for a list of supported CSS custom properties.</p>
<h2 id="css-part">
                  <a href="#css-part">CSS Part</a>
                </h2>
<p>mdui components utilize the shadow DOM for encapsulating styles and behaviors. However, standard CSS selectors cannot select elements within the shadow DOM. To overcome this, some components add a <code>part</code> attribute to elements within the shadow DOM. These elements can then be selected and styled using the <code>::part</code> CSS selector.</p>
<p>For example, the <a href="https://cdn.w3cbus.com/en/docs/2/components/button#cssParts-button"><code>button</code></a> part modifies the inner padding of the button, while the <a href="https://cdn.w3cbus.com/en/docs/2/components/button#cssParts-label"><code>label</code></a>, <a href="https://cdn.w3cbus.com/en/docs/2/components/button#cssParts-icon"><code>icon</code></a>, and <a href="https://cdn.w3cbus.com/en/docs/2/components/button#cssParts-end-icon"><code>end-icon</code></a> parts adjust the text color, left icon color, and right icon color, respectively:</p>
<pre><code class="language-html,example">&lt;mdui-button class=&quot;custom-button&quot; icon=&quot;explore&quot; end-icon=&quot;flight&quot;&gt;Button&lt;/mdui-button&gt;

&lt;style&gt;
  .custom-button::part(button) {
    padding: 0 2rem;
  }

  .custom-button::part(label) {
    color: blue;
  }

  .custom-button::part(icon) {
    color: red;
  }

  .custom-button::part(end-icon) {
    color: yellow;
  }
&lt;/style&gt;
</code></pre>
<p>To understand the structure and default styles of component shadow DOM elements, you can inspect them using your browser&#39;s developer tools.</p>
<p>Before using CSS Part, consider whether global CSS custom properties and component-specific CSS custom properties can meet your needs. If they can, it&#39;s recommended to use CSS custom properties for style customization.</p>
<p>For a list of publicly exposed <code>part</code> properties, please refer to the documentation of each component.</p>
<h2 id="update-mechanism">
                  <a href="#update-mechanism">Component Update Mechanism</a>
                </h2>
<p>mdui components are built using <a href="https://lit.dev/" target="_blank" rel="noopener nofollow">Lit</a>, a lightweight library that streamlines the development of Web Components. Understanding the rendering and update mechanism of the components can enhance your experience when using mdui components.</p>
<p>When you modify the properties of mdui components, the components will re-render. However, this re-rendering is not synchronous. When multiple property values change at the same time, Lit buffers these changes until the next update cycle. This approach ensures that each component re-renders only once, regardless of the number of property changes. Only the parts of the shadow DOM where changes have occurred will be re-rendered.</p>
<p>In the example below, we set the <code>disabled</code> JavaScript property of a button to <code>true</code> and immediately query its HTML attribute. However, the component hasn&#39;t had a chance to re-render yet, so the queried HTML attribute remains <code>false</code>:</p>
<pre><code class="language-js">const button = document.querySelector(&#39;mdui-button&#39;);
button.disabled = true;

console.log(button.hasAttribute(&#39;disabled&#39;)); // false
</code></pre>
<p>To ensure a component has completed re-rendering after a property value change, you can use the <code>updateComplete</code> property. This property returns a Promise that resolves once the component finishes re-rendering.</p>
<pre><code class="language-js">const button = document.querySelector(&#39;mdui-button&#39;);
button.disabled = true;

button.updateComplete.then(() =&gt; {
  console.log(button.hasAttribute(&#39;disabled&#39;)); // true
});
</code></pre>
`,elements:[]};export{e as default};
