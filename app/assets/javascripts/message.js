$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var addImage = '';
    if (message.image.url) {
      addImage = `<img src="${message.image.url}" class="lower-message__image">`;
    }
    var html = `
        <div class="chat__contents__content" data-message-id="${message.id}">
          <div class="chat__contents__content-top" data-message-id="${message.id}">
            <div class="chat__contents__content-top__user">${message.name}</div>
            <div class="chat__contents__content-top__timestamp">${message.date}</div>
          <div class="chat__contents__content__text">
            <p>${message.content}</p>
            ${addImage}
          </div>
        </div>`;
    return html;
  }

  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formdata = new FormData(this);
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

  $(function() {
    // function buildMessage(message){
    //   var messages = $('.chat__contents').append(html)
    //   var insertImage = '';
    //   if (image.url) {
    //     insertImage = `<img src="${image.url}">`;
    //   }
    //   var html = `
    //     <div class="chat__contents__content" data-message-id="${id}">
    //       <div class="chat__contents__content-top" data-message-id="${id}">
    //         <div class="chat__contents__content-top__user">${name}</div>
    //         <div class="chat__contents__content-top__timestamp">${date}</div>
    //       <div class="chat__contents__content__text">
    //         <p>${content}</p>
    //         ${insertImage}
    //       </div>
    //     </div>`;
    // }
    $(function() {
      setInterval(update, 5000);
    });
    function update(){
      if($('.chat__contents')[0]){
        var message_id = $('.chat__contents__content:last').data('message-id');
      } else {
        var message_id = 0
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: { message : { id : message_id } },
        dataType: 'json'
      })
      .done(function(data){
        console.log(data.length)
        if (data.length){
        $.each(data, function(i, data){
          console.log(data.image)
          var html = buildHTML(data);
      $('.chat__contents').append(html)
          console.log('success')
        })
      }
      })
      .fail(function(){
        console.log('fail')
      })
    }
  })

  // setInterval(function() {
  //   function buildHTML(message) {
      // var insertImage = '';
      // if (message.image.url) {
      //   insertImage = `<img src="${message.image.url}">`;
      // }
      // var html = `
      //   <div class="chat__contents__content" data-message-id="${message.id}">
      //     <div class="chat__contents__content-top" data-message-id="${message.id}">
      //       <div class="chat__contents__content-top__user">${message.name}</div>
      //       <div class="chat__contents__content-top__timestamp">${message.date}</div>
      //     <div class="chat__contents__content__text">
      //       <p>${message.content}</p>
      //       ${insertImage}
      //     </div>
      //   </div>`;
  //     return html
  //   }
  //   var interval = setInterval(function() {
  //     if (window.location.href.match(/\/groups\/\d+\/messages/)) {
  //       $.ajax({
  //         url: location.href,
  //         type: 'GET',
  //         dataType: 'json'
  //       })
  //       .done(function(data) {
  //         console.log("SUCCESS")
  //         var id = $('.chat__contents_content').data('messageId')
  //         console.log(id)
  //         var insertHTML = '';
  //         json.messages.forEach(function(message){
  //           if (message.id > id ) {
  //             insertHTML += buildHTML(message);
  //           }
  //         });
  //         $('.chat__contents').prepend(insertHTML);
  //       })
  //       .fail(function(data) {
  //         alert('自動更新に失敗しました')
  //       });
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 5000 );
  // })
});
