webpackJsonp([8],{34:function(t,n,a){"use strict";var e=a(6),i=a(96),v=a(90),s=a.n(v),r=function(){return a.e(6).then(a.bind(null,101))};e.default.use(i.a),n.a=new i.a({routes:[{path:"/",name:"Entry",component:s.a,children:[{path:"home",name:"Home",component:function(){return a.e(5).then(a.bind(null,102))}},{path:"mytask",name:"Mytask",component:function(){return a.e(4).then(a.bind(null,103))}},{path:"page1",component:function(){return a.e(3).then(a.bind(null,104))},children:[{path:"",name:"Page1_0",redirect:"page1-1"},{path:"page1-1",name:"Page1_1",component:function(){return a.e(2).then(a.bind(null,105))}},{path:"*",name:"error404_L2",component:r}]},{path:"page2",name:"Page2",component:function(){return a.e(1).then(a.bind(null,106))}},{path:"page3",name:"Page3",component:function(){return a.e(0).then(a.bind(null,107))}},{path:"*",name:"error404_L1",component:r}]}]})},35:function(t,n,a){"use strict";var e=a(6),i=a(11),v=a(48),s=a(49);e.default.use(i.a),n.a=new i.a.Store({modules:{entry:v.a,page1:s.a}})},36:function(t,n){},37:function(t,n){},39:function(t,n,a){function e(t){a(88)}var i=a(7)(a(43),a(94),e,null,null);t.exports=i.exports},40:function(t,n,a){var e=a(7)(a(46),a(95),null,null,null);t.exports=e.exports},43:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},44:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(51),i=a.n(e),v=a(53),s=a.n(v),r=a(42),c=a.n(r),o=a(11),u=a(91),l=a.n(u);n.default={name:"entry",data:function(){return{sideNav_W:160,contentMain_W:"auto",navs:[{nav_id:"nav_id1",nav_name:"菜单名称1",child:[{nav_id:"nav_id1-2",nav_name:"菜单名称1-2",nav_to:"/mytask"},{nav_id:"nav_id1-3",nav_name:"菜单名称1-3",nav_to:"/page1"},{nav_id:"nav_id1-4",nav_name:"菜单名称1-4",nav_to:"/page2"},{nav_id:"nav_id1-5",nav_name:"菜单名称1-5",nav_to:"/page3"}],nav_to:"/"},{nav_id:"nav_id2",nav_name:"菜单名称2",child:[{nav_id:"nav_id2-1",nav_name:"菜单名称2-1",nav_to:"/"},{nav_id:"nav_id2-2",nav_name:"菜单名称2-2",nav_to:"/"},{nav_id:"nav_id2-3",nav_name:"菜单名称2-3",nav_to:"/"}],nav_to:"/"},{nav_id:"nav_id3",nav_name:"菜单名称3",child:[{nav_id:"nav_id3-1",nav_name:"菜单名称3-1",nav_to:"/"},{nav_id:"nav_id3-2",nav_name:"菜单名称3-2",nav_to:"/"},{nav_id:"nav_id3-3",nav_name:"菜单名称3-3",nav_to:"/"}],nav_to:"/"},{nav_id:"nav_id4",nav_name:"菜单名称4",child:[{nav_id:"nav_id4-1",nav_name:"菜单名称4-1",nav_to:"/"},{nav_id:"nav_id4-2",nav_name:"菜单名称4-2",nav_to:"/"},{nav_id:"nav_id4-3",nav_name:"菜单名称4-3",nav_to:"/"}],nav_to:"/"},{nav_id:"nav_id5",nav_name:"菜单名称5",child:[{nav_id:"nav_id5-1",nav_name:"菜单名称5-1",nav_to:"/"},{nav_id:"nav_id5-2",nav_name:"菜单名称5-2",nav_to:"/"},{nav_id:"nav_id5-3",nav_name:"菜单名称5-3",nav_to:"/"}],nav_to:"/"}],navTabs:[{nav_id:"home",nav_name:"首页",nav_to:"/home",fixed:!0}],recentActivatedTabs:new Array(2)}},computed:c()({},a.i(o.b)({active_navName:function(t){return t.entry.active_navName}})),watch:{$route:function(t,n){}},created:function(){var t=this.navTabs.length&&this.navTabs[0];t?(this.setActive_navName(t.nav_id),this.$router.push({path:t.nav_to})):this.$router.push({path:"/"})},methods:c()({},a.i(o.c)(["setActive_navName"]),{toggleClick:function(){this.sideNav_W?this.sideNav_W=0:this.sideNav_W=160},activeTab:function(t){this.navTabs.find(function(n){return n.nav_id==t.nav_id})||(this.navTabs=[].concat(s()(this.navTabs),[t]))},addActivatedTab:function(t){this.recentActivatedTabs.shift(),this.recentActivatedTabs.push(t)},changeTab:function(t){t?this.setActive_navName(t.nav_id):this.setActive_navName("")},onSelectNav:function(t){if(t!==this.active_navName){var n=null,a=!0,e=!1,v=void 0;try{for(var s,r=i()(this.navs);!(a=(s=r.next()).done);a=!0){if(n=s.value.child.find(function(n){return n.nav_id==t}))break}}catch(t){e=!0,v=t}finally{try{!a&&r.return&&r.return()}finally{if(e)throw v}}this.activeTab(n),this.addActivatedTab(n),this.changeTab(n),this.$router.push({path:n.nav_to})}},selectTab:function(t){t.nav_id!==this.active_navName&&(this.addActivatedTab(t),this.changeTab(t),this.$router.push({path:t.nav_to}))},closeTab:function(t){console.log(this.recentActivatedTabs);var n;t.nav_id===this.active_navName&&(n=this.recentActivatedTabs[0],this.changeTab(n),n?this.$router.push({path:n.nav_to}):this.$router.push("/")),this.navTabs.forEach(function(n,a){n.nav_id===t.nav_id&&this.navTabs.splice(a,1)},this),this.deleteActivatedTab(t)},deleteActivatedTab:function(t){var n=null;if(this.recentActivatedTabs.find(function(a,e){if(a&&a.nav_id===t.nav_id)return n=e,!0}),null!==n){this.recentActivatedTabs.splice(n,1);var a=null,e=this.recentActivatedTabs[0];this.navTabs.forEach(function(t,n){e&&e.nav_id==t.nav_id&&(a=this.navTabs[n-1]||this.navTabs[n+1])},this),this.recentActivatedTabs.unshift(a)}}}),components:{Hello:l.a}}},45:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},46:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"PageWrap",data:function(){return{minPageWrap_H:0}},mounted:function(){this.set_pageWrap_H()},methods:{set_pageWrap_H:function(){var t=this,n=this.$refs.pageWrap.getBoundingClientRect().top;this.minPageWrap_H=document.documentElement.clientHeight-n+"px",window.onresize=function(){function a(){t.minPageWrap_H=document.documentElement.clientHeight-n+"px",clearTimeout(t.timer),t.timer=null}t.timer?(clearTimeout(t.timer),t.timer=setTimeout(a,300)):t.timer=setTimeout(a,300)}}}}},47:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(6),i=a(39),v=a.n(i),s=a(34),r=(a(11),a(35)),c=a(38),o=a.n(c),u=a(36),l=(a.n(u),a(37)),d=(a.n(l),a(40)),h=a.n(d),_=a(41),m=a.n(_);e.default.use(o.a),e.default.component("pagewrap",h.a),e.default.use(m.a),e.default.config.productionTip=!1,s.a.beforeEach(function(t,n,a){r.a.state.entry.active_navName||(r.a.dispatch("setActive_navName","home"),a({path:"/home"})),a()}),new e.default({el:"#app",router:s.a,store:r.a,template:"<App/>",components:{App:v.a}})},48:function(t,n,a){"use strict";var e={active_navName:""},i={},v={setActive_navName:function(t,n){return(0,t.commit)("SETACTIVE_NAVNAME",n)}},s={SETACTIVE_NAVNAME:function(t,n){t.active_navName=n}};n.a={state:e,getters:i,actions:v,mutations:s}},49:function(t,n,a){"use strict";var e={activeTab:null},i={},v={setActiveTab:function(t,n){return(0,t.commit)("SETACTIVETAB",n)}},s={SETACTIVETAB:function(t,n){t.activeTab=n}};n.a={state:e,getters:i,actions:v,mutations:s}},86:function(t,n){},87:function(t,n){},88:function(t,n){},89:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAyCAYAAACqGbz7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RjI1NTdGQjAwRTFFNTExODNBREExRjlFMUFBMTlEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxREQ2RThDMzkyMjIxMUU3OTY4OEFDN0M4ODQwNzVCRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxREQ2RThDMjkyMjIxMUU3OTY4OEFDN0M4ODQwNzVCRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODg2MmI0MmEtNWRlYi03YTQ1LTk1MGQtMThiZjJhMjBiNmM4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGRkU2MDQxMDc2RDExRTZCREI1Qjg3RTAyOTEwNTk1Ii8+IDwvcmRmOkRlc2Ny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"},90:function(t,n,a){function e(t){a(87)}var i=a(7)(a(44),a(93),e,null,null);t.exports=i.exports},91:function(t,n,a){function e(t){a(86)}var i=a(7)(a(45),a(92),e,"data-v-411a6c9e",null);t.exports=i.exports},92:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},93:function(t,n,a){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"Entry"},[a("div",{staticClass:"pageHead_wrap"},[a("div",{staticClass:"pageHead"},[t._m(0),t._v(" "),a("div",{staticClass:"navTabs"},[a("div",{staticClass:"toggleBtn"},[a("i-button",{attrs:{type:"text",size:"small"},on:{click:t.toggleClick}},[a("Icon",{attrs:{type:"navicon",size:"24",color:"#fff"}})],1)],1),t._v(" "),a("div",{staticClass:"navTabs"},[a("ul",{staticClass:"tabList"},t._l(t.navTabs,function(n){return a("li",{key:n.nav_id,class:{active:n.nav_id===t.active_navName,fixed:n.fixed},on:{click:function(a){t.selectTab(n)}}},[a("a",[t._v(t._s(n.nav_name))]),t._v(" "),n.fixed?t._e():a("span",{staticClass:"ico ico_tabClose closeBtn",on:{click:function(a){a.stopPropagation(),t.closeTab(n)}}})])}))])])])]),t._v(" "),a("div",{staticClass:"layout",class:{"layout-hide-side":!t.sideNav_W}},[a("div",{staticClass:"sideNav",style:{width:t.sideNav_W+"px"}},[a("div",{directives:[{name:"bar",rawName:"v-bar",value:{preventParentScroll:!0},expression:"{preventParentScroll: true}"}],staticClass:"vueBarWrap"},[a("Menu",{attrs:{"active-name":t.active_navName,width:"160px"},on:{"on-select":t.onSelectNav}},t._l(t.navs,function(n){return a("Submenu",{key:n.nav_id,attrs:{name:n.nav_id}},[a("template",{slot:"title"},[t._v(t._s(n.nav_name))]),t._v(" "),t._l(n.child,function(n){return a("MenuItem",{key:n.nav_id,attrs:{name:n.nav_id}},[t._v(t._s(n.nav_name))])})],2)}))],1)]),t._v(" "),a("div",{staticClass:"contentMain",style:{paddingLeft:t.sideNav_W+"px"}},[a("router-view")],1)])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pageTop"},[e("div",{staticClass:"Logo"},[e("img",{attrs:{src:a(89)}})]),t._v(" "),e("div",{staticClass:"headR"},[t._v("您好， XXX")])])}]}},94:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},95:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{ref:"pageWrap",staticClass:"pageWrap",style:{minHeight:t.minPageWrap_H}},[t._t("default")],2)},staticRenderFns:[]}}},[47]);
//# sourceMappingURL=app.df8ff845558bb639fb14.js.map