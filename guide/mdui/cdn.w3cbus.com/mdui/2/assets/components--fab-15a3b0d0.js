const e={docsHtml:`<p>浮动操作按钮（FAB）用于突出显示页面上的主要操作，它将关键操作置于易于访问的位置。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/fab.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Fab } from &#39;mdui/components/fab.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-fab icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>使用 <code>icon</code> 属性指定 Material Icons 图标名称。也可以通过 <code>icon</code> slot 指定图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab&gt;
  &lt;mdui-icon slot=&quot;icon&quot; name=&quot;edit&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-fab&gt;
</code></pre>
<h3 id="example-extended">
                  <a href="#example-extended">展开状态</a>
                </h3>
<p>添加 <code>extended</code> 属性可以将 FAB 设置为展开状态，此时 default slot 中的文本将显示出来。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab extended icon=&quot;edit&quot;&gt;Compose&lt;/mdui-fab&gt;
</code></pre>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>使用 <code>variant</code> 属性可以设置 FAB 的形状。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab variant=&quot;primary&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab variant=&quot;surface&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab variant=&quot;secondary&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab variant=&quot;tertiary&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
<h3 id="example-size">
                  <a href="#example-size">大小</a>
                </h3>
<p>使用 <code>size</code> 属性可以设置 FAB 的大小。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab size=&quot;small&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab size=&quot;normal&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab size=&quot;large&quot; icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>添加 <code>href</code> 属性，可以使 FAB 具有链接功能，此时还可以使用与链接相关的属性：<code>download</code>、<code>target</code>、<code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab icon=&quot;edit&quot; href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用及加载中状态</a>
                </h3>
<p>添加 <code>disabled</code> 属性可以禁用 FAB；添加 <code>loading</code> 属性可以为 FAB 添加加载中状态。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-fab disabled icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab loading icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
&lt;mdui-fab loading disabled icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
`,elements:[{name:"Fab",tagName:"mdui-fab",summary:`<p>浮动操作按钮组件</p>
<pre><code class="language-html">&lt;mdui-fab icon=&quot;edit&quot;&gt;&lt;/mdui-fab&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>FAB 的形状，此组件的不同形状之间只有颜色不一样。可选值包括：</p>
<ul>
<li><code>primary</code>：使用 Primary container 背景色</li>
<li><code>surface</code>：使用 Surface container high 背景色</li>
<li><code>secondary</code>：使用 Secondary container 背景色</li>
<li><code>tertiary</code>：使用 Tertiary container 背景色</li>
</ul>
`,type:"'primary' | 'surface' | 'secondary' | 'tertiary'",enum:["'primary'","'surface'","'secondary'","'tertiary'"],default:"'primary'"},{attributeName:"size",propertyName:"size",reflect:!0,description:`<p>FAB 的大小。可选值包括：</p>
<ul>
<li><code>normal</code>：普通大小 FAB</li>
<li><code>small</code>：小型 FAB</li>
<li><code>large</code>：大型 FAB</li>
</ul>
`,type:"'normal' | 'small' | 'large'",enum:["'normal'","'small'","'large'"],default:"'normal'"},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"extended",propertyName:"extended",reflect:!0,description:`<p>是否为展开状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>链接的目标 URL。</p>
<p>如果设置了此属性，组件内部将渲染为 <code>&lt;a&gt;</code> 元素，并可以使用链接相关的属性。</p>
`,type:"string",enum:[]},{attributeName:"download",propertyName:"download",reflect:!0,description:`<p>下载链接的目标。</p>
<p><strong>Note</strong>：仅在设置了 <code>href</code> 属性时，此属性才有效。</p>
`,type:"string",enum:[]},{attributeName:"target",propertyName:"target",reflect:!0,description:`<p>链接的打开方式。可选值包括：</p>
<ul>
<li><code>_blank</code>：在新窗口中打开链接</li>
<li><code>_parent</code>：在父框架中打开链接</li>
<li><code>_self</code>：默认。在当前框架中打开链接</li>
<li><code>_top</code>：在整个窗口中打开链接</li>
</ul>
<p><strong>Note</strong>：仅在设置了 <code>href</code> 属性时，此属性才有效。</p>
`,type:"'_blank' | '_parent' | '_self' | '_top'",enum:["'_blank'","'_parent'","'_self'","'_top'"]},{attributeName:"rel",propertyName:"rel",reflect:!0,description:`<p>当前文档与被链接文档之间的关系。可选值包括：</p>
<ul>
<li><code>alternate</code>：当前文档的替代版本</li>
<li><code>author</code>：当前文档或文章的作者</li>
<li><code>bookmark</code>：永久链接到最近的祖先章节</li>
<li><code>external</code>：引用的文档与当前文档不在同一站点</li>
<li><code>help</code>：链接到相关的帮助文档</li>
<li><code>license</code>：当前文档的主要内容由被引用文件的版权许可覆盖</li>
<li><code>me</code>：当前文档代表链接内容的所有者</li>
<li><code>next</code>：当前文档是系列中的一部分，被引用的文档是系列的下一个文档</li>
<li><code>nofollow</code>：当前文档的作者或发布者不认可被引用的文件</li>
<li><code>noreferrer</code>：不包含 <code>Referer</code> 头。类似于 <code>noopener</code> 的效果</li>
<li><code>opener</code>：如果超链接会创建一个顶级浏览上下文（即 <code>target</code> 属性值为 <code>_blank</code>），则创建一个辅助浏览上下文</li>
<li><code>prev</code>：当前文档是系列的一部分，被引用的文档是系列的上一个文档</li>
<li><code>search</code>：提供一个资源链接，可用于搜索当前文件及其相关页面</li>
<li><code>tag</code>：提供一个适用于当前文档的标签（由给定地址识别）</li>
</ul>
<p><strong>Note</strong>：仅在指定了 <code>href</code> 属性时可用。</p>
`,type:"'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'me' | 'next' | 'nofollow' | 'noreferrer' | 'opener' | 'prev' | 'search' | 'tag'",enum:["'alternate'","'author'","'bookmark'","'external'","'help'","'license'","'me'","'next'","'nofollow'","'noreferrer'","'opener'","'prev'","'search'","'tag'"]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"loading",propertyName:"loading",reflect:!0,description:`<p>是否处于加载中状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>按钮的名称，将与表单数据一起提交。</p>
<p><strong>Note</strong>：仅在未设置 <code>href</code> 属性时，此属性才有效。</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>按钮的初始值，将与表单数据一起提交。</p>
<p><strong>Note</strong>：仅在未设置 <code>href</code> 属性时，此属性才有效。</p>
`,type:"string",enum:[],default:"''"},{attributeName:"type",propertyName:"type",reflect:!0,description:`<p>按钮的类型。默认类型为 <code>button</code>。可选类型包括：</p>
<ul>
<li><code>submit</code>：点击按钮会提交表单数据到服务器</li>
<li><code>reset</code>：点击按钮会将表单中的所有字段重置为初始值</li>
<li><code>button</code>：此类型的按钮没有默认行为</li>
</ul>
<p><strong>Note</strong>：仅在未指定 <code>href</code> 属性时，此属性才有效。</p>
`,type:"'submit' | 'reset' | 'button'",enum:["'submit'","'reset'","'button'"],default:"'button'"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
<p><strong>Note</strong>：仅在未指定 <code>href</code> 属性时，此属性才有效。</p>
`,type:"string",enum:[]},{attributeName:"formaction",propertyName:"formAction",reflect:!0,description:`<p>指定提交表单的 URL。</p>
<p>如果指定了此属性，将覆盖 <code>&lt;form&gt;</code> 元素的 <code>action</code> 属性。</p>
<p><strong>Note</strong>：仅在未指定 <code>href</code> 属性且 <code>type=&quot;submit&quot;</code> 时，此属性才有效。</p>
`,type:"string",enum:[]},{attributeName:"formenctype",propertyName:"formEnctype",reflect:!0,description:`<p>指定提交表单到服务器的内容类型。可选值包括：</p>
<ul>
<li><code>application/x-www-form-urlencoded</code>：未指定该属性时的默认值</li>
<li><code>multipart/form-data</code>：当表单包含 <code>&lt;input type=&quot;file&quot;&gt;</code> 元素时使用</li>
<li><code>text/plain</code>：HTML5 新增，用于调试</li>
</ul>
<p>如果指定了此属性，将覆盖 <code>&lt;form&gt;</code> 元素的 <code>enctype</code> 属性。</p>
<p><strong>Note</strong>：仅在未指定 <code>href</code> 属性且 <code>type=&quot;submit&quot;</code> 时，此属性才有效。</p>
`,type:"'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",enum:["'application/x-www-form-urlencoded'","'multipart/form-data'","'text/plain'"]},{attributeName:"formmethod",propertyName:"formMethod",reflect:!0,description:`<p>指定提交表单时使用的 HTTP 方法。可选值包括：</p>
<ul>
<li><code>post</code>：表单数据包含在表单内容中，发送到服务器</li>
<li><code>get</code>：表单数据以 <code>?</code> 作为分隔符附加到表单的 URI 属性中，生成的 URI 发送到服务器。当表单没有副作用，并且仅包含 ASCII 字符时，使用此方法</li>
</ul>
<p>如果设置了此属性，将覆盖 <code>&lt;form&gt;</code> 元素的 <code>method</code> 属性。</p>
<p><strong>Note</strong>：仅在未设置 <code>href</code> 属性且 <code>type=&quot;submit&quot;</code> 时，此属性才有效。</p>
`,type:"'post' | 'get'",enum:["'post'","'get'"]},{attributeName:"formnovalidate",propertyName:"formNoValidate",reflect:!0,description:`<p>如果设置了此属性，表单提交时将不执行表单验证。</p>
<p>如果设置了此属性，将覆盖 <code>&lt;form&gt;</code> 元素的 <code>novalidate</code> 属性。</p>
<p><strong>Note</strong>：仅在未设置 <code>href</code> 属性且 <code>type=&quot;submit&quot;</code> 时，此属性才有效。</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"formtarget",propertyName:"formTarget",reflect:!0,description:`<p>提交表单后接收到的响应应显示在何处。可选值包括：</p>
<ul>
<li><code>_self</code>：默认选项，在当前框架中打开</li>
<li><code>_blank</code>：在新窗口中打开</li>
<li><code>_parent</code>：在父框架中打开</li>
<li><code>_top</code>：在整个窗口中打开</li>
</ul>
<p>如果设置了此属性，将覆盖 <code>&lt;form&gt;</code> 元素的 <code>target</code> 属性。</p>
<p><strong>Note</strong>：仅在未设置 <code>href</code> 属性且 <code>type=&quot;submit&quot;</code> 时，此属性才有效。</p>
`,type:"'_self' | '_blank' | '_parent' | '_top'",enum:["'_self'","'_blank'","'_parent'","'_top'"]},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]}],methods:[{name:"click",description:`<p>模拟鼠标点击元素</p>
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
`},{name:"invalid",description:`<p>表单字段验证未通过时触发</p>
`}],slots:[{name:"",description:`<p>文本</p>
`},{name:"icon",description:`<p>图标</p>
`}],cssParts:[{name:"button",description:`<p>内部的 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 元素</p>
`},{name:"label",description:`<p>右侧的文本</p>
`},{name:"icon",description:`<p>左侧的图标</p>
`},{name:"loading",description:`<p>加载中状态的 <code>&lt;mdui-circular-progress&gt;</code> 元素</p>
`}],cssProperties:[{name:"--shape-corner-small",description:`<p><code>size=&quot;small&quot;</code> 时，组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--shape-corner-normal",description:`<p><code>size=&quot;normal&quot;</code> 时，组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--shape-corner-large",description:`<p><code>size=&quot;large&quot;</code> 时，组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
