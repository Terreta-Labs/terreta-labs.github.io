const clicker = document.getElementById('clicker');
const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;
let orangesPerSecond=0;
 function handleClick() {
            
  clickCount+=1.00;
  clickCountElement.textContent = clickCount;
  }

        clicker.addEventListener('click', handleClick);

let workerCount = 0;
let workerClickRate = 1000;
let workerRate=0.2;
function addWorker() {
      workerCount++;
}
function totalPerSecond() {
            clickCountElement.textContent = clickCount.toFixed(2);
            orangesPerSecond=(workerCount*workerRate);
            clickCount+=orangesPerSecond;
            
}
let orangesPerSecondR= orangesPerSecond.toFixed(2);
const countOrangesPerSecond= document.getElementById('mostrarOrangesPerSecond');
const workerButton = document.getElementById('workerButton');
workerButton.addEventListener('click', addWorker)
setInterval(totalPerSecond, workerClickRate);