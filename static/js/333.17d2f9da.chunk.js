"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[333],{1333:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(9439),o=r(2791),u=r(1087),i=r(3028),s=r(1686),a=r(9787),f=(r(5264),{position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"});var c=r(7596),l=r(184),m=function(){var e=(0,u.lr)(),t=(0,n.Z)(e,2),r=t[0],m=t[1],h=(0,o.useState)([]),p=(0,n.Z)(h,2),v=p[0],y=p[1],w=(0,o.useState)(!1),d=(0,n.Z)(w,2),k=d[0],x=d[1],j=r.get("query");(0,o.useEffect)((function(){j&&(x(!0),(0,a.Ai)("/search/movie",j).then((function(e){0===e.length?c.Am.error("No movies found for your query!"):y(e.results)})).catch((function(e){c.Am.error(e.message)})).finally((function(){return x(!1)})))}),[j]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.E1,{onSubmitSearchBar:function(e){var t=e.trim().toLowerCase().split(" ").join("+");if(""===t)return m({}),y([]),void s.Notify.info("Enter your request, please!",f);t!==j?(m({query:t}),y([])):s.Notify.info("Enter new request, please!",f)},value:j}),k&&(0,l.jsx)(i.aN,{}),(0,l.jsx)(i.OM,{films:v})]})}}}]);
//# sourceMappingURL=333.17d2f9da.chunk.js.map