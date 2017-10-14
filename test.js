var name = "test_cookie";
var value = "test_value";
var expires = "";
var date = new Date();
date.setTime(date.getTime() + (days*24*60*60*1000));
expires = "; expires=" + date.toUTCString();
document.cookie = name + "=" + value + expires + "; path=/";
