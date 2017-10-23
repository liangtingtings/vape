//banner swiper
$.fn.bannerRoll=function(obj,pagination) {
    var mySwiper = new Swiper(obj, {
        loop: true,
        autoplay: 5000,
        speed: 400,
        pagination:pagination,
        paginationClickable: true
    });

    $(this).find('.arrow-left').on('click', function () {
        mySwiper.swipePrev();
    });
    $(this).find('.arrow-right').on('click', function () {
        mySwiper.swipeNext();
    });


    $(this).mouseenter(function () {
        mySwiper.stopAutoplay();
    });
    $(this).mouseleave(function () {
        mySwiper.startAutoplay();
    })
}

$.fn.loadImage=function() {

    var t = $(this);
    var src = $(this).attr("src")
    var img = new Image();
    img.src = src;

    $(this).attr("src", "");
    var loading =  $("<div style='height:100%;width:100%' class='loading-gray' ><span><em></em></span></div>");
    var loadingfailed =  $("<div style='height:100%;width:100%'  class='loading-gray' ><span><em class='loading-failed'></em></span></div>");
    t.hide();
    t.parent().removeClass('pro-large-size');
    if($(this).parent().find(".loading-gray").length<1){

        t.after(loading);

        img.onload=function(){
            t.parent().removeClass('pro-large-size');
            loading.remove();
            t.attr("src", this.src);
            t.show();
        }
        img.onerror=function(){
            t.parent().addClass('pro-large-size');
            loading.remove();
            t.after(loadingfailed);
        }
    }
}

// 首页头像部分
$.fn.loadphoto = function() {
    var t = $(this);
    var src = $(this).attr("src")
    var img = new Image();
    img.src = src;

    $(this).attr("src", "");
    img.onload=function(){
        t.attr("src", this.src);
    }
    img.onerror=function(){
        t.attr("src", '/static/images/web/avatar.svg');
    }
}
// 导航栏样式
$.fn.navActive = function (activeClass) {
    
    
    $(this).each(function(){ 
        $this = $(this);
        var str = String(window.location);
        var str1 = $this.attr('href');
        var ss=str1.split("/");
        var temp="/"+ss[ss.length-2];
        var num=str1.lastIndexOf(temp);
        var pp = str1.substring(num)
        
        if(pp.length > 1) {  //是否是二级链接
            if(str.indexOf(pp) > -1){ 
                $this.removeClass(activeClass)
                $this.addClass(activeClass).parent().siblings().children().removeClass(activeClass);
                $this.addClass(activeClass).parent().parent().siblings().addClass(activeClass)  // 二级菜单对应一级部分添加类名
            } 
        } else {
            if(str.indexOf($this.attr('href')) > -1){  // 导航跟一级链接进行匹配
                $this.addClass(activeClass).parent().siblings().children().removeClass(activeClass); 
            } 
        }
        $(".top-dropmenu a").removeClass(activeClass)
    }); 
}
//弹框 openWindow
$.fn.layerWindow=function(type) {
        var html = '<div class="privacy-box">\
         <div class="layerbox-title">VapeOnly Customer Service</div>\
            <h3>Before consultation</h3>\
            <p>Please click on the link below to send a consultation to the customer service center and 24-hour service is provided.<br>The customer service center will answer your questions as soon as possible. Please wait before this.</p><br>\
            <h3>Product maintenance, failure and other related advisory services</h3>\
            <h4>Free repair, returned products</h4>\
            <p>Product free maintenance, Returns and other services, need fully meet the following conditions.\
            </p>\
            <p>\
            <ul>\
            <li>\
            1 . Non-consumable products are required during the warranty period (within 90 days of purchase date).\
            </li>\
            <li>\
            2. Non-consumable products are required during the warranty period (within 90 days of purchase date).\
            </li>\
            <li>\
            3. Require warranty card.\
            </li>\
            <li>\
            4. It is necessary to provide a receipt for the purchase of the store and the purchase date, or to provide the goods delivery documents.\
            </li>\
            </ul>\
            </p><br>\
            <h3>Non-free maintenance, returned products</h3>\
            <p>\
            If you meet one of the following conditions,we can not provide free maintenance, Returns and other services.\
            </p>\
            <p>\
            <ul>\
            <li>\
            1 . The faulty product can not be confirmed.\
            </li>\
            <li>\
            2. Product carton, instruction manual or attached products are defective.\
            </li>\
            <li>\
            3. The product is returned by oneself without contacting VapeOnly customer service center.\
            </li>\
            <li>\
            4. Failure problems or parts defects caused by user self-modification, disassembly or soaking in the water.\
            </li>\
            <li>\
            5. Not the purchaser who made the maintenance, return policy requirements.\
            </li>\
            <li>\
            6. Only the box is damaged, but the product itself has no any problems.\
            </li>\
            </ul>\
            </p><br>\
            <h3>Warranty card image Provided</h3>\
            <p>\
            If you meet one of the following conditions,we can not provide free maintenance, Returns and other services.\
            </p>\
            <p>Please scratch the silver part and take a clear picture of the product serial number.\
                Please add the picture in fault form of the customer service center</p>\
            <img src="/static/images/web/priimage.png" alt="">\
            <h3>Failure Form Instructions</h3>\
            <p>\
            Please fill in the failure form with the defective product name, pictures or other descriptions in details, so we can help you quickly identify and deal with the the problems you encounter.\
            </p>\
            <p>\
            Go to the inquiry form (link: http://www.vapeonly.com/support/feedback/)\
         </p>\
        </div>';
     if(type == 2) {
        var html = '<div class="privacy-box">\
        <div class="layerbox-title">VapeOnlyサポートセンター</div>\
        <h3>お問い合わせの前に</h3>\
        <p>お問い合わせはページ下部のお問い合わせフォームから24時間承っております。迅速な対応を心がけておりますが返答までにお時間を頂くことがございます。\
    <br>あらかじめご了承のほどよろしくお願いいたします。\
    </p><br>\
    <h3>不具合・故障に関するお問い合わせのお客様へ</h3>\
    <h4>無償での修理・交換対応の対象となるケース</h4>\
    <p>\
    無償での修理・交換対応は、以下の条件をすべて満たしている場合に限らせていただきます。\
    <ul>\
    <li>\
    1 . 製品の保証期間内であること（購入日から90日以内）\
    </li>\
    <li>\
    2. 製品付属の取扱説明書および同梱の使用上の注意に従い正常に使用したうえでの故障であること\
    </li>\
    <li>\
    3. Warrantyカード（保証書）をお持ちであること\
    </li>\
    <li>\
    4. 購入店舗および購入日の証明できるレシートまたは納品書をお持ちであること\
    </li>\
    </ul>\
    </p><br>\
    <h3>無償での修理・交換対応の対象外となるケース</h3>\
    <p>\
    以下のいずれかに該当するような場合は、無償での修理・交換対応の対象外となります。</p>\
    <p>\
    <ul>\
    <li>\
    1 . 不具合が発生している製品の確認が行えない場合\
    </li>\
    <li>\
    2. 破棄により箱、マニュアル、付属品などが欠品している場合\
    </li>\
    <li>\
    3. 事前連絡およびVapeOnlyの承諾なしに製品を返送された場合\
    </li>\
    <li>\
    4. お客様による改造、分解、水没等の痕跡がある場合や、部品に欠損がある場\
    </li>\
    <li>\
    5. ご購入者様以外からの修理、交換依頼の場合\
    </li>\
    <li>\
    6. 外箱の損傷のみで製品本体に問題がない場合\
    </li>\
    </ul>\
    </p><br>\
    <h3>Warrantyカード（保証書）画像の添付</h3>\
    <p>\
    銀色のスクラッチ部分を削り、シリアルナンバーがわかるように撮影してください。\
    </p>\
    <p>撮影した画像をお問い合わせフォームに添付してください。\
    </p>\
    <img src="/static/images/web/priimage.png" alt="">\
        <h3>お問い合わせフォーム</h3>\
        <p>\
        故障や不具合が発生した状況、画像など、できるだけ詳細を添えてご連絡ください問題が早期解決しやすくなります\
    </p>\
    <p>\
    お問い合わせフォームへ進む（リンク：http://www.vapeonly.com/support/feedback/jp）\
        </p>\
    </div>';
    }


    $("header,main,footer").addClass("blur")
    var layerbody='<div  class="layerbox"><div class="layerbox-close"><i class="icon-close"></i></div><div class="float-layer transition-sp3">'+html+'</div><div class="layer-masker"></div>';

    $(layerbody).appendTo("body");
    $("body").css("overflow","hidden");
    setTimeout(function () {
        $(".float-layer").addClass("layerbox-over");
    },500)
    $(".layer-masker,.icon-close").click(function(){
        $("body").removeAttr("style");
        $(".layerbox").remove();
        $(".blur").removeClass("blur");
    })
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
};

