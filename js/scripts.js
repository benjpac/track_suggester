// define global variables
var result;

// function that calculates track with highest value
var calcResult = function(rubyTrack, androidTrack, designTrack) {
  if ((rubyTrack > androidTrack) && (rubyTrack > designTrack)) {
    result = "ruby";
  } else if ((androidTrack > rubyTrack) && (androidTrack > designTrack)) {
    result = "android";
  } else if ((designTrack > rubyTrack) && (designTrack > androidTrack)) {
    result = "design";
  }
  return result
}

$(document).ready(function() {
  $("form#trackPicker").submit(function() {
    event.preventDefault();

    // get question values from form
    var name = $("#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    // define track variables as numbers
    var rubyTrack = 0;
    var androidTrack = 0;
    var designTrack = 0;

    // if statements to calculate weight of answers and add to track variables
    if (question1 === "large") {
      rubyTrack += .2;
      androidTrack += 1;
      designTrack += .3;
    } else if (question1 === "small") {
      rubyTrack += 1;
      androidTrack += .2;
      designTrack += .3;
    }

    if (question2 === "yes") {
      rubyTrack += .2;
      androidTrack += .1;
      designTrack += 1;
    } else if (question2 === "somewhat") {
      rubyTrack += .4;
      androidTrack += .3;
      designTrack += .5;
    } else if (question2 === "no") {
      rubyTrack += .8;
      androidTrack += 1;
      designTrack += 0;
    }

    if (question3 === "yes") {
      rubyTrack += .4;
      androidTrack += 1;
      designTrack += .4;
    } else if (question3 === "somewhat") {
      rubyTrack += .3;
      androidTrack += .6;
      designTrack += .4;
    } else if (question3 === "no") {
      rubyTrack += .4;
      androidTrack += .3;
      designTrack += .4;
    }

    if (question4 === "web") {
      rubyTrack += 1.1;
      androidTrack += .3;
      designTrack += .5;
    } else if (question4 === "android") {
      rubyTrack += .3;
      androidTrack += 1.4;
      designTrack += .5;
    } else if (question4 === "design") {
      rubyTrack += 0;
      androidTrack += 0;
      designTrack += 1.5;
    }

    if (question5 === "yes") {
      rubyTrack += 1;
      androidTrack += 0;
      designTrack += .5;
    } else if (question5 === "no") {
      rubyTrack += .3;
      androidTrack += 1;
      designTrack += .3;
    }

    // pass totals to result function
    calcResult(rubyTrack, androidTrack, designTrack);

    if (result === "ruby") {
      $('#ruby').w2popup();
    } else if (result === "android") {
      $('#android').w2popup();
    } else if (result === "design") {
      $('#design').w2popup();
    }
  });
});
