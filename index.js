let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

function duaxe1(){
    var id = null;
    var idxe1 = document.getElementById("animate");
    var pos = a;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
      if(pos == 1120){
        clearInterval(id);
      } else {
        pos++;
        idxe1.style.left = pos + "px";
      }
    }
  }
  function duaxe2(){
    var id = null;
    var idxe1 = document.getElementById("animate2");
    var pos = b;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame(){
      if(pos == 1120){
        clearInterval(id);
      } else {
        pos++;
        idxe1.style.left = pos + "px";
      }
    }
  }
  
  function duaxe3(){
    var id = null;
    var idxe1 = document.getElementById("animate3");
    var pos = c;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame(){
      if(pos == 1120){
        clearInterval(id);
      } else {
        pos++;
        idxe1.style.left = pos + "px";
      }
    }
  }
function myMove() {
    duaxe1();
    duaxe2();
    duaxe3();

    if(a > b && b > c){ 
        
        setTimeout(function(){ alert("thứ tự xe về là đỏ đen xanh"); }, 11000);
      
      }
      if(a > c && c > b){
        setTimeout(function(){ alert("thứ tự xe về là đỏ xanh đen"); }, 11000);
      }
      if(b > c && c > a){
        setTimeout(function(){ alert("thứ tự xe về là đen  xanh đỏ"); }, 11000);
      }
      if(b > a && a > c){
        setTimeout(function(){ alert("thứ tự xe về là đen đỏ xanh"); }, 11000);

      }
      if(c > a && a > b){
        setTimeout(function(){ alert("thứ tự xe về là  xanh đỏ đen"); }, 11000);

      }
      if(c > b && b > a){
        setTimeout(function(){ alert("thứ tự xe về là  xanh đen đỏ"); }, 11000);
      }
 
  }
  function reloadpage(){
    location.reload();
  }