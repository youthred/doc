const e={docsHtml:`<p>This function is designed to determine page breakpoints.</p>
<p>mdui provides 6 breakpoints: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>. Default values can be found on the <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens#breakpoint">Design Tokens</a> page. This function allows you to check if the current page width is greater than, less than, equal to, not equal to a specified breakpoint, or within a specified range.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { breakpoint } from &#39;mdui/functions/breakpoint.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">const breakpointCondition = breakpoint();

// Check if the current page breakpoint is greater than &#39;sm&#39;
breakpointCondition.up(&#39;sm&#39;);

// Check if the current page breakpoint is less than &#39;lg&#39;
breakpointCondition.down(&#39;lg&#39;);

// Check if the current page breakpoint is equal to &#39;md&#39;
breakpointCondition.only(&#39;md&#39;);

// Check if the current page breakpoint is not equal to &#39;xl&#39;
breakpointCondition.not(&#39;xl&#39;);

// Check if the current page breakpoint is between &#39;sm&#39; and &#39;lg&#39;
breakpointCondition.between(&#39;sm&#39;, &#39;lg&#39;);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">breakpoint(width?: number | string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): <a href="#api-breakpointCondition">breakpointCondition</a></code></pre>

<p>This function returns a <a href="#api-breakpointCondition"><code>breakpointCondition</code></a> object. The behavior of the function depends on the type of the parameter passed:</p>
<ul>
<li>If no parameter is passed, it returns the <code>breakpointCondition</code> for the current page width.</li>
<li>If a number is passed, it returns the <code>breakpointCondition</code> for the specified width.</li>
<li>If a CSS selector is passed, it returns the <code>breakpointCondition</code> for the width of the corresponding element.</li>
<li>If an HTML element is passed, it returns the <code>breakpointCondition</code> for the width of the specified element.</li>
<li>If a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a> is passed, it returns the <code>breakpointCondition</code> for the width of the element within the JQ object.</li>
</ul>
<h3 id="api-Breakpoint">
                  <a href="#api-Breakpoint">Breakpoint</a>
                </h3>
<pre><code class="language-ts">type Breakpoint = &#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;;
</code></pre>
<h3 id="api-breakpointCondition">
                  <a href="#api-breakpointCondition">breakpointCondition</a>
                </h3>
<pre><code class="nohighlight">{
  /**
   * Checks if the current width is greater than the specified breakpoint.
   */
  up(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * Checks if the current width is less than the specified breakpoint.
   */
  down(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * Checks if the current width is within the specified breakpoint.
   */
  only(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * Checks if the current width is not within the specified breakpoint.
   */
  not(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * Checks if the current width is not within the specified breakpoint.
   */
  between(startBreakpoint: <a href="#api-Breakpoint">Breakpoint</a>, endBreakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;
}</code></pre>
`,elements:[]};export{e as default};
