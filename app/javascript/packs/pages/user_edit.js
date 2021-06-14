console.log("user_edit.jsだよ");
$(function() {
  $(document).on("click", '.js-edit-user-button', function(e){
      e.preventDefault();
      const userId = $(this).data("user-id")
      console.log(userId);
      switchToEdit(userId)
  })

  $(document).on("click", '.js-button-edit-user-cancel', function() {
      clearErrorMessages()
      const userId = $(this).data("user-id")
      switchToLabel(userId)
  })

  $(document).on("click", '.js-button-user-update', function() {
      clearErrorMessages()
      const userId = $(this).data("user-id")
      submitUser($("#js-textarea-name-" + userId).val(), $("#js-textarea-email-" + userId).val(), userId)
        .then(result => {
            $("#js-name-" + result.user.id).html(result.user.name.replace(/\r?\n/g, '<br>'))
            $("#js-email-" + result.user.id).html(result.user.email.replace(/\r?\n/g, '<br>'))
            switchToLabel(result.user.id)
        })
        .catch(result => {
            const userId = result.responseJSON.user.id
            const messages = result.responseJSON.errors.messages
            showErrorMessages(userId, messages)
        })
  })

  function switchToLabel(userId) {
    console.log("名前表示だよ〜" + userId);
      $("#js-textarea-name-" + userId).hide()
      $("#js-textarea-email-" + userId).hide()
      $("#js-textarea-user-box-" + userId).hide()
      $("#js-name-" + userId).show()
      $("#js-email-" + userId).show()
      $(".js-edit-user-button").show()
  }

  function switchToEdit(userId) {
    console.log("名前隠すよ〜" + userId);
      $("#js-name-" + userId).hide()
      $("#js-email-" + userId).hide()
      $(".js-edit-user-button").hide()
      $("#js-textarea-name-" + userId).show()
      $("#js-textarea-email-" + userId).show()
      $("#js-textarea-user-box-" + userId).show()
  }

  function showErrorMessages(userId, messages) {
      $('<p class="error_messages text-danger">' + messages.join('<br>') + '</p>').insertBefore($("#js-textarea-user-" + userId))
  }

  function submitUser(name, email, userId) {
      return new Promise(function(resolve, reject) {
        console.log("userId:" + userId);
        console.log("name:" + name);
        console.log("email:" + email);
          $.ajax({
              type: 'PATCH',
              url: '/mypages/' + userId,
              data: {
                  user: {
                      name: name,
                      email: email
                  }
              },
              headers: {
               'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
             }
          }).done(function (result) {
              resolve(result)
          }).fail(function (result) {
              reject(result)
          });
      })
  }

  function clearErrorMessages() {
      $("p.error_messages").remove()
  }
});
