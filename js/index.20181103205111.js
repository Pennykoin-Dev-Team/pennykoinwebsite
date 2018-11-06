(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js4').attr('src', (dpi>1) ? 'images/private-v1-382.png' : 'images/private-v1-191.png');
$('.js5').attr('src', (dpi>1) ? 'images/untracable-v1-400.png' : 'images/untracable-v1-200.png');
$('.js6').attr('src', (dpi>1) ? 'images/secure-v1-382.png' : 'images/secure-v1-191.png');
$('.js7').attr('src', (dpi>1) ? 'images/transactions-v1-976.png' : 'images/transactions-v1-488.png');
$('.js8').attr('src', (dpi>1) ? 'images/savings-v1-748.png' : 'images/savings-v1-374.png');
$('.js9').attr('src', (dpi>1) ? 'images/simple_messaging-v1-996.png' : 'images/simple_messaging-v1-498.png');
$('.js10').attr('src', (dpi>1) ? 'images/screenshot-2018-10-10-at-11.58.27-64.png' : 'images/screenshot-2018-10-10-at-11.58.27-32.png');
$('.js11').attr('src', (dpi>1) ? 'images/screenshot-2018-10-10-at-11.58.27-64.png' : 'images/screenshot-2018-10-10-at-11.58.27-32.png');
$('.js12').attr('src', (dpi>1) ? 'images/screenshot-2018-10-10-at-11.58.27-64.png' : 'images/screenshot-2018-10-10-at-11.58.27-32.png');
$('.js13').attr('src', (dpi>1) ? 'images/screenshot-2018-10-10-at-10.32.46-574.jpg' : 'images/screenshot-2018-10-10-at-10.32.46-287.jpg');
$('.js14').attr('src', (dpi>1) ? 'images/depositphotos_12286070_xl-2015-856.jpg' : 'images/depositphotos_12286070_xl-2015-428.jpg');
$('.js15').attr('src', (dpi>1) ? 'images/logo-test-v2-300.png' : 'images/logo-test-v2-150.png');
$('.js').attr('src', (dpi>1) ? 'images/pk-logo-v3-268.png' : 'images/pk-logo-v3-134.png');

$('.js3').attr('src', (dpi>1) ? 'images/pk-payments-v1-932.jpg' : 'images/pk-payments-v1-466.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);

});