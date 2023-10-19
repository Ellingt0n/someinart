// Джиквери плагин для работы ренж слайдера
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d= document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1, !1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse. Prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b ._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved= !0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f( a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a .proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element. unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b) }}}(jQuery);
// 

// Показать бургер на десктопе

function showCatalogListDesktop() {
  const menuButton = document.querySelector('.menu-button-1');
  const catalog = document.querySelector('.catalog1');
  if (menuButton) {
    const menuList = document.querySelector('.catalog1');
    document.addEventListener('click', function (evt) {
      if (evt.target === menuButton) {
        menuList.classList.toggle('catalog--active');
      } else {
        menuList.classList.remove('catalog--active');
      }
    });
  }
}
showCatalogListDesktop();
//
// Показать бургер на Планшете/телефоне
function showCatalogListTabletMobile() {
  const menuButton = document.querySelector('.menu-button-2');
  const catalog = document.querySelector('.catalog1');
  if (menuButton) {
    const menuList = document.querySelector('.catalog2');
    document.addEventListener('click', function (evt) {
      if (evt.target === menuButton) {
        menuList.classList.toggle('catalog--active');
      } else {
        menuList.classList.remove('catalog--active');
      }
    });
  }
}
showCatalogListTabletMobile();
//

// Показать раскрывающиеся списки
function showHideText() {
  const blockHideTexts = document.querySelectorAll('.text-expands');

  document.addEventListener('click', function (evt) {
    blockHideTexts.forEach((hideText) => {
      if (!hideText.classList.contains('active')) {
        if (evt.target === hideText || evt.target.parentNode === hideText) {
          blockHideTexts.forEach((item) => {
            item.classList.remove('active');
          });
          hideText.classList.add('active');
        }
      } else {
        hideText.classList.remove('active');
      }
    });
  });
}
showHideText();
//

$(function () {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  $('.index-advantages-block .top-block .checkbox + label').click(function () {
    $('body').toggleClass('dark');
  });
  $('.index-page-slider').slick({});
  $('.index-collections-block').slick({
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          variableWidth: true,
        },
      },
    ],
  });
  $('.index-advantages-block .list').slick({
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          variableWidth: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.index-advantages-block .slider').slick({
    arrows: false,
    variableWidth: true,
  });
  $('.item-page .photos .list').slick({
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          variableWidth: false,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  });
  $('.account-page .content .orders .item .list').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    infinite: false,
  });
  if ($(window).width() < 576) {
    $('.catalog-page .sl').slick({
      arrows: false,
      variableWidth: true,
    });
  }
});
