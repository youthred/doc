const t={docsHtml:`<p>The navigation rail provides a means to access different primary pages on tablets and desktop computers.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-rail.js&#39;;
import &#39;mdui/components/navigation-rail-item.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { NavigationRail } from &#39;mdui/components/navigation-rail.js&#39;;
import type { NavigationRailItem } from &#39;mdui/components/navigation-rail-item.js&#39;;
</code></pre>
<p>Example: (Note: The <code>style=&quot;position: relative&quot;</code> in the example is for demonstration purposes, Remove it in actual use.)</p>
<pre><code class="language-html,example">&lt;mdui-navigation-rail value=&quot;recent&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot; value=&quot;recent&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
  &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot; value=&quot;images&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
  &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot; value=&quot;library&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
<p><strong>Notes:</strong></p>
<p>By default, this component uses the <code>position: fixed</code> style and automatically adds <code>padding-left</code> or <code>padding-right</code> to the <code>body</code> to prevent content obscuration.</p>
<p>However, it defaults to <code>position: absolute</code> style in the following cases:</p>
<ol>
<li>When the <code>contained</code> property of the <code>&lt;mdui-navigation-rail&gt;</code> component is <code>true</code>. In this case, it adds <code>padding-left</code> or <code>padding-right</code> style to the parent element.</li>
<li>When it&#39;s within the <a href="https://cdn.w3cbus.com/en/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> component. In this case, it doesn&#39;t add <code>padding-left</code> or <code>padding-right</code> style.</li>
</ol>
<h2 id="examples">
                  <a href="#examples">Styles</a>
                </h2>
<h3 id="example-contained">
                  <a href="#example-contained">In Container</a>
                </h3>
<p>By default, the navigation rail displays on the left or right side of the current window. To place it inside a container, add the <code>contained</code> attribute to the <code>&lt;mdui-navigation-rail&gt;</code> component. This positions the navigation rail relative to the parent element (you need to manually add <code>position: relative</code> style to the parent element).</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">Right Placement</a>
                </h3>
<p>Set the <code>placement</code> attribute of the <code>&lt;mdui-navigation-rail&gt;</code> component to <code>right</code> to display the navigation rail on the right.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail placement=&quot;right&quot; contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-divider">
                  <a href="#example-divider">Display a Divider</a>
                </h3>
<p>Add the <code>divider</code> attribute to the <code>&lt;mdui-navigation-rail&gt;</code> component to add a divider to the navigation rail, distinguishing it from the page content.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail divider contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-top-bottom">
                  <a href="#example-top-bottom">Top/Bottom Elements</a>
                </h3>
<p>Inside the <code>&lt;mdui-navigation-rail&gt;</code> component, you can use the <code>top</code> and <code>bottom</code> slots to add elements at the top and bottom.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-button-icon icon=&quot;menu&quot; slot=&quot;top&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-fab lowered icon=&quot;edit--outlined&quot; slot=&quot;top&quot;&gt;&lt;/mdui-fab&gt;
    &lt;mdui-button-icon icon=&quot;settings&quot; slot=&quot;bottom&quot;&gt;&lt;/mdui-button-icon&gt;

    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 600px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-alignment">
                  <a href="#example-alignment">Vertical Alignment</a>
                </h3>
<p>Set the <code>alignment</code> attribute of the <code>&lt;mdui-navigation-rail&gt;</code> component to modify the vertical alignment of navigation items.</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-alignment&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail alignment=&quot;start&quot; contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 360px;overflow: auto&quot;&gt;
    &lt;mdui-segmented-button-group value=&quot;start&quot; selects=&quot;single&quot;&gt;
      &lt;mdui-segmented-button value=&quot;start&quot;&gt;start&lt;/mdui-segmented-button&gt;
      &lt;mdui-segmented-button value=&quot;center&quot;&gt;center&lt;/mdui-segmented-button&gt;
      &lt;mdui-segmented-button value=&quot;end&quot;&gt;end&lt;/mdui-segmented-button&gt;
    &lt;/mdui-segmented-button-group&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-alignment&quot;);
  const navigationRail = example.querySelector(&quot;mdui-navigation-rail&quot;);
  const segmentedButtonGroup = example.querySelector(&quot;mdui-segmented-button-group&quot;);

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    navigationRail.alignment = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>Use the <code>icon</code> attribute on the <code>&lt;mdui-navigation-rail-item&gt;</code> component to set the icon for the inactive state of the navigation item. The <code>active-icon</code> attribute sets the icon for the active state. Alternatively, use the <code>icon</code> and <code>active-icon</code> slots for the inactive and active states respectively.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot; active-icon=&quot;image--filled&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item&gt;
      Library
      &lt;mdui-icon slot=&quot;icon&quot; name=&quot;library_music--outlined&quot;&gt;&lt;/mdui-icon&gt;
      &lt;mdui-icon slot=&quot;active-icon&quot; name=&quot;library_music--filled&quot;&gt;&lt;/mdui-icon&gt;
    &lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-no-label">
                  <a href="#example-no-label">Icon Only</a>
                </h3>
<p>The <code>&lt;mdui-navigation-rail-item&gt;</code> component can display icons without labels.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>Use the <code>href</code> attribute on the <code>&lt;mdui-navigation-rail-item&gt;</code> component to turn the navigation item into a link. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail divider contained&gt;
    &lt;mdui-navigation-rail-item
      href=&quot;https://www.mdui.org&quot;
      target=&quot;_blank&quot;
      icon=&quot;watch_later--outlined&quot;
    &gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">Badge</a>
                </h3>
<p>Add a badge to the <code>&lt;mdui-navigation-rail-item&gt;</code> component using the <code>badge</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;
      Recent
      &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
    &lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"NavigationRailItem",tagName:"mdui-navigation-rail-item",summary:`<p>Navigation Rail Item Component. It should be used in conjunction with the <code>&lt;mdui-navigation-rail&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-navigation-rail&gt;
..&lt;mdui-navigation-rail-item icon=&quot;watch_later&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;image&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;library_music&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Specifies the Material Icons name for the inactive state. Alternatively, use <code>slot=&quot;icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"active-icon",propertyName:"activeIcon",reflect:!0,description:`<p>Specifies the Material Icons name for the active state. Alternatively, use <code>slot=&quot;active-icon&quot;</code>.</p>
`,type:"string",enum:[]},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the navigation item.</p>
`,type:"string",enum:[]},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>The URL for the hyperlink. If specified, the component renders as an <code>&lt;a&gt;</code> element and can use link-related attributes.</p>
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
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the navigation rail item gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the navigation rail item loses focus.</p>
`}],slots:[{name:"",description:`<p>Text.</p>
`},{name:"icon",description:`<p>Icon.</p>
`},{name:"active-icon",description:`<p>Icon for the active state.</p>
`},{name:"badge",description:`<p>Badge.</p>
`}],cssParts:[{name:"container",description:`<p>Container for the navigation item.</p>
`},{name:"indicator",description:`<p>Indicator.</p>
`},{name:"badge",description:`<p>Badge.</p>
`},{name:"icon",description:`<p>Icon.</p>
`},{name:"active-icon",description:`<p>Icon for the active state.</p>
`},{name:"label",description:`<p>Text.</p>
`}],cssProperties:[{name:"--shape-corner-indicator",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]},{name:"NavigationRail",tagName:"mdui-navigation-rail",summary:`<p>Navigation Rail Component. It should be used in conjunction with the <code>&lt;mdui-navigation-rail-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-navigation-rail&gt;
..&lt;mdui-navigation-rail-item icon=&quot;watch_later&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;image&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;library_music&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the selected <code>&lt;mdui-navigation-rail-item&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Sets the navigation bar&#39;s position. Possible values:</p>
<ul>
<li><code>left</code>: Display on the left.</li>
<li><code>right</code>: Display on the right.</li>
</ul>
`,type:"'left' | 'right'",enum:["'left'","'right'"],default:"'left'"},{attributeName:"alignment",propertyName:"alignment",reflect:!0,description:`<p>Sets the alignment of <code>&lt;mdui-navigation-rail-item&gt;</code>. Possible values:</p>
<ul>
<li><code>start</code>: Aligns to the top.</li>
<li><code>center</code>: Aligns to the center.</li>
<li><code>end</code>: Aligns to the bottom.</li>
</ul>
`,type:"'start' | 'center' | 'end'",enum:["'start'","'center'","'end'"],default:"'start'"},{attributeName:"contained",propertyName:"contained",reflect:!0,description:`<p>By default, the navigation rail displays relative to the <code>body</code> element. When set, it displays relative to its parent element.</p>
<p>Note: You must add <code>position: relative; overflow: hidden;</code> style to the parent element when this attribute is set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"divider",propertyName:"divider",reflect:!0,description:`<p>Adds a divider between the navigation bar and the page content.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[{name:"change",description:`<p>Emitted when the value changes.</p>
`}],slots:[{name:"",description:`<p>Contains <code>&lt;mdui-navigation-rail-item&gt;</code> components.</p>
`},{name:"top",description:`<p>Top element.</p>
`},{name:"bottom",description:`<p>Bottom element.</p>
`}],cssParts:[{name:"top",description:`<p>Container for the top element.</p>
`},{name:"bottom",description:`<p>Container for the bottom element.</p>
`},{name:"items",description:`<p>Container for <code>&lt;mdui-navigation-rail-item&gt;</code> components.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{t as default};
