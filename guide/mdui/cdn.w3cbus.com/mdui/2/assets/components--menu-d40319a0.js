const e={docsHtml:`<p>菜单组件提供了一系列垂直排列的选项。当用户与按钮、或其他控件交互时，将显示菜单。</p>
<p>如果你需要实现下拉菜单，可以配合 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/dropdown"><code>&lt;mdui-dropdown&gt;</code></a> 组件。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/menu.js&#39;;
import &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Menu } from &#39;mdui/components/menu.js&#39;;
import type { MenuItem } from &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-dropdown">
                  <a href="#example-dropdown">下拉菜单</a>
                </h3>
<p>配合 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/dropdown"><code>&lt;mdui-dropdown&gt;</code></a> 组件实现下拉菜单。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dropdown&gt;
  &lt;mdui-button slot=&quot;trigger&quot;&gt;open dropdown&lt;/mdui-button&gt;
  &lt;mdui-menu&gt;
    &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu&gt;
&lt;/mdui-dropdown&gt;
</code></pre>
<h3 id="example-dense">
                  <a href="#example-dense">紧凑布局</a>
                </h3>
<p>在 <code>&lt;mdui-menu&gt;</code> 组件上添加 <code>dense</code> 属性，可以实现紧凑布局。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu dense&gt;
  &lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用菜单项</a>
                </h3>
<p>在 <code>&lt;mdui-menu-item&gt;</code> 组件上添加 <code>disabled</code> 属性，可以禁用菜单项。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item disabled&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-selects-single">
                  <a href="#example-selects-single">支持单选</a>
                </h3>
<p>在 <code>&lt;mdui-menu&gt;</code> 组件上指定 <code>selects</code> 属性为 <code>single</code>，可以实现单选功能。此时 <code>&lt;mdui-menu&gt;</code> 的 <code>value</code> 值即为当前选中的 <code>&lt;mdui-menu-item&gt;</code> 的 <code>value</code> 值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;single&quot; value=&quot;item-2&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-selects-multiple">
                  <a href="#example-selects-multiple">支持多选</a>
                </h3>
<p>在 <code>&lt;mdui-menu&gt;</code> 组件上指定 <code>selects</code> 属性为 <code>multiple</code>，可以实现多选功能。此时 <code>&lt;mdui-menu&gt;</code> 的 <code>value</code> 值即为当前选中的 <code>&lt;mdui-menu-item&gt;</code> 的 <code>value</code> 值组成的数组。</p>
<p>注意：在多选模式下，<code>&lt;mdui-menu&gt;</code> 的 <code>value</code> 值为数组，只能通过 JavaScript 属性来读取和设置该值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;multiple&quot; class=&quot;example-multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;

&lt;script&gt;
  // 设置默认选中 item-1 和 item-2
  const menu = document.querySelector(&quot;.example-multiple&quot;);
  menu.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>在 <code>&lt;mdui-menu-item&gt;</code> 组件上，通过设置 <code>icon</code> 和 <code>end-icon</code> 属性，可以分别在菜单项的左侧和右侧添加 Material Icons 图标。通过设置 <code>end-text</code> 属性，可以在右侧添加文本。此外，也可以通过 <code>icon</code>、<code>end-icon</code> 和 <code>end-text</code> slot 在菜单项的左侧和右侧添加图标和文本。</p>
<p>如果需要在菜单项左侧空出一个图标的位置以保持与其他菜单项的对齐，可以将 <code>icon</code> 属性设置为空字符串。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item icon=&quot;visibility&quot; end-icon=&quot;add_circle&quot; end-text=&quot;Ctrl+X&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    Item 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;visibility&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;end-icon&quot; name=&quot;add_circle&quot;&gt;&lt;/mdui-icon&gt;
    &lt;span slot=&quot;end-text&quot;&gt;Ctrl+X&lt;/span&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item icon=&quot;&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>在单选或多选模式下，可以通过 <code>selected-icon</code> 属性或 <code>selected-icon</code> slot 设置选中状态的图标。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu selects=&quot;multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot; selected-icon=&quot;cloud_done&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;
    &lt;mdui-icon slot=&quot;selected-icon&quot; name=&quot;done_outline&quot;&gt;&lt;/mdui-icon&gt;
    Item 2
  &lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>在 <code>&lt;mdui-menu-item&gt;</code> 组件上设置 <code>href</code> 属性，可以将菜单项转换为链接。此时，还可以使用与链接相关的属性，如：<code>download</code>、<code>target</code> 和 <code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-submenu">
                  <a href="#example-submenu">子菜单</a>
                </h3>
<p>在 <code>&lt;mdui-menu-item&gt;</code> 组件中，可以使用 <code>submenu</code> slot 来指定子菜单项的元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>在 <code>&lt;mdui-menu&gt;</code> 组件上，可以通过 <code>submenu-trigger</code> 属性设置子菜单的触发方式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu submenu-trigger=&quot;click&quot;&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<p>当 <code>submenu-trigger</code> 属性设置为 <code>hover</code> 时，可以在 <code>&lt;mdui-menu&gt;</code> 组件上通过 <code>submenu-open-delay</code> 和 <code>submenu-close-delay</code> 属性设置子菜单的打开延时和关闭延时。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-menu submenu-trigger=&quot;hover&quot; submenu-open-delay=&quot;1000&quot; submenu-close-delay=&quot;1000&quot;&gt;
  &lt;mdui-menu-item&gt;
    Line spacing
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Single&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;1.5&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Double&lt;/mdui-menu-item&gt;
    &lt;mdui-menu-item slot=&quot;submenu&quot;&gt;Custom: 1.2&lt;/mdui-menu-item&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;Paragraph style&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">自定义内容</a>
                </h3>
<p>在 <code>&lt;mdui-menu-item&gt;</code> 组件中，你可以使用 <code>custom</code> slot 来完全自定义菜单项的内容。</p>
<pre><code class="language-html,example,expandable">&lt;style&gt;
  .custom-item {
    padding: 4px 12px;
  }

  .custom-item .secondary {
    display: none;
    color: #888;
    font-size: 13px;
  }

  .custom-item:hover .secondary {
    display: block
  }
&lt;/style&gt;

&lt;mdui-menu&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ABS&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;取数值的绝对值&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ACOS&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;数值的反余弦值，以弧度表示&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item&gt;
    &lt;div slot=&quot;custom&quot; class=&quot;custom-item&quot;&gt;
      &lt;div&gt;ACOSH&lt;/div&gt;
      &lt;div class=&quot;secondary&quot;&gt;数值的反双曲余弦值&lt;/div&gt;
    &lt;/div&gt;
  &lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,elements:[{name:"MenuItem",tagName:"mdui-menu-item",summary:`<p>菜单项组件。需配合 <code>&lt;mdui-menu&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-menu&gt;
..&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>菜单项的值</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用菜单项</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>左侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
<p>如果左侧不需要显示图标，但需要预留一个图标的位置，可传入空字符串进行占位</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>右侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;end-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"end-text",propertyName:"endText",reflect:!0,description:`<p>右侧的文本。也可以通过 <code>slot=&quot;end-text&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"selected-icon",propertyName:"selectedIcon",reflect:!0,description:`<p>选中状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;selected-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"submenu-open",propertyName:"submenuOpen",reflect:!0,description:`<p>是否打开子菜单</p>
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
`},{name:"submenu-open",description:`<p>子菜单开始打开时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止子菜单打开</p>
`},{name:"submenu-opened",description:`<p>子菜单打开动画完成时，事件被触发</p>
`},{name:"submenu-close",description:`<p>子菜单开始关闭时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止子菜单关闭</p>
`},{name:"submenu-closed",description:`<p>子菜单关闭动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>菜单项的文本</p>
`},{name:"icon",description:`<p>菜单项左侧图标</p>
`},{name:"end-icon",description:`<p>菜单项右侧图标</p>
`},{name:"end-text",description:`<p>菜单右侧的文本</p>
`},{name:"selected-icon",description:`<p>选中状态的图标</p>
`},{name:"submenu",description:`<p>子菜单</p>
`},{name:"custom",description:`<p>任意自定义内容</p>
`}],cssParts:[{name:"container",description:`<p>菜单项的容器</p>
`},{name:"icon",description:`<p>左侧的图标</p>
`},{name:"label",description:`<p>文本内容</p>
`},{name:"end-icon",description:`<p>右侧的图标</p>
`},{name:"end-text",description:`<p>右侧的文本</p>
`},{name:"selected-icon",description:`<p>选中状态的图标</p>
`},{name:"submenu",description:`<p>子菜单元素</p>
`}],cssProperties:[]},{name:"Menu",tagName:"mdui-menu",summary:`<p>菜单组件。需配合 <code>&lt;mdui-menu-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-menu&gt;
..&lt;mdui-menu-item&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-menu&gt;
</code></pre>
`,attributes:[{attributeName:"selects",propertyName:"selects",reflect:!0,description:`<p>菜单项的可选状态。默认不可选。可选值包括：</p>
<ul>
<li><code>single</code>：单选</li>
<li><code>multiple</code>：多选</li>
</ul>
`,type:"'single' | 'multiple'",enum:["'single'","'multiple'"]},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>当前选中的 <code>&lt;mdui-menu-item&gt;</code> 的值。</p>
<p><strong>Note</strong>：该属性的 HTML 属性始终为字符串，仅在 <code>selects=&quot;single&quot;</code> 时可通过 HTML 属性设置初始值；该属性的 JavaScript 属性值在 <code>selects=&quot;single&quot;</code> 时为字符串，在 <code>selects=&quot;multiple&quot;</code> 时为字符串数组。因此，在 <code>selects=&quot;multiple&quot;</code> 时，若要修改该值，只能通过修改 JavaScript 属性值实现。</p>
`,type:"string | string[]",enum:["string","string[]"]},{attributeName:"dense",propertyName:"dense",reflect:!0,description:`<p>菜单项是否使用紧凑布局</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"submenu-trigger",propertyName:"submenuTrigger",reflect:!0,description:`<p>子菜单的触发方式，支持多个值，用空格分隔。可选值包括：</p>
<ul>
<li><code>click</code>：点击菜单项时打开子菜单</li>
<li><code>hover</code>：鼠标悬浮到菜单项上时打开子菜单</li>
<li><code>focus</code>：聚焦到菜单项上时打开子菜单</li>
<li><code>manual</code>：仅能通过编程方式打开和关闭子菜单，不能再指定其他触发方式</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'manual' | string",enum:["'click'","'hover'","'focus'","'manual'","string"],default:"'click hover'"},{attributeName:"submenu-open-delay",propertyName:"submenuOpenDelay",reflect:!0,description:`<p>鼠标悬浮触发子菜单打开的延时，单位毫秒</p>
`,type:"number",enum:[],default:"200"},{attributeName:"submenu-close-delay",propertyName:"submenuCloseDelay",reflect:!0,description:`<p>鼠标悬浮触发子菜单关闭的延时，单位毫秒</p>
`,type:"number",enum:[],default:"200"}],methods:[{name:"focus",description:`<p>将焦点设置在当前元素上</p>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>从当前元素中移除焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"change",description:`<p>菜单项选中状态变化时触发</p>
`}],slots:[{name:"",description:`<p>子菜单项（<code>&lt;mdui-menu-item&gt;</code>）、分割线（<a href="https://cdn.w3cbus.com/docs/2/components/divider"><code>&lt;mdui-divider&gt;</code></a>）等元素</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
