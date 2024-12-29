const n={docsHtml:`<p>该函数用于判断页面的断点。</p>
<p>mdui 提供了 6 个断点，分别为：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code>。其默认值可在 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens#breakpoint">设计令牌</a> 页面查看。你可以使用此函数来判断页面宽度是否大于、小于、等于、不等于指定的断点，或者是否在指定的断点范围内。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { breakpoint } from &#39;mdui/functions/breakpoint.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">const breakpointCondition = breakpoint();

// 判断当前页面断点是否大于 sm
breakpointCondition.up(&#39;sm&#39;);

// 判断当前页面断点是否小于 lg
breakpointCondition.down(&#39;lg&#39;);

// 判断当前页面断点是否等于 md
breakpointCondition.only(&#39;md&#39;);

// 判断当前页面断点是否不等于 xl
breakpointCondition.not(&#39;xl&#39;);

// 判断当前页面断点是否在 sm 和 lg 之间
breakpointCondition.between(&#39;sm&#39;, &#39;lg&#39;);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">breakpoint(width?: number | string | HTMLElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): <a href="#api-breakpointCondition">breakpointCondition</a></code></pre>

<p>该函数返回 <a href="#api-breakpointCondition"><code>breakpointCondition</code></a> 对象。函数的行为取决于传入的参数类型：</p>
<ul>
<li>如果不传入参数，将返回当前页面宽度的 <code>breakpointCondition</code> 对象。</li>
<li>如果传入数值，将返回指定宽度的 <code>breakpointCondition</code> 对象。</li>
<li>如果传入 CSS 选择器，将返回该选择器对应元素宽度的 <code>breakpointCondition</code> 对象。</li>
<li>如果传入 HTML 元素，将返回该元素宽度的 <code>breakpointCondition</code> 对象。</li>
<li>如果传入 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a>，将返回该 JQ 对象中元素的宽度的 <code>breakpointCondition</code> 对象。</li>
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
   * 当前宽度是否大于指定断点值
   */
  up(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * 当前宽度是否小于指定断点值
   */
  down(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * 当前宽度是否在指定断点值内
   */
  only(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * 当前宽度是否不在指定断点值内
   */
  not(breakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;

  /**
   * 当前宽度是否在指定断点值之间
   */
  between(startBreakpoint: <a href="#api-Breakpoint">Breakpoint</a>, endBreakpoint: <a href="#api-Breakpoint">Breakpoint</a>): boolean;
}</code></pre>
`,elements:[]};export{n as default};
