// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour = $(".hour");
var timeNow = dayjs().format("HH");
var rootEl = $("#root");
var assignmentEl = $("<textarea>");
var timeBlock = $(".time-block");
var saveBtn = $("#saveBtn");
var textRows = [
  $("#hour-9"),
  $("#hour-10"),
  $("#hour-11"),
  $("#hour-12"),
  $("#hour-1"),
  $("#hour-2"),
  $("#hour-3"),
  $("#hour-4"),
  $("#hour-5"),
];
var textPlace = [
  $("#9amtext"),
  $("#10amtext"),
  $("#11amtext"),
  $("#12pmtext"),
  $("#1pmtext"),
  $("#2pmtext"),
  $("#3pmtext"),
  $("#4pmtext"),
  $("#5pmtext"),
];
$(function () {
  var today = dayjs().format("dddd, MMMM D, YYYY [at] hh:mm a ");
  $("#currentDay").text(today);

  function assignDynamicClass() {
    for (var i = 0; i < textPlace.length; i++) {
      if (textPlace.length + 9 == timeNow) {
        textPlace[i].addClass("present");
      } else if (textPlace.length + 9 > timeNow) {
        textPlace[i].addClass("future");
      } else {
        textPlace[i].addClass("past");
      }
      console.log(textPlace.length)
    }
  }
  assignDynamicClass();

  function readAssignmentFromStorage() {
    var assignment = localStorage.getItem("assignment");
    if (assignment) {
      assignment = JSON.parse(assignment);
    } else {
      assignment = [];
    }
    return assignment
  }
  function saveAssignemntToStorage(assignment) {
    localStorage.setItem("assignment", JSON.stringify(assignment));
  }
  function printAssingmentData() {
    var assignments = readAssignmentFromStorage();
    for (var i = 0; i < assignments.length; i += 1) {
      var assignment = assignments[i];
      var assignmentTime = dayjs().format("HH");
      var rowEl = $("<tr>");
      var nameEl = $("<td>").text(assignment.name);
      var typeEl = $("<td>").text(assignment.type);
      var timeEl = $("<td>").text(assignmentTime.format("HH:mm"));
      var deleteEl = $(
        '<td><button class="btn btn-sm btn-delete-assignment" data-index="' +
          i +
          '">X</button></td>'
      );
      rowEl.append(nameEl, typeEl, timeEl, deleteEl);
      assignmentEl.append(rowEl);
    }
  }
  function handleDeleteProject() {
    var projectIndex = parseInt($(this).attr("data-index"));
    var projects = readAssignmentFromStorage();
    projects.splice(projectIndex, 1);
    saveAssignemntToStorage(projects);
    printAssingmentData();
  }
  function handleAssignmentFormSubmit(event) {
    event.preventDefault();
    var assignmentName = assignmentEl.val().trim();
    var newAssignmet = {
      name: assignmentName,
    };
    var projects = readAssignmentFromStorage();
    projects.push(newAssignmet);
    saveAssignemntToStorage();
    printAssingmentData();
    handleDeleteProject();
  }
  saveBtn.on("click", handleAssignmentFormSubmit);
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
