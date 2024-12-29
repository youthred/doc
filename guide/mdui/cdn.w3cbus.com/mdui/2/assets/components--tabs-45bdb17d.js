const t={docsHtml:`<p>Tabs organize content across different screens and views.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/tabs.js&#39;;
import &#39;mdui/components/tab.js&#39;;
import &#39;mdui/components/tab-panel.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Tabs } from &#39;mdui/components/tabs.js&#39;;
import type { Tab } from &#39;mdui/components/tab.js&#39;;
import type { TabPanel } from &#39;mdui/components/tab-panel.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">Variant</a>
                </h3>
<p>The <code>variant</code> attribute on the <code>&lt;mdui-tabs&gt;</code> component allows you to set the style of the tabs.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot; variant=&quot;primary&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;

&lt;mdui-tabs value=&quot;tab-1&quot; variant=&quot;secondary&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Tab Placement</a>
                </h3>
<p>The <code>placement</code> attribute on the <code>&lt;mdui-tabs&gt;</code> component allows you to set the position of the tabs.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select class=&quot;example-change-placement&quot; placeholder=&quot;Select placement value&quot; style=&quot;width: 180px&quot;&gt;
  &lt;mdui-menu-item value=&quot;top-start&quot;&gt;top-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;top&quot;&gt;top&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;top-end&quot;&gt;top-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom-start&quot;&gt;bottom-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom&quot;&gt;bottom&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom-end&quot;&gt;bottom-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left-start&quot;&gt;left-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left&quot;&gt;left&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left-end&quot;&gt;left-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right-start&quot;&gt;right-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right&quot;&gt;right&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right-end&quot;&gt;right-end&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-tabs value=&quot;tab-1&quot; placement=&quot;top-start&quot; class=&quot;example-placement&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot; style=&quot;height: 260px&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot; style=&quot;height: 260px&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot; style=&quot;height: 260px&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;

&lt;script&gt;
  const select = document.querySelector(&quot;.example-change-placement&quot;);
  const tabs = document.querySelector(&quot;.example-placement&quot;);

  select.addEventListener(&quot;change&quot;, (event) =&gt; {
    tabs.placement = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-full-width">
                  <a href="#example-full-width">Full Width</a>
                </h3>
<p>To make the tabs occupy the entire width and be evenly distributed, add the <code>full-width</code> attribute to the <code>&lt;mdui-tabs&gt;</code> component.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot; full-width&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>Add Material Icons to the tabs by setting the <code>icon</code> attribute on the <code>&lt;mdui-tab&gt;</code> component. Alternatively, use the <code>icon</code> slot to add icon elements.</p>
<p>Arrange the icon and text horizontally by adding the <code>inline</code> attribute.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot; icon=&quot;library_music&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;
    Tab 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;movie&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot; icon=&quot;menu_book&quot; inline&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">Badge</a>
                </h3>
<p>Add a badge to the <code>&lt;mdui-tab&gt;</code> component using the <code>badge</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;
    Tab 1
    &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">Custom Content</a>
                </h3>
<p>Use the <code>custom</code> slot in the <code>&lt;mdui-tab&gt;</code> component to fully customize the content of the tabs.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;
    Tab 1
    &lt;mdui-chip slot=&quot;custom&quot; icon=&quot;search&quot;&gt;Icon&lt;/mdui-chip&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,elements:[{name:"TabPanel",tagName:"mdui-tab-panel",summary:`<p>Tab Panel Component. It should be used in conjunction with the <code>&lt;mdui-tabs&gt;</code> and <code>&lt;mdui-tab&gt;</code> components.</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Specifies the value of the tab panel.</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>The content of the tab panel.</p>
`}],cssParts:[],cssProperties:[]},{name:"Tab",tagName:"mdui-tab",summary:`<p>Tab Component. It should be used in conjunction with the <code>&lt;mdui-tabs&gt;</code> and <code>&lt;mdui-tab-panel&gt;</code> components.</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Specifies the tab value.</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Specifies the Material Icons name. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"inline",propertyName:"inline",reflect:!0,description:`<p>Arranges the icon and text horizontally.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>Determines if the element should be focused when the page loads.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>Specifies the order in which the element receives focus when navigating with the Tab key.</p>
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>Simulates a mouse click on the element.</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>Sets focus on the element. An optional parameter can be an object with a <code>preventScroll</code> property. If <code>preventScroll</code> is set to <code>true</code>, the page will not scroll to bring the focused element into view.</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>Removes focus from the element.</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the tab gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the tab loses focus.</p>
`}],slots:[{name:"",description:`<p>Tab text.</p>
`},{name:"icon",description:`<p>Tab icon.</p>
`},{name:"badge",description:`<p>Badge.</p>
`},{name:"custom",description:`<p>Custom tab content.</p>
`}],cssParts:[{name:"container",description:`<p>Tab container.</p>
`},{name:"icon",description:`<p>Tab icon.</p>
`},{name:"label",description:`<p>Tab text.</p>
`}],cssProperties:[]},{name:"Tabs",tagName:"mdui-tabs",summary:`<p>Tabs Component. It should be used in conjunction with the <code>&lt;mdui-tab&gt;</code> and <code>&lt;mdui-tab-panel&gt;</code> components.</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the tab shape. Possible values:</p>
<ul>
<li><code>primary</code>: Located below <code>&lt;mdui-top-app-bar&gt;</code>, used for switching between main application pages.</li>
<li><code>secondary</code>: Located within the page, used for switching between related content groups.</li>
</ul>
`,type:"'primary' | 'secondary'",enum:["'primary'","'secondary'"],default:"'primary'"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Specifies the active <code>&lt;mdui-tab&gt;</code> value.</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Defines the tab position. Default is <code>top-start</code>. Possible values:</p>
<ul>
<li><code>top-start</code>: Top, left-aligned.</li>
<li><code>top</code>: Top, center-aligned.</li>
<li><code>top-end</code>: Top, right-aligned.</li>
<li><code>bottom-start</code>: Bottom, left-aligned.</li>
<li><code>bottom</code>: Bottom, center-aligned.</li>
<li><code>bottom-end</code>: Bottom, right-aligned.</li>
<li><code>left-start</code>: Left, top-aligned.</li>
<li><code>left</code>: Left, center-aligned.</li>
<li><code>left-end</code>: Left, bottom-aligned.</li>
<li><code>right-start</code>: Right, top-aligned.</li>
<li><code>right</code>: Right, center-aligned.</li>
<li><code>right-end</code>: Right, bottom-aligned.</li>
</ul>
`,type:"'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'top-start'","'top'","'top-end'","'bottom-start'","'bottom'","'bottom-end'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'top-start'"},{attributeName:"full-width",propertyName:"fullWidth",reflect:!0,description:`<p>If set, the tabs will fill the width of its parent element.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"change",description:`<p>Emitted when the selected value changes.</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-tab&gt;</code> elements.</p>
`},{name:"panel",description:`<p><code>&lt;mdui-tab-panel&gt;</code> elements.</p>
`}],cssParts:[{name:"container",description:`<p>Container for <code>&lt;mdui-tab&gt;</code> elements.</p>
`},{name:"indicator",description:`<p>Indicator for the active state.</p>
`}],cssProperties:[]}]};export{t as default};
