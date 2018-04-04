const lettersInput = document.getElementById('lettersInput');
const signOutput = document.getElementById('signOutput');
const inputForm = document.getElementById('inputForm');

// Prevent Default
inputForm.addEventListener('submit', e => {
  e.preventDefault();
});


lettersInput.addEventListener('input', (e) => {
  let letter = e.target.value.split('');

  //myArray.push(lettersInput.value)
  // console.log(letter);

  if(letter === null){
    console.log(signOutput.removeChild(signOutput.childNodes[1]));
    //signOutput.innerHTML = ``;
  } else{
  signOutput.innerHTML += `
    <img src="./img/sign${letter}.png" class="img-fluid">
  `;
  }

  //console.log(letter);
  // for(i = 0; i < letter.length; i++){
  //   console.log(letter[i]);
  // }
});

function pushData(){
  lettersInput.addEventListener('keyup',(e)=>{
    let test = e.key;
    console.log(e.key);
    if (test === null) {
      console.log(signOutput.removeChild(signOutput.childNodes[1]));
      //signOutput.innerHTML = ``;
    } else {
      signOutput.innerHTML += `
    <img src="./img/sign${test}.png" class="img-fluid">
  `;
    }
  });
}
pushData();

console.log(lettersInput.value);



// console.log(lettersInput.value);
