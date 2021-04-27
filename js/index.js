$(document).ready(function () {
  localStorage.clear();
  console.log('Window Ready.');
  $(document).on('mousemove', function (e) {
    $('#coords').html(
      '    Page Coords: Y: ' + e.clientY + '    X: ' + e.clientX
    );
  });

  $('#userName').mouseenter(function () {
    $('#userName').css({ 'background-color': 'pink' });
  });
  
  $('#userName').mouseleave(function () {
    $('#userName').css({ 'background-color': 'red' });
  }); 

  // $('#letsGo').mouseenter(function () {
  //   $('#letsGo').animate();
  // });

  $('input').keyup(function (e) {
    console.log(e.target.value);
  });

  $('#letsGo').on('click', function (e) {
    e.preventDefault();
    console.log(userName);
  });
});
