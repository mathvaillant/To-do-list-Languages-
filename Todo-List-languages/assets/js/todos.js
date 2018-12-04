//Click on icon to make todo be done
$("ul").on("click", "#spanDone", function(event){
	//Grab to-do to send to done todos
	var removedtodo = $(this).parent().text();
	$("#ul-done").append("<li>" + removedtodo + "  <i class='fas fa-check'></i></li>");
	//fadeOut todo untill it's deleted
	$(this).parent().fadeOut(500,function(){
		// Remove todo
		$(this).remove();
	});
	event.stopPropagation();
});

//Click on X to delete todo just added
$("ul").on("click", "#spanRemove", function(event){
	$(this).parent().fadeOut(500,function(){
		// Remove todo
		$(this).remove();
	});
	event.stopPropagation();
});


// Add new Todo with Enter key
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("#ul-todo").append("<li class='container row justify-content-between m-0 p-0'><span id='spanDone'><i class='fas fa-check'></i></span>" + todoText + "<span id='spanRemove'><i class='fas fa-times'></i></span></li>");
	}
});

// SlideDown Plus Icon 
$(".fa-caret-square-down").click(function(){
	$("input[type='text']").slideDown();
});

// SlideUp Plus Icon 
$(".fa-caret-square-up").click(function(){
	$("input[type='text']").slideUp();
});



// Button Neustart to Reset Everyting
$("#reset").on("click", function(){
	//Clean input
	$("input[type='text']").val("");
	//Clean Heutiger Zeitplan
	$("#ul-todo li").remove();
	//Clean Heute Gemacht
	$("#ul-done li").remove();
});



