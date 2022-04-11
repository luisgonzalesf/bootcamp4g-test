function findMultiples(integer, limit) {
    let array = []
    let mult = 0
    let ite = Math.trunc(limit/integer) // Obtengo la cantidad de veces que se va a iterar
    
    for(let i = 1; i<=ite; i++){
        mult = integer*i
        array.push(mult)
    }
    return array
}
//console.log(findMultiples(4, 27))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeEveryOther(arr){
    const newArr = arr.filter((element, index)=>{
        if(index % 2 === 0){
            return element
        }
    })
    return newArr
}
//console.log(removeEveryOther(arr))

function getAge(inputString){
    return Number(inputString.substring(0,1))
}
console.log(getAge("5 years old"))