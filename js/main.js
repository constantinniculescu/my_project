var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  

}

function toggle_visibility(parent) {
  var e = document.getElementById(parent.dataset.target);
  console.log(e);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}

document.addEventListener('DOMContentLoaded',function (e) {  
  document.querySelectorAll('a').forEach(function(elem){
    elem.addEventListener('click',function(e){
      toggle_visibility(this);
    });
  })
})


var loadFile = function(event) {
	var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
  
};



function load () {
  document.getElementById('register').style="display:none;";
  document.getElementById('check').value="Register";
}
function register () {
  document.getElementById('register').style="height:100%;";
  document.getElementById('login').style="display:none";
  document.getElementById('check').value="Login";
  //document.getElementById('header').style="display:none";
}
function login () {
  document.getElementById('register').style="display:none;";
  document.getElementById('login').style="display:block;";
  document.getElementById('check').value="Register";
  //document.getElementById('header').style="display:none";
}
function check () {
  
  var che= document.getElementById('check').value;
  if(che=="Login")
  {
  document.getElementById('register').style="display:none;";
  document.getElementById('login').style="display:block;";
  document.getElementById('check').value="Register";
  }
  else
  {
    document.getElementById('register').style="height:100%;";
    document.getElementById('login').style="display:none";
    document.getElementById('check').value="Login";
  }
  
}
function validation()
{
  
  var check=document.getElementById('email').type;
  if(check=="email")
  {
    var value=document.getElementById('email').value;
    if(value=="")
    {

      document.getElementById('error').innerHTML="Incorrect Email Address";

    }
  }
}












