$(window).ready((function(){jplist.init(),$(window).scroll((function(){$(window).scrollTop()<=40?$(".header").removeClass("hide"):$(".header").addClass("hide")})),$(window).scrollTop()>=60&&$(".header").addClass("hide"),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:300,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),$("a").click((function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-100+"px"},{duration:700,easing:"swing"}),!1})),function(){let e=[],t=document.querySelectorAll("[data-da]"),i=[],n=[];if(t.length>0){let l=0;for(let n=0;n<t.length;n++){const a=t[n],o=a.getAttribute("data-da");if(""!=o){const t=o.split(","),n=t[1]?t[1].trim():"last",d=t[2]?t[2].trim():"767",c="min"===t[3]?t[3].trim():"max",u=document.querySelector("."+t[0].trim());t.length>0&&u&&(a.setAttribute("data-da-index",l),e[l]={parent:a.parentNode,index:(r=a,s=void 0,s=Array.prototype.slice.call(r.parentNode.children),s.indexOf(r))},i[l]={element:a,destination:document.querySelector("."+t[0].trim()),place:n,breakpoint:d,type:c},l++)}}(a=i).sort((function(e,t){return e.breakpoint>t.breakpoint?-1:1})),a.sort((function(e,t){return e.place>t.place?1:-1}));for(let e=0;e<i.length;e++){const t=i[e],a=t.breakpoint,r=t.type;n.push(window.matchMedia("("+r+"-width: "+a+"px)")),n[e].addListener(o)}}var a,r,s;function o(e){for(let e=0;e<i.length;e++){const t=i[e],a=t.element,r=t.destination,s=t.place,o="_dynamic_adapt_"+t.breakpoint;if(n[e].matches){if(!a.classList.contains(o)){let e=d(r)[s];"first"===s?e=d(r)[0]:"last"===s&&(e=d(r)[d(r).length]),r.insertBefore(a,r.children[e]),a.classList.add(o)}}else a.classList.contains(o)&&(l(a),a.classList.remove(o))}}function l(t){const i=t.getAttribute("data-da-index"),n=e[i],a=n.parent,r=n.index,s=d(a,!0)[r];a.insertBefore(t,a.children[s])}function d(e,t){const i=e.children,n=[];for(let e=0;e<i.length;e++){const a=i[e];(t||null==a.getAttribute("data-da"))&&n.push(e)}return n}o()}(),$.each($("input"),(function(e,t){$(this).val($(this).attr("data-value")),$(this).focus((function(){$(this).attr("data-value")==$(this).val()&&$(this).val("")})),$(this).blur((function(){""==$(this).val()&&$(this).val($(this).attr("data-value"))}))})),$("input[type=tel]").each((function(){$(this).inputmask("+38(999)999-99-99")})),$.validator.addMethod("defaultInvalid",(function(e,t){return!(t.value==t.defaultValue)})),$(".form form").validate({errorPlacement:function(e,t){return!0},rules:{name:{required:!0,minlength:4},tel:{required:!0,minlength:11},email:{required:!0,email:!0,minlength:1}},submitHandler:function(e){return $.ajax({type:"POST",url:$(e).attr("action"),data:$(e).serialize(),success:function(t){"Спасибо за заявку!"==t&&e.reset()}}),!1}});var e=parseInt($(".progress-bar").data("progress"));e&&($(".progress-bar__work").css("width",e+"%"),$(".progress-bar__not-work").css("width",100-e+"%"));var t=document.getElementById("play_button"),i=document.getElementById("video");t.addEventListener("click",(function(){t.classList.toggle("hidden"),1==i.paused?(i.play(),t.innerHTML=""):(i.pause(),t.innerHTML="")})),$(".slider").slick({arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,centerPadding:"60px",responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".header__burger").click((function(){$(".header__burger, .header__menu").toggleClass("active"),$("body").toggleClass("lock")})),$(".choose__burger").click((function(){$(".choose__burger, .choose__filter").toggleClass("active"),$("body").toggleClass("lock")})),$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}));