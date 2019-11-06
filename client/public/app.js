
//correct?
function displayResults(events) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    events.forEach(function(event) {
      // match with what taylor has in html
      var tr = $("<tr>").append(
        $("<td>").text(event.name),
        $("<td>").text(event.description),
        $("<td>").text(event.link),
      );
  
      $("tbody").append(tr);
    });
  }

  // First thing: ask the back end for json with all events
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
