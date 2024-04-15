const clicker = document.getElementById('clicker');
const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;

 function handleClick() {
            
  clickCount++;
  clickCountElement.textContent = clickCount;
  }

        clicker.addEventListener('click', handleClick);

let workerCount = 0;
let workerClickRate = 1000;

function addWorker() {
      workerCount++;
}
function workerClick() {
       
      if (workerCount > 0) {
            clickCount+=workerCount;
            clickCountElement.textContent = clickCount;
      }

}
const workerButton = document.getElementById('workerButton');
workerButton.addEventListener('click', addWorker)
setInterval(workerClick, workerClickRate);