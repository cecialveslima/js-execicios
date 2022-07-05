var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
let botao = document.querySelector('#adicionar');


botao.addEventListener('click',function(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumberWrapper.style.color = 'black';
})

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
}







function returnEvenValues(arrays){
    let evenNums = [];

    for (let i=0; i < arrays.length; i++){
        //Mod  = %
        if(arrays[i] % 2 === 0){
            evenNums.push(arrays[i]);
        } else {
            console.log("Numero não par: " ,   `${arrays[i]}`);
        }
    }
    console.log("Os números pares são: "  ,evenNums);
}


