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
  // create 20 squares using divs
 for (let i = 0; i < 20; i++){
   $('body').append('<div class= "squares"></div>')
 }
 //change color of squares to brush color
$('.square').on('click', function(){
    var getColor = $('.brush').css('background')
    $(this).css('background', getColor)

})
