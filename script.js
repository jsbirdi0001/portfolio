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