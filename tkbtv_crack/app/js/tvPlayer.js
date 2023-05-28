import $ from "jquery";

//login
$(document).ready(function ($) {
   let tab = $('.tabs a');

   tab.on('click', function (event) {
      event.preventDefault();
      tab.removeClass('active');
      $(this).addClass('active');
      if ($(this).attr('href') == "#signup-tab-content" || $(this).attr('href') == "#scan-tab-content")
         $('.tabs a[href$="#signup-tab-content"]').addClass('active');
      let tab_content = $(this).attr('href');
      $('div[id$="tab-content"]').removeClass('active');
      $(tab_content).addClass('active');
      // console.log(123)
   });
});

//登入按鈕延遲.7s & 帳號密碼錯誤
const loginFunc = {
   access: false,
   trigger() {
      $('.button-login').on('click', (e) => {
         $(e.currentTarget).addClass('active');
         setTimeout(() => {
            if (this.access) {
               this.SkipNextPage();
            } else {
               $('.alert').addClass('show');
               setTimeout(function () {
                  $('.alert').removeClass('show');
               }, 5000)
               $('.button-login').removeClass('active');

               $('.btn-close').on('click', () => {
                  this.closeAlert();
               })
               this.access = true;
            }
         }, 700)

      })
   },

   closeAlert() {
      $('.alert-login').removeClass('show');
   },

   SkipNextPage() {
      window.location.href = 'calendar.html';
      // alert(11)
   },

   init() {
      this.trigger();
   }
}

loginFunc.init();

$(document).ready(function () {
   $('#login').css('top', 0);
   $('#login').css('position', 'absolute');
});

// function run() {
//    $('#login').animate({ 'top': 444 }, 500, function () {
//       windows.location.href = 'calendar.html';
//    });
// }

//登入按鈕延遲.7s END

//最新消息選單只顯示一個
$(function () {
   $('#allNews').on('click', function () {
      $('.collapse').removeClass('show');
   });
});
//最新消息選單只顯示一個END

//通知列表 點擊＝已讀＋藍底
var noticeItem = document.getElementsByClassName('notice-inform');
for (var i = 0; i < noticeItem.length; i++) {
   noticeItem[i].addEventListener('click', function () {
      this.classList.add('active');
   })
}

//通知列表 全已讀
$('.onread').on('click', () => {
   $('.notice-inform').addClass('active');
})

//通知列表 按鈕
$('.onread-spacing').click(function () {
   $(this).addClass('onread-actived');
});

//課程清單 點擊加入顏色＆旋轉符號
// $('.chapter-course-add').on('click', function () {
//    let hasActive = $(this).hasClass('active');
//    if(!hasActive){
//       $(this).addClass('active');
//    }else{
//       $(this).removeClass('active');
//    }
// });

//客服中心 
//將JWT存入sessionStorage
if (!sessionStorage.tkbtvJWT) {
   const url = new URL(window.location.href);
   const jwt = url.searchParams.get("jwt");
   sessionStorage.tkbtvJWT = jwt;
}

// $(function () {
//    var Accordion = function (el, multiple) {
//       this.el = el || {};
//       this.multiple = multiple || false;
//       var links = this.el.find('.link');
//       links.on('click', {
//          el: this.el,
//          multiple: this.multiple
//       }, this.dropdown);
//    };
//    Accordion.prototype.dropdown = function () {
//       $this = $(this), $next = $this.next();
//       $next.slideToggle();
//       $this.parent().toggleClass('open');
//    };

//    $('.CourseList li a').click(function () {
//       $(this).parent().find('.icon').toggleClass('subOpen')
//       $(this).parent().find('.sub-CourseList').slideToggle();
//    });
//    $('.CourseList li i').click(function () {
//       $(this).toggleClass('subOpen')
//       $(this).parent().find('.sub-CourseList').slideToggle();
//    });
// });

function changeType(type) {
   if (type == 1 || type == 2 || type == 3 || type == 4 || type == 5) {
      $(".question").hide();
      $(".buy").show();
   } else if (type == 6 || type == 7 || type == 8 || type == 9 || type == 10) {
      $(".question").hide();
      $(".orders").show();
   } else if (type == 11 || type == 12 || type == 13) {
      $(".question").hide();
      $(".course").show();
   } else if (type == 14 || type == 15) {
      $(".question").hide();
      $(".return").show();
   }
}

