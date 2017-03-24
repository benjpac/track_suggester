
$(document).ready(function()) {
  $("form#trackPicker").submit(function() {
    event.preventDefault();
    var question1 = $("input:radio[name=operator]:checked").val();
    var question2 = $("input:radio[name=operator]:checked").val();
    var question3 = $("input:radio[name=operator]:checked").val();
    var question4 = $("input:radio[name=operator]:checked").val();
    var question5 = $("input:radio[name=operator]:checked").val();
    var rubyTrack;
    var androidTrack;
    var designTrack;
    if (question1 === "val1") {
      rubyTrack += ;

    } else if (question1 === "val2") {
      result = subtract(number1, number2);
    } else if (question1 === "val3") {
      result = multiply(number1, number2);
    } else if (question1 === "val4") {
      result = divide(number1, number2);
    }
  });
});
