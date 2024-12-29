const e={docsHtml:`<p>滑块组件允许用户通过滑动滑块从一系列值中进行选择。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/slider.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Slider } from &#39;mdui/components/slider.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-slider&gt;&lt;/mdui-slider&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-value">
                  <a href="#example-value">默认值</a>
                </h3>
<p>通过 <code>value</code> 属性，可以读取或设置滑块的当前值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider value=&quot;50&quot;&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>添加 <code>disabled</code> 属性可以禁用滑块。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider disabled&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-min-max">
                  <a href="#example-min-max">范围</a>
                </h3>
<p>使用 <code>min</code> 和 <code>max</code> 属性来设置滑块的最小值和最大值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider min=&quot;10&quot; max=&quot;20&quot;&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-step">
                  <a href="#example-step">步进间隔</a>
                </h3>
<p>通过 <code>step</code> 属性，你可以设置滑块的步进间隔。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider step=&quot;10&quot;&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-tickmarks">
                  <a href="#example-tickmarks">刻度标记</a>
                </h3>
<p>添加 <code>tickmarks</code> 属性，可以在滑块上显示刻度标记。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider tickmarks step=&quot;10&quot;&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-nolabel">
                  <a href="#example-nolabel">隐藏文本提示</a>
                </h3>
<p>如果你想隐藏滑块上的文本提示，可以添加 <code>nolabel</code> 属性。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider nolabel&gt;&lt;/mdui-slider&gt;
</code></pre>
<h3 id="example-labelFormatter">
                  <a href="#example-labelFormatter">修改文本提示</a>
                </h3>
<p>可以通过 <code>labelFormatter</code> JavaScript 属性来修改文本提示的显示格式。这个属性的值应该是一个函数，该函数接收当前滑块的值作为参数，返回你希望显示的文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-slider class=&quot;example-label-formatter&quot;&gt;&lt;/mdui-slider&gt;

&lt;script&gt;
  const slider = document.querySelector(&quot;.example-label-formatter&quot;);
  slider.labelFormatter = (value) =&gt; \`\${value} 小时\`;
&lt;/script&gt;
</code></pre>
`,elements:[{name:"Slider",tagName:"mdui-slider",summary:`<p>滑块组件</p>
<pre><code class="language-html">&lt;mdui-slider&gt;&lt;/mdui-slider&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>滑块的值，将于表单数据一起提交</p>
`,type:"number",enum:[],default:"0"},{propertyName:"defaultValue",reflect:!1,description:`<p>默认值。在重置表单时，将重置为该默认值。该属性只能通过 JavaScript 属性设置</p>
`,type:"number",enum:[],default:"0"},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]},{attributeName:"min",propertyName:"min",reflect:!0,description:`<p>滑块的最小值，默认为 <code>0</code></p>
`,type:"number",enum:[],default:"0"},{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>滑块的最大值，默认为 <code>100</code></p>
`,type:"number",enum:[],default:"100"},{attributeName:"step",propertyName:"step",reflect:!0,description:`<p>步进间隔，默认为 <code>1</code></p>
`,type:"number",enum:[],default:"1"},{attributeName:"tickmarks",propertyName:"tickmarks",reflect:!0,description:`<p>是否添加刻度标记</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"nolabel",propertyName:"nolabel",reflect:!0,description:`<p>是否隐藏文本提示</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否被禁用</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>滑块的名称，该名称将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]},{propertyName:"labelFormatter",reflect:!1,description:`<p>用于自定义标签的显示格式的函数。函数参数为滑块的当前值，返回值为期望显示的文本。</p>
`,type:"(value: number) => string",enum:[]}],methods:[{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}},{name:"checkValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code></p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code>。</p>
<p>如果验证未通过，还会在组件上显示验证失败的提示。</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`},{name:"change",description:`<p>在值发生变更，且失去焦点时，将触发该事件</p>
`},{name:"input",description:`<p>值变更时触发</p>
`},{name:"invalid",description:`<p>表单字段验证未通过时触发</p>
`}],slots:[],cssParts:[{name:"track-inactive",description:`<p>未激活状态的轨道</p>
`},{name:"track-active",description:`<p>已激活状态的轨道</p>
`},{name:"handle",description:`<p>操作杆</p>
`},{name:"label",description:`<p>提示文本</p>
`},{name:"tickmark",description:`<p>刻度标记</p>
`}],cssProperties:[]}]};export{e as default};
