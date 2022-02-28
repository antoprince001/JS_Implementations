function mapImpl(list,func){
    updatedList = []
    for(let count=0;count<list.length;count++){
        updatedList.push(func(list[count]));
    }
    return updatedList;
}
const array1 = [1, 4, 9, 16];

function update(n){
    return n*5;
}

const map1 = array1.map(update);
const map2 = mapImpl(array1,update);

console.log("Built-in Map");
console.log(map1);

console.log("User defined Map");
console.log(map2);

