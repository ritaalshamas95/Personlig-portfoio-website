function on_form_sbmt() {
    var full_name = document.getElementById("id_full_name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("id_email").value;
    var message = document.getElementById("id_message").value;
  
    // Validering för telefonnummer
    if (!/^\d{10}$/.test(phone)) {
      alert("Telefonnumret måste innehålla 10 siffror");
      return false;
    }
  
    // Validering för e-post
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      alert("Ogiltig e-postadress");
      return false;
    }
  
    // Skicka formuläret
    alert("Formuläret har skickats");
    return true;
  }
  
  let more = document.querySelectorAll('.more');
  for (let i = 0; i<more.length; i++){
      more[i].addEventListener('click',function(){
          more[i].parentNode.classList.toggle('active')
  
      })
  
  }
  
  
  





  

