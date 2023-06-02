const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  // add event listener to close menu when a link is clicked
  const links = menu.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
      menu.classList.remove('flex')
      btn.classList.remove('open')
    })
  })

  // add event listener to close menu on medium and larger screens
  const mq = window.matchMedia('(min-width: 768px)')
  if (mq.matches) {
    menu.classList.add('hidden')
    menu.classList.remove('flex')
    btn.classList.remove('open')
  }
}


var typed = new Typed(".mov",{
    strings: [,  "Mathematician","Software Developer","Blockchain Enthusiast","lifelong learner",
                 "interested in Cryptography"] ,
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
    

    function ToggleText(elementId) {
      let dots = document.getElementById("dots-" +elementId);
      let moreText = document.getElementById("moretext-" + elementId);
      let buttonReadmore = document.getElementById("btn-readmore-" + elementId);
      let buttonReadless = document.getElementById("btn-readless-" + elementId);
    
      if (!dots.classList.contains("hidden")) {
        dots.classList.add("hidden");
        moreText.classList.remove("hidden");
        buttonReadmore.classList.add("hidden");
        buttonReadless.classList.remove("hidden");
      } else {
        dots.classList.remove("hidden");
        moreText.classList.add("hidden");
        buttonReadmore.classList.remove("hidden");
        buttonReadless.classList.add("hidden");
      }
    }
    

   
    
    