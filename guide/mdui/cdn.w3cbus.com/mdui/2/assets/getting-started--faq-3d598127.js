const e={docsHtml:`<h2 id="no-self-closing">
                  <a href="#no-self-closing">Why Don&#39;t Components Display with Self-Closing Tags?</a>
                </h2>
<p>mdui is a library based on Web Components. Web Components do not support self-closing tags, so you should always use closing tags with mdui components.</p>
<pre><code class="language-html">&lt;!-- Incorrect usage --&gt;
&lt;mdui-text-field/&gt;

&lt;!-- Correct usage --&gt;
&lt;mdui-text-field&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h2 id="waiting-load">
                  <a href="#waiting-load">How to Prevent Unstyled Components Display Before Loading?</a>
                </h2>
<p>mdui components are registered via JavaScript, which may cause a brief unstyled display until the JavaScript loads and registers the components. Here are two solutions:</p>
<p>One solution is to use the <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:defined" target="_blank" rel="noopener nofollow"><code>:defined</code></a> pseudo-class to hide unregistered mdui components. The following CSS hides all unregistered mdui components and shows them once registered:</p>
<pre><code class="language-css">:not(:defined) {
  visibility: hidden;
}
</code></pre>
<p>Another solution is to use the <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/whenDefined" target="_blank" rel="noopener nofollow"><code>customElements.whenDefined()</code></a> method. This method returns a promise that resolves when the specified component is registered. To handle cases where some components may fail to load, use <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled" target="_blank" rel="noopener nofollow"><code>Promise.allSettled()</code></a>.</p>
<p>In the following example, the <code>&lt;body&gt;</code> element is initially hidden using <code>opacity: 0</code> and fades in after the components are registered. <code>Promise.allSettled()</code> is used to wait for all promises to complete, ensuring the page displays properly even if a component fails to load.</p>
<pre><code class="language-html">&lt;style&gt;
  body {
    opacity: 0;
  }

  body.ready {
    opacity: 1;
    transition: 0.25s opacity;
  }
&lt;/style&gt;

&lt;script type=&quot;module&quot;&gt;
  await Promise.allSettled([
    customElements.whenDefined(&#39;mdui-button&#39;),
    customElements.whenDefined(&#39;mdui-card&#39;),
    customElements.whenDefined(&#39;mdui-checkbox&#39;)
  ]);

  // After registering the button, card, and checkbox components, add the &#39;ready&#39; class to fade in the page
  document.body.classList.add(&#39;ready&#39;);
&lt;/script&gt;
</code></pre>
`,elements:[]};export{e as default};
