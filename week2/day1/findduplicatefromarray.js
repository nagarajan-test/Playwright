const num=[56,78,90,23,90,76,43,56]
const duplicate= []
const myset = new Set()
for(let i=0;i<num.length;i++){
    if(myset.has(num[i])){
        duplicate.push(num[i])
    }else{
        myset.add(num[i])
    }

}
console.log(duplicate)
console.log(((a, b) => a + b)(5, 3))