(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b82c4a6"],{aa73:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticStyle:{"margin-top":"10px"}},[n("el-form",{ref:"form",attrs:{"label-width":"160px"}},[n("el-form-item",{attrs:{label:"统计代码"}},[n("el-input",{attrs:{type:"textarea",rows:"6",resize:"none"},model:{value:t.list.statCode,callback:function(e){t.$set(t.list,"statCode",e)},expression:"list.statCode"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"客服链接"}},[n("el-input",{attrs:{type:"text",rows:"6"},model:{value:t.list.contactLink,callback:function(e){t.$set(t.list,"contactLink",e)},expression:"list.contactLink"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"第三方网页客服代码"}},[n("el-input",{attrs:{type:"textarea",rows:"6",resize:"none"},model:{value:t.list.contactCode,callback:function(e){t.$set(t.list,"contactCode",e)},expression:"list.contactCode"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"备案号"}},[n("el-input",{attrs:{type:"text",rows:"6"},model:{value:t.list.beianCode,callback:function(e){t.$set(t.list,"beianCode",e)},expression:"list.beianCode"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")])],1)],1)],1)],1)},o=[],i=n("b98a"),s=n("5c96"),c={data:function(){return{list:[],oldList:[]}},created:function(){this.load()},methods:{load:function(){var t=this;new Promise((function(e,n){Object(i["c"])().then((function(n){t.list=n.detail,console.log(n.detail),e()})).catch((function(t){n(t)}))})),console.log("sss")},onSubmit:function(){var t=this.list,e=0,n={};n["statCode"]=t.statCode,n["contactCode"]=t.contactCode,n["contactLink"]=t.contactLink,n["beianCode"]=t.beianCode,Object(i["d"])(n),e>0&&Object(s["Message"])({message:"修改成功",type:"success",duration:5e3})}}},l=c,r=n("2877"),u=Object(r["a"])(l,a,o,!1,null,null,null);e["default"]=u.exports},b98a:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var a=n("23f6");function o(){return Object(a["a"])({url:"/api/admin/setting_normal/detail",method:"post"})}function i(t){return console.log(t),Object(a["a"])({url:"/api/admin/setting_normal/save",method:"post",data:t})}function s(){return Object(a["a"])({url:"/api/admin/setting_oss_config/detail",method:"post"})}function c(t){return Object(a["a"])({url:"/api/admin/setting_oss_config/save",method:"post",data:t})}}}]);