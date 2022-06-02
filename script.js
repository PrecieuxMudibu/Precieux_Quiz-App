let gamer={nom: "", email:""};
let score=0;
let main=document.querySelector("main");
let form=document.querySelector("form");

let homePage=document.querySelector(".home-page");
let homePageInputName=document.querySelector("#home-page__input-name");
let homePageInputEmail=document.querySelector("#home-page__input-email");
let homePageForgetName=document.querySelector(".home-page__forget-name");
let homePageForgetEmail=document.querySelector(".home-page__forget-email");

let questionPage=document.createElement("div");
questionPage.classList.add("question-page");
main.appendChild(questionPage);

let questionPageQuestion = document.createElement("p");
questionPageQuestion.classList.add("question-page__question");
questionPage.appendChild(questionPageQuestion);

let questionPageNumberAndChrono=document.createElement("div");
questionPageNumberAndChrono.classList.add("question-page__number-and-chrono");
questionPage.appendChild(questionPageNumberAndChrono);

let questionPageNumber=document.createElement("span");
questionPageNumber.classList.add("question-page__number");
questionPageNumberAndChrono.appendChild(questionPageNumber);

let questionPageTimeInText=document.createElement("span");
questionPageTimeInText.classList.add("question-page__time-in-text");
questionPageNumberAndChrono.appendChild(questionPageTimeInText);

let questionPageProgressBar=document.createElement("div");
questionPageProgressBar.classList.add("question-page__progress-bar");
questionPage.appendChild(questionPageProgressBar);

let progressBarGauge=document.createElement("span");
progressBarGauge.classList.add("progress-bar__gauge");
questionPageProgressBar.appendChild(progressBarGauge);

let questionPageChoiceList=document.createElement("div");
questionPageChoiceList.classList.add("question-page__choice-list");
questionPage.appendChild(questionPageChoiceList);

let choicesListTable=[];
createChoiceListElements();

let questionPageButtons=document.createElement("div");
questionPageButtons.classList.add("question-page__buttons");
questionPageChoiceList.appendChild(questionPageButtons);

let buttonQuit=document.createElement("button");
buttonQuit.classList.add("button-quit", "style-of-button");
buttonQuit.textContent="Quitter";
questionPageButtons.appendChild(buttonQuit);

let buttonNext=document.createElement("button");
buttonNext.classList.add("button-next", "style-of-button");
buttonNext.textContent="Suivant";
questionPageButtons.appendChild(buttonNext);

let resultPage=document.createElement("div");
resultPage.classList.add("result-page");
main.appendChild(resultPage);

let resultPageGamerName=document.createElement("h2");
resultPageGamerName.classList.add("result-page__gamer-name");
resultPage.appendChild(resultPageGamerName);

let resultPageGamerEmail=document.createElement("p");
resultPageGamerEmail.classList.add("result-page__gamer-email");
resultPage.appendChild(resultPageGamerEmail);

let resultPageIconSuccess=document.createElement("i");
resultPageIconSuccess.classList.add("far", "fa-check-circle", "result-page__icon");
resultPage.appendChild(resultPageIconSuccess);

let resultPageIconeFailed=document.createElement("i");
resultPageIconeFailed.classList.add("fa-regular", "fa-circle-xmark", "result-page__icon");
resultPage.appendChild(resultPageIconeFailed);

let resultPageScore=document.createElement("p");
resultPageScore.classList.add("result-page__score");
resultPage.appendChild(resultPageScore);

let buttonHome=document.createElement("button");
buttonHome.classList.add("button-home","style-of-button");
resultPage.appendChild(buttonHome);

let index=0;

let question_1={
    question: "Quel est le type d'un fichier JS ?",
    trueAnswer:".js",
    propositions: [".ts",".jsx", ".js",".j"]
};

let question_2={
    question: "Qu’est-ce que JavaScript ?",
    trueAnswer:"Un langage de script",
    propositions: ["Un langage issu de Java","Un langage de script","Un enfant de Java","Un jeu vidéo"] 
};

