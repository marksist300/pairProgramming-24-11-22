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
    const startTime = performance.now()
    console.log('start',startTime)
    let min = 0;
    let max = array.length-1
    let count = 0;

    while(min <= max){
        count++;
        let middleIndex = Math.round((min+max)/2);
        if(array[middleIndex] === target){
            const currentTime = performance.now()
            console.log('end',currentTime)
            const ttlTime = currentTime-startTime
            return {middleIndex: middleIndex, count: count, timeTaken: ttlTime};
        }else if(array[middleIndex] < target){
            min = middleIndex+1
        }else if(array[middleIndex] > target){
            max = middleIndex-1
        }
    }
    return -1
}

function linearSearch(array , target){
    const startTime = performance.now()
    for(let i=0 ;i<array.length ; i++){
        if(array[i] === target){
            const currentTime = performance.now()
            return {middleIndex: i, count: i, timeTaken: currentTime};
        }
    }
    return -1;
}

const array = [1,2,3,5,7,10,12,20,22,45,66]
async function timer(){
    console.log('startTime',performance.now())
    binarySearch()
    const currentTime = performance.now()


}
console.log('binary')
//0.067 seconds
console.log( binarySearch(array , 12, 0 , array.length-1, 0))
console.log('||||||||||||||||||||||||')

//0.153 seconds
console.log('linear')
console.log(linearSearch(array , 12));
