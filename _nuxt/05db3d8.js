(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1341:function(e,t,n){"use strict";n.r(t);n(40);var l={data:function(){return{imageUrl:""}},methods:{handleChange:function(e){console.log(e),"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?this.$message.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&this.$message.error("".concat(e.file.name," file upload failed."))},dummyRequest:function(e){var t=e.onSuccess,n=(e.onError,e.file);this.upload(n).then((function(){t(null,n)})).catch((function(){console.log("error")}))},change:function(e){var img,t,n,l=this;console.log(e.target.files[0]),img=e.target.files[0],t=function(e){l.imageUrl=e},(n=new FileReader).addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(img)}}},o=n(20),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main-wrapper"},[n("div",{staticClass:"container"},[n("a-upload",{attrs:{name:"file",multiple:!0},on:{change:e.handleChange}},[n("a-button",[n("a-icon",{attrs:{type:"upload"}}),e._v(" Click to Upload ")],1)],1),e._v(" "),n("form",{attrs:{method:"POST",action:"",enctype:"multipart/form-data"}},[n("a-upload",{attrs:{"custom-request":e.dummyRequest,name:"file",multiple:!0},on:{change:e.handleChange}},[n("a-button",[n("a-icon",{attrs:{type:"upload"}}),e._v(" Click to Upload ")],1)],1)],1),e._v(" "),n("a-upload-dragger",{attrs:{name:"file",multiple:!0},on:{change:e.handleChange}},[n("a-button",[n("a-icon",{attrs:{type:"upload"}}),e._v(" Click to Upload ")],1)],1),e._v(" "),n("input",{attrs:{type:"file"},on:{change:e.change}}),e._v(" "),e.imageUrl?n("img",{attrs:{src:e.imageUrl,alt:""}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports}}]);