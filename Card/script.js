const nameInput = document.getElementById("name")
const accountNumInput = document.getElementById("number")
const dateInput = document.getElementById("date")

nameInput.addEventListener("keyup", ()=>{
    const nameEl = document.getElementById("name-card")
    nameEl.innerText = nameInput.value.toUpperCase()
})

accountNumInput.addEventListener("keyup", ()=>{
    const cardNumEl = document.getElementById("card-num")

    let numStr = accountNumInput.value
    let splitNumRes =  numStr.match(/\d{4}/g)
    let finalStr = splitNumRes.join(" ")

    cardNumEl.innerText = finalStr
})

dateInput.addEventListener("keyup", ()=>{
    const dateEl = document.getElementById("date-card")
    dateEl.innerText = dateInput.value
})