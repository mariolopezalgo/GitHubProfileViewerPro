$(document).ready(function () {
    var userName = localStorage.getItem("userName");
    $.ajax({
        url: 'https://api.github.com/users/' + userName,
        method: 'GET',
      }).then((res) => {
        var data = res;
        console.log(data);
        $('#card').show(); 
        $('#result').text(data.login);
        $('#avatar').attr('src', data.avatar_url);
      });
});