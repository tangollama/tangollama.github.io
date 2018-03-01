$(document).ready(function() {

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
        return null;
      }
      else{
        return decodeURI(results[1]) || 0;
      }
  }

  if ($.urlParam('jw') == 1) {
    $('#defaultStyles').attr('href', 'http://joelworrall.com/cis191/ex/unit04/ex1/' + $('#defaultStyles').attr('href'));
  }
  if ($.urlParam('bacon') == 1) {
    $('body').attr("id", "bacon");
    $('head').append('<link rel="stylesheet"  href="bacon.css" type="text/css" media="all">');
  }
});