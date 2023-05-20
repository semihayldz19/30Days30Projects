let button = document.querySelector("#btn11");
let isClicked = false;

button.addEventListener('click', function() {
    if (isClicked) {
      button.classList.remove('clicked');
      isClicked = false;
    } else {
      button.classList.add('clicked');
      isClicked = true;
    }
  });


