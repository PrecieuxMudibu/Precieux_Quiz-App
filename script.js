let gamer={nom: "", email:""};
let score=0;
let mainPage=document.querySelector("main");
let form=document.querySelector("form");
let home=document.querySelector(".home");
let email=document.querySelector("#email");
let nom=document.querySelector("#nom");

// RESULT PAGE ELEMENTS
let resultPage=document.createElement("div");
resultPage.classList.add("result-page");
mainPage.appendChild(resultPage);

let secondTitle=document.createElement("h2");
secondTitle.classList.add("second-title");
resultPage.appendChild(secondTitle);

let emailOfGamer=document.createElement("p");
emailOfGamer.classList.add("email-of-gamer");
resultPage.appendChild(emailOfGamer);

let iconeTrue=document.createElement("i");
iconeTrue.classList.add("far", "fa-check-circle", "icone");
resultPage.appendChild(iconeTrue);

let iconeFalse=document.createElement("i");
iconeFalse.classList.add("fa-regular", "fa-circle-xmark", "icone");
resultPage.appendChild(iconeFalse);

let scoreParagraph=document.createElement("p");
scoreParagraph.classList.add("score");
resultPage.appendChild(scoreParagraph);

let buttonHome=document.createElement("button");
buttonHome.classList.add("button-home","style-of-button");
resultPage.appendChild(buttonHome);


// SECOND PAGE : QUESTIONNARY ELEMENTS
let divQuestions=document.createElement("div");
divQuestions.classList.add("div-questions");
mainPage.appendChild(divQuestions);
let questionParagraph = document.createElement("p");

questionParagraph.classList.add("question");
divQuestions.appendChild(questionParagraph); //parent append child enfant

// Number of questions
let questionChrono=document.createElement("p");
questionChrono.classList.add("question-number-and-chrono");
let numberOfQuestions=document.createElement("span");
numberOfQuestions.classList.add("number-of-question");
questionChrono.appendChild(numberOfQuestions);
let chrono=document.createElement("span");
chrono.classList.add("chrono");
questionChrono.appendChild(chrono);
divQuestions.appendChild(questionChrono);

// Progressbar
let progressBar=document.createElement("div");
progressBar.classList.add("progress-bar");
divQuestions.appendChild(progressBar);

let progressBarContained=document.createElement("span");
progressBarContained.classList.add("progress-bar-contained");
progressBar.appendChild(progressBarContained);

// CHOICE-LIST
let choiceList=document.createElement("div");
choiceList.classList.add("choice-list");
divQuestions.appendChild(choiceList);

// CHOICE 1
let choice1=document.createElement("label");
choice1.classList.add("choice-list__element","choice1");
choice1.innerHTML='<input type="radio" id="choice1" name="choice" value="choice1">.ts';
choice1.setAttribute("id","label1");
choiceList.appendChild(choice1);

// CHOICE 2
let choice2=document.createElement("label");
choice2.classList.add("choice-list__element","choice2");
choice2.innerHTML='<input type="radio" id="choice2" name="choice" value="choice2">.ts';
choice2.setAttribute("id","label2");
choiceList.appendChild(choice2);

// CHOICE 3
let choice3=document.createElement("label");
choice3.classList.add("choice-list__element","choice3");
choice3.innerHTML='<input type="radio" id="choice3" name="choice" value="choice3">.ts';
choice3.setAttribute("id","label3");
choiceList.appendChild(choice3);

// CHOICE 4
let choice4=document.createElement("label");
choice4.classList.add("choice-list__element","choice4");
choice4.innerHTML='<input type="radio" id="choice4" name="choice" value="choice4">.ts';
choice4.setAttribute("id","label4");
choiceList.appendChild(choice4);


// CREATION DES BOUTONS
let buttons=document.createElement("div");
buttons.classList.add("buttons");
choiceList.appendChild(buttons);
// Creation of the buttons in the div button
let buttonQuit=document.createElement("button");
buttonQuit.classList.add("button-quit", "style-of-button");
buttonQuit.textContent="Quitter";
buttons.appendChild(buttonQuit);

let buttonNext=document.createElement("button");
buttonNext.classList.add("button-next", "style-of-button");
buttonNext.textContent="Suivant";
buttons.appendChild(buttonNext);

let forgetName=document.querySelector(".forget-name");
let forgetEmail=document.querySelector(".forget-email");
let index=0;

// QUESTIONS
let question_1={
    question: "Quel est le type d'un fichier JS ?",
    proposition_1: ".ts",
    proposition_2: ".jsx",
    proposition_3: ".js",
    proposition_4: ".j",
    trueAnswer:".js"
};

