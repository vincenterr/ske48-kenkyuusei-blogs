(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t.n(a),o=t(0),i=t.n(o),p=t(139),c=t(136),d=t(137),m=t(142),s=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props.generations;return i.a.createElement(l,null,i.a.createElement("h3",{className:"title"},"HOME"),i.a.createElement("div",{className:"content"},e.map(function(e){return i.a.createElement(u,{key:e.generation,extraCss:"margin-bottom: 10px; &:last-child { margin-bottom: 0 }",generation:e})})))},n}(i.a.Component),l=c.a.div.withConfig({displayName:"HomePage__Wrapper",componentId:"knuqh7-0"})(["& > .title{padding:10px 15px;background:#f8b500;}& > .content{padding:10px 30px 15px;background:#fff9ed;}"]),u=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props,t=e.extraCss,a=e.generation;return i.a.createElement(n.Wrapper,{extraCss:t},i.a.createElement(n.Title,null,a.generation+"期生"),a.members.map(function(e){return i.a.createElement(n.Member,{key:e.id,to:"/"+e.id},e.jpnName,i.a.createElement("span",null,e.engName))}))},n}(i.a.Component);u.Wrapper=c.a.div.withConfig({displayName:"HomePage__Wrapper",componentId:"knuqh7-1"})(["",""],function(e){return e.extraCss}),u.Title=c.a.h3.withConfig({displayName:"HomePage__Title",componentId:"knuqh7-2"})(["padding:5px 10px;background:#ffc05d;"]),u.Member=Object(c.a)(d.Link).withConfig({displayName:"HomePage__Member",componentId:"knuqh7-3"})(["display:block;border-bottom:1px dotted #555;padding:8px 10px;color:#e57e16;font-size:18px;text-decoration:none;& > span{margin-left:5px;color:#8d8d8d;font-size:14px;}"]),n.default=Object(m.a)(Object(p.b)(function(e){return{generations:e.generations}},null)(s))}}]);
//# sourceMappingURL=component---src-templates-home-page-js-e02a775749ee6ddce6aa.js.map