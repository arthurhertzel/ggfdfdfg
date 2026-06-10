let p = [
["Capital do Brasil?",["SP","Brasília","RJ","BH"],1],
["5 x 5?",["20","25","15","30"],1],
["Planeta vermelho?",["Marte","Terra","Júpiter","Saturno"],0],
["Quem descobriu o Brasil?",["Cabral","Dom Pedro","Getúlio","Tiradentes"],0],
["H2O é?",["Sal","Água","Ferro","Ouro"],1]
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
