var $ = jQuery;
$(document).ready(function () {
  "use strict";
  
 
  
  var player = 1;
  
  $('.square').on('click', function (event) {
    var squareSelected = $(this);
    
    if (squareSelected.hasClass('x') || squareSelected.hasClass('o')) {
      window.alert('already selected!');
    } else {
      if (player === 1) {
        squareSelected.addClass('x');
        if (checkIfPlayerWon('x')) {
          //alert('Great! Player ' + player + ' won!');
          var win = 'Great! Player ' + player + ' won!';
          $('.winner').append(win);
          $('.square').hide(1200);
        } else {
          player = 2;
        }
      } else {
        squareSelected.addClass('o');
        if (checkIfPlayerWon('o')) {
         // alert('Great! Player ' + player + ' won!');
          var win = 'Great! Player ' + player + ' won!';
            $('.winner').append(win); 
            $('.square').hide(1200);
        } else {
          player = 1;
        }
      }
    }
  });
   
  function checkIfPlayerWon (sign) {
    if ($('.sq1').hasClass(sign) && $('.sq2').hasClass(sign) && $('.sq3').hasClass(sign)) {
      return true;
    } else if ($('.sq4').hasClass(sign) && $('.sq5').hasClass(sign) && $('.sq6').hasClass(sign)) {
      return true;
    } else if ($('.sq7').hasClass(sign) && $('.sq8').hasClass(sign) && $('.sq9').hasClass(sign)) {
      return true;                                    
    } else if ($('.sq1').hasClass(sign) && $('.sq4').hasClass(sign) && $('.sq7').hasClass(sign)) {
      return true;                                
    } else if ($('.sq2').hasClass(sign) && $('.sq5').hasClass(sign) && $('.sq8').hasClass(sign)) {
      return true;
    } else if ($('.sq3').hasClass(sign) && $('.sq6').hasClass(sign) && $('.sq9').hasClass(sign)) {
      return true;                                    
    } else if ($('.sq1').hasClass(sign) && $('.sq5').hasClass(sign) && $('.sq9').hasClass(sign)) {
      return true;
    } else if ($('.sq3').hasClass(sign) && $('.sq5').hasClass(sign) && $('.sq7').hasClass(sign)) {
      return true;                                    
    } else {
      return false;                        
    }
  }
  
});

$('.playAgain').click(function () {
  document.location.reload(true);                    
});



