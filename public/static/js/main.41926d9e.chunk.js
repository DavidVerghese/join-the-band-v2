(this.webpackJsonpjointheband=this.webpackJsonpjointheband||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n(25),r=n.n(a),i=(n(69),n(6)),o=(n(70),n(14)),l=n.p+"static/media/vinyl.c87b90b3.png",j=n.p+"static/media/turntable_arm.1d446cf2.png",u=n.p+"static/media/turntable.e486b318.png",b=n(15),d=n(18),h=n(48);var O=function(e){return e.user,Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("h2",{children:"Join The Band"}),Object(s.jsx)("em",{children:"find musicians in your area"}),Object(s.jsx)(h.a,{style:{display:"block"},children:Object(s.jsx)(d.b,{to:"/profiles",children:Object(s.jsx)(b.a,{style:{margin:"10px"},children:"See profiles"})})}),Object(s.jsxs)("div",{id:"turntable-container",children:[Object(s.jsx)("img",{id:"turntable-arm",src:j}),Object(s.jsx)("img",{id:"turntable",src:u}),Object(s.jsx)("img",{id:"spin",src:l})]})]})},m=n(19),x=n(12),p=n(22),f=n(8),g=n(59),v=n(60);var y=function(e){var t=e.user,n=e.users,a=e.genres,r=e.instruments,o=e.locations,l=Object(c.useState)(!1),j=Object(i.a)(l,2),u=(j[0],j[1],Object(c.useState)([])),d=Object(i.a)(u,2),O=d[0],y=d[1];Object(c.useEffect)((function(){y(n)}),[n]);var S=[{name:"All genres"}].concat(Object(m.a)(a)),w=[{name:"All instruments"}].concat(Object(m.a)(r)),_=[{name:"All locations"}].concat(Object(m.a)(o)),C=Object(c.useState)(""),k=Object(i.a)(C,2),L=k[0],T=k[1],N=Object(c.useState)("all users"),U=Object(i.a)(N,2),E=U[0],G=U[1];return Object(s.jsxs)("div",{className:"profiles-parent",children:[Object(s.jsx)("h2",{children:"Users:"}),Object(s.jsxs)(h.a,{style:{width:"100%",display:"flex",justifyContent:"space-between"},className:"mb-2",children:[Object(s.jsxs)(g.a,{style:{maxWidth:"50%",marginLeft:"50px"},className:"mb-3",children:[Object(s.jsx)(f.a.Control,{placeholder:"search for users by name",value:L,onChange:function(e){T(e.target.value)},"aria-label":"search for users","aria-describedby":"basic-addon2"}),Object(s.jsx)(b.a,{onClick:function(){var e=n.filter((function(e){return e.name.includes(L)}));0==e.length?alert('there are no users named "'.concat(L,'" or whose name contains "').concat(L,'"')):(y(e),G('users named "'.concat(L,'" or whose name contains "').concat(L,'"')))},variant:"outline-secondary",id:"button-addon2",children:"Submit"})]}),Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){y(n),G("all users")},style:{maxWidth:"20%",marginRight:"50px",padding:"5px"},children:"See all users"})]}),Object(s.jsxs)(h.a,{style:{width:"100%",display:"flex",justifyContent:"space-around"},className:"mb-2",children:[Object(s.jsx)("div",{children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(p.a.Toggle,{children:"Filter by Instrument"}),Object(s.jsx)(p.a.Menu,{children:w.map((function(e){return Object(s.jsx)(p.a.Item,{onClick:function(){return y(function(e){var t=n.filter((function(t){return t.instrument_name===e}));return"All instruments"===e?(G("all users"),n):0==t.length?(alert('no users found with the instrument "'.concat(e,'"')),G("all users"),n):(G('users whose instrument is "'.concat(e,'"')),t)}(e.name))},children:e.name})}))})]})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(p.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Filter by Genre"}),Object(s.jsx)(p.a.Menu,{children:S.map((function(e){return Object(s.jsx)(p.a.Item,{onClick:function(){return y(function(e){var t=n.filter((function(t){return t.genre_name===e}));return"All genres"===e?(G("all users"),n):0==t.length?(alert('no users found with the genre "'.concat(e,'"')),G("all users"),n):(G('users whose genre is "'.concat(e,'"')),t)}(e.name))},children:e.name})}))})]}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(p.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Filter by Location"}),Object(s.jsx)(p.a.Menu,{children:_.map((function(e){return Object(s.jsx)(p.a.Item,{onClick:function(){return y(function(e){var t=n.filter((function(t){return t.location_name===e}));return"All locations"===e?(G("all users"),n):0==t.length?(alert('no users found with location "'.concat(e,'"')),G("all users"),n):(G('users whose location is "'.concat(e,'"')),t)}(e.name))},children:e.name})}))})]})]}),Object(s.jsxs)("p",{children:["Currently displaying ",E]}),Object(s.jsx)("div",{className:"profiles",children:O&&O.length>0?O.map((function(e,n){return Object(s.jsx)(x.a,{style:{width:"18rem",backgroundColor:"black",boxShadow:"1px 1px 1px 1px white",margin:"10px",textAlign:"center"},children:Object(s.jsxs)(x.a.Body,{children:[e.match?Object(s.jsx)(x.a.Header,{style:{backgroundColor:"darkred"},as:"h5",children:"Match: this user's instrument is '".concat(t.looking_for.name,"'")}):null,Object(s.jsxs)(x.a.Header,{children:[Object(s.jsx)(x.a.Title,{children:e.name}),Object(s.jsx)(x.a.Subtitle,{className:"mb-2 text-muted",children:e.instrument_name})]}),Object(s.jsx)(x.a.Text,{}),Object(s.jsx)(x.a.Img,{style:{width:"5rem"},variant:"top",src:e.picture_url}),Object(s.jsxs)(x.a.Text,{children:["email: ",e.email_address]}),Object(s.jsxs)(x.a.Text,{children:["genre: ",e.genre_name]}),Object(s.jsx)(x.a.Text,{children:Object(s.jsxs)("p",{children:["joined: ",(c=e.created_at,Date(c).split(" ").slice(0,3).join(" "))]})}),Object(s.jsx)(x.a.Text,{children:Object(s.jsxs)("p",{children:["location: ",e.location_name]})}),Object(s.jsx)(x.a.Text,{children:Object(s.jsxs)("p",{children:["instrument: ",e.instrument_name]})}),Object(s.jsx)(x.a.Text,{children:Object(s.jsxs)("p",{children:["looking for: ",e.looking_for?e.looking_for.name:null]})})]})});var c})):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Loading"}),Object(s.jsx)(v.a,{animation:"border",role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})})]})},S=n(9),w=n(2),_=n(62);var C=function(e){e.baseURL,e.user;var t=e.setUser,n=(new _.a,Object(o.f)()),a=Object(c.useState)({name:"no user"}),r=Object(i.a)(a,2),l=(r[0],r[1]),j=Object(c.useState)({username:"",password:"",email_address:"",picture_url:"",genre:"",instrument:"",location:"",looking_for:""}),u=Object(i.a)(j,2),h=u[0],O=u[1],m=Object(c.useState)([]),x=Object(i.a)(m,2),p=x[0],g=x[1],v=Object(c.useState)(!1),y=Object(i.a)(v,2),C=y[0],k=y[1],L=function(e){O(Object(w.a)(Object(w.a)({},h),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(s.jsx)("div",{className:"login-or-signup",children:Object(s.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:h.username,password:h.password})}).then((function(e){e.ok?e.json().then((function(e){g([]),console.log(e),l(e),k(!C),t(e),n.push("/profiles")})):e.json().then((function(e){return g(e.errors)}))}))},children:[Object(s.jsx)("h2",{children:"Log in"}),Object(s.jsx)(d.b,{to:"/signup",children:"Sign up if you do not have an account"}),p.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("em",{children:e}),Object(s.jsx)("br",{})]})})),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Username"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your username",name:"username",value:h.username,onChange:L})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(s.jsx)(f.a.Label,{children:"Password"}),Object(s.jsx)(f.a.Control,{type:"password",placeholder:"Password",name:"password",value:h.password,onChange:L})]}),Object(s.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})})};var k=function(e){e.baseURL;var t=e.genres,n=e.setGenres,a=e.instruments,r=e.setInstruments,l=e.locations,j=e.setLocations,u=e.users,d=e.setUsers,h=e.setUser,O=Object(o.f)(),x=Object(c.useState)({username:"",password:"",email_address:"",picture_url:"",genre:"",instrument:"",location:"",looking_for:""}),p=Object(i.a)(x,2),g=p[0],v=p[1],y=Object(c.useState)([]),_=Object(i.a)(y,2),C=_[0],k=_[1],L=function(e){v(Object(w.a)(Object(w.a)({},g),{},Object(S.a)({},e.target.name,e.target.value)))},T=Object(c.useState)(!1),N=Object(i.a)(T,2),U=(N[0],N[1]),E=Object(c.useState)(!1),G=Object(i.a)(E,2),A=(G[0],G[1]),P=Object(c.useState)(!1),R=Object(i.a)(P,2),I=(R[0],R[1]),B=Object(c.useState)(!1),F=Object(i.a)(B,2),D=(F[0],F[1]);return console.log(t,a,l),Object(s.jsx)("div",{className:"login-or-signup",children:Object(s.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:g.username,password:g.password,email_address:g.email_address,picture_url:g.picture_url,genre:g.genre,instrument:g.instrument,location:g.location,looking_for:g.looking_for})}).then((function(e){e.ok?e.json().then((function(e){k([]),t.includes(e.genre)||n([].concat(Object(m.a)(t),[e.genre])),a.includes(e.instrument)||r([].concat(Object(m.a)(a),[e.instrument])),l.includes(e.location)||j([].concat(Object(m.a)(l),[e.location])),a.includes(e.looking_for)||r([].concat(Object(m.a)(a),[e.looking_for])),h(e),d([].concat(Object(m.a)(u),[e])),O.push("/profiles")})):e.json().then((function(e){return k(e.errors)}))}))},children:[Object(s.jsx)("h2",{children:"Sign Up"}),C.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("em",{children:e}),Object(s.jsx)("br",{})]})})),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Username"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your username",name:"username",value:g.username,onChange:L})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(s.jsx)(f.a.Label,{children:"Password"}),Object(s.jsx)(f.a.Control,{type:"password",placeholder:"Password",name:"password",value:g.password,onChange:L})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Email Address"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your email address",name:"email_address",value:g.email_address,onChange:L})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Picture URL"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your picture url",name:"picture_url",value:g.picture_url,onChange:L})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Genre"}),Object(s.jsxs)(f.a.Select,{onChange:function(e){"Other"===e.target.value?U(!0):v(Object(w.a)(Object(w.a)({},g),{},{genre:e.target.value}))},children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select your genre"}),t.map((function(e){return Object(s.jsx)("option",{value:e.name,children:e.name})}))]}),Object(s.jsx)(f.a.Text,{className:"text-muted"})]}),null,Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Instrument"}),Object(s.jsxs)(f.a.Select,{onChange:function(e){"Other"===e.target.value?A(!0):v(Object(w.a)(Object(w.a)({},g),{},{instrument:e.target.value}))},children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select your instrument"}),a.map((function(e){return Object(s.jsx)("option",{value:e.name,children:e.name})}))]}),Object(s.jsx)(f.a.Text,{className:"text-muted"})]}),null,Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Location"}),Object(s.jsxs)(f.a.Select,{onChange:function(e){"Other"===e.target.value?I(!0):v(Object(w.a)(Object(w.a)({},g),{},{location:e.target.value}))},children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select your location"}),l.map((function(e){return Object(s.jsx)("option",{value:e.name,children:e.name})}))]}),Object(s.jsx)(f.a.Text,{className:"text-muted"})]}),null,Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Looking For"}),Object(s.jsxs)(f.a.Select,{onChange:function(e){"Other"===e.target.value?D(!0):v(Object(w.a)(Object(w.a)({},g),{},{looking_for:e.target.value}))},children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select the instrument you want to collaborate with"}),a.map((function(e){return Object(s.jsx)("option",{value:e.name,children:e.name})}))]}),Object(s.jsx)(f.a.Text,{className:"text-muted"})]}),null,Object(s.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})})},L=n(61),T=n(50);n(79);var N=function(e){var t=e.user,n=(e.setUser,Object(c.useState)(!1)),a=Object(i.a)(n,2),r=(a[0],a[1]);return Object(o.f)(),Object(c.useEffect)((function(){r(!!t)}),[t]),Object(s.jsx)(T.a,{style:{color:"white"},expand:"lg",children:Object(s.jsxs)(L.a,{children:[Object(s.jsxs)(d.b,{to:"/",children:[" ",Object(s.jsx)(T.a.Brand,{style:{color:"white"},href:"",children:"Join The Band"})]}),Object(s.jsxs)(d.b,{to:"/profiles",children:[" ",Object(s.jsx)(T.a.Brand,{style:{color:"white"},href:"profiles",children:"Profiles"})]}),Object(s.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"})]})})};n(75);var U=function(){return Object(s.jsx)("div",{className:"no-match",children:Object(s.jsx)(x.a,{style:{backgroundColor:"black",boxShadow:"1px 1px 1px 1px white",textAlign:"center",margin:"10px"},children:Object(s.jsxs)(x.a.Body,{children:[Object(s.jsx)(x.a.Title,{children:Object(s.jsx)("h1",{children:"ERROR 404!"})}),Object(s.jsxs)(x.a.Text,{children:[Object(s.jsx)(x.a.Text,{style:{color:"red"},children:Object(s.jsx)("h2",{children:"Oops!"})})," The page you're looking for does not exist"]}),Object(s.jsx)(d.b,{to:"/",children:Object(s.jsx)(b.a,{style:{margin:"0 auto"},variant:"primary",children:"Home"})})]})})})};n(76);var E=function(e){var t=e.webpage;return Object(s.jsxs)("div",{className:"no-auth",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsx)(x.a,{style:{backgroundColor:"black",boxShadow:"1px 1px 1px 1px white",textAlign:"center",margin:"10px"},children:Object(s.jsxs)(x.a.Body,{children:[Object(s.jsx)(x.a.Title,{children:Object(s.jsx)("h1",{children:"ERROR 401!"})}),Object(s.jsxs)(x.a.Text,{children:[Object(s.jsx)(x.a.Text,{style:{color:"red"},children:Object(s.jsx)("h2",{children:"Sorry!"})}),"You need to be logged in to access this page"]}),Object(s.jsx)(d.b,{to:"/login",children:Object(s.jsx)(b.a,{style:{margin:"0 auto"},variant:"primary",children:"Login"})})]})})]})};var G=function(e){e.baseURL;var t=e.user,n=e.setUser,a=(e.genres,e.setGenres,e.instruments,e.setInstruments,e.locations,e.setLocations,e.users),r=e.setUsers,l=Object(c.useState)(Object(w.a)(Object(w.a)({},t),{},{looking_for:t.looking_for.name})),j=Object(i.a)(l,2),u=j[0],d=j[1],h=Object(c.useState)([]),O=Object(i.a)(h,2),m=O[0],x=O[1],p=function(e){d(Object(w.a)(Object(w.a)({},u),{},Object(S.a)({},e.target.name,e.target.value)))},g=Object(o.f)();return Object(s.jsxs)("div",{children:[Object(s.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),console.log(u),fetch("/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:u.name,email_address:u.email_address,picture_url:u.picture_url,genre:u.genre_name,instrument:u.instrument_name,location:u.location_name,looking_for:u.looking_for})}).then((function(e){e.ok?e.json().then((function(e){n(e),r(a.map((function(t){return t.id==e.id?e:t}))),g.push("/profiles")})):e.json().then((function(e){return x(e.errors)}))}))},children:[Object(s.jsx)("h2",{children:"My Profile"}),m.map((function(e){return Object(s.jsx)("p",{children:e})})),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Username"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your username",name:"name",value:u.name,onChange:p})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Email Address"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your email address",name:"email_address",value:u.email_address,onChange:p})]}),Object(s.jsxs)(f.a.Group,{className:"mb-3",children:[Object(s.jsx)(f.a.Label,{children:"Picture URL"}),Object(s.jsx)(f.a.Control,{type:"text",placeholder:"Enter your picture url",name:"picture_url",value:u.picture_url,onChange:p})]}),Object(s.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(s.jsx)(b.a,{onClick:function(e){e.preventDefault(),fetch("/users/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n(null)}))},variant:"danger",type:"submit",children:"Delete account"})]})};var A=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r="https://join-the-band-api.herokuapp.com",l=Object(c.useState)(!1),j=Object(i.a)(l,2),u=j[0],b=j[1];console.log(u),Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){console.log(e),b(e)}))}))}),[]),Object(c.useEffect)((function(){fetch("/users").then((function(e){return e.json()})).then((function(e){a(e)}))}),[u]);var d=Object(c.useState)([]),h=Object(i.a)(d,2),m=h[0],x=h[1];Object(c.useEffect)((function(){fetch("/genres").then((function(e){return e.json()})).then((function(e){x(e)}))}),[]);var p=Object(c.useState)([]),f=Object(i.a)(p,2),g=f[0],v=f[1],S=Object(c.useState)([]),w=Object(i.a)(S,2),_=w[0],L=w[1];return Object(c.useEffect)((function(){fetch("/instruments").then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(c.useEffect)((function(){fetch("/locations").then((function(e){return e.json()})).then((function(e){L(e)}))}),[]),Object(s.jsx)("div",{children:Object(s.jsxs)("main",{children:[Object(s.jsx)(N,{user:u,setUser:b}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",children:Object(s.jsx)(O,{user:u})}),Object(s.jsx)(o.a,{exact:!0,path:"/login",children:Object(s.jsx)(C,{user:u,setUser:b,baseURL:r,instruments:g,setInstruments:v,locations:_,setLocations:L,genres:m,setGenres:x,users:n,setUsers:a})}),Object(s.jsx)(o.a,{exact:!0,path:"/signup",children:Object(s.jsx)(k,{baseURL:r,instruments:g,setInstruments:v,locations:_,setLocations:L,genres:m,setGenres:x,users:n,setUsers:a,setUser:b})}),Object(s.jsx)(o.a,{exact:!0,path:"/profiles",children:Object(s.jsx)(y,{user:u,baseURL:r,genres:m,instruments:g,locations:_,users:n})}),Object(s.jsx)(o.a,{path:"/edit-profile",children:u?Object(s.jsx)(G,{baseURL:r,user:u,setUser:b,instruments:g,setInstruments:v,locations:_,setLocations:L,genres:m,setGenres:x,users:n,setUsers:a}):Object(s.jsx)(E,{webpage:"Edit Profile"})}),Object(s.jsx)(o.a,{exact:!0,path:"*",children:Object(s.jsx)(U,{})})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};n(77);r.a.render(Object(s.jsx)(d.a,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),P()}},[[78,1,2]]]);
//# sourceMappingURL=main.41926d9e.chunk.js.map