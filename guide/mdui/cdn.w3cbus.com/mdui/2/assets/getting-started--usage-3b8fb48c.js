const t={docsHtml:`<p>mdui 的组件都是标准的 Web Components 组件，你可以像使用 <code>&lt;div&gt;</code> 标签一样使用 mdui 组件。每个组件的文档中都详细描述了其完整的 API，包括属性、方法、事件、slot、CSS Part、CSS 自定义属性等。</p>
<p>本章文档将向你介绍 Web Components 的使用方法。</p>
<h2 id="attribute">
                  <a href="#attribute">属性</a>
                </h2>
<p>属性分为 HTML 属性和 JavaScript 属性，它们通常是一一对应的，并且会保持同步。也就是说，当你更新 HTML 属性值时，JavaScript 属性值也会随之更新；反之亦然。</p>
<p>HTML 属性可以直接在组件的 HTML 字符串中设置，并通过 <code>getAttribute</code> 和 <code>setAttribute</code> 方法进行读取和修改：</p>
<pre><code class="language-html">&lt;mdui-button variant=&quot;text&quot;&gt;点我&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  // 修改 HTML 属性
  button.setAttribute(&#39;variant&#39;, &#39;outlined&#39;);

  // 读取 HTML 属性
  console.log(button.getAttribute(&#39;variant&#39;)); // outlined
&lt;/script&gt;
</code></pre>
<p>JavaScript 属性则可以直接读取或设置组件实例的属性值：</p>
<pre><code class="language-html">&lt;mdui-button variant=&quot;text&quot;&gt;点我&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  // 设置 JavaScript 属性
  button.variant = &#39;outlined&#39;;

  // 读取 JavaScript 属性
  console.log(button.variant); // outlined
&lt;/script&gt;
</code></pre>
<p>某些属性值是 boolean 类型，这些属性的 HTML 属性存在时，JavaScript 属性为 <code>true</code>，否则为 <code>false</code>。但是，为了兼容某些框架，mdui 会把字符串 <code>false</code> 值也判定为 boolean 值 <code>false</code>。</p>
<pre><code class="language-html">&lt;!-- 这个组件存在 disabled 属性，即默认 disabled 属性值为 true --&gt;
&lt;mdui-button disabled&gt;&lt;/mdui-button&gt;

&lt;script&gt;
  const button = document.querySelector(&#39;mdui-button&#39;);

  button.removeAttribute(&#39;disabled&#39;); // 等效于 button.disabled = false;
  button.setAttribute(&#39;disabled&#39;, &#39;&#39;); // 等效于 button.disabled = true;

  // 例外情况，设置为字符串 false 值，等效于设置成 boolean 值 false
  button.setAttribute(&#39;disabled&#39;, &#39;false&#39;); // 等效于 button.disabled = false;
&lt;/script&gt;
</code></pre>
<p>有时属性值是数组、对象或函数，这时只有 JavaScript 属性，没有对应的 HTML 属性，例如 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/slider"><code>&lt;mdui-slider&gt;</code></a> 组件的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/slider#attributes-labelFormatter"><code>labelFormatter</code></a> 属性是一个函数，你只能通过 JavaScript 来设置该属性：</p>
<pre><code class="language-html">&lt;mdui-slider&gt;&lt;/mdui-slider&gt;

&lt;script&gt;
  const slider = document.querySelector(&#39;mdui-slider&#39;);
  slider.labelFormatter = (value) =&gt; \`\${value}%\`;
&lt;/script&gt;
</code></pre>
<p>下面以 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/slider"><code>&lt;mdui-slider&gt;</code></a> 组件属性文档的一部分进行举例说明：</p>
<table>
<thead>
<tr>
<th>HTML 属性</th>
<th>JavaScript 属性</th>
<th>reflect</th>
</tr>
</thead>
<tbody><tr>
<td><code>name</code></td>
<td><code>name</code></td>
<td><mdui-icon name="check--rounded" style="user-select:none;font-size:1rem;"></mdui-icon></td>
</tr>
<tr>
<td><code>value</code></td>
<td><code>value</code></td>
<td></td>
</tr>
<tr>
<td></td>
<td><code>labelFormatter</code></td>
<td></td>
</tr>
</tbody></table>
<p>这个组件的 <code>name</code> 属性具有 HTML 属性和 JavaScript 属性，且 reflect 一栏表明更新 JavaScript 属性时会同步更新 HTML 属性。而 <code>value</code> 属性在更新 JavaScript 属性时不会更新 HTML 属性。<code>labelFormatter</code> 属性则只有 JavaScript 属性。</p>
<h2 id="method">
                  <a href="#method">方法</a>
                </h2>
<p>部分组件提供了公共方法，你可以通过调用这些方法来实现不同的功能。例如，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> 组件的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/text-field#methods-focus"><code>focus()</code></a> 方法可以使文本框获得焦点。</p>
<pre><code class="language-html">&lt;mdui-text-field&gt;&lt;/mdui-text-field&gt;

&lt;script&gt;
  const textField = document.querySelector(&#39;mdui-text-field&#39;);
  textField.focus();
&lt;/script&gt;
</code></pre>
<p>可以在各个组件的文档页面查看所有可用的方法及其参数。</p>
<h2 id="event">
                  <a href="#event">事件</a>
                </h2>
<p>部分组件在执行特定操作时会触发事件。例如，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> 组件在打开时会触发 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/dialog#events-open"><code>open</code></a> 事件，你可以监听这个事件来执行自定义操作。</p>
<pre><code class="language-html">&lt;mdui-dialog&gt;Dialog&lt;/mdui-dialog&gt;

&lt;script&gt;
  const dialog = document.querySelector(&#39;mdui-dialog&#39;);

  dialog.addEventListener(&#39;open&#39;, () =&gt; {
    console.log(&#39;对话框开始打开时，会触发该事件&#39;);
  });
&lt;/script&gt;
</code></pre>
<p>可以在各个组件的文档页面查看所有可用的事件及其参数。</p>
<p>如果你在其他框架（如 Vue、React、Angular 等）中使用 mdui，你可以使用框架提供的语法来绑定事件。但是，一些框架（如 React）的事件绑定语法只能用于绑定标准事件（如 <code>click</code> 事件），而无法用于绑定自定义事件（如 <code>open</code> 事件）。因此，在 React 中绑定自定义事件时，你需要先获取元素的引用，然后使用 <code>addEventListener</code> 方法来绑定事件。</p>
<p>关于在 React 中使用 mdui 的更多信息，参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/frameworks/react">与框架集成 - React</a>。</p>
<h2 id="slot">
                  <a href="#slot">Slot</a>
                </h2>
<p>许多组件都提供了 slot，用于将自定义的 HTML 内容插入到组件内部。</p>
<p>最常见的是默认 slot，它是位于组件内部的一段普通 HTML 或纯文本。例如 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> 组件的默认 slot 用于设置按钮的文本。示例中的“点我”就是默认 slot 的内容：</p>
<pre><code class="language-html">&lt;mdui-button&gt;点我&lt;/mdui-button&gt;
</code></pre>
<p>部分组件还提供了具名 slot，具名 slot 需要在 HTML 的 <code>slot</code> 属性中指定 slot 名称。下面的示例中，<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/icon"><code>&lt;mdui-icon&gt;</code></a> 组件指定了 <code>slot=&quot;start&quot;</code>，表示这是名为 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button#slots-icon"><code>start</code></a> 的具名 slot，即这个图标将被插入到组件内部的左侧：</p>
<pre><code class="language-html">&lt;mdui-button&gt;
  &lt;mdui-icon slot=&quot;start&quot; name=&quot;settings&quot;&gt;&lt;/mdui-icon&gt;
  设置
&lt;/mdui-button&gt;
</code></pre>
<p>如果一个组件使用了多个具名 slot，那么各个具名 slot 之间的顺序并不重要，只要它们位于组件内部，浏览器就会自动将它们放置到正确的位置。</p>
<p>可以在各个组件的文档页面查看所有支持的 Slot。</p>
<h2 id="css-custom-properties">
                  <a href="#css-custom-properties">CSS 自定义属性</a>
                </h2>
<p>CSS 自定义属性是 CSS 中的变量。mdui 定义了一系列<a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens">全局 CSS 自定义属性</a>，这些属性在各个组件内部被引用，因此你可以通过修改这些 CSS 自定义属性来全局修改 mdui 组件的样式。</p>
<p>例如，下面的代码会缩小所有组件的圆角大小：</p>
<pre><code class="language-css">:root {
  --mdui-shape-corner-extra-small: 0.125rem;
  --mdui-shape-corner-small: 0.25rem;
  --mdui-shape-corner-medium: 0.375rem;
  --mdui-shape-corner-large: 0.5rem;
  --mdui-shape-corner-extra-large: 0.875rem;
}
</code></pre>
<p>也可以在局部作用域上修改 CSS 自定义属性。例如，下面的代码只会在含 <code>class=&quot;sharp&quot;</code> 的元素及其子元素中缩小圆角大小：</p>
<pre><code class="language-css">.sharp {
  --mdui-shape-corner-extra-small: 0.125rem;
  --mdui-shape-corner-small: 0.25rem;
  --mdui-shape-corner-medium: 0.375rem;
  --mdui-shape-corner-large: 0.5rem;
  --mdui-shape-corner-extra-large: 0.875rem;
}
</code></pre>
<p>一些组件还提供了该组件特有的 CSS 自定义属性，这些属性的作用域为特定组件，所以不包含 <code>--mdui</code> 前缀。例如，下面的代码通过修改 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/dialog"><code>&lt;mdui-dialog&gt;</code></a> 组件的 <code>--z-index</code> 属性，实现了修改 <code>z-index</code> 样式：</p>
<pre><code class="language-css">mdui-dialog {
  --z-index: 3000;
}
</code></pre>
<p>可以在各个组件的文档页面查看组件支持的 CSS 自定义属性。</p>
<h2 id="css-part">
                  <a href="#css-part">CSS Part</a>
                </h2>
<p>mdui 组件使用 shadow DOM 来封装样式和行为，但是常规 CSS 选择器无法选择到 shadow DOM 内部的元素。因此，一些组件为 Shadow DOM 元素添加了 <code>part</code> 属性，你可以使用 <code>::part</code> CSS 选择器来选择到对应的元素，并重写部分样式。</p>
<p>例如，下面的代码使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button#cssParts-button"><code>button</code></a> part 修改了按钮的内边距，且使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button#cssParts-label"><code>label</code></a>、<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button#cssParts-icon"><code>icon</code></a>、<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button#cssParts-end-icon"><code>end-icon</code></a> part 分别修改了文本、左右图标的颜色：</p>
<pre><code class="language-html,example">&lt;mdui-button class=&quot;custom-button&quot; icon=&quot;explore&quot; end-icon=&quot;flight&quot;&gt;Button&lt;/mdui-button&gt;

&lt;style&gt;
  .custom-button::part(button) {
    padding: 0 2rem;
  }

  .custom-button::part(label) {
    color: blue;
  }

  .custom-button::part(icon) {
    color: red;
  }

  .custom-button::part(end-icon) {
    color: yellow;
  }
&lt;/style&gt;
</code></pre>
<p>关于组件 shadow DOM 元素的结构和默认样式，你可以打开浏览器的开发人员工具进行查看。</p>
<p>在使用 CSS Part 之前，你应该先判断使用全局 CSS 自定义属性、及组件特有的 CSS 自定义属性能否满足你的需求，如果能满足需求，则应优先使用 CSS 自定义属性来定制样式。</p>
<p>可以在各个组件的文档页面查看组件公开的所有 <code>part</code> 属性。</p>
<h2 id="update-mechanism">
                  <a href="#update-mechanism">组件更新机制</a>
                </h2>
<p>mdui 组件是基于 <a href="https://lit.dev/" target="_blank" rel="noopener nofollow">Lit</a> 开发的。Lit 是一个轻量级的库，它使 Web Components 的开发更加简单。在使用 mdui 组件时，你可能需要了解其渲染和更新机制。</p>
<p>当你修改 mdui 组件的属性时，组件会进行重新渲染。但是，这个重新渲染过程并不是同步进行的。当你同时修改了多个属性值时，Lit 会将这些变更缓存起来，直到下一个更新周期，以确保无论你修改了多少次属性值，每个组件只会重新渲染一次。并且，只有 shadow DOM 中发生变更的部分会被重新渲染。</p>
<p>在下面的示例中，我们将按钮的 <code>disabled</code> JavaScript 属性值设置为 <code>true</code>，然后立即查询其 HTML 属性。但是，由于此时组件还没有进行重新渲染，因此查询到的 HTML 属性仍然是 <code>false</code>：</p>
<pre><code class="language-js">const button = document.querySelector(&#39;mdui-button&#39;);
button.disabled = true;

console.log(button.hasAttribute(&#39;disabled&#39;)); // false
</code></pre>
<p>如果要等待一个属性值变更后的重新渲染完成，可以使用组件的 <code>updateComplete</code> 属性。该属性返回一个 Promise，在 Promise 被 resolve 后，即表示组件已经完成了重新渲染：</p>
<pre><code class="language-js">const button = document.querySelector(&#39;mdui-button&#39;);
button.disabled = true;

button.updateComplete.then(() =&gt; {
  console.log(button.hasAttribute(&#39;disabled&#39;)); // true
});
</code></pre>
`,elements:[]};export{t as default};
