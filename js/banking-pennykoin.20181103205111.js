(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js23').attr('src', (dpi>1) ? 'images/banking-savings-v1-632.jpg' : 'images/banking-savings-v1-316.jpg');
$('.js24').attr('src', (dpi>1) ? 'images/banking-transactions-v1-702.jpg' : 'images/banking-transactions-v1-351.jpg');
$('.js25').attr('src', (dpi>1) ? 'images/banking-messaging-674.jpg' : 'images/banking-messaging-337.jpg');
$('.js26').attr('src', (dpi>1) ? 'images/logo-test-v2-300.png' : 'images/logo-test-v2-150.png');
$('.js21').attr('src', (dpi>1) ? 'images/pk-logo-v3-268.png' : 'images/pk-logo-v3-134.png');
$('.js22').attr('src', (dpi>1) ? 'images/banking-header-v1-1704.jpg' : 'images/banking-header-v1-852.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m5')[0]);
initMenu($('#m6')[0]);

});