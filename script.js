// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code is not run until the browser has finished rendering all the elements
// in the html.
  (function(){    
    var save = document.getElementById('save');
var text = '';
save.addEventListener('click', function() {
  text = textarea.value;
  localStorage.setItem('text', text);
  console.log(text);
  
  var currentHour = moment().hour();
var timeBlocks = document.getElementsByClassName('time-block');
for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  var timeBlockHour = parseInt(timeBlock.id);
  if (timeBlockHour < currentHour) {
    timeBlock.classList.add('past');
  } else if (timeBlockHour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
}

var textarea = document.getElementById('textarea');
var save = document.getElementById('save');
var text = '';
save.addEventListener('click', function() {
  text = textarea.value;
  localStorage.setItem('text', text);
  console.log(text);
});
});
});
//   // Add a listener for click events on the save button. This code should se the id in the containing time-block as a key to save the user input in local storage. 

  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. In the future, add a   

  // flag to the class that is true when the   class is not present and false 


  
  
  
  
  
  
  // HINT: What does `this` reference in the click listener
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
  // TODO: Add code to display the current date in the header of the page.

