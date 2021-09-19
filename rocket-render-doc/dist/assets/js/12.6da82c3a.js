(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{491:function(t,a,e){"use strict";e.r(a);var s=e(126),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("rocket-form",{attrs:{inline:!0,json:t.form,model:t.queryForm},on:{"update:model":function(a){t.queryForm=a}}})],1)},staticRenderFns:[]},{data:function(){return{queryForm:{},form:[{type:"input",model:"user_name",label:"用户名称",placeholder:"请输入用户名称"}]}}}),"render-demo-1":Object(s.a)({render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("rocket-form",{attrs:{json:t.form,model:t.queryForm},on:{"update:model":function(a){t.queryForm=a}}})],1)},staticRenderFns:[]},{data:function(){return{queryForm:{},form:[{type:"input",model:"user_name",label:"用户",placeholder:"请输入用户名称"},{type:"switch",model:"open",label:"状态"}]}}})}},r=e(35),l=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rocketform介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketform介绍"}},[t._v("#")]),t._v(" RocketForm介绍")]),t._v(" "),e("p",[t._v("基础查询表单组件，可设置为栅格布局或行内布局，支持ElementUI上所有表单组件，语法与原生一致。")]),t._v(" "),e("h2",{attrs:{id:"基本用法-行内表单-inline-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-行内表单-inline-true"}},[t._v("#")]),t._v(" 基本用法 - 行内表单(inline=true)")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-0")]],2),t._v(" "),e("div",{attrs:{slot:"description"},slot:"description"},[e("p",[t._v("通过配置form对象，可动态生成UI组件，点击查询会更新model对象，并通过@handleQuery事件做后续操作；inline默认为栅格布局，更完整用法请参考下文详细组件文档。")])]),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("rocket-form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":inline")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":json")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model.sync")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("queryForm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        queryForm"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        form"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            model"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户名称"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            placeholder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入用户名称"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),e("h2",{attrs:{id:"基本用法-栅格表单-inline-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-栅格表单-inline-false"}},[t._v("#")]),t._v(" 基本用法 - 栅格表单(inline=false)")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-1")]],2),t._v(" "),e("div",{attrs:{slot:"description"},slot:"description"},[e("p",[t._v("通过配置form对象，可动态生成UI组件，点击查询会更新model对象，并通过@handleQuery事件做后续操作；inline默认为栅格布局，更完整用法请参考下文详细组件文档。")])]),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("rocket-form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":json")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model.sync")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("queryForm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        queryForm"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        form"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                model"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                label"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                placeholder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入用户名称"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                model"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                label"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"状态"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),e("h2",{attrs:{id:"组件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件属性"}},[t._v("#")]),t._v(" 组件属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inline")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("行内表单，默认栅格")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("true|false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("form")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("绑定JSON对象")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Array[item]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表单初始化数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])]),t._v(" "),e("h2",{attrs:{id:"json参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json参数"}},[t._v("#")]),t._v(" json参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("控件类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("参考上文")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("绑定的动态属性，用于保存表单值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("options")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通用配置列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("所有UI组件的自定义事件")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Function(val,values,model,config)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("action")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("按钮的行为，主要用来重置其它表单")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("{type:'reset',model:'all'/['name'] }")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("表格列出来的为自定义参数，其它参数请参考原生ElementUI\n当type='number'时，会生成H5原生数字框，鼠标悬浮时会出现数字上下滚动箭头，通过设置arrow:false，可手动隐藏箭头")])]),t._v(" "),e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("@handleQuery")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点击查询触发函数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("fn(page=1)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("所有组件支持change事件，可做自定义业务处理，返回{val,values,model}，分别对应当前值，表单所有值和当前model")])]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("handleReset")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通过ref可调用QueryForm内重置")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("fn()")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);