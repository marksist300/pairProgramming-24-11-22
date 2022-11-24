// recursion 

// let count = 0;

// function binarySearch(array , target , start , end, count){
//     const iteration = count+1;
//     let middleIndex = Math.floor((start+end)/2)
//     console.log(middleIndex)
    
//     if(array[middleIndex]=== target){
//         return {middleIndex: middleIndex, count: iteration};
//     }
//     else if(target < array[middleIndex] ){
//         console.log('less than', array[middleIndex]);
//         return binarySearch(array , target ,start , middleIndex-1, iteration)
//     }
//     else if(target >array[middleIndex]){
//     console.log('more than', array[middleIndex]);
//     return binarySearch(array , target , middleIndex+1 , end, iteration)
//     }
//     // let array = [1,2,3,5,7,10,12,20,22,45,66]

// }

// loops


function binarySearch(array , target){
    let min = 0;
    let max = array.length-1
    let count = 0;

    while(min <= max){
        count++;
        let middleIndex = Math.round((min+max)/2);
        if(array[middleIndex] === target){
            return {middleIndex: middleIndex, count: count};
        }else if(array[middleIndex] < target){
            min = middleIndex+1
        }else if(array[middleIndex] > target){
            max = middleIndex-1
        }
    }
    return -1
}

function linearSearch(array , target){
    for(let i=0 ;i<array.length ; i++){
        if(array[i] === target){
            return {middleIndex: i, count: i};
        }
    }
    return -1;
}

let count=1
const array = new Array(100).fill(0).map(num=>{
    return count++;
})



const searchBtn = document.getElementById("searchBtn")
const userInput = document.getElementById("numberInput")
const binaryResults = document.getElementById("binaryResults")
const linearResults = document.getElementById("linearResults")
const binaryIterations = document.getElementById("binaryIterations")
const linearIterations = document.getElementById("linearIterations")
searchBtn.addEventListener("click" , ()=>{

    const value = userInput.value;
    if(isNaN(+value)){
        return
    }

    const linearResult = linearSearch(array , +value)
    const binaryResult = binarySearch(array , +value, 0 , array.length-1, 0)

    linearResults.innerHTML = linearResult.middleIndex;
    binaryResults.innerHTML = binaryResult.middleIndex;

    linearIterations.innerHTML = linearResult.count;
    binaryIterations.innerHTML = binaryResult.count;
    
})