let innerElementx = document.querySelector('.js-button');
console.log(innerElementx.classList.contains('js-button'));

function buttonClicked(buttonType){
  let innerElement = document.querySelector(`.js-${buttonType}-button`);
  
  if (innerElement.classList.contains('is-toggled')){
    innerElement.classList.remove('is-toggled');
  } else {
    turnoffpreviousbutton();
    innerElement.classList.add('is-toggled');
  }    
}

function turnoffpreviousbutton(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}