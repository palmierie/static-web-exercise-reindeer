var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

function looper(){ 
  for (var i = 0; i < reindeer.length; i++){
   // debugger;
  hohohoElement.innerHTML += `${colors[i] + " " + reindeer[i]} <br>`;
  }
}

looper();