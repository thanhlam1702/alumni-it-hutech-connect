(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1348:function(t,e,n){"use strict";n.r(e);n(36);var o=n(16),c=[{title:"Id",dataIndex:"_id",key:"id",scopedSlots:{customRender:"id"}},{title:"Title",dataIndex:"content",key:"age",ellipsis:!0,scopedSlots:{customRender:"content"}},{title:"Author",dataIndex:"owner.name",key:"",ellipsis:!0},{title:"Date",dataIndex:"date",key:"date"},{title:"Action",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}],r={layout:"admin",asyncData:function(t){return t.$axios.$get("https://hutech-alumnni-social.herokuapp.com/decks").then((function(data){return{deck:data.decks}})).catch((function(t){}))},data:function(){return{columns:c,deck:null}},methods:{fetchData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://hutech-alumnni-social.herokuapp.com/decks");case 2:n=e.sent,t.deck=n.decks,console.log("da xoa");case 5:case"end":return e.stop()}}),e)})))()},showDeleteConfirm:function(t){var e=this;this.$confirm({title:"Bạn có chắc chắn muốn xóa post này?",okText:"Xóa",okType:"danger",cancelText:"Hủy",onOk:function(){e.onDelete(t)}})},onDelete:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$delete("https://hutech-alumnni-social.herokuapp.com/decks/"+t);case 2:n.sent.success&&e.fetchData();case 4:case"end":return n.stop()}}),n)})))()}}},l=n(20),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main-wrapper admin"},[n("section",{staticClass:"management-content",staticStyle:{padding:"15px"}},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"nav__options"},[n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/admin/user-management"}},[t._v("User Management")])],1),t._v(" "),n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/admin/post-management"}},[t._v("Post Management")])],1),t._v(" "),n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/admin/group-management"}},[t._v("Group Management")])],1),t._v(" "),n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/admin/news"}},[t._v("News ")])],1),t._v(" "),n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/admin/events"}},[t._v("Events")])],1)])]),t._v(" "),n("div",{staticClass:"post__management"},[n("div",{staticClass:"post__management-infor"},[[n("a-table",{attrs:{columns:t.columns,"data-source":t.deck,scroll:{x:500,y:500}},scopedSlots:t._u([{key:"content",fn:function(text,e){return n("span",{domProps:{innerHTML:t._s(e.content)}})}},{key:"name",fn:function(text){return n("a",{},[t._v(t._s(text))])}},{key:"action",fn:function(text,e){return n("span",{},[n("a",{on:{click:function(n){return t.showDeleteConfirm(e._id)}}},[t._v("Delete")]),t._v(" "),n("a-divider",{attrs:{type:"vertical"}}),t._v(" "),n("router-link",{attrs:{to:"/posts/"+e._id}},[t._v("View")])],1)}}])})]],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);