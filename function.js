 function hola() {
    var ob = document.getElementById("title")
    if (ob.innerHTML == "Hola") {
        ob.innerHTML = "Chau";}
    else {ob.innerHTML = "Hola";}
    }
var num = 0
var images = ["https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Simmered-Meat-Ragu_exps59435_SD142780C08_16_3bC_RMS-1.jpg", 
"https://skinnyandtasty.com/wp-content/uploads/2021/04/Italian-Beef-Ragu.jpg", 
"https://i2.wp.com/foxeslovelemons.com/wp-content/uploads/2014/01/Lentil-Mushroom-Ragu1-1.jpg", 
"https://thewoodenskillet.com/wp-content/uploads/2020/12/beef-ragu-recipe-5-2.jpg", 
"https://sodelicious.recipes/wp-content/uploads/2017/10/c9762-25.05.2016-r1-ragu-sausage-pork-and-beef-ragu.jpg"]
function next() {
    var slider = document.getElementById("change");
    num++
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]
}

function prev() {
    var slider = document.getElementById('change');
    num--;
    if (num<0) {
        num=images.length-1;
    }
    slider.src=images[num];
}


const button = document.getElementById('boton');
const validacion = (e) => {
  e.preventDefault();
  const nombres = document.getElementById('name');
  const correo = document.getElementById('email');
  if (name.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    nombres.focus();
    return false;
  }    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (!emailValido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }  
  return true;
}
const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
submitBtn.addEventListener('click', validate);


