//change color button is clicked

$('#set-color').on('click', function (n) {
   n.preventDefault()
   var color = $('#color-field').val()
   $('.brush').css('background', color)
   colorChange()
 })
 //...when enter is pushed
 $('#color-field').keypress(function (n) {
    if (n.which === 13) {
  n.preventDefault()
  colorChange()
    }
  })
  //coloring is fun!
function colorChange(){
  var color = $('color-field').val()

  }
  $('.brush').on('mouseover',function(){
    var color = $(this).css('background')
    brush[0].css('background',color)
  })

  // make board 8000 squares using divs
 for (let i = 0; i < 8000; i++) {
   $('body').append('<div class="squares"></div>')
 }
 //change color of squares to brush color
$('.square').on('mouseover'), function() {
    var getColor = $('.brush').css('background')
    $(this).css('background', getColor)
}
