(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{420:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"csv文件处理工具-csvutil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv文件处理工具-csvutil"}},[s._v("#")]),s._v(" CSV文件处理工具-CsvUtil")]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("逗号分隔值（Comma-Separated Values，CSV，有时也称为字符分隔值，因为分隔字符也可以不是逗号），其文件以纯文本形式存储表格数据（数字和文本）。")]),s._v(" "),t("p",[s._v("Hutool针对此格式，参考FastCSV项目做了对CSV文件读写的实现(Hutool实现完全独立，不依赖第三方)")]),s._v(" "),t("p",[t("code",[s._v("CsvUtil")]),s._v("是CSV工具类，主要封装了两个方法：")]),s._v(" "),t("ul",[t("li",[s._v("getReader 用于对CSV文件读取")]),s._v(" "),t("li",[s._v("getWriter 用于生成CSV文件")])]),s._v(" "),t("p",[s._v("这两个方法分别获取"),t("code",[s._v("CsvReader")]),s._v("对象和"),t("code",[s._v("CsvWriter")]),s._v("，从而独立完成CSV文件的读写。")]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"读取csv文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取csv文件"}},[s._v("#")]),s._v(" 读取CSV文件")]),s._v(" "),t("h4",{attrs:{id:"读取为csvrow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取为csvrow"}},[s._v("#")]),s._v(" 读取为CsvRow")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvReader")]),s._v(" reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从文件中读取CSV数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvData")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://doc.hutool.cn/assets/js/test.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvRow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRows")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//遍历行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvRow")]),s._v(" csvRow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//getRawList返回一个List列表，列表的每一项为CSV中的一个单元格（既逗号分隔部分）")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("csvRow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRawList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("CsvRow")]),s._v("对象还记录了一些其他信息，包括原始行号等。")]),s._v(" "),t("h4",{attrs:{id:"读取为bean列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取为bean列表"}},[s._v("#")]),s._v(" 读取为Bean列表")]),s._v(" "),t("p",[s._v("首先测试的CSV："),t("code",[s._v("https://doc.hutool.cn/assets/js/test_bean.csv")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-csv extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csv"}},[t("code",[t("span",{pre:!0,attrs:{class:"token value"}},[s._v("姓名")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("gender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("focus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("age")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("张三")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("男")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("无")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("33")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("李四")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("男")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("好对象")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("23")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("王妹妹")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("女")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("特别关注")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token value"}},[s._v("22")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("定义Bean：")])]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lombok注解")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果csv中标题与字段不对应，可以使用alias注解设置别名")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"姓名"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" gender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" focus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("读取")])]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvReader")]),s._v(" reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//假设csv文件在classpath目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUtf8Reader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://doc.hutool.cn/assets/js/test_bean.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("输出：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CsvReaderTest.TestBean(name=张三, gender=男, focus=无, age=33)\nCsvReaderTest.TestBean(name=李四, gender=男, focus=好对象, age=23)\nCsvReaderTest.TestBean(name=王妹妹, gender=女, focus=特别关注, age=22)\n")])])]),t("h3",{attrs:{id:"生成csv文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成csv文件"}},[s._v("#")]),s._v(" 生成CSV文件")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定路径和编码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvWriter")]),s._v(" writer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CsvUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getWriter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e:/testWrite.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CharsetUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHARSET_UTF_8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//按行写出")]),s._v("\nwriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("效果如下：\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201809/05222906_kF5o.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"乱码问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乱码问题"}},[s._v("#")]),s._v(" 乱码问题")]),s._v(" "),t("p",[s._v("CSV文件本身为一种简单文本格式，有编码区分，你可以使用任意编码。")]),s._v(" "),t("p",[s._v("但是当使用Excel读取CSV文件时，如果你的编码与系统编码不一致，会出现乱码的情况，解决方案如下：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("可以将csv文本编码设置为与系统一致，如Windows下可以设置GBK")])]),s._v(" "),t("li",[t("p",[s._v("可以增加BOM头来指定编码，这样Excel可以自动识别bom头的编码完成解析。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);