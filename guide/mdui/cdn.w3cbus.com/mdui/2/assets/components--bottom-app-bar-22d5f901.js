const t={docsHtml:`<p>The Bottom App Bar provides navigation and key actions at the bottom of a mobile page.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/bottom-app-bar.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { BottomAppBar } from &#39;mdui/components/bottom-app-bar.js&#39;;
</code></pre>
<p>Example: (Note: The <code>style=&quot;position: relative&quot;</code> in the example is for demonstration purposes only. Remove it in actual use.)</p>
<pre><code class="language-html,example">&lt;mdui-bottom-app-bar style=&quot;position: relative;&quot;&gt;
  &lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
  &lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
&lt;/mdui-bottom-app-bar&gt;
</code></pre>
<p><strong>Notes:</strong></p>
<p>The BottomAppBar component uses <code>position: fixed</code> by default. It automatically adds <code>padding-bottom</code> to the <code>body</code> to prevent the page content from being obscured.</p>
<p>However, it uses <code>position: absolute</code> in the following two cases:</p>
<ol>
<li>When the <code>scroll-target</code> attribute is specified. In this case, <code>padding-bottom</code> will be added to the element specified by <code>scroll-target</code>.</li>
<li>When it&#39;s within the <a href="https://cdn.w3cbus.com/en/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> component. In this case, <code>padding-bottom</code> won&#39;t be added.</li>
</ol>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">In Container</a>
                </h3>
<p>By default, the Bottom App Bar displays at the bottom of the page, relative to the current window.</p>
<p>To place it inside a specific container, specify the <code>scroll-target</code> attribute with the CSS selector or DOM element of the container. Ensure the parent element has <code>position: relative; overflow: hidden</code> styles.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar scroll-target=&quot;.example-scroll-target&quot;&gt;Content&lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">Hide on Scroll</a>
                </h3>
<p>To hide the Bottom App Bar when scrolling down and display it when scrolling up, set the <code>scroll-behavior</code> attribute to <code>hide</code>.</p>
<p>The <code>scroll-threshold</code> attribute can be used to set the number of pixels to start hiding the Bottom App Bar.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior&quot;
  &gt;Content&lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-fab-detach">
                  <a href="#example-fab-detach">Fixed Floating Action Button</a>
                </h3>
<p>If the Bottom App Bar includes a <a href="https://cdn.w3cbus.com/en/docs/2/components/fab">Floating Action Button (FAB)</a>, add the <code>fab-detach</code> attribute to anchor the FAB at the page&#39;s bottom right when the Bottom App Bar hides on scroll.</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar
    fab-detach
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-fab-detach&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
  &lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-fab-detach&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"BottomAppBar",tagName:"mdui-bottom-app-bar",summary:`<p>Bottom App Bar Component.</p>
<pre><code class="language-html">&lt;mdui-bottom-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
&lt;/mdui-bottom-app-bar&gt;
</code></pre>
`,attributes:[{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>Hides the bottom app bar when set.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"fab-detach",propertyName:"fabDetach",reflect:!0,description:`<p>When set, detaches the <a href="https://cdn.w3cbus.com/docs/2/components/fab"><code>&lt;mdui-fab&gt;</code></a> from the bottom app bar. The <a href="https://cdn.w3cbus.com/docs/2/components/fab"><code>&lt;mdui-fab&gt;</code></a> remains on the page even after the app bar is hidden.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>Defines the scroll behavior. Possible values:</p>
<ul>
<li><code>hide</code>: Hides when scrolling.</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>The element that listens for scroll events. Accepts a CSS selector, DOM element, or <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ object</a>. Defaults to <code>window</code>.</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>The scroll distance (in pixels) that triggers the scroll behavior.</p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>Specifies the layout order within the <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> component. Items are sorted in ascending order. The default value is <code>0</code>.</p>
`,type:"number",enum:[]}],methods:[],events:[{name:"show",description:`<p>Emitted when the bottom app bar starts to show. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"shown",description:`<p>Emitted after the bottom app bar has shown and animations are complete.</p>
`},{name:"hide",description:`<p>Emitted when the bottom app bar starts to hide. Can be prevented with <code>event.preventDefault()</code>.</p>
`},{name:"hidden",description:`<p>Emitted after the bottom app bar has hidden and animations are complete.</p>
`}],slots:[{name:"",description:`<p>Elements within the bottom app bar.</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`},{name:"--z-index",description:`<p>The CSS <code>z-index</code> value of the component.</p>
`}]}]};export{t as default};
