(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbda98f0"],{"2e3f":function(e,t,n){"use strict";var l=n("d507"),i=n.n(l);i.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},9137:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-encrypted"},[n("v-input",{attrs:{placeholder:e.placeholder,type:e.inputType,"icon-right":e.lockIcon,"icon-right-color":e.iconColor},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}})],1)},i=[],u=n("8db2"),a=n.n(u),o={mixins:[a.a],data:function(){return{originalValue:this.value||"",newValue:""}},computed:{placeholder:function(){return this.originalValue?this.options.showHash?this.originalValue:this.$t("interfaces.hashed.secured"):this.options.placeholder},valueChanged:function(){return this.value!==this.originalValue},inputType:function(){return this.options.hide?"password":"text"},lockIcon:function(){return this.valueChanged?"lock_open":"lock_outline"},iconColor:function(){return this.valueChanged?"warning":"accent"}},watch:{newValue:function(e){this.$emit("input",e)}}},r=o,c=(n("2e3f"),n("2877")),d=Object(c["a"])(r,l,i,!1,null,"822b2c9e",null);t["default"]=d.exports},d507:function(e,t,n){}}]);
//# sourceMappingURL=chunk-dbda98f0.0347671d.js.map