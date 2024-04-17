const clicker = document.getElementById('clicker');
const orangeCountTotal = document.getElementById('orangesTotal');
let orangesTotal = 0;
let orangesTotalR= orangesTotal.toFixed(2);

let clickRate=1.00;
 function handleClick() {
            
  orangesTotal+=clickRate;
  orangeCountTotal.textContent = orangesTotal.toFixed(2);
  }

        clicker.addEventListener('click', handleClick);

let workerCount = 0;
let workerClickRate = 1000;
let workerRate=0.2;
let workerPrice = 10;

const countWorkerCount= document.getElementById('countWorkerCount');
function addWorker() {
      if (orangesTotal >= workerPrice) {
            
            workerCount++;
            orangesTotal -= workerPrice;
            countWorkerCount.textContent=workerCount;
            workerPrice = Math.ceil(workerPrice * 1.20);
      }
      
      
}
function totalPerSecond() {
            orangeCountTotal.textContent = orangesTotal.toFixed(2);
            orangesPerSecond=(workerCount*workerRate);
            orangesTotal+=orangesPerSecond;
            countOrangesPerSecond.textContent=  (workerCount*workerRate).toFixed(2);
            
}

const countOrangesPerSecond= document.getElementById('mostrarOrangesPerSecond');
const workerButton = document.getElementById('workerButton');
workerButton.addEventListener('click', addWorker)
setInterval(totalPerSecond, workerClickRate);