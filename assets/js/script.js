 let numbers = [];
 let displayInfo = document.querySelector('#display-info');
powerball = ()=>{
     let numbersContainer = document.createElement('div'); 
    numbersContainer.classList.add('data'); 
    for (let i = 0; i<5; i++){  

        numberDraw = Math.floor(Math.random()*69 +1);
        if (numbers.includes(numberDraw)){
            i--;
        }else{
            numbers.push(numberDraw);
            var numberContainer = document.createElement('p');
            numberContainer.classList.add('numberStyle');
            numberContainer.textContent = `${numberDraw}`;
            numbersContainer.appendChild(numberContainer);
        }
    }
    let PB = Math.floor(Math.random()*26+1);
    let PBdata = document.createElement('p')
    let PBdataDiv  = document.createElement('div');
    PBdataDiv.classList.add('data')
    PBdata.classList.add('numberStyle');
    PBdata.textContent = PB;
    PBdataDiv.appendChild(PBdata);
    let displayInfo = document.querySelector('#display-info');
    let displayData = document.createElement('div');
    var Pb = document.createElement('div');
    Pb.textContent = "and your power ball number is ";
    displayData.textContent = `Your powerball numbers are: `;
    displayData.appendChild(numbersContainer);
    displayData.appendChild(Pb);
    displayData.appendChild(PBdataDiv);
    displayInfo.appendChild(displayData);
}
megaMillions = ()=>{
    for (let i = 0; i<5; i++){
        numberDraw = Math.floor(Math.random()*70 +1);
        if (numbers.includes(numberDraw)){
            i--;
        }else{
        numbers.push(numberDraw);
    
        }
    }
    let MB = Math.floor(Math.random()*25+1);

    let displayInfo = document.querySelector('#display-info');
    let displayData = document.createElement('div');
    displayData.textContent = `Your mega Millions numbers are: ${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]} 
                   and your PB is: ${MB}`;
    displayInfo.appendChild(displayData);
}

floridaLotto = ()=>{
    for (let i = 0; i<6; i++){
        numberDraw = Math.floor(Math.random()*53 +1);
        if (numbers.includes(numberDraw)){
            i--;
        }else{
        numbers.push(numberDraw);
    
        }
    }

    let displayInfo = document.querySelector('#display-info');
    let displayData = document.createElement('div');
    displayData.textContent = `Your florida lotto numbers are: ${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]} ${numbers[5]} `
    displayInfo.appendChild(displayData);
}

fantasy5 = ()=>{
    for (let i = 0; i<5; i++){
        numberDraw = Math.floor(Math.random()*36 +1);
        if (numbers.includes(numberDraw)){
            i--;
        }else{
        numbers.push(numberDraw);
     
        }
    }

    let displayInfo = document.querySelector('#display-info');
    let displayData = document.createElement('div');
    displayData.textContent = `Your fantasy 5 numbers are: ${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]}`
    displayInfo.appendChild(displayData);
}

//Events Listeners Start
var selectPowerball = document.querySelector('#powerball');
selectPowerball.addEventListener('click',powerball);


var selectMega = document.querySelector('#megaMillions');
selectMega.addEventListener('click',megaMillions);


var selectFlorida = document.querySelector('#floridaLotto');
selectFlorida.addEventListener('click',floridaLotto);

var selectFantasy = document.querySelector('#fantasy5');
selectFantasy.addEventListener('click',fantasy5);
//Events Listeners End


