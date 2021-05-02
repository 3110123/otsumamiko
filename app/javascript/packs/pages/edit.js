$(function() {
   //eでイベントオブジェクトを受け取る
   $(document).on("click", '.js-edit-comment-button', function(e){
      //イベント本来の挙動をキャンセル
       e.preventDefault();
       //同じ値がコードに散在する時に、constを用いて数値リテラルを割り当てる。dataでHTML内に付与されたdata属性に対して、取得、設定、変更などができる。
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
       // textareaのid値取得。review.commentがval()の中に入る。
       submitReview($("#js-textarea-comment-" + reviewId).val(), reviewId)
           //下のPromiseオブジェクト(resolve/reject関数)での結果を受け取るのがthenメソッド
           //正規表現で/\r?\n/gとすることで改行コードを取り出して<br>にreplace
           //resultにはupdateしたparamsの値
            .then(result => {
               $("#js-comment-" + result.review.id).html(result.review.comment.replace(/\r?\n/g, '<br>'))
               switchToLabel(result.review.id)
           })
           // エラーハンドリング。未入力400エラー
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
      // #でidを指定。上を隠して、下を表示。
       $("#js-comment-" + reviewId).hide()
       $("#js-textarea-comment-box-" + reviewId).show()
   }

   function showErrorMessages(reviewId, messages) {
      //js-textarea-comment-idの前にエラーメッセージを表示
       $('<p class="error_messages text-danger">' + messages.join('<br>') + '</p>').insertBefore($("#js-textarea-comment-" + reviewId))
   }

   function submitReview(comment, reviewId) {
      // Promiseは非同期処理の最終的な完了もしくは失敗を表すオブジェクト
      // resolve: 処理の成功を通知するための関数
      // reject: 処理の失敗を通知するための関数
       return new Promise(function(resolve, reject) {
           $.ajax({
               type: 'PATCH',
               url: '/reviews/' + reviewId,
               data: {
                   review: {
                       comment: comment
                   }
               },
               //なしだとCSRFのエラーが出たため、追加。tokenを発行せずにpostすることを防ぐ。
               headers: {
                'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
              },
               // done ajax通信が成功した時(HTTPステータスコードで成功か失敗を判断)非同期通信のまま返り値を得ることができる。
           }).done(function (result) {
               resolve(result)
               // fail ajaxが失敗した時
           }).fail(function (result) {
               reject(result)
           });
       })
   }

   function clearErrorMessages() {
       $("p.error_messages").remove()
   }
});
