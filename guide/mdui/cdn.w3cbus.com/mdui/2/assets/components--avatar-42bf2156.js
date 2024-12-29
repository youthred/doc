const e={docsHtml:`<p>头像用于表示用户或事物，支持多种形式，包括图片、图标或字符等。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/avatar.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Avatar } from &#39;mdui/components/avatar.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-src">
                  <a href="#example-src">图片头像</a>
                </h3>
<p>可以使用 <code>src</code> 属性指定一个图片链接作为头像，或者在 default slot 中提供一个 <code>&lt;img&gt;</code> 元素作为头像。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;

&lt;mdui-avatar&gt;
  &lt;img src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot; alt=&quot;图片头像示例&quot;/&gt;
&lt;/mdui-avatar&gt;
</code></pre>
<p>可以使用 <code>fit</code> 属性定义图片如何适应容器框，类似于原生的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener nofollow"><code>object-fit</code></a>。</p>
<h3 id="example-icon">
                  <a href="#example-icon">图标头像</a>
                </h3>
<p>可以使用 <code>icon</code> 属性指定一个 Material Icons 图标作为头像，或者在 default slot 中提供一个图标元素作为头像。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar icon=&quot;people_alt&quot;&gt;&lt;/mdui-avatar&gt;

&lt;mdui-avatar&gt;
  &lt;mdui-icon name=&quot;people_alt&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-avatar&gt;
</code></pre>
<h3 id="example-char">
                  <a href="#example-char">字符头像</a>
                </h3>
<p>可以在 default slot 中使用任意文字作为头像。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar&gt;A&lt;/mdui-avatar&gt;
</code></pre>
`,elements:[{name:"Avatar",tagName:"mdui-avatar",summary:`<p>头像组件</p>
<pre><code class="language-html">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
</code></pre>
`,attributes:[{attributeName:"src",propertyName:"src",reflect:!0,description:`<p>头像图片的 URL 地址</p>
`,type:"string",enum:[]},{attributeName:"fit",propertyName:"fit",reflect:!0,description:`<p>图片如何适应容器框，与原生的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener nofollow"><code>object-fit</code></a> 属性相同。可选值包括：</p>
<ul>
<li><code>contain</code>：保持图片原有尺寸比例，内容会被等比例缩放</li>
<li><code>cover</code>：保持图片原有尺寸比例，但部分内容可能被剪切</li>
<li><code>fill</code>：默认值，不保持图片原有尺寸比例，内容会被拉伸以填充整个容器</li>
<li><code>none</code>：保留图片原有尺寸，内容不会被缩放或拉伸</li>
<li><code>scale-down</code>：保持图片原有尺寸比例，内容尺寸与 <code>none</code> 或 <code>contain</code> 中较小的一个相同</li>
</ul>
`,type:"'contain' | 'cover' | 'fill' | 'none' | 'scale-down'",enum:["'contain'","'cover'","'fill'","'none'","'scale-down'"]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>头像的 Material Icons 图标名</p>
`,type:"string",enum:[]},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>头像的替代文本描述</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>自定义头像内容，可以为字母、汉字、<code>&lt;img&gt;</code> 元素、图标等</p>
`}],cssParts:[{name:"image",description:`<p>使用图片作为头像时，组件内部的 <code>&lt;img&gt;</code> 元素</p>
`},{name:"icon",description:`<p>使用图标作为头像时，组件内部的 <code>&lt;mdui-icon&gt;</code> 元素</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