let question_2={
    question: "Qu’est-ce que JavaScript ?",
    proposition_1: "Un langage issu de Java",
    proposition_2: "Un langage de script",
    proposition_3: "Un enfant de Java",
    proposition_4: "Un jeu vidéo",
    trueAnswer:"Un langage de script"
};

let question_3={
    question: "Il y a un intrus. Lequel ?",
    proposition_1: "String",
    proposition_2: "Number",
    proposition_3: "Boolean",
    proposition_4: "Decimal",
    trueAnswer:"Decimal"
};

let question_4={
    question: "JavaScript est un langage sensible :",
    proposition_1: "à la classe",
    proposition_2: "à la crasse",
    proposition_3: "à la casse",
    proposition_4: "ABR",
    trueAnswer:"à la casse"
};

let question_5={
    question: "Si l'argument est un nombre, que renvoie la fonction isNaN ?",
    proposition_1: "True",
    proposition_2: "False",
    proposition_3: "Undefined",
    proposition_4: "ABR",
    trueAnswer:"True"
};

let question_6={
    question: "Quelle est la manière de mettre des commentaires en JavaScript ?",
    proposition_1: "//Commentaires",
    proposition_2: "<--! Commentaires-->",
    proposition_3: "(Commentaires)",
    proposition_4: "ABR",
    trueAnswer:"//Commentaires"
};

let question_7={
    question: "L'opérateur d'égalité ( == )",
    proposition_1: "permet d'affecter une valeur",
    proposition_2: "renforce la sécurité",
    proposition_3: "compare deux opérandes, puis renvoie un booléen",
    proposition_4: "ABR",
    trueAnswer:"compare deux opérandes, puis renvoie un booléen"
};

let question_8={
    question: "L'opérateur d'égalité ( = )",
    proposition_1: "permet d'affecter une valeur.",
    proposition_2: "renforce la sécurité.",
    proposition_3: "compare deux opérandes, puis renvoie un booléen.",
    proposition_4: "ABR",
    trueAnswer:"permet d'affecter une valeur."
};

let question_9={
    question: "jour = [lundi, mardi, mercredi]. Comment accéder à \"lundi\" ?",
    proposition_1: "jour[lundi]",
    proposition_2: "jour[1]",
    proposition_3: "jour[0]",
    proposition_4: "ABR",
    trueAnswer:"jour[0]"
};

let question_10={
    question: "Quel est le symbole de l'opérateur logique OU ?",
    proposition_1: "OU",
    proposition_2: "^",
    proposition_3: "||",
    proposition_4: "ABR",
    trueAnswer:"||"
};

let question_11={
    question: "Quel est le symbole de l'opérateur logique ET ?",
    proposition_1: "&&",
    proposition_2: "^",
    proposition_3: "++",
    proposition_4: "ABR",
    trueAnswer:"&&"
};

let question_12={
    question: "i++ correspond à :",
    proposition_1: "i=i+1",
    proposition_2: "i=1",
    proposition_3: "i=iii",
    proposition_4: "ABR",
    trueAnswer:"i=i+1"
};

let question_13={
    question: "i-- correspond à :",
    proposition_1: "i=--",
    proposition_2: "i=i-1",
    proposition_3: "i=-iii",
    proposition_4: "ABR",
    trueAnswer:"i=i-1"
};

let question_14={
    question: "Comment créer une variable en JavaScript ?",
    proposition_1: "dim maVariable;",
    proposition_2: "create maVariable;",
    proposition_3: "print maVariable;",
    proposition_4: "let maVariable;",
    trueAnswer:"let maVariable;"
};

let question_15={
    question: "let kda=[2020, 2021, 2022]; Que va retourner l'instruction \"kda.length\" ?",
    proposition_1: "3",
    proposition_2: "trois",
    proposition_3: "2",
    proposition_4: "deux",
    trueAnswer:"3"
};

let listOfQuestions = [question_1, question_2, question_3, question_4, question_5, question_6,
    question_7, question_8,question_9,question_10,question_11,question_12, question_13,question_14,
    question_15];
let time=60;
let timeWidth=100;
let realTime=60;


// MY FUNCTIONS
function countDown(){
    if (time==0) {
        buttonNext.disabled=false;
        buttonNext.click();
    } else {
        chrono.textContent=time;
        time--;
    }
}

function timeWidthFunction () {
    realTime-=0.01;
    progressBarContained.style.width=`${(100/60)*realTime}%`;
    if (time<10) progressBarContained.style.backgroundColor="#FF3838";
    else progressBarContained.style.backgroundColor="#028A3D";
}

function giveStyleWhenSelected (element) {
    buttonNext.disabled=false;
    buttonNext.style.backgroundColor="#028A3D";
    for (let i=0; i<choicesTable.length; i++) {
        if (choicesTable[i].id==element.id) element.style.border="1px solid #028A3D";
        else choicesTable[i].style.border="1px solid #DDDDDD";
    }
}

