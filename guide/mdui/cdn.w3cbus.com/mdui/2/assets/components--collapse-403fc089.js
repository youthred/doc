const t={docsHtml:`<p>折叠面板组件用于将复杂的内容区域进行分组和隐藏，以保持页面的整洁。</p>
<p>请注意，折叠面板组件本身不包含任何样式，你需要自行添加样式，或者与其他组件一起使用。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/collapse.js&#39;;
import &#39;mdui/components/collapse-item.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Collapse } from &#39;mdui/components/collapse.js&#39;;
import type { CollapseItem } from &#39;mdui/components/collapse-item.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-collapse&gt;
  &lt;mdui-collapse-item header=&quot;first header&quot;&gt;first content&lt;/mdui-collapse-item&gt;
  &lt;mdui-collapse-item header=&quot;second header&quot;&gt;second content&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-header">
                  <a href="#example-header">面板标题与内容</a>
                </h3>
<p>通过 <code>&lt;mdui-collapse-item&gt;</code> 组件的 <code>header</code> 属性可以设置面板头部的文本，也可以通过 <code>header</code> slot 来指定面板头部元素。组件的 default slot 用于面板内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-accordion">
                  <a href="#example-accordion">手风琴模式</a>
                </h3>
<p>在 <code>&lt;mdui-collapse&gt;</code> 组件上添加 <code>accordion</code> 属性可以启用手风琴模式，这样一次只会有一个面板处于打开状态。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse accordion&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-value">
                  <a href="#example-value">设置激活的面板</a>
                </h3>
<p>通过 <code>&lt;mdui-collapse&gt;</code> 组件的 <code>value</code> 属性，你可以获取当前打开的面板，或设置需要打开的面板。</p>
<p>在手风琴模式下，<code>value</code> 属性的值为字符串，你可以使用 HTML 属性或 JavaScript 属性来操作该属性；在非手风琴模式下，<code>value</code> 属性的值为数组，此时只能通过 JavaScript 属性进行操作。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;手风琴模式&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse accordion value=&quot;item-1&quot;&gt;
    &lt;mdui-collapse-item value=&quot;item-1&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item value=&quot;item-2&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;

  &lt;mdui-list-subheader&gt;非手风琴模式&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse class=&quot;example-value&quot;&gt;
    &lt;mdui-collapse-item value=&quot;item-1&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item value=&quot;item-2&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;

&lt;script&gt;
  const collapse = document.querySelector(&quot;.example-value&quot;);
  collapse.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>通过在 <code>&lt;mdui-collapse&gt;</code> 组件上添加 <code>disabled</code> 属性，可以禁用整个折叠面板组。同样，通过在 <code>&lt;mdui-collapse-item&gt;</code> 组件上添加 <code>disabled</code> 属性，可以禁用特定的折叠面板。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;全部禁用&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse disabled&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;

  &lt;mdui-list-subheader&gt;禁用第一个面板&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item disabled&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">触发折叠的元素</a>
                </h3>
<p>默认情况下，点击整个面板头部区域会触发折叠。你可以通过设置 <code>&lt;mdui-collapse-item&gt;</code> 组件的 <code>trigger</code> 属性来指定触发折叠的元素。<code>trigger</code> 属性可以是 CSS 选择器或 DOM 元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item trigger=&quot;.example-trigger&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;
        Item 1
        &lt;mdui-icon slot=&quot;end-icon&quot; class=&quot;example-trigger&quot; name=&quot;keyboard_arrow_down&quot;&gt;&lt;/mdui-icon&gt;
      &lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"CollapseItem",tagName:"mdui-collapse-item",summary:`<p>折叠面板项组件，需配合 <code>&lt;mdui-collapse&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-collapse&gt;
..&lt;mdui-collapse-item header=&quot;header-1&quot;&gt;content-1&lt;/mdui-collapse-item&gt;
..&lt;mdui-collapse-item header=&quot;header-2&quot;&gt;content-2&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>此折叠面板项的值</p>
`,type:"string",enum:[]},{attributeName:"header",propertyName:"header",reflect:!0,description:`<p>此折叠面板项的头部文本</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用此折叠面板项</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"trigger",propertyName:"trigger",reflect:!1,description:`<p>点击该元素时触发折叠，值可以是 CSS 选择器、DOM 元素、或 <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ 对象</a>。默认为点击整个 header 区域触发</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]}],methods:[],events:[{name:"open",description:`<p>开始打开时，事件被触发</p>
`},{name:"opened",description:`<p>打开动画完成时，事件被触发</p>
`},{name:"close",description:`<p>开始关闭时，事件被触发</p>
`},{name:"closed",description:`<p>关闭动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>折叠面板项的正文内容</p>
`},{name:"header",description:`<p>折叠面板项的头部内容</p>
`}],cssParts:[{name:"header",description:`<p>折叠面板的头部内容</p>
`},{name:"body",description:`<p>折叠面板的正文内容</p>
`}],cssProperties:[]},{name:"Collapse",tagName:"mdui-collapse",summary:`<p>折叠面板组件，需配合 <code>&lt;mdui-collapse-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-collapse&gt;
..&lt;mdui-collapse-item header=&quot;header-1&quot;&gt;content-1&lt;/mdui-collapse-item&gt;
..&lt;mdui-collapse-item header=&quot;header-2&quot;&gt;content-2&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
`,attributes:[{attributeName:"accordion",propertyName:"accordion",reflect:!0,description:`<p>是否启用手风琴模式</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>当前展开的 <code>&lt;mdui-collapse-item&gt;</code> 的值</p>
<p><strong>Note</strong>：该属性的 HTML 属性始终为字符串，只有在 <code>accordion</code> 为 <code>true</code> 时，才能设置初始值；该属性的 JavaScript 属性值在 <code>accordion</code> 为 <code>true</code> 时为字符串，在 <code>accordion</code> 为 <code>false</code> 时为字符串数组。因此，当 <code>accordion</code> 为 <code>false</code> 时，只能通过修改 JavaScript 属性值来改变此值。</p>
`,type:"string | string[]",enum:["string","string[]"]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用此折叠面板</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"change",description:`<p>当前展开的折叠面板项变化时触发</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-collapse-item&gt;</code> 组件</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
