const t={docsHtml:`<p>mdui uses English by default. If you wish to use other languages, you&#39;ll need to do some localization configuration.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>mdui provides three functions for localization:</p>
<ul>
<li><a href="https://cdn.w3cbus.com/en/docs/2/functions/loadLocale"><code>loadLocale</code></a>: Loads locale modules. Accepts a function that takes a locale code and returns a Promise resolving to the locale module. Ensure to call this function in your project&#39;s entry file.</li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/functions/setLocale"><code>setLocale</code></a>: Begins switching the active locale to the given locale code, and returns a promise that resolves when the new locale has loaded.</li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/functions/getLocale"><code>getLocale</code></a>: Returns the active locale code.</li>
</ul>
<p>Example usage:</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;
import { setLocale } from &#39;mdui/functions/setLocale.js&#39;;
import { getLocale } from &#39;mdui/functions/getLocale.js&#39;;

// Load locale modules in the entry point of your project
loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));

// Switch locale, and returns a promise that resolves when the new locale has loaded
setLocale(&#39;zh-cn&#39;).then(() =&gt; {
  // You can use getLocale() to get the current locale code
  console.log(getLocale()); // zh-cn
});
</code></pre>
<h2 id="event">
                  <a href="#event">Status Events</a>
                </h2>
<p>The <code>mdui-localize-status</code> event fires on <code>window</code> whenever a locale switch starts, finishes, or fails. You can listen to this event to execute custom operations, such as setting a locale preference cookie.</p>
<p>The <code>detail.status</code> string property tells you what kind of status change has occured, and can be either <code>loading</code>, <code>ready</code>, or <code>error</code>:</p>
<table>
  <thead>
    <tr>
      <th><code>detail.status</code></th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>loading</code></td>
      <td>
        <p>A new locale has started to load.</p>
        <p>The <code>detail</code> object contains:</p>
        <ul>
          <li><code>loadingLocale</code>: Code of the locale that has started loading.</li>
        <ul>
      </td>
    </tr>
    <tr>
      <td><code>ready</code></td>
      <td>
        <p>A new locale has successfully loaded.</p>
        <p>The <code>detail</code> object contains:</p>
        <ul>
          <li><code>readyLocale</code>: Code of the locale that has successfully loaded.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>
        <p>A new locale failed to load.</p>
        <p>The <code>detail</code> object contains:</p>
        <ul>
          <li><code>errorLocale</code>: Code of the locale that failed to load.</li>
          <li><code>errorMessage</code>: Error message from locale load failure.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<p>Example of using the status event:</p>
<pre><code class="language-js">window.addEventListener(&#39;mdui-localize-status&#39;, (event) =&gt; {
  if (event.detail.status === &#39;loading&#39;) {
    console.log(\`Loading new locale: \${event.detail.loadingLocale}\`);
  } else if (event.detail.status === &#39;ready&#39;) {
    console.log(\`Loaded new locale: \${event.detail.readyLocale}\`);
  } else if (event.detail.status === &#39;error&#39;) {
    console.error(\`Error loading locale \${event.detail.errorLocale}: \${event.detail.errorMessage}\`);
  }
});
</code></pre>
<h2 id="load-locale">
                  <a href="#load-locale">Approaches for loading locale modules</a>
                </h2>
<h3 id="lazy-load">
                  <a href="#lazy-load">Lazy-load</a>
                </h3>
<p>Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import" target="_blank" rel="noopener nofollow">dynamic imports</a> to load each locale only when it becomes active. This is a good default because it minimizes the amount of code that your users will download and execute.</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;

loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));
</code></pre>
<h3 id="pre-load">
                  <a href="#pre-load">Pre-load</a>
                </h3>
<p>Start pre-loading all locales when the page loads. Dynamic imports are still used to ensure that the remaining script on the page is not blocked while the locale modules are being fetched.</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;

const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, import(\`../node_modules/mdui/locales/zh-cn.js\`)],
  [&#39;zh-tw&#39;, import(\`../node_modules/mdui/locales/zh-tw.js\`)]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<h3 id="static-imports">
                  <a href="#static-imports">Static imports</a>
                </h3>
<p>Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noopener nofollow">static imports</a> to pre-load all locales in a way that blocks other script on the page.</p>
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
                  <a href="#cdn">Loading Locale Modules via CDN</a>
                </h2>
<p>When using mdui via CDN, you can directly load locale modules from the CDN:</p>
<pre><code class="language-html">&lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
mdui.loadLocale((locale) =&gt; import(\`https://unpkg.com/mdui@2/locales/\${locale}.js\`));
mdui.setLocale(&#39;zh-cn&#39;);
&lt;/script&gt;
</code></pre>
<h2 id="languages">
                  <a href="#languages">Supported Languages</a>
                </h2>
<p>mdui supports the following locales:</p>
<table>
<thead>
<tr>
<th>Language</th>
<th>Locale Code</th>
</tr>
</thead>
<tbody><tr>
<td>Arabic</td>
<td>ar-eg</td>
</tr>
<tr>
<td>Azerbaijani</td>
<td>az-az</td>
</tr>
<tr>
<td>Bulgarian</td>
<td>bg-bg</td>
</tr>
<tr>
<td>Bangla (Bangladesh)</td>
<td>bn-bd</td>
</tr>
<tr>
<td>Belarusian</td>
<td>be-by</td>
</tr>
<tr>
<td>Catalan</td>
<td>ca-es</td>
</tr>
<tr>
<td>Czech</td>
<td>cs-cz</td>
</tr>
<tr>
<td>Danish</td>
<td>da-dk</td>
</tr>
<tr>
<td>German</td>
<td>de-de</td>
</tr>
<tr>
<td>Greek</td>
<td>el-gr</td>
</tr>
<tr>
<td>English (United Kingdom)</td>
<td>en-gb</td>
</tr>
<tr>
<td>English</td>
<td>en-us</td>
</tr>
<tr>
<td>Spanish</td>
<td>es-es</td>
</tr>
<tr>
<td>Estonian</td>
<td>et-ee</td>
</tr>
<tr>
<td>Persian</td>
<td>fa-ir</td>
</tr>
<tr>
<td>Finnish</td>
<td>fi-fi</td>
</tr>
<tr>
<td>French (Belgium)</td>
<td>fr-be</td>
</tr>
<tr>
<td>French (Canada)</td>
<td>fr-ca</td>
</tr>
<tr>
<td>French (France)</td>
<td>fr-fr</td>
</tr>
<tr>
<td>Irish (Ireland)</td>
<td>ga-ie</td>
</tr>
<tr>
<td>Galician (Spain)</td>
<td>gl-es</td>
</tr>
<tr>
<td>Hebrew</td>
<td>he-il</td>
</tr>
<tr>
<td>Hindi</td>
<td>hi-in</td>
</tr>
<tr>
<td>Croatian</td>
<td>hr-hr</td>
</tr>
<tr>
<td>Hungarian</td>
<td>hu-hu</td>
</tr>
<tr>
<td>Armenian</td>
<td>hy-am</td>
</tr>
<tr>
<td>Indonesian</td>
<td>id-id</td>
</tr>
<tr>
<td>Italian</td>
<td>it-it</td>
</tr>
<tr>
<td>Icelandic</td>
<td>is-is</td>
</tr>
<tr>
<td>Japanese</td>
<td>ja-jp</td>
</tr>
<tr>
<td>Georgian</td>
<td>ka-ge</td>
</tr>
<tr>
<td>Khmer</td>
<td>km-kh</td>
</tr>
<tr>
<td>Kurdish (Kurmanji)</td>
<td>kmr-iq</td>
</tr>
<tr>
<td>Kannada</td>
<td>kn-in</td>
</tr>
<tr>
<td>Kazakh</td>
<td>kk-kz</td>
</tr>
<tr>
<td>Korean</td>
<td>ko-kr</td>
</tr>
<tr>
<td>Lithuanian</td>
<td>lt-lt</td>
</tr>
<tr>
<td>Latvian</td>
<td>lv-lv</td>
</tr>
<tr>
<td>Macedonian</td>
<td>mk-mk</td>
</tr>
<tr>
<td>Malayalam (India)</td>
<td>ml-in</td>
</tr>
<tr>
<td>Mongolian</td>
<td>mn-mn</td>
</tr>
<tr>
<td>Malay (Malaysia)</td>
<td>ms-my</td>
</tr>
<tr>
<td>Norwegian</td>
<td>nb-no</td>
</tr>
<tr>
<td>Nepal</td>
<td>ne-np</td>
</tr>
<tr>
<td>Dutch (Belgium)</td>
<td>nl-be</td>
</tr>
<tr>
<td>Dutch</td>
<td>nl-nl</td>
</tr>
<tr>
<td>Polish</td>
<td>pl-pl</td>
</tr>
<tr>
<td>Portuguese (Brazil)</td>
<td>pt-br</td>
</tr>
<tr>
<td>Portuguese</td>
<td>pt-pt</td>
</tr>
<tr>
<td>Romanian</td>
<td>ro-ro</td>
</tr>
<tr>
<td>Russian</td>
<td>ru-ru</td>
</tr>
<tr>
<td>Slovak</td>
<td>sk-sk</td>
</tr>
<tr>
<td>Serbian</td>
<td>sr-rs</td>
</tr>
<tr>
<td>Slovenian</td>
<td>sl-si</td>
</tr>
<tr>
<td>Swedish</td>
<td>sv-se</td>
</tr>
<tr>
<td>Tamil</td>
<td>ta-in</td>
</tr>
<tr>
<td>Thai</td>
<td>th-th</td>
</tr>
<tr>
<td>Turkish</td>
<td>tr-tr</td>
</tr>
<tr>
<td>Urdu (Pakistan)</td>
<td>ur-pk</td>
</tr>
<tr>
<td>Ukrainian</td>
<td>uk-ua</td>
</tr>
<tr>
<td>Vietnamese</td>
<td>vi-vn</td>
</tr>
<tr>
<td>Chinese (Simplified)</td>
<td>zh-cn</td>
</tr>
<tr>
<td>Chinese (Traditional)</td>
<td>zh-hk</td>
</tr>
<tr>
<td>Chinese (Traditional)</td>
<td>zh-tw</td>
</tr>
</tbody></table>
<h2 id="contribute">
                  <a href="#contribute">Submitting New Translations or Improvements</a>
                </h2>
<p>To contribute new translations or improvements to existing translations, please submit a pull request on GitHub.  Translations are located in <a href="https://github.com/zdhxiong/mdui/tree/v2/packages/mdui/src/xliff" target="_blank" rel="noopener nofollow"><code>packages/mdui/src/xliff</code></a> and can be edited directly on GitHub if you don’t want to clone the repo locally.</p>
`,elements:[]};export{t as default};
