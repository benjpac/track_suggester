var result;
var calcResult = function(rubyTrack, androidTrack, designTrack) {
  if (rubyTrack > androidTrack && designTrack) {
    result = "ruby";
  } else if (androidTrack > rubyTrack && designTrack) {
    result = "android";
  } else if (designTrack > rubyTrack && androidTrack) {
    result = "design";
  }
  return result
}

$(document).ready(function() {
  $("form#trackPicker").submit(function() {
    event.preventDefault();
    debugger;
    var name = $("#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var rubyTrack = 0;
    var androidTrack = 0;
    var designTrack = 0;
    if (question1 === "large") {
      rubyTrack += .2;
      androidTrack += 1;
      designTrack += .5;
    } else if (question1 === "small") {
      rubyTrack += 1;
      androidTrack += .2;
      designTrack += .5;
    }
    alert(calcResult(rubyTrack, androidTrack, designTrack));
  });
});
