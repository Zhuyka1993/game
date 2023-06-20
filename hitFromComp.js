
let currentInOneHitPC = 0;
let sexondHitPC = null;
let totalPc = 0;
let moznoPerekinutPC = 0;
// here is variable that count how many game dice we have with the same values (we will use it for calculating value of "first turn")
let sovpadeniyaNa1PC = 0;
let sovpadeniyaNa2PC = 0;
let sovpadeniyaNa3PC = 0;
let sovpadeniyaNa4PC = 0;
let sovpadeniyaNa5PC = 0;
let sovpadeniyaNa6PC = 0;

function startFromComp() {


    //Turn ON our animation of blinding of PC;
    //let clearblind = document.querySelector(".pc");
    //clearblind.style = "animation: blink2 1s  infinite;"
    console.log("зайшли в стартфромкомп, тест на первый ход" + currentInOneHitPC);

    //Remove dice after rolling of player; 
    for (let a = 1; a < 6; a++) {
        let obnul = document.getElementById("kub" + a);
        obnul.style = "display:none";
    };
    let result = [0];  //in this array we save result of value of our dice;

    let bonesPc = document.querySelector('.bones');
    for (let a = 1; a < 6; a++) {
        const createEl = document.createElement("div");
        const gen = randomInteger(1, 6);
        result.push(gen);
        createEl.className = 'kubPC' + a;
        // styles
        createEl.style.backgroundColor = 'white';
        createEl.style.width = '50px';
        createEl.style.height = '50px';

        //createEl.innerHTML = gen;
        bonesPc.append(createEl);
    }

    if (totalPc >= 1000) {
        console.log("Victorius, Nagibator Win");
    }
    // here is variable that count how many game dice we have with the same values (we will use it for calculating value of "first turn")


    function checkHowMuch() {//function which count how how many game dice we have with the same values

        for (count = 0; count < result.length; count++) {
            console.log("считаю:" + count)
            if (result[count] == 1) {//if match is 1, then match count+=1
                sovpadeniyaNa1PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redone.png) '; //путь к вашему изображению
            }
            else if (result[count] == 2) {  // matching for "2";
                sovpadeniyaNa2PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redtwo.png) '; //путь к вашему изображению
            }
            else if (result[count] == 3) {
                sovpadeniyaNa3PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redthree.png) '; //путь к вашему изображению
            }
            else if (result[count] == 4) {
                sovpadeniyaNa4PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redfour.png) '; //путь к вашему изображению
            }
            else if (result[count] == 5) {
                sovpadeniyaNa5PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redfive.png) '; //путь к вашему изображению
            }
            else if (result[count] == 6) {
                sovpadeniyaNa6PC += 1;
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPC' + count);
                element.style.backgroundImage = 'url(redsix.png) '; //путь к вашему изображению

            }

        }
    };

    checkHowMuch(); // start our function for calculating currentInOneHitPC and mozhnoPerekinutPC 



    //calculating of score:
    // checking how much dice with value of "1"
    if (sovpadeniyaNa1PC == 1) { //if we got only one "1" dice;
        currentInOneHitPC += 10;
    }
    else if (sovpadeniyaNa1PC == 2) {  //if we got two "1" dice...;
        currentInOneHitPC += 20;
    }
    else if (sovpadeniyaNa1PC == 3) { //if we got three "1" dice;
        currentInOneHitPC += 100;
    }
    else if (sovpadeniyaNa1PC == 4) {
        currentInOneHitPC += 200;
    }
    else if (sovpadeniyaNa1PC == 5) {
        currentInOneHitPC += 1000;
    };

    console.log("Заработано благодаря еденицам: " + currentInOneHitPC);
    // checking how much dice with value of "2"

    if (sovpadeniyaNa2PC == 1) { //if we got only one "2" dice;
        currentInOneHitPC += 0;
        moznoPerekinutPC += 1;
    }
    else if (sovpadeniyaNa2PC == 2) {//if we got two "2" dice;
        currentInOneHitPC += 0;
        moznoPerekinutPC += 2;
    }
    else if (sovpadeniyaNa2PC == 3) {
        currentInOneHitPC += 20;
    }
    else if (sovpadeniyaNa2PC == 4) {
        currentInOneHitPC += 40;
    }
    else if (sovpadeniyaNa2PC == 5) {
        currentInOneHitPC += 200;
    };

    console.log("Заработано благодаря еденицам и двойкам PC: " + currentInOneHitPC);

    // checking how much dice with value of "3"

    if (sovpadeniyaNa3PC == 1) { //if we got only one "3" dice;
        currentInOneHitPC += 0;
        moznoPerekinutPC += 1;
    }
    else if (sovpadeniyaNa3PC == 2) { //if we got two "3" dice;  
        currentInOneHitPC += 0;
        moznoPerekinutPC += 2;
    }
    else if (sovpadeniyaNa3PC == 3) {
        currentInOneHitPC += 30;
    }
    else if (sovpadeniyaNa3PC == 4) {
        currentInOneHitPC += 60;
    }
    else if (sovpadeniyaNa3PC == 5) {//if we got five "3" dice;
        currentInOneHitPC += 300;
    };

    console.log("Заработано очей за ход благодаря еденицам, двойкам, и тройкам PC: " + currentInOneHitPC);

    // checking how much dice with value of "4"

    if (sovpadeniyaNa4PC == 1) {
        currentInOneHitPC += 0;
        moznoPerekinutPC += 1;
    }
    else if (sovpadeniyaNa4PC == 2) {
        currentInOneHitPC += 0;
        moznoPerekinutPC += 2;
    }
    else if (sovpadeniyaNa4PC == 3) { //if we got three "4" dice;
        currentInOneHitPC += 40;
    }
    else if (sovpadeniyaNa4PC == 4) {
        currentInOneHitPC += 80;
    }
    else if (sovpadeniyaNa4PC == 5) { //if we got five "4" dice;
        currentInOneHitPC += 400;
    };
    console.log("Заработано очей за ход благодаря еденицам, двойкам,  тройкам, и четверкам : " + currentInOneHitPC);

    // checking how much dice with value of "5"

    if (sovpadeniyaNa5PC == 1) {
        currentInOneHitPC += 5;
    }
    else if (sovpadeniyaNa5PC == 2) { //if we got two "5" dice;
        currentInOneHitPC += 10;
    }
    else if (sovpadeniyaNa5PC == 3) { //if we got three "5" dice;
        currentInOneHitPC += 50;
    }
    else if (sovpadeniyaNa5PC == 4) {
        currentInOneHitPC += 100;
    }
    else if (sovpadeniyaNa5PC == 5) {//if we got five "5" dice;
        currentInOneHitPC += 500;
    };

    console.log("Заработано очей за ход благодаря еденицам, двойкам,  тройкам,  четверкам и пятеркам PK: " + currentInOneHitPC);

    // checking how much dice with value of "5"


    if (sovpadeniyaNa6PC == 1) { //if we got only one  "6" dice; 
        currentInOneHitPC += 0;
        moznoPerekinutPC += 1;
    }
    else if (sovpadeniyaNa6PC == 2) { //if we got two  "6" dice; 
        currentInOneHitPC += 0;
        moznoPerekinutPC += 2;
    }
    else if (sovpadeniyaNa6PC == 3) {
        currentInOneHitPC += 60;
    }
    else if (sovpadeniyaNa6PC == 4) { //if we got four  "6" dice; 
        currentInOneHitPC += 120;
    }
    else if (sovpadeniyaNa6PC == 5) {
        currentInOneHitPC += 600;
    };

    console.log("Проверка на совпадение едениц: " + sovpadeniyaNa1PC + " двоек: " + sovpadeniyaNa2PC + " троек: " + sovpadeniyaNa3PC + " четверок: " + sovpadeniyaNa4PC +
        " пятерок: " + sovpadeniyaNa5PC + " шестерок: " + sovpadeniyaNa6PC);

    console.log("Заработано очей за ход благодаря еденицам, двойкам,  тройкам,  четверкам, пятеркам и шестеркам PK : " + currentInOneHitPC);


    let insertSeconeHit = document.querySelector('.info_table');
    let divForsec = document.createElement('span');
    divForsec.className="output_info_pc";
    divForsec.style = "color: #c37515";
    divForsec.innerHTML = "За перший хід комп'ютер заробив:" + currentInOneHitPC + "<br>";

    insertSeconeHit.appendChild(divForsec);

    // убираю кнопку перекид
    let addper = document.querySelector(".perekid");
    addper.style = "display: none;"
    if (currentInOneHitPC == 0) {
        let infoTab = document.querySelector('.info_table');
        let divFor = document.createElement('span');
        divFor.className="output_info_pc";
        divFor.style = "color: #c37515";
        divFor.innerHTML = " Тому хід переходить вам <br>";
        infoTab.appendChild(divFor);
        //опускаем бигунок прокрутки вниз
        let bot = document.querySelector('.info_table');
        bot.scrollTop = bot.scrollHeight;
        document.getElementsByClassName(".start").style = "display:flex"; //show "start" button 
    }
    else if (currentInOneHitPC > 0) {


        if (moznoPerekinutPC > 2) {
            let insertSeconeHit = document.querySelector('.info_table');
            let divForsec = document.createElement('span');
            divForsec.className ="output_info_pc";
            divForsec.innerHTML = "Комп'ютер хоче перекинути не виграшну комбінацію, та ризикує втратити " + currentInOneHitPC + " очків <br>";
            //опускаем бигунок прокрутки вниз


            insertSeconeHit.appendChild(divForsec);
            let bot = document.querySelector('.info_table');
            bot.scrollTop = bot.scrollHeight;
            perekidPC();
        }
        else if (moznoPerekinutPC <= 2) {
            let insertSeconeHit = document.querySelector('.info_table');
            let divForsec = document.createElement('span');
            divForsec.className="output_info_pc"
            divForsec.innerHTML = "Та вирішив зарахувати зароблені бали. Хід переходить вам. <br>";


            insertSeconeHit.appendChild(divForsec);
            let bot = document.querySelector('.info_table');
            bot.scrollTop = bot.scrollHeight;
        }
    };


    // else if (moznoPerekinutPC<=2) {
    //бЛОК НИЖЧЕ ДЛЯ ЗАПИСУ В ХТМЛ КІЛЬКІСТЬ ОЧОК З ПЕШОГО ХОДУ КОМПА
    //let infoTab = document.querySelector('.info_table');
    //let divFor = document.createElement('div');
    //divFor.style = "color: red";
    //divFor.innerHTML = "Комп'ютер заробив за перший хід:" + currentInOneHitPC + " очків , не перекидуючи не призову комбінацію";
    //infoTab.appendChild(divFor);
    //endPC();


    // };

    endPC();
};



