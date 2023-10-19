// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

function showKeyCodesAndWord(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';
  
    const keyCodes = {
      'e.key' : e.key === ' ' ? 'Space' : e.key,
      'e.keyCode' : e.keyCode,
      'e.code' : e.code,
    };
  
  for(let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
  
  
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);
  
    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);
  
    insert.appendChild(div);
    }
  }
  
  
  window.addEventListener('keydown', showKeyCodesAndWord);
  
  
  
  
  
  
  // Method 2
  // function showKeyCodes(e) {
  //   const insert = document.getElementById('insert');
  //   insert.innerHTML = '';
  
  //   const keyCodes = {
  //     'e.key': e.key === ' ' ? 'Space' : e.key,
  //     'e.keyCode': e.keyCode,
  //     'e.code': e.code,
  //   };
  
  //   for (let key in keyCodes) {
  //     const div = document.createElement('div');
  //     div.className = 'key';
  //     const small = document.createElement('small');
  
  //     const keyText = document.createTextNode(key);
  //     const valueText = document.createTextNode(keyCodes[key]);
  
  //     small.appendChild(keyText);
  //     div.appendChild(valueText);
  //     div.appendChild(small);
  
  //     insert.appendChild(div);
  //   }
  // }
  
  // window.addEventListener('keydown', showKeyCodes);
  
  
  // if (e.key === 'a') {
  //   'Appple'
  // } else if (e.key === 'b') {
  //   return 'Banana'
  // } else if (e.key === 'c') {
  //   return 'Carrot'
  // } else if (e.key === 'd') {
  //   return 'Dog'
  // }  else if (e.key === 'e') {
  //   return 'Elf'
  // } else if (e.key === 'f') {
  //   return 'Frog'
  // } else if (e.key === 'g') {
  //   return 'Grape'
  // } else if (e.key === 'h') {
  //   return 'Hat'
  // } else if (e.key === 'i') {
  //   return 'Ice'
  // } else if (e.key === 'j') {
  //   return 'Juice'
  // } else if (e.key === 'k') {
  //   return 'Kite'
  // } else if (e.key === 'l') {
  //   return 'Lion'
  // } else if (e.key === 'm') {
  //   return 'Milk'
  // } else if (e.key === 'n') {
  //   return 'Note'
  // } else if (e.key === 'o') {
  //   return 'Ostrich'
  // } else if (e.key === 'p') {
  //   return 'Pigeon'
  // } else if (e.key === 'q') {
  //   return 'Queen'
  // } else if (e.key === 'r') {
  //   return 'Rice'
  // } else if (e.key === 's') {
  //   return 'Sloth'
  // } else if (e.key === 't') {
  //   return 'Tiger'
  // } else if (e.key === 'u') {
  //   return 'Umbrella'
  // } else if (e.key === 'v') {
  //   return 'Violin'
  // } else if (e.key === 'w') {
  //   return 'Watch'
  // } else if (e.key === 'x') {
  //   return 'Xylophone'
  // } else if (e.key === 'y') {
  //   return 'Yarn'
  // } else if (e.key === 'z') {
  //  return 'Zoo'
  // }
  
  
  // const words = {
  //   'a': 'Apple',
  //   'b': 'Banana',
  //   'c': 'Carrot',
  //   'd': 'Dog',
  //   'e': 'Elf',
  //   'f': 'Frog',
  //   'g': 'Grape',
  //   'h': 'Hat',
  //   'i': 'Ice',
  //   'j': 'Juice',
  //   'k': 'Kite',
  //   'l': 'Lion',
  //   'm': 'Milk',
  //   'n': 'Note',
  //   'o': 'Ostrich',
  //   'p': 'Pigeon',
  //   'q': 'Queen',
  //   'r': 'Rice',
  //   's': 'Sloth',
  //   't': 'Tiger',
  //   'u': 'Umbrella',
  //   'v': 'Violin',
  //   'w': 'Watch',
  //   'x': 'Xylophone',
  //   'y': 'Yarn',
  //   'z': 'Zoo'
  // };
  
  // for(let character in words) {
  // const div = document.createElement('div');
  // div.className = 'key';
  // const small = document.createElement('small');
  
  // const wordText = document.createTextNode(character);
  // const wordValueText = document.createTextNode(words[character]);
  
  // small.appendChild(wordText);
  // div.appendChild(wordValueText);
  // div.appendChild(small);
  
  // insert.appendChild(div);
  // }