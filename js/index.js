$(document).ready(function () {
  console.log('Window Ready.');
  $('#card').hide();

  $("#letsGo").on("click", function(e) {
    e.preventDefault();
    localStorage.clear();
    var userName = $("#userName").value();
    localStorage.setItem("userName", userName);
});
  //   $('#result').toggle();
  //   $('#avatar').toggle();
  //   $('#pp').toggle();
});


// $.ajax({
//   url: 'https://api.github.com/users',
//   method: 'GET',
// }).then((res) => {
//   var data = res;
//   console.log(data);
// });

// https://avatars.githubusercontent.com/u/79119798?v=4
