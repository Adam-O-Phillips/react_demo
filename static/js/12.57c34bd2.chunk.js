(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1565:function(e,t,n){"use strict";n.r(t);var r,c,i,o,a,l,s,u,b,d,j,f,O,x=n(9),p=n(0),m=n(78),h=n(2),v=n(73),g=n(249),k=n(792),y=n(14),w=n(384),I=n(245),C=n(89),A=n(253),T=n.n(A),S=n(832),D=n(992),B=n(831),F=n(1),L=function(e){var t=e.collection,n=e.sortBy,r=void 0===n?"updatedAt":n,c=t.address,i=Object(D.a)(c),o=i?T()(i,(function(e){return e.meta[r]?Number(null===e||void 0===e?void 0:e.meta[r]):0}),["currentAskPrice"===r?"asc":"desc"]):[];return o.length?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(h.cb,{gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:o.map((function(e){return Object(F.jsx)(S.b,{nft:e},"".concat(e.tokenId,"-").concat(e.collectionName))}))})}):Object(F.jsx)(B.a,{})},N=n(1138),z=n(115),P=n(377),E=n.n(P),G=n(8),W=n(6),R=W.e.div(r||(r=Object(G.a)(["\n  position: fixed;\n  right: 5%;\n  bottom: 60px;\n"]))),K=function(){var e=Object(p.useState)(!1),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(y.b)().t,i=function(){var e=document.documentElement.scrollTop;e>700?r(!0):e<=700&&r(!1)};return Object(p.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),Object(F.jsx)(R,{style:{display:n?"inline":"none"},children:Object(F.jsx)(h.t,{variant:"subtle",endIcon:Object(F.jsx)(h.N,{color:"invertedContrast"}),onClick:function(){window.scrollTo({top:400,behavior:"auto"})},children:c("To Top")})})},Q=n(18),J=n(31),q=n(5),H=n(1134),Y=n.n(H),M=n(76),U=n(318),V=n.n(U),X=n(32),Z=Object(W.e)(h.bb)(c||(c=Object(G.a)(["\n  cursor: pointer;\n  user-select: none;\n"]))),$=Object(W.e)(h.hb)(i||(i=Object(G.a)(["\n  border-radius: 50%;\n"]))),_=function(e){var t=e.item,n=e.isSelected,r=e.onSelect;return Object(F.jsxs)(Z,{alignItems:"center",px:"16px",py:"8px",onClick:r,children:[t.image&&Object(F.jsx)($,{src:t.image,height:48,width:48,mr:"16px"}),Object(F.jsx)(h.zc,{style:{flex:1},children:t.label}),void 0!==t.count&&Object(F.jsx)(h.zc,{color:"textSubtle",px:"8px",children:Object(X.e)(t.count,0,0)}),Object(F.jsx)(h.ac,{name:"item-select",scale:"sm",checked:n,value:t.label,onChange:V.a,ml:"24px"})]})},ee=Object(W.e)(h.bb)(o||(o=Object(G.a)(["\n  background: ",";\n  border-radius: 24px 24px 0 0;\n"])),(function(e){return e.theme.colors.dropdown})),te=Object(W.e)(h.bb)(a||(a=Object(G.a)(["\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  svg {\n    pointer-events: none;\n  }\n"]))),ne=Object(W.e)(h.t)(l||(l=Object(G.a)(["\n  ","\n"])),(function(e){return e.hasItem&&"  \n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-right: 8px;\n  "})),re=Object(W.e)(h.gb)(s||(s=Object(G.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]))),ce=function(e){var t=e.title,n=e.traitType,r=e.items,c=e.collectionAddress,i=Object(y.b)().t,o=Object(p.useState)(!1),a=Object(x.a)(o,2),l=a[0],s=a[1],u=Object(p.useState)(""),b=Object(x.a)(u,2),d=b[0],j=b[1],f=Object(p.useState)({orderKey:"count",orderDir:"asc"}),O=Object(x.a)(f,2),m=O[0],w=O[1],I=Object(p.useRef)(null),C=Object(p.useRef)(null),A=Object(k.i)(c),S=Object(k.h)(c),D=Object(v.b)(),B=m.orderKey,L=m.orderDir,N=A[n],z=!!N,P=d&&d.length>1?r.filter((function(e){return-1!==e.label.toLowerCase().indexOf(d.toLowerCase())})):r,E=function(e){return function(){w((function(t){return t.orderKey!==e?{orderKey:e,orderDir:"asc"}:{orderKey:e,orderDir:"asc"===t.orderDir?"desc":"asc"}}))}};return Object(p.useEffect)((function(){var e=function(e){var t=e.target;I.current&&C.current&&!C.current.contains(t)&&!I.current.contains(t)&&s(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[s,I,C]),Object(F.jsxs)(h.bb,{alignItems:"center",mr:"4px",mb:"4px",children:[Object(F.jsx)(h.o,{ref:I,children:Object(F.jsx)(h.jb,{component:Object(F.jsx)(ne,{onClick:function(){return s(!l)},variant:z?"subtle":"light",scale:"sm",disabled:S===M.c.LOADING,hasItem:z,children:t}),isOpen:l,options:{placement:"bottom"},children:Object(F.jsxs)(h.o,{maxWidth:"375px",ref:C,children:[Object(F.jsx)(ee,{alignItems:"center",p:"16px",children:Object(F.jsx)(h.lb,{startIcon:Object(F.jsx)(h.dc,{color:"textSubtle"}),children:Object(F.jsx)(h.kb,{name:"query",placeholder:i("Search"),onChange:function(e){var t=e.target.value;j(t)},value:d})})}),Object(F.jsxs)(h.bb,{alignItems:"center",p:"16px",children:[Object(F.jsxs)(te,{onClick:E("label"),style:{flex:1},children:[Object(F.jsx)(h.zc,{fontSize:"12px",color:"secondary",fontWeight:"bold",textTransform:"uppercase",children:i("Name")}),Object(F.jsxs)(h.o,{width:"18px",children:["label"===B&&"asc"===L&&Object(F.jsx)(h.h,{width:"18px",color:"secondary"}),"label"===B&&"desc"===L&&Object(F.jsx)(h.d,{width:"18px",color:"secondary"})]})]}),Object(F.jsxs)(te,{onClick:E("count"),children:[Object(F.jsx)(h.zc,{fontSize:"12px",color:"secondary",fontWeight:"bold",textTransform:"uppercase",children:i("Count")}),Object(F.jsxs)(h.o,{width:"18px",children:["count"===B&&"asc"===L&&Object(F.jsx)(h.h,{width:"18px",color:"secondary"}),"count"===B&&"desc"===L&&Object(F.jsx)(h.d,{width:"18px",color:"secondary"})]})]})]}),Object(F.jsx)(h.o,{height:"240px",overflowY:"auto",children:P.length>0?T()(P,B,L).map((function(e){var t=!!N&&N.value===e.attr.value;return Object(F.jsx)(_,{item:e,isSelected:t,onSelect:function(){return function(e){var t=e.attr;D(Object(g.i)({collectionAddress:c,nftFilters:Object(q.a)(Object(q.a)({},A),{},Object(Q.a)({},n,t))}))}(e)}},e.label)})):Object(F.jsx)(h.bb,{alignItems:"center",justifyContent:"center",height:"230px",children:Object(F.jsx)(h.zc,{color:"textDisabled",textAlign:"center",children:i("No results found")})})})]})})}),z&&Object(F.jsx)(re,{variant:z?"subtle":"light",scale:"sm",onClick:function(){var e=Object(q.a)({},A);delete e[n],D(Object(g.i)({collectionAddress:c,nftFilters:e}))},disabled:S===M.c.LOADING,children:Object(F.jsx)(h.P,{color:"currentColor",width:"18px"})})]})},ie=n(53),oe=n(878),ae=["collectionAddress"],le=function(e){var t=e.collectionAddress,n=Object(ie.a)(e,ae),r=Object(v.b)(),c=Object(y.b)().t,i=Object(k.h)(t);return Object(F.jsx)(h.t,Object(q.a)(Object(q.a)({variant:"text",scale:"sm",onClick:function(){r(Object(g.j)(t))},disabled:i===M.c.LOADING},n),{},{children:c("Clear")}),"clear-all")},se=function(e){var t=e.collectionAddress,n=Object(v.b)(),r=Object(y.b)().t,c=Object(k.j)(t),i=[{label:r("Recently listed"),value:{field:"updatedAt",direction:"desc"}},{label:r("Lowest price"),value:{field:"currentAskPrice",direction:"asc"}},{label:r("Highest price"),value:{field:"currentAskPrice",direction:"desc"}},{label:r("Token ID"),value:{field:"tokenId",direction:"asc"}}],o=i.findIndex((function(e){return e.value.field===c.field&&e.value.direction===c.direction}));return Object(F.jsx)(w.a,{options:i,onOptionChange:function(e){var r=e.value,c=r.field,i=r.direction;n(Object(g.m)({collection:t,field:c,direction:i}))},defaultOptionIndex:-1!==o?o:void 0})},ue=Object(W.e)(h.cb)(u||(u=Object(G.a)(["\n  margin-bottom: 16px;\n  padding: 0 16px;\n  grid-gap: 8px 16px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    'filterByTitle .'\n    'attributeFilters attributeFilters'\n    '. sortByTitle'\n    'filterByControls sortByControls';\n  "," {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas:\n      'filterByTitle . .'\n      'attributeFilters attributeFilters attributeFilters'\n      '. . sortByTitle'\n      'filterByControls . sortByControls';\n  }\n  "," {\n    grid-template-columns: 2fr 5fr 1fr;\n    grid-template-areas:\n      'filterByTitle . .'\n      'filterByControls attributeFilters attributeFilters'\n      '. . sortByTitle'\n      '. . sortByControls';\n  }\n  "," {\n    grid-template-columns: 1.3fr 5fr 1fr;\n    grid-template-areas:\n      'filterByTitle . sortByTitle'\n      'filterByControls attributeFilters sortByControls';\n  }\n  "," {\n    grid-template-columns: 1fr 5fr 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return e.theme.mediaQueries.xxl})),be=Object(W.e)(h.zc)(b||(b=Object(G.a)(["\n  grid-area: filterByTitle;\n"]))),de=Object(W.e)(h.o)(d||(d=Object(G.a)(["\n  grid-area: filterByControls;\n"]))),je=Object(W.e)(h.zc)(j||(j=Object(G.a)(["\n  grid-area: sortByTitle;\n"]))),fe=Object(W.e)(h.o)(f||(f=Object(G.a)(["\n  grid-area: sortByControls;\n"]))),Oe=Object(W.e)(h.bb)(O||(O=Object(G.a)(["\n  grid-area: attributeFilters;\n  align-items: center;\n  flex: 1;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  "," {\n    flex-wrap: wrap;\n    overflow-x: revert;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),xe=function(e){var t,n=e.collection,r=n.address,c=Object(v.b)(),i=Object(oe.a)(r).data,o=Object(y.b)().t,a=Object(k.k)(r),l=Object(p.useState)(a?1:0),s=Object(x.a)(l,2),u=s[0],b=s[1],d=Object(k.i)(r),j=null===n||void 0===n||null===(t=n.attributes)||void 0===t?void 0:t.reduce((function(e,t){return Object(q.a)(Object(q.a)({},e),{},Object(Q.a)({},t.traitType,e[t.traitType]?[].concat(Object(J.a)(e[t.traitType]),[t]):[t]))}),{}),f=j?Object.keys(j):[];return Object(F.jsxs)(ue,{children:[Object(F.jsx)(be,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",bold:!0,children:o("Filter by")}),Object(F.jsx)(de,{children:Object(F.jsxs)(h.u,{scale:"sm",activeIndex:u,onItemClick:function(e){c(Object(g.n)({collection:r,showOnlyOnSale:1===e})),b(e)},children:[Object(F.jsx)(h.v,{children:o("All")}),Object(F.jsx)(h.v,{children:o("On Sale")})]})}),Object(F.jsx)(je,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,mb:"4px",children:o("Sort By")}),Object(F.jsx)(fe,{children:Object(F.jsx)(se,{collectionAddress:r})}),Object(F.jsxs)(Oe,{children:[f.map((function(e){var t=j[e].map((function(t){return{label:Y()(t.value),count:i&&i[e]?i[e][t.value]:void 0,attr:t}}));return Object(F.jsx)(ce,{title:Y()(e),traitType:e,items:t,collectionAddress:r},e)})),!E()(d)&&Object(F.jsx)(le,{collectionAddress:r,mb:"4px"})]})]})},pe=n(3),me=n.n(pe),he=n(11),ve=n(894),ge=n.n(ve),ke=n(71),ye=100,we=function(e){var t=e.collection,n=t.totalSupply,r=t.numberTokensListed,c=t.address,i=Object(p.useState)(1),o=Object(x.a)(i,2),a=o[0],l=o[1],s=Object(p.useState)(0),u=Object(x.a)(s,2),b=u[0],d=u[1],j=Object(p.useState)([]),f=Object(x.a)(j,2),O=f[0],m=f[1],w=Object(p.useState)(!1),I=Object(x.a)(w,2),C=I[0],A=I[1],T=Object(y.b)().t,D=Object(k.m)(c),L=Object(k.h)(c),N=Object(v.b)(),z=Object(k.k)(c),P=Object(k.j)(c),E=P.field,G=P.direction,W="tokenId"===E?L===M.c.LOADING:C;Object(p.useEffect)((function(){"tokenId"===E&&l(1)}),[E]),Object(p.useEffect)((function(){m([]),d(0)}),[E,G]),Object(p.useEffect)((function(){var e=function(){var e=Object(he.a)(me.a.mark((function e(t){var n,r,i;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return Object(ke.p)(c,e.tokenId)})),e.next=3,Promise.all(n);case 3:r=e.sent,i=r.map((function(e,n){return Object(q.a)(Object(q.a)({},e),{},{collectionAddress:c,collectionName:e.collection.name,marketData:t[n]})})),A(!1),m((function(e){var t=[].concat(Object(J.a)(e),Object(J.a)(i));return ge()(t,"tokenId")}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var t=Object(he.a)(me.a.mark((function t(){var n;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ke.t)({collection:c.toLowerCase(),isTradable:!0},ye,E,G,b);case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();"tokenId"!==E&&(A(!0),t())}),[E,G,b,c]),Object(p.useEffect)((function(){"tokenId"===E&&N(Object(g.f)({collectionAddress:c,page:a,size:ye}))}),[a,c,N,E]);var R="tokenId"===E?null===D||void 0===D?void 0:D.filter((function(e){var t;return!z||(null===(t=e.marketData)||void 0===t?void 0:t.isTradable)})):O;if(!R||0===(null===R||void 0===R?void 0:R.length))return Object(F.jsx)(B.a,{});var K=z||"tokenId"!==E?(null===R||void 0===R?void 0:R.length)<Number(r):(null===R||void 0===R?void 0:R.length)<Number(n),Q=z||"tokenId"!==E?r:n;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(h.bb,{p:"16px",children:Object(F.jsxs)(h.zc,{bold:!0,children:[Q," ",T("Results")]})}),Object(F.jsx)(h.cb,{gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:R.map((function(e){var t=e.marketData&&parseFloat(e.marketData.currentAskPrice);return Object(F.jsx)(S.b,{nft:e,currentAskPrice:t>0?t:void 0},e.tokenId)}))}),Object(F.jsx)(h.bb,{mt:"60px",mb:"12px",justifyContent:"center",children:K&&Object(F.jsx)(h.t,{onClick:function(){"tokenId"===E&&l((function(e){return e+1})),d(b+ye)},scale:"sm",endIcon:W?Object(F.jsx)(h.i,{spin:!0,color:"currentColor"}):void 0,children:T(W?"Loading":"Load more")})})]})},Ie=function(e){var t=e.collection.address,n=Object(p.useState)(ye),r=Object(x.a)(n,2),c=r[0],i=r[1],o=Object(y.b)().t,a=Object(k.j)(t),l=Object(k.k)(t),s=Object(k.m)(t);if(Object(k.h)(t)===M.c.LOADING)return Object(F.jsx)(B.a,{});var u=s?T()(s,(function(e){var t,n;if("currentAskPrice"===a.field)return((null===(t=e.marketData)||void 0===t?void 0:t.currentAskPrice)?parseFloat(null===(n=e.marketData)||void 0===n?void 0:n.currentAskPrice):0)>0?parseFloat(e.marketData.currentAskPrice):"asc"===a.direction?1/0:-1/0;if("tokenId"===a.field){var r=Number(e.tokenId);return Number.isFinite(r)?r:0}return e.marketData?parseInt(e.marketData[a.field],10):0}),a.direction):[],b=l?u.filter((function(e){var t;return null===(t=e.marketData)||void 0===t?void 0:t.isTradable})):u,d=b.slice(0,c);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(h.bb,{p:"16px",children:Object(F.jsxs)(h.zc,{bold:!0,children:[b.length," ",o("Results")]})}),d.length>0?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(h.cb,{gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:d.map((function(e){var t=e.marketData&&parseFloat(e.marketData.currentAskPrice);return Object(F.jsx)(S.b,{nft:e,currentAskPrice:t>0?t:void 0},e.tokenId)}))}),Object(F.jsx)(h.bb,{mt:"60px",mb:"12px",justifyContent:"center",children:s.length>c&&Object(F.jsx)(h.t,{onClick:function(){i((function(e){return e+ye}))},scale:"sm",children:o("Load more")})})]}):Object(F.jsxs)(h.bb,{alignItems:"center",py:"48px",flexDirection:"column",children:[Object(F.jsx)(h.s,{width:"96px",mb:"24px"}),Object(F.jsx)(h.zc,{fontWeight:600,children:o("No NFTs found")})]})]})},Ce=function(e){var t=e.collection,n=Object(k.i)(t.address);return Object(F.jsxs)(h.o,{py:"32px",children:[Object(F.jsx)(I.a,{px:[0,null,"24px"],children:Object(F.jsx)(xe,{collection:t})}),Object(F.jsx)(I.a,{children:E()(n)?Object(F.jsx)(we,{collection:t}):Object(F.jsx)(Ie,{collection:t})}),Object(z.createPortal)(Object(F.jsx)(K,{}),document.body)]})};t.default=function(){var e=Object(m.i)().collectionAddress,t=Object(p.useState)("updatedAt"),n=Object(x.a)(t,2),r=n[0],c=n[1],i=Object(y.b)().t,o=Object(v.b)(),a=Object(k.e)(e),l=e.toLowerCase()===C.b.toLowerCase(),s=(a||{}).address,u=[{label:i("Recently listed"),value:"updatedAt"},{label:i("Lowest price"),value:"currentAskPrice"}];return Object(p.useEffect)((function(){s&&o(Object(g.c)(s))}),[s,o]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(N.a,{collection:a}),l?Object(F.jsxs)(I.a,{mb:"24px",children:[Object(F.jsx)(h.bb,{alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],mb:"24px",children:Object(F.jsxs)(h.o,{minWidth:"165px",children:[Object(F.jsx)(h.zc,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,mb:"4px",children:i("Sort By")}),Object(F.jsx)(w.a,{options:u,onOptionChange:function(e){c(e.value)}})]})}),Object(F.jsx)(L,{collection:a,sortBy:r})]}):Object(F.jsx)(Ce,{collection:a})]})}},831:function(e,t,n){"use strict";var r=n(53),c=n(5),i=(n(0),n(2)),o=n(804),a=n.n(o),l=n(1),s=["numItems"],u=function(e){return Object(l.jsxs)(i.o,Object(c.a)(Object(c.a)({},e),{},{children:[Object(l.jsx)(i.fc,{height:"258px",mb:"8px"}),Object(l.jsx)(i.fc,{width:"30%",mb:"4px"}),Object(l.jsx)(i.fc,{width:"45%",mb:"16px"}),Object(l.jsx)(i.fc,{})]}))};t.a=function(e){var t=e.numItems,n=void 0===t?12:t,o=Object(r.a)(e,s);return Object(l.jsx)(i.cb,Object(c.a)(Object(c.a)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},o),{},{children:a()(n).map((function(e){return Object(l.jsx)(u,{},e)}))}))}},893:function(e,t){e.exports=function(e,t,n,r){for(var c=e.length,i=n+(r?1:-1);r?i--:++i<c;)if(t(e[i],i,e))return i;return-1}},894:function(e,t,n){var r=n(252),c=n(941);e.exports=function(e,t){return e&&e.length?c(e,r(t,2)):[]}},941:function(e,t,n){var r=n(509),c=n(942),i=n(946),o=n(510),a=n(947),l=n(504);e.exports=function(e,t,n){var s=-1,u=c,b=e.length,d=!0,j=[],f=j;if(n)d=!1,u=i;else if(b>=200){var O=t?null:a(e);if(O)return l(O);d=!1,u=o,f=new r}else f=t?[]:j;e:for(;++s<b;){var x=e[s],p=t?t(x):x;if(x=n||0!==x?x:0,d&&p===p){for(var m=f.length;m--;)if(f[m]===p)continue e;t&&f.push(p),j.push(x)}else u(f,p,n)||(f!==j&&f.push(p),j.push(x))}return j}},942:function(e,t,n){var r=n(943);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},943:function(e,t,n){var r=n(893),c=n(944),i=n(945);e.exports=function(e,t,n){return t===t?i(e,t,n):r(e,c,n)}},944:function(e,t){e.exports=function(e){return e!==e}},945:function(e,t){e.exports=function(e,t,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===t)return r;return-1}},946:function(e,t){e.exports=function(e,t,n){for(var r=-1,c=null==e?0:e.length;++r<c;)if(n(t,e[r]))return!0;return!1}},947:function(e,t,n){var r=n(511),c=n(318),i=n(504),o=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:c;e.exports=o},992:function(e,t,n){"use strict";var r=n(3),c=n.n(r),i=n(11),o=n(9),a=n(0),l=n(71),s=n(89);t.a=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],u=n[1],b=e===s.b;return Object(a.useEffect)((function(){b&&!r&&function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,r,i,o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.r)(s.b);case 2:return t=e.sent,n=t.data,r=Object.keys(n),e.next=7,Object(l.d)(r);case 7:return i=e.sent,e.next=10,Object(l.e)(r);case 10:o=e.sent,a=r.map((function(e){return{tokenId:n[e].name,name:n[e].name,description:n[e].description,collectionAddress:s.b,collectionName:n[e].collection.name,image:n[e].image,attributes:[{traitType:"bunnyId",value:e,displayType:null}],meta:{currentAskPrice:i[e],updatedAt:o[e]}}})),u(a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[b,r]),r}}}]);
//# sourceMappingURL=12.57c34bd2.chunk.js.map