(this.webpackJsonpprojecteitacademy=this.webpackJsonpprojecteitacademy||[]).push([[0],{123:function(e,t,s){},130:function(e,t,s){},131:function(e,t,s){},132:function(e,t,s){},133:function(e,t,s){},136:function(e,t,s){},137:function(e,t,s){},138:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i),r=s(9),o=s.n(r),c=s(29),n=s(26),d=s(34),h=s.n(d),l=s(68),p=s(61),j=s(24),v=s(81),u=s.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:5,key:"AIzaSyBPeFgcV6yyk0IQDfTK5UfET5HuBP_M_gs"}}),b=s(19),O=s(20),m=s(23),f=s(22),x=s.p+"static/media/react-icon.436f7205.svg",F=s.p+"static/media/avatar.20799d4f.jpg",S=(s(123),s(172)),y=s(57),N=s.n(y),L=s(10),g=s(6),V=s(2),w=function(e){Object(m.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(b.a)(this,s);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={termFromSearchBar:"",redirectToWatch:"",searchValue:"",componentName:e.props.componentName},e.handleChange=function(t){e.setState({searchValue:t.target.value})},e.handleSubmit=function(t){console.log(e.state.componentName),e.props.search(e.state.searchValue),"Home"===e.state.componentName&&e.setState({redirectToWatch:!0}),t.preventDefault()},e}return Object(O.a)(s,[{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToWatch?Object(V.jsx)(L.a,{to:"/watch"}):Object(V.jsxs)("div",{className:"search_container",children:[Object(V.jsx)("img",{src:x,className:"size"}),Object(V.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(V.jsx)(N.a,{className:"search_icon"}),Object(V.jsx)(S.a,{value:this.state.searchValue,type:"search",placeholder:"Search...",className:"search_input",InputProps:{className:e.input},onChange:this.handleChange})]}),Object(V.jsx)("img",{src:F,className:"size"})]})}}]),s}(a.a.Component),T=Object(g.a)({input:{color:"white"}})(w),k=(s(130),s(86)),C=s.n(k),H=s(50),I=s.n(H),_=s(173),R=function(e){var t,s,i=e.video,a=e.handleVideoSelect,r=e.addFavorite,o=(e.deleteFavorite,e.isFavorite),c=e.favoritesList,n=e.setFavoritesList,d=null===c||void 0===c?void 0:c.includes(i.etag);return Object(V.jsxs)("div",{className:"card",onClick:function(){return"function"===typeof a&&a(i)},children:[i&&Object(V.jsx)("img",{className:"thumbnail",src:null===(t=i.snippet)||void 0===t?void 0:t.thumbnails.medium.url}),Object(V.jsxs)("h4",{className:"title",children:[" ",null===(s=i.snippet)||void 0===s?void 0:s.title]}),Object(V.jsx)(_.a,{className:"heartIcon",onClick:function(){n(d?null===c||void 0===c?void 0:c.filter((function(e){return e!==i.etag})):null===c||void 0===c?void 0:c.concat(i.etag)),r(i)},children:o||d?Object(V.jsx)(I.a,{className:"heartColor"}):Object(V.jsx)(C.a,{})})]})},B=(s(131),function(e){var t=e.videos,s=e.listTitle,i=e.handleVideoSelect,a=e.addFavorite,r=e.deleteFavorite,o=e.isFavorite,c=e.componentName,n=e.favoritesList,d=e.setFavoritesList,h=t.map((function(e,t){return Object(V.jsx)(R,{handleVideoSelect:i,video:e,addFavorite:a,deleteFavorite:r,isFavorite:o,favoritesList:n,setFavoritesList:d},t)}));return Object(V.jsxs)("div",{children:[Object(V.jsxs)("h3",{className:"videoListTitle",children:[" ",s," "]}),Object(V.jsxs)("div",{className:"Home"===c?"favoritesList":"list",children:[" ",h," "]})]})}),E=(s(132),function(e){var t=e.video;if(!t)return Object(V.jsx)("div",{});var s="https://youtube.com/embed/".concat(t.id.videoId);return Object(V.jsxs)("div",{className:"description_container",children:[Object(V.jsx)("iframe",{height:"300px",width:"500px",src:s}),Object(V.jsxs)("div",{className:"margin",children:[Object(V.jsxs)("h1",{className:"title",children:[" ",t.snippet.title]}),Object(V.jsxs)("h3",{className:"description",children:[" ",t.snippet.description]})]})]})}),J=(s(133),s(87)),M=s.n(J),W=function(e){Object(m.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(b.a)(this,s);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleLoad=function(t){e.props.setShow(),e.props.search(t)},e}return Object(O.a)(s,[{key:"render",value:function(){var e=this,t=this.props.historySearch;return Object(V.jsxs)("div",{children:[Object(V.jsx)("h3",{className:"titleHistory",children:"Last searches"}),Object(V.jsx)("div",{className:"historyContainer",children:Object(V.jsx)("div",{className:"width",children:t&&t.map((function(t){return Object(V.jsxs)("li",{className:"historyList",children:[Object(V.jsx)("img",{className:"circular",src:t.thumbnails}),t.search,Object(V.jsx)("h6",{children:Object(V.jsx)(M.a,{fromNow:!0})}),Object(V.jsx)("button",{onClick:function(){return e.handleLoad(t.search)},className:"loadButton",children:"Cargar videos"})]})}))})})]})}}]),s}(a.a.Component),D=(s(65),function(e){Object(m.a)(s,e);var t=Object(f.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(O.a)(s,[{key:"componentDidMount",value:function(){this.props.recommendedVideos||"function"!==typeof this.props.recommended||this.props.recommended()}},{key:"render",value:function(){return Object(V.jsx)("div",{children:Object(V.jsxs)("div",{className:"container",children:[Object(V.jsx)(T,{onFormSubmit:this.handleSubmit,search:this.props.search,componentName:"Home"}),Object(V.jsxs)("div",{className:"videos_container",children:[Object(V.jsx)(E,{video:this.props.selectedVideo}),this.props.showHistorySearch?this.props.videos&&Object(V.jsx)(B,{videos:this.props.videos,handleVideoSelect:this.props.handleVideoSelect,addFavorite:this.props.addFavorite,deleteFavorite:this.props.deleteFavorite,listTitle:"Search results",favoritesList:this.props.favoritesList,setFavoritesList:this.props.setFavoritesList}):this.props.recommendedVideos&&Object(V.jsx)(B,{videos:this.props.recommendedVideos,handleVideoSelect:this.props.handleVideoSelect,addFavorite:this.props.addFavorite,deleteFavorite:this.props.deleteFavorite,favorites:this.props.favorites,isFavorite:!1,listTitle:"Recommended videos",favoritesList:this.props.favoritesList,setFavoritesList:this.props.setFavoritesList}),Object(V.jsxs)("div",{className:"below",children:[Object(V.jsx)("div",{className:"favoriteContainer",children:this.props.favorites&&Object(V.jsx)(B,{handleVideoSelect:this.props.handleVideoSelect,addFavorite:this.props.addFavorite,deleteFavorite:this.props.deleteFavorite,videos:this.props.favorites,listTitle:"Favorite videos",isFavorite:!0,favoritesList:this.props.favoritesList,favorites:this.props.favorites,setFavoritesList:this.props.setFavoritesList,componentName:"Home"})}),Object(V.jsx)(W,{historySearch:this.props.historySearch,search:this.props.search,setShow:this.props.setShow,setHistorySearch:this.props.setHistorySearch})]})]})]})})}}]),s}(a.a.Component)),P=function(e){Object(m.a)(s,e);var t=Object(f.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(O.a)(s,[{key:"componentDidMount",value:function(){this.props.selectedVideo&&"function"===typeof this.props.getRelated&&this.props.getRelated(this.props.selectedVideo.id.videoId)}},{key:"render",value:function(){return Object(V.jsx)("div",{children:Object(V.jsxs)("div",{className:"container",children:[Object(V.jsx)(T,{search:this.props.search,componentName:"Watch",updateSearchTerm:this.props.updateSearchTerm}),Object(V.jsxs)("div",{className:"videos_container",children:[this.props.relatedVideos&&Object(V.jsx)(B,{videos:this.props.relatedVideos,handleVideoSelect:this.props.handleVideoSelect,addFavorite:this.props.addFavorite,deleteFavorite:this.props.deleteFavorite,favoritesList:this.props.favoritesList,setFavoritesList:this.props.setFavoritesList,listTitle:"Related videos"}),Object(V.jsx)(E,{video:this.props.selectedVideo}),this.props.videos&&Object(V.jsx)(B,{videos:this.props.videos,handleVideoSelect:this.props.handleVideoSelect,addFavorite:this.props.addFavorite,deleteFavorite:this.props.deleteFavorite,listTitle:"Search results",favoritesList:this.props.favoritesList,setFavoritesList:this.props.setFavoritesList})]})]})})}}]),s}(a.a.Component),z=(s(136),s(46)),A=s(88),U=s.n(A),q=s(89),K=s.n(q),Q=[{path:"/",title:"Home",icon:Object(V.jsx)(U.a,{})},{path:"/watch",title:"Watch",icon:Object(V.jsx)(N.a,{})},{path:"/history",title:"History",icon:Object(V.jsx)(K.a,{})},{path:"/favorites",title:"Favorites",icon:Object(V.jsx)(I.a,{})}];var G=function(){return Object(V.jsx)("div",{className:"sidebar",children:Object(V.jsxs)("ul",{className:"sidebar_list",children:[Object(V.jsx)("h4",{className:"menu",children:"MENU"}),Q.map((function(e){return Object(V.jsx)("div",{children:Object(V.jsx)("li",{className:"row",children:Object(V.jsxs)(z.b,{to:e.path,children:[e.icon,Object(V.jsx)("span",{children:e.title})]})})})}))]})})},X=function(e){Object(m.a)(s,e);var t=Object(f.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(O.a)(s,[{key:"render",value:function(){return Object(V.jsx)("div",{children:Object(V.jsx)("div",{className:"container",children:this.props.favorites&&Object(V.jsx)(B,{addFavorite:this.props.addFavorite,videos:this.props.favorites,listTitle:"Favorite videos",isFavorite:!0,favoritesList:this.props.favoritesList,setFavoritesList:this.props.setFavoritesList})})})}}]),s}(a.a.Component);s(137);var Y=function(){var e=Object(i.useState)(null),t=Object(j.a)(e,2),s=t[0],a=t[1],r=Object(i.useState)(null),o=Object(j.a)(r,2),d=o[0],v=o[1],b=Object(i.useState)(null),O=Object(j.a)(b,2),m=O[0],f=O[1],x=Object(i.useState)(null),F=Object(j.a)(x,2),S=(F[0],F[1]),y=Object(i.useState)(null),N=Object(j.a)(y,2),g=N[0],w=N[1],T=Object(i.useState)([]),k=Object(j.a)(T,2),C=k[0],H=k[1],I=Object(i.useState)([]),_=Object(j.a)(I,2),R=_[0],B=_[1],E=Object(i.useState)([]),J=Object(j.a)(E,2),M=J[0],A=J[1],U=Object(i.useState)(!1),q=Object(j.a)(U,2),K=q[0],Q=q[1];Object(i.useEffect)((function(){var e=localStorage.getItem("historySearch");e&&B(JSON.parse(e))}),[]),Object(i.useEffect)((function(){localStorage.setItem("historySearch",JSON.stringify(R))}));var Y=function(){var e=Object(p.a)(h.a.mark((function e(t){var s,i,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search",{params:{q:t}});case 2:i=e.sent,r={search:t,thumbnails:null===(s=i.data.items[0].snippet)||void 0===s?void 0:s.thumbnails.default.url},o=[].concat(Object(l.a)(R),[r]),B(o),localStorage.setItem("historySearch",JSON.stringify(R)),a(i.data.items),v(i.data.items[0]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("videos",{params:{chart:"mostPopular",regionCode:"es"}});case 2:t=e.sent,f(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(p.a)(h.a.mark((function e(t){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search",{params:{type:"video",relatedToVideoId:t}});case 2:s=e.sent,w(s.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){if(C.some((function(t){return t.id===e.id}))){var t=C.filter((function(t){return t.id!==e.id}));H(t)}else{var s=[].concat(Object(l.a)(C),[e]);H(s)}},te=function(e){var t=C.filter((function(t){return t.id!==e.id}));H(t)},se=function(e){S(e)},ie=function(e){v(e)},ae=function(){Q(!0)};return Object(V.jsx)("div",{className:"main",children:Object(V.jsxs)(z.a,{children:[Object(V.jsx)(G,{}),Object(V.jsxs)(L.d,{children:[Object(V.jsx)(L.b,{path:"/",exact:!0,render:function(e){var t;return Object(V.jsx)(D,Object(n.a)(Object(n.a)({},e),{},(t={videos:s,selectedVideo:d,search:Y,recommended:Z,recommendedVideos:m,updateSearchTerm:se,addFavorite:ee,favorites:C,deleteFavorite:te,historySearch:R},Object(c.a)(t,"search",Y),Object(c.a)(t,"favoritesList",M),Object(c.a)(t,"setFavoritesList",A),Object(c.a)(t,"showHistorySearch",K),Object(c.a)(t,"setShow",ae),t)))}}),Object(V.jsx)(L.b,{path:"/watch",render:function(e){return Object(V.jsx)(P,Object(n.a)(Object(n.a)({},e),{},{videos:s,selectedVideo:d,search:Y,getRelated:$,relatedVideos:g,updateSearchTerm:se,handleVideoSelect:ie,addFavorite:ee,favorites:C,deleteFavorite:te,favoritesList:M,setFavoritesList:A}))}}),Object(V.jsx)(L.b,{path:"/history",exact:!0,render:function(e){return Object(V.jsx)(W,Object(n.a)(Object(n.a)({},e),{},{historySearch:R,search:Y,favoritesList:M,setFavoritesList:A,showHistorySearch:K,setShow:ae}))}}),Object(V.jsx)(L.b,{path:"/favorites",exact:!0,render:function(e){return Object(V.jsx)(X,Object(n.a)(Object(n.a)({},e),{},{search:Y,addFavorite:ee,favorites:C,deleteFavorite:te,favoritesList:M,setFavoritesList:A}))}})]})]})})};o.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(Y,{})}),document.getElementById("root"))},65:function(e,t,s){}},[[138,1,2]]]);
//# sourceMappingURL=main.9e614d23.chunk.js.map