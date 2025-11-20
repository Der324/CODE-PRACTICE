function toggledButton(selector) {
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggled')) {
    //Before turning this button On, check if there's 
    //already a button that's turned ON and turn it OFF.

    turnOffPreviuosButton();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviuosButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}