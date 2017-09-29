//banner swiper
$.fn.bannerRoll=function(obj,pagination) {
    var mySwiper = new Swiper(obj, {
        loop: true,
        autoplay: 5000,
        speed: 400,
        pagination:pagination,
        paginationClickable: true
    })

    $(this).find('.arrow-left').on('click', function () {
        mySwiper.swipePrev();
    })
    $(this).find('.arrow-right').on('click', function () {
        mySwiper.swipeNext();
    })


    $(this).mouseenter(function () {
        mySwiper.stopAutoplay();
    })
    $(this).mouseleave(function () {
        mySwiper.startAutoplay();
    })
}

$.fn.loadImage=function() {
    var t = $(this);
    var src = $(this).attr("src")
    var img = new Image();
    var loadheight=$(this).height()+"px";
    var loadwidth=$(this).width()+"px";
    img.src = src;

    $(this).attr("src", "");
    var loading =  $("<div style='height:"+loadheight+";width:"+loadwidth+"' class='loading-gray' ><span><em></em></span></div>");
    var loadingfailed =  $("<div style='height:"+loadheight+";width:"+loadwidth+"'  class='loading-gray' ><span><em class='loading-failed'></em></span></div>");
    t.hide();

    if($(this).parent().find(".loading-gray").length<1){
        t.after(loading);

        img.onload=function(){
            loading.remove();
            t.attr("src", this.src);
            t.show();
        }
        img.onerror=function(){
            loading.remove();
            t.after(loadingfailed);
        }
    }
}

//video openWindow
$.fn.videoWindow=function(url) {
    $("header,main,footer").addClass("blur")
    var videobody='<div  class="videobox"><div class="video-close"><i class="icon-close"></i></div><iframe src="'+url+'" frameborder="0" allowfullscreen></iframe></video><div class="video-masker"></div>'
    $(videobody).appendTo("body")
    $("body").css("overflow","hidden");
    setTimeout(function () {
        $(".videobox iframe").addClass("videobox-over");
    },500)

    $(".video-masker,.icon-close").click(function(){
        $("body").removeAttr("style");
        $(".videobox").remove();
        $(".blur").removeClass("blur");
    })
}

$(function() {

    //  选项卡效果
    $(".wapper-list li").eq(0).addClass('active1');
    $(".wapper-list li").click(function () {
        $(this).addClass('active1').siblings().removeClass('active1');
        $(".content-cons").eq($(this).index()).addClass('active').siblings().removeClass('active');
       if($(".support-detail").hasClass('support-active')){
            $('html, body').animate({
                scrollTop: 480
            },500);
        }
        
    })
    
    // 滑到一定高度 固定定位
    if ($(".support-detail").length > 0) {
    var navH = $(".support-detail").offset().top;
    // console.log("navh"+navH)
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        // console.log("current"+scroH)
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH) {
            
            $(".support-detail").removeClass('support-active')
            $(".support-detail").addClass('support-active').css({"top":0})
           
        } else if (scroH < navH) {
            $(".support-detail").removeClass('support-active')
        }
    })
    }

   
    console.log(navigator.userAgent)
    if(navigator.userAgent.indexOf("MSIE")>0){   
        if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
            alert("您当前浏览器版本过低，请升级浏览器");        
        }   
        if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
            alert("您当前浏览器版本过低，请升级浏览器");       
        }   
        if(navigator.userAgent.indexOf("MSIE 9.0")>0 && !window.innerWidth){//这里是重点，你懂的
            alert("您当前浏览器版本过低，请升级浏览器");     
        }   
        if(navigator.userAgent.indexOf("MSIE 9.0")>0){  
            alert("您当前浏览器版本过低，请升级浏览器");    
        } 
        
    } 
})


