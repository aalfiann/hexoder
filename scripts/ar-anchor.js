var arAnchor=0===$("#postAr").length||0===$(".headerlink").length||$(window).width()<900?function(){}:function(){var a=$(".post-content").find(".headerlink"),n=$('<div class="arCatalog"><div class="arCatalog-line"></div><div class="arCatalog-list"><dl></dl></div>'),t=1,e=1;a.each(function(o){var i=$(this),d="",l=$('<dd><span class="arCatalog-index"></span><a></a><span class="arCatalog-dot"></span></dd>');"H3"===a[o].parentElement.tagName?(d=--t+"."+e++,l.addClass("arCatalog-tack2")):(d=t,e=1,l.addClass("arCatalog-tack1")),t++,l.find(".arCatalog-index").text(d),l.find("a").attr("href","#"),l.find("a").text(i[0].title),l.appendTo(n.find("dl")[0])});var o=parseInt(((document.all?"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight:self.innerHeight)-180)/28),i=a.length>o?28*o+10:28*a.length+10;n.find(".arCatalog-line").css("height",i),n.find(".arCatalog-list").css("maxHeight",i-10),n.find("dd").eq(0).addClass("on"),n.appendTo($("#arAnchorBar")[0]);var d=a.length,l=n.find("dd"),s=l[0].offsetHeight||0;viewRange=[];var r=l.offset().top-f(),c=r+8*s-s/2;function f(){return document.body.scrollTop+document.documentElement.scrollTop}viewRange.push(r),viewRange.push(c),$(window).scroll(function(){a.each(function(a){var t=$(this);t.offset().top-82<=f()&&(n.find("dd").removeClass("on"),n.find("dd").eq(a).addClass("on"))}),function(){var a=n.find("dd.on"),t=a.index(),e=a.offset().top-f(),o=n.find(".arCatalog-list"),i=o[0].scrollTop,l=parseInt(i/28);if(e>viewRange[1]){var r=d-t;r>=8?o.animate({scrollTop:s*(l+8)},300,"swing"):r<8&&o.animate({scrollTop:s*(l+r)},300,"swing")}else if(e<viewRange[0]){var c=t;c>=8?o.animate({scrollTop:s*(l-8)},300,"swing"):c<8&&o.animate({scrollTop:0},300,"swing")}}()}),n.find("a").each(function(n){$(this).click(function(t){t.preventDefault(),$("html,body").animate({scrollTop:a.eq(n).offset().top-80},300,"swing")})})};