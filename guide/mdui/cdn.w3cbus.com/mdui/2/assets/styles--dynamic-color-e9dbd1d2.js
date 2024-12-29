const e={docsHtml:`<p>mdui supports dynamic theming. By providing a color value, mdui generates a comprehensive color scheme. It can also extract the dominant color from a wallpaper and create a color scheme based on it.</p>
<p>Click the palette icon <mdui-icon name="palette--outlined" style="vertical-align: middle"></mdui-icon> in the top right corner of the documentation page to toggle between color schemes and observe the appearance of various components under different color schemes.</p>
<p>A color scheme in mdui is a set of CSS custom properties. mdui components reference these properties for their color values, enabling you to update the entire color scheme simultaneously. Refer to <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens#color">Design Tokens - Color</a> for a complete list of CSS custom properties.</p>
<h2 id="color-scheme">
                  <a href="#color-scheme">Generating a Color Scheme</a>
                </h2>
<p>The <a href="https://cdn.w3cbus.com/en/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> function generates a color scheme. It accepts a hexadecimal color value, generates a color scheme based on it, and applies it to the <code>&lt;html&gt;</code> element of the page. For example:</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// Generate a color scheme based on #0061a4 and set the &lt;html&gt; element to that color scheme
setColorScheme(&#39;#0061a4&#39;);
</code></pre>
<p>You can specify the <code>target</code> property in the second parameter to apply the color scheme to a specific element. For example:</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// Generate a color scheme based on #0061a4 and apply it to the .foo element
setColorScheme(&#39;#0061a4&#39;, {
  target: document.querySelector(&#39;.foo&#39;)
});
</code></pre>
<p>By default, the generated color scheme includes only the colors listed in <a href="https://cdn.w3cbus.com/en/docs/2/styles/design-tokens#color">Design Tokens - Color</a>. You can include custom color groups by specifying the <code>customColors</code> property in the second parameter. Provide your custom color names and values as shown:</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// Generate a color scheme based on #0061a4, modify the value of the existing error color group, and add a new music color group
setColorScheme(&#39;#0061a4&#39;, {
  customColors: [
    {
      name: &#39;error&#39;,
      value: &#39;#69F0AE&#39;
    },
    {
      name: &#39;music&#39;,
      value: &#39;#FFC107&#39;
    }
  ]
});
</code></pre>
<p>A custom color group includes four CSS custom properties:</p>
<ul>
<li><code>--mdui-color-{name}</code></li>
<li><code>--mdui-color-on-{name}</code></li>
<li><code>--mdui-color-{name}-container</code></li>
<li><code>--mdui-color-on-{name}-container</code></li>
</ul>
<p>Here, <code>{name}</code> is the custom color <code>name</code> you provided in the <code>customColors</code> field.</p>
<p>Custom color names can be existing color names from the default color scheme, such as <code>primary</code>, <code>secondary</code>, <code>tertiary</code>, <code>error</code>, etc. If you specify these values as custom color names, the corresponding four CSS custom properties in the generated color scheme will use the color values you specified. For example, in the above example, the custom color name <code>error</code> is specified, and since <code>error</code> is an existing color name in the default color scheme, its corresponding CSS custom properties are used by mdui components to represent error states. Now, because the color value is set to a green color, the error state in mdui components will also become green.</p>
<p>Custom color names can also be new ones, such as <code>music</code> in the above example, which does not exist in the default color scheme. In this case, the generated color scheme will additionally include four CSS custom properties. You can reference these CSS custom properties in your own styles:</p>
<pre><code class="language-html">&lt;style&gt;
  .music {
    background-color: rgb(var(--mdui-color-music));
    color: rgb(var(--mdui-color-on-music));
  }

  .music-container {
    background-color: rgb(var(--mdui-color-music-container));
    color: rgb(var(--mdui-color-on-music-container));
  }
&lt;/style&gt;

&lt;div class=&quot;music&quot;&gt;Music&lt;/div&gt;
&lt;div class=&quot;music-container&quot;&gt;Music Container&lt;/div&gt;
</code></pre>
<p>You can also use the <a href="https://cdn.w3cbus.com/en/docs/2/functions/removeColorScheme"><code>removeColorScheme</code></a> function to remove a color scheme. Specify a parameter to remove the color scheme from a specific element. By default, it removes the color scheme from the <code>&lt;html&gt;</code> element.</p>
<h2 id="from-wallpaper">
                  <a href="#from-wallpaper">Extracting Colors from Wallpaper</a>
                </h2>
<p>The <a href="https://cdn.w3cbus.com/en/docs/2/functions/getColorFromImage"><code>getColorFromImage</code></a> function in mdui extracts the dominant color from an Image instance. This function returns a Promise that resolves to the extracted hexadecimal color value.</p>
<p>You can use this color value with the <a href="https://cdn.w3cbus.com/en/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> function to set the color scheme. For example:</p>
<pre><code class="language-js">import { getColorFromImage } from &#39;mdui/functions/getColorFromImage.js&#39;;
import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

const image = new Image();
image.src = &#39;image1.png&#39;;

getColorFromImage(image).then(color =&gt; setColorScheme(color));
</code></pre>
`,elements:[]};export{e as default};
