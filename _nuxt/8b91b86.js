(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1250:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTguNzUgMTcuNjEydjQuNjM4YzAgLjMyNC4yMDguNjExLjUxNi43MTMuMDc3LjAyNS4xNTYuMDM3LjIzNC4wMzcuMjM0IDAgLjQ2LS4xMS42MDQtLjMwNmwyLjcxMy0zLjY5MnoiIGZpbGw9IiMwYzI0NjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiLz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy42ODUuMTM5Yy0uMjMtLjE2My0uNTMyLS4xODUtLjc4Mi0uMDU0bC0yMi41IDExLjc1Yy0uMjY2LjEzOS0uNDIzLjQyMy0uNDAxLjcyMi4wMjMuMy4yMjIuNTU2LjUwNS42NTNsNi4yNTUgMi4xMzggMTMuMzIxLTExLjM5LTEwLjMwOCAxMi40MTkgMTAuNDgzIDMuNTgzYy4wNzguMDI2LjE2LjA0LjI0Mi4wNC4xMzYgMCAuMjcxLS4wMzcuMzktLjEwOS4xOS0uMTE2LjMxOS0uMzExLjM1Mi0uNTNsMi43NS0xOC41Yy4wNDEtLjI4LS4wNzctLjU1OC0uMzA3LS43MjJ6IiBmaWxsPSIjMGMyNDYxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPg0K"},1360:function(t,e,n){"use strict";n.r(e);n(26),n(68),n(69);var r=n(82),c=(n(36),n(16)),o={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,d,m,M,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,c=t.$axios,e.prev=1,o=c.$get("https://hutech-alumnni-social.herokuapp.com"+"/groups/deck/".concat(n.id)),l=c.$get("https://hutech-alumnni-social.herokuapp.com"+"/reviews/group/".concat(n.id)),e.next=6,Promise.all([o,l]);case 6:return d=e.sent,m=Object(r.a)(d,2),M=m[0],v=m[1],e.abrupt("return",{post:M.deck,comment:v.reviews});case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))()},data:function(){return{post:null,comment:null,flickityOptions:{initialIndex:0,prevNextButtons:!1,pageDots:!1,wrapAround:!0,autoPlay:4e3,contain:!0,lazyLoad:2}}},methods:{submit:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector(".post-right__enter .content").innerHTML,(r=new FormData).append("body",n),e.prev=3,e.next=6,t.$axios.$post("https://hutech-alumnni-social.herokuapp.com/reviews/group/"+t.$route.params.id,r);case 6:e.sent.success&&(document.querySelector(".post-right__enter .content").innerHTML="",t.fetchData()),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))()},fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("https://hutech-alumnni-social.herokuapp.com"+"/reviews/group/".concat(t.$route.params.id));case 3:(n=e.sent).success&&(t.comment=n.reviews),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},enterText:function(t){""!==t.target.innerHTML?(document.querySelector(".post-right__enter .placeholder").classList.add("hidden"),document.querySelector(".btn-send").classList.add("notActive")):(document.querySelector(".post-right__enter .placeholder").classList.remove("hidden"),document.querySelector(".btn-send").classList.remove("notActive"))}}},l=n(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main-wrapper detail-post"},[r("div",{staticClass:"container"},[r("div",{staticClass:"post-detail-contain"},[0!==t.post.image.length?r("div",{staticClass:"post-left"},[r("Flickity",{ref:"flickity",staticClass:"imgs",attrs:{options:t.flickityOptions}},t._l(t.post.image,(function(t,e){return r("div",{key:e,staticClass:"imgs__item"},[r("img",{attrs:{src:t,alt:""}})])})),0)],1):t._e(),t._v(" "),r("div",{staticClass:"post-right"},[r("div",{staticClass:"post-right__owner"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.post.owner.avatar,alt:""}})]),t._v(" "),r("div",{staticClass:"name"},[r("span",[r("nuxt-link",{attrs:{to:"/user/"+t.post.owner._id}},[t._v("\n                "+t._s(t.post.owner.fullName)+"\n              ")])],1),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t.post.date))])])]),t._v(" "),r("div",{staticClass:"contain"},[r("div",{staticClass:"post-right__content",attrs:{id:"content"},domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),r("div",{staticClass:"post-right__comment"},t._l(t.comment,(function(e,n){return r("div",{key:n,staticClass:"comment"},[r("div",{staticClass:"comment__user"},[r("div",{staticClass:"comment__user-avatar"},[r("img",{attrs:{src:e.user.avatar,alt:""}})])]),t._v(" "),r("div",{staticClass:"comment__body"},[r("div",{staticClass:"name-user"},[r("nuxt-link",{attrs:{to:"/user/"+e.user._id}},[t._v("\n                    "+t._s(null==e.user.fullName?e.user.name:e.user.fullName)+"\n                  ")])],1),t._v(" "),r("div",{staticClass:"body",domProps:{innerHTML:t._s(e.body)}})])])})),0)]),t._v(" "),r("div",{staticClass:"post-right__enter"},[r("div",{staticClass:"placeholder"},[t._v("Thêm bình luận..")]),t._v(" "),r("div",{staticClass:"content",attrs:{contenteditable:"true"},on:{input:t.enterText}}),t._v(" "),r("i",{staticClass:"btn-send icon",on:{click:t.submit}},[r("img",{attrs:{src:n(1250),alt:""}})])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);