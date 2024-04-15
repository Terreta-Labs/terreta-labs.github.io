const clicker = document.getElementById('clicker');
const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;

 function handleClick() {
            
  clickCount++;
  clickCountElement.textContent = clickCount;
  }

        clicker.addEventListener('click', handleClick);