const clicker = document.getElementById('clicker');
const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;
let orangesTotal=0;
let clickRate=1.00;
 function handleClick() {
            
  clickCount+=clickRate;
  clickCountElement.textContent = clickCount.toFixed(2);
  }

        clicker.addEventListener('click', handleClick);

let workerCount = 0;
let workerClickRate = 1000;
let workerRate=0.2;
let workerPrice = 10;

const countWorkerCount= document.getElementById('countWorkerCount');
function addWorker() {
      if (clickCount >= workerPrice) {
            
            workerCount++;
            clickCount -= workerPrice;
            countWorkerCount.textContent=workerCount;
            workerPrice = Math.ceil(workerPrice * 1.20);
      }
      
      
}
function totalPerSecond() {
            clickCountElement.textContent = clickCount.toFixed(2);
            orangesPerSecond=(workerCount*workerRate);
            clickCount+=orangesPerSecond;
            countOrangesPerSecond.textContent=  (workerCount*workerRate).toFixed(2);
            
}
let orangesTotalR= orangesTotal.toFixed(2);

const countOrangesPerSecond= document.getElementById('mostrarOrangesPerSecond');
const workerButton = document.getElementById('workerButton');
workerButton.addEventListener('click', addWorker)
setInterval(totalPerSecond, workerClickRate);