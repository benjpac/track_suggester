
$(document).ready(function()) {
  $("form#trackPicker").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var rubyTrack;
    var androidTrack;
    var designTrack;
    if (question1 === "large") {
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
