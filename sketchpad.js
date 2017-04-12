


$(document).ready(function(){

//Appends a sketchpad div (block) to .container class element
//Inner loop makes 16 blocks for every time outer loop is run
for (var i = 0; i<16; i++)
{   
	for (var j=0; j<16; j++)
	{
		var newSketchpad=$("<div class='sketchpad'></div>");
	    newSketchpad.appendTo(".container");
    };
	
};

//Block changes color when hovering over square
$(".sketchpad").hover(function()
{  //when mouseenter block
  $(this).css("background-color", "#ba2581");
}
//to change color back when mouseleaves block
//, function()
//{ $(this).css("background-color", "#7d9ec0"); }
);

//Click on "clear grid" button, user prompt for squares per side
$("#button").click(function(){
  var squares=prompt("Time for a new board! How many squares per side this time?");
       $(".container").empty();
       console.log(squares);
  for (var k=0; k<squares; k++)
  {
  	for (var l=0; l<squares; l++)
  	{
  		var newSquare=$("<div>Hello</div>");
  		$("newSquare").width("48em/squares");
  		$("newSquare").height("48em/squares");
  		$("newSquare").css("background-color", "#7d9ec0");
  		$("newSquare").css("border-style", "solid");
		$("newSquare").css("border-width", ".25px");
		$("newSquare").css("display", "inline-block");
		$("newSquare").css("float", "left");
		$("newSquare").appendTo(".container");

  		console.log("added");
  	}
  }
});


});