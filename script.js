var mediaSection = document.getElementById(`mediaSection`)
var divResultado = document.getElementById(`divResultado`);
function foco(){
    var foco = document.getElementById(`qtdInputs`);
    foco.value = ``;
    foco.focus();
}
function criarInputs() {
    var qtdInputs = Number(document.getElementById(`qtdInputs`).value);
    divResultado.innerHTML = ``;
    divMedia.innerHTML = ``;
    if (qtdInputs < 2) {
        var hr = document.createElement(`hr`);
        var pAlerta = document.createElement(`p`);
        pAlerta.setAttribute(`id`,`pAlerta`);
        pAlerta.innerHTML = `O número mínimo de notas é 2.`
        divResultado.appendChild(hr);
        divResultado.appendChild(pAlerta);
    } else {
        var hr = document.createElement(`hr`);
        divResultado.appendChild(hr);
        for (var i = 1; qtdInputs >= i; i++) {
            var inputNotas = document.createElement(`p`);
            inputNotas.innerHTML += `Insira a nota nº ${i}: <input type="number" id="inputNota_id${i}" class="inputNumber">`
            divResultado.appendChild(inputNotas);
        }
        var calcular = document.createElement(`input`);
        calcular.setAttribute(`type`, `button`);
        calcular.setAttribute(`id`, `calcular`);
        calcular.setAttribute(`class`, `inputButton`);
        calcular.setAttribute(`value`, `Calcular`);
        calcular.setAttribute(`onclick`, `mostrarMedia()`);
        divResultado.appendChild(calcular);
    }
}
function salvarInputs(qtdInputs) {
    var arrayInputs = [];
    for (var i = 1; qtdInputs >= i; i++) {
        var inputNotas = Number(document.getElementById(`inputNota_id${i}`).value);
        arrayInputs.push(inputNotas);
    }
    console.log(arrayInputs);
    return arrayInputs;
}
function calcularMedia(qtdInputs, arrayInputs) {
    console.log(`ArrayInput: ${arrayInputs}`);
    var soma = 0;
    for (var i = 0; qtdInputs > i; i++) {
        soma += arrayInputs[i];
        console.log(`volta: ${i} | qtdInputs: ${qtdInputs} | Soma: ${soma} | arrayInput[i]: ${arrayInputs[i]}`)
    }
    var media = (soma / qtdInputs);
    console.log(`Media: ${media}`);
    return media;
}
var divMedia = document.createElement(`div`);
divMedia.setAttribute(`id`, `divMedia`);
function limpar(limpar) {
    divResultado.innerHTML = ``;
    divMedia.innerHTML = ``;
    var qtdInputs = document.getElementById(`qtdInputs`)
    qtdInputs.value = ``;
    qtdInputs.focus();
}
function mostrarMedia() {
    var qtdInputs = Number(document.getElementById(`qtdInputs`).value);
    // - - - - - - Salvar Inputs  - - - - - - //
    salvarInputs(qtdInputs);
    // - - - - - - Calcular Media  - - - - - - //
    var arrayInputs = salvarInputs(qtdInputs);
    var media = calcularMedia(qtdInputs, arrayInputs)
    // - - - - - - Exibir Media  - - - - - - //
    divMedia.innerHTML = ``;
    var hr = document.createElement(`hr`);
    var pMedia = document.createElement(`p`);
    pMedia.setAttribute(`id`, `pMedia`);
    pMedia.innerHTML = `A média dos números inseridos é: [ ${media} ].`
    // - - - - - - Exibir Limpar  - - - - - - //
    var limpar = document.createElement(`input`);
    limpar.setAttribute(`type`, `button`);
    limpar.setAttribute(`id`, `limpar`);
    limpar.setAttribute(`class`, `inputButton`);
    limpar.setAttribute(`value`, `Limpar`);
    limpar.setAttribute(`onclick`, `limpar()`);
    divMedia.appendChild(hr);
    divMedia.appendChild(pMedia);
    divMedia.appendChild(limpar);
    mediaSection.appendChild(divMedia);
}