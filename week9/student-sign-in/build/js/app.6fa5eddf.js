(function(e){function t(t){for(var s,i,o=t[0],d=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},a=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/build/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5054:function(e,t,n){"use strict";var s=n("7cf1"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NewStudentFrom",{on:{"add-student":e.addStudent}}),n("StudentTable",{attrs:{students:e.students},on:{checked:e.checked,"delete-student":e.deleteStudent}}),n("StudentMessage",{attrs:{"see-message":e.seeMessage,message:e.message,"most-recent-sign-in":e.mostRecentSignIn}})],1)},a=[],i=(n("4de4"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},e._l(e.errors,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudentName,expression:"newStudentName"},{name:"model",rawName:"v-model.trim",value:e.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.newStudentName,value:e.newStudentName},on:{input:[function(t){t.target.composing||(e.newStudentName=t.target.value.trim())},function(t){t.target.composing||(e.newStudentName=t.target.value)}],blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[e._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStarID,expression:"newStarID"},{name:"model",rawName:"v-model.trim",value:e.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:e.newStarID,value:e.newStarID},on:{input:[function(t){t.target.composing||(e.newStarID=t.target.value.trim())},function(t){t.target.composing||(e.newStarID=t.target.value)}],blur:function(t){return e.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.addStudent(t)}}},[e._v("Add")])])])}),o=[],d={name:"NewStudentFrom",data:function(){return{errors:[],newStudentName:"",newStarID:""}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Name is required"),this.newStarID||this.errors.push("startId is required"),0===this.errors.length){var e={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("add-student",e),this.newStudentName="",this.newStarID=""}}}},u=d,c=n("2877"),l=Object(c["a"])(u,i,o,!1,null,"469f1653",null),f=l.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.seeMessage?n("div",{staticClass:"alert alert-success"},[e._v(e._s(e.message)+" "+e._s(e.mostRecentSignIn))]):e._e()])},p=[],h={name:"StudentMessage",props:{seeMessage:Boolean,message:String,mostRecentSignIn:String}},v=h,g=(n("e517"),Object(c["a"])(v,m,p,!1,null,null,null)),b=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(e.editTable)?e._i(e.editTable,null)>-1:e.editTable},on:{change:function(t){var n=e.editTable,s=t.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);s.checked?i<0&&(e.editTable=n.concat([a])):i>-1&&(e.editTable=n.slice(0,i).concat(n.slice(i+1)))}else e.editTable=r}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[e._v("Edit Table")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("StarID")]),n("th",[e._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:e.editTable,expression:"editTable"}]},[e._v("Delete?")])]),e._l(e.students,(function(t){return n("StudentRow",{key:t.starID,attrs:{student:t,edit:e.editTable},on:{checked:e.checked,"delete-student":e.deleted}})}))],2)])])},S=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{class:"present-"+e.student.present},[s("td",[e._v(e._s(e.student.name))]),s("td",[e._v(e._s(e.student.starID))]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.student.present,expression:"student.present"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.student.present)?e._i(e.student.present,null)>-1:e.student.present},on:{change:[function(t){var n=e.student.present,s=t.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);s.checked?i<0&&e.$set(e.student,"present",n.concat([a])):i>-1&&e.$set(e.student,"present",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.student,"present",r)},function(t){return e.checked(e.student)}]}})]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[s("img",{staticClass:"delete-icon",attrs:{src:n("ed3a"),height:"16px",width:"16px"},on:{click:function(t){return e.deleteStudent(e.student)}}})])])},A=[],k={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{checked:function(e){this.$emit("checked",e)},deleteStudent:function(e){confirm("Delete ".concat(e.name))&&this.$emit("delete-student",e)}}},y=k,D=(n("5054"),Object(c["a"])(y,C,A,!1,null,null,null)),B=D.exports,N={name:"StudentTable",data:function(){return{editTable:!1}},methods:{checked:function(e){this.$emit("checked",e)},deleted:function(e){this.$emit("delete-student",e)}},props:{students:Array},components:{StudentRow:B}},I=N,x=(n("b1d5"),Object(c["a"])(I,w,S,!1,null,null,null)),O=x.exports,P={name:"App",components:{NewStudentFrom:f,StudentMessage:b,StudentTable:O},data:function(){return{mostRecentSignIn:"",message:"",seeMessage:!1,students:[{name:"Student A",starID:"aa1234aa",present:!1}],errors:[],newStudentName:"",newStarID:""}},methods:{addStudent:function(e){this.students.push(e),this.students.sort((function(e,t){var n=e.name.toLowerCase(),s=t.name.toLowerCase();return n<s?-1:n>s?1:0}))},deleteStudent:function(e){this.students=this.students.filter((function(t){return t.starID!==e.starID}))},checked:function(e){this.message=e.present?"Hello":"Goodbye",this.mostRecentSignIn=e.name,this.showMessage()},showMessage:function(){var e=this;this.seeMessage=!0,setTimeout((function(){e.seeMessage=!1}),3e3)}}},V=P,j=Object(c["a"])(V,r,a,!1,null,null,null),E=j.exports,T=n("5f5b");n("f9e3"),n("2dd8");s["default"].use(T["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(E)}}).$mount("#app")},"70c1":function(e,t,n){},"7cf1":function(e,t,n){},b1d5:function(e,t,n){"use strict";var s=n("c2b6"),r=n.n(s);r.a},c2b6:function(e,t,n){},e517:function(e,t,n){"use strict";var s=n("70c1"),r=n.n(s);r.a},ed3a:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.6fa5eddf.js.map