let choicesTable = [choice1,choice2,choice3,choice4];
let inputChoice1;
let inputChoice2;
let inputChoice3;
let inputChoice4;
function displayQuestionAndChoice () {
    buttonNext.disabled=true;
    buttonNext.style.backgroundColor="rgba(2, 138, 61, 0.42)";
    time=60;
    realTime=60;
    chrono.textContent="60";
    questionParagraph.textContent=listOfQuestions[index].question;
    numberOfQuestions.textContent="Question "+(index+1) +"/"+listOfQuestions.length;

    for (let i=0; i<choicesTable.length; i++) choicesTable[i].style.border="1px solid #DDDDDD";
    choice1.innerHTML=`<input type="radio" id="choice1" name="choice" value="${listOfQuestions[index].proposition_1}">${listOfQuestions[index].proposition_1}`;
    choice2.innerHTML=`<input type="radio" id="choice2" name="choice" value="${listOfQuestions[index].proposition_2}">${listOfQuestions[index].proposition_2}`;
    choice3.innerHTML=`<input type="radio" id="choice3" name="choice" value="${listOfQuestions[index].proposition_3}">${listOfQuestions[index].proposition_3}`;
    choice4.innerHTML=`<input type="radio" id="choice4" name="choice" value="${listOfQuestions[index].proposition_4}">${listOfQuestions[index].proposition_4}`;

    inputChoice1=document.querySelector("#choice1");
    inputChoice2=document.querySelector("#choice2");
    inputChoice3=document.querySelector("#choice3");
    inputChoice4=document.querySelector("#choice4");
}
function ckeckTheChoice () {
    if  (inputChoice1.checked==true && inputChoice1.value==listOfQuestions[index].trueAnswer) score+=1;
    else if  (inputChoice2.checked==true && inputChoice2.value==listOfQuestions[index].trueAnswer) score+=1;
    else if  (inputChoice3.checked==true && inputChoice3.value==listOfQuestions[index].trueAnswer) score+=1;
    else if  (inputChoice4.checked==true && inputChoice4.value==listOfQuestions[index].trueAnswer) score+=1;   
    inputChoice1.checked=false;
    inputChoice2.checked=false;
    inputChoice3.checked=false;
    inputChoice4.checked=false;
}

function displayResult () {
    secondTitle.textContent=gamer.nom;
    emailOfGamer.textContent=gamer.email;
    if (score>(listOfQuestions.length/2)) {
        iconeFalse.style.display="none";
    } else {
        iconeTrue.style.display="none";
        iconeFalse.style.color="#FF3838";
    }
    scoreParagraph.textContent=score+"/15";
    buttonHome.textContent="Accueil";
}
// nom, email, forgetName, forgetEmail
function validate(input1, input2, error1, error2) {
    let masque = /\s/g; // Caractères blancs
    let masqueEmail = /(@[a-z]+.com)$/;
    if (masque.test(input1.value) || input1.value=="" || !(masqueEmail.test(input2.value)) || input2.value=="") {
        if (masque.test(input1.value) || input1.value=="") {
            input1.style.border="1px solid #FF3838";
            error1.style.display="block";
        }   
        if (!(masqueEmail.test(input2.value)) || input2.value=="") {
            input2.style.border="1px solid #FF3838";

            error2.style.display="block";
        }          
    }
    else {
        gamer.nom=input1.value;
        gamer.email=input2.value;
        home.style.display="none";
        divQuestions.style.display="block";
        let x=setInterval(() => countDown(), 1000);
        let y=setInterval(() => timeWidthFunction(), 10);
        displayQuestionAndChoice ();
    } 
}

form.addEventListener("submit",function (event) {
    event.preventDefault();
    validate(nom, email, forgetName, forgetEmail);
});
buttonNext.addEventListener("click", function (event) {
    if (index<listOfQuestions.length) {
        ckeckTheChoice();
        if (index==listOfQuestions.length-1) {
            divQuestions.style.display="none";
            resultPage.style.display="flex";
            displayResult();
        } else {
            index++;
            displayQuestionAndChoice();
        }
    }    
});
buttonHome.addEventListener("click", function (event) { location.reload()});
buttonQuit.addEventListener("click", function(event) {
    divQuestions.style.display="none";
    resultPage.style.display="flex";
    displayResult();
})

choice1.addEventListener("click", function (){ giveStyleWhenSelected(choice1)});
choice2.addEventListener("click", function (){ giveStyleWhenSelected(choice2)});
choice3.addEventListener("click", function (){ giveStyleWhenSelected(choice3)});
choice4.addEventListener("click", function (){ giveStyleWhenSelected(choice4)});