const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

var typed = new Typed(".mov",{
    strings: [,  "Mathematician","Software Developer","Blockchain Enthusiast"] ,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true

    })

  const form = document.querySelector('#my-form');
  form.addEventListener('submit', (event) => {
      // prevent the form from submitting
      event.preventDefault();
    
      // clear the form fields
      form.reset();
    });
    