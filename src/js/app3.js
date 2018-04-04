const lettersInput = document.getElementById('lettersInput');
const signOutput = document.getElementById('signOutput');
const inputForm = document.getElementById('inputForm');

inputForm.addEventListener('submit', e => {
  e.preventDefault();
});

lettersInput.addEventListener('input', (e) => {
  let letter = e.data;
  console.log(letter);

  if(letter === null){
    console.log(signOutput.removeChild(signOutput.childNodes[1]));
    //signOutput.innerHTML = ``;
  } else{
  signOutput.innerHTML += `
    <img src="./img/sign${letter}.png" class="img-fluid">
  `;
  }
});

console.log(lettersInput.value);