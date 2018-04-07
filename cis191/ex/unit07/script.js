var _elementCount = 0;
var _RandomText = null;
/**
 * Generate a hex color string using Math.random
 */
function colorMe() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function createTable(rows, cols) {
  if (isNaN(cols) || isNaN(rows)) {
    alert("Invalid input. Please enter numbers.");
    if ($("#createTblForm").length > 0) {
      $("#createTblForm").reset();
    }
    return false;
  }
  var bgColor = colorMe();
  for (var i = 0; i < rows; i++) {
    if (i == 0) {
      $("#tblOMeat").append("<tr></tr>");  
      var tr = $("#tblOMeat tr:last");  
      for (var j = 0; j < cols; j++) {
        tr.append("<th> Column "+(j+1)+"</th>");
      }
    }
    $("#tblOMeat").append("<tr></tr>");
    var tr = $("#tblOMeat tr:last");
    tr.css('background-color', bgColor);
    for (var j = 0; j < cols; j++, _elementCount++) {
      tr.append("<td>"+_RandomText[_elementCount]+"</td>");
      if (_elementCount == _RandomText.length) {
        _elementCount = 0;
      }
    }
  }
}
function addComment(obj) {
  var title = $.truncateWithEllipses(obj.content, 25);
  var count = $("#comments div").length;
  var commentid = "comment" + count;
  $("#comments").append('<div class="comment" id="'+commentid+'"><h4>'+title+'</h4><p class="date">'+(new Date())+'</p><p class="commentContent">'+obj.content+'</p><p class="rating">Rating: '+obj.rating+'</p></div>');  
}
function addCommentAside(obj) {
  var title = $.truncateWithEllipses(obj.content, 25);
  var count = $("#commentsSummary li").length;
  var commentid = "comment" + count;
  $("#commentsSummary").append('<li class="clickable" data-commentId="' + commentid + '">' + title + '</li>');
  $("#commentsSummary li:last").click(navToComment);
}
function navToComment() {
  var el = $(this);
  //console.dir(el);
  var navTo = el.attr("data-commentId");
  $("body").scrollTo("#"+navTo, 1000);
}
$(document).ready(function() {
  /**
   * Add to the jQuery base with a function that decodes a URL into key value pairs.
   * 
   * @param {string} name - the name of the HTTP GET parameter we're seeking
   */
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
        return null;
      }
      else{
        return decodeURI(results[1]) || 0;
      }
  }

  $.truncateWithEllipses = function(text, max) {
    if (isNaN(max) || max < 0) {
      max = 25;
    }
    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); 
  }

  /*
  populate an array with bacon ipsum
  */
  $.getJSON('https://baconipsum.com/api/?callback=?', { 
    'type': 'all-meat', 
    'start-with-lorem': 1, 
    'sentences': 100 
  }, function(baconGoodness) {
    if (baconGoodness && baconGoodness.length > 0) {
      _RandomText = String(baconGoodness).split(" ");
    }
    var rows = $.urlParam("rows");
    var cols = $.urlParam("cols");
    createTable(rows, cols);
  });
  
  
  /**
   * Take action on the createTblForm in table.html
   */
  $("#createTblForm").submit(function() {
    var cols = $("#createTblForm input[name='cols']").val();
    var rows = $("#createTblForm input[name='rows']").val();
    createTable(rows, cols);
    return false;
  });
  $("#resetTbl").click(function() {
    $("#tblOMeat").html("");
  });
  /**
   * Take action on the addCommentFrm in blog.html
   */  
  $("#addCommentFrm").submit(function() {
    var content = $("#commentField").val();
    var rating = $("#commentRating").val();
    var comment = {
      content: content,
      rating: rating
    };
    console.dir(comment);
    addComment(comment);
    addCommentAside(comment);
    $("#addCommentFrm")[0].reset();
    return false;
  });

  $(".clickable").click(navToComment);

  $("#baconIpsumBtn").click(function() {
    $.getJSON('https://baconipsum.com/api/?callback=?', { 
      'type': 'all-meat', 
      'start-with-lorem': 0, 
      'sentences': 4 
    }, function(baconGoodness) {
      $("#commentField").val(baconGoodness);
    });
  });
});