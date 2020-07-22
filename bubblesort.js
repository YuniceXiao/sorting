

function bubbleSort(array){
    let n = 0;
    while(n<array.length){
        for(let i=0,j=i+1; j<array.length; i++){
            let swap = determineSwap(array[i], array[j])
            if(swap){
                let currentI = array[i]
                array[i] = array[j]
                array[j] = currentI
            }
        }
    }


    return array;
}

function determineSwap(previous, next){
    if(previous > next){
        return true
    }else{
        return false
    }
}

//[8,3,4,2]
// i = 0, j= 1: swap(8,3):true
// current I: 8
//array[0] = 3
// array[1] = 8
//[3 8 4 2] ==> [3,4,2,8]
//i = 1, j = 2: 

let i = 0;
j=1
PREVIOUS = ARRAY[]0
NEXT =1
while(n<length){
    let swap = determineSWAP(PREVIOUS, NEXT)
    if(SWAP){

    }
    PREVIOUS = ARRA[1]
    NEXT 
    N++
}