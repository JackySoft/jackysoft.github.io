(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd2f"],{ea52:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("wrapper",[a("search-box",[a("search-form",{attrs:{json:e.form,model:e.queryForm},on:{"update:model":function(t){e.queryForm=t},handleQuery:e.getTableList,handleReset:e.getTableList}})],1),a("div",{staticClass:"table-box"},[a("rocket-table",{attrs:{loading:e.showLoading,column:e.mainColumn,data:e.mainData,pagination:e.pagination},on:{"update:loading":function(t){e.showLoading=t},"update:column":function(t){e.mainColumn=t},"update:pagination":function(t){e.pagination=t},handleChange:e.getTableList,handleAction:e.handleAction,handleCellClick:e.handleCellClick,handleSelectionChange:e.handleSelectionChange},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 基础表格 ")]},proxy:!0},{key:"action",fn:function(){return[a("el-button",{attrs:{type:"primary"}},[e._v("导出数据")])]},proxy:!0}])})],1)],1)},i=[],n=a("5530"),o=(a("d81d"),{name:"query",data:function(){return{showLoading:!1,queryForm:{user_name:"jack",user_status:[1,2],register_date:"2020-11-20",login_time:["2020-11-01","2020-11-20"],time_part_start:"03:00",time_part_end:"05:00",match:1,province:["Hubei","Wuhan"],use_status:1},form:[{type:"text",model:"user_name",label:"用户",arrow:!1,placeholder:"请输入用户名称"},{type:"radio",label:"使用状态",placeholder:"请选择使用状态",model:"use_status",options:[{label:"在线",value:1},{label:"离线",value:2}]},{type:"select",model:"user_status",label:"用户状态",multiple:!0,filterable:!0,options:[{label:"全部",value:0},{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"date",model:"register_date",label:"注册日期",shortcuts:!0,width:"150px"},{type:"daterange",model:"login_time",label:"日期范围",width:"220px"},{type:"time-select",label:"注册时段",gutter:10,action:{type:"reset",model:["time_part_end"]},items:[{model:"time_part_start",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}},{model:"time_part_end",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}}]},{type:"cascader",model:"province",label:"省份",options:[{value:"Hubei",label:"湖北",children:[{value:"Wuhan",label:"武汉"},{value:"Xiangyang",label:"襄阳"}]},{value:"Beijing",label:"北京",children:[{value:"Haidian",label:"海淀区"},{value:"ChaoYang",label:"朝阳"}]}]},{type:"checkbox",model:"match",label:"是否匹配",trueLabel:1,falseLabel:0},{type:"switch",model:"isCheck",label:"是否校验"}],mainColumn:[{prop:"selection",type:"selection",label:"选框"},{prop:"index",type:"index",label:"序号"},{prop:"uid",label:"用户ID",align:"left"},{prop:"cname",label:"用户名称",align:"left"},{prop:"user_img",label:"头像",showOverflowTooltip:!1,type:"image",image:{type:"single",width:60,height:40}},{prop:"site_url",label:"网址",type:"url",showOverflowTooltip:!1},{prop:"use_status",label:"当前状态",type:"click",formatter:function(e){return e.use_status>2?"--":{1:"在线",2:"离线"}[e.use_status]}},{prop:"user_email",label:"邮箱"},{prop:"user_status_name",label:"用户状态"},{prop:"register_date",label:"注册时间"},{prop:"",label:"操作",type:"action",width:"200px",fixed:"right",list:[{prop:"status",val:{2:"启用",1:{text:"禁用",color:"danger"}},type:"primary",permission:!0},{text:"编辑",type:"info",permission:!0},{text:"删除",color:"danger",type:"danger",permission:!0}]}],mainData:[],pagination:{pageNum:1,pageSize:20,total:0}}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showLoading=!0,this.pagination.pageNum=t;var a=Object(n["a"])(Object(n["a"])({},this.queryForm),this.pagination);this.$api.getBasicList(a).then((function(t){e.mainData=t.list,e.showLoading=!1,e.pagination.total=t.total}))},handleCellClick:function(e){var t=e.row;this.$message.success("单元格点击，值为："+t.uid)},handleSelectionChange:function(e){this.$message.success("勾选项id为"+e.map((function(e){return e.id})))},handleAction:function(e){var t=e.index,a=e.row;0===t?this.$message.success("你选择了第一个按钮"):1===t?this.$message.success("你选择了第二个按钮"):this.$message.success("你选择了第三个按钮"),console.log(a)},handleExport:function(){var e="/basic/export",t=this.query;this.$utils.handleExport(e,t)}}}),s=o,r=a("2877"),p=Object(r["a"])(s,l,i,!1,null,null,null);t["default"]=p.exports}}]);