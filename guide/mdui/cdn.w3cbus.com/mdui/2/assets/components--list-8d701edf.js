const e={docsHtml:`<p>列表是一种垂直排列的索引，用于展示文本或图片，便于用户快速浏览和访问相关信息。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/list.js&#39;;
import &#39;mdui/components/list-item.js&#39;;
import &#39;mdui/components/list-subheader.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { List } from &#39;mdui/components/list.js&#39;;
import type { ListItem } from &#39;mdui/components/list-item.js&#39;;
import type { ListSubheader } from &#39;mdui/components/list-subheader.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
  &lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-text">
                  <a href="#example-text">文本内容</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上设置 <code>headline</code> 属性，可以设定列表项的主文本，设置 <code>description</code> 属性，可以设定副文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item headline=&quot;Headline&quot;&gt;&lt;/mdui-list-item&gt;
  &lt;mdui-list-item headline=&quot;Headline&quot; description=&quot;Supporting text&quot;&gt;&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>也可以通过 default slot 设定主文本，通过 <code>description</code> slot 设定副文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;
    Headline
    &lt;span slot=&quot;description&quot;&gt;Supporting text&lt;/span&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>默认情况下，主文本和副文本无论长度如何，都会完全显示。你可以通过设置 <code>headline-line</code> 和 <code>description-line</code> 属性为主文本和副文本添加行数限制，最多可以限制为 3 行。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item headline-line=&quot;1&quot; description-line=&quot;2&quot;&gt;
    Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline Headline
    &lt;span slot=&quot;description&quot;&gt;Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text Supporting text&lt;/span&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-side">
                  <a href="#example-side">两侧内容</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上设置 <code>icon</code> 和 <code>end-icon</code> 属性，可以在列表项的左侧和右侧添加 Material Icons 图标。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item icon=&quot;people&quot; end-icon=&quot;arrow_right&quot;&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<p>也可以通过 <code>icon</code> 和 <code>end-icon</code> slot 在列表项的左侧和右侧添加元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;
    Headline
    &lt;mdui-avatar slot=&quot;icon&quot; src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
    &lt;mdui-checkbox slot=&quot;end-icon&quot;&gt;&lt;/mdui-checkbox&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>通过设置 <code>href</code> 属性，可以将列表项转换为链接。此时，你还可以使用与链接相关的属性，如：<code>download</code>、<code>target</code> 和 <code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上添加 <code>disabled</code> 属性，可以禁用该列表项。此时，列表项中的 checkbox、radio、switch 等组件也会被禁用。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item disabled&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-active">
                  <a href="#example-active">激活状态</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上添加 <code>active</code> 属性，可以激活该列表项。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item active&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-nonclickable">
                  <a href="#example-nonclickable">不可点击状态</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上添加 <code>nonclickable</code> 属性，可以移除列表项上的鼠标悬浮和点击涟漪效果。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item nonclickable&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-rounded">
                  <a href="#example-rounded">圆角形状</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上添加 <code>rounded</code> 属性，可以使该列表项呈现圆角形状。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item rounded&gt;Headline&lt;/mdui-list-item&gt;
  &lt;mdui-list-item rounded&gt;Headline&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-alignment">
                  <a href="#example-alignment">垂直对齐方式</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件上设置 <code>alignment</code> 属性，可以调整列表项左右两侧元素与列表项的对齐方式。其值可以为：</p>
<ul>
<li><code>start</code>：顶部对齐</li>
<li><code>center</code>：居中对齐</li>
<li><code>end</code>：底部对齐</li>
</ul>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item alignment=&quot;start&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
  &lt;mdui-list-item alignment=&quot;center&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
  &lt;mdui-list-item alignment=&quot;end&quot; description=&quot;Supporting text&quot;&gt;
    Headline
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">自定义内容</a>
                </h3>
<p>在 <code>&lt;mdui-list-item&gt;</code> 组件中使用 <code>custom</code> slot，可以完全自定义列表项的内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-item&gt;
    &lt;div slot=&quot;custom&quot; style=&quot;display: flex;&quot;&gt;
      &lt;mdui-icon name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
      &lt;div&gt;test&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"ListItem",tagName:"mdui-list-item",summary:`<p>列表项组件。需配合 <code>&lt;mdui-list&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>主文本。也可以通过 default slot 设置</p>
`,type:"string",enum:[]},{attributeName:"headline-line",propertyName:"headlineLine",reflect:!0,description:`<p>主文本行数，超过限制后将截断显示。默认无行数限制。可选值包括：</p>
<ul>
<li><code>1</code>：显示单行，超出后截断</li>
<li><code>2</code>：显示两行，超出后截断</li>
<li><code>3</code>：显示三行，超出后截断</li>
</ul>
`,type:"1 | 2 | 3",enum:["1","2","3"]},{attributeName:"description",propertyName:"description",reflect:!0,description:`<p>副文本。也可以通过 <code>slot=&quot;description&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"description-line",propertyName:"descriptionLine",reflect:!0,description:`<p>副文本行数，超过限制后将截断显示。默认无行数限制。可选值包括：</p>
<ul>
<li><code>1</code>：显示单行，超出后截断</li>
<li><code>2</code>：显示两行，超出后截断</li>
<li><code>3</code>：显示三行，超出后截断</li>
</ul>
`,type:"1 | 2 | 3",enum:["1","2","3"]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>左侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>右侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;end-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用该列表项，禁用后，列表项将变为灰色，且其中的 <a href="https://cdn.w3cbus.com/docs/2/components/checkbox"><code>&lt;mdui-checkbox&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/radio"><code>&lt;mdui-radio&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/switch"><code>&lt;mdui-switch&gt;</code></a> 等也将禁用</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"active",propertyName:"active",reflect:!0,description:`<p>是否激活该列表项</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"nonclickable",propertyName:"nonclickable",reflect:!0,description:`<p>是否使列表项不可点击。设置后，列表项中的 <a href="https://cdn.w3cbus.com/docs/2/components/checkbox"><code>&lt;mdui-checkbox&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/radio"><code>&lt;mdui-radio&gt;</code></a>、<a href="https://cdn.w3cbus.com/docs/2/components/switch"><code>&lt;mdui-switch&gt;</code></a> 等仍可交互</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"rounded",propertyName:"rounded",reflect:!0,description:`<p>是否使用圆角形状的列表项</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"alignment",propertyName:"alignment",reflect:!0,description:`<p>列表项的垂直对齐方式。可选值包括：</p>
<ul>
<li><code>start</code>：顶部对齐</li>
<li><code>center</code>：居中对齐</li>
<li><code>end</code>：底部对齐</li>
</ul>
`,type:"'start' | 'center' | 'end'",enum:["'start'","'center'","'end'"],default:"'center'"},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>链接的目标 URL。</p>
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
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`}],slots:[{name:"",description:`<p>主文本</p>
`},{name:"description",description:`<p>副文本</p>
`},{name:"icon",description:`<p>列表项左侧的元素</p>
`},{name:"end-icon",description:`<p>列表项右侧的元素</p>
`},{name:"custom",description:`<p>任意自定义内容</p>
`}],cssParts:[{name:"container",description:`<p>列表项容器</p>
`},{name:"icon",description:`<p>左侧图标</p>
`},{name:"end-icon",description:`<p>右侧图标</p>
`},{name:"body",description:`<p>中间部分</p>
`},{name:"headline",description:`<p>主标题</p>
`},{name:"description",description:`<p>副标题</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>列表项的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--shape-corner-rounded",description:`<p>指定了 <code>rounded</code> 属性时，列表项的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]},{name:"ListSubheader",tagName:"mdui-list-subheader",summary:`<p>列表标题组件。需配合 <code>&lt;mdui-list&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>列表标题文本</p>
`}],cssParts:[],cssProperties:[]},{name:"List",tagName:"mdui-list",summary:`<p>列表组件。需配合 <code>&lt;mdui-list-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-list&gt;
..&lt;mdui-list-subheader&gt;Subheader&lt;/mdui-list-subheader&gt;
..&lt;mdui-list-item&gt;Item 1&lt;/mdui-list-item&gt;
..&lt;mdui-list-item&gt;Item 2&lt;/mdui-list-item&gt;
&lt;/mdui-list&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p><code>&lt;mdui-list-item&gt;</code> 元素</p>
`}],cssParts:[],cssProperties:[]}]};export{e as default};
