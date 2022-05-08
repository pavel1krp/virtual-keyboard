const body = document.querySelector('body');
const keyboardwrapper = document.createElement('div');
keyboardwrapper.classList.add('keyboard-wrapper');
const textArea = document.createElement('textarea');
body.insertBefore(keyboardwrapper, body.firstChild);
body.insertBefore(textArea, keyboardwrapper);
const word = document.createElement('div');

word.classList.add('key');
word.innerHTML = '1';

for (let i = 0; i < 64; i += 1) {
  keyboardwrapper.appendChild(word.cloneNode(true));
}

const AllArray = {
  default: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '&#8593', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', '&#8592', '&#8595', '&#8594', 'Ctrl'],
  shift: ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '/', 'DEL', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', '&#8592', '&#8595', '&#8594', 'Ctrl'],
  caps: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '&#8593', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', '&#8592', '&#8595', '&#8594', 'Ctrl'],
  ruCaps: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'ENTER', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593','Shift','Win','Ctrl', 'Alt', 'Alt',' ', '&#8592','&#8595','&#8594', 'Ctrl'],
  ru: ['ё', '1', '2', '3', '4', '5', '6' ,'7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'ENTER', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593','Shift','Win','Ctrl', 'Alt', 'Alt',' ', '&#8592','&#8595','&#8594', 'Ctrl'],
  ruShift: ['Ё', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "/", 'DEL', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ' , '&#8592', '&#8595', '&#8594', 'Ctrl'],
  eventArr: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', "Backspace" , "Tab" , 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',"Delete", "CapsLock" ,'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',"ShiftLeft" , 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',"ArrowUp" , "ShiftRight" ,"MetaLeft","ControlLeft" ,"AltLeft", "AltRight",'Space',"ArrowLeft","ArrowDown", "ArrowRight","ControlRight"],
};

const allKey = document.querySelectorAll('.key');

allKey.forEach((el, i) => { el.innerHTML = AllArray.default[i] });
allKey.forEach((el, i) => { el.dataset.event = AllArray.eventArr[i] });

allKey.forEach((el, i) => el.addEventListener('click', () => {
    if(allKey[29].classList.contains('active')){
        textArea.innerHTML += AllArray.caps[i];
    }else{
    textArea.innerHTML += AllArray.default[i];}
    
}));    


  
console.log(allKey)
document.addEventListener('keydown', (event)=>{
    if (event.code == "Tab" ||event.code == "AltLeft"|| event.code == "AltRight"){
        event.preventDefault();
    }
    if (event.code == "AltLeft"){
        textArea.innerHTML += '';
        allKey[57].classList.add('active');
        return
    }
    if (event.code == "AltRight"){
        textArea.innerHTML += '';
        allKey[58].classList.add('active');
        return
    }
    if (event.code == "MetaLeft"){
        textArea.innerHTML += '';
        allKey[55].classList.add('active');
        return
    }
    if (event.code == "Tab"){
        textArea.innerHTML += '    ';
        allKey[14].classList.add('active');
        return
    }
    if (event.code == "ControlLeft"){
        textArea.innerHTML += '';
        allKey[56].classList.add('active');
        return
    }
    if (event.code == "ControlRight"){
        textArea.innerHTML += '';
        allKey[63].classList.add('active');
        return
    }
    if (event.code == "Enter"){
        textArea.innerHTML += '\n';
        allKey[41].classList.add('active');
        return
    }
    if(allKey[0].innerHTML == '`'){
    if (event.code == "CapsLock"){
        if(allKey[29].classList.contains('active')){
            allKey[29].classList.remove('active');
            allKey.forEach((el, i) => el.innerHTML = AllArray.default[i])
        }else{
            allKey[29].classList.add('active');
            allKey.forEach((el, i) => el.innerHTML = AllArray.caps[i]);
        }
    }
   else{
    for(let i = 0; i< allKey.length; i++){
        if(event.code ==  AllArray.eventArr[i]){
            allKey[i].classList.add('active');
            if(allKey[29].classList.contains('active')){
                textArea.innerHTML += AllArray.caps[i]
            }else{
            textArea.innerHTML += AllArray.default[i];
            }
        }
    }
    }
}else{
    if (event.code == "CapsLock"){
        if(allKey[29].classList.contains('active')){
            allKey[29].classList.remove('active');
            allKey.forEach((el, i) => el.innerHTML = AllArray.ru[i])
        }else{
            allKey[29].classList.add('active');
            // allKey.forEach((el, i) => el.innerHTML = AllArray.default[i].toUpperCase());
            allKey.forEach((el, i) => el.innerHTML = AllArray.ruCaps[i]);
        }
    }
   else{
    for(let i = 0; i< allKey.length; i++){
        if(event.code ==  AllArray.eventArr[i]){
            allKey[i].classList.add('active');
            if(allKey[29].classList.contains('active')){
                textArea.innerHTML += AllArray.ruCaps[i]
            }else{
            textArea.innerHTML += AllArray.ru[i];
            }
        }
    }
    }
}
} )
document.addEventListener('keyup', (event)=>{
    if (event.code == "CapsLock"){
        return
    }
    for(let i = 0; i< allKey.length; i++){
        if(event.code == AllArray.eventArr[i]){
            allKey[i].classList.remove('active');
        }
    }
} )

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // все ли клавиши из набора нажаты?
        if (!pressed.has(code)) {
          return;
        }
      }

      // да, все

      // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
      // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
      // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    
      pressed.clear();
   
      func();
     
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);

    });

  }

  function changeLanguage(){
      if(allKey[0].innerHTML == "`"){
        allKey.forEach((el, i) => el.innerHTML = AllArray.ru[i])
      } else{
        allKey.forEach((el, i) => el.innerHTML = AllArray.default[i])
      }
  }

  runOnKeys(
    () => changeLanguage(),
    "AltLeft",
    "ShiftLeft",
  );

// allKey.forEach(el => el.addEventListener('click', ()=>{
//     el.classList.add('active')
// }
// ))

// document.addEventListener('keyup', (event)=>{
//     if (event.code == 'KeyX') {
//     allKey[0].classList.remove('active') 
//     }
// } )


// document.onkeypress = function (){
//     eventArr.push(event.code)
//     console.log(eventArr)
// }
