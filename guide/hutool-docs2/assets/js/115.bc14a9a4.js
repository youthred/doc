(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{461:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日志工厂-logfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志工厂-logfactory"}},[t._v("#")]),t._v(" 日志工厂-LogFactory")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Hutool-log做为一个日志门面，为了兼容各大日志框架，一个用于自动创建日志对象的日志工厂类必不可少。")]),t._v(" "),a("p",[a("code",[t._v("LogFactory")]),t._v("类用于灵活的创建日志对象，通过static方法创建我们需要的日志对象，主要功能如下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("https://doc.hutool.cn/assets/js/LogFactory.get")]),t._v(" 自动识别引入的日志框架，从而创建对应日志框架的门面Log对象（此方法创建一次后，下次再次get会根据传入类名缓存Log对象，对于每个类，Log对象都是单例的），同时自动识别当前类，将当前类做为类名传入日志框架。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("LogFactory.createLog")]),t._v(" 与get方法作用类似。但是此方法调用后会每次创建一个新的Log对象。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("LogFactory.setCurrentLogFactory")]),t._v(" 自定义当前日志门面的日志实现类。当引入多个日志框架时，我们希望自定义所用的日志框架，调用此方法即可。需要注意的是，此方法为全局方法，在获取Log对象前只调用一次即可。")])])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"获取当前类对应的log对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取当前类对应的log对象"}},[t._v("#")]),t._v(" 获取当前类对应的Log对象：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推荐创建不可变静态类成员变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你想获得自定义name的Log对象（像普通Log日志实现一样），那么可以使用如下方式获取Log：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是一个自定义日志名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定义日志实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志实现"}},[t._v("#")]),t._v(" 自定义日志实现")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义日志实现为Apache Commons Logging")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApacheCommonsLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义日志实现为JDK Logging")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdkLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义日志实现为Console Logging")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsoleLogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定义日志工厂-自定义日志门面实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志工厂-自定义日志门面实现"}},[t._v("#")]),t._v(" 自定义日志工厂（自定义日志门面实现）")]),t._v(" "),a("p",[t._v("LogFactory是一个抽象类，我们可以继承此类，实现"),a("code",[t._v("createLog")]),t._v("方法即可（同时我们可能需要实现Log接口来达到自定义门面的目的），这样我们就可以自定义一个日志门面。最后通过"),a("code",[t._v("LogFactory.setCurrentLogFactory")]),t._v("方法装入这个自定义LogFactory即可实现自定义日志门面。")]),t._v(" "),a("blockquote",[a("p",[t._v("PS\n自定义日志门面的实现可以参考"),a("code",[t._v("cn.hutool.log.dialect")]),t._v("包中的实现内容自定义扩展。\n本质上，实现Log接口，做一个日志实现的Wrapper，然后在相应的工厂类中创建此Log实例即可。同时，LogFactory中还可以初始化一些启动配置参数。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);