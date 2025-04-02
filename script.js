const container = document.getElementById('resultado');
const opcao = document.getElementById('opcao');
const opcao2 = document.getElementById('opcaosegunda');
const final = document.getElementById('container-result');
const compara = document.getElementById('one');
const compara2 = document.getElementById('two');


const acionaBotao = () => {

    const inputValor = parseFloat(document.getElementById('valor').value);
    let resultado = null;

    if (opcao.value === "" || opcao2.value === "") {
        alert("Por favor, selecione as opções.");
        return;
    }
    if (inputValor <= 0 || isNaN(inputValor)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    container.style.visibility = "visible";
    container.classList.add('ativa');

    const dolarParaReal = 5.68;
    const euroParaReal = 6.13;
    const realParaDolar = 1 / dolarParaReal;
    const realParaEuro = 1 / euroParaReal;
    const euroParaDolar = 1.08;
    const dolarParaEuro = 1 / euroParaDolar;

    if (opcao2.value === "USD" && opcao.value === "BRL") {
        resultado = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * realParaDolar);

    } else if (opcao2.value === "EUR" && opcao.value === "BRL") {
        resultado = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * realParaEuro);
    } else if (opcao2.value === "EUR" && opcao.value === "USD") {
        resultado = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * dolarParaEuro);
    } else if (opcao2.value === "BRL" && opcao.value === "USD") {
        resultado = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * dolarParaReal);
    } else if (opcao2.value === "BRL" && opcao.value === "EUR") {
        resultado = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * euroParaReal);
    } else if (opcao2.value === "USD" && opcao.value === "EUR") {
        resultado = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * euroParaDolar);
    }

    resultFinal(resultado);
    comparar(inputValor, resultado);
}

const comparar = (valor, valor2) => {

    if (opcao2.value === "USD" && opcao.value === "BRL") {
        compara.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor) + " BRL";

        compara2.innerHTML = `${valor2} USD`;

    } else if (opcao2.value === "EUR" && opcao.value === "BRL") {
        compara.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor) + " BRL";

        compara2.innerHTML = `EUR ${valor2}`;

    } else if (opcao2.value === "EUR" && opcao.value === "USD") {
        compara.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valor) + " USD";

        compara2.innerHTML = `EUR ${valor2}`;

    } else if (opcao2.value === "BRL" && opcao.value === "USD") {
        compara.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valor) + " USD";

        compara2.innerHTML = `${valor2} BRL`;

    } else if (opcao2.value === "BRL" && opcao.value === "EUR") {
        compara.innerHTML = "EUR " + new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor);

        compara2.innerHTML = `${valor2} BRL`;

    } else if (opcao2.value === "USD" && opcao.value === "EUR") {
        compara.innerHTML = "EUR " + new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor);

        compara2.innerHTML = `${valor2} USD`;
    }
}

const resultFinal = (valor) => {

    const imagem = document.getElementById('img');
    const escrita = document.getElementById('escrita');

    if (opcao2.value === "USD") {
        imagem.src = "img/usd.png";
        escrita.innerHTML = `${valor}`;
    } else if (opcao2.value === "BRL") {
        imagem.src = "img/brl.png";
        escrita.innerHTML = `${valor}`;
    } else if (opcao2.value === "EUR") {
        imagem.src = "img/eur.png";
        escrita.innerHTML = `${valor}`;
    }

}

const evitarErro = () => {

    container.style.visibility = "hidden";
    container.classList.remove('ativa');
   
    opcao.querySelectorAll("option").forEach(desativa => desativa.disabled = false);
    opcao2.querySelectorAll("option").forEach(desativa2 => desativa2.disabled = false);

    if (opcao.value) {
        opcao2.querySelector(`option[value="${opcao.value}"]`).disabled = true;
    }
    if (opcao2.value) {
        opcao.querySelector(`option[value="${opcao2.value}"]`).disabled = true;
    }
};

opcao.addEventListener('change', evitarErro);
opcao2.addEventListener('change', evitarErro);