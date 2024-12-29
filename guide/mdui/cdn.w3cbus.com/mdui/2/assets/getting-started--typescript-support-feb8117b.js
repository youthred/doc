const e={docsHtml:`<p>mdui is developed with TypeScript, offering robust TypeScript support. All official mdui libraries include type declaration files for immediate use.</p>
<h2 id="instance">
                  <a href="#instance">Component Instance Types</a>
                </h2>
<p>Occasionally, you may need to assert a JavaScript variable as an mdui component instance. You can import the corresponding component type directly from mdui.</p>
<p>For example, to import the Tooltip component type from the component file:</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>Alternatively, import the Tooltip component type directly from mdui:</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui&#39;;
</code></pre>
<p>Then, you can assert a JavaScript variable as the Tooltip type:</p>
<pre><code class="language-ts">const tooltip = document.querySelector(&#39;mdui-tooltip&#39;) as Tooltip;
</code></pre>
<p>Your IDE will automatically suggest the properties and methods of the <code>tooltip</code> variable.</p>
<p>When adding an event listener to the <code>tooltip</code> variable, the IDE will also suggest event names, event types, and the <code>this</code> context in the callback function:</p>
<pre><code class="language-ts">tooltip.addEventListener(&#39;open&#39;, function(event) {
});
</code></pre>
<h2 id="event">
                  <a href="#event">Event Types</a>
                </h2>
<p>Each component exports an interface mapping the component&#39;s event names to their corresponding event object types. The interface is named <code>\${componentName}EventMap</code>.</p>
<p>For example, the Tooltip component exports an interface named <code>TooltipEventMap</code>:</p>
<pre><code class="language-ts">export interface TooltipEventMap {
  open: CustomEvent&lt;void&gt;;
  opened: CustomEvent&lt;void&gt;;
  close: CustomEvent&lt;void&gt;;
  closed: CustomEvent&lt;void&gt;;
}
</code></pre>
<p>You can import the <code>TooltipEventMap</code> interface from the component file:</p>
<pre><code class="language-ts">import type { TooltipEventMap } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>Or directly from mdui:</p>
<pre><code class="language-ts">import type { TooltipEventMap } from &#39;mdui&#39;;
</code></pre>
<p>This interface only includes component-specific events. Since mdui components inherit from <code>HTMLElement</code>, they also support <code>HTMLElement</code> events. Use intersection types to get all event types for a component:</p>
<pre><code class="language-ts">type TooltipAndHTMLElementEventMap = TooltipEventMap &amp; HTMLElementEventMap;
</code></pre>
`,elements:[]};export{e as default};
