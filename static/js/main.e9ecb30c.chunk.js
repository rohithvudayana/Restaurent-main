(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{137:function(e,t,s){},138:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(16),c=s.n(i),r=(s(62),s(88),s(89),s(90),s(12)),o=s(13),l=s(15),d=s(14),h=s(3),j=s(1);function m(e){var t=e.item;return Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.g,{src:t.image,alt:t.name}),Object(j.jsxs)(h.e,{children:[Object(j.jsx)(h.k,{children:t.name}),t.designation?Object(j.jsx)(h.i,{children:t.designation}):null,Object(j.jsx)(h.j,{children:t.description})]})]})}var b=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row align-items-start",children:[Object(j.jsx)("div",{className:"col-12 col-md m-1",children:Object(j.jsx)(m,{item:e.dish})}),Object(j.jsx)("div",{className:"col-12 col-md m-1",children:Object(j.jsx)(m,{item:e.promotion})}),Object(j.jsx)("div",{className:"col-12 col-md m-1",children:Object(j.jsx)(m,{item:e.leader})})]})})},u=s(5);function O(e){var t=e.dish;e.onClick;return Object(j.jsx)(h.d,{children:Object(j.jsxs)(u.b,{to:"/menu/".concat(t.id),children:[Object(j.jsx)(h.g,{width:"100%",src:t.image,alt:t.name}),Object(j.jsx)(h.h,{children:Object(j.jsx)(h.k,{children:t.name})})]})})}var x=function(e){var t=e.dishes.map((function(e){return Object(j.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(j.jsx)(O,{dish:e})},e.id)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(h.a,{children:[Object(j.jsx)(h.b,{children:Object(j.jsx)(u.b,{to:"/home",children:"Home"})}),Object(j.jsx)(h.b,{active:!0,children:"Menu"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"Menu"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsx)("div",{className:"row",children:t})]})},f=s(21),g=s(10),p=function(e){return e&&e.lenght},v=function(e){return function(t){return!t||t.length<=e}},N=function(e){return function(t){return t&&t.length>=e}},y=function(e){return!isNaN(Number(e))},w=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log("current State is: "+JSON.stringify(e)),alert("current State is: "+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(h.a,{children:[Object(j.jsx)(h.b,{children:Object(j.jsx)(u.b,{to:"/home",children:"Home"})}),Object(j.jsx)(h.b,{active:!0,children:"Contact us"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"Contact us"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h3",{children:"Location Information"})}),Object(j.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(j.jsx)("h5",{children:"Our Address"}),Object(j.jsxs)("address",{children:["121, Clear Water Bay Road",Object(j.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(j.jsx)("br",{}),"HONG KONG",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-envelope"}),": ",Object(j.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(j.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(j.jsx)("h5",{children:"Map of our Location"})}),Object(j.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(j.jsxs)("div",{className:"btn-group",role:"group",children:[Object(j.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(j.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(j.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(j.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(j.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:rohithvudayana46@gmail.com",children:[Object(j.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h3",{children:"Send us your Feedback."})}),Object(j.jsx)("div",{className:"col-12 col-md-9",children:Object(j.jsxs)(g.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.r,{htmlfor:"firstname",md:2,children:"First Name"}),Object(j.jsxs)(h.l,{md:10,children:[Object(j.jsx)(g.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:p,minLenght:N(3),maxLength:v(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"must be greater than 2 characters",maxLength:"must be 15 characters or less"}})]})]}),Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.r,{for:"lastname",md:2,children:"Last Name"}),Object(j.jsxs)(h.l,{md:10,children:[Object(j.jsx)(g.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:p,minLenght:N(3),maxLength:v(15)}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"must be greater than 2 characters",maxLength:"must be 15 characters or less"}})]})]}),Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.r,{for:"telnum",md:2,children:"Contact Tel."}),Object(j.jsxs)(h.l,{md:10,children:[Object(j.jsx)(g.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel.Number",className:"form-control",validators:{required:p,minLenght:N(3),maxLength:v(15),isNumber:y}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"must be greater than 2 numbers",maxLength:"must be 15 numbers or less",isNumber:"must be a number"}})]})]}),Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.r,{for:"email",md:2,children:"Email"}),Object(j.jsxs)(h.l,{md:10,children:[Object(j.jsx)(g.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form.control",validators:{required:p,validEmail:w}}),Object(j.jsx)(g.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid email address"}})]})]}),Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.l,{md:{size:6,offset:2},children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsxs)(h.r,{check:!0,children:[Object(j.jsx)(g.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(j.jsx)("strong",{children:"May we contact you ?"})]})})}),Object(j.jsx)(h.l,{md:{size:3,offset:1},children:Object(j.jsxs)(g.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(j.jsx)("option",{children:"Tel."}),Object(j.jsx)("option",{children:"Email"})]})})]}),Object(j.jsxs)(h.B,{className:"form-group",children:[Object(j.jsx)(h.r,{htmlfor:"message",md:2,children:"Your Feedback"}),Object(j.jsx)(h.l,{md:10,children:Object(j.jsx)(g.Control.textarea,{model:".message",id:"message",name:"message",lastname:!0,rows:"12",className:"form-control"})})]}),Object(j.jsx)(h.B,{className:"form-group",children:Object(j.jsx)(h.l,{md:{size:10,offset:2},children:Object(j.jsx)(h.c,{type:"submit",color:"primary",children:"send Feedback"})})})]})})]})]})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(o.a)(s,[{key:"render",value:function(){if(null!=this.props.dish){var e=this.props.comments.map((function(e){return Object(j.jsx)("div",{class:"container",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:e.comment}),Object(j.jsx)("br",{}),Object(j.jsxs)("h6",{children:["--",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]}),Object(j.jsx)("br",{})]})})}));return Object(j.jsx)("div",{class:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-5 ml-1",children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.g,{width:"100%",src:this.props.dish.image,alt:this.props.dish.name}),Object(j.jsxs)(h.e,{children:[Object(j.jsx)(h.k,{children:this.props.dish.name}),Object(j.jsx)(h.j,{children:this.props.dish.description})]})]})}),Object(j.jsxs)("div",{className:"col-12 col-md-5 ml-3",children:[Object(j.jsx)("h3",{children:"Comments"}),e]})]})})}return Object(j.jsx)("div",{})}}]),s}(a.Component);var I=function(e){var t=function(e){var t=e.leader;return Object(j.jsx)("div",{className:"m-5",children:Object(j.jsxs)(h.s,{tag:"li",children:[Object(j.jsx)(h.s,{left:!0,middle:!0,className:"m-5",children:Object(j.jsx)(h.s,{object:!0,src:t.image,alt:t.name})}),Object(j.jsxs)(h.s,{body:!0,children:[Object(j.jsx)(h.s,{heading:!0,children:t.name}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{children:t.designation})}),Object(j.jsxs)("div",{className:"row",children:[" ",t.description]})]})]})},t.id)},s=e.leaders.map((function(e){return Object(j.jsx)(t,{leader:e})}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)(h.a,{children:[Object(j.jsx)(h.b,{children:Object(j.jsx)(u.b,{to:"/home",children:"Home"})}),Object(j.jsx)(h.b,{active:!0,children:"About Us"})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h3",{children:"About Us"}),Object(j.jsx)("hr",{})]})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsxs)("div",{className:"col-12 col-md-6",children:[Object(j.jsx)("h2",{children:"Our History"}),Object(j.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(j.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(j.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(j.jsx)("div",{className:"col-12 col-md-5",children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(j.jsx)(h.e,{children:Object(j.jsxs)("dl",{className:"row p-1",children:[Object(j.jsx)("dt",{className:"col-6",children:"Started"}),Object(j.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(j.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(j.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(j.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(j.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(j.jsx)("dt",{className:"col-6",children:"Employees"}),Object(j.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)(h.d,{children:Object(j.jsx)(h.e,{className:"bg-faded",children:Object(j.jsxs)("blockquote",{className:"blockquote",children:[Object(j.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(j.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(j.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(j.jsxs)("div",{className:"row row-content",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h2",{children:"Corporate Leadership"})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)(h.s,{list:!0,children:s})})]})]})};var T=function(e){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(j.jsx)("h5",{children:"Links"}),Object(j.jsxs)("ul",{className:"list-unstyled",children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"aboutus",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"menu",children:"Menu"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"contactus",children:"Contact"})})]})]}),Object(j.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(j.jsx)("h5",{children:"Our Address"}),Object(j.jsxs)("address",{children:["121, Clear Water Bay Road",Object(j.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(j.jsx)("br",{}),"HONG KONG",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(j.jsx)("br",{}),Object(j.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(j.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(j.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(j.jsx)("i",{className:"fa fa-google-plus"})}),Object(j.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(j.jsx)("i",{className:"fa fa-facebook"})}),Object(j.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(j.jsx)("i",{className:"fa fa-linkedin"})}),Object(j.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(j.jsx)("i",{className:"fa fa-twitter"})}),Object(j.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(j.jsx)("i",{className:"fa fa-youtube"})}),Object(j.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(j.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},F=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(f.a)(a)),a.toggleModal=a.toggleModal.bind(Object(f.a)(a)),a.handleLogin=a.handleLogin.bind(Object(f.a)(a)),a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.y,{dark:!0,expand:"md",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h.A,{onClick:this.toggleNav}),Object(j.jsx)(h.z,{className:"mr-auto",href:"/",children:Object(j.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorant Con Fusion"})}),Object(j.jsxs)(h.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(j.jsxs)(h.w,{navbar:!0,children:[Object(j.jsx)(h.x,{children:Object(j.jsxs)(u.c,{className:"nav-link",to:"/home",children:[Object(j.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(j.jsx)(h.x,{children:Object(j.jsxs)(u.c,{className:"nav-link",to:"/aboutus",children:[Object(j.jsx)("span",{className:"fa fa-info fa-lg"})," About us"]})}),Object(j.jsx)(h.x,{children:Object(j.jsxs)(u.c,{className:"nav-link",to:"/menu",children:[Object(j.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(j.jsx)(h.x,{children:Object(j.jsxs)(u.c,{className:"nav-link",to:"/contactus",children:[Object(j.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(j.jsx)(h.w,{className:"ml-auto",navbar:!0,children:Object(j.jsx)(h.x,{children:Object(j.jsx)(h.c,{outline:!0,onClick:this.toggleModal,children:Object(j.jsx)("span",{className:"fa fa-sign-in fa-lg",children:"Login"})})})})]})]})}),Object(j.jsx)(h.q,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row row-header",children:Object(j.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(j.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(j.jsx)("p",{children:"We take inspiration from the world's best cuisiness, and creat a unique  fusion experience . Our  lipsmacking creations will tickel your culinary senses!"})]})})})}),Object(j.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(j.jsx)(h.v,{toggle:this.toggleModal,children:"Login"}),Object(j.jsx)(h.u,{children:Object(j.jsxs)(h.n,{onSubmit:this.handleLogin,children:[Object(j.jsxs)(h.o,{children:[Object(j.jsx)(h.r,{htmlFor:"username",children:"Username"}),Object(j.jsx)(h.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(j.jsxs)(h.o,{children:[Object(j.jsx)(h.r,{htmlFor:"password",children:"Password"}),Object(j.jsx)(h.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.username=t}})]}),Object(j.jsx)(h.o,{check:!0,children:Object(j.jsxs)(h.r,{check:!0,children:[Object(j.jsx)(h.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.username=t}}),"Remember me"]})}),Object(j.jsx)(h.c,{type:"submit",value:"submit",className:"bg-primary",children:"Login"})]})})]})]})}}]),s}(a.Component),L=s(18),S=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(F,{}),Object(j.jsxs)(u.f,{children:[Object(j.jsx)(u.e,{path:"/home",component:function(){return Object(j.jsx)(b,{dish:e.props.dishes.filter((function(e){return e.featured}))[0],promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),Object(j.jsx)(u.e,{exact:!0,path:"/main",component:function(){return Object(j.jsx)(x,{dishes:e.props.dishes})}}),Object(j.jsx)(u.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(j.jsx)(C,{dish:e.props.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)}))[0]})}}),Object(j.jsx)(u.e,{exact:!0,path:"/contactus",component:k}),Object(j.jsx)(u.e,{path:"/aboutus",component:function(){return Object(j.jsx)(I,{leaders:e.props.leaders})}}),Object(j.jsx)(u.d,{to:"/home"})]}),Object(j.jsx)(T,{})]})}}]),s}(a.Component),M=Object(u.g)(Object(L.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}))(S)),R=(s(137),s(22)),z={dishes:[{id:0,name:"Uthappizza",image:"https://rohithvudayana.github.io/Restaurent-main/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"https://rohithvudayana.github.io/Restaurent-main/assets/images/uthappizza.pngassets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"https://rohithvudayana.github.io/Restaurent-main/assets/images/uthappizza.pngassets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"https://rohithvudayana.github.io/Restaurent-main/assets/images/uthappizza.pngassets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],comments:[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],promotions:[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],leaders:[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return e},E=Object(R.createStore)(A,z),Z=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)(L.Provider,{store:E,children:Object(j.jsx)(u.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)(M,{})})})})}}]),s}(a.Component),q=Z,P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,139)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),P()},90:function(e,t,s){}},[[138,1,2]]]);
//# sourceMappingURL=main.e9ecb30c.chunk.js.map