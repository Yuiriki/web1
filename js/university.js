(function($){
    
    var obj= {
        init:function(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header:function(){ 
          $('.main-btn').on({
              mouseenter:function(){
                  $('.sub-bg').stop().slideDown(300);
                  $('.sub').stop().slideDown(300);
                  $('.main-btn').removeClass('on');
                  $(this).addClass('on');
              },
              focusin:function(){
                $('.sub-bg').stop().slideDown(300);
                $('.sub').stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            }
           
          });

            $('.container').on({
                mouseleave:function(){
                    $('.sub-bg').stop().slideUp(300);
                    $('.sub').stop().slideUp(300);
                    $('.main-btn').removeClass('on');
                }
            });
        },
        section1:function(){
            let cnt=0

            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600,function(){
                    cnt>2?cnt=0:cnt;
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function autoTimer(){
                setInterval(nextCount,3000);
            }
            autoTimer();
        },
        section2:function(){
            $('.link-btn').stop().click(function(){
                $('#modal').fadeIn(500);
            });
            $('.button-box').stop().click(function(){
                $('#modal').fadeOut(500);
            });
        },
        footer:function(){

        }
        
    }  
    obj.init();
    
    
})(jQuery);