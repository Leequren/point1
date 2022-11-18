function getInfo(arr) {
    let res = [0, 0]
    for (let string of arr){
        if(string.length >= 4 && string.substring(0, 4) === 'Цена'){
            ++res[0]
        }
        if(string[string.length - 1] === '$'){
            ++res[1]
        }
    }
    return res
}

let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
]

console.log(getInfo(prices))