let resultPerekid = [];  //в этот массив записываем результат с кубиков

function perekidPC() {
    console.log("зайшли в перекид,");
    const bonesForPerekidContainer = document.getElementsByClassName('bonesForPerekid')[0]; //достучаться до   бонесфорперекид, массив указываем т.к. у нас метод возвращает всегда массив
    console.log(moznoPerekinutPC);
    for (let i = 0; i < moznoPerekinutPC;) {
        const createEl = document.createElement("div");;
        const gen = randomInteger(1, 6);

        resultPerekid.push(gen); //метод для записи в массив
        createEl.className = 'kubPCperekid' + i;
        // styles
        createEl.style.backgroundSize = "100%";
        createEl.style.border = "solid red";
        createEl.style.width = '50px';
        createEl.style.height = '50px';


        //createEl.innerHTML = gen;
        bonesForPerekidContainer.style = "display: flex"
        bonesForPerekidContainer.appendChild(createEl);
        i++;
    };

    checkHowMuchInSecondHit();
};


// Напевно тут треба функцію підрахунку



let sovpadeniyaNa1PC2hit = 0;
let sovpadeniyaNa2PC2hit = 0;
let sovpadeniyaNa3PC2hit = 0;
let sovpadeniyaNa4PC2hit = 0;
let sovpadeniyaNa5PC2hit = 0;
let sovpadeniyaNa6PC2hit = 0;




