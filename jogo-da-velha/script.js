let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//matriz padrão vencedor

let winningPattern = [

    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

//Jogador 'X' joga primeiro
let xTurn = true;
let count = 0;

//Desabilitar todos os botões
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
//Habilitar popup
    popupRef.classList.remove("hide");    
};

//Habilitar todos os botões (Para novos jogos e recomeço)

const enableButtons = () => {
    btnRef.forEach ((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    
    //desabilitar popup
    popupRef.classList.add("hide");
};

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//Essa função é executada quando o jogador ganha

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Ganhou";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Ganhou";
    }
};

//Função empate
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> É um empate";
};

//Novo jogo
newgameBtn.addEventListener("click", () => {
    count = 0
    enableButtons();
});

//Lógica da vitória
const winChecker = () => {
//todos os padrões de vitória
for (let i of winningPattern) {
    let [element1, element2, element3] = [
        btnRef[i[0]].innerText,
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
    ];

    //verifica se os elementos estão preenchidos
    //se 3 elementos forem iguais, verifica como vitória
    if (element1 != "" && (element2 != "") & (element3 != "")) {
        if (element1 == element2 && element2 == element3) {
        //se todos os 3 botões tiverem o mesmo valor executará o "winFuccion"
        winFunction(element1);
        }
     }
 }
};

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //Display X
            element.innerText= "X";
            element.disabled = true;
        } else {
            xTurn = true;
            //Display Y
            element.innerText = "O";
            element.disabled = true;
        }
        //contagem por click
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        //verificação de vitória por click
        winChecker();
    });
});
//Habilitar botões e desabilitar popup da página
window.onload = enableButtons;