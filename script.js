const button = document.getElementById("convertButton")
const select = document.getElementById("currencySelect")
const currencyImg = document.getElementById("currencyImg")

const dolar = 5.42
const euro = 6.25
const bitCoin = 350120.33

const currencyDolar = (money) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(money)
}
const currencyReal = (money) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(money)
}
const currencyEuro = (money) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(money)
}

const convertValues = () => {
    const realValue = document.getElementById("idRealValue").value
    document.getElementById("idRealValueText").innerHTML = `${currencyReal(realValue)}`
    if (select.value === "€ Euro") {
        const newEuro = realValue / euro
        document.getElementById("currencyValueText").innerHTML = `${currencyEuro(newEuro)}`
    } 
    if (select.value === "US$ Dolar Americano"){
        const newDolar = realValue / dolar
        document.getElementById("currencyValueText").innerHTML = `${currencyDolar(newDolar)}`
    }
    if (select.value === "₿ BitCoin") {
        const newBitCoin = realValue / bitCoin 
        document.getElementById("currencyValueText").innerHTML = `${newBitCoin}`
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("idCurrencyName")

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./images/Euro.png"
    } 
    if (select.value === "US$ Dolar Americano"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./images/estados-unidos (1) 1.png"
    }
    if (select.value === "₿ BitCoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImg.src = "./images/BitCoin.png"
    }
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