function checkHowMuchInSecondHit() { //функция проверки на совпадение 2й ход
    sovpadeniyaNa1PC2hit = 0;
    sovpadeniyaNa2PC2hit = 0;
    sovpadeniyaNa3PC2hit = 0;
    sovpadeniyaNa4PC2hit = 0;
    sovpadeniyaNa5PC2hit = 0;
    sovpadeniyaNa6PC2hit = 0;

    console.log("result lungth dell me:" + resultPerekid.length);
    for (let count = 0; count < moznoPerekinutPC; count++) {
        if (resultPerekid[count] == 1) { //если совпадение на 1, то счетчик совпадений+1
            sovpadeniyaNa1PC2hit++;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redone.png) '; //путь к вашему изображению
            };
        }
        else if (resultPerekid[count] == 2) {  // совпадения на двойки
            sovpadeniyaNa2PC2hit += 1;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redtwo.png) '; //путь к вашему изображению
            };
        }
        else if (resultPerekid[count] == 3) {   //совпадение на тройки
            sovpadeniyaNa3PC2hit += 1;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redthree.png) '; //путь к вашему изображению
            };
        }
        else if (resultPerekid[count] == 4) {//совпадение на 4
            sovpadeniyaNa4PC2hit += 1;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redfour.png) '; //путь к вашему изображению
            };
        }
        else if (resultPerekid[count] == 5) {//совпадение на 5
            sovpadeniyaNa5PC2hit += 1;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redfive.png) '; //путь к вашему изображению
            };
        }
        else if (resultPerekid[count] == 6) {//совпадение на 6
            sovpadeniyaNa6PC2hit += 1;
            if (document.querySelector('.kubPCperekid' + count)) {
                // Получаем ссылку на элемент, к которому нужно применить фоновое изображение
                let element = document.querySelector('.kubPCperekid' + count);
                element.style.backgroundImage = 'url(redsix.png) '; //путь к вашему изображению
            };
        }

    };

    //Условие очей на еденицы:
    if (sovpadeniyaNa1PC2hit == 1) { //если одна еденица 
        sexondHitPC += 10;
    }
    else if (sovpadeniyaNa1PC2hit == 2) { //если две еденицы
        sexondHitPC += 20;
    }
    else if (sovpadeniyaNa1PC2hit == 3) { // совпадение на три еденицы
        sexondHitPC += 100;
    }
    else if (sovpadeniyaNa1PC2hit == 4) {//проверка на совпадение четырех едениц

        sexondHitPC += 200;
    }
    else if (sovpadeniyaNa1PC2hit == 5) {//проверка на совпадение пяти едениц
        sexondHitPC += 1000;
    };
    console.log("Заработано благодаря еденицам PK второй ход: " + sexondHitPC);

    //Условие очей на двойки:

    if (sovpadeniyaNa2PC2hit == 1) { //если одна двойка 
        sexondHitPC += 0;
    }
    else if (sovpadeniyaNa2PC2hit == 2) { //если две двойки  
        sexondHitPC += 0;
    }
    else if (sovpadeniyaNa2PC2hit == 3) { // совпадение на три двойки
        sexondHitPC += 20;
    }
    else if (sovpadeniyaNa2PC2hit == 4) {//проверка на совпадение четырех двоек
        sexondHitPC += 40;
    }
    else if (sovpadeniyaNa2PC2hit == 5) {//проверка на совпадение пяти двоек
        sexondHitPC += 200;
    };

    console.log("Заработано благодаря еденицам и двойкам PC второй ход: " + sexondHitPC);

    //Условие очей на тройки:

    if (sovpadeniyaNa3PC2hit == 1) { //если одна тройка 
        sexondHitPC = sexondHitPC + 0;
    }
    else if (sovpadeniyaNa3PC2hit == 2) { //если две тройки  
        sexondHitPC += 0;
    }
    else if (sovpadeniyaNa3PC2hit == 3) { // совпадение на три тройки
        sexondHitPC += 30;
    }
    else if (sovpadeniyaNa3PC2hit == 4)//проверка на совпадение четырех троек
    {
        sexondHitPC += 60;
    }
    else if (sovpadeniyaNa3PC2hit == 5)//проверка на совпадение пяти троек
    {
        sexondHitPC += 300;
    };

    console.log("Заработано очей за ход благодаря еденицам, двойкам, и тройкам PC второй ход: " + sexondHitPC);

    //Условие очей на четверки:

    if (sovpadeniyaNa4PC2hit == 1) { //если одна четверка 
        sexondHitPC += 0;

    }
    else if (sovpadeniyaNa4PC2hit == 2) { //если две четверки  
        sexondHitPC += 0;

    }
    else if (sovpadeniyaNa4PC2hit == 3) { // совпадение на три четверки
        sexondHitPC += 40;
    }
    else if (sovpadeniyaNa4PC2hit == 4) {//проверка на совпадение четырех четверок

        sexondHitPC += 80;
    }
    else if (sovpadeniyaNa4PC2hit == 5) {//проверка на совпадение пяти четверок
        sexondHitPC += 400;
    };
    console.log("Заработано очей за ход благодаря еденицам, двойкам,  тройкам, и четверкам второй ход: " + sexondHitPC);

    //Условие очей на пятерки:
    if (sovpadeniyaNa5PC2hit == 1) { //если одна пятерка 
        sexondHitPC += 5;
    }
    else if (sovpadeniyaNa5PC2hit == 2) { //если две пятерки  
        sexondHitPC += 10;
    }
    else if (sovpadeniyaNa5PC2hit == 3) { // совпадение на три пятерки
        sexondHitPC += 50;
    }
    else if (sovpadeniyaNa5PC2hit == 4) {//проверка на совпадение четырех пятерок
        sexondHitPC += 100;
    }
    else if (sovpadeniyaNa5PC2hit == 5) {//проверка на совпадение пяти пятерок
        sexondHitPC += 500;
    };



    //Условие очей на шестерки :

    if (sovpadeniyaNa6PC2hit == 1) { //если одна шестерка 
        sexondHitPC += 0;
    }
    else if (sovpadeniyaNa6PC2hit == 2) { //если две шестерки  
        sexondHitPC += 0;
    }
    else if (sovpadeniyaNa6PC2hit == 3) { // совпадение на три шестерки
        sexondHitPC += 60;
    }
    else if (sovpadeniyaNa6PC2hit == 4) {//проверка на совпадение четырех шестерок
        sexondHitPC += 120;
    }
    else if (sovpadeniyaNa6PC2hit == 5) {//проверка на совпадение пяти шестерок
        sexondHitPC += 600;
    };
    console.log("Заработано очей за ход благодаря еденицам, двойкам,  тройкам,  четверкам и пятеркам второй ход: " + sexondHitPC);
    console.log("Проверка на совпадение второй ПК ход едениц: " + sovpadeniyaNa1PC2hit + " двоек: " + sovpadeniyaNa2PC2hit + " троек: " + sovpadeniyaNa3PC2hit + " четверок: " + sovpadeniyaNa4PC2hit +
        " пятерок: " + sovpadeniyaNa5PC2hit + " шестерок: " + sovpadeniyaNa6PC2hit);

};





