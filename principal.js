function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("popup").style.display = "none";
    
  }
function openRegister(){
  document.getElementById("form").style.display = "block";
  document.getElementById("myForm").style.display = "none";


}
function CloseRegister(){
  document.getElementById("form").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

function Modificar(){

  var input, filter, ul, li, a, i;

  input = document.getElementById("destino");

  filter = input.value.toUpperCase();

  ul = document.getElementById("box-search");

  li = ul.getElementsByTagName('li');

  if(input.value.length == 0){ /* 1= Redondo */
      ul.style.display = "none";
      return;
  }else{
      ul.style.display = "block";
      input.style["border-bottom-left-radius"]="0";
      input.style["border-bottom-right-radius"]="0";
  }
  
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
          if (input.value.length == 0){
              ul.style.display = "none";
              input.style["border-bottom-left-radius"]="1";
              input.style["border-bottom-right-radius"]="1";
          }
      } else {
          li[i].style.display = "none";
      }
  }

}

const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form"); // var cambia y const no
const menj = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    let valiEmail= /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
    if(!valiEmail.test(email.value)){  //si valiEmail es falso
        warnings+= "El mail no es valido \n";
        entrar=true;
    }
    if(password.value.length < 5){
        warnings+= "La contraseña no cumple con los caracteres minimos \n";
        entrar=true;
    }
    if(password.value != password2.value){
        warnings+= "Las contraseñas no coinciden \n";
        entrar=true;
    }
    if(entrar){
        alert(warnings);
    }
})

const naveToggle = document.querySelector(".nav-barra")
const naveMenu = document.querySelector(".menuNav")

naveToggle.addEventListener("click",()=>{
    naveMenu.classList.toggle("menuNavVisible");
})