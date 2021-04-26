$(document).ready(function () {
  localStorage.clear();
  console.log('Window Ready.');
  $(document).on('mousemove', function (e) {
    $('#coords').html('    Page Coords: Y: ' + e.clientY + '    X: ' + e.clientX);
  });

  $('#letsGo').on('click', function (e) {
    e.preventDefault();
    console.log(userName);
  });
});
