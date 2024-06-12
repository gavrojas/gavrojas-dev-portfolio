//* header fixed con scroll
window.onscroll = function() {headerFixed()};

let header = document.getElementById("navbar-head");
let sticky = header.offsetTop;

function headerFixed() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//* Carrousel projects
const btnLeft = document.querySelector(".left"),
      btnRight = document.querySelector(".right"),
      slider = document.getElementById("slider"),
      projects = document.querySelectorAll(".project");

let translateValue = 0,
    counter = 0;

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() =>{
  moveToRight();
}, 5000)

moveToRight = () =>{
  if (counter >= projects.length -1){
    translateValue = 0;
    counter = 0;
    slider.style.transform = `translate(-${translateValue}%)`;
    slider.style.transition = `none`
    return;
  }
  counter ++;
  translateValue = translateValue + (100 / projects.length);
  slider.style.transform = `translate(-${translateValue}%)`;
  slider.style.transition = `all ease .06s`
}

moveToLeft = () =>{
  counter --;
  if (counter <0){
    counter = projects.length -1;
    translateValue = (100 / projects.length) * (projects.length - 1);
    slider.style.transform = `translate(-${translateValue}%)`;
    slider.style.transition = `none`
    return;
  }
  translateValue = translateValue - (100 / projects.length);
  slider.style.transform = `translate(-${translateValue}%)`;
  slider.style.transition = `all ease .06s`;
}

//* Form contact
SendMail = () => {
  let params = {
    from_name: document.getElementById("client-name").value,
    email_id: document.getElementById("client-mail").value,
    message: document.getElementById("message").value
  }
  emailjs.send("contact-portfolio", "contact-portfolio", params).then(function (res){
    alert("Correo enviado 😊, Estado: " + res.status);
  }) 
}
