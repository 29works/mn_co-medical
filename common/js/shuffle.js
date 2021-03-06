
//The MIT License (MIT)

//Copyright (c) 2014-2016 Glen Cheney

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.


// IMPORTANT!
// If you're already using Modernizr, delete it from this file. If you don't know what Modernizr is, leave it :)

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransforms=function(){return!!E("transform")},p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},p.csstransitions=function(){return E("transition")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e.prefixed=function(a,b,c){return b?E(a,b,c):E(a,"pfx")},e}(this,this.document);

/**
 * jQuery Shuffle Plugin
 * Uses CSS Transforms to filter down a grid of items (degrades to jQuery's animate).
 * Inspired by Isotope http://isotope.metafizzy.co/
 * Use it for whatever you want!
 * @author Glen Cheney (http://glencheney.com)
 * @version 1.5.2
 * @date 10/24/12
 */
;(function(d,g){d.fn.sorted=function(b){var c=d.extend({},d.fn.sorted.defaults,b),b=this.get();c.by!==d.noop&&(null!==c.by&&void 0!==c.by)&&b.sort(function(a,b){var f=c.by(d(a)),h=c.by(d(b));return f<h?-1:f>h?1:0});c.reverse&&b.reverse();return b};d.fn.sorted.defaults={reverse:!1,by:null};var i=function(b,c){var a=this;d.extend(a,d.fn.shuffle.options,c,d.fn.shuffle.settings);a.$container=b;a.$items=a.$container.children();a.$item=a.$items.first();a.marginTop=parseInt(a.$item.css("marginTop"),10);a.marginRight=
parseInt(a.$item.css("marginRight"),10);a.transitionName=a.prefixed("transition");a.transform=a.getPrefixed("transform");a.transitionEndName={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[a.transitionName];a.itemCss={position:"absolute",top:0,left:0,opacity:1};a.$container.css("position","relative").get(0).style[a.transitionName]="height "+a.speed+"ms "+a.easing;a.$items.each(function(){d(this).css(a.itemCss);
a.supported&&(this.style[a.transitionName]=a.transform+" "+a.speed+"ms "+a.easing+", opacity "+a.speed+"ms "+a.easing);this.style.marginTop=0;this.style.marginRight=0});a.itemWidth=a.$item.outerWidth();a.itemHeight=a.$item.outerHeight(true);a.itemsPerRow=a.getItemsPerRow();a.windowHeight=d(window).height();a.windowWidth=d(window).width();d(window).on("resize.shuffle",function(){var b=d(window).height(),c=d(window).width();if(c!==a.windowWidth||b!==a.windowHeight)a.resized(),a.windowHeight=b,a.windowWidth=
c});if(0===a.itemWidth||0===a.itemHeight)d(window).on("load.shuffle",function(){a.itemWidth=a.$item.outerWidth();a.itemHeight=a.$item.outerHeight(true);a.itemsPerRow=a.getItemsPerRow();a.shuffle(a.group)});else a.shuffle(a.group)};i.prototype={constructor:i,shuffle:function(b){var c=this;b||(b="all");c.$items.removeClass("concealed filtered");d.isFunction(b)?c.$items.each(function(){var a=d(this);a.addClass(b(a,c)?"filtered":"concealed")}):(c.group=b,"all"!==b?c.$items.each(function(){var a=d(this).data("groups");
-1===d.inArray(b,a)?d(this).addClass("concealed"):d(this).addClass("filtered")}):c.$items.addClass("filtered"));c.visibleItems=c.$items.filter(".filtered").length;c.fire("shrink");c.shrink();c.fire("filter");c.filter();c.resizeContainer()},getItemsPerRow:function(){var b=this.$container.width(),c=Math.floor(b/this.itemWidth);c*(this.itemWidth+this.marginRight)-this.marginRight>b&&(c-=1);return c},resizeContainer:function(){var b=Math.ceil(this.visibleItems/this.itemsPerRow)*(this.itemHeight+this.marginTop)-
this.marginTop;this.$container.css("height",b+"px")},fire:function(b){this.$container.trigger(b+".shuffle",[this])},shrink:function(){var b=this,c=b.$items.filter(".concealed");0!==c.length&&(b.shrinkTransitionEnded=!1,c.each(function(){var a=d(this),c=parseInt(a.attr("data-x"),10),f=parseInt(a.attr("data-y"),10);c||(c=0);f||(f=0);b.transition({from:"shrink",$this:a,x:c,y:f,left:c+b.itemWidth/2+"px",top:f+b.itemHeight/2+"px",scale:0.001,opacity:0,height:"0px",width:"0px",callback:b.shrinkEnd})}))},
layout:function(b,c){var a=this,e=0;0!==b.length&&(a.layoutTransitionEnded=!1,d.each(b,function(f){var h=d(b[f]),g=f%a.itemsPerRow*(a.itemWidth+a.marginRight),i=Math.floor(f/a.itemsPerRow);0===f%a.itemsPerRow&&(e=i*(a.itemHeight+a.marginTop));h.attr({"data-x":g,"data-y":e});a.transition({from:"layout",$this:h,x:g,y:e,left:g+"px",top:e+"px",scale:1,opacity:1,height:a.itemHeight+"px",width:a.itemWidth+"px",callback:c})}))},filter:function(){if(this.keepSorted&&this.lastSort)this.sort(this.lastSort,
!0);else{var b=this.$items.filter(".filtered").get();this.layout(b,this.filterEnd)}},sort:function(b,c){var a=this,d=a.$items.filter(".filtered").sorted(b);a.layout(d,function(){c&&a.filterEnd();a.sortEnd()});a.lastSort=b},setPrefixedCss:function(b,c,a){b.css(this.prefixed(c),a)},getPrefixed:function(b){return(b=this.prefixed(b))?b.replace(/([A-Z])/g,function(b,a){return"-"+a.toLowerCase()}).replace(/^ms-/,"-ms-"):b},transition:function(b){var c=this,a,d=function(){!c.layoutTransitionEnded&&"layout"===
b.from?(b.callback.call(c),c.layoutTransitionEnded=!0):!c.shrinkTransitionEnded&&"shrink"===b.from&&(b.callback.call(c),c.shrinkTransitionEnded=!0)};c.supported?(a=c.threeD?"translate3d("+b.x+"px, "+b.y+"px, 0) scale3d("+b.scale+", "+b.scale+", 1)":"translate("+b.x+"px, "+b.y+"px) scale("+b.scale+", "+b.scale+")",b.$this.css("opacity",b.opacity),c.setPrefixedCss(b.$this,"transform",a),b.$this.one(c.transitionEndName,d)):b.$this.stop().animate({left:b.left,top:b.top,opacity:b.opacity,height:b.height,
width:b.width},c.speed,"swing",d)},resized:function(){this.itemWidth=this.$items.filter(".filtered").outerWidth();this.itemHeight=this.$items.filter(".filtered").outerHeight(true);this.itemsPerRow=this.getItemsPerRow();this.filter();this.resizeContainer()},shrinkEnd:function(){this.fire("shrunk")},filterEnd:function(){this.fire("filtered")},sortEnd:function(){this.fire("sorted")},destroy:function(){this.$container.removeAttr("style").removeData("shuffle");d(window).off(".shuffle");this.$items.removeAttr("style data-y data-x").removeClass("concealed filtered")}};
d.fn.shuffle=function(b,c){return this.each(function(){var a=d(this),e=a.data("shuffle");e||(e=new i(a,b),a.data("shuffle",e));d.isFunction(b)?e.shuffle(b):"string"===typeof b&&("sort"===b?e.sort(c):"destroy"===b?e.destroy():e.shuffle(b))})};d.fn.shuffle.options={group:"all",speed:800,easing:"ease-out",keepSorted:!0};d.fn.shuffle.settings={supported:g.csstransforms&&g.csstransitions,prefixed:g.prefixed,threeD:g.csstransforms3d}})(jQuery,Modernizr);