$("select").bind(
   "submit",
   function () {
      return false;
   }
);

//客服頁下拉選單
const qsFilter = {
   toggleList() {
      $('#qsBTN').on('click', () => {
         $('#qsList').stop().slideToggle(200);
         $('#qsList').scrollTop(0);
         this.qsItem();
         this.closeList();
      })
   },
   qsItem() {
      $('#qsList').find('li').on('click', function () {
         let selectItem = $(this);
         let target = selectItem.data('value')
         $('#qsBTN').html(selectItem.text());
         $('#qsBTN').attr('data-qs', target);
         selectItem.addClass('active').siblings().removeClass('active');
         $('#qsList').slideUp(200);
         changeType(selectItem.data('value'));
         $('#qsForm').find('input').val('');  //清空值
         $('#qsForm').find('textarea').val('');   //清空值
      })
   },
   closeList() {
      $('body').on('click', e => {
         if (e.target.id === 'qsBTN') return;
         $('#qsList').slideUp(200);
      })
   },
   init() {
      this.toggleList();
   }
}
// function clean() {
//    document.getElementById("label").value = "";
// }

qsFilter.init();
//客服頁下拉選單END


//詳細頁下拉選單
const examFilter = {
   toggleList() {
      $('#examBTN').on('click', () => {
         $('#examList').stop().slideToggle(200);
         $('#examList').scrollTop(0);
         this.examItem();
         this.closeList();
      })
   },
   examItem() {
      $('#examList').find('li').on('click', function () {
         let selectItem = $(this);
         let target = selectItem.data('value')
         $('#examBTN').html(selectItem.text());
         $('#examBTN').attr('data-exam', target);
         selectItem.addClass('active').siblings().removeClass('active');
         $('#examList').slideUp(200);
      })
   },
   closeList() {
      $('body').on('click', e => {
         if (e.target.id === 'examBTN') return;
         $('#examList').slideUp(200);
      })
   },
   init() {
      this.toggleList();
   }
}

examFilter.init();
//詳細頁下拉選單END



//新增書籤限制字數
window.onload = function () {
   const textarea1 = document.getElementById('txta1');
   if (textarea1) {
      textarea1.onkeydown = function () {
         if (this.value.length >= 50)
            return;
      }
   }

}
//新增書籤限制字數ＥＮＤ

//影音－刪除書籤
$('.tag-del').on('click', function () {
   $(this).parent().remove();
})
//影音－刪除書籤end


//客服詳細內容限制字數
window.onload = function () {
   const textarea2 = document.getElementById('txta2');
   if (textarea2) {
      textarea2.onkeydown = function () {
         if (this.value.length >= 800)
            return;
      }
   }

}
//客服詳細內容限制字數ＥＮＤ

//calendar 

// $(document).ready(function(){

//    $('.course_item').find('.c-collapse').click(function(){
//       $(this).parent('.course_item').siblings().find('.collapse').removeClass('show');
//       $(this).parent('.course_item').siblings().find('.c-collapse').addClass('collapsed');
//       for(let i=0; i<$('.c-collapse').length; i++) {
//          if (!$('.c-collapse').eq(i).hasClass('collapsed')) {
//             $('.myCourse').hide();
//             $('.myChapter').show();
//          } else {
//             $('.myCourse').show();
//             $('.myChapter').hide();
//          }
//       }



//    });
// });

//讀書計畫 堂數選單
const numFilter = {
   toggleList() {
      $('#numBTN').on('click', () => {
         $('#numList').stop().slideToggle(200);
         $('#examList').scrollTop(0);
         this.numItem();
         this.closeList();
      })
   },
   numItem() {
      $('#numList').find('li').on('click', function () {
         let selectItem = $(this);
         let target = selectItem.data('value')
         $('#numBTN').html(selectItem.text());
         $('#numBTN').attr('data-exam', target);
         selectItem.addClass('active').siblings().removeClass('active');
         $('#numList').slideUp(200);
      })
   },
   closeList() {
      $('body').on('click', e => {
         if (e.target.id === 'numBTN') return;
         $('#numList').slideUp(200);
      })
   },
   init() {
      this.toggleList();
   }
}

numFilter.init();
//讀書計畫 堂數選單END