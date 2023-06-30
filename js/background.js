function changeBackgroundImage() {
    const element = document.getElementById('myBackground');
    const introImages = ['intro-2', 'intro-3', 'intro-4', 'intro-1'];
    element.style.background = `url('/images/intro-1.svg')`
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    let currentIndex = 0;

    setInterval(() => {
      const backgroundImage = `url('/images/${introImages[currentIndex]}.svg')`;
      element.style.background = backgroundImage;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';

      currentIndex++;
      if (currentIndex === introImages.length) {
        currentIndex = 0;
      }
    }, 5000);
  }

  window.onload = function() {
    changeBackgroundImage();
  };