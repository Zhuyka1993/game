

function randomInteger(min, max) {
    // random number from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
//variable for value from dice
let hit1;
let hit2;
let hit3;
let hit4;
let hit5;



let total = null; //TOTAL SCORE OF PLAYER

let firstTurn = null; //Value after first turn of user;
let secondTurn = null;  //If user can, and make second turn, value will save in this variable;
let moznoPerekinut = null; // Here is how much dices we can use in second turn;



document.querySelector('.start').onclick = start; //From this part we start our game;

function start() {
    //Turn ON our animation of blinding of player;
    let clearblind = document.querySelector(".play1");
    clearblind.style = "animation: blink 1s  infinite;"

    //Show our dices after first turn of player
    for (let a = 1; a < 6; a++) {
        let obnul = document.getElementById("kub" + a);
        obnul.style = "display:block";
    };

    //before we continue calculate result of first turn of player - we will reset our scores in firstTurn and mozhnoPerekinut;
    firstTurn = 0;
    moznoPerekinut = 0;
    //IF YOU WIN HERE SHOULD BE PROMPT   <-------------------------<<
    if (total >= 1000) {
        alert("Victorius");
    }





    let result = [];  //in this array we save result of value of our dice;
    result[0] = randomInteger(1, 6);
    result[1] = randomInteger(1, 6);
    result[2] = randomInteger(1, 6);
    result[3] = randomInteger(1, 6);
    result[4] = randomInteger(1, 6);

    // here is variable that count how how many game dice we have with the same values (we will use it for calculating value of "first turn")
    let sovpadeniyaNa1 = 0;
    let sovpadeniyaNa2 = 0;
    let sovpadeniyaNa3 = 0;
    let sovpadeniyaNa4 = 0;
    let sovpadeniyaNa5 = 0;
    let sovpadeniyaNa6 = 0;

    function checkHowMuch() { //function which count how how many game dice we have with the same values

        for (count = 0; count < 5; count++) {
            if (result[count] == 1) { //if match is 1, then match count+=1
                sovpadeniyaNa1 += 1;

                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(one.png) '; //путь к вашему изображению

            }
            else if (result[count] == 2) {  // matching for "2";
                sovpadeniyaNa2 += 1;

                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(two.png) ';
            }

            else if (result[count] == 3) {   // matching for "3";
                sovpadeniyaNa3 += 1;
                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(three.png) ';
            }
            else if (result[count] == 4) {// matching for "4";
                sovpadeniyaNa4 += 1;
                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(four.png) ';
            }
            else if (result[count] == 5) {// matching for "5";
                sovpadeniyaNa5 += 1;
                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(five.png) ';
            }
            else if (result[count] == 6) {// matching for "6";
                sovpadeniyaNa6 += 1;
                let element = document.getElementById('kub' + (count + 1));
                element.style.backgroundImage = 'url(six.png) ';

            }

        };
    };

    checkHowMuch(); // start our function for calculating firstTurn and mozhnoPerekinut 


    console.log("How much we have count of 1 : " + sovpadeniyaNa1 + " count of 2: " + sovpadeniyaNa2 + " count of 3: " + sovpadeniyaNa3 + " count of 4: " +
        sovpadeniyaNa4 + " count of 5 : " + sovpadeniyaNa5 + " count of 6: " + sovpadeniyaNa6);

    //calculating of score:

    // checking how much dice with value of "1"

    if (sovpadeniyaNa1 == 1) { //if we got only one "1" dice;
        firstTurn += 10;
    }
    else if (sovpadeniyaNa1 == 2) { //if we got two "1" dices;
        firstTurn += 20;
    }
    else if (sovpadeniyaNa1 == 3) { // if we got three "1" dices;
        firstTurn += 100;
    }
    else if (sovpadeniyaNa1 == 4)// if we got four "1" dices;
    {
        firstTurn += 200;
    }
    else if (sovpadeniyaNa1 == 5)//// if we got five "1" dices;
    {
        firstTurn += 1000;
    };
    console.log(`Score that received by dices with value of "1" ` + firstTurn);


    // checking how much dice with value of "2"

    if (sovpadeniyaNa2 == 1) { //if we got only one "2" dice;
        firstTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa2 == 2) { //if we got  two "2" dice; 
        firstTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa2 == 3) { //if we got  three "2" dice; 
        firstTurn += 20;
    }
    else if (sovpadeniyaNa2 == 4)//if we got  four "2" dice; 
    {
        firstTurn += 40;
    }
    else if (sovpadeniyaNa2 == 5)//if we got  five "2" dice; 
    {
        firstTurn += 200;
    };

    console.log(`Score that received by dices with value of "1" and "2" ` + firstTurn);

    // checking how much dice with value of "3"

    if (sovpadeniyaNa3 == 1) { //if we got  one "3" dice; 
        firstTurn += 0;
        moznoPerekinut += 1;

    }
    else if (sovpadeniyaNa3 == 2) { //if we got  two "3" dice; 
        firstTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa3 == 3) {//if we got  three "3" dice; 
        firstTurn += 30;
    }
    else if (sovpadeniyaNa3 == 4) { //if we got  four "3" dice; 
        firstTurn += 60;
    }
    else if (sovpadeniyaNa3 == 5) { //if we got five "3" dice; 
        firstTurn += 300;
    };
    console.log(`Score that received by dices with value of "1" and "2" and "3" ` + firstTurn);

    // checking how much dice with value of "4"

    if (sovpadeniyaNa4 == 1) { //if we got  one "4" dice; 
        firstTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa4 == 2) { //if we got  two "4" dice; 
        firstTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa4 == 3) { //if we got  three "4" dice; 
        firstTurn += 40;
    }
    else if (sovpadeniyaNa4 == 4) { //if we got  four "4" dice; 
        firstTurn += 80;
    }
    else if (sovpadeniyaNa4 == 5) {//if we got  five "4" dice; 
        firstTurn += 400;
    };
    console.log(`Score that received by dices with value of "1" and "2" and "3" and "4" ` + firstTurn);

    // checking how much dice with value of "5"

    if (sovpadeniyaNa5 == 1) {//if we got  one "5" dice; 
        firstTurn += 5;
    }
    else if (sovpadeniyaNa5 == 2) { //if we got  two "5" dice; 
        firstTurn += 10;
    }
    else if (sovpadeniyaNa5 == 3) { //if we got  three "5" dice; 
        firstTurn += 50;
    }
    else if (sovpadeniyaNa5 == 4) {//if we got  four "5" dice; 
        firstTurn += 100;
    }
    else if (sovpadeniyaNa5 == 5) {//if we got  five "5" dice; 
        firstTurn += 500;
    };
    console.log(`Score that received by dices with value of "1" and "2" and "3" and "4" and "5" ` + firstTurn);

    // checking how much dice with value of "6"


    if (sovpadeniyaNa6 == 1) { //if we got  one "6" dice; 
        firstTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa6 == 2) { //if we got  two "6" dice; 
        firstTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa6 == 3) { //if we got  three "6" dice; 
        firstTurn += 60;
    }
    else if (sovpadeniyaNa6 == 4) { //if we got  four "6" dice; 
        firstTurn += 120;
    }
    else if (sovpadeniyaNa6 == 5) {//if we got  five "6" dice; 
        firstTurn += 600;
    };

    console.log(`Score that received by dices with value of "1" and "2" and "3" and "4" and "5" and "6" ` + firstTurn);

    console.log("How much dices we can roll in second hit : " + moznoPerekinut);



    let infoTable = document.querySelector('.info_table');
    // Show to user how many scores he got in first roll if he got more than 0

    if (firstTurn > 0) {

        // information after first roll:
        let divForPoint = document.createElement('div');
        divForPoint.style = "color: blue";
        divForPoint.innerHTML = "За  перший хід ви заробили:" + firstTurn + " Очків";
        infoTable.appendChild(divForPoint);

        //information how much dice player can roll in second time
        let infoTableSpan = document.createElement('div');
        infoTableSpan.style = "color: blue";

        infoTableSpan.innerHTML = "можете перекинути:" + moznoPerekinut + " кубиків";
        infoTable.appendChild(infoTableSpan);

        //scroll info table to bottom
        let Table = document.querySelector('.info_table');
        Table.scrollTop = Table.scrollHeight;
        //remove "start" button
        let del = document.querySelector(".start");
        del.style = "display: none;"
        //show button "endOfHit"
        let add = document.querySelector(".endOfHit");
        add.style = "display: flex;"

        // show button "perekid"
        let addper = document.querySelector(".perekid");
        addper.style = "display: flex;"

    };

    // if scores player got in first roll== 0
    if (firstTurn == 0) {
        //scroll info table to bottom
        let Table = document.querySelector('.info_table');
        Table.scrollTop = Table.scrollHeight;
        //hide start button
        let del = document.querySelector(".start");
        del.style = "display: none;"
        //show button "endOfHit"
        let add = document.querySelector(".endOfHit");
        add.style = "display: flex;"

        // hide button of "perekid"
        let addper = document.querySelector(".perekid");
        addper.style = "display: none;"

        end();
    }

};
document.querySelector('.endOfHit').onclick = end;

function end() {
    //show final score
    let rav = document.getElementById("totalResult");
    rav.innerHTML = total;

    //turn OFF blinding of Player
    let clearblind = document.querySelector(".play1");
    clearblind.style = "animation: blink infinite;"

    //remove dice from second roll of player;
    let kub11 = document.querySelector(".kub11");
    kub11 && kub11.remove();

    let kub12 = document.querySelector(".kub12");
    console.log("mistake here:" + kub12);
    kub12 && kub12.remove();

    let kub13 = document.querySelector(".kub13");
    kub13 && kub13.remove();

    let kub14 = document.querySelector(".kub14");

    kub14 && kub14.remove();


    if (firstTurn == 0) {

        let infoTable = document.querySelector('.info_table');
        let divForPoint = document.createElement('div');
        divForPoint.style = "color: blue";
        divForPoint.innerHTML = "У вас випало нуль, Тому хід перейшов комп'ютеру";
        infoTable.appendChild(divForPoint);

        let appearpere = document.querySelector(".perekid");
        appearpere.style = "display: none;"

        let appearpro = document.querySelector(".prodolzhaem");
        appearpro.style = "display: flex;"

        let delbtnend = document.querySelector(".endOfHit");
        delbtnend.style = "display:none;"
        total = total + 0;
        startFromComp(); //function, from which start computer;

    }
    else if (secondTurn == 0) {
        console.log("в енду при первом ход = 0 зашел в условие")
        let infoTable = document.querySelector('.info_table');
        let divForPoint = document.createElement('div');
        divForPoint.style = "color: blue";
        divForPoint.innerHTML = "Тому хід перейшов комп'ютеру";
        infoTable.appendChild(divForPoint);

        let appearpere = document.querySelector(".perekid");
        appearpere.style = "display: none;"

        let appearpro = document.querySelector(".prodolzhaem");
        appearpro.style = "display: flex;"

        let delbtnend = document.querySelector(".endOfHit");
        delbtnend.style = "display:none;"
        total = total + 0;
        startFromComp(); //function, from which start computer;
    }

    else {
        let delbtnend = document.querySelector(".endOfHit");
        delbtnend.style = "display:none;"
        total = total + firstTurn + secondTurn;
        let rav = document.getElementById("totalResult");
        rav.innerHTML = total;
        startFromComp(); //function, from which start computer;
    };



};

document.querySelector('.perekid').onclick = pere; // Re-roll the dice


function pere() {
    // remove button of perekid
    let delButton = document.querySelector(".perekid");
    delButton.style = "display:none;";

    //show block with re-roll column
    let st = document.querySelector(".bonesForPerekid").style = "display: flex; justify-content: space-around;"

    const bonesForPerekidContainer = document.getElementsByClassName('bonesForPerekid')[0]; //достучаться до   бонесфорперекид, массив указываем т.к. у нас метод возвращает всегда массив
    let result = [];  //in this array we "save" the result of each dice


    // add the dice of re-rolling, the count of dice is equal to mozhnoPerekinut
    for (let i = 1; i <= moznoPerekinut; i++) {
        const createEl = document.createElement("div");;
        const gen = randomInteger(1, 6);
        result.push(gen);
        createEl.className = 'kub1' + i;

        createEl.style.width = '50px';
        createEl.style.height = '50px';

        bonesForPerekidContainer.appendChild(createEl);
    }

    let sovpadeniyaNa1 = 0;
    let sovpadeniyaNa2 = 0;
    let sovpadeniyaNa3 = 0;
    let sovpadeniyaNa4 = 0;
    let sovpadeniyaNa5 = 0;
    let sovpadeniyaNa6 = 0;

    function checkHowMuch() { //function that check how many dice have one and the same value

        for (count = 0; count < moznoPerekinut; count++) {
            if (result[count] == 1) {
                sovpadeniyaNa1 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(one.png) '; //путь к вашему изображению
                };

            }
            else if (result[count] == 2) {
                sovpadeniyaNa2 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(two.png) '; //путь к вашему изображению
                };

            } else if (result[count] == 3) {
                sovpadeniyaNa3 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(three.png) '; //путь к вашему изображению
                };

            } else if (result[count] == 4) {
                sovpadeniyaNa4 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(four.png) '; //путь к вашему изображению
                };

            }
            else if (result[count] == 5) {
                sovpadeniyaNa5 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(five.png) '; //путь к вашему изображению
                };

            }
            else if (result[count] == 6) {
                sovpadeniyaNa6 += 1;
                if (document.querySelector('.kub1' + (count + 1))) {
                    // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                    let element = document.querySelector('.kub1' + (count + 1));
                    element.style.backgroundImage = 'url(six.png) '; //путь к вашему изображению
                };

            }

        };
    };

    checkHowMuch(); //start our function for calculating secondTurn

    //calculating of score:
    // checking how much dice with value of "1"
    if (sovpadeniyaNa1 == 1) {
        secondTurn += 10;
    }
    else if (sovpadeniyaNa1 == 2) {
        secondTurn += 20;
    }
    else if (sovpadeniyaNa1 == 3) {
        secondTurn += 100;
    }
    else if (sovpadeniyaNa1 == 4) {
        secondTurn += 200;
    }


    console.log("Зароблено завяки одиницям на другий хід: " + secondTurn);

    //checking how much dice with value of "2"

    if (sovpadeniyaNa2 == 1) {
        secondTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa2 == 2) {
        secondTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa2 == 3) {
        secondTurn += 20;
    }
    else if (sovpadeniyaNa2 == 4) {
        secondTurn += 40;
    }
    else if (sovpadeniyaNa2 == 5) {
        secondTurn += 200;
    };

    console.log("Зароблено завяки одиницям і двійкам другий хід: " + secondTurn);

    //checking how much dice with value of "3"

    if (sovpadeniyaNa3 == 1) {
        secondTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa3 == 2) {
        secondTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa3 == 3) {
        secondTurn += 30;
    }
    else if (sovpadeniyaNa3 == 4) {
        secondTurn += 60;
    }
    else if (sovpadeniyaNa3 == 5) {
        secondTurn += 300;
    };

    console.log("Зароблено завдяки одиницям, двійкам і трійкам за другий хід " + secondTurn);

    //checking how much dice with value of "4"

    if (sovpadeniyaNa4 == 1) {
        secondTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa4 == 2) {
        secondTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa4 == 3) {
        secondTurn += 40;
    }
    else if (sovpadeniyaNa4 == 4) {
        secondTurn += 80;
    }
    else if (sovpadeniyaNa4 == 5) {
        secondTurn += 400;
    };
    console.log("Зароблено завдяки одиницям,двійкам, трійкам і четвіркам за другий хід: " + secondTurn);

    //checking how much dice with value of "5"
    if (sovpadeniyaNa5 == 1) {
        secondTurn += 5;
    }
    else if (sovpadeniyaNa5 == 2) {
        secondTurn += 10;
    }
    else if (sovpadeniyaNa5 == 3) {
        secondTurn += 50;
    }
    else if (sovpadeniyaNa5 == 4) {
        secondTurn += 100;
    }
    else if (sovpadeniyaNa5 == 5) {
        secondTurn += 500;
    }

    console.log("Зароблено завдяки одиницям,двійкам, трійкам і четвіркам та п'ятіркам за другий хід: " + secondTurn);

    //checking how much dice with value of "6"

    if (sovpadeniyaNa6 == 1) {
        secondTurn += 0;
        moznoPerekinut += 1;
    }
    else if (sovpadeniyaNa6 == 2) {
        secondTurn += 0;
        moznoPerekinut += 2;
    }
    else if (sovpadeniyaNa6 == 3) {
        secondTurn += 60;
    }
    else if (sovpadeniyaNa6 == 4) {
        secondTurn += 120;
    }

    console.log("Зароблено завдяки одиницям,двійкам, трійкам і четвіркам, п'ятіркам та шосткам за другий хід: " + secondTurn);


    let Table = document.querySelector('.info_table');
    // Show result on info block, how much score in second turn.
    let divForperekid = document.createElement('div');
    divForperekid.style = "color: blue";
    divForperekid.innerHTML = "За повторний хід ви заробили:" + secondTurn + " Очків";
    Table.appendChild(divForperekid);

    //опускаем бигунок прокрутки вниз
    let bot = document.querySelector('.info_table');
    bot.scrollTop = bot.scrollHeight;
};





// Получаем ссылку на элементы иконки и текста
var infoIcon = document.querySelector('.info-icon');
var infoText = document.querySelector('.info-text');

// Добавляем обработчики событий для отображения/скрытия текста при наведении на иконку
infoIcon.addEventListener('mouseenter', function() {
  infoText.style.display = 'block';
});

infoIcon.addEventListener('mouseleave', function() {
  infoText.style.display = 'none';
});







