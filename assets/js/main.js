function escopoIMC (){
    const form = document.querySelector("#imc-form");
    const container = document.querySelector(".container");
    const bgColor = document.querySelector(".page-bg")

    form.addEventListener('submit', getFormInfo);
    
    function getFormInfo(event){
        event.preventDefault();
        const userWeight = form.querySelector("#user-weight");
        const userHeight = form.querySelector("#user-height");
        const formulaIMC = parseFloat(userWeight.value) / (parseFloat(userHeight.value) * parseFloat(userHeight.value));
        const userIMC = Number(formulaIMC.toFixed(1));
        if(userWeight.value < 8) {
            showResult("Peso inválido, inserir um número MAIOR que 8kg.", "obesidade-3");
            return;
        } else if(userWeight.value > 750) {
            showResult("Peso inválido, inserir um número MENOR que 750kg.", "obesidade-3");
            return;
        }
        if(userHeight.value < 0.60) {
            showResult("Altura inválida, inserir um número MAIOR que 0.60m.", "obesidade-3");
            return;
        } else if(userHeight.value > 2.80) {
            showResult("Altura inválida, inserir um número MENOR que 2.80m", "obesidade-3");
            return;
        }
        if(userIMC < 18.5) {
            showResult(`Seu IMC é ${userIMC} (Abaixo do peso)`, "peso-atencao");
            removeBg();
            changeBgColor("peso-atencao");
            return;
        }
        if(userIMC >= 18.5 && userIMC < 25) {
            showResult(`Seu IMC é ${userIMC} (Peso normal)`, "peso-normal");
            removeBg();
            changeBgColor("normal-bg");
            return;
        }
        if(userIMC >= 25 && userIMC < 30) {
            showResult(`Seu IMC é ${userIMC} (Sobrepeso)`, "peso-atencao");
            removeBg();
            changeBgColor("atencao-bg");
            return;
        }
        if(userIMC >= 30 && userIMC < 35) {
            showResult(`Seu IMC é ${userIMC} (Obesidade grau 1)`, "obesidade-1");
            removeBg();
            changeBgColor("obesidade-1-bg");
            return;
        }
        if(userIMC >= 35 && userIMC < 40) {
            showResult(`Seu IMC é ${userIMC} (Obesidade grau 2)`, "obesidade-2");
            removeBg();
            changeBgColor("obesidade-1-bg");
            return;
        }
        if (userIMC >= 40) {
            showResult(`Seu IMC é ${userIMC} (Obesidade grau 3)`, "obesidade-3");
            removeBg();
            changeBgColor("obesidade-3-bg");
            return;
        }
    }
    function showResult(message, className) {
        const oldResult = container.querySelector(".resultado");
        if(oldResult) oldResult.remove();
        const section = document.createElement("section");
        section.classList.add("resultado", className);
        section.innerHTML = `<p>${message}</p>`;
        container.appendChild(section);
    }
    function changeBgColor(className) {
        bgColor.classList.add(className)
    }
    function removeBg() {
        bgColor.classList.remove(
            "normal-bg",
            "atencao-bg",
            "obesidade-1-bg", 
            "obesidade-2-bg", 
            "obesidade-3-bg"
        )
    }
}
escopoIMC();