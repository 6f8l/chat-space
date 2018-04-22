$(document).on('turbolinks:load', function() {
// 順番で考えていく
  $(".chat__group_name").on("keyup", function() {
    var input = $(".chat__group_name").val();
    console.log(input);
  })
})
