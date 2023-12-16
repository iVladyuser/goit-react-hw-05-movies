"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{2847:function(n,e,r){r.r(e);var t=r(9439),o=r(3028),i=r(2791),a=r(6355),s=r(7689),c=r(9787),l=r(7596),x=r(6353),d=r(184);e.default=function(){var n,e,r=(0,s.UO)().movieId,p=(0,i.useState)(!0),h=(0,t.Z)(p,2),u=h[0],f=h[1],g=(0,i.useState)(null),w=(0,t.Z)(g,2),j=w[0],m=w[1],b=(0,s.TH)(),v=(0,i.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");if((0,i.useEffect)((function(){r&&(0,c.Y5)("/movie",r).then((function(n){m(n)})).catch((function(n){l.Am.error(n.message)})).finally((function(){return f(!1)}))}),[r]),j){var Z=j.poster_path,k=j.title,y=j.release_date,P=j.genres,_=j.vote_average,S=j.overview;return(0,d.jsxs)("div",{children:[u&&(0,d.jsx)(o.aN,{}),j&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(x.Ch,{to:v.current,children:[(0,d.jsx)(a.x_l,{})," back"]}),(0,d.jsxs)(x.D,{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:Z?"http://image.tmdb.org/t/p/w342".concat(Z):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:k,width:"300px"})}),(0,d.jsxs)(x.Rx,{children:[(0,d.jsxs)(x.ew,{children:[(0,d.jsx)("h1",{style:{color:"orangered"},children:k}),(0,d.jsxs)("h3",{children:["Rating: ",_," ",(0,d.jsx)(a.QJe,{style:{color:"gold"}})]})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Release date:"})," ",y]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:S}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("ul",{children:P.map((function(n){return(0,d.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,d.jsxs)(x.r0,{children:[(0,d.jsx)(x.Bk,{children:"Additional information"}),(0,d.jsxs)(x.Q$,{children:[(0,d.jsx)("li",{children:(0,d.jsx)(x.Fg,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(x.Fg,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(o.aN,{}),children:(0,d.jsx)(s.j3,{})})]})]})}}},6353:function(n,e,r){r.d(e,{Bk:function(){return m},Ch:function(){return Z},D:function(){return f},Fg:function(){return v},Q$:function(){return b},Rx:function(){return w},ew:function(){return g},r0:function(){return j},vN:function(){return k}});var t,o,i,a,s,c,l,x,d,p=r(168),h=r(5867),u=r(1087),f=h.ZP.div(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: start;\n  color: white;\n  margin-top: 10px;\n"]))),g=h.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-between;\n  color: white;\n  margin-top: 10px;\n"]))),w=h.ZP.div(i||(i=(0,p.Z)(["\n  max-width: 600px;\n\n  border: 1px solid #ccc;\n  padding: 15px;\n  border-radius: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: #4d4545;\n  color: white;\n"]))),j=h.ZP.div(a||(a=(0,p.Z)(["\n  margin-bottom: 30px;\n"]))),m=h.ZP.h3(s||(s=(0,p.Z)(["\n  text-transform: uppercase;\n  margin-top: 20px;\n  font-size: 20px;\n  text-align: start;\n  color: white;\n"]))),b=h.ZP.div(c||(c=(0,p.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: start;\n  color: white;\n  list-style: none;\n"]))),v=(0,h.ZP)(u.OL)(l||(l=(0,p.Z)(["\n  padding: 8px 8px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 500;\n  background-color: #5f5d5d;\n\n  &:hover {\n    color: orangered;\n    border: 1px solid orangered;\n  }\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),Z=(0,h.ZP)(u.rU)(x||(x=(0,p.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 20px;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),k=h.ZP.h2(d||(d=(0,p.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  font-style: italic;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.945);\n  box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);\n  -webkit-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);\n  -moz-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);\n"])))}}]);
//# sourceMappingURL=847.3892ad82.chunk.js.map