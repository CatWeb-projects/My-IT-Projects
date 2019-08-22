$(function(){
		$('.d-flex .theme').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
		})
	})

$(document).ready(function(){
  $("#all").click(function(){
    $(".it, .hw, .el").show();
  });

  $("#it").click(function(){
    $(".it").show();
     $(".hw, .el").hide();
  });

  $("#hw").click(function(){
    $(".hw").show();
     $(".it, .el").hide();
  });

  $("#el").click(function(){
    $(".el").show();
     $(".it, .hw").hide();
  });
});