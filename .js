function selectButton(event) {
    const buttons = document.getElementsByClassName('nav-link');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }