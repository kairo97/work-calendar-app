// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour = $('.hour')
var timeNow = dayjs().format('HH:mm');
var times = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
var input1= $('#9amtext');
var input2= $('#10amtext');
var input3 = $('#11amtext');
var input4 = $('#12pmtext');
var input5 = $('#1pmtext');
var input6 = $('#2pmtext');
var input7 = $('#3pmtext');
var input8 = $('#4pmmtext');
var input9 = $('#5pmtext');
var saveBtn = $('#saveBtn');
var tenAm = $('hour10');
$(function () {
var today = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm ');
$('#currentDay').text(today);

var saveInfoH9 = function (event) {
    event.preventDefault();
    localStorage.setItem('input1', JSON.stringify(input1));
    localStorage.getItem('input1');
    console.log(input1);
    }
function getTime(){
    var rightNow = dayjs().format('HH')
}
saveBtn.on('click', saveInfoH9);

}
)



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