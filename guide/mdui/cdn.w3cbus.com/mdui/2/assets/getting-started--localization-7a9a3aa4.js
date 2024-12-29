const t={docsHtml:`<p>mdui 内部默认使用英文，如果需要使用其他语言，则需要进行多语言配置。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>mdui 提供了三个函数来实现多语言功能：</p>
<ul>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/loadLocale"><code>loadLocale</code></a>：加载语言包。参数为一个函数，接收一个语言代码作为参数，返回 Promise，当语言包加载完成时，Promise 被 resolve 为对应的语言包。请确保在项目的入口文件中调用该函数。</li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setLocale"><code>setLocale</code></a>：切换到指定的语言。参数为新的语言代码，返回 Promise，在新的语言包加载完成后 resolve。</li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/getLocale"><code>getLocale</code></a>：获取当前的语言代码。</li>
</ul>
<p>使用示例如下：</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;
import { setLocale } from &#39;mdui/functions/setLocale.js&#39;;
import { getLocale } from &#39;mdui/functions/getLocale.js&#39;;

// 在项目入口处调用 loadLocale 加载语言包
loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));

// 在需要切换语言时调用该函数。在 Promise resolve 后，语言切换成功
setLocale(&#39;zh-cn&#39;).then(() =&gt; {
  // 调用 getLocale 可获取当前的语言代码
  console.log(getLocale()); // zh-cn
});
</code></pre>
<h2 id="event">
                  <a href="#event">状态事件</a>
                </h2>
<p>在语言切换的开始、结束、失败时，会在 <code>window</code> 上触发 <code>mdui-localize-status</code> 事件，你可以监听该事件来执行自定义操作，例如在语言切换成功后将语言代码写入 Cookie。</p>
<p>事件的 <code>detail.status</code> 属性描述了当前发生了何种状态的变更，可能的值包括：<code>loading</code>、<code>ready</code>、<code>error</code>：</p>
<table>
  <thead>
    <tr>
      <th><code>detail.status</code></th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>loading</code></td>
      <td>
        <p>开始加载新的语言包。</p>
        <p><code>detail</code> 对象包含：</p>
        <ul>
          <li><code>loadingLocale</code>：新加载语言的语言代码。</li>
        <ul>
      </td>
    </tr>
    <tr>
      <td><code>ready</code></td>
      <td>
        <p>新的语言包加载成功。</p>
        <p><code>detail</code> 对象包含：</p>
        <ul>
          <li><code>readyLocale</code>：新加载语言的语言代码。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>
        <p>新的语言包加载失败。</p>
        <p><code>detail</code> 对象包含：</p>
        <ul>
          <li><code>errorLocale</code>：加载失败的语言的语言代码。</li>
          <li><code>errorMessage</code>：加载失败的错误信息。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<p>使用示例如下：</p>
<pre><code class="language-js">window.addEventListener(&#39;mdui-localize-status&#39;, (event) =&gt; {
  if (event.detail.status === &#39;loading&#39;) {
    console.log(\`开始加载新的语言包：\${event.detail.loadingLocale}\`);
  } else if (event.detail.status === &#39;ready&#39;) {
    console.log(\`新语言包 \${event.detail.readyLocale} 加载成功\`);
  } else if (event.detail.status === &#39;error&#39;) {
    console.error(\`新语言包 \${event.detail.errorLocale} 加载失败：\${event.detail.errorMessage}\`);
  }
});
</code></pre>
<h2 id="load-locale">
                  <a href="#load-locale">语言包加载方式</a>
                </h2>
<h3 id="lazy-load">
                  <a href="#lazy-load">懒加载</a>
                </h3>
<p>使用<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import" target="_blank" rel="noopener nofollow">动态导入</a>可以在切换到对应语言时，才下载对应的语言包。这是最为推荐的方法。</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;

loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));
</code></pre>
<h3 id="pre-load">
                  <a href="#pre-load">预加载</a>
                </h3>
<p>在页面加载时，先下载好所有需要的语言包。这使得在切换语言时，无需再进行下载，从而使切换语言更加快速。</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;

const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, import(\`../node_modules/mdui/locales/zh-cn.js\`)],
  [&#39;zh-tw&#39;, import(\`../node_modules/mdui/locales/zh-tw.js\`)]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<h3 id="static-imports">
                  <a href="#static-imports">静态导入</a>
                </h3>
<p>使用该方法可以把所有需要的语言包和你的项目代码打包到同一个文件里，不再需要单独下载语言包。</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;
import * as locale_zh_cn from &#39;mdui/locales/zh-cn.js&#39;;
import * as locale_zh_tw from &#39;mdui/locales/zh-tw.js&#39;;

const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, locale_zh_cn],
  [&#39;zh-tw&#39;, locale_zh_tw]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<h2 id="cdn">
                  <a href="#cdn">通过 CDN 加载语言包</a>
                </h2>
<p>如果你是通过 CDN 来使用 mdui 的，可以直接从 CDN 加载语言包。使用示例如下：</p>
<pre><code class="language-html">&lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
mdui.loadLocale((locale) =&gt; import(\`https://unpkg.com/mdui@2/locales/\${locale}.js\`));
mdui.setLocale(&#39;zh-cn&#39;);
&lt;/script&gt;
</code></pre>
<h2 id="languages">
                  <a href="#languages">支持的语言</a>
                </h2>
<p>目前，mdui 支持以下语言：</p>
<table>
<thead>
<tr>
<th>语言</th>
<th>语言代码</th>
</tr>
</thead>
<tbody><tr>
<td>阿拉伯语</td>
<td>ar-eg</td>
</tr>
<tr>
<td>阿塞拜疆语</td>
<td>az-az</td>
</tr>
<tr>
<td>保加利亚语</td>
<td>bg-bg</td>
</tr>
<tr>
<td>孟加拉语（孟加拉国）</td>
<td>bn-bd</td>
</tr>
<tr>
<td>白俄罗斯语</td>
<td>be-by</td>
</tr>
<tr>
<td>加泰罗尼亚语</td>
<td>ca-es</td>
</tr>
<tr>
<td>捷克语</td>
<td>cs-cz</td>
</tr>
<tr>
<td>丹麦语</td>
<td>da-dk</td>
</tr>
<tr>
<td>德语</td>
<td>de-de</td>
</tr>
<tr>
<td>希腊语</td>
<td>el-gr</td>
</tr>
<tr>
<td>英语</td>
<td>en-gb</td>
</tr>
<tr>
<td>英语（美式）</td>
<td>en-us</td>
</tr>
<tr>
<td>西班牙语</td>
<td>es-es</td>
</tr>
<tr>
<td>爱沙尼亚语</td>
<td>et-ee</td>
</tr>
<tr>
<td>波斯语</td>
<td>fa-ir</td>
</tr>
<tr>
<td>芬兰语</td>
<td>fi-fi</td>
</tr>
<tr>
<td>法语（比利时）</td>
<td>fr-be</td>
</tr>
<tr>
<td>法语（加拿大）</td>
<td>fr-ca</td>
</tr>
<tr>
<td>法语（法国）</td>
<td>fr-fr</td>
</tr>
<tr>
<td>爱尔兰语</td>
<td>ga-ie</td>
</tr>
<tr>
<td>加利西亚语（西班牙）</td>
<td>gl-es</td>
</tr>
<tr>
<td>希伯来语</td>
<td>he-il</td>
</tr>
<tr>
<td>印地语</td>
<td>hi-in</td>
</tr>
<tr>
<td>克罗地亚语</td>
<td>hr-hr</td>
</tr>
<tr>
<td>匈牙利语</td>
<td>hu-hu</td>
</tr>
<tr>
<td>亚美尼亚</td>
<td>hy-am</td>
</tr>
<tr>
<td>印度尼西亚语</td>
<td>id-id</td>
</tr>
<tr>
<td>意大利语</td>
<td>it-it</td>
</tr>
<tr>
<td>冰岛语</td>
<td>is-is</td>
</tr>
<tr>
<td>日语</td>
<td>ja-jp</td>
</tr>
<tr>
<td>格鲁吉亚语</td>
<td>ka-ge</td>
</tr>
<tr>
<td>高棉语</td>
<td>km-kh</td>
</tr>
<tr>
<td>北库尔德语</td>
<td>kmr-iq</td>
</tr>
<tr>
<td>卡纳达语</td>
<td>kn-in</td>
</tr>
<tr>
<td>哈萨克语</td>
<td>kk-kz</td>
</tr>
<tr>
<td>韩语/朝鲜语</td>
<td>ko-kr</td>
</tr>
<tr>
<td>立陶宛语</td>
<td>lt-lt</td>
</tr>
<tr>
<td>拉脱维亚语</td>
<td>lv-lv</td>
</tr>
<tr>
<td>马其顿语</td>
<td>mk-mk</td>
</tr>
<tr>
<td>马拉雅拉姆语</td>
<td>ml-in</td>
</tr>
<tr>
<td>蒙古语</td>
<td>mn-mn</td>
</tr>
<tr>
<td>马来语（马来西亚）</td>
<td>ms-my</td>
</tr>
<tr>
<td>挪威语</td>
<td>nb-no</td>
</tr>
<tr>
<td>尼泊尔语</td>
<td>ne-np</td>
</tr>
<tr>
<td>荷兰语（比利时）</td>
<td>nl-be</td>
</tr>
<tr>
<td>荷兰语</td>
<td>nl-nl</td>
</tr>
<tr>
<td>波兰语</td>
<td>pl-pl</td>
</tr>
<tr>
<td>葡萄牙语（巴西）</td>
<td>pt-br</td>
</tr>
<tr>
<td>葡萄牙语</td>
<td>pt-pt</td>
</tr>
<tr>
<td>罗马尼亚语</td>
<td>ro-ro</td>
</tr>
<tr>
<td>俄罗斯语</td>
<td>ru-ru</td>
</tr>
<tr>
<td>斯洛伐克语</td>
<td>sk-sk</td>
</tr>
<tr>
<td>塞尔维亚语</td>
<td>sr-rs</td>
</tr>
<tr>
<td>斯洛文尼亚语</td>
<td>sl-si</td>
</tr>
<tr>
<td>瑞典语</td>
<td>sv-se</td>
</tr>
<tr>
<td>泰米尔语</td>
<td>ta-in</td>
</tr>
<tr>
<td>泰语</td>
<td>th-th</td>
</tr>
<tr>
<td>土耳其语</td>
<td>tr-tr</td>
</tr>
<tr>
<td>乌尔都语（巴基斯坦）</td>
<td>ur-pk</td>
</tr>
<tr>
<td>乌克兰语</td>
<td>uk-ua</td>
</tr>
<tr>
<td>越南语</td>
<td>vi-vn</td>
</tr>
<tr>
<td>简体中文</td>
<td>zh-cn</td>
</tr>
<tr>
<td>繁体中文（中国香港）</td>
<td>zh-hk</td>
</tr>
<tr>
<td>繁体中文（中国台湾）</td>
<td>zh-tw</td>
</tr>
</tbody></table>
<h2 id="contribute">
                  <a href="#contribute">提交新的翻译</a>
                </h2>
<p>要贡献新的翻译、或对现有翻译进行改进，请在 Github 上发起一个 Pull Request。语言包位于 <a href="https://github.com/zdhxiong/mdui/tree/v2/packages/mdui/src/xliff" target="_blank" rel="noopener nofollow"><code>packages/mdui/src/xliff</code></a>，你可以直接在 Github 上进行编辑。</p>
`,elements:[]};export{t as default};
