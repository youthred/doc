const e={docsHtml:`<p>The navigation bar facilitates easy switching between main pages on mobile devices.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-bar.js&#39;;
import &#39;mdui/components/navigation-bar-item.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { NavigationBar } from &#39;mdui/components/navigation-bar.js&#39;;
import type { NavigationBarItem } from &#39;mdui/components/navigation-bar-item.js&#39;;
</code></pre>
<p>Example: (Note: The <code>style=&quot;position: relative&quot;</code> in the example is for demonstration purposes. Remove it in actual use.)</p>
<pre><code class="language-html,example">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<p><strong>Note:</strong></p>
<p>By default, this component uses a <code>position: fixed</code> style and automatically adds a <code>padding-bottom</code> style to the <code>body</code> to prevent page content from being obscured. However, it uses a <code>position: absolute</code> style in the following cases:</p>
<ol>
<li>When the <code>scroll-target</code> attribute is specified. In this case, <code>padding-bottom</code> is added to the specified element.</li>
<li>When it&#39;s inside the <a href="https://cdn.w3cbus.com/en/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> component. In this case, <code>padding-bottom</code> is not added.</li>
</ol>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-label-visibility">
                  <a href="#example-label-visibility">Label Visibility</a>
                </h3>
<p>Text labels in the navigation bar are always visible when there are 3 or fewer navigation items. If there are more than 3 items, only the text of the selected item is displayed.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;

&lt;br/&gt;

&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;directions_railway&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-4&quot;&gt;Item 4&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<p>The <code>label-visibility</code> attribute on <code>&lt;mdui-navigation-bar&gt;</code> controls the visibility of text labels. Possible values:</p>
<ul>
<li><code>selected</code>: Only the text of the selected item is displayed.</li>
<li><code>labeled</code>: Text is always displayed.</li>
<li><code>unlabeled</code>: Text is never displayed.</li>
</ul>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; label-visibility=&quot;selected&quot; style=&quot;position: relative&quot; class=&quot;example-label&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;

&lt;mdui-segmented-button-group value=&quot;selected&quot; selects=&quot;single&quot; style=&quot;margin-top: 16px&quot;&gt;
  &lt;mdui-segmented-button value=&quot;selected&quot;&gt;selected&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;labeled&quot;&gt;labeled&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;unlabeled&quot;&gt;unlabeled&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;

&lt;script&gt;
  const navigationBar = document.querySelector(&quot;.example-label&quot;);
  const segmentedButtonGroup = navigationBar.nextElementSibling;

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    navigationBar.labelVisibility = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">In Container</a>
                </h3>
<p>By default, the navigation bar is relative to the current window and appears at the bottom of the page.</p>
<p>If you want to place the navigation bar within a specific container, use the <code>scroll-target</code> attribute on <code>&lt;mdui-navigation-bar&gt;</code>. The value should be the CSS selector or DOM element of the container with scrollable content. In this case, the navigation bar will be relative to the parent element. You need to manually add the styles <code>position: relative; overflow: hidden</code> to the parent element.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-navigation-bar scroll-target=&quot;.example-scroll-target&quot; value=&quot;item-1&quot;&gt;
    &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;/mdui-navigation-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">Hide on Scroll</a>
                </h3>
<p>The <code>scroll-behavior</code> attribute on <code>&lt;mdui-navigation-bar&gt;</code> controls the visibility of the navigation bar during scrolling. Set its value to <code>hide</code> to hide the navigation bar when scrolling down and show it when scrolling up.</p>
<p>The <code>scroll-threshold</code> attribute sets the number of pixels to start hiding the navigation bar.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-navigation-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior&quot;
    value=&quot;item-1&quot;
  &gt;
    &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;/mdui-navigation-bar&gt;

  &lt;div class=&quot;example-scroll-behavior&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;Page content&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">Icons</a>
                </h3>
<p>The <code>icon</code> attribute on <code>&lt;mdui-navigation-bar-item&gt;</code> sets the icon for the inactive state. The <code>active-icon</code> attribute sets the icon for the active state. Alternatively, use the <code>icon</code> and <code>active-icon</code> slots to set the icons for the inactive and active states.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item
    icon=&quot;place--outlined&quot;
    active-icon=&quot;place&quot;
    value=&quot;item-1&quot;
  &gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item value=&quot;item-2&quot;&gt;
    Item 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people--outlined&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;active-icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">Link</a>
                </h3>
<p>Use the <code>href</code> attribute on the <code>&lt;mdui-navigation-bar-item&gt;</code> component to turn the navigation item into a link. The <code>download</code>, <code>target</code>, and <code>rel</code> attributes are available for link-related functionality.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">Badge</a>
                </h3>
<p>You can add a badge to the <code>&lt;mdui-navigation-bar-item&gt;</code> component using the <code>badge</code> slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;
    Item 1
    &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
  &lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
`,elements:[{name:"NavigationBarItem",tagName:"mdui-navigation-bar-item",summary:`<p>Navigation Bar Item Component. It should be used in conjunction with the <code>&lt;mdui-navigation-bar&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-navigation-bar&gt;
..&lt;mdui-navigation-bar-item icon=&quot;place&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;commute&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;people&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
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
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>Emitted when the navigation bar item gains focus.</p>
`},{name:"blur",description:`<p>Emitted when the navigation bar item loses focus.</p>
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
`}]},{name:"NavigationBar",tagName:"mdui-navigation-bar",summary:`<p>Navigation Bar Component. It should be used in conjunction with the <code>&lt;mdui-navigation-bar-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-navigation-bar&gt;
..&lt;mdui-navigation-bar-item icon=&quot;place&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;commute&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;people&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
`,attributes:[{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>Hides the navigation bar when set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"label-visibility",propertyName:"labelVisibility",reflect:!0,description:`<p>Specifies the visibility of the text. Possible values:</p>
<ul>
<li><code>auto</code>: Visible if there are 3 or fewer options, otherwise only the selected state is visible.</li>
<li><code>selected</code>: Only visible in the selected state.</li>
<li><code>labeled</code>: Always visible.</li>
<li><code>unlabeled</code>: Never visible.</li>
</ul>
`,type:"'auto' | 'selected' | 'labeled' | 'unlabeled'",enum:["'auto'","'selected'","'labeled'","'unlabeled'"],default:"'auto'"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>The value of the selected <code>&lt;mdui-navigation-bar-item&gt;</code>.</p>
`,type:"string",enum:[]},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>Defines the scroll behavior. Possible values:</p>
<ul>
<li><code>hide</code>: Hides when scrolling.</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>The element that listens for scroll events. Accepts a CSS selector, DOM element, or <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ object</a>. Defaults to <code>window</code>.</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>The scroll distance (in pixels) that triggers the scroll behavior.</p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[{name:"change",description:`<p>Emitted when the value changes.</p>
`},{name:"show",description:`<p>Emitted when the navigation bar starts to show. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"shown",description:`<p>Emitted after the navigation bar has shown and animations are complete.</p>
`},{name:"hide",description:`<p>Emitted when the navigation bar starts to hide. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"hidden",description:`<p>Emitted after the navigation bar has hidden and animations are complete.</p>
`}],slots:[{name:"",description:`<p>Contains <code>&lt;mdui-navigation-bar-item&gt;</code> components.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{e as default};
