(window.webpackJsonpminiapp=window.webpackJsonpminiapp||[]).push([[0],{234:function(e,t,n){e.exports=n(343)},320:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},324:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);n(235),n(261),n(263),n(264),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303);var a=n(0),r=n.n(a),c=n(90),o=n.n(c),s=(n(311),n(312),n(8)),i=(n(320),n(321),n(322),n(111)),u=n(62),l=n(9),p=n.n(l),d=n(16),m=n(149),f=n(150),h=n(153),v=n(151),b=n(51),g=n(154),E=n(350),k=n(351),y=n(352),w=n(353),O=n(349),x=(n(324),n(21)),_=n.n(x),j=n(73);function P(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.back=Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.popout){t.next=4;break}return e.setState({popout:null}),window.history.pushState({pop:"popout"},"Title"),t.abrupt("return");case 4:if(1!==(n=e.state.history).length){t.next=9;break}_.a.send("VKWebAppClose",{status:"success"}),t.next=13;break;case 9:if(!(n.length>1)){t.next=13;break}return n.pop(),t.next=13,e.setState({activePanel:n[n.length-1],history:n,snackbar:null});case 13:case"end":return t.stop()}}),t)}))),this.go=function(t){var n=e.state.history;"object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),n[n.length-1]!==t&&(n.push(t),window.history.pushState({activePanel:t},"Title"),e.setState({activePanel:t,history:n,snackbar:null}))},this.setActiveModal=function(t){e.setState({activeModal:t})},this.setActivePanel=function(t,n){e.setState({activePanel:t,history:n?[].concat(Object(j.a)(n),[t]):[t]})},this.setPopout=function(t){e.setState({popout:t})},this.state.history=[t],this.state.activePanel=t}function C(){return{activePanel:this.state.activePanel,onSwipeBack:this.back,history:this.state.history,popout:this.state.popout}}n(85);var S=n(152),A=n.n(S);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(p.a.mark((function e(t){var n,a,r,c,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},a=o.length>2&&void 0!==o[2]?o[2]:{},r=n?"?"+Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"===typeof n[e]?JSON.stringify(n[e]):n[e])})).join("&"):"",c="".concat(t).concat(r),e.next=5,new Promise((function(e,t){fetch(c,z({method:"GET"},a)).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(t){return e({error:{code:-1,text:t.toString()}})}))}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(d.a)(p.a.mark((function e(t,n,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.request({method:"POST",params:n,url:t,data:a,headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0!==e){var a=[];return a[e]||(a[e]=e%100>4&&e%100<20?2:[2,0,1,1,1,2][Math.min(e%10,5)]),(n?e+" ":"")+t[a[e]]}}function B(){var e=window.location.search.length>0&&JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return e&&e.vk_chat_id&&(e.vk_chat_id=decodeURIComponent(e.vk_chat_id)),e}n(110);function V(e){return W.apply(this,arguments)}function W(){return(W=Object(d.a)(p.a.mark((function e(t){var n,a,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]&&r[1],e.prev=1,e.next=4,_.a.send("VKWebAppGetAuthToken",{app_id:parseInt(B().vk_app_id),scope:t});case 4:if((a=e.sent).scope.split(",").length!==t.split(",").length){e.next=9;break}return e.abrupt("return",a.access_token);case 9:return e.abrupt("return",V(t,n));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;_.a.subscribe(function(){var n=Object(d.a)(p.a.mark((function n(a){var r,c,o,s,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a.detail,c=r.type,o=r.data,void 0!==c&&console.debug(c,o),"VKWebAppUpdateConfig"===c?(s=document.createAttribute("scheme"),i=o.scheme?"client_light"===o.scheme?"bright_light":o.scheme:"bright_light",s.value=t||i,document.body.attributes.setNamedItem(s),e[c]&&"function"===typeof e[c]&&e[c]()):e[c]&&"function"===typeof e[c]&&e[c]();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}var U=n(354);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q="https://vds2153911.my-ihor.ru:8082/",L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={user_groups:[],connected_groups:[],mediacontent:[],selected_advert_send:[],advert_mediacontent:5},P.bind(Object(b.a)(n))(),n.connectGroup=n.connectGroup.bind(Object(b.a)(n)),n.disconnectGroup=n.disconnectGroup.bind(Object(b.a)(n)),n.uploadMediacontent=n.uploadMediacontent.bind(Object(b.a)(n)),n.updateConnectedGroups=n.updateConnectedGroups.bind(Object(b.a)(n)),n.updateMediaContent=n.updateMediaContent.bind(Object(b.a)(n)),n.advertSend=n.advertSend.bind(Object(b.a)(n)),n.setAlert=n.setAlert.bind(Object(b.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(),_.a.send("VKWebAppInit"),this.setPopout(r.a.createElement(s.z,null)),e.next=5,V("groups");case 5:return t=e.sent,e.next=8,_.a.send("VKWebAppCallAPIMethod",{method:"groups.get",params:{filter:"admin",extended:1,v:"5.126",access_token:t}});case 8:return n=e.sent.response.items,e.next=11,this.updateConnectedGroups();case 11:return e.next=13,this.updateMediaContent();case 13:this.setState({user_groups:n,user_token:t}),this.setPopout(null);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"api",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,T("".concat(q,"api/").concat(t),J({},B(),{},n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateConnectedGroups",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("groups");case 2:return t=e.sent,e.next=5,this.api("groups.get");case 5:if(e.t0=function(e){return e.group_id},n=e.sent.response.map(e.t0),a=[],!(n.length>0)){e.next=12;break}return e.next=11,_.a.send("VKWebAppCallAPIMethod",{method:"groups.getById",params:{group_ids:n.join(","),v:"5.126",access_token:t}});case 11:a=e.sent.response;case 12:this.setState({connected_groups:a});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateMediaContent",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("media.get");case 2:t=e.sent.response,this.setState({mediacontent:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectGroup",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=parseInt(t.currentTarget.dataset.id),this.setPopout(r.a.createElement(s.y,null,r.a.createElement(s.k,{style:{maxWidth:"60vw"}},r.a.createElement(s.C,{level:"3"},"\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e\u043a\u0435\u043d \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u043f\u043e\u043b\u0435"),r.a.createElement(s.B,{size:6}),r.a.createElement(s.s,{onChange:function(e){return a.setState({group_token_:e.currentTarget.value})}}),r.a.createElement(s.B,{size:16}),r.a.createElement(s.e,{mode:"secondary",size:"m",target:"_blank",href:"https://vk.com/public".concat(n,"?act=tokens")},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"),r.a.createElement(s.B,{size:6}),r.a.createElement(s.e,{size:"m",onClick:Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.group_token_,e.next=3,a.api("groups.connect",{group_id:n,access_token:t});case 3:return e.next=5,a.updateConnectedGroups();case 5:a.setPopout(null);case 6:case"end":return e.stop()}}),e)})))},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement(s.B,{size:6}),r.a.createElement(s.e,{mode:"destructive",size:"m",onClick:function(){a.setPopout(null)}},"\u041e\u0442\u043c\u0435\u043d\u0430"))));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"disconnectGroup",value:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setPopout(r.a.createElement(s.z,null)),e.prev=1,e.next=4,this.api("groups.disconnect",{group_id:t});case 4:return e.next=6,this.updateConnectedGroups();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("API ERROR",e.t0);case 11:this.setPopout(null);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"uploadMediacontent",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,c,o,i,l,m,f,h,v=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target||window.event.srcElement,a=n.files,c=t.currentTarget.dataset.name,!(FileReader&&a&&a.length)){e.next=29;break}o=!0,i=!1,l=void 0,e.prev=5,m=p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.value,(n=new FileReader).onload=Object(d.a)(p.a.mark((function e(){var a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.setPopout(r.a.createElement(s.z,null)),o=n.result,console.log(o),"fileMedia"!==c){e.next=8;break}return e.next=6,G("".concat(q,"uploadMedia"),J({},B(),{name:t.name}),{data:o});case 6:return e.next=8,v.updateMediaContent();case 8:v.setState((a={},Object(u.a)(a,c,o),Object(u.a)(a,"".concat(c,"_name"),t.name),a)),v.setPopout(null);case 10:case"end":return e.stop()}}),e)}))),e.next=5,n.readAsDataURL(t);case 5:case"end":return e.stop()}}),e)})),f=a[Symbol.iterator]();case 8:if(o=(h=f.next()).done){e.next=13;break}return e.delegateYield(m(),"t0",10);case 10:o=!0,e.next=8;break;case 13:e.next=19;break;case 15:e.prev=15,e.t1=e.catch(5),i=!0,l=e.t1;case 19:e.prev=19,e.prev=20,o||null==f.return||f.return();case 22:if(e.prev=22,!i){e.next=25;break}throw l;case 25:return e.finish(22);case 26:return e.finish(19);case 27:e.next=29;break;case 29:case"end":return e.stop()}}),e,null,[[5,15,19,27],[20,,22,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"removeMediacontent",value:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setPopout(r.a.createElement(s.z,null)),e.prev=1,e.next=4,this.api("media.remove",{name:t});case 4:return e.next=6,this.updateMediaContent();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("API ERROR",e.t0);case 11:this.setPopout(null);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"advertSend",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a,c,o,i,u,l,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.fileStory,a=t.fileStory_name,c=t.advert_send,o=t.selected_advert_send,i=t.advert_mediacontent,u=t.advert_url,this.setPopout(r.a.createElement(s.z,null)),e.prev=2,e.next=5,G("".concat(q,"advertSend"),J({},B(),{name:a,advert_send:c,selected_advert_send:o.map((function(e){return parseInt(e.value)})),advert_mediacontent:i,advert_url:u}),{data:n});case 5:l=e.sent,d=l.data,console.log(d),d.response?this.setAlert("\u0413\u043e\u0442\u043e\u0432\u043e","\u0412\u0441\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0431\u044b\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b",[{title:"\u041e\u043a",autoclose:!0}]):this.setAlert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",d.err,[{title:"\u041e\u043a",autoclose:!0}]),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),this.setAlert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",e.t0.message,[{title:"\u041e\u043a",autoclose:!0}]);case 15:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"setAlert",value:function(e,t,n){var a=this;this.setPopout(r.a.createElement(s.b,{actions:n,actionsLayout:"vertical",onClose:function(){return a.setPopout(null)},header:e,text:t}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.user_groups,a=t.connected_groups,c=t.mediacontent,o=t.advert_send,u=t.selected_advert_send,l=t.advert_mediacontent,p=t.advert_url,d=(t.fileMedia,t.fileStory,t.fileStory_name);return r.a.createElement(s.D,C.bind(this)(),r.a.createElement(s.v,{id:"main"},r.a.createElement(s.w,null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement(s.p,null,r.a.createElement(s.A,{expandable:!0,before:r.a.createElement(E.a,null),onClick:this.go,"data-to":"groups"},"\u0413\u0440\u0443\u043f\u043f\u044b"),r.a.createElement(s.A,{expandable:!0,before:r.a.createElement(k.a,null),onClick:this.go,"data-to":"media"},"\u041c\u0435\u0434\u0438\u0430\u043a\u043e\u043d\u0442\u0435\u043d\u0442")),r.a.createElement(s.p,null,r.a.createElement(s.A,{expandable:!0,before:r.a.createElement(y.a,null),onClick:function(){e.setState({selected_advert_send:[],advert_send:"1"}),e.go("advert")}},"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430"))),r.a.createElement(s.v,{id:"groups"},r.a.createElement(s.w,{left:r.a.createElement(s.x,{onClick:this.back})},"\u0413\u0440\u0443\u043f\u043f\u044b"),r.a.createElement(s.p,null,r.a.createElement(s.A,{before:r.a.createElement(w.a,null),onClick:this.go,"data-to":"connect-group"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443")),r.a.createElement(s.p,null,r.a.createElement(s.q,{mode:"secondary"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"),r.a.createElement(s.u,null,a.map((function(t,n){var a=t.id,c=t.name,o=t.photo_50;return r.a.createElement(s.f,{key:"group-".concat(a),before:r.a.createElement(s.d,{size:32,src:o,shadow:!1}),mode:"removable",onRemove:function(){return e.disconnectGroup(a)}},c)}))),r.a.createElement(s.m,null,D(a.length,["\u0433\u0440\u0443\u043f\u043f\u0430","\u0433\u0440\u0443\u043f\u043f\u044b","\u0433\u0440\u0443\u043f\u043f"])))),r.a.createElement(s.v,{id:"connect-group"},r.a.createElement(s.w,{left:r.a.createElement(s.x,{onClick:this.back})},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),r.a.createElement(s.p,null,n.filter((function(e){var t=e.id;return-1===a.findIndex((function(e){return e.id===t}))})).map((function(t,n){var a=t.id,c=t.name,o=t.photo_50;return r.a.createElement(s.A,{key:"group-".concat(a),before:r.a.createElement(s.d,{size:32,src:o,shadow:!1}),onClick:e.connectGroup,"data-id":a},c)})))),r.a.createElement(s.v,{id:"media"},r.a.createElement(s.w,{left:r.a.createElement(s.x,{onClick:this.back})},"\u041c\u0435\u0434\u0438\u0430\u043a\u043e\u043d\u0442\u0435\u043d\u0442"),r.a.createElement(s.p,{style:{marginTop:16}},r.a.createElement(s.n,{bottom:"\u0424\u0430\u0439\u043b \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u041c\u0411\u0430\u0439\u0442"},r.a.createElement(s.l,{align:"center",before:r.a.createElement(w.a,null),onChange:this.uploadMediacontent,"data-name":"fileMedia",size:"m",stretched:!0},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e"))),r.a.createElement(s.p,null,r.a.createElement(s.q,{mode:"secondary"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432"),r.a.createElement(s.u,null,c.map((function(t,n){return r.a.createElement(s.f,{key:"file-".concat(n),after:r.a.createElement(s.r,{onClick:function(){return e.removeMediacontent(t)}},r.a.createElement(O.a,null))},r.a.createElement(s.t,{target:"_blank",href:"".concat(q,"files?name=").concat(t)},t))}))),r.a.createElement(s.m,null,D(c.length,["\u0444\u0430\u0439\u043b","\u0444\u0430\u0439\u043b\u0430","\u0444\u0430\u0439\u043b\u043e\u0432"])))),r.a.createElement(s.v,{id:"advert"},r.a.createElement(s.w,{left:r.a.createElement(s.x,{onClick:this.back})},"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430"),r.a.createElement(s.p,{style:{marginTop:16}},r.a.createElement(s.n,{bottom:"\u0424\u0430\u0439\u043b \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u041c\u0411\u0430\u0439\u0442"},r.a.createElement(s.l,{align:"center",before:!d&&r.a.createElement(w.a,null),onChange:this.uploadMediacontent,"data-name":"fileStory",size:"m",stretched:!0},d||"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e/\u0432\u0438\u0434\u0435\u043e"))),r.a.createElement(s.p,null,r.a.createElement(s.o,null,r.a.createElement(s.n,{top:"\u0421\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f"},r.a.createElement(s.i,{onChange:function(t){return e.setState({advert_send:t.target.value,selected_advert_send:[]})},defaultValue:"1",options:["1","2"].map((function(e){return{value:"".concat(e),label:"1"===e?"\u0412\u0441\u0435 \u0433\u0440\u0443\u043f\u043f\u044b":"\u0414\u0440\u0443\u0433\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"}}))})),"2"===o&&r.a.createElement(s.n,null,r.a.createElement(U.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u044b",value:u,onChange:function(t){return e.setState({selected_advert_send:t})},options:a.map((function(e,t){var n=e.id,a=e.name,r=e.photo_50;return{value:"".concat(n),label:a,src:r}})),emptyText:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",showSelected:!1,closeAfterSelect:!1,renderChip:function(e){var t=e.value,n=e.label,a=e.option.src,c=Object(i.a)(e,["value","label","option"]);return r.a.createElement(s.g,Object.assign({value:t,before:r.a.createElement(s.d,{size:20,src:a})},c),n)},renderOption:function(e){var t=e.option.src,n=Object(i.a)(e,["option"]);return r.a.createElement(s.j,Object.assign({before:r.a.createElement(s.d,{size:20,src:t})},n))}})),r.a.createElement(s.n,{top:"\u041c\u0435\u0434\u0438\u0430\u043a\u043e\u043d\u0442\u0435\u043d\u0442"},r.a.createElement(s.s,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0434\u0438\u0430 \u043f\u043e\u0441\u043b\u0435 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0438",value:l,onChange:function(t){return e.setState({advert_mediacontent:t.currentTarget.value})},type:"number"})),r.a.createElement(s.n,{top:"\u0421\u0441\u044b\u043b\u043a\u0430"},r.a.createElement(s.s,{placeholder:"\u041e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u041f\u0435\u0440\u0435\u0439\u0442\u0438",value:p,onChange:function(t){return e.setState({advert_url:t.currentTarget.value})}})),r.a.createElement(s.n,null,r.a.createElement(s.e,{size:"l",stretched:!0,onClick:this.advertSend},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(s.h,{webviewType:s.E.INTERNAL},r.a.createElement(s.a,null,r.a.createElement(s.c,null,r.a.createElement(L,null)))),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.d6118508.chunk.js.map