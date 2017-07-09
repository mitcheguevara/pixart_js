//change color button is clicked
$('#set-color').on('click', function (n) {
   n.preventDefault()
   var color = $('#color-field').val()
   $('.brush').css('background', color)
 })
 //...when enter is pushed
 $('#color-field').keypress(function (n) {
    if (n.which === 13) {
     var color = $('#color-field').val()
      $('.brush').css('background', color)
    }
  })
