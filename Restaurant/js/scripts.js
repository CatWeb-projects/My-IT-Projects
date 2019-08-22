$('.form-style #click').focus(function() {
  $(this).addClass("active");
});

$('.form-style #click').blur(function() {
  $(this).removeClass("active");
});


$(function(){
  $('.section-menu #spec').click(function(){
    $(this).toggleClass('focus')
  })
})


// $(function(){
//   $('.section-menu #spec').click(function(){
//     $(this).addClass('focus').siblings().removeClass('focus')
//   })
// })

// $(function(){
//     $('.section-menu #spec').click(function(){
//         $('.section-menu #spec.focus').removeClass('focus');
//         $(this).addClass('focus');
//     });
// });