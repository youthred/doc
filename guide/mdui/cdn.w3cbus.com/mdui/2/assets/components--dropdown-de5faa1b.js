const e={docsHtml:`<p>The Dropdown component displays specific content in a pop-up control. It is often used in conjunction with the Menu component.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/dropdown.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Dropdown } from &#39;mdui/components/dropdown.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-dropdown&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>Add the <code>disabled</code> attribute to disable the dropdown.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown disabled&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Open Position</a>
                </h3>
<p>Set the <code>placement</code> attribute to control the dropdown&#39;s open position.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown placement=&quot;right-start&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">Trigger Method</a>
                </h3>
<p>Set the dropdown&#39;s trigger method with the <code>trigger</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;hover&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-open-on-pointer">
                  <a href="#example-open-on-pointer">Open on Pointer</a>
                </h3>
<p>Add the <code>open-on-pointer</code> attribute to open the dropdown at the pointer location. This is often combined with <code>trigger=&quot;contextmenu&quot;</code> for right-click menu activation.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;contextmenu&quot; open-on-pointer&gt;
  &lt;mdui-card slot=&quot;trigger&quot; style=&quot;width:100%;height: 80px&quot;&gt;Open the menu here with the right mouse button&lt;/mdui-card&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-stay-open-on-click">
                  <a href="#example-stay-open-on-click">Keep Menu Open</a>
                </h3>
<p>By default, clicking a menu item in the dropdown component closes it. Add <code>stay-open-on-click</code> to keep it open.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;click&quot; stay-open-on-click&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-delay">
                  <a href="#example-delay">Open/Close Delay</a>
                </h3>
<p>With <code>trigger=&quot;hover&quot;</code>, use <code>open-delay</code> and <code>close-delay</code> to set the open and close delays.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown trigger=&quot;hover&quot; open-delay=&quot;1000&quot; close-delay=&quot;1000&quot;&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
`,elements:[{name:"Dropdown",tagName:"mdui-dropdown",summary:`<p>Dropdown Component.</p>
<pre><code class="language-html">&lt;mdui-dropdown&gt;
..&lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
..&lt;mdui-menu&gt;
....&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
....&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
..&lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>Opens the dropdown.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the dropdown.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"trigger",propertyName:"trigger",reflect:!0,description:`<p>Defines the trigger method for the dropdown. Supports multiple space-separated values. Possible values:</p>
<ul>
<li><code>click</code>: Trigger on click.</li>
<li><code>hover</code>: Trigger on mouse hover.</li>
<li><code>focus</code>: Trigger on focus.</li>
<li><code>contextmenu</code>: Trigger on right-click or touch long press.</li>
<li><code>manual</code>: If used, the dropdown can only be opened and closed programmatically, and no other trigger methods can be specified.</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'contextmenu' | 'manual' | string",enum:["'click'","'hover'","'focus'","'contextmenu'","'manual'","string"],default:"'click'"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Sets the position of the dropdown. Possible values:</p>
<ul>
<li><code>auto</code>: Automatically determine the position.</li>
<li><code>top-start</code>: Above and left-aligned.</li>
<li><code>top</code>: Above and centered.</li>
<li><code>top-end</code>: Above and right-aligned.</li>
<li><code>bottom-start</code>: Below and left-aligned.</li>
<li><code>bottom</code>: Below and centered.</li>
<li><code>bottom-end</code>: Below and right-aligned.</li>
<li><code>left-start</code>: Left and top-aligned.</li>
<li><code>left</code>: Left and centered.</li>
<li><code>left-end</code>: Left and bottom-aligned.</li>
<li><code>right-start</code>: Right and top-aligned.</li>
<li><code>right</code>: Right and centered.</li>
<li><code>right-end</code>: Right and bottom-aligned.</li>
</ul>
`,type:"'auto' | 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'auto'","'top-start'","'top'","'top-end'","'bottom-start'","'bottom'","'bottom-end'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'auto'"},{attributeName:"stay-open-on-click",propertyName:"stayOpenOnClick",reflect:!0,description:`<p>Keeps the dropdown open after clicking an <a href="https://cdn.w3cbus.com/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a>.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"open-delay",propertyName:"openDelay",reflect:!0,description:`<p>Sets the delay (in ms) for opening the dropdown on hover.</p>
`,type:"number",enum:[],default:"150"},{attributeName:"close-delay",propertyName:"closeDelay",reflect:!0,description:`<p>Sets the delay (in ms) for closing the dropdown on hover.</p>
`,type:"number",enum:[],default:"150"},{attributeName:"open-on-pointer",propertyName:"openOnPointer",reflect:!0,description:`<p>Opens the dropdown at the cursor position. This is typically used for context menus.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>Emitted when the dropdown starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"opened",description:`<p>Emitted after the dropdown has opened and the animations are completed.</p>
`},{name:"close",description:`<p>Emitted when the dropdown starts to close. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"closed",description:`<p>Emitted after the dropdown has closed and the animations are completed.</p>
`}],slots:[{name:"",description:`<p>The content of the dropdown.</p>
`},{name:"trigger",description:`<p>The element that triggers the dropdown, such as an <a href="https://cdn.w3cbus.com/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> element.</p>
`}],cssParts:[{name:"trigger",description:`<p>The container of the element that triggers the dropdown, i.e., the container of the <code>trigger</code> slot.</p>
`},{name:"panel",description:`<p>The container of the dropdown content.</p>
`}],cssProperties:[{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{e as default};
