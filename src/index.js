const body = document.querySelector('body');
const keyboardwrapper = document.createElement('div');
keyboardwrapper.classList.add('keyboard-wrapper');
const textArea = document.createElement('textarea');
body.insertBefore(keyboardwrapper, body.firstChild);
body.insertBefore(textArea, keyboardwrapper);

const end = textArea.value.length;
textArea.setSelectionRange(end, end);

const word = document.createElement('div');
word.classList.add('key');
word.innerHTML = '1';

for (let i = 0; i < 64; i += 1) {
  keyboardwrapper.appendChild(word.cloneNode(true));
}

const AllArray = {
  default: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  shift: ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '/', 'DEL', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  caps: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  ruCaps: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  ruShift: ['Ё', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ᐃ', 'Shift', 'Win', 'Ctrl', 'Alt', 'Alt', ' ', 'ᐊ', 'ᐁ', 'ᐅ', 'Ctrl'],
  eventArr: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'MetaLeft', 'ControlLeft', 'AltLeft', 'AltRight', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
};

const allKey = document.querySelectorAll('.key');

allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.default[i]; });

// allKey.forEach((el, i) => { const item = el; item.dataset.event = AllArray.eventArr[i]; });

allKey.forEach((el, i) => el.addEventListener('click', () => {
  if (allKey[29].classList.contains('active')) {
    textArea.value += AllArray.caps[i];
  } else {
    textArea.value += AllArray.default[i];
  }
}));

let isDiffLang = false;

// function delSelect(){
//   textArea.focus();

//   const startPos = textArea.selectionStart;
//   const endPos = textArea.selectionEnd;
//   const text = textArea.value;
//   textArea.setSelectionRange(startPos, endPos);
//   text.substring(startPos, endPos);

//   if(startPos == endPos){

//   }else{

//   }
// }

document.addEventListener('keydown', (event) => {
  

  if (event.code === 'Backspace') {
    allKey[13].classList.add('active');
    textArea.focus();
    return;
  }
  if (event.code === 'Delete') {
    allKey[28].classList.add('active');
    textArea.focus();
    return;
  }
  event.preventDefault();
  // if (event.code === 'ShiftLeft') {
  //   allKey[42].classList.add('active');
  //   return;
  // }
  // if (event.code === 'ShiftRight') {
  //   allKey[54].classList.add('active');
  //   return;
  // }
  if (event.code === 'AltLeft') {
    allKey[57].classList.add('active');
    textArea.value += '';
    return;
  }
  if (event.code === 'AltRight') {
    allKey[58].classList.add('active');
    textArea.value += '';
    return;
  }
  if (event.code === 'MetaLeft') {
    allKey[55].classList.add('active');
    textArea.value += '';
    return;
  }
  if (event.code === 'Tab') {
    textArea.value += '    ';
    allKey[14].classList.add('active');
    return;
  }
  if (event.code === 'ControlLeft') {
    allKey[56].classList.add('active');
    textArea.value += '';
    return;
  }
  if (event.code === 'ControlRight') {
    allKey[63].classList.add('active');
    textArea.value += '';
    return;
  }
  if (event.code === 'Enter') {
    allKey[41].classList.add('active');
    textArea.value += '\n';
    return;
  }
  if (allKey[42].classList.contains('active')){
    allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.ruShift[i]; });
    textArea.value += AllArray.ruShift[1];
  }
  if (event.code === 'CapsLock') {
    if (allKey[29].classList.contains('active')) {
      allKey[29].classList.remove('active');
      if (isDiffLang === true) {
        allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.ru[i]; });
      } else {
        allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.default[i]; });
      }
    } else {
      allKey[29].classList.add('active');
      if (isDiffLang === true) {
        allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.ruCaps[i]; });
      } else {
        allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.caps[i]; });
      }
    }
  } else {
    for (let i = 0; i < allKey.length; i += 1) {
      if (event.code === AllArray.eventArr[i]) {
        allKey[i].classList.add('active');
        if (allKey[29].classList.contains('active')) {
          if (isDiffLang === true) {
            textArea.value += AllArray.ruCaps[i];
          } else {
            textArea.value += AllArray.caps[i];
          }
        } else if (isDiffLang === true) {
          textArea.value += AllArray.ru[i];
        } else {
          textArea.value += AllArray.default[i];
        }
      }
    }
  }
}
);

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.default[i]; });
  }
  if (event.code === 'CapsLock') {
    return;
  }
  for (let i = 0; i < allKey.length; i += 1) {
    if (event.code === AllArray.eventArr[i]) {
      allKey[i].classList.remove('active');
    }
  }
});

function twoKeys(func, ...keys) {
  const set = new Set();

  function onKeyDown(event) {
    keys.forEach((key) => {
      if (event.code === key) set.add(key);
    });

    if (keys.length === set.size) func();
  }

  function onKeyUp() {
    set.clear();
  }

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
}

function changeLanguage() {
  if (allKey[29].classList.contains('active')) {
    if (isDiffLang === false) {
      allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.ruCaps[i]; });
      isDiffLang = true;
    } else {
      allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.caps[i]; });
      isDiffLang = false;
    }
  } else if (isDiffLang === false) {
    allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.ru[i]; });
    isDiffLang = true;
  } else {
    allKey.forEach((el, i) => { const item = el; item.innerHTML = AllArray.default[i]; });
    isDiffLang = false;
  }
}

twoKeys(
  () => changeLanguage(),
  'AltLeft',
  'ControlLeft',
);
