const e={docsHtml:`<p>The navigation drawer provides a side-access method to different pages on a webpage.</p>
<p>Typically, the <a href="https://cdn.w3cbus.com/en/docs/2/components/list"><code>&lt;mdui-list&gt;</code></a> component is used within the navigation drawer to add navigation items.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-drawer.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { NavigationDrawer } from &#39;mdui/components/navigation-drawer.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-navigation-drawer close-on-overlay-click class=&quot;example-drawer&quot;&gt;
  &lt;mdui-button&gt;Close Navigation Drawer&lt;/mdui-button&gt;
&lt;/mdui-navigation-drawer&gt;

&lt;mdui-button&gt;Open Navigation Drawer&lt;/mdui-button&gt;

&lt;script&gt;
  const navigationDrawer = document.querySelector(&quot;.example-drawer&quot;);
  const openButton = navigationDrawer.nextElementSibling;
  const closeButton = navigationDrawer.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<p><strong>Notes:</strong></p>
<p>This component defaults to a <code>position: fixed</code> style.</p>
<p>When the <code>modal</code> attribute is set to <code>false</code> and the breakpoint is equal to or greater than <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a>, it automatically adds <code>padding-left</code> or <code>padding-right</code> to the body to prevent content from being obscured.</p>
<p>However, it uses a <code>position: absolute</code> style in the following cases:</p>
<ol>
<li>When the <code>contained</code> property is <code>true</code>.</li>
<li>When it&#39;s within the <a href="https://cdn.w3cbus.com/en/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> component. In this case, it doesn&#39;t add <code>padding-left</code> or <code>padding-right</code>.</li>
</ol>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-contained">
                  <a href="#example-contained">In Container</a>
                </h3>
<p>By default, the navigation drawer displays on the left or right side of the current window. To place it inside a container, add the <code>contained</code> attribute. This positions the navigation drawer relative to the parent element (you need to manually add <code>position: relative; overflow: hidden;</code> styles to the parent element).</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-contained&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;Close Navigation Drawer&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;Open Navigation Drawer&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-contained&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-modal">
                  <a href="#example-modal">Modal</a>
                </h3>
<p>The <code>modal</code> attribute displays a modal overlay when the navigation drawer is open. Note that if the window or parent element width is less than <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a>, this attribute is ignored and the modal overlay is always displayed.</p>
<p>The <code>close-on-esc</code> attribute allows the navigation drawer to close when the ESC key is pressed.</p>
<p>The <code>close-on-overlay-click</code> attribute allows the navigation drawer to close when the modal overlay is clicked.</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-modal&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer modal close-on-esc close-on-overlay-click contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;Close Navigation Drawer&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;Open Navigation Drawer&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-modal&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Right Placement</a>
                </h3>
<p>Set the <code>placement</code> attribute to <code>right</code> to display the navigation drawer on the right side.</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot; style=&quot;position: relative; overflow: hidden&quot;&gt;
  &lt;mdui-navigation-drawer placement=&quot;right&quot; modal close-on-esc close-on-overlay-click contained&gt;
    &lt;mdui-button class=&quot;close&quot;&gt;Close Navigation Drawer&lt;/mdui-button&gt;
  &lt;/mdui-navigation-drawer&gt;

  &lt;div style=&quot;height: 160px;&quot;&gt;
    &lt;mdui-button class=&quot;open&quot;&gt;Open Navigation Drawer&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-placement&quot;);
  const navigationDrawer = example.querySelector(&quot;mdui-navigation-drawer&quot;);
  const openButton = example.querySelector(&quot;.open&quot;);
  const closeButton = example.querySelector(&quot;.close&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; navigationDrawer.open = false);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"NavigationDrawer",tagName:"mdui-navigation-drawer",summary:`<p>Navigation Drawer Component.</p>
<pre><code class="language-html">&lt;mdui-navigation-drawer&gt;content&lt;/mdui-navigation-drawer&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>Opens the navigation drawer.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"modal",propertyName:"modal",reflect:!0,description:`<p>Displays an overlay when open.</p>
<p>On narrow devices (screen width &lt; <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#breakpoint"><code>--mdui-breakpoint-md</code></a>), the overlay always displays.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-esc",propertyName:"closeOnEsc",reflect:!0,description:`<p>Closes the drawer when the ESC key is pressed and an overlay is present.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-overlay-click",propertyName:"closeOnOverlayClick",reflect:!0,description:`<p>Closes the drawer when the overlay is clicked.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Sets the drawer&#39;s display position. Possible values:</p>
<ul>
<li><code>left</code>: Display on the left side.</li>
<li><code>right</code>: Display on the right side.</li>
</ul>
`,type:"'left' | 'right'",enum:["'left'","'right'"],default:"'left'"},{attributeName:"contained",propertyName:"contained",reflect:!0,description:`<p>By default, the navigation drawer displays relative to the <code>body</code> element. When set, it displays relative to its parent element.</p>
<p>Note: You must add <code>position: relative; overflow: hidden;</code> style to the parent element when this attribute is set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[{name:"open",description:`<p>Emitted when the navigation drawer starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"opened",description:`<p>Emitted after the navigation drawer has opened and the animations are completed.</p>
`},{name:"close",description:`<p>Emitted when the navigation drawer starts to close. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"closed",description:`<p>Emitted after the navigation drawer has closed and the animations are completed.</p>
`},{name:"overlay-click",description:`<p>Emitted when the overlay is clicked.</p>
`}],slots:[{name:"",description:`<p>Contents of the navigation drawer.</p>
`}],cssParts:[{name:"overlay",description:`<p>Overlay element.</p>
`},{name:"panel",description:`<p>Container for the navigation drawer.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{e as default};
