(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{425:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"可复用字符串生成器-strbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可复用字符串生成器-strbuilder"}},[t._v("#")]),t._v(" 可复用字符串生成器-StrBuilder")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("在JDK提供的"),a("code",[t._v("StringBuilder")]),t._v("中，拼接字符串变得更加高效和灵活，但是生成新的字符串需要重新构建"),a("code",[t._v("StringBuilder")]),t._v("对象，造成性能损耗和内存浪费，因此Hutool提供了可复用的"),a("code",[t._v("StrBuilder")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[a("code",[t._v("StrBuilder")]),t._v("和"),a("code",[t._v("StringBuilder")]),t._v("使用方法基本一致，只是多了"),a("code",[t._v("reset")]),t._v("方法可以重新构建一个新的字符串而不必开辟新内存。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrBuilder")]),t._v(" builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：aaa你好r")]),t._v("\n")])])]),a("h2",{attrs:{id:"多次构建字符串性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多次构建字符串性能测试"}},[t._v("#")]),t._v(" 多次构建字符串性能测试")]),t._v(" "),a("p",[t._v("我们模拟创建1000000次字符串对两者性能对比，采用"),a("code",[t._v("TimeInterval")]),t._v("计时：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//StringBuilder \nTimeInterval timer = DateUtil.timer();\nStringBuilder b2 = new StringBuilder();\nfor(int i =0; i< 1000000; i++) {\n\tb2.append("test");\n\tb2 = new StringBuilder();\n}\nConsole.log(timer.interval());\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//StrBuilder\nTimeInterval timer = DateUtil.timer();\nStrBuilder builder = StrBuilder.create();\nfor(int i =0; i< 1000000; i++) {\n\tbuilder.append("test");\n\tbuilder.reset();\n}\nConsole.log(timer.interval());\n')])])]),a("p",[t._v("测试结果为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("StringBuilder: 39ms\nStrBuilder   : 20ms\n")])])]),a("p",[t._v("性能几乎翻倍。也欢迎用户自行测试。")])])}),[],!1,null,null,null);a.default=r.exports}}]);