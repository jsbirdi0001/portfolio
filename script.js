/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";


}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";


}

$(".readMore").on("click",function(){
	$(this).siblings(".readText").fadeToggle();
	if($(".readMore").html() == "Read More"){
		$(this).html("Read Less");
	}
	else{
		$(this).html("Read More");
	}
})


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(".menubar a").click(function(){
	$("#mySidenav").css("width","0px");
})



// Loading JavaScript
// create the loading sign
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}
