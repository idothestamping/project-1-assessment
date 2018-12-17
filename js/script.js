document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");


var inputbox = document.getElementById("inputbox");
var output = document.getElementById("output");


document.getElementById("up").addEventListener("click", function() {
  console.log("+ clicked");
  up();
})

document.getElementById("down").addEventListener("click", function() {
  console.log("- clicked");
  down();
})


function up() {
	var i = inputbox.value;
    inputbox.value = ++i;
    output.textContent = inputbox.value;
    if (i > 0){
	document.getElementById("output").style.color = "grey";
	}
}

function down() {
	var i = inputbox.value;
    inputbox.value = --i;
    output.textContent = inputbox.value;
    if (i < 0){
    	document.getElementById("output").style.color = "red";
    }
}

});






