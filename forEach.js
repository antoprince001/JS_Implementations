function forEachImpl(arr,func){
    for(let count=0;count < arr.length; count++)
        func(arr[count]);
}

const array4 = ['a','b','c'];

console.log("Built In For Each");
array4.forEach(element=>console.log(element));

console.log("User Defined For Each");
forEachImpl(array4,element => console.log(element));