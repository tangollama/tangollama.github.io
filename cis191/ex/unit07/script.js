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

  $("#createTblForm").submit(function() {
    var cols = $("#createTblForm input[name='cols']").val();
    var rows = $("#createTblForm input[name='rows']").val();
    for (var i = 0; i < rows; i++) {
      var tr = $("#cart").append("<tr></tr>");
      for (var j = 0; j < cols; j++) {
        tr.append("<td>"+j+"</td>");
      }
    }
    return false;
  });
});