function newString(string){
    return `${string.substring(0, 4)}*****${string.substring(string.length - 4, string.length)}`
}

let phones = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
]

let newPhones = []

for(let i = 0; i < phones.length; ++i){
    newPhones[i] = newString(phones[i])
}

console.log(newPhones)