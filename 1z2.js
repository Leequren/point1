
let phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52']

let newPhones = []

for (let i = 0; i < phones.length; ++i) {
    let dot = phones[i].lastIndexOf('.')
    let temp = phones[i].substring(0, dot), char = phones[i][dot + 1]
    let res = `${temp}.${char}*****`
    newPhones[i] = res
}
console.log(newPhones)