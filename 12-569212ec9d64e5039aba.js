(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(e,t,n){"use strict";n(197)("fixed",function(e){return function(){return e(this,"tt","","")}})},197:function(e,t,n){var r=n(11),i=n(17),a=n(18),o=/"/g,s=function(e,t,n,r){var i=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},199:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.default=void 0;var i,a=r(n(7)),o=r(n(34)),s=r(n(75)),l=r(n(76)),u=r(n(0)),c=r(n(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h=new WeakMap;var m=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return n&&(n.observe(e),h.set(e,t)),function(){n.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+s+l+n+i+t+o+a+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=u.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,c=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:i},d,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,i=!1,a=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return n.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:a,hasNoScript:l,seenBefore:s},n.imageRef=u.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,S=e.itemProp,w="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),O=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":n,style:E,className:p};if(h){var I=h;return u.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},u.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),w&&u.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),I.base64&&u.default.createElement(y,(0,l.default)({src:I.base64},L)),I.tracedSVG&&u.default.createElement(y,(0,l.default)({src:I.tracedSVG},L)),this.state.isVisible&&u.default.createElement("picture",null,I.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),u.default.createElement(y,{alt:n,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},I))}}))}if(m){var C=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},a);return"inherit"===a.display&&delete j.display,u.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},w&&u.default.createElement(v,{title:t,style:{backgroundColor:w,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),C.base64&&u.default.createElement(y,(0,l.default)({src:C.base64},L)),C.tracedSVG&&u.default.createElement(y,(0,l.default)({src:C.tracedSVG},L)),this.state.isVisible&&u.default.createElement("picture",null,C.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),u.default.createElement(y,{alt:n,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:C.width,height:C.height},C))}}))}return null},t}(u.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w},201:function(e,t,n){(function(n){var r,i;i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,i=-1,a="",o=n.charCodeAt(0);++i<r;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===i&&48<=t&&t<=57||1===i&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,r,i){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:i}});document.dispatchEvent(a)}};return function(o,s){var l,u,c,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||a("scrollCancel",l)},animateScroll:function(r,o,s){f.cancelScroll();var u=n(l||t,s||{}),p="[object Number]"===Object.prototype.toString.call(r),h=p||!r.tagName?null:r;if(p||h){var m=e.pageYOffset;u.header&&!c&&(c=document.querySelector(u.header));var g,y,b,v,S,w,E,O,L=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(c),I=p?r:function(t,n,r,a){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-n-r,0),a&&(o=Math.min(o,i()-e.innerHeight)),o}(h,L,parseInt("function"==typeof u.offset?u.offset(r,o):u.offset,10),u.clip),C=I-m,j=i(),q=0,R=(g=C,b=(y=u).speedAsDuration?y.speed:Math.abs(g/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10)),N=function(t){var n,i,s;v||(v=t),q+=t-v,w=m+C*(i=S=1<(S=0===R?0:q/R)?1:S,"easeInQuad"===(n=u).easing&&(s=i*i),"easeOutQuad"===n.easing&&(s=i*(2-i)),"easeInOutQuad"===n.easing&&(s=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(s=i*i*i),"easeOutCubic"===n.easing&&(s=--i*i*i+1),"easeInOutCubic"===n.easing&&(s=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(s=i*i*i*i),"easeOutQuart"===n.easing&&(s=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(s=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(s=i*i*i*i*i),"easeOutQuint"===n.easing&&(s=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(s=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(s=n.customEasing(i)),s||i),e.scrollTo(0,Math.floor(w)),function(t,n){var i,s,l,c=e.pageYOffset;if(t==n||c==n||(m<n&&e.innerHeight+c)>=j)return f.cancelScroll(!0),s=n,l=p,0===(i=r)&&document.body.focus(),l||(i.focus(),document.activeElement!==i&&(i.setAttribute("tabindex","-1"),i.focus(),i.style.outline="none"),e.scrollTo(0,s)),a("scrollStop",u,r,o),!(d=v=null)}(w,I)||(d=e.requestAnimationFrame(N),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),E=r,O=u,p||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),a("scrollStart",u,r,o),f.cancelScroll(!0),e.requestAnimationFrame(N)}}},p=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(u=t.target.closest(o))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n=r(u.hash),i=l.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),f.animateScroll(i,u))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){l&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",h,!1),f.cancelScroll(),d=c=u=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),l=n(t,s||{}),c=l.header?document.querySelector(l.header):null,document.addEventListener("click",p,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",h,!1)}(),f}}(i)}.apply(t,[]))||(e.exports=r)}).call(this,n(73))},238:function(e,t,n){"use strict";e.exports=n(239)},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0)),o=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function c(e,t){var n=t.onNewComment,r=t.language,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in i)e.page[a]=i[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},240:function(e,t,n){var r=n(25),i=n(35);n(241)("keys",function(){return function(e){return i(r(e))}})},241:function(e,t,n){var r=n(11),i=n(19),a=n(17);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}}}]);
//# sourceMappingURL=12-569212ec9d64e5039aba.js.map