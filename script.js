const perguntas = [
[
    ["Qual a capital do Brasil?",["SP","Brasília","RJ","Curitiba"],1],
    ["Qual a capital da Argentina?",["Buenos Aires","Córdoba","Rosário","Mendoza"],0]
],
[
    ["5 x 5 = ?",["20","15","25","30"],2],
    ["10 x 2 = ?",["15","20","25","30"],1]
],
[
    ["Planeta vermelho?",["Marte","Terra","Júpiter","Saturno"],0],
    ["Maior planeta?",["Marte","Vênus","Júpiter","Mercúrio"],2]
],
[
    ["Quem descobriu o Brasil?",["Cabral","Tiradentes","Getúlio","Dom Pedro"],0],
    ["Primeiro imperador do Brasil?",["Pedro II","Cabral","Dom Pedro I","Getúlio"],2]
],
[
    ["Símbolo da água?",["CO2","H2O","NaCl","O2"],1],
    ["Símbolo do ouro?",["Au","Ag","Fe","Cu"],0]
]
];

let quiz = perguntas.map(p =>
    p[Math.floor(Math.random()*2)]
);

let atual = 0;
let acertos = 0;

mostrar();

function mostrar(){

    pergunta.innerHTML = quiz[atual][0];

    alternativas.innerHTML = quiz[atual][1]
        .map((alt,i)=>
        `<button onclick="responder(${i})">${alt}</button>`)
        .join("");
}

function responder(i){

    if(i === quiz[atual][2]) acertos++;

    atual++;

    if(atual < 5){
        mostrar();
    }else{
        resultado();
    }
}

function resultado(){

    document.body.innerHTML = "";

    let tela = document.createElement("div");

    tela.style.textAlign = "center";
    tela.style.paddingTop = "100px";

    if(acertos <= 2){

        tela.style.background = "red";
        tela.style.color = "white";

        tela.innerHTML =
        `<h1>Você errou ${(5-acertos)*20}%!</h1>
        <h2>Tente novamente.</h2>`;

    }else if(acertos <= 4){

        tela.style.background = "gold";

        tela.innerHTML =
        `<h1>Parabéns!</h1>
        <h2>Você mandou bem.</h2>
        <p>${acertos}/5</p>`;

    }else{

        tela.style.background = "limegreen";
        tela.style.color = "white";

        tela.innerHTML =
        `<h1>VOCÊ ACERTOU TUDO!</h1>
        <h2>Parabéns 🎉</h2>`;
    }

    tela.style.height = "100vh";

    document.body.appendChild(tela);
}
