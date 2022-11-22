const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9"];
const passWordElOne = document.getElementById("password-one")
const passWordElTwo = document.getElementById("password-two")
const generateBtn = document.getElementById("btn")
const copyBtn1 = document.getElementById("copy-one")
const copyBtn2 = document.getElementById("copy-two")
const lengthEl = document.getElementById("length-setter")


function generateCharacter(){
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePassword(){
    let length = lengthEl.value
    let randomPassword = ""
     for (let i = 0; i < length; i++){
        randomPassword += generateCharacter()
     }
     return randomPassword
}

generateBtn.addEventListener("click", ()=>{
    return passWordElOne.textContent = generatePassword(), passWordElTwo.textContent = generatePassword()
})

copyBtn1.addEventListener("click", ()=>{
    alert("Copied to clipboard.")
    navigator.clipboard.writeText(passWordElOne.innerText);
});
copyBtn2.addEventListener("click", ()=>{
    alert("Copied to clipboard.")
    navigator.clipboard.writeText(passWordElTwo.innerText);
});
