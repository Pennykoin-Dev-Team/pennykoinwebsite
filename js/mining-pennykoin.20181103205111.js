(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js32').attr('src', (dpi>1) ? 'images/logo-test-v2-300.png' : 'images/logo-test-v2-150.png');
$('.js30').attr('src', (dpi>1) ? 'images/pk-logo-v3-268.png' : 'images/pk-logo-v3-134.png');
$('.js31').attr('src', (dpi>1) ? 'images/miner_pickax_lamp_circ_gr-596.jpg' : 'images/miner_pickax_lamp_circ_gr-298.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m9')[0]);
initMenu($('#m10')[0]);

});