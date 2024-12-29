const e={docsHtml:`<p>Avatars represent users or entities by displaying images, icons, or characters.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/avatar.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Avatar } from &#39;mdui/components/avatar.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-src">
                  <a href="#example-src">Image Avatar</a>
                </h3>
<p>To use an image as the avatar, specify the image link using the <code>src</code> attribute, or provide an <code>&lt;img&gt;</code> element within the default slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;

&lt;mdui-avatar&gt;
  &lt;img src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot; alt=&quot;Example of profile picture&quot;/&gt;
&lt;/mdui-avatar&gt;
</code></pre>
<p>The <code>fit</code> attribute determines how the image should fit the container box. It works similar to the native <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener nofollow"><code>object-fit</code></a> property.</p>
<h3 id="example-icon">
                  <a href="#example-icon">Icon Avatar</a>
                </h3>
<p>To use a Material Icons icon as the avatar, specify the icon using the <code>icon</code> attribute. Alternatively, provide an icon element within the default slot.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar icon=&quot;people_alt&quot;&gt;&lt;/mdui-avatar&gt;

&lt;mdui-avatar&gt;
  &lt;mdui-icon name=&quot;people_alt&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-avatar&gt;
</code></pre>
<h3 id="example-char">
                  <a href="#example-char">Character Avatar</a>
                </h3>
<p>You can use any text within the default slot as the avatar.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-avatar&gt;A&lt;/mdui-avatar&gt;
</code></pre>
`,elements:[{name:"Avatar",tagName:"mdui-avatar",summary:`<p>Avatar Component.</p>
<pre><code class="language-html">&lt;mdui-avatar src=&quot;https://avatars.githubusercontent.com/u/3030330?s=40&amp;v=4&quot;&gt;&lt;/mdui-avatar&gt;
</code></pre>
`,attributes:[{attributeName:"src",propertyName:"src",reflect:!0,description:`<p>URL of the avatar image.</p>
`,type:"string",enum:[]},{attributeName:"fit",propertyName:"fit",reflect:!0,description:`<p>Image resizing method, similar to the native CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener nofollow"><code>object-fit</code></a>. Possible values:</p>
<ul>
<li><code>contain</code>: Scales the image to fit within the box while maintaining the aspect ratio. The image will be &quot;letterboxed&quot; if the aspect ratios do not match.</li>
<li><code>cover</code>: Scales the image to fill the box while maintaining the aspect ratio. The image will be clipped if the aspect ratios do not match.</li>
<li><code>fill</code>: Default. Scales the image to fill the box. The image will be stretched if the aspect ratios do not match.</li>
<li><code>none</code>: No resizing.</li>
<li><code>scale-down</code>: Scales as if <code>none</code> or <code>contain</code> were specified, choosing the smaller result.</li>
</ul>
`,type:"'contain' | 'cover' | 'fill' | 'none' | 'scale-down'",enum:["'contain'","'cover'","'fill'","'none'","'scale-down'"]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>The Material Icons name for the avatar.</p>
`,type:"string",enum:[]},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>Text description of the avatar.</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>Custom avatar content, such as letters, <code>&lt;img&gt;</code> elements, icons, etc.</p>
`}],cssParts:[{name:"image",description:`<p>Internal <code>&lt;img&gt;</code> element when using an image avatar.</p>
`},{name:"icon",description:`<p>Internal <code>&lt;mdui-icon&gt;</code> element when using an icon avatar.</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>The size of the component corner. You can use a specific pixel value, but it&#39;s recommended to reference <a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">design tokens</a>.</p>
`}]}]};export{e as default};
