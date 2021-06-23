$(function() {
    $(document).on("click", '.js-edit-comment-button', function(e){
        e.preventDefault();
        const reviewId = $(this).data("review-id")
        switchToEdit(reviewId)
    })
 
    $(document).on("click", '.js-button-edit-review-cancel', function() {
        clearErrorMessages()
        const reviewId = $(this).data("review-id")
        switchToLabel(reviewId)
    })
 
    $(document).on("click", '.js-button-review-update', function() {
        clearErrorMessages()
        const reviewId = $(this).data("review-id")
        submitReview($("#js-textarea-comment-" + reviewId).val(), reviewId)
             .then(result => {
                $("#js-comment-" + result.review.id).html(result.review.comment.replace(/\r?\n/g, '<br>'))
                switchToLabel(result.review.id)
            })
            .catch(result => {
                const reviewId = result.responseJSON.review.id
                const messages = result.responseJSON.errors.messages
                showErrorMessages(reviewId, messages)
            })
    })
 
    function switchToLabel(reviewId) {
        $("#js-textarea-comment-box-" + reviewId).hide()
        $("#js-comment-" + reviewId).show()
    }
 
    function switchToEdit(reviewId) {
        $("#js-comment-" + reviewId).hide()
        $("#js-textarea-comment-box-" + reviewId).show()
    }
 
    function showErrorMessages(reviewId, messages) {
        $('<p class="error_messages text-danger">' + messages.join('<br>') + '</p>').insertBefore($("#js-textarea-comment-" + reviewId))
    }
 
    function submitReview(comment, reviewId) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                type: 'PATCH',
                url: '/reviews/' + reviewId,
                data: {
                    review: {
                        comment: comment
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
 