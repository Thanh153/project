(this["webpackJsonpproject-cv"]=this["webpackJsonpproject-cv"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),c=a.n(i),l=a(10),r=a.n(l),s=(a(93),a(94),a(138)),o=a(144),d=a(13),j=a(18),b={header:{name:"Tran Thi Kim Thanh",email:"kimthanh99315@gmail.com",gender:"Male",phone:"036759279",address:"29 Pham Nhu Xuong",city:"Da Nang"},education:{institition:"Dai Hoc Su Pham Da Nan",city:"TP Da Nang",major:"Cong nghe thong tin",graduation:"6/2021",add:"GPA :3"},experience:{company:"CompleteCode",city:"Da Nang",position:"Fresher Frontend",start:"1/10/2019",end:"30/1/2020",descrition:["Co cac kien thuc nen ve lap trinh","Ki nang lam viec nhom","Hoa dong vui ve"],company2:"Trung tam phat trien ",city2:"Da Nang",position2:"Internship React",start2:"15/11/2020",end2:"6/3/2020",descrition2:["Cung team thuc hien task ","Trao doi bang tieng anh"]},skill:["English speaker","Adaptability","Interpersonal Communication","Friend of all"]},u=Object(i.createContext)(),h=function(e){var t=Object(i.useState)(JSON.parse(localStorage.getItem("dataLocal"))||{header:{},experience:{descrition:["",""],descrition2:["",""]},education:{},skill:[]}),a=Object(j.a)(t,2),c=a[0],l=a[1],r=Object(i.useState)(),s=Object(j.a)(r,2),o=s[0],h=s[1],x=Object(i.useState)(!1),p=Object(j.a)(x,2),O=p[0],m=p[1];return Object(i.useEffect)((function(){localStorage.setItem("dataLocal",JSON.stringify(c))}),[c]),Object(n.jsx)(u.Provider,{value:{content:c,control:O,contentFake:o,setContent:l,updateHeaderData:function(e){l(Object(d.a)(Object(d.a)({},c),{},{header:e}))},updateExperienceData:function(e){l(Object(d.a)(Object(d.a)({},c),{},{experience:e}))},updateEducationData:function(e){l(Object(d.a)(Object(d.a)({},c),{},{education:e}))},updateSkillData:function(e){l(Object(d.a)(Object(d.a)({},c),{},{skill:Object.values(e)}))},addFakeData:function(){m(!0),h(b)},removeData:function(){m(!1),h({header:{},experience:{descrition:["","",""],descrition2:["",""]},education:{},skill:[]})}},children:e.children})},x=a(16),p=a(12),O=a(143),m=a(33),f=a(32),g=a.n(f),v=(a(53),{marginTop:12,marginLeft:8,marginRight:8}),y=Object(s.a)((function(e){return{button:{margin:e.spacing(1)}}}));var N=function(){var e=Object(i.useContext)(u),t=e.content,a=e.updateEducationData,c=e.removeData,l=e.setContent,r=y(),s=Object(i.useState)("add"),b=Object(j.a)(s,2),h=b[0],p=b[1],f=Object(m.a)(),N=f.register,C=f.handleSubmit,k=f.onBlur;return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsx)("h2",{children:"Education"}),Object(n.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",onSubmit:C((function(e){a(e),p("update"),c()})),children:[Object(n.jsx)(O.a,{id:"outlined-basic",label:"Institution",name:"institition",variant:"outlined",inputRef:N,style:v,defaultValue:t.education.institition}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"City/State/Country",name:"city",variant:"outlined",onBlur:k,inputRef:N,style:v,defaultValue:t.education.city}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Major",name:"major",variant:"outlined",inputRef:N,style:v,defaultValue:t.education.major}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Gradution Year",name:"gradution",variant:"outlined",inputRef:N,style:v,defaultValue:t.education.gradution}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Additional Info",name:"add",variant:"outlined",inputRef:N,style:v,defaultValue:t.education.add}),Object(n.jsx)(o.a,{type:"submit",variant:"contained",color:"secondary",disableElevation:!0,style:v,children:h}),Object(n.jsx)(o.a,{variant:"contained",style:v,to:"/project/basic/experience",component:x.b,children:"Next"}),Object(n.jsx)(o.a,{variant:"contained",color:"secondary",className:r.button,startIcon:Object(n.jsx)(g.a,{}),onClick:function(e){e.preventDefault(),l(Object(d.a)(Object(d.a)({},t),{},{education:{}})),window.location.reload()},style:v,children:"Delete"})]})]})},C={marginTop:12,marginLeft:8,marginRight:8},k=Object(s.a)((function(e){return{button:{margin:e.spacing(1)}}}));var R=function(){var e=Object(i.useContext)(u),t=e.content,a=e.updateSkillData,c=e.removeData,l=e.setContent,r=k(),s=Object(i.useState)("Add"),b=Object(j.a)(s,2),h=b[0],x=b[1],p=Object(m.a)(),f=p.register,v=p.handleSubmit;return Object(n.jsxs)("div",{className:"skill",children:[Object(n.jsx)("h2",{children:"Additional Skills"}),Object(n.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",onSubmit:v((function(e){console.log(e),c(),a(e),x("Update")})),children:[Object(n.jsx)(O.a,{id:"outlined-basic",label:"",name:"skill1",defaultValue:t.skill[0],variant:"outlined",inputRef:f,style:C}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"",name:"skill2",variant:"outlined",inputRef:f,style:C,defaultValue:t.skill[1]}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"",name:"skill3",variant:"outlined",inputRef:f,style:C,defaultValue:t.skill[2]}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"",name:"skill4",variant:"outlined",inputRef:f,style:C,defaultValue:t.skill[3]}),Object(n.jsx)(o.a,{type:"submit",variant:"contained",color:"secondary",disableElevation:!0,style:C,children:h}),Object(n.jsx)(o.a,{variant:"contained",color:"secondary",className:r.button,startIcon:Object(n.jsx)(g.a,{}),onClick:function(e){e.preventDefault(),l(Object(d.a)(Object(d.a)({},t),{},{skill:Object.values({})})),window.location.reload()},style:C,children:"Delete"})]})]})},D={marginTop:12,marginLeft:8,marginRight:8},S=Object(s.a)((function(e){return{button:{margin:e.spacing(1)}}}));var V=function(){var e=Object(i.useContext)(u),t=e.content,a=e.updateExperienceData,c=e.removeData,l=e.setContent,r=S(),s=Object(i.useState)("Add"),b=Object(j.a)(s,2),h=b[0],p=b[1],f=Object(m.a)(),v=f.register,y=f.handleSubmit;return Object(n.jsxs)("div",{className:"experience",children:[Object(n.jsx)("h2",{children:"Professional Experience"}),Object(n.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",onSubmit:y((function(e){console.log(e),a(e),c(),p("Update")})),children:[Object(n.jsx)("h4",{children:"Company 1"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Company",name:"company",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.company}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"City/State/Country",name:"city",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.city}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Position",name:"position",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.position}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Start MM/YYYY",name:"start",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.start}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"End MM/YYYY",name:"end",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.end}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Descrition",name:"descrition[0]",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.descrition[0]}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Descrition",name:"descrition[1]",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.descrition[1]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h4",{children:"Company 2"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Company",name:"company2",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.company2}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"City/State/Country",name:"city2",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.city2}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Position",name:"position2",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.position2}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Start MM/YYYY",name:"start2",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.start2}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"End MM/YYYY",name:"end2",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.end2}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Descrition",name:"descrition2[0]",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.descrition2[0]}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Descrition",name:"descrition2[1]",variant:"outlined",style:D,inputRef:v,defaultValue:t.experience.descrition2[1]}),Object(n.jsx)(o.a,{type:"submit",variant:"contained",color:"secondary",disableElevation:!0,style:D,children:h}),Object(n.jsx)(o.a,{variant:"contained",style:D,to:"/project/basic/addittional",component:x.b,children:"Next"}),Object(n.jsx)(o.a,{variant:"contained",color:"secondary",className:r.button,startIcon:Object(n.jsx)(g.a,{}),onClick:function(e){e.preventDefault(),l(Object(d.a)(Object(d.a)({},t),{},{experience:{}})),window.location.reload()},style:D,children:"Delete"})]})]})},E={marginTop:12,marginBottom:8},F=Object(s.a)((function(e){return{button:{margin:e.spacing(1)}}}));var w=function(){var e=Object(i.useContext)(u),t=e.content,a=e.updateHeaderData,c=e.removeData,l=e.setContent,r=Object(m.a)(),s=r.register,j=r.handleSubmit,b=r.errors,h=r.onBlur,p=F(),f=function(e){c(),a(e)};return Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h2",{children:"Header"}),Object(n.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(O.a,{id:"outlined-basic",label:"Full Name",name:"name",variant:"outlined",onBlur:h,defaultValue:t.header.name,inputRef:s({required:!0,maxLength:100}),style:E,onChange:j(f)}),Object(n.jsxs)("select",{class:"browser-default",name:"gender",onChange:j(f),style:E,ref:s,children:[Object(n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Choose your option"}),Object(n.jsx)("option",{value:"Male",children:"Male"}),Object(n.jsx)("option",{value:"Female",children:"Female"}),Object(n.jsx)("option",{value:"Other",children:"Other"})]}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Email",name:"email",placeholder:"bluebill1049@gamil.com",variant:"outlined",defaultValue:t.header.email,inputRef:s({required:!0,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}),style:E,onChange:j(f)}),b.email&&"required"===b.email.type&&Object(n.jsx)("p",{children:"This is required"}),b.email&&"pattern"===b.email.type&&Object(n.jsx)("p",{children:"Email is not valid, please re-enter your email"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Phone",name:"phone",variant:"outlined",defaultValue:t.header.phone,inputRef:s({required:!0,pattern:/^\d{10,11}$/}),style:E,onChange:j(f)}),b.phone&&"required"===b.phone.type&&Object(n.jsx)("p",{children:"This is required"}),b.phone&&"pattern"===b.phone.type&&Object(n.jsx)("p",{children:"Phone number must be 10 - 11 digits long"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Address",name:"address",variant:"outlined",defaultValue:t.header.address,inputRef:s({required:!0}),style:E,onChange:j(f)}),b.address&&"required"===b.address.type&&Object(n.jsx)("p",{children:"This is a required"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"City",variant:"outlined",name:"city",defaultValue:t.header.city,inputRef:s({required:!0}),style:E,onChange:j(f)}),b.city&&"required"===b.city.type&&Object(n.jsx)("p",{children:"This is a required"}),Object(n.jsx)(O.a,{id:"outlined-basic",label:"Images",name:"img",defaultValue:t.header.img,inputRef:s,style:E,onChange:j(f)}),Object(n.jsx)(o.a,{variant:"contained",style:E,to:"/project/basic/education",component:x.b,children:"Next"}),Object(n.jsx)(o.a,{variant:"contained",color:"secondary",className:p.button,startIcon:Object(n.jsx)(g.a,{}),onClick:function(e){e.preventDefault(),l(Object(d.a)(Object(d.a)({},t),{},{header:{}})),window.location.reload()},style:E,children:"Delete"})]})]})},T=a.p+"static/media/logoCV.c5a0e1b1.jpg",A=Object(s.a)({rootAdd:{background:"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px #F2F3F4",color:"white",height:30,textAlign:"center",fontSize:10,marginTop:15,marginRight:20,fontWeight:700},rootRemove:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:30,textAlign:"center",minWidth:130,fontSize:10,marginTop:15,marginRight:20,fontWeight:700},headerLink:{color:"#0298B8 "}});var L=function(){var e,t=Object(i.useContext)(u),a=t.control,c=t.addFakeData,l=t.removeData,r=A();return e=a?Object(n.jsx)(o.a,{color:"secondary",onClick:function(e){e.preventDefault(),l()},className:r.rootRemove,children:"Remove Example"}):Object(n.jsx)(o.a,{color:"primary",onClick:function(e){e.preventDefault(),c()},className:r.rootAdd,children:"Example"}),Object(n.jsx)("div",{className:"basic",children:Object(n.jsxs)("div",{className:"left",children:[Object(n.jsxs)("div",{className:"headerTop",children:[Object(n.jsx)("div",{styles:{flexGrow:2},children:Object(n.jsx)(x.b,{to:"/project",style:{textAlign:"left"},children:Object(n.jsx)("img",{src:T,alt:"logo",className:"img2"})})}),Object(n.jsx)("div",{styles:{flexGrow:1},children:e})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsxs)("div",{className:"topLeft",children:[Object(n.jsx)(o.a,{className:"headerLeft",component:x.b,to:"/project/basic/header",children:"Header"}),Object(n.jsx)(o.a,{className:"headerLeft",component:x.b,to:"/project/basic/education",children:"Education"}),Object(n.jsx)(o.a,{className:"headerLeft",component:x.b,to:"/project/basic/experience",children:"Experience"}),Object(n.jsx)(o.a,{className:"headerLeft",component:x.b,to:"/project/basic/addittional",children:"Skills"})]}),Object(n.jsx)("hr",{className:"hr"}),Object(n.jsx)("div",{className:"formsSection",children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/project/basic/header",children:Object(n.jsx)(w,{})}),Object(n.jsx)(p.a,{path:"/project/basic/experience",children:Object(n.jsx)(V,{})}),Object(n.jsx)(p.a,{path:"/project/basic/education",children:Object(n.jsx)(N,{})}),Object(n.jsx)(p.a,{path:"/project/basic/addittional",children:Object(n.jsx)(R,{})})]})})]})]})})},Y=a(148),P=a(146),q=a(147);var I=function(){var e,t,a=Object(i.useContext)(u),c=a.control,l=a.content,r=a.contentFake;return e=c?r:l,console.log(e.education),t=Object.keys(e.education).length<3?"":Object(n.jsx)("h3",{children:"Education"}),Object(n.jsx)("div",{className:"rightExperence",children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsxs)("h6",{children:[" ",t]}),Object(n.jsx)("p",{children:e.education.institition}),Object(n.jsx)("p",{children:e.education.city}),Object(n.jsx)("p",{children:e.education.major}),Object(n.jsx)("p",{children:e.education.gradution}),Object(n.jsx)("p",{children:e.education.add})]})})};a(62);var M=function(){var e,t,a=Object(i.useContext)(u),c=a.control,l=a.content,r=a.contentFake;e=c?r:l,console.log(e.experience),t=Object.keys(e.experience).length<3?"":Object(n.jsx)("h3",{children:"Professional Experience"});var s=e.experience.descrition.map((function(e,t){return""===e?"":Object(n.jsx)("li",{children:e},t)}));console.log(s);var o=e.experience.descrition2.map((function(e,t){return""===e?"":Object(n.jsx)("li",{children:e},t)}));return console.log(o),Object(n.jsx)("div",{className:"rightExperence",children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsxs)("h6",{children:[" ",t]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:e.experience.company})," ","",Object(n.jsx)("p",{children:e.experience.city})]}),Object(n.jsxs)("p",{children:[e.experience.position," ",e.experience.start," ","",e.experience.end]}),Object(n.jsx)("ul",{children:s}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:e.experience.company2})," ","",Object(n.jsx)("p",{children:e.experience.city2})]}),Object(n.jsxs)("p",{children:[e.experience.position2," ",e.experience.start2," ","",e.experience.end2]}),Object(n.jsx)("ul",{children:o})]})})};var B=function(){var e,t=Object(i.useContext)(u),a=t.control,c=t.content,l=t.contentFake;return e=a?l:c,console.log(e.header),Object.keys(e.header).length>0?Object(n.jsx)("hr",{className:"dividerRight"}):"",Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"headerR",children:Object(n.jsxs)("div",{className:"contentHeader",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)("img",{src:e.header.img,className:"imgavt"})}),Object(n.jsxs)("div",{className:"col s8",children:[Object(n.jsx)("h4",{className:"h1Name",children:e.header.name}),Object(n.jsxs)("p",{children:[e.header.gender," ",Object(n.jsx)("br",{}),e.header.email," ",Object(n.jsx)("br",{}),e.header.phone," ",Object(n.jsx)("br",{}),e.header.address," ",Object(n.jsx)("br",{}),e.header.city," ",Object(n.jsx)("br",{})]})]})]}),Object(n.jsx)("hr",{className:"hrrr"})]})})})};var H=function(){var e,t,a=Object(i.useContext)(u),c=a.control,l=a.content,r=a.contentFake;e=c?r:l,console.log(e.skill),t=0===e.skill.length?"":Object(n.jsx)("h3",{children:"Additional Skills"});var s=e.skill.map((function(e,t){return""===e?"":Object(n.jsx)("li",{children:e},t)}));return console.log(s),Object(n.jsxs)("div",{className:"rightExperence",children:[Object(n.jsxs)("h6",{children:[" ",t]}),Object(n.jsx)("ul",{children:s})]})};var z=function(){return Object(n.jsx)("div",{className:"paper",children:Object(n.jsxs)("div",{style:{size:"A4"},children:[Object(n.jsx)(B,{}),Object(n.jsx)(I,{}),Object(n.jsx)(M,{}),Object(n.jsx)(H,{})]})})},G=a(65),J=a.n(G),W=a(73),K=a.n(W),U=a(75),$=a.n(U),X=a(76),Q=a.n(X),Z=a(71),_=a.n(Z),ee=function(e){var t=c.a.createRef();return Object(n.jsxs)("section",{className:"pdf-container",children:[Object(n.jsx)("section",{className:"pdf-toolbar",children:Object(n.jsx)(P.a,{style:{backgroundColor:"rgb(157 0 255 / 88%)"},children:Object(n.jsx)(_.a,{onClick:function(){return e.createPdf(t.current)}})})}),Object(n.jsx)("section",{className:"pdf-body",ref:t,children:e.children})]})},te=a(77),ae=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},pink:{color:e.palette.getContrastText(J.a[500]),backgroundColor:J.a[500]},green:{color:"#fff",backgroundColor:K.a[500]}}}));var ne=function(){var e=Object(i.useContext)(u).setContent,t=ae();return Object(n.jsx)("div",{className:"right",children:Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(q.a,{href:"#",onClick:function(t){t.preventDefault(),localStorage.clear(),e({header:{},experience:{descrition:["","",""],descrition2:["",""]},education:{},skill:[]})},children:Object(n.jsx)(Y.a,{title:"Delete All Data",placement:"left-start",children:Object(n.jsx)(P.a,{className:t.pink,children:Object(n.jsx)($.a,{})})})}),Object(n.jsx)(q.a,{href:"/project",children:Object(n.jsx)(Y.a,{title:"view",placement:"right-start",children:Object(n.jsx)(P.a,{className:t.green,children:Object(n.jsx)(Q.a,{})})})}),Object(n.jsx)(ee,{createPdf:function(e){Object(te.a)(e,{paperSize:"A4",fileName:"form.pdf",margin:"0 auto"})},children:Object(n.jsx)(z,{})})]})})},ie=a.p+"static/media/logoClick.88b3d0a6.jpg";a(102),a(103);function ce(){var e=Object(s.a)({headerLink:{color:"#FF8E53 ",minWidth:100,marginLeft:30}})();return Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("div",{className:"headerLeft",children:Object(n.jsx)(x.b,{to:"/project",style:{textAlign:"left"},children:Object(n.jsx)("img",{src:T,alt:"logo",className:"img2"})})}),Object(n.jsxs)("div",{className:"cards",children:[Object(n.jsx)("img",{src:ie,alt:"logo",className:"imgThumb"}),Object(n.jsx)(o.a,{className:e.headerLink,component:x.b,to:"/project/basic/header",children:"Click v\xe0o \u0111\xe2y"})]})]})}var le=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(h,{children:[Object(n.jsx)(x.a,{children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/project",component:ce,exact:!0}),Object(n.jsx)(p.a,{path:"/project/basic",component:L})]})}),Object(n.jsx)(ne,{})]})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),c(e),l(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(le,{})}),document.getElementById("root")),re()},53:function(e,t,a){},62:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.36a9422e.chunk.js.map