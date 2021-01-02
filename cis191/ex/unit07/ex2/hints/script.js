$(document).ready(function () {
  /**
   * Add to the jQuery base with a function that decodes a URL into key value pairs.
   *
   * @param {string} name - the name of the HTTP GET parameter we're seeking
   */
  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      return null;
    } else {
      return decodeURI(results[1]) || 0;
    }
  };

  if (test1(true)) {
    if (test2(true)) {
      test3(true);
    }
  }

  $("#answerBtn").click(function () {
    var q = parseInt($("#formQ").val());
    // console.log(q);
    if (q == 1) {
      test1();
    } else if (q == 2) {
      test2();
    } else if (q == 3) {
      test3();
    } else if (q == 4) {
      test4();
    }
    return false;
  });
});
function test1(quiet) {
  var frm = $("#formTester");
  baconQ = frm.find("input[name='baconQ']");
  if (baconQ.length == 0) {
    output("No variable found by the name of baconQ. Try again.", quiet);
    return false;
  }
  var baconQs = frm.find("input[name='baconQ']");
  if (baconQs.length != 3) {
    output(
      "There must be three inputs with the name BaconQ. Try again.",
      quiet
    );
    return false;
  }
  baconQs.each(function () {
    if ($(this).attr("type") != "radio") {
      output("Incorrect input type for input named baconQ. Try again.", quiet);
      return false;
    } else {
    }
  });
  output(
    "<b>Question 1 Correct!</b> found 3 inputs named baconQ of type radio"
  );
  addQ2();
  return true;
}
function addQ2() {
  if ($("#q2Instructions").css("display") == "none") {
    $("#formQ").append("<option value='2'>Login form</option>");
    $("#q2Instructions").css("display", "block");
  }
}
function test2(quiet) {
  var frm = $("#formTester");
  // console.log("test2");
  var uname = frm.find("input[name='username']");
  var pswd = frm.find("input[name='password']");
  if (uname.length == 0 || uname.attr("type") != "text") {
    output("Did not find an appropriate input for username. Try again.", quiet);
    return false;
  }
  if (pswd.length == 0 || pswd.attr("type") != "password") {
    output("Did not find an appropriate input for password. Try again.", quiet);
    return false;
  }
  output("<b>Question 2 Correct!</b> created a username and password input.");
  addQ3();
  return true;
}
function addQ3() {
  if ($("#q3Instructions").css("display") == "none") {
    $("#formQ").append("<option value='3'>Save Password?</option>");
    $("#q3Instructions").css("display", "block");
  }
}
function test3(quiet) {
  var frm = $("#formTester");
  var save = frm.find("input[name='saveUsername']");
  if (save.length == 0 || save.attr("type") != "checkbox") {
    output(
      "Did not find an appropriate input for saveUsername. Try again.",
      quiet
    );
    return false;
  }
  output("<b>Question 3 Correct!</b> found saveUsername checkbox");
  addQ4();
  return true;
}
function addQ4() {
  if ($("#q4Instructions").css("display") == "none") {
    $("#formQ").append(
      "<option value='4'>Select your favorite game meat</option>"
    );
    $("#q4Instructions").css("display", "block");
  }
}
function test4(quiet) {
  var frm = $("#formTester");
  var gameSelect = frm.find("select[name='gameSelect']");
  if (gameSelect.length == 0) {
    output(
      "Did not find an appropriate input for gameSelect. Try again.",
      quiet
    );
    return false;
  }
  var options = gameSelect.find("option");
  if (options.length < 4) {
    output("Did not find 4 options within gameSelect. Try again.", quiet);
    return false;
  }
  output(
    "<b>Question 4 Correct!</b> found four options for gameSelect select box"
  );
  output("<img src='mission_accomplished.jpg' width='90%' />");
  return true;
}
function output(val, quiet) {
  if (!quiet) $("#outputWindow").html($("#outputWindow").html() + "\n" + val);
}
