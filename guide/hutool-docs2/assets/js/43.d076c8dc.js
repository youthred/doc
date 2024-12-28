(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{371:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[t._v("#")]),t._v(" 由来")]),t._v(" "),a("p",[t._v("数字工具针对数学运算做工具性封装")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"加减乘除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加减乘除"}},[t._v("#")]),t._v(" 加减乘除")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("https://doc.hutool.cn/assets/js/NumberUtil.add")]),t._v("  针对数字类型做加法")]),t._v(" "),a("li",[a("code",[t._v("https://doc.hutool.cn/assets/js/NumberUtil.sub")]),t._v("  针对数字类型做减法")]),t._v(" "),a("li",[a("code",[t._v("https://doc.hutool.cn/assets/js/NumberUtil.mul")]),t._v("  针对数字类型做乘法")]),t._v(" "),a("li",[a("code",[t._v("https://doc.hutool.cn/assets/js/NumberUtil.div")]),t._v("  针对数字类型做除法，并提供重载方法用于规定除不尽的情况下保留小数位数和舍弃方式。")])]),t._v(" "),a("p",[t._v("以上四种运算都会将double转为BigDecimal后计算，解决float和double类型无法进行精确计算的问题。这些方法常用于商业计算。")]),t._v(" "),a("h3",{attrs:{id:"保留小数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保留小数"}},[t._v("#")]),t._v(" 保留小数")]),t._v(" "),a("p",[t._v("保留小数的方法主要有两种：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NumberUtil.round")]),t._v(" 方法主要封装BigDecimal中的方法来保留小数，返回BigDecimal，这个方法更加灵活，可以选择四舍五入或者全部舍弃等模式。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" te1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456.123456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" te2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456.128456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("te1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果:123456.1235")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("te2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果:123456.1285")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("NumberUtil.roundStr")]),t._v(" 方法主要封装"),a("code",[t._v("String.format")]),t._v("方法,舍弃方式采用四舍五入。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" te1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456.123456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" te2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456.128456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("roundStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("te1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果:123456.12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("roundStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("te2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果:123456.13")]),t._v("\n")])])]),a("h3",{attrs:{id:"decimalformat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decimalformat"}},[t._v("#")]),t._v(" decimalFormat")]),t._v(" "),a("p",[t._v("针对 "),a("code",[t._v("DecimalFormat.format")]),t._v("进行简单封装。按照固定格式对double或long类型的数字做格式化操作。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("299792458")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光速")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NumberUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decimalFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('",###"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//299,792,458")]),t._v("\n")])])]),a("p",[t._v("格式中主要以 # 和 0 两种占位符号来指定数字长度。0 表示如果位数不足则以 0 填充，# 表示只要有可能就把数字拉上这个位置。")]),t._v(" "),a("ul",[a("li",[t._v("0 -> 取一位整数")]),t._v(" "),a("li",[t._v("0.00 -> 取一位整数和两位小数")]),t._v(" "),a("li",[t._v("00.000 -> 取两位整数和三位小数")]),t._v(" "),a("li",[t._v("# -> 取所有整数部分")]),t._v(" "),a("li",[t._v("#.##% -> 以百分比方式计数，并取两位小数")]),t._v(" "),a("li",[t._v("#.#####E0 -> 显示为科学计数法，并取五位小数")]),t._v(" "),a("li",[t._v(",### -> 每三位以逗号进行分隔，例如：299,792,458")]),t._v(" "),a("li",[t._v("光速大小为每秒,###米 -> 将格式嵌入文本")])]),t._v(" "),a("p",[t._v("关于格式的更多说明，请参阅："),a("a",{attrs:{href:"https://blog.csdn.net/evangel_z/article/details/7624503",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java DecimalFormat的主要功能及使用方法"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"校验数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验数字"}},[t._v("#")]),t._v(" 校验数字")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NumberUtil.isNumber")]),t._v(" 是否为数字")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.isInteger")]),t._v(" 是否为整数")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.isDouble")]),t._v(" 是否为浮点数")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.isPrimes")]),t._v(" 是否为质数")])]),t._v(" "),a("h3",{attrs:{id:"随机数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机数"}},[t._v("#")]),t._v(" 随机数")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NumberUtil.generateRandomNumber")]),t._v(" 生成不重复随机数 根据给定的最小数字和最大数字，以及随机数的个数，产生指定的不重复的数组。")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.generateBySet")]),t._v(" 生成不重复随机数 根据给定的最小数字和最大数字，以及随机数的个数，产生指定的不重复的数组。")])]),t._v(" "),a("h3",{attrs:{id:"整数列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数列表"}},[t._v("#")]),t._v(" 整数列表")]),t._v(" "),a("p",[a("code",[t._v("NumberUtil.range")]),t._v(" 方法根据范围和步进，生成一个有序整数列表。\n"),a("code",[t._v("NumberUtil.appendRange")]),t._v(" 将给定范围内的整数添加到已有集合中")]),t._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NumberUtil.factorial")]),t._v(" 阶乘")]),t._v(" "),a("li",[a("code",[t._v("https://doc.hutool.cn/assets/js/NumberUtil.sqrt")]),t._v(" 平方根")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.divisor")]),t._v(" 最大公约数")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.multiple")]),t._v(" 最小公倍数")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.getBinaryStr")]),t._v(" 获得数字对应的二进制字符串")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.binaryToInt")]),t._v(" 二进制转int")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.binaryToLong")]),t._v(" 二进制转long")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.compare")]),t._v(" 比较两个值的大小")]),t._v(" "),a("li",[a("code",[t._v("NumberUtil.toStr")]),t._v(" 数字转字符串，并自动去除尾小数点儿后多余的0")])])])}),[],!1,null,null,null);a.default=n.exports}}]);