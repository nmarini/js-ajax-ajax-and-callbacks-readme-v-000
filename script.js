$(document).ready(function() {
  $.get('sentence.html', function(response) {
    $('#sentences').html(response);
  }).fail(function(error) {
    console.log('Something went wrong: ' + error.statusText);
  });
});