function endPC() {
    sovpadeniyaNa1PC2hit = 0;
    sovpadeniyaNa2PC2hit = 0;
    sovpadeniyaNa3PC2hit = 0;
    sovpadeniyaNa4PC2hit = 0;
    sovpadeniyaNa5PC2hit = 0;
    sovpadeniyaNa6PC2hit = 0;

    console.log("Зашли в енд, тест на первій ход" + currentInOneHitPC)

    //     function clear() {
    //         console.log("Зайшов в клеар");
    //         let delBtnEnd = document.querySelector(".endOfHit");
    //         if (!delBtnEnd) {
    //             delBtnEnd.style = "display:none"
    //         } 
    //         else { delBtnEnd.style = "display:none" }

    //         let delBtnpere = document.querySelector(".perekid");
    //         if (!delBtnpere) {

    //         }
    //         else { delBtnpere.style = "display:none" }
    //     }
    //     clear();

    let delBtnEnd = document.querySelector(".endOfHit");
    if (!delBtnEnd) {
        delBtnEnd.style = "display:none"
    }
    else { delBtnEnd.style = "display:none" }

    let delBtnpere = document.querySelector(".perekid");
    if (!delBtnpere) {
    } else { delBtnpere.style = "display:none" }

    console.log("in end 1 hod:" + currentInOneHitPC);
    console.log("in end 2 hod" + sexondHitPC);
    console.log("in end perekid:" + moznoPerekinutPC);


    if (currentInOneHitPC == 0) {
        //якщо перший хід 0
        // let insertSeconeHit = document.querySelector('.info_table');
        //let divForsec = document.createElement('div');
        //divForsec.style = "color: red";
        //divForsec.innerHTML = "За перший хід у комп'ютера випало нуль очок, тому хід переходить вам";
        //опускаем бигунок прокрутки вниз
        //let bot = document.querySelector('.info_table');
        //bot.scrollTop = bot.scrollHeight;


        totalPc += 0;
        prodolzhenie;
    }
    else if (sexondHitPC == 0) {


        let insertSeconeHit = document.querySelector('.info_table');
        let divForsec = document.createElement('span');
        divForsec.className="output_info_pc"
        divForsec.innerHTML = "За другий хід у комп'ютера випало нуль очок, тому хід переходить вам і комп'ютер втратив  " + currentInOneHitPC + "<br>";


        insertSeconeHit.appendChild(divForsec);
        //опускаем бигунок прокрутки вниз
        let bot = document.querySelector('.info_table');
        bot.scrollTop = bot.scrollHeight;
        totalPc += 0;
        prodolzhenie;

    }

    else if (currentInOneHitPC > 0 && sexondHitPC == null) {
        totalPc = totalPc + currentInOneHitPC;
        prodolzhenie;
    }

    else {
        totalPc = totalPc + currentInOneHitPC + sexondHitPC;
        //бЛОК НИЖЧЕ ДЛЯ ЗАПИСУ В ХТМЛ КІЛЬКІСТЬ ОЧОК З другого ХОДУ КОМПА
        let infoTab = document.querySelector('.info_table');
        let divFor = document.createElement('span');
        divFor.className="output_info_pc";
        divFor.innerHTML = "Комп'ютер заробив за другий хід:" + sexondHitPC + " очків <br>";
        infoTab.appendChild(divFor);
        prodolzhenie;


    };

    console.log("Pk1 hod ochei" + currentInOneHitPC);
    console.log("PK 2 hod ochei:" + sexondHitPC);
    console.log("totalPC:" + totalPc)

    document.querySelector(".bonesForPerekid").style = "display: flex; justify-content: space-around;"
    document.querySelector(".prodolzhaem").style = "display:flex"; // показіваем кнопку продолжения
    currentInOneHitPC = 0;
}; //endPC

