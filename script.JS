const clicker = document.getElementById('clicker');
const orangeCount = document.getElementById('orangesTotal');
let orangesTotal = 0;
let orangesPerSecond = 0;

const  spanishWorker = {
      count : 0,
      rate : 0.2,
      price : 10
}
const taxesSpanishWorker={
      taxes:(spanishWorker.rate*spanishWorker.count*30)
}
const inmigrantWorker = {
      count : 0,
      rate : 1,
      price : 15
}
 function handleClick() {           
  orangesTotal++; // Clicker rate 1
  orangeCount.textContent = orangesTotal.toFixed(2);
  }

        clicker.addEventListener('click', handleClick);

const WorkerTotal = document.getElementById('WorkerCount');
function addWorker() {
      if (orangesTotal >= spanishWorker.price) {
            
            spanishWorker.count++;
            orangesTotal -= spanishWorker.price;
            WorkerTotal.textContent=spanishWorker.count;
            spanishWorker.price = Math.ceil(spanishWorker.price * 1.20);
      }
}

const WorkerTotal2 = document.getElementById('WorkerCount2');
function addWorker2() {
      if (orangesTotal >= inmigrantWorker.price) {
            inmigrantWorker.count++;
            orangesTotal -= inmigrantWorker.price;
            WorkerTotal2.textContent=inmigrantWorker.count;
            inmigrantWorker.price = Math.ceil(inmigrantWorker.price * 1.20);
      }
}

function totalPerSecond() {
            orangeCount.textContent = orangesTotal.toFixed(2);
            spanishTotal = spanishWorker.count*spanishWorker.rate;
            inmigrantTotal = inmigrantWorker.count*inmigrantWorker.rate;
            orangesPerSecond= spanishTotal + inmigrantTotal;
            orangesTotal+=orangesPerSecond;
            countOrangesPerSecond.textContent= orangesPerSecond;
            
}

const countOrangesPerSecond= document.getElementById('OrangesPerSecond');
const workerButton = document.getElementById('Button');
workerButton.addEventListener('click', addWorker)
const workerButton2 = document.getElementById('Button2');
workerButton2.addEventListener('click', addWorker2)

setInterval(totalPerSecond, 1000); // 1000ms  = 1s 
setInterval(taxesSpanishWorker,60000)