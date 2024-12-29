const t={docsHtml:`<p>The Top App Bar provides information and actions related to the current screen, serving as a tool for branding, navigation, search, and actions.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/top-app-bar.js&#39;;
import &#39;mdui/components/top-app-bar-title.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { TopAppBar } from &#39;mdui/components/top-app-bar.js&#39;;
import type { TopAppBarTitle } from &#39;mdui/components/top-app-bar-title.js&#39;;
</code></pre>
<p>Example: (Note: The <code>style=&quot;position: relative&quot;</code> in the example is for demonstration purposes. Remove it in actual use.)</p>
<pre><code class="language-html,example">&lt;mdui-top-app-bar style=&quot;position: relative;&quot;&gt;
  &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
  &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
  &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
<p><strong>Notes:</strong></p>
<p>By default, the top app bar uses <code>position: fixed</code> and automatically adds <code>padding-top</code> to the <code>body</code> to prevent the page content from being obscured.</p>
<p>However, it uses <code>position: absolute</code> in the following cases:</p>
<ol>
<li>When the <code>scroll-target</code> attribute is specified. In this case, <code>padding-top</code> is added to the element specified by <code>scroll-target</code>.</li>
<li>When it is within the <a href="https://cdn.w3cbus.com/en/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> component. In this case, <code>padding-top</code> is not added.</li>
</ol>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">In Container</a>
                </h3>
<p>By default, the top app bar is positioned relative to the current window and appears at the top of the page.</p>
<p>To place the top app bar inside a container, specify the <code>scroll-target</code> attribute on the <code>&lt;mdui-top-app-bar&gt;</code> component. Set its value to the CSS selector or DOM element of the container with scrollable content. In this case, the top app bar will be positioned relative to the parent element. Ensure to add the styles <code>position: relative; overflow: hidden</code> to the parent element.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar scroll-target=&quot;.example-scroll-target&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-variant">
                  <a href="#example-variant">Shape</a>
                </h3>
<p>The <code>variant</code> attribute on the <code>&lt;mdui-top-app-bar&gt;</code> component sets the shape of the top app bar.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar variant=&quot;small&quot; scroll-target=&quot;.example-variant&quot; class=&quot;example-variant-bar&quot;&gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-variant&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;
      &lt;mdui-segmented-button-group selects=&quot;single&quot; value=&quot;small&quot;&gt;
        &lt;mdui-segmented-button value=&quot;center-aligned&quot;&gt;center-aligned&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;small&quot;&gt;small&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;medium&quot;&gt;medium&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;large&quot;&gt;large&lt;/mdui-segmented-button&gt;
      &lt;/mdui-segmented-button-group&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const topAppBar = document.querySelector(&quot;.example-variant-bar&quot;);
  const segmentedButtonGroup = document.querySelector(&quot;.example-variant&quot;);

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    topAppBar.variant = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">Scroll Behavior</a>
                </h3>
<p>The <code>scroll-behavior</code> attribute on the <code>&lt;mdui-top-app-bar&gt;</code> component defines the top app bar&#39;s behavior when the page is scrolled. You can use multiple scroll behaviors simultaneously by separating them with spaces.</p>
<p>Scroll behaviors include:</p>
<ul>
<li><code>hide</code>: Hides the top app bar when scrolling down and shows it when scrolling up.</li>
<li><code>shrink</code>: Effective when <code>variant</code> is <code>medium</code> or <code>large</code>. Expands the top app bar when scrolling down and shrinks it when scrolling up.</li>
<li><code>elevate</code>: Adds a shadow to the top app bar when scrolling down and removes the shadow when scrolling back to the top.</li>
</ul>
<p>The <code>scroll-threshold</code> attribute sets the number of pixels to start the scroll behavior of the top app bar. (Do not set the <code>scroll-threshold</code> attribute when using the <code>elevate</code> scroll behavior to respond promptly)</p>
<p><strong>Example: Hide on Scroll</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior-hide&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-hide&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>Example: Add Shadow on Scroll</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;elevate&quot;
    scroll-target=&quot;.example-scroll-behavior-elevate&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-elevate&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>Example: Shrink on Scroll</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior-shrink&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-shrink&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>Example: Shrink and Add Shadow on Scroll</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink elevate&quot;
    scroll-target=&quot;.example-scroll-behavior-shrink-elevate&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-shrink-elevate&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="label-large">
                  <a href="#label-large">Expanded State Text</a>
                </h3>
<p>For a top app bar with <code>variant</code> set to <code>medium</code> or <code>large</code>, and <code>scroll-behavior</code> set to <code>shrink</code>, you can use the <code>label-large</code> slot within the <code>&lt;mdui-top-app-bar-title&gt;</code> component to specify the text displayed in the expanded state.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink elevate&quot;
    scroll-target=&quot;.example-label-large-slot&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;
      This is the collapsed state title
      &lt;span slot=&quot;label-large&quot;&gt;This is the expanded state title&lt;/span&gt;
    &lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-label-large-slot&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"TopAppBarTitle",tagName:"mdui-top-app-bar-title",summary:`<p>Top App Bar Title Component. It should be used in conjunction with the <code>&lt;mdui-top-app-bar&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-top-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>The title text of the top app bar.</p>
`},{name:"label-large",description:`<p>The title text when the top app bar is in the expanded state.</p>
`}],cssParts:[{name:"label",description:`<p>The title text.</p>
`},{name:"label-large",description:`<p>The title text when the top app bar is in the expanded state.</p>
`}],cssProperties:[]},{name:"TopAppBar",tagName:"mdui-top-app-bar",summary:`<p>Top App Bar Component.</p>
<pre><code class="language-html">&lt;mdui-top-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>Defines the top app bar style. Default is <code>small</code>. Possible values:</p>
<ul>
<li><code>center-aligned</code>: Small app bar with a center-aligned title.</li>
<li><code>small</code>: Small app bar.</li>
<li><code>medium</code>: Medium-sized app bar.</li>
<li><code>large</code>: Large-sized app bar.</li>
</ul>
`,type:"'center-aligned' | 'small' | 'medium' | 'large'",enum:["'center-aligned'","'small'","'medium'","'large'"],default:"'small'"},{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>Hide the top app bar.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"shrink",propertyName:"shrink",reflect:!0,description:`<p>Shrinks the app bar to <code>small</code> style. Only applicable for <code>medium</code> or <code>large</code> variants.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>Defines the scroll behavior. Accepts multiple space-separated values. Possible values:</p>
<ul>
<li><code>hide</code>: Hides when scrolling.</li>
<li><code>shrink</code>: Shrinks when scrolling for medium to large app bars.</li>
<li><code>elevate</code>: Increases elevation when scrolling.</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>The element that listens for scroll events. Accepts a CSS selector, DOM element, or <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ object</a>. Defaults to <code>window</code>.</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>The scroll distance (in pixels) that triggers the scroll behavior.</p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[{name:"show",description:`<p>Emitted when the top app bar starts to show. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"shown",description:`<p>Emitted after the top app bar has shown and animations are complete.</p>
`},{name:"hide",description:`<p>Emitted when the top app bar starts to hide. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"hidden",description:`<p>Emitted after the top app bar has hidden and animations are complete.</p>
`}],slots:[{name:"",description:`<p>Elements contained within the top app bar.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{t as default};
