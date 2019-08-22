$(".content-8").ripples({
	resolution: 200,
	perturbance: 0.04,
});

$(".business-card").click(function() {
	$(".business-card").toggleClass("business-card-active");
});

$(".txtb").on("keyup", function(e) {
	//13 means enter button
	if(e.which == 13 && $(".txtb").val() != "") {
		let task = $("<div class='task'></div>").text($(".txtb").val());


		let check = $("<i class='fa fa-check'></i>").click(function() {
			var p = $(this).parent();
			p.fadeOut(function() {
				$(".comp").append(p);
				p.fadeIn();
			});
			$(this).remove();
		});;

		let del = $("<i class='fa fa-trash'></i>").click(function() {
			var p = $(this).parent();
			p.fadeOut(function() {
				p.remove();
			})
		});

		task.append(del,check);

		$(".notcomp").append(task);

		$(".txtb").val("");
	}
})