var guess = Math.floor(Math.random()*100+1);
var count = 1;
document.getElementById("button id").onclick = function(){
  var n = document.getElementById("input id").value;
  if(n == guess){
    alert(" :) Successfully got the answer in " + count + " guess/es");
  }
  else if(n > guess){
    alert("Guess a Smaller number pls!!!");
    count++;
  }
  else {
    alert("Guess a Bigger Number pls!!!");
    count++;
  }
  
}