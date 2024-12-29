const e={docsHtml:`<p>卡片是一个多功能组件，用于承载与单一主题相关的内容和操作。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/card.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Card } from &#39;mdui/components/card.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-card style=&quot;width: 200px;height: 124px&quot;&gt;Card&lt;/mdui-card&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>使用 <code>variant</code> 属性设置卡片的形状。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card variant=&quot;elevated&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
&lt;mdui-card variant=&quot;filled&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
&lt;mdui-card variant=&quot;outlined&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-clickable">
                  <a href="#example-clickable">可点击</a>
                </h3>
<p>添加 <code>clickable</code> 属性可以使卡片可点击，此时会添加鼠标悬浮效果和点击涟漪效果。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card clickable style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>添加 <code>href</code> 属性，可以使卡片变为链接，此时还可以使用这些和链接相关的属性：<code>download</code>、<code>target</code>、<code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot; style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>添加 <code>disabled</code> 属性可以禁用卡片。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-card disabled style=&quot;width: 200px;height: 124px&quot;&gt;&lt;/mdui-card&gt;
</code></pre>
`,elements:[{name:"Card",tagName:"mdui-card",summary:`<p>卡片组件</p>
<pre><code class="language-html">&lt;mdui-card&gt;card content&lt;/mdui-card&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>卡片的形状。可选值包括：</p>
<ul>
<li><code>elevated</code>：带阴影的卡片，与背景的视觉分离度较高</li>
<li><code>filled</code>：带填充色的卡片，与背景的视觉分离度较低</li>
<li><code>outlined</code>：带边框的卡片，与背景的视觉分离度最高</li>
</ul>
`,type:"'elevated' | 'filled' | 'outlined'",enum:["'elevated'","'filled'","'outlined'"],default:"'elevated'"},{attributeName:"clickable",propertyName:"clickable",reflect:!0,description:`<p>是否可点击。为 <code>true</code> 时，卡片将具有鼠标悬浮效果和点击涟漪效果</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用</p>
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
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`}],slots:[{name:"",description:`<p>卡片的内容</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
