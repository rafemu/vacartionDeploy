(this["webpackJsonpprojects-managment-client"]=this["webpackJsonpprojects-managment-client"]||[]).push([[0],{110:function(e,t,a){e.exports={vacationCardView:"style_vacationCardView__Dl30_",Card:"style_Card__MKSny",title:"style_title__1Frgh",flightSection:"style_flightSection__8Z5bl",flightDiv:"style_flightDiv__2NjWU"}},170:function(e,t,a){e.exports={vacationCardView:"style_vacationCardView__3S0py",Card:"style_Card__1pMdH",btnAddVacation:"style_btnAddVacation__3I0J1",welcomeTitle:"style_welcomeTitle__6uhCY"}},371:function(e,t,a){},372:function(e,t,a){},661:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),c=(a(371),a(372),a(23)),o=a(11),l=a.n(o),d=a(24),u=a(75),p=a.n(u),j="http://165.22.80.128",b="http://165.22.80.128/";function h(e){localStorage.setItem("VacationApp",e)}function m(){return localStorage.getItem("VacationApp")}function f(){var e,t=m();if(t)try{e=t.split(".")[1];var a=function(e){if(!e)return null;return 1e3*e.exp||null}(e=JSON.parse(atob(e)));if(!a)return;if(function(e){if(!e)return!1;return Date.now()>e}(a))throw localStorage.removeItem("VacationApp"),window.location.href="/",new Error("token has been expaired");return e}catch(n){if(console.log(n),void 0==e)return void localStorage.removeItem("VacationApp")}}var O="".concat(j,"/auth");function x(e){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(O,"/login"),t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(O,"/register"),t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){var e=f();if(e){var t=e.data.role;if(t)return"Admin"==t}}var _=a(2),C=function(e){return localStorage.getItem("VacationApp")?Object(_.jsx)(c.b,{path:e.path,exact:e.exact,component:e.component}):Object(_.jsx)(c.a,{to:"/login"})},N=function(e){return S()?Object(_.jsx)(c.b,{path:e.path,exact:e.exact,component:e.component}):Object(_.jsx)(c.a,{to:"/login"})},w=a(17),A=a(39),E={REGISTER:{USER_REGISTRATION_PENDING:"USER_REGISTRATION_PENDING",USER_REGISTRATION_SUCCESS:"USER_REGISTRATION_SUCCESS",USER_REGISTRATION_FAILED:"USER_REGISTRATION_FAILED"},LOGIN:{LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAIL:"LOGIN_FAIL"},LOGOUT:{LOGOUT_SUCCESS:"LOGOUT_SUCCESS",LOGOUT_FAILED:"LOGOUT_FAILED"},USERS:{GET_USERS_SUCCESS:"GET_USERS_SUCCESS",GET_USERS_ERROR:"GET_USERS_ERROR"},VACATIONS:{GET_VACATION_PENDING:"GET_VACATION_PENDING",GET_VACATION_SUCCESS:"GET_VACATION_SUCCESS",GET_VACATION_ERROR:"GET_VACATION_ERROR"},ALERT_MESSAGE:{ALERT_SUCCESS:"ALERT_SUCCESS",ALERT_ERROR:"ALERT_ERROR",CLEAR:"CLEAR"}},T=a(44),R=m(),k={vacations:[],currentUser:R?{isLoggedIn:!0,user:R}:{isLoggedIn:!1,user:{}}};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.VACATIONS.GET_VACATION_SUCCESS:return Object(w.a)(Object(w.a)({},e),{},{vacations:Object(T.a)(t.payload)});case E.LOGIN.LOGIN_SUCCESS:return Object(w.a)(Object(w.a)({},e),{},{isLoggedIn:!0,currentUser:t.payload});case E.LOGIN.LOGIN_FAIL:case E.LOGOUT.LOGOUT_SUCCESS:return Object(w.a)(Object(w.a)({},e),{},{isLoggedIn:!1,currentUser:{}});default:return e}},L={type:null,message:""};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ALERT_MESSAGE.ALERT_SUCCESS:return Object(w.a)(Object(w.a)({},e),{},{type:"success",message:t.payload});case E.ALERT_MESSAGE.ALERT_ERROR:return Object(w.a)(Object(w.a)({},e),{},{type:"error",message:t.payload});case E.ALERT_MESSAGE.CLEAR:return{};default:return e}},D=a(104),G=Object(D.b)({mainReducer:I,alertReducer:U}),V=Object(D.c)(G),M="".concat(j,"/vacation");function B(){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(M),{headers:{"x-access-token":localStorage.getItem("VacationApp")}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a.result);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(d.a)(l.a.mark((function e(t){var a,n,r,i,s,c,o,d,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.destination,n=t.description,r=t.startAt,i=t.endAt,s=t.price,c=t.file,(o=new FormData).append("destination",a),o.append("description",n),o.append("startAt",r),o.append("endAt",i),o.append("price",s),o.append("file",c),e.next=10,p.a.post("".concat(M,"/createVacation"),o,{headers:{"x-access-token":localStorage.getItem("VacationApp"),"content-type":"multipart/form-data"}});case 10:return d=e.sent,u=d.data,e.abrupt("return",u.result);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(l.a.mark((function e(t,a){var n,r,i,s,c,o,d,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("edit",a),n=a.destination,r=a.description,i=a.startAt,s=a.endAt,c=a.price,o=a.file,(d=new FormData).append("destination",n),d.append("description",r),d.append("startAt",i),d.append("endAt",s),d.append("price",c),d.append("file",o),e.next=11,p.a.put("".concat(M)+"/"+t,d,{headers:{"x-access-token":localStorage.getItem("VacationApp"),"content-type":"multipart/form-data"}});case 11:return u=e.sent,j=u.data,e.abrupt("return",j.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(M)+"/"+t,{headers:{"x-access-token":localStorage.getItem("VacationApp")}});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(M)+"/follow",{vacationId:t},{headers:{"x-access-token":localStorage.getItem("VacationApp")}});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=V.dispatch;function Z(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:if(a=e.sent,!t){e.next=14;break}if("string"===typeof t){e.next=7;break}return e.abrupt("return");case 7:if(n=a.find((function(e){return e.destination.toLowerCase().includes(t.toLocaleLowerCase())}))){e.next=10;break}return e.abrupt("return");case 10:K({type:E.VACATIONS.GET_VACATION_SUCCESS,payload:Object.values({filterR:n})}),console.log(Object.values({filterR:n})),e.next=15;break;case 14:K({type:E.VACATIONS.GET_VACATION_SUCCESS,payload:a});case 15:console.log(a),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),K({type:E.VACATIONS.GET_VACATION_ERROR,payload:e.t0}),K({type:E.LOGOUT.LOGOUT_SUCCESS});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function $(){return($=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function X(){return(X=Object(d.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t,a);case 3:e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function ee(){return(ee=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var te=a(32),ae=a(31),ne=a(692),re=a(694),ie=a(4),se=a(698),ce=a(699),oe=a(701),le=a(702),de=a(703),ue=a(706),pe=a(715),je=a(695),be=a(76),he=a(169),me=a(221),fe=a.n(me),Oe=a(338),xe=a.n(Oe),ve=a(110),ge=a.n(ve),ye=a(40),Se=a.n(ye),_e=a(336),Ce=a.n(_e),Ne=a(337),we=a.n(Ne),Ae=a(50),Ee=a.n(Ae),Te=a(34),Re=a(94),ke=a.n(Re),Ie=a(691),Le=a(37),Ue=a(711),De=a(309),Ge=a(26),Ve=a(15),Me=a(16),Be=a(90),Ye=a(35),Fe=a(36),Pe=a(689),qe=a(335),We=a.n(qe),He=a(202),ze=a.n(He),Je=function(e){return{hidden:{display:"none"},container:{margin:"auto"},title:{margin:"auto",display:"flex",justifyContent:"center",padding:e.spacing.unit},bigAvatar:{margin:"auto",width:80,height:80,borderColor:e.palette.primary.main,borderStyle:"solid",borderSize:"1px"},avatarThumb:{maxWidth:80,maxHeight:80},primaryBack:{background:e.palette.primary.main},whiteBack:{background:"white"},errorBack:{background:e.palette.error.main}}},Ke=a(331),Ze=a.n(Ke),Qe=function(e){Object(Ye.a)(a,e);var t=Object(Fe.a)(a);function a(e){var n;return Object(Ve.a)(this,a),(n=t.call(this,e)).state={file:void 0,imagePreviewUrl:void 0},n.fileUpload=r.a.createRef(),n.showFileUpload=n.showFileUpload.bind(Object(Be.a)(n)),n.handleImageChange=n.handleImageChange.bind(Object(Be.a)(n)),n}return Object(Me.a)(a,[{key:"showFileUpload",value:function(){this.fileUpload&&this.fileUpload.current.click()}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];n&&(a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n),this.props.setFieldValue(this.props.field.name,n))}},{key:"showPreloadImage",value:function(){var e=this.props,t=e.errorMessage,a=e.classes,n=(this.props.field.name,this.state),r=n.file,i=n.imagePreviewUrl;return t?Object(_.jsx)(Pe.a,{style:{fontSize:36},children:"error_outline"}):r?Object(_.jsx)("img",{className:a.avatarThumb,src:i,alt:"..."}):Object(_.jsx)(We.a,{style:{fontSize:36}})}},{key:"componentDidMount",value:function(){console.log(this.fileUpload.current)}},{key:"render",value:function(){var e=this.props,t=e.errorMessage,a=e.title,n=e.classes,r=this.props.field,i=r.name,s=(r.onBlur,Ze()(n.bigAvatar,this.state.file?[n.whiteBack]:[n.primaryBack],Object(te.a)({},n.errorBack,t)));return Object(_.jsxs)("div",{className:n.container,children:[Object(_.jsx)("input",{className:n.hidden,id:i,name:i,type:"file",onChange:this.handleImageChange,ref:this.fileUpload}),Object(_.jsx)(be.a,{className:n.title,variant:"h5",children:a}),Object(_.jsx)(pe.a,{className:s,onClick:this.showFileUpload,children:this.showPreloadImage()}),t?Object(_.jsx)(be.a,{variant:"caption",color:"error",children:t}):null]})}}]),a}(n.Component),$e=ze()(Je)(Qe),Xe=["image/jpg","image/jpeg","image/gif","image/png"],et=Ge.d().shape({access:Ge.c().nullable(),destination:Ge.f().required("Destination is required").min(3,"Destination Too Short!").max(250,"Destination Too Long!"),description:Ge.f().required("Description is required").min(3,"Description Too Short!"),startAt:Ge.a(),endAt:Ge.a().min(Ge.e("startAt"),"end date can't be before start date"),price:Ge.c().required("price is required"),file:Ge.b().required("A file is required").test("fileSize","File too large",(function(e){return e&&e.size<=163840})).test("fileFormat","Unsupported Format",(function(e){return e&&Xe.includes(e.type)}))});function tt(e){var t,a=e.title,r=e.values,i=e.onSubmit,s=e.onCancel,c=null===(t=r.file)||void 0===t?void 0:t.split("/")[1],o=Object(n.useState)(""),l=Object(ae.a)(o,2),d=l[0],u=l[1],p=Object(n.useState)(""),b=Object(ae.a)(p,2),h=b[0],m=b[1],f=function(){return d>h};return Object(_.jsxs)("div",{children:[Object(_.jsxs)("h3",{className:ke.a.error,children:[a," Vacation"]}),Object(_.jsx)(Te.d,{initialValues:r,onSubmit:i,validationSchema:et,render:function(e){var t=e.isValid,n=e.values,r=e.touched,i=e.errors,o=e.handleBlur,l=e.handleChange,d=e.setFieldValue;return Object(_.jsx)(Te.c,{children:Object(_.jsxs)(Le.a,{utils:De.a,children:[Object(_.jsx)("div",{children:Object(_.jsx)(Te.b,{as:Ie.a,label:"Destination",value:n.destination,fullWidth:!0,required:!0,type:"text",name:"destination",onChange:l,helperText:Object(_.jsx)(Te.a,{component:"div",className:ke.a.error,name:"destination"})})}),Object(_.jsx)("div",{children:Object(_.jsx)(Te.b,{as:Ie.a,helperText:Object(_.jsx)(Te.a,{component:"div",className:ke.a.error,name:"description"}),label:"description",fullWidth:!0,type:"text",name:"description",value:n.description,onChange:l})}),Object(_.jsx)("div",{children:Object(_.jsx)(Te.b,{as:Ue.a,inputVariant:"outlined",margin:"normal",fullWidth:!0,label:"startAt",format:"MM/dd/yyyy",value:n.startAt,onChange:function(e){u(Se()(e).format("YYYY-MM-DD")),d("startAt",Se()(e).format("YYYY-MM-DD"))}})}),Object(_.jsxs)("div",{children:[Object(_.jsx)(Te.b,{as:Ue.a,fullWidth:!0,inputVariant:"outlined",label:"To",format:"MM/dd/yyyy",value:n.endAt,onChange:function(e){m(Se()(e).format("YYYY-MM-DD")),d("endAt",Se()(e).format("YYYY-MM-DD"))},validate:f}),(i.endAt&&r.endAt,Object(_.jsx)("div",{className:ke.a.error,children:i.endAt}))]}),Object(_.jsx)("div",{children:Object(_.jsx)(Te.b,{as:Ie.a,helperText:Object(_.jsx)(Te.a,{component:"div",className:ke.a.error,name:"price"}),label:"price",fullWidth:!0,type:"number",name:"price",value:n.price,onChange:l})}),Object(_.jsx)("div",{children:"Edit"===a&&Object(_.jsx)("img",{width:"100%",alt:"current photo",src:j+"/"+c})}),Object(_.jsx)(Te.b,{name:"file",component:$e,title:"Select a file",setFieldValue:d,errorMessage:i.file?i.file:void 0,touched:r.file,style:{display:"flex"},onBlur:o}),Object(_.jsxs)("div",{className:"swal2-actions",style:{display:"flex",fontSize:"0.9em"},children:[Object(_.jsx)("button",{disabled:!t,type:"submit",className:"swal2-confirm swal2-styled",style:{backgroundColor:"#f44336"},children:"OK"}),Object(_.jsx)("button",{onClick:s,type:"button",className:"swal2-cancel swal2-styled",style:{display:"inline-block"},children:"Cancel"})]})]})})}})]})}var at=a(164),nt=a.n(at),rt=a(704),it=a(705),st=a(700),ct=Object(ne.a)((function(e){return Object(re.a)({root:{maxWidth:345,marginTop:"20px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:he.a[500]},follow:{color:"rbg(0, 0, 0, 0.54)","&:hover":{color:he.a[500]}},isfollowed:{color:he.a[500]},square:{color:e.palette.getContrastText(he.a[500]),backgroundColor:he.a[500],position:"relative",top:"-20px",left:"81%",padding:"2px 10px",borderRadius:"50%"}})})),ot=nt()(Ee.a);function lt(e){var t,a=ct(),i=r.a.useState(!1),s=Object(ae.a)(i,2),c=s[0],o=s[1],l=Object(n.useState)(!1),d=Object(ae.a)(l,2),u=d[0],p=d[1],b=Object(n.useState)(!1),h=Object(ae.a)(b,2),m=h[0],O=h[1],x=f();Object(n.useEffect)((function(){S()&&p(!0)}),[]),Object(n.useEffect)((function(){var t=e.followerUsers.split(",").find((function(e){return Number(e)===x.data.id}));x.data.id===Number(t)?O(!0):O(!1)}),[e]);var v,g=null===(t=e.image)||void 0===t?void 0:t.split("/")[1],y=e.destination.charAt(0).toLocaleUpperCase();return Object(_.jsxs)("div",{className:ge.a.vacationCardView,children:[Object(_.jsxs)(se.a,{className:a.root,children:[Object(_.jsx)(ce.a,{className:ge.a.title,avatar:Object(_.jsx)(pe.a,{"aria-label":"recipe",className:a.avatar,children:y}),action:Object(_.jsxs)("div",{children:[!u&&Object(_.jsx)(je.a,{"aria-label":"settings",onClick:function(){(function(e){return ee.apply(this,arguments)})(e.id)&&e.socket.emit("reload",{})},children:Object(_.jsx)(st.a,{color:"secondary",badgeContent:e.numberOfFollowers,showZero:!0,children:m?Object(_.jsx)(fe.a,{className:a.isfollowed}):Object(_.jsx)(fe.a,{className:a.follow})})}),u&&Object(_.jsxs)("div",{children:[Object(_.jsx)(je.a,{"aria-label":"settings",onClick:function(){Ee.a.fire({title:"Are you sure you want to delete ".concat(e.destination," - Vacation ?"),text:"You won't be able to revert this!",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(function(e){return $.apply(this,arguments)}(Number(e.id))&&(Ee.a.fire("Deleted!","Your file has been deleted.","success"),e.socket.emit("reload",{})))}))},children:Object(_.jsx)(Ce.a,{className:a.follow})}),Object(_.jsx)(je.a,{"aria-label":"settings",onClick:function(){var t;(t={destination:e.destination,description:e.description,startAt:Se()(e.startAt).format("YYYY-MM-DD"),endAt:Se()(e.endAt).format("YYYY-MM-DD"),price:e.price,file:e.image},new Promise((function(e,a){ot.fire({html:Object(_.jsx)(tt,{title:"Edit",values:t,onSubmit:function(t){e(t),Ee.a.close()},onCancel:function(){a(),Ee.a.close()}}),willClose:function(){return a()},showConfirmButton:!1})}))).then((function(t){(function(e,t){return X.apply(this,arguments)})(Number(e.id),t).then((function(t){e.socket.emit("reload",{}),Ee.a.fire("Edited!","Your Vacation has been Edited.","success")}))})).catch((function(e){console.log(e)}))},children:Object(_.jsx)(we.a,{className:a.follow})})]})]}),title:e.destination,subheader:(v=e.createdAt,Se()(v).fromNow())}),Object(_.jsx)(oe.a,{className:a.media,image:j+"/"+g,title:"Paella dish"}),Object(_.jsxs)(pe.a,{variant:"square",className:a.square,children:[e.price,"$"]}),Object(_.jsx)(le.a,{children:Object(_.jsx)(be.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})}),Object(_.jsxs)(de.a,{disableSpacing:!0,children:[Object(_.jsxs)("div",{className:ge.a.flightSection,children:[Object(_.jsxs)("div",{className:ge.a.flightDiv,children:[Object(_.jsx)(rt.a,{}),Object(_.jsx)("br",{}),"(",Se()(e.start).format("YY-MMM-DD"),")"]}),Object(_.jsxs)("div",{className:ge.a.flightDiv,children:[Object(_.jsx)(it.a,{}),Object(_.jsx)("br",{}),"(",Se()(e.endAt).format("YY-MMM-DD"),")"]})]}),Object(_.jsx)(je.a,{className:Object(ie.default)(a.expand,Object(te.a)({},a.expandOpen,c)),onClick:function(){o(!c)},"aria-expanded":c,"aria-label":"show more",children:Object(_.jsx)(xe.a,{})})]}),Object(_.jsx)(ue.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(_.jsx)(le.a,{children:Object(_.jsx)(be.a,{paragraph:!0,children:e.description})})})]})," "]})}var dt,ut=a(170),pt=a.n(ut),jt=a(693),bt=a(707),ht=a(339),mt=a.n(ht),ft=a(165),Ot=nt()(Ee.a),xt=Object(ne.a)((function(e){return Object(re.a)({button:{margin:"5vh auto",color:"white",backgroundColor:"#f44336",width:"30vh"}})}));function vt(){var e=xt(),t=S(),a=Object(A.c)((function(e){return e.mainReducer.vacations}));Object(n.useEffect)((function(){Z()}),[]),Object(n.useEffect)((function(){(dt=Object(ft.io)(b)).on("reloadPage",(function(e){setTimeout((function(){Z()}),500)}))}),[]);return Object(_.jsxs)("div",{children:[t&&Object(_.jsxs)("div",{className:pt.a.btnAddVacation,children:[Object(_.jsx)("h1",{className:pt.a.welcomeTitle,children:"Welcome Admin"}),Object(_.jsx)(jt.a,{variant:"contained",className:e.button,startIcon:Object(_.jsx)(mt.a,{}),onClick:function(){var e;(e={destination:"",description:"",startAt:Se()(new Date).format("YYYY-MM-DD"),endAt:Se()(new Date).format("YYYY-MM-DD"),price:"",file:void 0},new Promise((function(t,a){Ot.fire({html:Object(_.jsx)(tt,{title:"Add new ",values:e,onSubmit:function(e){t(e),Ee.a.close()},onCancel:function(){a(),Ee.a.close()}}),willClose:function(){return a()},showConfirmButton:!1})}))).then((function(e){(function(e){return F.apply(this,arguments)})(e).then((function(e){dt.emit("reload",{}),Ee.a.fire("Added!","Your Vacation has been added.","success")}))})).catch((function(e){console.log(e)}))},children:"Add New Vacation"}),Object(_.jsx)(bt.a,{variant:"middle"})]}),Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:" Vacations "})}),Object(_.jsx)("div",{className:pt.a.vacationCardView,children:a.map((function(e){return Object(_.jsx)(lt,Object(w.a)(Object(w.a)({},e),{},{socket:dt}),e.id)}))})]})}var gt=a(348),yt=a(697),St=a(708),_t=a(83),Ct=a.n(_t),Nt=a(109),wt=a.n(Nt),At=a(166),Et=a.n(At),Tt=V.dispatch;function Rt(e){return kt.apply(this,arguments)}function kt(){return(kt=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:if((a=e.sent).accessToken){e.next=6;break}throw new Error(a.message);case 6:return h(a.accessToken),Tt({type:E.LOGIN.LOGIN_SUCCESS,payload:a}),Tt({type:E.ALERT_MESSAGE.ALERT_SUCCESS,payload:"Login successfully"}),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),Tt({type:E.ALERT_MESSAGE.ALERT_ERROR,payload:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function It(e){return Lt.apply(this,arguments)}function Lt(){return(Lt=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:return a=e.sent,Tt({type:E.REGISTER.USER_REGISTRATION_SUCCESS,payload:a}),Tt({type:E.ALERT_MESSAGE.ALERT_SUCCESS,payload:a.message}),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),Tt({type:E.ALERT_MESSAGE.ALERT_ERROR,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var Ut=a(64),Dt=a(712),Gt=Ge.d().shape({userName:Ge.f().required("User Name is required").min(3,"User Name Too Short!").max(250,"User Name Too Long!"),password:Ge.f().required("password is required")});function Vt(){var e=Object(c.g)(),t={userName:"",password:""},a=Object(n.useState)(t),r=Object(ae.a)(a,2),i=r[0],s=r[1],o=Object(A.c)((function(e){return e.mainReducer.currentUser})),u=Object(A.c)((function(e){return e.alertReducer}));function p(e,t){s(Object(w.a)(Object(w.a)({},i),{},Object(te.a)({},e,t)))}function j(){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.userName&&i.password){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Rt(i);case 4:if(a=t.sent){t.next=7;break}return t.abrupt("return");case 7:n=a.accessToken,"redirect"===a.message&&n&&setTimeout((function(){window.location.reload(),e.push("/home")}),1500);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!0===o.isLoggedIn&&e.push("/home")}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:Ct.a.grow,children:Object(_.jsx)(St.a,{className:Ct.a.appBar,position:"static",children:Object(_.jsx)("div",{className:Ct.a.wrapper,children:Object(_.jsx)("div",{className:Ct.a.header,children:"- Welcom to Vacation App - "})})})}),Object(_.jsx)("div",{className:Ct.a.loginDiv,children:Object(_.jsx)(gt.a,{children:Object(_.jsx)(Te.d,{initialValues:t,onSubmit:j,validationSchema:Gt,render:function(e){var t=e.isValid,a=e.values,n=e.handleBlur,r=e.handleChange,i=e.touched,s=e.errors;return Object(_.jsx)(Te.c,{children:Object(_.jsxs)(se.a,{className:Ct.a.cardDiv,children:[Object(_.jsx)("h2",{children:"Login please"}),Object(_.jsxs)(le.a,{children:[Object(_.jsxs)("div",{className:Ct.a.alert,children:["error"===u.type&&Object(_.jsx)(Dt.a,{severity:"error",children:Object(_.jsx)("strong",{children:u.message})}),"success"===u.type&&Object(_.jsx)(Dt.a,{severity:"success",children:Object(_.jsx)("strong",{children:u.message})})]}),Object(_.jsx)(Ie.a,{id:"userName",name:"userName",label:"user Name",value:a.userName,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.userName?s.userName:"",error:i.userName&&Boolean(s.userName),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(wt.a,{})})}}),Object(_.jsx)(Ie.a,{id:"password",label:"password",type:"password",name:"password",value:a.password,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.password?s.password:"",error:i.password&&Boolean(s.password),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(Et.a,{})})}})]}),Object(_.jsxs)(de.a,{style:{justifyContent:"space-between"},children:[Object(_.jsx)(Ut.b,{to:"/register",children:Object(_.jsx)(jt.a,{variant:"contained",color:"primary",children:"Register"})}),Object(_.jsx)(jt.a,{disabled:!t,onClick:j,variant:"contained",color:"secondary",children:"Login"})]})]})})}})})})]})}var Mt=a(340);function Bt(){var e=Object(A.c)((function(e){return e.mainReducer.vacations})),t=e.map((function(e){return e.destination})),a=e.map((function(e){return e.numberOfFollowers}));console.log(e),Object(n.useEffect)((function(){Z()}),[]),Object(n.useEffect)((function(){Object(ft.io)(b).on("reloadPage",(function(e){console.log("reloadPage"),Z()}))}),[]);var r={labels:t,datasets:[{label:"# of Followers",fill:!1,lineTension:.1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderWidth:1,borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]};return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Vacations v. Followers "}),Object(_.jsx)(Mt.Bar,{data:r,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})})}var Yt=a(33),Ft=a(6),Pt=a(696),qt=a(714),Wt=a(345),Ht=a(341),zt=a.n(Ht),Jt=a(342),Kt=a.n(Jt),Zt=a(344),Qt=a.n(Zt),$t=a(709),Xt=a(710),ea=a(343),ta=a.n(ea),aa=a(352);function na(e){return Object(_.jsx)(aa.a,{placeholder:"Search\u2026",classes:{root:e.classes.inputRoot,input:e.classes.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){t.target.value&&e.onChange(t.target.value)}})}var ra=Object(ne.a)((function(e){var t;return Object(re.a)({appBarS:{backgroundColor:he.a[500]},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(te.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(te.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Yt.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Yt.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(te.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(te.a)({display:"inline"},e.breakpoints.up("md"),{display:"flex"}),welcomeUser:(t={display:"none"},Object(te.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(te.a)(t,"padding",e.spacing(2,0)),t),sectionMobile:Object(te.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),logOut:{display:"inline",margin:"10px 20px"},HomeLink:{color:e.palette.common.white,textDecoration:"none"}})})),ia=Object(Ft.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(_.jsx)(Wt.a,Object(w.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),sa=Object(Ft.a)((function(e){return{root:{"&:focus":{backgroundColor:he.a[500],"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(qt.a);function ca(){var e=Object(c.g)(),t=ra(),a=r.a.useState(null),n=Object(ae.a)(a,2),i=n[0],s=n[1],o=f(),l=S();return Object(_.jsxs)("div",{className:t.grow,children:[Object(_.jsx)(St.a,{className:t.appBarS,position:"static",children:Object(_.jsxs)(Pt.a,{children:[Object(_.jsx)(be.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(_.jsx)(Ut.b,{className:t.HomeLink,to:"/",children:"Vacation Refaat App"})}),Object(_.jsxs)("div",{className:t.search,children:[Object(_.jsx)("div",{className:t.searchIcon,children:Object(_.jsx)(zt.a,{})}),Object(_.jsx)(na,{onChange:function(e){Z(e)},classes:t})]}),Object(_.jsx)("div",{className:t.grow}),Object(_.jsxs)("div",{className:t.sectionDesktop,children:[Object(_.jsxs)(be.a,{className:t.welcomeUser,variant:"h6",noWrap:!0,children:["Welcome : ",o.data.firstName]}),Object(_.jsx)(je.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(_.jsx)(Kt.a,{})})]})]})}),Object(_.jsxs)(ia,{id:"customized-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){s(null)},children:[l&&Object(_.jsxs)(sa,{children:[Object(_.jsx)($t.a,{children:Object(_.jsx)(ta.a,{fontSize:"small"})}),Object(_.jsx)(Ut.b,{to:"/admin",children:Object(_.jsx)(Xt.a,{primary:"Admin Page"})})]}),Object(_.jsxs)(sa,{children:[Object(_.jsx)($t.a,{children:Object(_.jsx)(Qt.a,{fontSize:"small"})}),Object(_.jsx)(Xt.a,{primary:"Log Out",onClick:function(){localStorage.removeItem("VacationApp"),Tt({type:E.LOGOUT.LOGOUT_SUCCESS}),e.push("/")}})]})]})]})}var oa=a(84),la=a.n(oa),da=a(124),ua=a.n(da),pa=Ge.d().shape({userName:Ge.f().required("User Name is required").min(3,"User Name Too Short!").max(250,"User Name Too Long!"),firstName:Ge.f().required("First Name is required").min(2,"First Name Too Short!").max(250,"First Name Too Long!"),lastName:Ge.f().required("Last Name is required").min(2,"Last Name Too Short!").max(250,"Last Name Too Long!"),password:Ge.f().required("password is required")});function ja(){var e={userName:"",firstName:"",lastName:"",password:""},t=Object(A.c)((function(e){return e.alertReducer})),a=Object(n.useState)(e),r=Object(ae.a)(a,2),i=r[0],s=r[1],o=Object(c.g)(),u=Object(A.b)();function p(e,t){s(Object(w.a)(Object(w.a)({},i),{},Object(te.a)({},e,t)))}function j(){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.userName&&i.firstName&&i.lastName&&i.password){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,It(i);case 4:if(t=e.sent){e.next=7;break}return e.abrupt("return");case 7:1==t.complete&&setTimeout((function(){o.push("/login")}),1500);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){u({type:E.ALERT_MESSAGE.CLEAR,payload:""})}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:la.a.grow,children:Object(_.jsx)(St.a,{className:la.a.appBar,position:"static",children:Object(_.jsx)("div",{className:la.a.wrapper,children:Object(_.jsx)("div",{className:la.a.header,children:"- Welcom to Vacation App - "})})})}),Object(_.jsx)("div",{className:la.a.loginDiv,children:Object(_.jsx)(gt.a,{children:Object(_.jsx)(Te.d,{initialValues:e,onSubmit:j,validationSchema:pa,render:function(e){e.isValid;var a=e.values,n=e.handleBlur,r=e.handleChange,i=e.touched,s=e.errors;return Object(_.jsx)(Te.c,{children:Object(_.jsxs)(se.a,{className:la.a.cardDiv,children:[Object(_.jsx)("h2",{children:"Register please"}),Object(_.jsxs)(le.a,{children:[Object(_.jsxs)("div",{className:la.a.alert,children:["error"===t.type&&Object(_.jsx)(Dt.a,{severity:"error",children:Object(_.jsx)("strong",{children:t.message})}),"success"===t.type&&Object(_.jsx)(Dt.a,{severity:"success",children:Object(_.jsx)("strong",{children:t.message})})]}),Object(_.jsx)(ua.a,{id:"userName",name:"userName",label:"User Name",value:a.userName,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.userName?s.userName:"",error:i.userName&&Boolean(s.userName),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(wt.a,{})})}}),Object(_.jsx)(ua.a,{id:"firstName",name:"firstName",label:"First Name",value:a.firstName,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.firstName?s.firstName:"",error:i.firstName&&Boolean(s.firstName),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(wt.a,{})})}}),Object(_.jsx)(ua.a,{id:"lastName",name:"lastName",label:"Last Name",value:a.lastName,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.lastName?s.lastName:"",error:i.lastName&&Boolean(s.lastName),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(wt.a,{})})}}),Object(_.jsx)(ua.a,{id:"password",name:"password",label:"Password",type:"password",value:a.password,onChange:function(e){r(e);var t=e.currentTarget.value;p(null===e||void 0===e?void 0:e.target.name,t)},onBlur:n,helperText:i.password?s.password:"",error:i.password&&Boolean(s.password),margin:"dense",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(_.jsx)(yt.a,{position:"start",children:Object(_.jsx)(Et.a,{})})}})]}),Object(_.jsxs)(de.a,{style:{justifyContent:"space-between"},children:[Object(_.jsx)(jt.a,{onClick:j,variant:"contained",color:"secondary",children:"Register"}),Object(_.jsx)(Ut.b,{to:"/login",children:Object(_.jsx)(jt.a,{variant:"contained",color:"primary",children:"Login"})})]})]})})}})})})]})}var ba=function(){var e=Object(A.c)((function(e){return e.mainReducer.currentUser.isLoggedIn})),t=Object(A.b)();return Object(n.useEffect)((function(){t({type:E.ALERT_MESSAGE.CLEAR,payload:""})}),[]),Object(_.jsx)(Ut.a,{children:Object(_.jsxs)("div",{children:[e&&Object(_.jsx)(ca,{}),Object(_.jsx)("div",{children:Object(_.jsxs)(c.d,{children:[Object(_.jsx)(c.b,{path:"/register",children:Object(_.jsx)("div",{className:"vacationCard",children:Object(_.jsx)(ja,{})})},"register"),Object(_.jsx)(C,{exact:!0,path:"/home",component:vt}),Object(_.jsx)(N,{exact:!0,path:"/admin",component:Bt}),Object(_.jsx)(c.b,{path:"/",children:Object(_.jsx)("div",{className:"vacationCard",children:Object(_.jsx)(Vt,{})})},"login"),Object(_.jsx)(c.a,{from:"*",to:"/"})]})})]})})},ha=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,718)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(A.a,{store:V,children:Object(_.jsx)(ba,{})})}),document.getElementById("root")),ha()},83:function(e,t,a){e.exports={wrapper:"style_wrapper__3_R2k",header:"style_header__2xW9P",grow:"style_grow__1mwvP",appBar:"style_appBar__3q1Lz",loginDiv:"style_loginDiv__4bV5i",cardDiv:"style_cardDiv__7s06y",alert:"style_alert__1ggrA",textField:"style_textField__1tUUu",loginHeader:"style_loginHeader__1FofS",loginCard:"style_loginCard__1lBo6","MuiPaper-root":"style_MuiPaper-root__MCsvN","MuiPaper-rounded":"style_MuiPaper-rounded__30G1o"}},84:function(e,t,a){e.exports={wrapper:"style_wrapper__1j7yt",header:"style_header__3bCd4",grow:"style_grow__lPNn6",appBar:"style_appBar__2eC09",loginDiv:"style_loginDiv__3rrta",cardDiv:"style_cardDiv__3GRQ5",textField:"style_textField__3ToCa",TextField:"style_TextField__2S6TF",loginHeader:"style_loginHeader__1PNo6",loginCard:"style_loginCard__2rPkr","MuiPaper-root":"style_MuiPaper-root__2qpnb","MuiPaper-rounded":"style_MuiPaper-rounded__3_Kv7"}},94:function(e,t,a){e.exports={error:"style_error__1rr4r"}}},[[661,1,2]]]);
//# sourceMappingURL=main.257b4ddb.chunk.js.map