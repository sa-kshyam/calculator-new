const btnsEle = document.querySelectorAll
    ("button")

const inputELE = document.getElementById("result")

for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", () => {
        const btnValue = btnsEle[i].textContent
        if (btnValue === "C") {
            clearResult()
        }
        else if (btnValue === "=") {
            calculateResult()
        }else{
            appendValue(btnValue)
        }
    })
}



function clearResult() {
    inputELE.value = ""
}
function calculateResult() {
    inputELE.value = eval(inputELE.value)
}
function appendValue(btnValue){
    inputELE.value += btnValue

}
