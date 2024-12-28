(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{507:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("随着前后端分离的流行，JSP技术和模板引擎慢慢变得不再那么重要，但是在某些场景中（例如邮件模板、页面静态化等）依旧无可替代，但是各种模板引擎语法大相径庭，使用方式也不尽相同，学习成本很高。Hutool旨在封装各个引擎的共性，使用户只关注模板语法即可，减少学习成本。")]),t._v(" "),a("p",[t._v("Hutool现在封装的引擎有：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://ibeetl.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beetl"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/jfinal/enjoy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enjoy"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://rythmengine.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rythm"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://freemarker.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreeMarker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://velocity.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Velocity"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.thymeleaf.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thymeleaf"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("类似于Java日志门面的思想，Hutool将模板引擎的渲染抽象为两个概念：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TemplateEngine")]),t._v(" 模板引擎，用于封装模板对象，配置各种配置")]),t._v(" "),a("li",[a("code",[t._v("Template")]),t._v(" 模板对象，用于配合参数渲染产生内容")])]),t._v(" "),a("p",[t._v("通过实现这两个接口，用户便可抛开模板实现，从而渲染模板。Hutool同时会通过"),a("code",[t._v("TemplateFactory")]),a("strong",[t._v("根据用户引入的模板引擎库的jar来自动选择用哪个引擎来渲染")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"从字符串模板渲染内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从字符串模板渲染内容"}},[t._v("#")]),t._v(" 从字符串模板渲染内容")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自动根据用户引入的模板引擎库的jar来自动选择使用的引擎")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TemplateConfig为模板引擎的选项，可选内容有字符编码、模板路径、模板加载方式等，默认通过模板字符串渲染")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateEngine")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//假设我们引入的是Beetl引擎，则：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Template")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello ${name}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Dict本质上为Map，此处可用Map")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hutool"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出：Hello Hutool")]),t._v("\n")])])]),a("p",[t._v("也就是说，使用Hutool之后，无论你用任何一种模板引擎，代码不变（只变更模板内容）。")]),t._v(" "),a("h3",{attrs:{id:"从classpath查找模板渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从classpath查找模板渲染"}},[t._v("#")]),t._v(" 从classpath查找模板渲染")]),t._v(" "),a("p",[t._v("只需修改TemplateConfig配置文件内容即可更换（这里以Velocity为例）：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateEngine")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"templates"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResourceMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Template")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://doc.hutool.cn/assets/js/velocity_test.vtl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hutool"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"其它方式查找模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它方式查找模板"}},[t._v("#")]),t._v(" 其它方式查找模板")]),t._v(" "),a("p",[t._v("查找模板的方式由ResourceMode定义，包括：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CLASSPATH")]),t._v(" 从ClassPath加载模板")]),t._v(" "),a("li",[a("code",[t._v("FILE")]),t._v(" 从File本地目录加载模板")]),t._v(" "),a("li",[a("code",[t._v("WEB_ROOT")]),t._v(" 从WebRoot目录加载模板")]),t._v(" "),a("li",[a("code",[t._v("STRING")]),t._v(" 从模板文本加载模板")]),t._v(" "),a("li",[a("code",[t._v("COMPOSITE")]),t._v(" 复合加载模板（分别从File、ClassPath、Web-root、String方式尝试查找模板）")])])])}),[],!1,null,null,null);a.default=e.exports}}]);