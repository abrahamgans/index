(this.webpackJsonppopclick=this.webpackJsonppopclick||[]).push([[0],{13:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),i=a.n(o),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),o(e),i(e)}))},c=(a(20),a(21),a(2)),d=a(3),u=a(5),l=a(4),h=a(8),p=a(1),m=function(){return Object(p.jsx)("h1",{id:"header",children:"POPOWI"})},b=a(15),j=a(14),w=a.p+"static/media/kaget.60594b9c.wav",f=(a(45),new b.a),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={count:parseInt(f.get("count"))||0},e.audio=new j.Howl({src:[w]}),e.playAudio=function(){e.audio.stop(),e.audio.play(),e.audio.fade(0,1,100)},e.popOut=function(){var e=document.getElementById("counter");e.classList.remove("popout"),e.offsetWidth,e.classList.add("popout")},e.setCookies=function(e){f.set("count",parseInt(e),{path:"/",expires:new Date((new Date).setFullYear((new Date).getFullYear()+1))})},e.formatNumber=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},e.showNotif=function(t){switch(t){case 100:e.role="BuzzeRp";break;case 500:e.role="Kadrun";break;case 1e3:e.role="Pemakar Handal";break;case 5e3:e.role="Mahasiswa Jurusan Teknik Perdemoan";break;case 1e4:e.role="Buronan";break;case 3e4:e.role="Penjahat Kelas Kakap";break;case 999999:e.role="Cheater";break;default:e.role=void 0}void 0!==e.role&&(h.b.success("Anda telah mencapai ".concat(e.formatNumber(t),"!\nAnda adalah seorang ").concat(e.role)),e.role=void 0)},e.handlePress=function(){e.timer=setTimeout((function(){e.playAudio(),e.popOut(),e.setState({count:e.state.count+1}),e.setCookies(e.state.count),e.showNotif(e.state.count)}),0)},e.handleRelease=function(){clearTimeout(e.timer)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Jangan ciduk saya pak. Saya sedang belajar React.js, berhubung popcat.click sedang ngetren saat ini, ya sudah saya buat saja versi clonenya. Saya bukan bermaksud untuk makar \ud83d\ude4f\ud83c\udffc, saya saat pilpres saja memilih Pak Jokowi kok, hehe"),window.addEventListener("touchstart",this.handlePress),window.addEventListener("touchend",this.handleRelease),window.addEventListener("mousedown",this.handlePress),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("keydown",(function(t){t.repeat||e.handlePress()})),window.addEventListener("keyup",this.handleRelease)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h2",{id:"counter",style:{marginTop:"-15px"},children:this.formatNumber(this.state.count)})})}}]),a}(n.Component),g=(a(13),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).gambarU="https://i.postimg.cc/JhTM6rh9/u.png",e.gambarWah="https://i.postimg.cc/sx9FSwjR/wah.png",e.state={pic:e.gambarU},e.handlePress=function(){e.timer=setTimeout((function(){e.setState({pic:e.gambarWah})}),0)},e.handleRelease=function(){setTimeout((function(){clearTimeout(e.timer),e.setState({pic:e.gambarU})}),100)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("touchstart",this.handlePress),window.addEventListener("touchend",this.handleRelease),window.addEventListener("mousedown",this.handlePress),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("keydown",(function(t){t.repeat||e.handlePress()})),window.addEventListener("keyup",this.handleRelease)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-6 col-md-6 mx-auto",children:Object(p.jsx)("img",{src:this.state.pic,className:"fixed-bottom mx-auto",alt:"",id:"img",style:{marginBottom:"-5px"}})})})}}]),a}(n.Component)),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row text-center",children:Object(p.jsxs)("div",{className:"col-12 col-md-8 mt-4 mx-auto",children:[Object(p.jsx)(m,{}),Object(p.jsx)(v,{}),Object(p.jsx)(g,{})]})})})]})}}]),a}(n.Component);a(46);i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),r()}},[[47,1,2]]]);
//# sourceMappingURL=main.170cf55a.chunk.js.map