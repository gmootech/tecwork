function calculate_clipped_circle(){jQuery(".clipped-info-circle").each(function(){var a=jQuery(this).data("circle-type"),b=jQuery(this).data("half-percentage"),c=jQuery(this).children().data("responsive-circle");if("on"==c){var d=jQuery(this).children().data("responsive-breakpoint"),e=jQuery(window).width(),a=jQuery(this).data("circle-type");if(e>d){var f=jQuery(this).data("first-height");"undefined"!=typeof f&&""!=f&&jQuery(this).height(f),jQuery(this).width("100%"),make_info_circle(".info-c-full-br",resizedd)}}var g=jQuery(this).find(".info-circle-icons").outerHeight(),h=jQuery(this).find(".info-circle-icons").outerHeight();if("full-circle"!=a){var i=jQuery(this).outerHeight(),j=(jQuery(this).outerWidth(),jQuery(this).css("margin-top")),k=jQuery(this).css("margin-bottom"),l=jQuery(this).children().outerWidth(),m=parseInt(jQuery(this).find(".info-c-full").css("margin-top").replace(/[^-\d\.]/g,"")),n=parseInt(jQuery(this).find(".info-c-full").css("padding-top").replace(/[^-\d\.]/g,""));if("top-circle"==a||"bottom-circle"==a){jQuery(this).css({overflow:"hidden"});var o=(jQuery(this).find(".info-c-full").outerWidth(),jQuery(this).find(".info-c-full").width());if("top-circle"==a){var p=b/100*i;jQuery(this).css({"padding-top":j,height:p,"margin-bottom":0});var q=p-m-parseInt(j.replace(/[^-\d\.]/g,""))-n-n/2;jQuery(this).find(".info-c-full-wrap").css({height:q})}else if("bottom-circle"==a){var r=(100-b)/100*i,p=i-r+10;jQuery(this).css({"padding-bottom":k,height:p,"margin-top":0}),jQuery(this).children().css({"margin-top":-(r+g/2)});var q=p-m-parseInt(j.replace(/[^-\d\.]/g,""))-n-n/2;jQuery(this).find(".info-c-full-wrap").height(q);var s=o-q;jQuery(this).find(".info-c-full-wrap").css({"margin-top":s+"px"})}}else if("left-circle"==a||"right-circle"==a){jQuery(this).css({overflow:"hidden","padding-top":j,"padding-bottom":k});var o=(jQuery(this).find(".info-c-full").outerWidth(),jQuery(this).find(".info-c-full").width());if("left-circle"==a){var t=b/100*l;jQuery(this).css({width:t,"padding-left":j}),jQuery(this).children().css({width:l,"max-width":l});var u=t-m-(n+n/2)-parseInt(j.replace(/[^-\d\.]/g,""));jQuery(this).find(".info-c-full-wrap").width(u)}else if("right-circle"==a){var v=(100-b)/100*l,t=parseInt(l-v);jQuery(this).css({width:t,"padding-right":j}),jQuery(this).children().css({"margin-left":-(v+h/2),"max-width":l,width:l});var w=v-m;w=w+parseInt(j.replace(/[^-\d\.]/g,""))-n;var u=t-m-parseInt(j.replace(/[^-\d\.]/g,""))-n,x=w;jQuery(this).find(".info-c-full-wrap").width(u),jQuery(this).find(".info-c-full-wrap").css({"margin-left":x+"px"})}}}if("on"==c){var d=jQuery(this).children().data("responsive-breakpoint"),e=jQuery(window).width();e<=d&&jQuery(this).css({width:"auto",overflow:"visible",height:"auto",padding:0})}})}function info_circle_slide(a,b){b.bsf_appear(function(){setInterval(function(){if("on"==b.attr("data-slide-true")){var a=1*b.attr("data-slide-number"),c=b.find(".info-circle-icons").length;"full"!=b.data("info-circle-angle")?c-1==a&&(a=0):c==a&&(a=0);var d=b.find(".info-circle-icons").eq(a);b.attr("data-slide-number",a+1),show_next_info_circle(d)}},a)})}function show_next_info_circle(a){var b=a.parents(".info-c-full-br").data("highlight-style");""!=b&&(a.parents(".info-c-full-br").find("."+b).removeClass(b).removeClass("info-cirlce-active"),a.addClass(b).addClass("info-cirlce-active"));var c=a.next(),d=a.parents(".info-c-full-br").data("icon-show-size");"not-show"==a.parents(".info-c-full-br").data("icon-show")&&(c.find("i").remove(),c.find("img").remove(),a.parents(".info-c-full-br").find(".info-c-full").addClass("cirlce-noicon")),c=c.html();var e=(a.css("font-size"),a.attr("style"),a.parents(".info-c-full-br"));e.find(".info-c-full-wrap").stop().animate({opacity:0},"slow",function(){a.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(c),e.find(".info-c-full i").css({"font-size":parseInt(d)+"px"}),e.find(".info-c-full img").css({width:parseInt(d)+"px"}),a.parents(".info-c-full-br").find(".info-c-full-wrap").animate({opacity:1},"slow")})}function responsive_check(a){jQuery(a).each(function(){if("on"==jQuery(this).data("responsive-circle")){var a=jQuery(this).parent(),b=a.data("uniqid"),c=jQuery(this).data("responsive-breakpoint"),d="info-circle-wrapper-"+b,e="<style>@media(max-width:"+c+"px){ #"+d+" .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #"+d+" .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";jQuery("head").append(e);var f=jQuery(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),g=f.find(".icon_list_item").clone();f.find(".icon_list_item").remove();var h=jQuery(this).next().data("content_bg"),i=jQuery(this).next().data("content_color");jQuery(this).find(".icon-circle-list .info-details").each(function(){var a=jQuery(this).attr("data-icon-class"),b=jQuery(this).find(".info-circle-heading").html(),c=jQuery(this).find(".info-circle-text").html(),d=jQuery(this).prev().css("background-color"),e=jQuery(this).prev().css("color"),j=jQuery(this).prev().css("border"),k=jQuery(this).find(".info-circle-sub-def").children().eq(0).clone();g.find(".icon_list_icon").html(k.wrap("<div />").parent().html()),g.find(".icon_description").css("color",i),g.find(".icon_description").css("background-color",h),g.find(".icon_description h3").html(b),g.find(".icon_description p").html(c),g.find(".icon_list_icon").css({"background-color":d,color:e,border:j}),g.addClass(a),f.append(g.wrap("<div />").parent().html())})}})}function make_info_circle(a,b){jQuery(a).each(function(a,b){var c=jQuery(b).data("icon-size");jQuery(jQuery(b).find(".icon-circle-list .info-circle-icons")).each(function(a,d){var e,f,g,h,i=!!jQuery(d).hasClass("info-circle-icon-without-background");i?(e=f=h=c,g=c/2):(e=f=h=2*c,g=c),jQuery(b).parent().css({"margin-top":g+10+"px","margin-bottom":g+10+"px"}),jQuery(b).find(".icon-circle-list .info-circle-icons").css({"font-size":c+"px",height:e+"px",width:f+"px",margin:"-"+(g+"px"),"line-height":h+"px"})})}),".info-c-full-br"==a&&jQuery(a).each(function(){jQuery(this).css("height",jQuery(this).width()),jQuery(this).css("opacity","1")}),".info-c-semi-br"==a&&jQuery(a).each(function(){var a=jQuery(this).width();jQuery(this).css("height",parseInt(a)/2+"px");var a=a+"px "+a+"px  0 0";jQuery(this).css("border-radius",a);var b=jQuery(this).find(".info-c-full").width();b=b+"px "+b+"px 0 0",jQuery(this).find(".info-c-full").css("border-radius",b)}),setTimeout(function(){b==resizedd&&(".info-c-full-br"==a&&part_circle_icon(a),".info-c-semi-br"==a&&semi_circle_icon(a))},1e3)}function part_circle_icon(a){jQuery(a).each(function(){jQuery(this).bsf_appear(function(){if("none"!=jQuery(this).css("display")){var a=jQuery(this).find(".icon-circle-list .info-circle-icons").length,b=new Array,c=jQuery(this).outerWidth()/2,d=0,e=jQuery(this).data("start-degree");"undefined"==typeof e&&""==e||(d=e);var f=180/a,g=jQuery(this).data("info-circle-angle"),h=jQuery(this).data("divert"),i="";"full"==g&&(i=g,g=180,f=90,c=-c);var j=0,k=!1;for(m=1;m<=a;m++){var l=m*((180+2*f)/a);"full"==i?(l<d&&1==m?(j=d-l,k=!1):l>d&&1==m&&(j=l-d,k=!0),1==k?l-=j:l+=j):l=l+g-f+h,l*=.0174532925,b.push(c*Math.cos(l)),b.push(c*Math.sin(l))}var m=0,n=0,o=jQuery(this).data("launch"),p=jQuery(this).data("launch-duration"),q=jQuery(this).data("launch-delay");p||(p=1),q||(q=.15),""!=o?(n=-(1e3*q),jQuery(this).find(".icon-circle-list .info-circle-icons").each(function(){var a=jQuery(this);n+=1e3*q,setTimeout(function(){a.animate({opacity:1,left:b[m++],top:b[m++]},{duration:1e3*p,easing:o})},n)})):jQuery(this).find(".icon-circle-list .info-circle-icons").each(function(){var a=jQuery(this);a.css({opacity:"1",left:b[m++],top:b[m++]})})}})})}var resizedd=0,time_f_arr=[];jQuery(document).ready(function(){make_info_circle(".info-c-full-br",0),responsive_check(".info-c-full-br"),calculate_clipped_circle(),jQuery(".clipped-info-circle").each(function(a,b){var c=jQuery(this).outerHeight(),d=jQuery(this).outerWidth();jQuery(this).attr("data-first-width",d),jQuery(this).attr("data-first-height",c)}),jQuery(window).resize(function(){resizedd++,make_info_circle(".info-c-full-br",resizedd),calculate_clipped_circle()}),jQuery(window).load(function(){resizedd++,make_info_circle(".info-c-full-br",resizedd),calculate_clipped_circle()}),jQuery(document).on("ultAdvancedTabClicked",function(){resizedd++,make_info_circle(".info-c-full-br",resizedd),calculate_clipped_circle()}),jQuery(".info-c-full-br").each(function(){"click"==jQuery(this).data("focus-on")&&jQuery(this).find(".icon-circle-list .info-circle-icons").click(function(){var a=jQuery(this);jQuery(this).parents(".info-c-full-br").attr("data-slide-true","false"),show_next_info_circle(a)}),"hover"==jQuery(this).data("focus-on")&&jQuery(this).find(".icon-circle-list .info-circle-icons").hover(function(){var a=jQuery(this);jQuery(this).parents(".info-c-full-br").attr("data-slide-true","false"),show_next_info_circle(a)},function(){})}),setTimeout(function(){jQuery(".info-c-full-br").each(function(){var a=jQuery(this).data("slide-duration");a||(a=.2),jQuery(this).attr("data-slide-number","1"),info_circle_slide(1e3*a,jQuery(this));var b=jQuery(this).find(".info-circle-icons").eq(0);show_next_info_circle(b)})},1e3)}),jQuery(window).load(function(){jQuery(".info-c-full-br").each(function(){"on"==jQuery(this).attr("data-slide-true")&&jQuery(this).hover(function(){jQuery(this).attr("data-slide-true","off")},function(){jQuery(this).attr("data-slide-true","on")})})}),jQuery(document).ready(function(a){jQuery(".icon_list_item").each(function(a,b){var c=jQuery(this),d=c.find(".info-circle-img-icon").length;d>=1&&c.closest("ul.smile_icon_list").addClass("ic-resp-img")})});