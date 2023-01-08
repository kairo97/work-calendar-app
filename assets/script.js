// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour = $('.hour')
var timeNow = dayjs().format('HH:mm');
var schedule = ['#9amtext, #10amtext, #11amtext, #12pmtext, #1pmtext, #2pmtext, #3pmtext, #4pmmtext, #5pmtext'];
var times = ['#hour-9, #hour-10, #hour-11, #hour-12, #hour-1, #hour-2, #hour-3, #hour-4, #hour-6'];
var saveBtn = $('#saveBtn');
var tenAm = $('hour10');
$(function () {
var today = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm ');
$('#currentDay').text(today);

if (timeNow == times.length+9) {
    $('.description').addClass('present')
} else if (timeNow <= times.length+9) {
    $('.description').addClass('past')
} else {
    $('.description').addClass('future')
}

var saveInfo = function (event) {
    localStorage.setItem('input1', JSON.stringify(input1));
    localStorage.getItem('input1');
    console.log(input1);
    };

saveBtn.on('click', saveInfo);})



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //