(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js18').attr('src', (dpi>1) ? 'images/joinnow-v1-726.png' : 'images/joinnow-v1-363.png');
$('.js19').attr('src', (dpi>1) ? 'images/blueprint4-1002.jpg' : 'images/blueprint4-501.jpg');
$('.js20').attr('src', (dpi>1) ? 'images/logo-test-v2-300.png' : 'images/logo-test-v2-150.png');
$('.js16').attr('src', (dpi>1) ? 'images/pk-logo-v3-268.png' : 'images/pk-logo-v3-134.png');
$('.js17').attr('src', (dpi>1) ? 'images/side-banner-logo-v1-266.jpg' : 'images/side-banner-logo-v1-133.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m3')[0]);
initMenu($('#m4')[0]);

});