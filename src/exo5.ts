let numbers : number[] = [1, 2, 3, 4, 5, 6]

function filterEvenNumbers(a: number[]){
    a.forEach(item =>{
        if (item % 2 == 0){
            console.log(item)
        }
    })
}
filterEvenNumbers(numbers);