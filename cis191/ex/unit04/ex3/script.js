$(document).ready(function() {
  if ($("#storiesPage").length > 0) {
    $("article > div").BaconIpsum({ type:'all-meat', paras:15, start_with_lorem:false });
    $("aside > div").BaconIpsum({ type:'all-meat', paras:6, start_with_lorem:false });  
  } 
  if ($("#imagesPage").length > 0) {
    var items = Array("biltong.jpg", "ostrich.jpg", "warthog.jpg", "zebra_kudu.jpg");
    jQuery.each($("section li"), function(i, element) {
      var item = items[Math.floor(Math.random()*items.length)];  
      element.style.backgroundImage = "url("+item+")";
      $(element).on('click', { url: item }, function(event) {
        //console.dir(event);
        window.open(event.data.url);
      });
    });
  } 
});