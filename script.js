function showKeyCodes(e) {
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
  const associatedWord = (e) => {
  const words = {
    'a': 'Apple',
    'b': 'Banana',
    'c': 'Carrot',
    'd': 'Dog',
    'e': 'Elf',
    'f': 'Frog',
    'g': 'Grape',
    'h': 'Hat',
    'i': 'Ice',
    'j': 'Juice',
    'k': 'Kite',
    'l': 'Lion',
    'm': 'Milk',
    'n': 'Note',
    'o': 'Ostrich',
    'p': 'Pigeon',
    'q': 'Queen',
    'r': 'Rice',
    's': 'Sloth',
    't': 'Tiger',
    'u': 'Umbrella',
    'v': 'Violin',
    'w': 'Watch',
    'x': 'Xylophone',
    'y': 'Yarn',
    'z': 'Zoo'
};

  const key = e.key;
  const word = words[key]


  const wordText = document.createTextNode(key);
  const wordValueText = document.createTextNode(word);

  const div = document.createElement('div');
  div.className = 'key';
  const small = document.createElement('small');

  small.appendChild(wordText);
  div.appendChild(wordValueText);
  div.appendChild(small);
  
  insert.appendChild(div);
  }


window.addEventListener('keydown', showKeyCodes);
window.addEventListener('keydown', associatedWord);



  
  
  
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
  // // }