document.querySelector('.prodolzhaem').onclick = prodolzhenie;

function prodolzhenie() {
    moznoPerekinutPC = 0;
    resultPerekid = [];


    currentInOneHitPC = 0;
    sexondHitPC = null;

    sovpadeniyaNa1PC = 0;
    sovpadeniyaNa2PC = 0;
    sovpadeniyaNa3PC = 0;
    sovpadeniyaNa4PC = 0;
    sovpadeniyaNa5PC = 0;
    sovpadeniyaNa6PC = 0;




    sovpadeniyaNa1PC2hit = 0;
    sovpadeniyaNa2PC2hit = 0;
    sovpadeniyaNa3PC2hit = 0;
    sovpadeniyaNa4PC2hit = 0;
    sovpadeniyaNa5PC2hit = 0;
    sovpadeniyaNa6PC2hit = 0;

    let rav = document.getElementById("totalPCResult");


    rav.innerHTML = totalPc;

    //убираем мигание
    let clearblind = document.querySelector(".play2");
    clearblind.style = "animation: blink2   infinite;"

    // убираем пк кубики 2й ход
    let kub11 = document.querySelector(".kubPCperekid0");
    if (!kub11) {

    }
    else { kub11.remove(); }
    //удаляю куб 11

    let kub12 = document.querySelector(".kubPCperekid1");
    console.log("mistake here:" + kub12);  //удаляю куб 12
    if (!kub12) {  //если куба нет, то єтот блок что б не попасть на ошибку

    }
    else {
        kub12.remove()
    }

    let kub13 = document.querySelector(".kubPCperekid2");  //удаляю куб 13
    if (!kub13) {  //если куба нет, то єтот блок что б не попасть на ошибку

    }
    else { kub13.remove() }

    let kub14 = document.querySelector(".kubPCperekid3");
    if (kub14 == null) {

    }
    else {
        kub14.remove();
    }

    let kub15 = document.querySelector(".kubPCperekid4");
    if (kub15 == null) {

    }
    else {
        kub15.remove();
    }

    /////  удаляем пк куб первій ход
    let kubPC1 = document.querySelector(".kubPC1");
    kubPC1.remove();
    //удаляю куб 11

    let kubPC2 = document.querySelector(".kubPC2");

    kubPC2.remove();

    let kubPC3 = document.querySelector(".kubPC3");  //удаляю kubPC3
    kubPC3.remove();

    let kubPC4 = document.querySelector(".kubPC4");

    kubPC4.remove();


    let kubPC5 = document.querySelector(".kubPC5");

    kubPC5.remove();

    //обнуляем кубики  в хтмл помле хода компа, для этого их нужно найти
    console.log("click");
    let showStart = document.querySelector('.start');
    showStart.style = "display:flex";
    let removeProdolzhenie = document.querySelector('.prodolzhaem');
    removeProdolzhenie.style = "display:none";
};










