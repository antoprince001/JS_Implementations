function filterImpl(list,func){
    updatedList = []
    for(let count=0;count<list.length;count++){
        if(func(list[count]) === true)
            updatedList.push(list[count]);
    }
    return updatedList;
}

const array2 = [1, 4, 9, 16];

const filter1 = array2.filter(x => x%2==1);
const filter2 = filterImpl(array2,x => x%2==1);

console.log("Built-in Filter");
console.log(filter1);

console.log("User defined Reduce");
console.log(filter2);