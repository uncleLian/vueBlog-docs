(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{180:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("项目的大部分组件都是 Element 组件，所以 Element 的主题色就是项目主题色了。")]),t._v(" "),e("p",[t._v("但我们自定义的元素怎么使用主色调呢？很简单，我们使用全局样式变量就好。请参考"),e("router-link",{attrs:{to:"/guide/basics/style.html#全局变量"}},[t._v("样式-全局变量")]),t._v("。")],1),t._v(" "),e("p",[t._v("更换项目主题色，执行以下步骤即可：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("推荐使用"),e("a",{attrs:{href:"https://elementui.github.io/theme-chalk-preview/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线主题生成工具"),e("OutboundLink")],1),t._v("。支持在线预览和直接下载。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("更高级的自定义，请前往 "),e("a",{attrs:{href:"http://element-cn.eleme.io/2.6/#/zh-CN/component/custom-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element 文档"),e("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("本项目实现了"),e("a",{attrs:{href:"https://elementui.github.io/theme-chalk-preview/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线主题生成工具"),e("OutboundLink")],1),t._v("的动态切换主题色的功能。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"更换主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 更换主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"项目主题色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目主题色","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目主题色")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("更换 Element 主题色")]),this._v(" "),s("li",[this._v("修改全局样式变量")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"更换-element-主题色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换-element-主题色","aria-hidden":"true"}},[this._v("#")]),this._v(" 更换 Element 主题色")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将下载好的主题改名为 "),s("code",[this._v("theme-chalk")]),this._v("，然后替换掉 "),s("code",[this._v("@/assets/css/theme-chalk")]),this._v(" 即可。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为在 "),s("code",[this._v("/main.js")]),this._v(" 已默认引入主题文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("import")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'@/assets/css/theme-chalk/index.css'")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// 自定义主题颜色")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"修改全局样式变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改全局样式变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改全局样式变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打开 "),s("code",[this._v("@/assets/css/index.styl")]),this._v(" 文件，修改 "),s("code",[this._v("$appColor")]),this._v("、"),s("code",[this._v("$appColorRGB")]),this._v(" 变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动态主题色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态主题色","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态主题色")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("代码："),s("code",[this._v("@/components/ThemePicker")]),this._v("。实现原理：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("获取项目的主题色 "),s("code",[this._v("theme")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /store/index.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 利用 vuex 管理当前主色调")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" variables "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/assets/css/index.styl'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" variables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appColor\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @/components/ThemePicker")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("theme\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后 watch "),s("code",[this._v("theme")]),this._v("，在回调中执行初始化方法。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("watch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("theme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_theme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"初始化方法执行步骤："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化方法执行步骤：","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化方法执行步骤：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("通过颜色转换，得出新旧主题色的集合。")]),t._v(" "),e("li",[t._v("获取所有 "),e("code",[t._v("style")]),t._v(" 标签，然后过滤。")]),t._v(" "),e("li",[t._v("通过正则，将新的主题色集合替换掉旧的主题色集合。")]),t._v(" "),e("li",[t._v("获取 "),e("code",[t._v("app.css")]),t._v(" 文件的内容，同样执行替换，然后创建新的style标签，push到页面上覆盖原来的样式。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("获取 "),s("code",[this._v("app.css")]),this._v(" 是因为项目打包后，大部分的css都压缩进 "),s("code",[this._v("app.css")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("懒加载的资源未加载时，无法进行动态切换。因为懒加载资源的自身css样式都是加载后才添加的，可以到 "),e("code",[t._v("<head>")]),t._v(" 里查看新增的 "),e("code",[t._v("<style>")]),t._v("。")]),t._v(" "),e("p",[t._v("解决方案：使用初始化就加载的 class 类名。如 Element 样式都是一开始就全部加载。或者使用 vuex 管理的 "),e("code",[t._v("theme")]),t._v("，如： 401、404页面的背景色。")])])}],!1,null,null,null);s.default=n.exports}}]);