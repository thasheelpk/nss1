AOS.init();

$(function() {
   
  
    $(window).scroll(function() {    
		var scroll2 = $(window).scrollTop();
		
        if (scroll2 >=750) {
			$(".navbar").addClass("scrolled");
			$(".contactBtn").css({"color": "#506CEE","border-color":"#506CEE"});
			$(".logo").attr("src","img/logo2.png");
			$(".logo").css({"max-width":"14%","min-width":"150px"});
			
			$(".contactBtn").hover(function(){
				$(this).css({"background-color": "#506CEE","color":"white"});
				}, function(){
				$(this).css({"background-color": "white","color":"#506CEE"});
			  });
			$(".ni1,.ni2").css("background-color","#506CEE");
			
        } else {
			$(".navbar").removeClass("scrolled");
			$(".contactBtn").css({"color": "white","border-color":"white","background-color": "transparent"});
			$(".logo").attr("src","img/logo.png");
			$(".logo").css({"max-width":"20%","min-width":"180px"});
			$(".contactBtn").hover(function(){
				$(this).css({"background-color": "white","color":"#506CEE"});
				}, function(){
				$(this).css({"background-color": "transparent","color":"white"});
			  });
			  $(".ni1,.ni2").css("background-color","white");
		}
    });
  
});

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){
  
  var textareas = document.querySelectorAll('.expanding'),
      
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {
  
    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }
  
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();
