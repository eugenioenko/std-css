var sdf=function(){"use strict";var t=[],e=[],r=[],n=[];return{addWidget:function(e){t.push(e)},addGadget:function(t){e.push(t)},addComponent:function(t){r.push(t)},gadgets:e,elements:n,init:function(){if(void 0===window.sdf)throw new Error("sdf controller not initialized");for(var s=0;s<t.length;++s)for(var o=document.querySelectorAll(t[s].selector),i=0;i<o.length;++i)n.push(new t[s].constructor(o[i]));for(s=0;s<r.length;s++)sdf[r[s].name]=r[s].constructor;for(s=0;s<e.length;s++)sdf[e[s].name]=new e[s].constructor}}}();window.addEventListener("load",function(){sdf.init()}),function(){sdf.addComponent({constructor:function(t,e){var r=function(t){return 0==t.length},n=function(t){if(t.length!=arguments.length-1)return!1;for(var e=0;e<t.length;++e)if("any"===arguments[e+1])t[e]=t[e].toString();else if("str|obj"===arguments[e+1])"string"!=typeof t[e]&&"object"!=typeof t[e]&&(t[e]=t[e].toString());else if(typeof t[e]!==arguments[e+1])return!1;return!0},s=function(t){return 0==t.length},o=function(t){for(var e=t.split(" "),r=0;r<e.length;++r)e[r]=e[r].replace(" ","");return e};e=void 0===e?-1:e;var i=[];return arguments.length?"string"==typeof t?1==e?i.push(document.querySelector(t)):(i=document.querySelectorAll(t),-1!=e&&(i.length=e)):"object"==typeof t&&t instanceof Node?(i.push(t),t=!1):(console.error(t+" is not a string, 'query' requires a string as selector"),t=!1):t=!1,{selector:t,nodes:i,length:i.length,on:function(t,e){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for on method"),this;if(!n(arguments,"string","function"))throw new Error("'on' requires event {string} and method {function}");for(var s=0;s<this.nodes.length;++s)this.nodes[s].addEventListener(t,e);return this},each:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for each"),this;if(n(arguments,"function"))for(var e=0;e<this.nodes.length;++e)t.call(this.nodes[e]);else console.error(t+" is not a function, 'each' requires a function as argument");return this},html:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for html"),this;if(s(arguments))return this.nodes[0].innerHTML;if(n(arguments,"any"))for(var e=0;e<this.nodes.length;++e)this.nodes[e].innerHTML=t;else console.error("'html' takes value {any} as argument or no arguments.");return this},text:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(s(arguments))return this.nodes[0].textContent;if(n(arguments,"any"))for(var e=0;e<this.nodes.length;++e)this.nodes[e].textContent=t;else console.error("'text' takes value {any} as argument or no arguments.");return this},attr:function(t,e){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(s(arguments))return console.error("'attr' requires at least one argument as attribute{string}"),this;if(1==arguments.length)return n(arguments,"string")?this.nodes[0].getAttribute(t):(console.error("'attr' takes attribute {string} as argument for getter"),this);if(n(arguments,"string","any"))for(var o=0;o<this.nodes.length;++o)this.nodes[o].setAttribute(t,e);else console.error("'attr' takes two attribute {string}, value{any} as setter");return this},css:function(t,e){var o=0;if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(s(arguments))return console.error("'css' requires at least one argument as style {string}"),this;if(1==arguments.length){if(n(arguments,"string"))return this.nodes[0].style[t];if(n(arguments,"object")){for(e=t,o=0;o<this.nodes.length;++o)for(var i in e)e.hasOwnProperty(i)&&(this.nodes[o].style[i]=e[i]);return this}return console.error("'css' takes style {string} as argument for getter or object as setter"),this}if(!n(arguments,"string","str|obj"))return console.error("'css' takes value {string|object} as argument"),this;for(o=0;o<this.nodes.length;++o)this.nodes[o].style[t]=e;return this},removeAttr:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for append"),this;if(!n(arguments,"any"))return console.error("'append' takes string{any} as argument"),this;for(var e=0;e<this.nodes.length;++e)this.nodes[e].removeAttribute(t);return this},value:function(t){if(r(this.nodes))return console.error("No inputs with selector: "+this.selector+" for value"),this;if(s(arguments))return this.nodes[0].value;if(n(arguments,"any"))for(var e=0;e<this.nodes.length;++e)this.nodes[e].value=t;else console.error("'value' takes value {string} as argument or no arguments.");return this},create:function(t,e){if(n(arguments,"string","string")){var r=document.createElement(t);return r.innerHTML=e,r}return console.error("'create' takes type{string} and html{string} as argument"),this},element:function(){return r(this.nodes)?(console.error("No elements with selector: "+this.selector+" for value"),this):this.nodes[0]},first:function(){return this.element()},append:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for append"),this;if(n(arguments,"str|obj"))if("string"==typeof t)for(var e=0;e<this.nodes.length;++e)this.nodes[e].innerHTML+=t;else this.nodes[0].appendChild(t);else console.error("'append' takes value{string|node} as argument");return this},prepend:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for prepend"),this;if(n(arguments,"string"))for(var e=0;e<this.nodes.length;++e)this.nodes[e].innerHTML=t+this.nodes[e].innerHTML;else console.error("'prepend' takes string{string} as argument");return this},addClass:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for addClass"),this;if(!n(arguments,"string"))return console.error("'addClass' takes classList{string} as argument"),this;for(var e=o(t),s=0;s<this.nodes.length;++s)for(var i=0;i<e.length;++i)""!=e[i]&&this.nodes[s].classList.add(e[i]);return this},removeClass:function(t){if(r(this.nodes))return console.error("No elements with selector: "+this.selector+" for removeClass"),this;if(!n(arguments,"string"))return console.error("'removeClass' takes classList{string} as argument"),this;for(var e=o(t),s=0;s<this.nodes.length;++s)for(var i=0;i<e.length;++i)""!=e[i]&&this.nodes[s].classList.remove(e[i]);return this},remove:function(){for(var t=0;t<this.nodes.length;++t)this.nodes[t].parentNode.removeChild(this.nodes[t]);return this.nodes=[],this.selector=null,this.length=0,this}}},name:"$"})}(),function(){"use strict";var t=function(){this.id=0,this.toasts=[],this.containers={},this.createContainers()};t.prototype.createContainers=function(){for(var t=["top","bottom"],e=0;e<t.length;++e){var r=t[e];if(!document.querySelector(".sdf-toast-container-"+r)){var n=document.createElement("div");n.className="sdf-toast-container-"+r,document.body.appendChild(n),this.containers[r]=n}}},t.prototype.createButton=function(t){var e={text:"OK",class:"sdf-btn sdf-primary",action:!1};if(void 0!==t)for(var r in t)e[r]=t[r];var n=document.createElement("button");return n.className=e.class,n.innerHTML=e.text,e.action,n.addEventListener("click",function(t,e,r){return function(){t&&t.bind(e)(),e.hide(r)}}(e.action,this,this.id)),n},t.prototype.createButtonGroup=function(t){var e=document.createElement("div");e.className="sdf-alert-footer sdf-btn-group "+t.group;for(var r=0;r<t.buttons.length;++r)e.appendChild(this.createButton(t.buttons[r]));return e},t.prototype.createBody=function(t,e){var r=document.createElement("div");return r.className="sdf-alert-body "+e+" ",r.innerHTML+=t,r},t.prototype.hide=function(t){this.toasts[t]&&("top"==this.toasts[t].getAttribute("data-position")?this.toasts[t].style.bottom="0":this.toasts[t].style.top="0",setTimeout(function(t,e){return function(){t[e].remove(),t[e]=!1}}(this.toasts,t),1e3))},t.prototype.show=function(t,e){var r={class:"sdf-primary",align:"sdf-text-center",position:"bottom",group:"sdf-horizontal-right",duration:4e3,buttons:[]};if(void 0!==e)for(var n in e)r[n]=e[n];var s=this.containers[r.position],o="sdf-toast-"+this.id,i=document.createElement("div");return i.setAttribute("id",o),i.className="sdf-alert sdf-toast sdf-toast-"+r.position+" "+r.class,i.setAttribute("data-position",r.position),i.appendChild(this.createBody(t,r.align)),r.buttons.length&&i.appendChild(this.createButtonGroup(r)),"top"==r.position?i.style.bottom="0":i.style.top="0",s.appendChild(i),this.toasts.push(i),"top"==r.position?i.style.bottom="-"+i.clientHeight+"px":i.style.top="-"+i.clientHeight+"px",setTimeout(function(t,e){return function(){t.hide(e)}}(this,this.id),r.duration),this.id++},sdf.addGadget({constructor:t,name:"toast"})}(),function(){"use strict";var t=function(){this.popups={},this.selector="[sdf-dropdown-menu]",this.init()};t.prototype.hide=function(t){var e=this.popups[t];e&&(e.open=!1,e.element.style.display="none",e.element.setAttribute("aria-hidden","true"),e.toggle&&e.toggle.setAttribute("aria-expanded","false"))},t.prototype.hideAll=function(){for(var t in this.popups)this.popups.hasOwnProperty(t)&&1==this.popups[t].open&&this.hide(t)},t.prototype.show=function(t){var e=this.popups[t];e&&(e.open=!0,e.element.style.display="block",e.element.setAttribute("aria-hidden","false"),e.toggle&&e.toggle.setAttribute("aria-expanded","true"))};var e=function(t,e){return function(){t.hide(e)}};t.prototype.init=function(){for(var t=document.querySelectorAll(this.selector),r=t.length-1;r>=0;r--){var n=t[r],s=n.getAttribute("id");s||(s="sdf-dropdown-"+r,n.setAttribute("id",s)),n.setAttribute("aria-hidden","true");var o=document.querySelector('[sdf-dropdown-toggle="'+s+'"]');o&&o.setAttribute("aria-expanded","false"),n.getAttribute("sdf-dropdown-menu")||n.setAttribute("sdf-dropdown-menu","top-left"),this.popups[s]={element:n,toggle:o,open:!1},n.addEventListener("click",e(this,s))}},sdf.addGadget({constructor:t,name:"dropdown"})}(),function(){var t=function(t){this.element=t,this.target=t.getAttribute("sdf-dropdown-toggle"),this.initialize()};t.prototype.clickEvent_=function(){"false"==this.element.getAttribute("aria-expanded")?sdf.dropdown.show(this.target):sdf.dropdown.hide(this.target)},t.prototype.initialize=function(){document.getElementById(this.target)&&(this.element.setAttribute("aria-haspopup","true"),this.clickEvent=this.clickEvent_.bind(this),this.element.addEventListener("click",this.clickEvent))},sdf.addWidget({constructor:t,selector:"[sdf-dropdown-toggle]"})}();