(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1257:function(t,e,r){t.exports=r.p+"img/default_group.8286ef5.png"},1334:function(t,e,r){"use strict";r.r(e);r(65),r(123),r(153),r(36);var n=r(16),o={asyncData:function(t){var e=t.$axios,r=t.store;return e.$get("https://hutech-alumnni-social.herokuapp.com/groups").then((function(data){return{groups:data.groups.filter((function(t){return!t.users.includes(r.state.user._id)}))}})).catch((function(t){}))},data:function(){return{groups:[],userGroup:this.$store.state.user.groups}},methods:{onJoin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$post("https://hutech-alumnni-social.herokuapp.com/groups/"+t);case 3:r.sent.success&&e.fetGroup(),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://hutech-alumnni-social.herokuapp.com/groups");case 2:if(!(r=e.sent).success){e.next=8;break}return t.groups=r.groups.filter((function(e){return!e.users.includes(t.$store.state.user._id)})),e.next=7,t.$store.dispatch("getUser");case 7:t.userGroup=t.$store.state.user.groups;case 8:case"end":return e.stop()}}),e)})))()}}},c=r(20),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper group group-detail"},[n("section",{staticClass:"content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"group-contain"},[n("div",{staticClass:"group__left"},[n("div",{staticClass:"group__left-title"},[t._v("Nhóm của bạn")]),t._v(" "),0!==t.userGroup.length?n("ul",{staticClass:"groups"},t._l(t.userGroup,(function(e,o){return n("li",{key:o},[n("nuxt-link",{staticClass:"groups__item",attrs:{to:"/groups/"+e._id}},[n("div",{staticClass:"groups__item-img"},[e.image?n("img",{attrs:{src:e.image,alt:""}}):n("img",{attrs:{src:r(1257),alt:""}})]),t._v(" "),n("div",{staticClass:"groups__item-info"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"member"},[t._v(t._s(e.users.length)+" thành viên")]),t._v(" "),n("div",{staticClass:"post"},[t._v(t._s(e.decks.length)+" bài viết")])])])],1)})),0):t._e()]),t._v(" "),n("div",{staticClass:"group__right show"},[n("div",{staticClass:"listgroup"},t._l(t.groups,(function(e,o){return n("div",{key:o,staticClass:"listgroup__item"},[n("div",{staticClass:"listgroup__item-img"},[e.image?n("img",{attrs:{src:e.image,alt:""}}):n("img",{attrs:{src:r(1257),alt:""}})]),t._v(" "),n("div",{staticClass:"listgroup__item-info"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"amount-user"},[t._v("\n                  "+t._s(e.users.length)+" thành viên\n                ")]),t._v(" "),n("div",{staticClass:"amount-post"},[t._v("\n                  "+t._s(e.decks.length)+" bài viết\n                ")]),t._v(" "),n("a",{staticClass:"btn-main btn-join",on:{click:function(r){return t.onJoin(e._id)}}},[t._v("Tham gia nhóm")])])])})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);