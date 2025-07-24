import{j as y}from"./jsx-runtime.D_zvdyIk.js";import{g as Qa,R as Gt,r as Za}from"./index.6otl1p8d.js";import{s as k}from"./_slug_.98eea4e9.DmF2f2Jl.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function er(e){if(Array.isArray(e))return e}function tr(e){if(Array.isArray(e))return Te(e)}function ar(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Vt(r.key),r)}}function nr(e,t,a){return t&&rr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=qe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function b(e,t,a){return(t=Vt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){f=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(a),!0).forEach(function(r){b(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pe(e,t){return er(e)||or(e,t)||qe(e,t)||sr()}function C(e){return tr(e)||ir(e)||qe(e)||lr()}function fr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vt(e){var t=fr(e,"string");return typeof t=="symbol"?t:t+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function qe(e,t){if(e){if(typeof e=="string")return Te(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Te(e,t):void 0}}var ft=function(){},Je={},Xt={},Kt=null,qt={mark:ft,measure:ft};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Xt=document),typeof MutationObserver<"u"&&(Kt=MutationObserver),typeof performance<"u"&&(qt=performance)}catch{}var ur=Je.navigator||{},ut=ur.userAgent,ct=ut===void 0?"":ut,z=Je,A=Xt,dt=Kt,se=qt;z.document;var L=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Jt=~ct.indexOf("MSIE")||~ct.indexOf("Trident/"),Se,cr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Qt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},mr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Zt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],O="classic",re="duotone",ea="sharp",ta="sharp-duotone",aa="chisel",ra="etch",na="jelly",ia="jelly-duo",oa="jelly-fill",sa="notdog",la="notdog-duo",fa="slab",ua="slab-press",ca="thumbprint",da="whiteboard",vr="Classic",hr="Duotone",pr="Sharp",gr="Sharp Duotone",br="Chisel",yr="Etch",xr="Jelly",Sr="Jelly Duo",wr="Jelly Fill",Ar="Notdog",kr="Notdog Duo",Pr="Slab",Ir="Slab Press",Or="Thumbprint",Er="Whiteboard",ma=[O,re,ea,ta,aa,ra,na,ia,oa,sa,la,fa,ua,ca,da];Se={},b(b(b(b(b(b(b(b(b(b(Se,O,vr),re,hr),ea,pr),ta,gr),aa,br),ra,yr),na,xr),ia,Sr),oa,wr),sa,Ar),b(b(b(b(b(Se,la,kr),fa,Pr),ua,Ir),ca,Or),da,Er);var jr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Nr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Tr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},va=["fak","fa-kit","fakd","fa-kit-duotone"],mt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fr=["kit"],_r="kit",$r="kit-duotone",Lr="Kit",Mr="Kit Duotone";b(b({},_r,Lr),$r,Mr);var Rr={kit:{"fa-kit":"fak"}},Dr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zr={kit:{fak:"fa-kit"}},vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},we,le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ur="classic",Yr="duotone",Hr="sharp",Br="sharp-duotone",Gr="chisel",Vr="etch",Xr="jelly",Kr="jelly-duo",qr="jelly-fill",Jr="notdog",Qr="notdog-duo",Zr="slab",en="slab-press",tn="thumbprint",an="whiteboard",rn="Classic",nn="Duotone",on="Sharp",sn="Sharp Duotone",ln="Chisel",fn="Etch",un="Jelly",cn="Jelly Duo",dn="Jelly Fill",mn="Notdog",vn="Notdog Duo",hn="Slab",pn="Slab Press",gn="Thumbprint",bn="Whiteboard";we={},b(b(b(b(b(b(b(b(b(b(we,Ur,rn),Yr,nn),Hr,on),Br,sn),Gr,ln),Vr,fn),Xr,un),Kr,cn),qr,dn),Jr,mn),b(b(b(b(b(we,Qr,vn),Zr,hn),en,pn),tn,gn),an,bn);var yn="kit",xn="kit-duotone",Sn="Kit",wn="Kit Duotone";b(b({},yn,Sn),xn,wn);var An={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},kn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Fe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Pn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ha=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Wr,Pn),In=["solid","regular","light","thin","duotone","brands","semibold"],pa=[1,2,3,4,5,6,7,8,9,10],On=pa.concat([11,12,13,14,15,16,17,18,19,20]),En=["aw","fw","pull-left","pull-right"],jn=[].concat(C(Object.keys(kn)),In,En,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(pa.map(function(e){return"".concat(e,"x")})).concat(On.map(function(e){return"w-".concat(e)})),Nn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",_e=16,ga="fa",ba="svg-inline--fa",B="data-fa-i2svg",$e="data-fa-pseudo-element",Cn="data-fa-pseudo-element-pending",Qe="data-prefix",Ze="data-icon",ht="fontawesome-i2svg",Tn="async",Fn=["HTML","HEAD","STYLE","SCRIPT"],ya=["::before","::after",":before",":after"],xa=function(){try{return!0}catch{return!1}}();function ne(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[O]}})}var Sa=u({},Qt);Sa[O]=u(u(u(u({},{"fa-duotone":"duotone"}),Qt[O]),mt.kit),mt["kit-duotone"]);var _n=ne(Sa),Le=u({},Tr);Le[O]=u(u(u(u({},{duotone:"fad"}),Le[O]),vt.kit),vt["kit-duotone"]);var pt=ne(Le),Me=u({},Fe);Me[O]=u(u({},Me[O]),zr.kit);var wa=ne(Me),Re=u({},An);Re[O]=u(u({},Re[O]),Rr.kit);ne(Re);var $n=cr,Aa="fa-layers-text",Ln=dr,Mn=u({},jr);ne(Mn);var Rn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=mr,Dn=[].concat(C(Fr),C(jn)),ee=z.FontAwesomeConfig||{};function zn(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Un=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Un.forEach(function(e){var t=pe(e,2),a=t[0],r=t[1],n=Wn(zn(a));n!=null&&(ee[r]=n)})}var ka={styleDefault:"solid",familyDefault:O,cssPrefix:ga,replacementClass:ba,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ee.familyPrefix&&(ee.cssPrefix=ee.familyPrefix);var J=u(u({},ka),ee);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(ka).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){J[e]=a,te.forEach(function(r){return r(m)})},get:function(){return J[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,te.forEach(function(a){return a(m)})},get:function(){return J.cssPrefix}});z.FontAwesomeConfig=m;var te=[];function Yn(e){return te.push(e),function(){te.splice(te.indexOf(e),1)}}var X=_e,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hn(e){if(!(!e||!L)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var Bn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){for(var e=12,t="";e-- >0;)t+=Bn[Math.random()*62|0];return t}function Q(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function et(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Pa(e[a]),'" ')},"").trim()}function ge(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tt(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Vn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function Xn(e){var t=e.transform,a=e.width,r=a===void 0?_e:a,n=e.height,i=n===void 0?_e:n,o="";return Jt?o+="translate(".concat(t.x/X-r/2,"em, ").concat(t.y/X-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "),o+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Kn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ia(){var e=ga,t=ba,a=m.cssPrefix,r=m.replacementClass,n=Kn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var bt=!1;function ke(){m.autoAddCss&&!bt&&(Hn(Ia()),bt=!0)}var qn={mixout:function(){return{dom:{css:Ia,insertCss:ke}}},hooks:function(){return{beforeDOMElementCreation:function(){ke()},beforeI2svg:function(){ke()}}}},$=z||{};$[_]||($[_]={});$[_].styles||($[_].styles={});$[_].hooks||($[_].hooks={});$[_].shims||($[_].shims=[]);var N=$[_],Oa=[],Ea=function(){A.removeEventListener("DOMContentLoaded",Ea),me=1,Oa.map(function(t){return t()})},me=!1;L&&(me=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),me||A.addEventListener("DOMContentLoaded",Ea));function Jn(e){L&&(me?setTimeout(e,0):Oa.push(e))}function ie(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Pa(e):"<".concat(t," ").concat(Gn(r),">").concat(i.map(ie).join(""),"</").concat(t,">")}function yt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Pe=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function ja(e){return C(e).length!==1?null:e.codePointAt(0).toString(16)}function xt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Na(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=xt(t);typeof N.hooks.addPack=="function"&&!n?N.hooks.addPack(e,xt(t)):N.styles[e]=u(u({},N.styles[e]||{}),i),e==="fas"&&Na("fa",t)}var ae=N.styles,Qn=N.shims,Ca=Object.keys(wa),Zn=Ca.reduce(function(e,t){return e[t]=Object.keys(wa[t]),e},{}),at=null,Ta={},Fa={},_a={},$a={},La={};function ei(e){return~Dn.indexOf(e)}function ti(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!ei(n)?n:null}var Ma=function(){var t=function(i){return Pe(ae,function(o,s,l){return o[l]=Pe(s,i,{}),o},{})};Ta=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Fa=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),La=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ae||m.autoFetchSvg,r=Pe(Qn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});_a=r.names,$a=r.unicodes,at=be(m.styleDefault,{family:m.familyDefault})};Yn(function(e){at=be(e.styleDefault,{family:m.familyDefault})});Ma();function rt(e,t){return(Ta[e]||{})[t]}function ai(e,t){return(Fa[e]||{})[t]}function Y(e,t){return(La[e]||{})[t]}function Ra(e){return _a[e]||{prefix:null,iconName:null}}function ri(e){var t=$a[e],a=rt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function W(){return at}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function ni(e){var t=O,a=Ca.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ma.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Zn[r].includes(n)}))&&(t=r)}),t}function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?O:a,n=_n[r][e];if(r===re&&!e)return"fad";var i=pt[r][e]||pt[r][n],o=e in N.styles?e:null,s=i||o||null;return s}function ii(e){var t=[],a=null;return e.forEach(function(r){var n=ti(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function St(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var wt=ha.concat(va);function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=St(e.filter(function(h){return wt.includes(h)})),o=St(e.filter(function(h){return!wt.includes(h)})),s=i.filter(function(h){return n=h,!Zt.includes(h)}),l=pe(s,1),f=l[0],d=f===void 0?null:f,c=ni(i),v=u(u({},ii(o)),{},{prefix:be(d,{family:c})});return u(u(u({},v),fi({values:e,family:c,styles:ae,config:m,canonical:v,givenPrefix:n})),oi(r,n,v))}function oi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ra(n):{},o=Y(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ae.far&&ae.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var si=ma.filter(function(e){return e!==O||e!==re}),li=Object.keys(Fe).filter(function(e){return e!==O}).map(function(e){return Object.keys(Fe[e])}).flat();function fi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,d=a===re,c=t.includes("fa-duotone")||t.includes("fad"),v=f.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||v||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&si.includes(a)){var S=Object.keys(s).find(function(w){return li.includes(w)});if(S||f.autoFetchSvg){var g=Cr.get(a).defaultShortPrefixId;r.prefix=g,r.iconName=Y(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=W()||"fas"),r}var ui=function(){function e(){ar(this,e),this.definitions={}}return nr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Na(s,o[s]),Ma()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=f)}),a[s][l]=f}),a}}])}(),At=[],K={},q={},ci=Object.keys(q);function di(e,t){var a=t.mixoutsTo;return At=e,K={},Object.keys(q).forEach(function(r){ci.indexOf(r)===-1&&delete q[r]}),At.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),de(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}r.provides&&r.provides(q)}),a}function De(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=K[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function G(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=K[e]||[];n.forEach(function(i){i.apply(null,a)})}function U(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function ze(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||W();if(t)return t=Y(a,t)||t,yt(za.definitions,a,t)||yt(N.styles,a,t)}var za=new ui,mi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},vi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(G("beforeI2svg",t),U("pseudoElements2svg",t),U("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Jn(function(){pi({autoReplaceSvgRoot:a}),G("watch",t)})}},hi={icon:function(t){if(t===null)return null;if(de(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=be(t[0]);return{prefix:r,iconName:Y(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match($n))){var n=ye(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||W(),iconName:Y(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:Y(i,t)||t}}}},E={noAuto:mi,config:m,dom:vi,parse:hi,library:za,findIconDefinition:ze,toHtml:ie},pi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys(N.styles).length>0||m.autoFetchSvg)&&L&&m.autoReplaceSvg&&E.dom.i2svg({node:r})};function xe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ie(r)})}}),Object.defineProperty(e,"node",{get:function(){if(L){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(tt(o)&&a.found&&!r.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};n.style=ge(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function bi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function yi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function nt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,d=e.watchable,c=d===void 0?!1:d,v=r.found?r:a,h=v.width,S=v.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(j){return f.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(f.classes).join(" "),w={children:[],attributes:u(u({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:f.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(S)})};!yi(f.attributes)&&!f.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[B]="");var x=u(u({},w),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:u({},f.styles)}),P=r.found&&a.found?U("generateAbstractMask",x)||{children:[],attributes:{}}:U("generateAbstractIcon",x)||{children:[],attributes:{}},I=P.children,M=P.attributes;return x.children=I,x.attributes=M,s?bi(x):gi(x)}function kt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[B]="");var f=u({},i.styles);tt(n)&&(f.transform=Xn({transform:n,width:a,height:r}),f["-webkit-transform"]=f.transform);var d=ge(f);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function xi(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=ge(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ie=N.styles;function We(e){var t=e[0],a=e[1],r=e.slice(4),n=pe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Si={found:!1,width:512,height:512};function wi(e,t){!xa&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ue(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=W()),new Promise(function(r,n){if(a==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ie[t]&&Ie[t][e]){var o=Ie[t][e];return r(We(o))}wi(e,t),r(u(u({},Si),{},{icon:m.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}var Pt=function(){},Ye=m.measurePerformance&&se&&se.mark&&se.measure?se:{mark:Pt,measure:Pt},Z='FA "7.0.0"',Ai=function(t){return Ye.mark("".concat(Z," ").concat(t," begins")),function(){return Wa(t)}},Wa=function(t){Ye.mark("".concat(Z," ").concat(t," ends")),Ye.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))},it={begin:Ai,end:Wa},ue=function(){};function It(e){var t=e.getAttribute?e.getAttribute(B):null;return typeof t=="string"}function ki(e){var t=e.getAttribute?e.getAttribute(Qe):null,a=e.getAttribute?e.getAttribute(Ze):null;return t&&a}function Pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ii(){if(m.autoReplaceSvg===!0)return ce.replace;var e=ce[m.autoReplaceSvg];return e||ce.replace}function Oi(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Ei(e){return A.createElement(e)}function Ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Oi:Ei:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ua(o,{ceFn:r}))}),n}function ji(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ce={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ua(n),a)}),a.getAttribute(B)===null&&m.keepOriginalSource){var r=A.createComment(ji(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~et(a).indexOf(m.replacementClass))return ce.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ie(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function Ot(e){e()}function Ya(e,t){var a=typeof t=="function"?t:ue;if(e.length===0)a();else{var r=Ot;m.mutateApproach===Tn&&(r=z.requestAnimationFrame||Ot),r(function(){var n=Ii(),i=it.begin("mutate");e.map(n),i(),a()})}}var ot=!1;function Ha(){ot=!0}function He(){ot=!1}var ve=null;function Et(e){if(dt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?ue:t,r=e.nodeCallback,n=r===void 0?ue:r,i=e.pseudoElementsCallback,o=i===void 0?ue:i,s=e.observeMutationsRoot,l=s===void 0?A:s;ve=new dt(function(f){if(!ot){var d=W();Q(f).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!It(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&It(c.target)&&~Rn.indexOf(c.attributeName))if(c.attributeName==="class"&&ki(c.target)){var v=ye(et(c.target)),h=v.prefix,S=v.iconName;c.target.setAttribute(Qe,h||d),S&&c.target.setAttribute(Ze,S)}else Pi(c.target)&&n(c.target)})}}),L&&ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ni(){ve&&ve.disconnect()}function Ci(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Ti(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=ye(et(e));return n.prefix||(n.prefix=W()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ai(n.prefix,e.innerText)||rt(n.prefix,ja(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Fi(e){var t=Q(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function _i(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ti(e),r=a.iconName,n=a.prefix,i=a.rest,o=Fi(e),s=De("parseNodeAttributes",{},e),l=t.styleParser?Ci(e):[];return u({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $i=N.styles;function Ba(e){var t=m.autoReplaceSvg==="nest"?jt(e,{styleParser:!1}):jt(e);return~t.extra.classes.indexOf(Aa)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function Li(){return[].concat(C(va),C(ha))}function Nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var a=A.documentElement.classList,r=function(c){return a.add("".concat(ht,"-").concat(c))},n=function(c){return a.remove("".concat(ht,"-").concat(c))},i=m.autoFetchSvg?Li():Zt.concat(Object.keys($i));i.includes("fa")||i.push("fa");var o=[".".concat(Aa,":not([").concat(B,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=it.begin("onTree"),f=s.reduce(function(d,c){try{var v=Ba(c);v&&d.push(v)}catch(h){xa||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,c){Promise.all(f).then(function(v){Ya(v,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ba(e).then(function(a){a&&Ya([a],t)})}function Ri(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ze(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:ze(n||{})),e(r,u(u({},a),{},{mask:n}))}}var Di=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,f=a.maskId,d=f===void 0?null:f,c=a.classes,v=c===void 0?[]:c,h=a.attributes,S=h===void 0?{}:h,g=a.styles,w=g===void 0?{}:g;if(t){var x=t.prefix,P=t.iconName,I=t.icon;return xe(u({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),nt({icons:{main:We(I),mask:l?We(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:P,transform:u(u({},F),n),symbol:o,maskId:d,extra:{attributes:S,styles:w,classes:v}})})}},zi={mixout:function(){return{icon:Ri(Di)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Nt,a.nodeCallback=Mi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return Nt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,d=r.extra;return new Promise(function(c,v){Promise.all([Ue(n,i),l.iconName?Ue(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var S=pe(h,2),g=S[0],w=S[1];c([a,nt({icons:{main:g,mask:w},prefix:i,iconName:n,transform:o,symbol:s,maskId:f,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ge(s);l.length>0&&(n.style=l);var f;return tt(o)&&(f=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},Wi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return xe({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},Ui={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,f=l===void 0?{}:l;return xe({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),xi({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},Yi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return xe({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),kt({content:a,transform:u(u({},F),i),extra:{attributes:f,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Jt){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([a,kt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ga=new RegExp('"',"ug"),Ct=[1105920,1112319],Tt=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Nr),Nn),Dr),Be=Object.keys(Tt).reduce(function(e,t){return e[t.toLowerCase()]=Tt[t],e},{}),Hi=Object.keys(Be).reduce(function(e,t){var a=Be[t];return e[t]=a[900]||C(Object.entries(a))[0][1],e},{});function Bi(e){var t=e.replace(Ga,"");return ja(C(t)[0]||"")}function Gi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ga,""),n=r.codePointAt(0),i=n>=Ct[0]&&n<=Ct[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Vi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Be[a]||{})[n]||Hi[a]}function Ft(e,t){var a="".concat(Cn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=Q(e.children),o=i.filter(function(V){return V.getAttribute($e)===t})[0],s=z.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(Ln),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Vi(l,d),S=Bi(v),g=f[0].startsWith("FontAwesome"),w=Gi(s),x=rt(h,S),P=x;if(g){var I=ri(S);I.iconName&&I.prefix&&(x=I.iconName,h=I.prefix)}if(x&&!w&&(!o||o.getAttribute(Qe)!==h||o.getAttribute(Ze)!==P)){e.setAttribute(a,P),o&&e.removeChild(o);var M=_i(),j=M.extra;j.attributes[$e]=t,Ue(x,h).then(function(V){var oe=nt(u(u({},M),{},{icons:{main:V,mask:Da()},prefix:h,iconName:P,extra:j,watchable:!0})),R=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=oe.map(function(Ja){return ie(Ja)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Xi(e){return Promise.all([Ft(e,"::before"),Ft(e,"::after")])}function Ki(e){return e.parentNode!==document.head&&!~Fn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var qi=function(t){return!!t&&ya.some(function(a){return t.includes(a)})},Ji=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,/(?<=\)\)?[^,]*,)/],i=function(){var h=s[o];r=r.flatMap(function(S){return S.split(h).map(function(g){return g.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(v){return v.includes("(")?v:v.split(",").map(function(h){return h.trim()})});var l=fe(r),f;try{for(l.s();!(f=l.n()).done;){var d=f.value;if(qi(d)){var c=ya.reduce(function(v,h){return v.replace(h,"")},d);c!==""&&c!=="*"&&a.add(c)}}}catch(v){l.e(v)}finally{l.f()}return a};function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(L){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=fe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=fe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,d=Ji(f.selectorText),c=fe(d),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;r.add(h)}}catch(g){c.e(g)}finally{c.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(g,w){var x=Q(a).filter(Ki).map(Xi),P=it.begin("searchPseudoElements");Ha(),Promise.all(x).then(function(){P(),He(),g()}).catch(function(){P(),He(),w()})})}}var Qi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=_t,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;m.searchPseudoElements&&_t(n)}}},$t=!1,Zi={mixout:function(){return{dom:{unwatch:function(){Ha(),$t=!0}}}},hooks:function(){return{bootstrap:function(){Et(De("mutationObserverCallbacks",{}))},noAuto:function(){Ni()},watch:function(a){var r=a.observeMutationsRoot;$t?He():Et(De("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Lt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},eo={mixout:function(){return{parse:{transform:function(a){return Lt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Lt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(f," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),h.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function to(e){return e.tag==="g"?e.children:[e]}var ao={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?ye(n.split(" ").map(function(o){return o.trim()})):Da();return i.prefix||(i.prefix=W()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,f=i.width,d=i.icon,c=o.width,v=o.icon,h=Vn({transform:l,containerWidth:c,iconWidth:f}),S={tag:"rect",attributes:u(u({},Oe),{},{fill:"white"})},g=d.children?{children:d.children.map(Mt)}:{},w={tag:"g",attributes:u({},h.inner),children:[Mt(u({tag:d.tag,attributes:u(u({},d.attributes),h.path)},g))]},x={tag:"g",attributes:u({},h.outer),children:[w]},P="mask-".concat(s||gt()),I="clip-".concat(s||gt()),M={tag:"mask",attributes:u(u({},Oe),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,x]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:to(v)},M]};return r.push(j,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(P,")")},Oe)}),{children:r,attributes:n}}}},ro={provides:function(t){var a=!1;z.matchMedia&&(a=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},no={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},io=[qn,zi,Wi,Ui,Yi,Qi,Zi,eo,ao,ro,no];di(io,{mixoutsTo:E});E.noAuto;var oo=E.config;E.library;E.dom;var Ge=E.parse;E.findIconDefinition;E.toHtml;var so=E.icon;E.layer;E.text;E.counter;var Ee={exports:{}},je,Rt;function lo(){if(Rt)return je;Rt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return je=e,je}var Ne,Dt;function fo(){if(Dt)return Ne;Dt=1;var e=lo();function t(){}function a(){}return a.resetWarningCache=t,Ne=function(){function r(o,s,l,f,d,c){if(c!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return i.PropTypes=i,i},Ne}var zt;function uo(){return zt||(zt=1,Ee.exports=fo()()),Ee.exports}var co=uo();const p=Qa(co);var mo={};function Ve(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function vo(e){if(Array.isArray(e))return e}function ho(e){if(Array.isArray(e))return Ve(e)}function D(e,t,a){return(t=Ao(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function po(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function go(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){f=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function bo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(a),!0).forEach(function(r){D(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Wt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function xo(e,t){if(e==null)return{};var a,r,n=So(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function So(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Ut(e,t){return vo(e)||go(e,t)||Va(e,t)||bo()}function Xe(e){return ho(e)||po(e)||Va(e)||yo()}function wo(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ao(e){var t=wo(e,"string");return typeof t=="symbol"?t:t+""}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function Va(e,t){if(e){if(typeof e=="string")return Ve(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ve(e,t):void 0}}var ko="7.0.0-alpha1",Ke;try{var Po=require("@fortawesome/fontawesome-svg-core/package.json");Ke=Po.version}catch{Ke=mo.FA_VERSION||"7.0.0-alpha8"}function Io(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,f=e.spinReverse,d=e.pulse,c=e.fixedWidth,v=e.inverse,h=e.border,S=e.listItem,g=e.flip,w=e.size,x=e.rotation,P=e.pull,I=e.swapOpacity,M=e.rotateBy,j=e.widthAuto,V=Oo(Ke,ko),oe=D(D(D(D(D(D({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":c,"fa-inverse":v,"fa-border":h,"fa-li":S,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},"fa-".concat(w),typeof w<"u"&&w!==null),"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),"fa-pull-".concat(P),typeof P<"u"&&P!==null),"fa-swap-opacity",I),"fa-rotate-by",V&&M),"fa-width-auto",V&&j);return Object.keys(oe).map(function(R){return oe[R]?R:null}).filter(function(R){return R})}function Oo(e,t){for(var a=e.split("-"),r=Ut(a,2),n=r[0],i=r[1],o=t.split("-"),s=Ut(o,2),l=s[0],f=s[1],d=n.split("."),c=l.split("."),v=0;v<Math.max(d.length,c.length);v++){var h=d[v]||"0",S=c[v]||"0",g=parseInt(h,10),w=parseInt(S,10);if(g!==w)return g>w}for(var x=0;x<Math.max(d.length,c.length);x++){var P=d[x]||"0",I=c[x]||"0";if(P!==I&&P.length!==I.length)return P.length<I.length}return!(i&&!f)}function Eo(e){return e=e-0,e===e}function Xa(e){return Eo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var jo=["style"];function No(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Co(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=Xa(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[No(n)]=i:t[n]=i,t},{})}function Ka(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ka(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,f){var d=t.attributes[f];switch(f){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=Co(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=d:l.attrs[Xa(f)]=d}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=xo(a,jo);return n.attrs.style=T(T({},n.attrs.style),o),e.apply(void 0,[t.tag,T(T({},n.attrs),s)].concat(Xe(r)))}var qa=!1;try{qa=!0}catch{}function To(){if(!qa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yt(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ge.icon)return Ge.icon(e);if(e===null)return null;if(e&&he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ce(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?D({},e,t):{}}var Ht={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},st=Gt.forwardRef(function(e,t){var a=T(T({},Ht),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,f=a.maskId,d=Yt(r),c=Ce("classes",[].concat(Xe(Io(a)),Xe((o||"").split(" ")))),v=Ce("transform",typeof a.transform=="string"?Ge.transform(a.transform):a.transform),h=Ce("mask",Yt(n)),S=so(d,T(T(T(T({},c),v),h),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!S)return To("Could not find icon",d),null;var g=S.abstract,w={ref:t};return Object.keys(a).forEach(function(x){Ht.hasOwnProperty(x)||(w[x]=a[x])}),Fo(g[0],w)});st.displayName="FontAwesomeIcon";st.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),rotateBy:p.bool,shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool,widthAuto:p.bool};var Fo=Ka.bind(null,Gt.createElement);oo.autoAddCss=!1;const H=e=>y.jsx(st,{...e});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var _o={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},$o=_o,Lo={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},Mo={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"]},Ro={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Do=Ro,zo={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Bt={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};const Wo=({posts:e,pathname:t})=>{const[a,r]=Za.useState(null),n=e.sort((l,f)=>f.data.pubDate.valueOf()-l.data.pubDate.valueOf()),i=t.startsWith("/blog"),o=(l,f)=>{const d=l.currentTarget;if(d.scrollWidth>d.clientWidth){const c=d.getBoundingClientRect();r({top:c.top,left:c.left,width:c.width,title:f.data.title,url:`/blog/${f.slug}`})}},s=()=>{r(null)};return y.jsxs("div",{className:k.sidebarContent,children:[i?y.jsxs("div",{className:k.sidebarSection,children:[y.jsx("h3",{className:k.sidebarSectionHeader,children:"POSTS"}),y.jsx("ul",{className:k.postList,children:n.map(l=>{const f=`/blog/${l.slug}`,d=t===f;return y.jsx("li",{children:y.jsxs("a",{href:f,className:`${k.postLink} ${d?k.active:""}`,onMouseEnter:c=>o(c,l),onMouseLeave:s,children:[y.jsx(H,{icon:Bt,className:k.fileIcon}),y.jsx("span",{children:l.data.title})]})},l.slug)})})]}):y.jsxs("div",{className:k.sidebarSection,children:[y.jsx("h3",{className:k.sidebarSectionHeader,children:"NAVIGATION"}),y.jsxs("ul",{className:k.postList,children:[y.jsx("li",{children:y.jsxs("a",{href:"/blog",className:`${k.postLink} ${t.startsWith("/blog")?k.active:""}`,children:[y.jsx(H,{icon:Lo,className:k.fileIcon}),y.jsx("span",{children:"Blog"})]})}),y.jsx("li",{children:y.jsxs("a",{href:"#",className:`${k.postLink} ${t==="/about"?k.active:""}`,children:[y.jsx(H,{icon:zo,className:k.fileIcon}),y.jsx("span",{children:"About"})]})})]})]}),a&&y.jsxs("a",{href:a.url,className:`${k.postLink} ${k.floatingItem}`,style:{top:`${a.top}px`,left:`${a.left}px`,minWidth:`${a.width}px`},children:[y.jsx(H,{icon:Bt,className:k.fileIcon}),y.jsx("span",{children:a.title})]})]})},Bo=({posts:e,pathname:t})=>y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:k.sidebarNav,children:[y.jsx("button",{className:k.sidebarNavButton,children:y.jsx(H,{icon:Mo})}),y.jsx("button",{className:k.sidebarNavButton,children:y.jsx(H,{icon:$o})}),y.jsx("button",{className:k.sidebarNavButton,children:y.jsx(H,{icon:Do})})]}),y.jsx(Wo,{posts:e,pathname:t})]});export{Bo as default};
