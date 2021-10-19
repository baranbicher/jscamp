console.log("merhaba logsuz");

let dolarDun = 9.20
let dolarBugun = 9.30 

{
    let dolarDun = 10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 hata veriyor const tek bir komut alır

console.log(euroDun)

//array dizi
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>")

//3 yerine konutKredileri.length yazarsak eleman eklediğimizde 3 attırp veya arttırmak gerek yok.

for (let i = 0;i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

console.log(konutKredileri)