const n={docsHtml:`<p>在 Angular 中使用 mdui 时，首先需要按照 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation#npm">安装</a> 页面的指引完成安装，然后进行一些必要的配置。</p>
<h2 id="configuration">
                  <a href="#configuration">配置</a>
                </h2>
<p>首先，我们需要在 Angular 中启用 Web Components 的支持。示例如下：</p>
<pre><code class="language-js">import { BrowserModule } from &#39;@angular/platform-browser&#39;;
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from &#39;@angular/core&#39;;

import { AppComponent } from &#39;./app.component&#39;;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
</code></pre>
<p>配置完成后，我们就可以在 Angular 组件代码中引入并使用 mdui 组件了：</p>
<pre><code class="language-js">import { Dialog } from &#39;mdui/components/dialog.js&#39;;

@Component({
  selector: &#39;app-dialog-example&#39;,
  template: \`&lt;div id=&quot;page&quot;&gt;
    &lt;button (click)=&quot;openDialog()&quot;&gt;Open Dialog&lt;/button&gt;
    &lt;mdui-dialog #dialog primary=&quot;Dialog Title&quot;&gt;Dialog Content&lt;/mdui-dialog&gt;
  &lt;/div&gt;\`
})
export class DialogExampleComponent implements OnInit {

  // 使用 @ViewChild 获取 #dialog 元素的引用
  @ViewChild(&#39;dialog&#39;)
  dialog?: ElementRef&lt;Dialog&gt;;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  openDialog() {
    // 使用 nativeElement 访问 mdui 组件
    this.dialog?.nativeElement.open = true;
  }
}
</code></pre>
`,elements:[]};export{n as default};
