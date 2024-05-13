const clicker = document.getElementById('clicker');
const orangeCount = document.getElementById('orangesTotal');
let orangesTotal = 0;
let orangesPerSecond = 0;

const  spanishWorker = {
      count : 0,
      rate : 0.2,
      price : 10
}
const priceSpanish = document.getElementById('priceSpanish');
priceSpanish.textContent= spanishWorker.price;

const taxesSpanishWorker={
      taxes:(spanishWorker.rate*spanishWorker.count*30)
}
const inmigrantWorker = {
      count : 0,
      rate : 1,
      price : 15
}
const priceInmigrant = document.getElementById('priceInmigrant');
priceInmigrant.textContent= inmigrantWorker.price;

 function handleClick() {           
  orangesTotal++; // Clicker rate 1
  orangeCount.textContent = orangesTotal.toFixed(2);

  //Create the +1 animation
  let plusOne = document.createElement('div');
  plusOne.textContent = '+1';
  plusOne.style.color = 'white';
  plusOne.style.position = 'absolute';
  plusOne.style.left = `${event.clientX}px`;
  plusOne.style.top = `${event.clientY}px`;
  plusOne.style.fontSize = '20px';
  plusOne.style.animation = 'onePlusAnimation 1s linear';
  plusOne.style.zIndex = '10000';
  plusOne.style.userSelect = 'none';
  plusOne.style.pointerEvents = 'none';
  

  document.body.appendChild(plusOne);

  plusOne.addEventListener('animationend', () => {
      document.body.removeChild(plusOne);
  });

  }

        clicker.addEventListener('click', handleClick);

const WorkerTotal = document.getElementById('WorkerCount');

// Add a new worker to the game depending of the worker
function addWorker(worker, workerPrice,workerTotal) {
      if (orangesTotal >= worker.price) {
            
            worker.count++;
            orangesTotal -= worker.price;
            workerTotal.textContent= worker.count;
            worker.price = Math.ceil(worker.price * 1.20);
            workerPrice.textContent= worker.price;

      }
}

const WorkerTotal2 = document.getElementById('WorkerCount2');

function totalPerSecond() {
            orangeCount.textContent = orangesTotal.toFixed(2);
            spanishTotal = (spanishWorker.count*spanishWorker.rate);
            inmigrantTotal = (inmigrantWorker.count*inmigrantWorker.rate);
            orangesPerSecond= (spanishTotal + inmigrantTotal);
            orangesTotal+=orangesPerSecond;
            countOrangesPerSecond.textContent= orangesPerSecond;
            
}

const countOrangesPerSecond= document.getElementById('OrangesPerSecond');

/* Returns a list of all elements with the class name 'worker', and then loops through each element determining 
if it is a Spanish worker or an immigrant worker based on the index */
const workerButtons = document.querySelectorAll('.worker-button');
workerButtons.forEach((button,index) => {
      button.addEventListener('click', function() {
            
            const worker = index === 0 ? spanishWorker : inmigrantWorker; // Ternary operator if index is 0 then spanishWorker else inmigrantWorker
            const priceElement = index === 0 ? priceSpanish : priceInmigrant;
            const workerTotal = index === 0 ? WorkerTotal : WorkerTotal2;

            addWorker(worker, priceElement, workerTotal);
      });
});

setInterval(totalPerSecond, 1000); // 1000ms  = 1s 
setInterval(taxesSpanishWorker,60000)


