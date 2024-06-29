var contador1 = document.querySelector('.cont1');

document.querySelector('button').addEventListener('click', function(){
  var numero1 = parseInt(contador1.textContent) + 1;
  contador1.textContent = numero1;
});