window.createUrl = function (uri) {
    return 'http://'+window.location.host+'/'+uri;
};

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
    //图片加载

    $(".products img, .video img, .video-box img, .products-box img, .pro-card img,.support-product-detail .inner-cons img").each(function(img){
        $(this).loadImage();
    })

   // 导航调用
   $(".top-nav a").navActive('hover');
   $(".products-nav a").navActive('hover-child');    

   
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
    //  分页点击效果

     $(".page li a").click(function(){
         $(this).addClass('focus')
     });

    //动画
    $(".video-box li").click(function () {
        $(this).videoWindow($(this).find("img").attr("video-url"))
    });

    //邮件订阅
    $("button.subscribe").click(function () {
        var email = $("input[name='subscribe']").val();
        var url = createUrl('home/subscribe');

        var regexp = /\w+[\.\w]*@\w+\.\w+/;

        layui.use(['jquery', 'tips'], function(exports) {
            var $ = layui.jquery;
            var common = layui.tips;

            if(!regexp.test(email)){
                common.tips().error('Invalid Email Address');
                return false;
            }

            $.post(url, {email:email}, function (result) {
                var layer = layui.layer;
                if(result.success){
                    if(result.data.status == 'warning'){
                        common.tips().warning(result.message);
                    }else{
                        common.tips().confirm(result.message, function () {
                            layer.closeAll();
                        });
                    }
                }else {
                    common.tips().error(result.message);
                }
            });
        });
    });

    $(".products-box img").each(function(img){
        $(this).loadImage();
    })
   $(".comments-pic img").each(function(img){
         $(this).loadphoto();
   })
    //防伪码查询
    $("button.securityCode").click(function () {
        var code = $("input[name='securityCode']").val();
        var url = createUrl('support/checkCode');

        $.post(url, {code:code}, function (result) {
            layui.use(['jquery', 'tips'], function(exports) {
                var $ = layui.jquery;
                var common = layui.tips;

                if(result.success){
                    common.tips().success(result.message);
                }else {
                    common.tips().error(result.message);
                }
            });
        });
    });
});


