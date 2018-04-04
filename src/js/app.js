const lettersInput = document.getElementById('lettersInput');
const signOutput = document.getElementById('signOutput');

lettersInput.addEventListener('keyup', (e) => {
  let letter = e.target.value;

  if(letter === ''){
    signOutput.innerHTML = ``;
  } else{
  // signOutput.innerHTML = `
  //   <img src="./img/sign${letter}.png" class="img-fluid">
  // `;


  // letter.split(' ').forEach(lett => {
  //   let newLetter = '';

  //   signOutput.innerHTML += `
  //   <img src="./img/sign${lett}.png" class="img-fluid">
  // `;
  //   });


  let newLetter = letter.split('');

  for(aLetter of newLetter){
    signOutput.innerHTML += `
    <img src="./img/sign${aLetter}.png" class="img-fluid">
  `;  
}
  
  //console.log(newLetter);
  }
});

function takeALetter(str){
  var aLetter = str.split('');
  console.log(aLetter);
}