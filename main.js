document.querySelector('.navbar-toggler').addEventListener('click', function(){ 
    if(this.getAttribute('aria-expanded')) { 
      this.classList.toggle('bg-light');
    };
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7qrnyd2GWcE6NXI_pzhCP1qX2XxhtYchPEEY0e-IVSjgaf-yDGpxRclj0P13fbBIYBQ/exec'
  const form = document.forms['submit-to-google-sheet']
  
  const msg = document.getElementById('msg')
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        msg.innerHTML="Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },  2)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })



  

