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

    function ToggleTextOne() {
      let dots = document.getElementById("dots-one");
      let moreText = document.getElementById("moretext-one");
      let buttonReadmore = document.getElementById("btn-readmore-one");
      let buttonReadless = document.getElementById("btn-readless-one");

    
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

    function ToggleTextTwo() {
      let dots = document.getElementById("dots-two");
      let moreText = document.getElementById("moretext-two");
      let buttonReadmore = document.getElementById("btn-readmore-two");
      let buttonReadless = document.getElementById("btn-readless-two");
    
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

    function ToggleTextThree() {
      let dots = document.getElementById("dots-three");
      let moreText = document.getElementById("moretext-three");
      let buttonReadmore = document.getElementById("btn-readmore-three");
      let buttonReadless = document.getElementById("btn-readless-three");
    
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
    
    function ToggleTextFour() {
      let dots = document.getElementById("dots-four");
      let moreText = document.getElementById("moretext-four");
      let buttonReadmore = document.getElementById("btn-readmore-four");
      let buttonReadless = document.getElementById("btn-readless-four");
    
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

    function ToggleTextFive() {
      let dots = document.getElementById("dots-five");
      let moreText = document.getElementById("moretext-five");
      let buttonReadmore = document.getElementById("btn-readmore-five");
      let buttonReadless = document.getElementById("btn-readless-five");
    
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
    
    