$(document).ready(function () {
  localStorage.clear();
  $("#repos").hide();
  $('#toggleR').hover(() => {
    $('#repos').animate({
        width: 'toggle',
        height: 'toggle',
    });
});
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.has('Image'); // true
  let user = searchParams.get('Image');


  $.ajax({
    url: 'https://api.github.com/users/' + user + "/" + "repos",
    method: 'GET',
  }).then((res) => {
var data = res;
console.log(data);
x = 0;
data.forEach((data) => {
    $('#repos').append("<br><a class=\"listCont list-group-item border card-link\" id=\"repoLink" + x + "\">.</a><br>");
    $("#repoLink" + x).text(data.name)
    $("#repoLink" + x).attr('href', 'https://github.com/' + user + "/" + data.name);
    x += 1;
})
  });

  $.ajax({
    url: 'https://api.github.com/users/' + user,
    method: 'GET',
  }).then((res) => {
    var data = res;
    console.log(data);
    $("#badge").text(data.public_repos);
    $('#avatar').attr('src', data.avatar_url);
    $('#user').append(data.login);
    $('#id').append(data.id);
    $('#followers').append(data.followers);
    $('#following').append(data.following);
    $('#pRepos').append(data.public_repos);
    $('#gitHubProfile').attr('href', 'https://github.com/' + user)
    $('#gitHub').attr('href', 'https://github.com/')
  });

});