// Джиквери плагин для работы ренж слайдера

/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);

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
