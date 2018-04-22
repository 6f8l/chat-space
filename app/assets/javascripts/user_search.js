$(document).on('turbolinks:load', function() {

  var search_list = $("#chat-group-users");

  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix' id='chat-group-user-${user.id}'>
          <input name='chat_group[${user.id}][]' type='hidden' value='22'>
          <p class='chat-group-user__name'>${user.name}</p>
          <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
          </div>`
    search_list.append(html);
  };

  function appendNoUser(user) {
    var html = ``
    search_list.appned(html);
  };

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input);
    //$.ajax({オプション}).done({処理})
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name : input },
      dataType: 'json'
    })

      .done(function(users) {
        $("#chat-group-users").empty();
        if (users.length !== 0) {
          users.forEach(function(user) {
            appendUser(user);
          });
        } else {
          appendNoUser("一致するユーザーはいません")
        }
      })

      .fail(function() {
        alert('ユーザー検索に失敗しました')
      });
  });
});