let question_3={
    question: "Il y a un intrus. Lequel ?",
    trueAnswer:"Decimal",
    propositions: ["String","Number","Boolean","Decimal"]
};

let question_4={
    question: "JavaScript est un langage sensible :",
    trueAnswer:"à la casse",
    propositions: ["à la classe","à la crasse","à la casse","ABR",] 
};

let question_5={
    question: "Si l'argument est un nombre, que renvoie la fonction isNaN ?",
    trueAnswer:"True",
    propositions:["True","False","Undefined","ABR"]
};

let question_6={
    question: "Quelle est la manière de mettre des commentaires en JavaScript ?",
    trueAnswer:"//Commentaires",
    propositions: ["//Commentaires", "<--! Commentaires-->", "(Commentaires)", "ABR"]
};

let question_7={
    question: "L'opérateur d'égalité ( == )",
    trueAnswer:"compare deux opérandes, puis renvoie un booléen",
    propositions: ["permet d'affecter une valeur", "renforce la sécurité", "compare deux opérandes, puis renvoie un booléen", "ABR"]
};

let question_8={
    question: "L'opérateur d'égalité ( = )",
    trueAnswer:"permet d'affecter une valeur.",
    propositions: ["permet d'affecter une valeur.", "renforce la sécurité.", "compare deux opérandes, puis renvoie un booléen.", "ABR"]
};

let question_9={
    question: "jour = [lundi, mardi, mercredi]. Comment accéder à \"lundi\" ?",
    trueAnswer:"jour[0]",
    propositions: ["jour[lundi]", "jour[1]", "jour[0]", "ABR"]
};

let question_10={
    question: "Quel est le symbole de l'opérateur logique OU ?",
    trueAnswer:"||",
    propositions: ["OU", "^", "||", "ABR"]
};

let question_11={
    question: "Quel est le symbole de l'opérateur logique ET ?",
    trueAnswer:"&&",
    propositions: ["&&", "^", "++", "ABR"]
};

let question_12={
    question: "i++ correspond à :",
    trueAnswer:"i=i+1",
    propositions: ["i=i+1", "i=1", "i=iii", "ABR"]
};

let question_13={
    question: "i-- correspond à :",
    trueAnswer:"i=i-1",
    propositions: ["i=--", "i=i-1", "i=-iii", "ABR"]
};

let question_14={
    question: "Comment créer une variable en JavaScript ?",
    trueAnswer:"let maVariable;",
    propositions: ["dim maVariable;", "create maVariable;", "print maVariable;", "let maVariable;"]
};

let question_15={
    question: "let kda=[2020, 2021, 2022]; Que va retourner l'instruction \"kda.length\" ?",
    trueAnswer:"3",
    propositions: ["3", "trois", "2", "deux"]
};

let listOfQuestions = [question_1, question_2, question_3, question_4, question_5, question_6,
    question_7, question_8,question_9,question_10,question_11,question_12, question_13,question_14,
    question_15];

let time=60;
let progressBarGaugeFull=100;
let timeForProgressBarGauge=60;

form.addEventListener("submit",function (event) {
    event.preventDefault();
    testInputs(homePageInputName, homePageInputEmail, homePageForgetName, homePageForgetEmail);
})

giveStyleToElementSelected();

buttonNext.addEventListener("click", function (event) {
    if (index<listOfQuestions.length) {
        ckeckTheChoice();
        if (index==listOfQuestions.length-1) {
            questionPage.style.display="none";
            resultPage.style.display="flex";
            displayResult();
        } else {
            index++;
            displayQuestionAndChoice();
        }
    }    
})

buttonHome.addEventListener("click", function () { location.reload()});

buttonQuit.addEventListener("click", function() {
    questionPage.style.display="none";
    resultPage.style.display="flex";
    displayResult();
})