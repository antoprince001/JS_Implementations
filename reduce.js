function reduceImpl(arr,func,initialValue){
    let index = 0;
    let prevValue;

    if(initialValue === undefined){
        index = 1;
        prevValue = arr[0];
    }
    else{
        prevValue = initialValue;
    }

    for(let count=index;count < arr.length; count++){
                 
        currValue = func(prevValue,arr[count]);
        prevValue = currValue;

    }
    return currValue;
}

const array3 = [3,1,9,6,-9,100];
const getMax = (a, b) => Math.max(a, b);

console.log("Built-in Reduce");
let reduce1 = array3.reduce(getMax);
console.log(reduce1);

console.log("User Defined Reduce");
let reduce2 = reduceImpl(array3,getMax);
console.log(reduce2);