$(document).ready(function() {
  // Display current day
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  // Generate time blocks
  for (let i = 9; i <= 17; i++) {
    let timeBlock = $(`
      <div id="hour-${i}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${i <= 12 ? i : i - 12}${i < 12 ? "AM" : "PM"}</div>
        <textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem("hour-" + i) || ""}</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `);
    $(".container-lg").append(timeBlock);
  }

  // Update time block colors
  function updateTimeBlockColors() {
    const currentHour = dayjs().hour();
    $(".time-block").each(function() {
      const blockHour = parseInt($(this).attr("id").split("-")[1]);
      $(this).removeClass("past present future");
      if (blockHour < currentHour) {
      $(this).addClass("past");
      } else if (blockHour === currentHour) {
      $(this).addClass("present");
      } else {
      $(this).addClass("future");
      }
      });
      }
      
      updateTimeBlockColors();
      setInterval(updateTimeBlockColors, 60000); // Update colors every minute
      
      // Save button click listener
      $(".saveBtn").click(function() {
      const hour = $(this).parent().attr("id");
      const description = $(this).siblings(".description").val();
      localStorage.setItem(hour, description);
      });
      });
