$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var addImage = '';
    if (message.image.url) {
      addImage = `<img src="${message.image.url}" class="lower-message__image">`;
    }
    var html = `
    <div class="chat__contents__content">
      <div class="chat__contents__content-top">
        <div class="chat__contents__content-top__user">${message.user_name}</div>
        <div class="chat__contents__content-top__timestamp">${message.time}</div>
      </div>
      <div class="chat__contents__content__text">${message.content}${addImage}</div>
    </div>`;
    return html;
  }

  $('.form-js').on('submit', function(e) {
    e.preventDefault();

    var formdata = new FormData($(this).get(0));

    $.ajax({
      url: location.href,
      type: 'POST',
      data: formdata,
      dataType: 'json',
      contentType: false,
      processData: false
    })
    .done(function(message) {
      console.log('success')
      console.log(message)
      var html = buildHTML(message);
      $('.chat__contents').append(html)
      $('.form__message').val('');
      $('.btn').prop('disabled', false);
      $('.chat').animate({scrollTop: $('.chat__contents')[0].scrollHeight}, 'fast');
    })
    .fail(function(message) {
      console.log('error!');
      alert('メッセージを入力してください');
    })
  })
})
