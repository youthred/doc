const e={docsHtml:`<p>Menus display a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.</p>
<p>For dropdown menus, utilize the <a href="https://cdn.w3cbus.com/en/docs/2/components/dropdown"><code>&lt;mdui-dropdown&gt;</code></a> component.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/menu.js&#39;;
import &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Menu } from &#39;mdui/components/menu.js&#39;;
import type { MenuItem } from &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-dropdown">
                  <a href="#example-dropdown">Dropdown Menu</a>
                </h3>
<p>To create a dropdown menu, use the <a href="https://cdn.w3cbus.com/en/docs/2/components/dropdown"><code>&lt;mdui-dropdown&gt;</code></a> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-dense">
                  <a href="#example-dense">Dense Style</a>
                </h3>
<p>For a dense menu style, add the <code>dense</code> attribute to <code>&lt;mdui-menu&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu dense&gt;
  &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled Items</a>
                </h3>
<p>To disable menu items, add the <code>disabled</code> attribute to <code>&lt;mdui-menu-item&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item disabled&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-selects-single">
                  <a href="#example-selects-single">Single Selection</a>
                </h3>
<p>For single selection, set the <code>selects</code> attribute to <code>single</code> on <code>&lt;mdui-menu&gt;</code>. The <code>value</code> of <code>&lt;mdui-menu&gt;</code> is the <code>value</code> of the selected <code>&lt;mdui-menu-item&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;single&quot; value=&quot;item-2&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-selects-multiple">
                  <a href="#example-selects-multiple">Multiple Selection</a>
                </h3>
<p>For multiple selection, set the <code>selects</code> attribute to <code>multiple</code> on <code>&lt;mdui-menu&gt;</code>. The <code>value</code> of <code>&lt;mdui-menu&gt;</code> is an array of the selected <code>&lt;mdui-menu-item&gt;</code> values.</p>
<p>Note: For multiple selection, the <code>value</code> of <code>&lt;mdui-menu&gt;</code> is an array and can only be read and set via JavaScript property.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;multiple&quot; class=&quot;example-multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;

&lt;script&gt;
  // Set default selection to item-1 and item-2
  const menu = document.querySelector(&quot;.example-multiple&quot;);
  menu.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>To add Material Icons on the left and right, add <code>icon</code>, <code>end-icon</code> attributes to <code>&lt;mdui-menu-item&gt;</code>. Use <code>end-text</code> attribute to add text on the right side. Alternatively, use <code>icon</code>, <code>end-icon</code>, <code>end-text</code> slots for the same purpose.</p>
<p>Setting <code>icon</code> attribute to an empty string creates space for an icon on the left, aligning it with other items.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item icon=&quot;visibility&quot; end-icon=&quot;add_circle&quot; end-text=&quot;Ctrl+X&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    Item 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;visibility&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;end-icon&quot; name=&quot;add_circle&quot;&gt;&lt;/mdui-icon&gt;
    &lt;span slot=&quot;end-text&quot;&gt;Ctrl+X&lt;/span&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item icon=&quot;&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>For single or multiple selection, use <code>selected-icon</code> attribute or <code>selected-icon</code> slot to define the icon for selected state.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot; selected-icon=&quot;cloud_done&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;
    &lt;mdui-icon slot=&quot;selected-icon&quot; name=&quot;done_outline&quot;&gt;&lt;/mdui-icon&gt;
    Item 2
  &lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>To turn the menu item into a link, use the <code>href</code> attribute on the <code>&lt;mdui-menu-item&gt;</code> component. <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-submenu">
                  <a href="#example-submenu">Submenu</a>
                </h3>
<p>To specify submenu items, use the <code>submenu</code> slot within <code>&lt;mdui-menu-item&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>Set <code>submenu-trigger</code> attribute on <code>&lt;mdui-menu&gt;</code> to define the trigger method for the submenu.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu submenu-trigger=&quot;click&quot;&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>When <code>submenu-trigger=&quot;hover&quot;</code> is set, use <code>submenu-open-delay</code> and <code>submenu-close-delay</code> attributes on <code>&lt;mdui-menu&gt;</code> to set the delay for opening and closing the submenu.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu submenu-trigger=&quot;hover&quot; submenu-open-delay=&quot;1000&quot; submenu-close-delay=&quot;1000&quot;&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">Custom Content</a>
                </h3>
<p>To fully customize the menu item content, use the <code>custom</code> slot in <code>&lt;mdui-menu-item&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;style&gt;
  .custom-item {
    padding: 4px 12px;
  }

  .custom-item .secondary {
    display: none;
    color: #888;
    font-size: 13px;
  }

  .custom-item:hover .secondary {
    display: block
  }
&lt;/style&gt;

&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ABS&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;Absolute value of the number&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ACOS&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;Arc cosine of the number, in radians&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ACOSH&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;Inverse hyperbolic cosine of the number&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,elements:[{name:"MenuItem",tagName:"mdui-menu-item",summary:`<p>Menu Item Component.</p>
<pre><code class="language-html">&lt;mdui-menu&gt;
..&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the menu item.</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the menu item.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Specifies the Material Icons name for the left icon. Alternatively, use <code>slot=&quot;icon&quot;</code>. An empty string reserves space for an icon.</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the right icon. Alternatively, use <code>slot=&quot;end-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"end-text",propertyName:"endText",reflect:!0,description:`<p>Specifies the right text. Alternatively, use <code>slot=&quot;end-text&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"selected-icon",propertyName:"selectedIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the selected state. Alternatively, use <code>slot=&quot;selected-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"submenu-open",propertyName:"submenuOpen",reflect:!0,description:`<p>Opens the submenu.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If specified, the component renders as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
`,type:"string",enum:[]},{attributeName:"download",propertyName:"download",reflect:!0,description:`<p>Instructs the browser to treat the linked URL as a download.</p>
<p><strong>Note</strong>:  This is only available when <code>href</code> is specified.</p>
`,type:"string",enum:[]},{attributeName:"target",propertyName:"target",reflect:!0,description:`<p>Defines where to display the linked URL. Possible values:</p>
<ul>
<li><code>_blank</code>: Opens in a new tab or window.</li>
<li><code>_parent</code>: Opens in the parent browsing context or <code>_self</code> if no parent exists.</li>
<li><code>_self</code>: Opens in the current browsing context. (Default).</li>
<li><code>_top</code>: Opens in the topmost browsing context or <code>_self</code> if no ancestors exist.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"'_blank' | '_parent' | '_self' | '_top'",enum:["'_blank'","'_parent'","'_self'","'_top'"]},{attributeName:"rel",propertyName:"rel",reflect:!0,description:`<p>Specifies the relationship of the linked URL as space-separated link types. Possible values:</p>
<ul>
<li><code>alternate</code>: Alternate versions of the current document.</li>
<li><code>author</code>: Author of the current document or article.</li>
<li><code>bookmark</code>: Permanent link for the nearest ancestor section.</li>
<li><code>external</code>: The referenced document is not part of the same site as the current document.</li>
<li><code>help</code>: Link to context-sensitive help.</li>
<li><code>license</code>: Indicates that the main content of the current document is covered by the copyright license described by the referenced document.</li>
<li><code>me</code>: Indicates that the current document represents the person who owns the linked content.</li>
<li><code>next</code>: Indicates that the current document is part of a series and the next document in the series is the referenced document.</li>
<li><code>nofollow</code>: Indicates that the current document&#39;s original author or publisher does not endorse the referenced document.</li>
<li><code>noreferrer</code>: No <code>Referer</code> header will be included. Also has the same effect as <code>noopener</code>.</li>
<li><code>opener</code>: Creates an auxiliary browsing context if the hyperlink would otherwise create a top-level browsing context that is not an auxiliary browsing context (i.e., has &quot;<code>_blank</code>&quot; as <code>target</code> attribute value).</li>
<li><code>prev</code>: Indicates that the current document is part of a series and the previous document in the series is the referenced document.</li>
<li><code>search</code>: Links to a resource that can be used to search through the current document and its related pages.</li>
<li><code>tag</code>: Gives a tag (identified by the given address) that applies to the current document.</li>
</ul>
<p><strong>Note</strong>: This is only available when <code>href</code> is specified.</p>
`,type:"'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'me' | 'next' | 'nofollow' | 'noreferrer' | 'opener' | 'prev' | 'search' | 'tag'",enum:["'alternate'","'author'","'bookmark'","'external'","'help'","'license'","'me'","'next'","'nofollow'","'noreferrer'","'opener'","'prev'","'search'","'tag'"]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the menu item gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the menu item loses focus.</p>
`},{name:"submenu-open",description:`<p>Emitted when the submenu starts to open. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"submenu-opened",description:`<p>Emitted after the submenu has opened and the animations are completed.</p>
`},{name:"submenu-close",description:`<p>Emitted when the submenu starts to close. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"submenu-closed",description:`<p>Emitted after the submenu has closed and the animations are completed.</p>
`}],slots:[{name:"",description:`<p>Menu item text.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"end-text",description:`<p>Right text.</p>
`},{name:"selected-icon",description:`<p>Icon for the selected state.</p>
`},{name:"submenu",description:`<p>Submenu.</p>
`},{name:"custom",description:`<p>Any custom content.</p>
`}],cssParts:[{name:"container",description:`<p>Menu item container.</p>
`},{name:"icon",description:`<p>Left icon.</p>
`},{name:"label",description:`<p>Text content.</p>
`},{name:"end-icon",description:`<p>Right icon.</p>
`},{name:"end-text",description:`<p>Right text.</p>
`},{name:"selected-icon",description:`<p>Icon for the selected state.</p>
`},{name:"submenu",description:`<p>Submenu element.</p>
`}],cssProperties:[]},{name:"Menu",tagName:"mdui-menu",summary:`<p>Menu Component. It should be used in conjunction with the <code>&lt;mdui-menu-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-menu&gt;
..&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,attributes:[{attributeName:"selects",propertyName:"selects",reflect:!0,description:`<p>Defines the selectable state of menu items. Defaults to non-selectable. Possible values:</p>
<ul>
<li><code>single</code>: Only one item can be selected at a time.</li>
<li><code>multiple</code>: Multiple items can be selected.</li>
</ul>
`,type:"'single' | 'multiple'",enum:["'single'","'multiple'"]},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>The value of the selected <code>&lt;mdui-menu-item&gt;</code>.</p>
<p>Note: The HTML attribute is always a string and can only be set as an initial value when <code>selects=&quot;single&quot;</code>. The JavaScript property value is a string when <code>selects=&quot;single&quot;</code> and an array of strings when <code>selects=&quot;multiple&quot;</code>. In <code>selects=&quot;multiple&quot;</code>, this value can only be modified by changing the JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"]},{attributeName:"dense",propertyName:"dense",reflect:!0,description:`<p>Indicates whether the menu items use a compact layout.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"submenu-trigger",propertyName:"submenuTrigger",reflect:!0,description:`<p>Defines the trigger method for submenus. Supports multiple values separated by spaces. Possible values:</p>
<ul>
<li><code>click</code>: Open submenu when clicking on a menu item.</li>
<li><code>hover</code>: Open submenu when hovering over a menu item.</li>
<li><code>focus</code>: Open submenu when focusing on a menu item.</li>
<li><code>manual</code>: Only programmatically open and close submenus, no other trigger methods can be specified.</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'manual' | string",enum:["'click'","'hover'","'focus'","'manual'","string"],default:"'click hover'"},{attributeName:"submenu-open-delay",propertyName:"submenuOpenDelay",reflect:!0,description:`<p>Specifies the delay (in milliseconds) for opening a submenu via hover.</p>
`,type:"number",enum:[],default:"200"},{attributeName:"submenu-close-delay",propertyName:"submenuCloseDelay",reflect:!0,description:`<p>Specifies the delay (in milliseconds) for closing a submenu via hover.</p>
`,type:"number",enum:[],default:"200"}],methods:[{name:"focus",description:`<p>Sets focus on the element.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Remove focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"change",description:`<p>Emitted when the selected state of menu items changes</p>
`}],slots:[{name:"",description:`<p>Submenu items (<code>&lt;mdui-menu-item&gt;</code>), dividers (<a href="https://cdn.w3cbus.com/docs/2/components/divider"><code>&lt;mdui-divider&gt;</code></a>), and other elements.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
