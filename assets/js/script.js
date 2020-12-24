 let numbers = [];
 let displayInfo = document.querySelector('#display-info');
class LuckyNumbers {
    constructor(balls, length){
    this.balls =balls;
    this.length = length;
    }
    randomNumbers(){
        for (let i =0; i<this.balls;i++){
            let numberDraw = Math.floor(Math.random()*this.length+1);
            // if (numbers.includes(numberDraw)){
            //     i--;
            // }else{

            
                let numbersContainer = document.createElement('div');
                // numbersContainer.classList.add('numberStyle');
                let displayData = document.createElement('div');
                numbers.push(numberDraw);
                var numberContainer = document.createElement('p');
                numberContainer.classList.add('numberStyle');
                numberContainer.textContent = `${numberDraw}`;
                numbersContainer.appendChild(numberContainer);
                displayData.appendChild(numbersContainer);
                displayInfo.appendChild(displayData);
            // }
            console.log(this.balls);
            console.log(i)
        }
    }
    extraNumber(ball){
        let exNumber = Math.floor(Math.random()*ball+1); 
        let exdata = document.createElement('p');
        exdata.textContent = exNumber;
        exdata.classList.add('numberStyle');
        displayInfo.appendChild(exdata);
    }
}
let powerballObject = new LuckyNumbers(5,69);
let powerball =document.querySelector('#powerball');
powerball.addEventListener('click', function(){
    displayInfo.innerHTML = "";
   
    powerballObject.randomNumbers();
    powerballObject.extraNumber(26);
})

let megaObject = new LuckyNumbers(5,70);
let mega =document.querySelector('#megaMillions');
mega.addEventListener('click', function(){
    displayInfo.innerHTML = "";
    megaObject.randomNumbers();
    megaObject.extraNumber(25);
})

let flLottoObject = new LuckyNumbers(6,53);
let floridaLotto =document.querySelector('#floridaLotto');
floridaLotto.addEventListener('click', function(){
    displayInfo.innerHTML = "";
    flLottoObject.randomNumbers();
})

let fantasy5Object = new LuckyNumbers(5,36);
let fantasy5 =document.querySelector('#fantasy5');
fantasy5.addEventListener('click', function(){
    displayInfo.innerHTML = "";
    fantasy5Object.randomNumbers();
})


