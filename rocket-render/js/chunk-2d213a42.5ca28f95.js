(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213a42"],{ae19:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("wrapper",[t("search-box",[t("search-form",{attrs:{inline:"grid",json:e.formJson,model:e.queryForm},on:{"update:model":function(a){e.queryForm=a},handleQuery:e.getTableList}})],1),t("rocket-table",{staticClass:"table-box",attrs:{border:"",loading:e.showLoading,column:e.mainColumn,data:e.mainData,pagination:e.pagination},on:{"update:loading":function(a){e.showLoading=a},"update:column":function(a){e.mainColumn=a},"update:pagination":function(a){e.pagination=a},handleChange:e.getTableList},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 栅格表单 ")]},proxy:!0}])})],1)},n=[],i=t("5530"),o={name:"query",data:function(){return{showLoading:!1,queryForm:{user_name:"jack",user_status:[1,2],register_date:"2020-11-20",login_time:["2020-11-01","2020-11-20"],match:1,province:["Hubei","Wuhan"],use_status:1,query_field:1},formJson:[{type:"text",model:"user_name",label:"用户",placeholder:"请输入用户名称",prependConfig:{type:"select",model:"query_field",label:"",width:"90px",options:[{label:"全部",value:0},{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]}},{type:"radio",label:"使用状态",placeholder:"请选择使用状态",model:"use_status",options:[{label:"在线",value:1},{label:"离线",value:2}]},{type:"select",model:"user_status",label:"用户状态",multiple:!0,filterable:!0,options:[{label:"全部",value:0},{label:"已注销",value:1},{label:"老用户",value:2},{label:"新用户",value:3}]},{type:"date",model:"register_date",label:"注册日期",shortcuts:!0,width:"150px"},{type:"daterange",model:"login_time",label:"日期范围",width:"220px"},{type:"time-select",label:"注册时段",gutter:10,action:{type:"reset",model:["time_part_end"]},items:[{model:"time_part_start",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}},{model:"time_part_end",pickerOptions:{start:"00:00",step:"01:00",end:"23:00"}}]},{type:"cascader",model:"province",label:"省份",props:{multiple:!0,checkStrictly:!0},options:[{value:"Hubei",label:"湖北",children:[{value:"Wuhan",label:"武汉"},{value:"Xiangyang",label:"襄阳"}]},{value:"Beijing",label:"北京",children:[{value:"Haidian",label:"海淀区"},{value:"ChaoYang",label:"朝阳"}]}]},{type:"checkbox",model:"match",label:"是否匹配",trueLabel:1,falseLabel:0},{type:"switch",model:"isCheck",label:"是否校验"}],mainColumn:[{prop:"index",type:"index",label:"序号"},{prop:"uid",label:"用户ID",align:"left"},{prop:"cname",label:"用户名称",align:"left"},{prop:"user_img",label:"头像",width:240,type:"image",image:{type:"single"}},{prop:"use_status",label:"当前状态",formatter:function(e){return{1:"在线",2:"离线"}[e.use_status]}},{prop:"user_email",label:"邮箱"},{prop:"user_status_name",label:"用户状态"},{prop:"intrest_name",label:"兴趣",width:70},{prop:"register_date",label:"注册时间"}],mainData:[],pagination:{pageNum:1,pageSize:20,total:0}}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showLoading=!0,this.pagination.pageNum=a;var t=Object(i["a"])(Object(i["a"])({},this.queryForm),this.pagination);this.$api.getBasicList(t).then((function(a){e.mainData=a.list,e.showLoading=!1,e.pagination.total_count=a.total_count}))}}},s=o,r=t("2877"),u=Object(r["a"])(s,l,n,!1,null,null,null);a["default"]=u.exports}}]);