
SendMail = () => {
  let params = {
    from_name: document.getElementById("client-name").value,
    email_id: document.getElementById("client-mail").value,
    message: document.getElementById("message").value
  }
  emailjs.send("contact-portfolio", "contact-portfolio", params).then(function (res){
    alert("Correo enviado" + res.status);
  }) 
}
