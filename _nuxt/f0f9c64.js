(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1252:function(t,e,n){t.exports=n.p+"img/bg-user-default.46ff489.jpg"},1254:function(t,e,n){"use strict";n.r(e);n(65),n(66),n(85),n(36);var l=n(16),r={props:{isvisible:{type:Boolean},url:{type:String,default:"/decks"}},data:function(){return{visible:!1,loading:!1,isDisable:!0,listImg:[]}},watch:{isvisible:function(){this.isvisible?this.visible=!0:this.visible=!1}},methods:{changeText:function(t){""!==t.target.innerHTML||0!==this.listImg.length?(document.querySelector(".content .placeholder").classList.add("hidden"),this.isDisable=!1):(document.querySelector(".content .placeholder").classList.remove("hidden"),this.isDisable=!0)},handleCancel:function(t){this.$emit("handdleCancelModal")},submit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=new FormData,content=document.querySelector(".content__text").innerHTML,n.append("content",content),t.listImg.forEach((function(t){n.append("image",t)})),e.prev=5,e.next=8,t.$axios.$post("https://hutech-alumnni-social.herokuapp.com"+"".concat(t.url),n);case 8:!0===e.sent.success&&(document.querySelector(".content__text").innerHTML="",t.listImg=[],t.$emit("handdleCancelModal"),t.$emit("fetchData")),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},onChange:function(t){var e=this;"done"===t.file.status&&t.fileList.forEach((function(t,n){e.listImg[n]=t.originFileObj})),"removed"===t.file.status&&(this.listImg=this.listImg.filter((function(img){return img.uid!==t.file.originFileObj.uid}))),0!==this.listImg.length||""!==document.querySelector(".content__text").innerHTML?this.isDisable=!1:this.isDisable=!0}}},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{staticClass:"modal-post",attrs:{title:"Đăng bài"},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("template",{slot:"footer"},[n("a-button",{key:"submit",staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.loading,disabled:t.isDisable},on:{click:t.submit}},[t._v("\n      Đăng\n    ")])],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"placeholder"},[t._v("Ae")]),t._v(" "),n("div",{staticClass:"content__text",attrs:{contenteditable:"true"},on:{input:t.changeText}}),t._v(" "),n("a-upload",{staticClass:"img-upload",attrs:{"list-type":"picture-card",accept:".jpg, .jpeg, .png",multiple:!0},on:{change:t.onChange}},[n("div",[n("a-icon",{attrs:{type:"upload"}}),t._v(" "),n("div",{staticClass:"ant-upload-text"},[t._v("Tải ảnh lên")])],1)])],1)],2)}),[],!1,null,null,null);e.default=component.exports},1255:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user__bg"},[e("div",{staticClass:"user__bg-img"},[e("img",{attrs:{src:n(1252),alt:""}})])])}],r={props:{user:{type:Object,default:null},posts:{type:Array,default:null}}},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"user pd-profile"},[l("div",{staticClass:"container"},[l("div",{staticClass:"user__card"},[l("div",{staticClass:"user__card-info"},[l("div",{staticClass:"user__card-avatar"},[void 0!==this.$store.getters.user.avatar?l("img",{attrs:{src:this.$store.getters.user.avatar,alt:""}}):l("img",{attrs:{src:n(676),alt:""}})]),t._v(" "),l("div",{staticClass:"user__card-text"},[l("div",{staticClass:"name"},[t._v(t._s(t.user.fullName))]),t._v(" "),l("div",{staticClass:"school-year"},[t._v(t._s(t.user.role))]),t._v(" "),l("div",{staticClass:"edit-profile"},[l("nuxt-link",{attrs:{to:"/profile/edit"}},[t._v("Chỉnh sửa thông tin"),l("a-icon",{attrs:{type:"edit"}})],1)],1)])]),t._v(" "),l("div",{staticClass:"user__card-connect"},[l("div",{staticClass:"post"},[t._v("Bài viết: "+t._s(t.posts.length))]),t._v(" "),l("div",{staticClass:"follower"},[t._v("\n          "+t._s(void 0!==t.user.followers.length?t.user.followers.length:0)+"\n          người theo dõi\n        ")]),t._v(" "),l("div",{staticClass:"following"},[t._v("\n          Đang theo dõi: "+t._s(t.user.following.length)+"\n        ")])])]),t._v(" "),t._m(0)])])}),l,!1,null,null,null);e.default=component.exports},1341:function(t,e,n){"use strict";n.r(e);n(40),n(36);var l=n(16),r=n(1254),o=n(1255),c={components:{PostModal:r.default,CardUser:o.default},asyncData:function(t){return t.app.$axios.$get("https://hutech-alumnni-social.herokuapp.com/api/auth/user/decks").then((function(data){return{posts:data.decks.reverse()}})).catch((function(t){}))},data:function(){return{modalPost:!1,user:this.$store.getters.user,posts:null,isLoadingDelete:!1,flickityOptions:{initialIndex:0,prevNextButtons:!1,pageDots:!1,wrapAround:!0,autoPlay:4e3,contain:!0}}},methods:{handdleCancelModal:function(){this.modalPost=!1},fectData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://hutech-alumnni-social.herokuapp.com/api/auth/user/decks");case 2:n=e.sent,t.posts=n.decks.reverse();case 4:case"end":return e.stop()}}),e)})))()},showDeleteConfirm:function(t){var e=this;this.$confirm({title:"Bạn có chắc chắn muốn xóa bài viết này?",okText:"Xóa",okType:"danger",cancelText:"Hủy",onOk:function(){e.onDelete(t)}})},onDelete:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$delete("https://hutech-alumnni-social.herokuapp.com"+"/decks/".concat(t));case 2:!0===n.sent.success&&(e.fectData(),e.visibleDelete=!1,e.isLoadingDelete=!1);case 4:case"end":return n.stop()}}),n)})))()}},head:function(){return{title:"".concat(this.user.fullName?this.user.fullName:this.user.name)}}},d=n(20),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main-wrapper profile"},[n("CardUser",{attrs:{user:t.user,posts:t.posts}}),t._v(" "),n("section",{staticClass:"main-profile mr-top pd-profile"},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"nav__options"},[n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/profile"}},[t._v("Bài viết")])],1),t._v(" "),n("li",{staticClass:"nav__options-item"},[n("nuxt-link",{attrs:{to:"/profile/save"}},[t._v("Đã lưu")])],1),t._v(" "),n("li",{staticClass:"nav__options-item",on:{click:function(e){t.modalPost=!0}}},[n("a",[n("a-icon",{attrs:{type:"plus"}})],1),t._v(" "),n("PostModal",{attrs:{isvisible:t.modalPost,url:"/decks"},on:{handdleCancelModal:t.handdleCancelModal,fetchData:t.fectData}})],1)])]),t._v(" "),n("div",{staticClass:"posts"},t._l(t.posts,(function(e){return n("div",{key:e._id,staticClass:"posts__item"},[n("nuxt-link",{staticClass:"posts__item-slide",attrs:{to:"/posts/"+e._id}},[""==e.image||null==e.image||null==e.image?n("div",{staticClass:"description"},[n("span",{domProps:{innerHTML:t._s(e.content)}})]):n("client-only",[n("Flickity",{ref:"flickity",refInFor:!0,staticClass:"slide",attrs:{options:t.flickityOptions}},t._l(e.image,(function(img,t){return n("div",{key:t,staticClass:"slide__img"},[n("img",{attrs:{src:img,alt:""}})])})),0)],1)],1),t._v(" "),n("div",{staticClass:"posts__item-delete",on:{click:function(n){return t.showDeleteConfirm(e._id)}}},[n("a-icon",{staticStyle:{"font-size":"30px",color:"#fff"},attrs:{type:"delete"}})],1)],1)})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardUser:n(1255).default,PostModal:n(1254).default})}}]);