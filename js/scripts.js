const inserirTexto = document.querySelector('.inserirTexto');
const textoCriptografado = document.querySelector('.texto_criptografado');
const btnCriptografar = document.querySelector('#codificador');
const btnDescriptografar = document.querySelector('#decodificador');
const btnCopiarTexto = document.querySelector('#copiar');
const btnLimparCampo = document.querySelector('#limpar');

btnCopiarTexto.style.display = 'none';
btnLimparCampo.style.display = 'none';

btnCriptografar.addEventListener('click', criptografarTexto);
btnDescriptografar.addEventListener('click', descriptografarTexto);
btnCopiarTexto.addEventListener('click', copiarTexto);
btnLimparCampo.addEventListener('click', limparCampo);

function verificarCaractereEspecial() {
    let texto = inserirTexto.value.trim();

    if (texto === "") {
        btnCopiarTexto.style.display = 'none';
        btnLimparCampo.style.display = 'none';
        return false;
    } else {
        btnCopiarTexto.style.display = 'inline-block';
        btnLimparCampo.style.display = 'inline-block';
    }
    let regex = /[!@#$%^&*(),.?":{}|<>/\s/\/[A-Z]/;

    if (regex.test(texto)) {
        alert('ATENÇÃO, Não pode conter caracteres especiais ou Letra Maiusculas!!!')
        return false;
    } else {
        alert('OK');
        return true;
    }
}

function criptografar(string) {
    const resultado = string
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    return resultado;
}

function criptografarTexto() {
    const texto = inserirTexto.value
    if (verificarCaractereEspecial(texto)) {
        const resultadoCriptografado = criptografar(texto);
        textoCriptografado.textContent = resultadoCriptografado;

        btnCopiarTexto.disabled = false;
        btnLimparCampo.disabled = false;
    }
}

function descriptografar(string) {
    const resultado = string
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    return resultado;
}

function descriptografarTexto() {
    const texto = inserirTexto.value
    if (verificarCaractereEspecial(texto)) {
        const resultadoDescriptografado = descriptografar(texto);
        textoCriptografado.textContent = resultadoDescriptografado;

        btnCopiarTexto.disabled = false;
        btnLimparCampo.disabled = false;
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(textoCriptografado.textContent);
}

function limparCampo() {
    inserirTexto.value = "";
    textoCriptografado.textContent = "";

    btnCopiarTexto.style.display = 'none';
    btnLimparCampo.style.display = 'none';
}
