let p = [
[["Qual a capital do Brasil?",["SP","Brasília","RJ","Curitiba"],1],
    ["Qual a capital da Argentina?",["Buenos Aires","Córdoba","Rosário","Mendoza"],0]],
[["5 x 5 = ?",["20","15","25","30"],2],
    ["10 x 2 = ?",["15","20","25","30"],1]],
[ ["Planeta vermelho?",["Marte","Terra","Júpiter","Saturno"],0],
    ["Maior planeta?",["Marte","Vênus","Júpiter","Mercúrio"],2]],
[ ["Quem descobriu o Brasil?",["Cabral","Tiradentes","Getúlio","Dom Pedro"],0],
    ["Primeiro imperador do Brasil?",["Pedro II","Cabral","Dom Pedro I","Getúlio"],2]],
    [ ["Símbolo da água?",["CO2","H2O","NaCl","O2"],1],
    ["Símbolo do ouro?",["Au","Ag","Fe","Cu"],0]]
];

let n=0,a=0;

mostrar();

function mostrar(){
    pergunta.innerHTML=p[n][0];

    alternativas.innerHTML="";

    p[n][1].forEach((x,i)=>
        alternativas.innerHTML+=
        `<button onclick="resp(${i})">${x}</button>`
    );
}

function resp(i){

    if(i==p[n][2]) a++;

    n++;

    if(n<5) return mostrar();

    document.body.style.textAlign="center";

    if(a<=2)
        document.body.innerHTML=
        `<div style="background:red;height:100vh;color:white">
        <h1>Você errou ${(5-a)*20}%!</h1>
        <h2>Tente novamente</h2>
        </div>`;

    else if(a<5)
        document.body.innerHTML=
        `<div style="background:gold;height:100vh">
        <h1>Parabéns!</h1>
        <h2>Você quase gabaritou!</h2>
        <h3>${a}/5</h3>
        </div>`;

    else
        document.body.innerHTML=
        `<div style="background:lime;height:100vh">
        <h1>Você acertou tudo!</h1>
        <h2>Parabéns 🎉</h2>
        </div>`;
}
