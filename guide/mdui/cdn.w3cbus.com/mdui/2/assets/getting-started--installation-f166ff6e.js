const o={docsHtml:`<p>你可以选择通过 npm 安装 mdui，或者从 CDN 引入 mdui。推荐使用 npm 进行安装。</p>
<h2 id="npm">
                  <a href="#npm">npm 安装</a>
                </h2>
<pre><code class="language-bash">npm install mdui --save
</code></pre>
<h3 id="full-import">
                  <a href="#full-import">全量导入</a>
                </h3>
<p>在项目的入口文件中导入下面两个文件，即可使用所有 mdui 组件：</p>
<pre><code class="language-js">import &#39;mdui/mdui.css&#39;;
import &#39;mdui&#39;;
</code></pre>
<p>也可以直接从 mdui 导入需要使用的函数。例如，要导入 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/snackbar"><code>snackbar</code></a> 函数，可以这样做：</p>
<pre><code class="language-js">import { snackbar } from &#39;mdui&#39;;
</code></pre>
<mdui-collapse>
  <mdui-collapse-item>
    <mdui-button slot="header" variant="text">显示所有支持从 mdui 导入的函数</mdui-button>
    <pre class="language-js"><code>import {
  $,
  dialog,
  alert,
  confirm,
  prompt,
  snackbar,
  getTheme,
  setTheme,
  getColorFromImage,
  setColorScheme,
  removeColorScheme,
  loadLocale,
  setLocale,
  getLocale,
  throttle,
  observeResize,
  breakpoint
} from 'mdui';</code></pre>
  </mdui-collapse-item>
</mdui-collapse>

<h3 id="cherry-picking">
                  <a href="#cherry-picking">按需导入</a>
                </h3>
<p>为了优化项目体积，可以仅导入需要的组件和函数。例如，如果你只需要使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/button"><code>&lt;mdui-button&gt;</code></a> 组件和 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/snackbar"><code>snackbar</code></a> 函数，可以按照以下方式导入：</p>
<pre><code class="language-js">// CSS 文件始终需要导入
import &#39;mdui/mdui.css&#39;;
// 导入 &lt;mdui-button&gt; 组件
import &#39;mdui/components/button.js&#39;;
// 导入 snackbar 函数
import { snackbar } from &#39;mdui/functions/snackbar.js&#39;;
</code></pre>
<p>每个组件或函数的文档页面都会详细说明如何进行按需导入。</p>
<mdui-collapse>
  <mdui-collapse-item>
    <mdui-button slot="header" variant="text">显示所有支持按需导入的组件和函数</mdui-button>
    <pre class="language-js"><code>import 'mdui/components/avatar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/avatar.js*/;
import 'mdui/components/badge.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/badge.js*/;
import 'mdui/components/bottom-app-bar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/bottom-app-bar.js*/;
import 'mdui/components/button.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/button.js*/;
import 'mdui/components/button-icon.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/button-icon.js*/;
import 'mdui/components/card.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/card.js*/;
import 'mdui/components/checkbox.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/checkbox.js*/;
import 'mdui/components/chip.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/chip.js*/;
import 'mdui/components/circular-progress.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/circular-progress.js*/;
import 'mdui/components/collapse/collapse.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/collapse/collapse.js*/;
import 'mdui/components/collapse/collapse-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/collapse/collapse-item.js*/;
import 'mdui/components/dialog.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/dialog.js*/;
import 'mdui/components/divider.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/divider.js*/;
import 'mdui/components/dropdown.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/dropdown.js*/;
import 'mdui/components/fab.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/fab.js*/;
import 'mdui/components/icon.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/icon.js*/;
import 'mdui/components/layout.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/layout.js*/;
import 'mdui/components/layout-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/layout-item.js*/;
import 'mdui/components/layout-main.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/layout-main.js*/;
import 'mdui/components/linear-progress.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/linear-progress.js*/;
import 'mdui/components/list-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/list-item.js*/;
import 'mdui/components/list-subheader.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/list-subheader.js*/;
import 'mdui/components/list.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/list.js*/;
import 'mdui/components/menu-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/menu-item.js*/;
import 'mdui/components/menu.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/menu.js*/;
import 'mdui/components/navigation-bar-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/navigation-bar-item.js*/;
import 'mdui/components/navigation-bar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/navigation-bar.js*/;
import 'mdui/components/navigation-drawer.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/navigation-drawer.js*/;
import 'mdui/components/navigation-rail.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/navigation-rail.js*/;
import 'mdui/components/navigation-rail-item.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/navigation-rail-item.js*/;
import 'mdui/components/radio.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/radio.js*/;
import 'mdui/components/radio-group.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/radio-group.js*/;
import 'mdui/components/range-slider.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/range-slider.js*/;
import 'mdui/components/ripple.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/ripple.js*/;
import 'mdui/components/segmented-button.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/segmented-button.js*/;
import 'mdui/components/segmented-button-group.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/segmented-button-group.js*/;
import 'mdui/components/select.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/select.js*/;
import 'mdui/components/slider.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/slider.js*/;
import 'mdui/components/snackbar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/snackbar.js*/;
import 'mdui/components/switch.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/switch.js*/;
import 'mdui/components/tab.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/tab.js*/;
import 'mdui/components/tab-panel.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/tab-panel.js*/;
import 'mdui/components/tabs.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/tabs.js*/;
import 'mdui/components/text-field.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/text-field.js*/;
import 'mdui/components/tooltip.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/tooltip.js*/;
import 'mdui/components/top-app-bar-title.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/top-app-bar-title.js*/;
import 'mdui/components/top-app-bar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/components/top-app-bar.js*/;
import { $ } from 'mdui/jq.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/jq.js*/;
import { alert } from 'mdui/functions/alert.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/alert.js*/;
import { breakpoint } from 'mdui/functions/breakpoint.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/breakpoint.js*/;
import { confirm } from 'mdui/functions/confirm.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/confirm.js*/;
import { dialog } from 'mdui/functions/dialog.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/dialog.js*/;
import { getColorFromImage } from 'mdui/functions/getColorFromImage.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/getColorFromImage.js*/;
import { getLocale } from 'mdui/functions/getLocale.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/getLocale.js*/;
import { getTheme } from 'mdui/functions/getTheme.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/getTheme.js*/;
import { loadLocale } from 'mdui/functions/loadLocale.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/loadLocale.js*/;
import { observeResize } from 'mdui/functions/observeResize.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/observeResize.js*/;
import { prompt } from 'mdui/functions/prompt.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/prompt.js*/;
import { removeColorScheme } from 'mdui/functions/removeColorScheme.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/removeColorScheme.js*/;
import { setColorScheme } from 'mdui/functions/setColorScheme.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/setColorScheme.js*/;
import { setLocale } from 'mdui/functions/setLocale.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/setLocale.js*/;
import { setTheme } from 'mdui/functions/setTheme.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/setTheme.js*/;
import { snackbar } from 'mdui/functions/snackbar.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/snackbar.js*/;
import { throttle } from 'mdui/functions/throttle.js'/*tpa=https://cdn.w3cbus.com/mdui/2/assets/mdui/functions/throttle.js*/;</code></pre>
  </mdui-collapse-item>
</mdui-collapse>

<h2 id="cdn">
                  <a href="#cdn">CDN</a>
                </h2>
<p>你可以使用 <code>&lt;link&gt;</code> 和 <code>&lt;script&gt;</code> 标签直接通过 CDN 来使用 mdui。也可以下载 CSS 和 JavaScript 文件并部署在你自己的服务器上。引入 CSS 和 JavaScript 文件后，就能使用所有 mdui 组件了。</p>
<h3 id="global-build">
                  <a href="#global-build">使用全局构建版本</a>
                </h3>
<p>下面的例子展示了如何使用全局构建版本的 mdui。在这个版本中，所有的函数都作为属性暴露在全局对象 <code>mdui</code> 上：</p>
<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;
&lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;

&lt;mdui-button class=&quot;btn&quot;&gt;点我&lt;/mdui-button&gt;

&lt;script&gt;
  document.querySelector(&#39;.btn&#39;).addEventListener(&#39;click&#39;, () =&gt; {
    mdui.snackbar({ message: &#39;点击了按钮&#39; });
  });
&lt;/script&gt;
</code></pre>
<h3 id="es-module">
                  <a href="#es-module">使用 ES 模块构建版本</a>
                </h3>
<p>下面的例子展示了如何使用 ES 模块构建版本的 mdui。在这个版本中，你可以使用 ES 模块语法从 CDN 导入 mdui：</p>
<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;

&lt;mdui-button class=&quot;btn&quot;&gt;点我&lt;/mdui-button&gt;

&lt;script type=&quot;module&quot;&gt;
  import { snackbar } from &#39;https://unpkg.com/mdui@2/mdui.esm.js&#39;;

  document.querySelector(&#39;.btn&#39;).addEventListener(&#39;click&#39;, () =&gt; {
    snackbar({ message: &#39;点击了按钮&#39; });
  });
&lt;/script&gt;
</code></pre>
`,elements:[]};export{o as default};
