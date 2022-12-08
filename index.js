const d = document,
    ouput = d.querySelector("#ouput");
let operaciones = "",
    guardarOuput = "",
    raizSelected = true,
    exponenteSelected = 1,
    guardarBaseExponente = 0;

function ouputAdd(e) {
    if (e.value === "mod") ouput.value += "%";
    else ouput.value += e.value;

    if (!raizSelected || exponenteSelected != 1) return false

    return operaciones = ouput.value
}

function clear() {
    ouput.value = ""
    operaciones = "";
}

function respuesta() {
    ouput.value = eval(operaciones);
    operaciones = "";
}

function raiz(e) {
    if (raizSelected) {
        raizSelected = false;
        e.style.backgroundColor = "#b3b2b2ac";
        guardarOuput = ouput.value;
        ouput.value = "";
        return false
    } else {
        operaciones += `${Math.sqrt(ouput.value)}`;
        guardarOuput += `√(${ouput.value})`;
        ouput.value = guardarOuput;
        guardarOuput = ""
        e.style.backgroundColor = "#eaeaead7";
        raizSelected = true
    }
}

function exponente(e) {
    if (exponenteSelected === 1) {
        e.style.backgroundColor = "#b3b2b2ac";
        guardarOuput = ouput.value;
        ouput.value = "";
        return exponenteSelected++;
    } if (exponenteSelected === 2) {
        guardarBaseExponente = ouput.value;
        ouput.value = "";
        return exponenteSelected++
    } if (exponenteSelected === 3) {
        guardarOuput += `(${guardarBaseExponente})^${ouput.value}`;
        operaciones += `${Math.pow(guardarBaseExponente, ouput.value)}`;
        ouput.value = guardarOuput;
        guardarOuput = ""
        e.style.backgroundColor = "#eaeaead7";
        return exponenteSelected = 1;
    }
}

function operacionesEspeciales(e) {
    if (e.value === "√") raiz(e);
    if (e.value === "^") exponente(e);


}

d.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".button__operaciones--especiales")) operacionesEspeciales(e.target);
    if (e.target.matches(".button__simple")) ouputAdd(e.target);
    if (e.target.matches("#clear")) clear();
    if (e.target.matches("#respuesta")) respuesta();
})